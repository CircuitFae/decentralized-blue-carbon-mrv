// file: client/src/components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold text-cyan-400">
          MRV Dashboard
        </h1>
        <p className="text-gray-400 mt-1">
          Monitor, report, and verify blue carbon project data.
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition-colors">
          Export Data
        </button>
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
          Refresh
        </button>
      </div>
    </header>
  );
};

export default Header;