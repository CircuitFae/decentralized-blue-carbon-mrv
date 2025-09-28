// src/components/NccrHeader.tsx
import React from 'react';

const NccrHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-3xl font-bold text-white">Admin Dashboard - NCCR</h2>
        <p className="text-gray-400 mt-1">Monitor, report, and verify blue carbon project data.</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg">
          Export Logs
        </button>
        <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg">
          AdnccinName 0xabc...123
        </button>
      </div>
    </div>
  );
};

export default NccrHeader;