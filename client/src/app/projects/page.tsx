// file: client/src/app/projects/page.tsx
import { Sidebar } from "@/components/Sidebar";
import React from 'react';

// Placeholder data to match your screenshot
const projectsData = [
  { id: 'PROJ-001', name: 'Sundarbans Restoration', location: 'West Bengal', status: 'Approved', date: '2023-08-15' },
  { id: 'PROJ-002', name: 'Kerala Backwaters Conservation', location: 'Kerala', status: 'Pending', date: '2023-09-02' },
  { id: 'PROJ-003', name: 'Goa Coastal Ecosystem', location: 'Goa', status: 'Under Review', date: '2023-09-10' },
  { id: 'PROJ-004', name: 'Andaman Seagrass Project', location: 'Andaman Islands', status: 'Approved', date: '2023-07-20' },
];

const ProjectsPage = () => {
  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <main className="flex-grow p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-cyan-400">Projects</h1>
          <div className="flex space-x-4">
            <button className="bg-gray-700 hover:bg-gray-600 font-semibold py-2 px-4 rounded-md">Export Data</button>
            <button className="bg-cyan-600 hover:bg-cyan-700 font-bold py-2 px-4 rounded-md">+ Add New Project</button>
          </div>
        </header>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <table className="w-full text-left">
            <thead className="border-b border-gray-600">
              <tr>
                <th className="p-4">Project ID</th>
                <th className="p-4">Project Name</th>
                <th className="p-4">Location</th>
                <th className="p-4">Status</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {projectsData.map((project, index) => (
                <tr key={project.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                  <td className="p-4">{project.id}</td>
                  <td className="p-4 font-medium">{project.name}</td>
                  <td className="p-4">{project.location}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      project.status === 'Approved' ? 'bg-green-500/20 text-green-400' :
                      project.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="p-4">{project.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;