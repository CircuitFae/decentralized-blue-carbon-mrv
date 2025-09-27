// file: client/src/components/BlockchainStatus.tsx
import React from 'react';

const BlockchainStatus = () => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <h3 className="text-lg font-bold text-white mb-4">Blockchain Status</h3>
    <div className="space-y-3">
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">Current Network:</span>
        <span className="font-semibold text-green-400">Sepolia Testnet</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">Latest Block:</span>
        <span className="font-semibold text-white">5,123,456</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">Gas Price (Gwei):</span>
        <span className="font-semibold text-white">15</span>
      </div>
    </div>
  </div>
);

export default BlockchainStatus;