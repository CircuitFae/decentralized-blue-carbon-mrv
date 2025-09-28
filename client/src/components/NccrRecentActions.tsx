// src/components/NccrRecentActions.tsx
import React from 'react';

const NccrRecentActions: React.FC = () => (
  <div className="bg-slate-800 p-6 rounded-xl h-full">
    <h3 className="text-white font-bold text-lg mb-4">Recent Actions</h3>
    <ul>
      <li className="border-b border-slate-700 py-2">
        <p>Project 'Agri-Pilot' appt revised by 5 minrainX</p>
        <small className="text-gray-500">5 mins ago</small>
      </li>
      <li className="border-b border-slate-700 py-2">
        <p>New MRV data uploaded for 'CRO223-01'</p>
        <small className="text-gray-500">1 hours [auto]</small>
      </li>
      <li className="py-2">
        <p>User 'Cust23...abc' connected.</p>
        <small className="text-gray-500">1 day ago</small>
      </li>
    </ul>
  </div>
);
export default NccrRecentActions;