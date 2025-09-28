// file: client/src/components/NccrProjectTable.tsx
"use client";
import React from 'react';

// This is the updated data from your screenshots
const allProjects = [
  { id: 'BCP-001', name: 'Sunderbans Mangrove Afforestation', developer: 'GreenTide Renewables', standard: 'Verra VCS', methodology: 'VM0007', location: 'India', status: 'Registered' },
  { id: 'BCP-002', name: 'Coastal Wetlands Restoration', developer: 'AquaCarbon Solutions', standard: 'Gold Standard', methodology: 'GS4GG', location: 'Vietnam', status: 'Registered' },
  { id: 'BCP-003', name: 'Seagrass Meadow Protection', developer: 'BlueOcean Reserve', standard: 'Verra VCS', methodology: 'VM0033', location: 'Indonesia', status: 'Registered' },
];

const NccrProjectTable = ({ filter }: { filter: string }) => {
  const filteredProjects = allProjects.filter(project => {
    if (filter === 'All Projects') return true;
    // This is a placeholder; you'd add logic for 'Approved' and 'Pending' here
    return true; 
  });

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 mt-8">
      <h3 className="text-lg font-bold text-white mb-4">{filter}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-gray-600">
            <tr className="text-sm text-gray-400">
              <th className="p-4">Project ID</th>
              <th className="p-4">Project Name & Developer</th>
              <th className="p-4">Standard & Methodology</th>
              <th className="p-4">Location</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => (
              <tr key={project.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                <td className="p-4 font-mono text-sm">{project.id}</td>
                <td className="p-4">
                  <p className="font-medium text-white">{project.name}</p>
                  <p className="text-xs text-gray-400">{project.developer}</p>
                </td>
                <td className="p-4">
                  <p className="font-medium text-white">{project.standard}</p>
                  <p className="text-xs text-gray-400">{project.methodology}</p>
                </td>
                <td className="p-4">{project.location}</td>
                <td className="p-4">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400">
                    {project.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NccrProjectTable;