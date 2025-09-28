// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title BlueCarbonRegistry
 * @dev A contract to register blue carbon projects, manage their lifecycle,
 * and issue tokenized carbon credits as ERC721 NFTs.
 * The contract owner (e.g., NCCR) has administrative privileges.
 */
contract BlueCarbonRegistry is ERC721, ERC721URIStorage, Ownable {
    // Counter for project IDs
    uint256 private _projectCounter;
    // Counter for token IDs (carbon credits)
    uint256 private _tokenCounter;

    // Enum to represent the status of a project
    enum ProjectStatus {
        Pending,
        UnderReview,
        Approved,
        RequiresRevision,
        Rejected
    }

    // Struct to hold all information about a blue carbon project
    struct Project {
        uint256 id;
        string name;
        string description;
        address owner; // Address of the NGO, community, etc.
        ProjectStatus status;
        uint256 creationDate;
    }

    // Mapping from project ID to Project struct
    mapping(uint256 => Project) public projects;
    // Mapping from a token ID to the project ID it belongs to
    mapping(uint256 => uint256) public tokenToProject;

    // Event emitted when a new project is registered
    event ProjectRegistered(
        uint256 indexed projectId,
        string name,
        address indexed owner
    );

    // Event emitted when a project's status is updated by the admin
    event ProjectStatusUpdated(
        uint256 indexed projectId,
        ProjectStatus newStatus
    );

    // Event for when carbon credits (NFTs) are issued for a project
    event CarbonCreditsIssued(
        uint256 indexed projectId,
        uint256 indexed tokenId,
        uint256 amount
    );

    /**
     * @dev Sets the name and symbol for the ERC721 token collection.
     */
    constructor() ERC721("Blue Carbon Credit", "BCC") Ownable(msg.sender) {}

    /**
     * @dev Allows NGOs or communities to register a new blue carbon project.
     * @param _name The name of the project.
     * @param _description A detailed description of the project.
     */
    function registerProject(string memory _name, string memory _description) external {
        _projectCounter++;
        uint256 newProjectId = _projectCounter;

        projects[newProjectId] = Project({
            id: newProjectId,
            name: _name,
            description: _description,
            owner: msg.sender,
            status: ProjectStatus.Pending,
            creationDate: block.timestamp
        });

        emit ProjectRegistered(newProjectId, _name, msg.sender);
    }

    /**
     * @dev Allows the contract owner (admin) to update the status of a project.
     * @param _projectId The ID of the project to update.
     * @param _newStatus The new status for the project.
     */
    function updateProjectStatus(uint256 _projectId, ProjectStatus _newStatus) external onlyOwner {
        Project storage project = projects[_projectId];
        require(project.id != 0, "Project does not exist");
        project.status = _newStatus;
        emit ProjectStatusUpdated(_projectId, project.status);
    }

    /**
     * @dev Allows the admin to issue carbon credits (NFTs) for an approved project.
     * Each credit is a unique NFT minted to the project owner.
     * @param _projectId The ID of the project receiving the credits.
     * @param _carbonAmount The number of carbon credits (NFTs) to issue.
     * @param _tokenURI A URI pointing to the metadata for this credit (e.g., IPFS).
     */
    function issueCarbonCredits(uint256 _projectId, uint256 _carbonAmount, string memory _tokenURI) external onlyOwner {
        Project storage project = projects[_projectId];
        require(project.id != 0, "Project does not exist");
        require(project.status == ProjectStatus.Approved, "Project is not approved");
        require(_carbonAmount > 0, "Amount must be greater than zero");

        for (uint i = 0; i < _carbonAmount; i++) {
            _tokenCounter++;
            uint256 newTokenId = _tokenCounter;
            _safeMint(project.owner, newTokenId);
            _setTokenURI(newTokenId, _tokenURI);
            tokenToProject[newTokenId] = _projectId;
            emit CarbonCreditsIssued(_projectId, newTokenId, 1);
        }
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}