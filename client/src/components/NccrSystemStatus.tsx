// src/components/NccrSystemStatus.tsx
import React from 'react';

const NccrSystemStatus: React.FC = () => (
  <div className="bg-slate-800 p-6 rounded-xl h-full flex flex-col justify-between">
    <div>
      <h3 className="text-white font-bold text-lg mb-4">System Status</h3>
      <div className="flex justify-between text-sm mb-2">
        <span>Policy Version:</span><span>1.2.5 Adilo up Update</span>
      </div>
       <div className="flex justify-between text-sm mb-2">
        <span>Latest Built:</span><span>2024-07-20</span>
      </div>
      <div className="flex justify-between text-sm">
        <span>Pending Disputes:</span><span>3</span>
      </div>
    </div>
    <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded-lg w-full mt-4">
      Update Policies
    </button>
  </div>
);
export default NccrSystemStatus;