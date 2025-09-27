// file: client/src/components/SubmissionsTable.tsx
import React from 'react';

// Placeholder data for recent data submissions
const submissions = [
  { id: 'DATA-034', project: 'Sundarbans Restoration', type: 'Biomass Scan', date: '2023-09-26', status: 'Verified' },
  { id: 'DATA-033', project: 'Andaman Seagrass', type: 'Water Salinity', date: '2023-09-25', status: 'Pending' },
  { id: 'DATA-032', project: 'Kerala Backwaters', type: 'Satellite Imagery', date: '2023-09-22', status: 'Requires Revision' },
  { id: 'DATA-031', project: 'Sundarbans Restoration', type: 'Sediment Core', date: '2023-09-21', status: 'Verified' },
];

const SubmissionsTable = () => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 mt-8">
    <h3 className="text-lg font-bold text-white mb-4">Recent Data Submissions</h3>
    <table className="w-full text-left">
      <thead className="border-b border-gray-600">
        <tr>
          <th className="p-4">Submission ID</th>
          <th className="p-4">Project Name</th>
          <th className="p-4">Data Type</th>
          <th className="p-4">Date</th>
          <th className="p-4">Status</th>
        </tr>
      </thead>
      <tbody>
        {submissions.map((sub) => (
          <tr key={sub.id} className="border-b border-gray-700 hover:bg-gray-700/50">
            <td className="p-4">{sub.id}</td>
            <td className="p-4 font-medium">{sub.project}</td>
            <td className="p-4">{sub.type}</td>
            <td className="p-4">{sub.date}</td>
            <td className="p-4">
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                sub.status === 'Verified' ? 'bg-green-500/20 text-green-400' :
                sub.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'
              }`}>
                {sub.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SubmissionsTable;