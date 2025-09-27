// file: client/src/components/ConnectWallet.tsx
"use client";

import { useAccount, useConnect, useDisconnect } from 'wagmi';

export function ConnectWallet() {
  const account = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  const connector = connectors[0];

  if (account.status === 'connected') {
    return (
      <button
        type="button"
        onClick={() => disconnect()}
        className="bg-gray-700 hover:bg-gray-600 font-semibold py-2 px-4 rounded-md"
      >
        {`Disconnect ${account.address.slice(0, 6)}...${account.address.slice(-4)}`}
      </button>
    );
  }

  return (
    <button
      key={connector.uid}
      onClick={() => connect({ connector })}
      type="button"
      className="bg-cyan-600 hover:bg-cyan-700 font-bold py-2 px-4 rounded-md"
    >
      Connect Wallet
    </button>
  );
}