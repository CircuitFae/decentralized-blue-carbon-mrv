// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/**
 * @title CarbonCreditMarketplace
 * @dev A simple marketplace for listing and selling Blue Carbon Credit (BCC) NFTs.
 * This contract interacts with the main BlueCarbonRegistry contract.
 */
contract CarbonCreditMarketplace is ReentrancyGuard {
    // Address of the BlueCarbonRegistry NFT contract
    address public immutable bccContractAddress;

    // Struct to represent a listing on the marketplace
    struct Listing {
        address seller;
        uint256 price; // in wei
        bool active;
    }

    // Mapping from the token ID of a BCC NFT to its listing details
    mapping(uint256 => Listing) public listings;

    // Event emitted when a new credit is listed for sale
    event CreditListed(
        uint256 indexed tokenId,
        address indexed seller,
        uint256 price
    );

    // Event emitted when a credit is sold
    event CreditSold(
        uint256 indexed tokenId,
        address indexed seller,
        address indexed buyer,
        uint256 price
    );

    // Event emitted when a listing is cancelled
    event ListingCancelled(uint256 indexed tokenId, address indexed seller);

    /**
     * @dev Sets the address of the main Blue Carbon Credit contract.
     * @param _bccAddress The deployed address of your BlueCarbonRegistry contract.
     */
    constructor(address _bccAddress) {
        bccContractAddress = _bccAddress;
    }

    /**
     * @dev Lists a Blue Carbon Credit NFT for sale.
     * The seller must first approve this marketplace contract to manage their NFT.
     * @param _tokenId The ID of the BCC token to sell.
     * @param _price The selling price in wei.
     */
    function listCredit(uint256 _tokenId, uint256 _price) external {
        require(_price > 0, "Price must be greater than zero");
        
        IERC721 bcc = IERC721(bccContractAddress);
        require(bcc.ownerOf(_tokenId) == msg.sender, "You are not the owner of this credit");
        require(bcc.getApproved(_tokenId) == address(this), "Marketplace not approved to manage this credit");

        listings[_tokenId] = Listing({
            seller: msg.sender,
            price: _price,
            active: true
        });

        emit CreditListed(_tokenId, msg.sender, _price);
    }

    /**
     * @dev Buys a listed carbon credit.
     * The buyer must send the exact price of the listing in ETH.
     * @param _tokenId The ID of the BCC token to buy.
     */
    function buyCredit(uint256 _tokenId) external payable nonReentrant {
        Listing storage listing = listings[_tokenId];
        require(listing.active, "This credit is not listed for sale");
        require(msg.value == listing.price, "Incorrect ETH amount sent");

        address seller = listing.seller;
        
        // Mark as inactive before transfer to prevent re-entrancy attacks
        listing.active = false;

        // Transfer the NFT from the seller to the buyer
        IERC721(bccContractAddress).transferFrom(seller, msg.sender, _tokenId);

        // Send the ETH to the seller
        (bool success, ) = seller.call{value: msg.value}("");
        require(success, "Failed to send funds to seller");

        emit CreditSold(_tokenId, seller, msg.sender, msg.value);
    }

    /**
     * @dev Allows a seller to cancel their listing.
     * @param _tokenId The ID of the BCC token to delist.
     */
    function cancelListing(uint256 _tokenId) external {
        Listing storage listing = listings[_tokenId];
        require(listing.active, "This credit is not listed for sale");
        require(listing.seller == msg.sender, "You are not the seller of this credit");

        listing.active = false;
        emit ListingCancelled(_tokenId, msg.sender);
    }
}