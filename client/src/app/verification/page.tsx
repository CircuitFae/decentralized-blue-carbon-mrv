// file: client/src/app/verification/page.tsx
"use client"; // 1. To use hooks like useState, this must be a Client Component.

import { Sidebar } from "@/components/Sidebar";
import VerificationCard, { ProjectForVerification } from "@/components/VerificationCard";
import { useState } from "react"; // 2. Import the 'useState' hook from React.

// This is our full list of projects, which would normally come from a backend.
const allProjects: ProjectForVerification[] = [
  { id: 'PROJ-003', name: 'Goa Coastal Ecosystem', submittedBy: 'Goa Environmental Foundation', date: '2023-09-10', status: 'Under Review' },
  { id: 'PROJ-002', name: 'Kerala Backwaters Conservation', submittedBy: 'EcoFund India', date: '2023-09-02', status: 'Pending' },
  { id: 'PROJ-001', name: 'Sundarbans Restoration', submittedBy: 'Mangrove Savers NGO', date: '2023-08-15', status: 'Approved' },
  { id: 'PROJ-005', name: 'Gujarat Salt Pans Afforestation', submittedBy: 'Coastal Trust', date: '2023-09-11', status: 'Pending' },
  { id: 'PROJ-004', name: 'Andaman Seagrass Project', submittedBy: 'Oceanic Trust', date: '2023-07-20', status: 'Requires Revision' },
];

// Define the possible tab names for type safety.
type StatusTab = 'Under Review' | 'Pending' | 'Approved' | 'Requires Revision';

export default function VerificationPage() {
  // 3. Create a state variable to remember the active tab.
  // It starts as 'Under Review'.
  const [activeTab, setActiveTab] = useState<StatusTab>('Under Review');

  // 4. This list is now dynamic: it filters all projects based on the active tab.
  const filteredProjects = allProjects.filter(p => p.status === activeTab);

  const TABS: StatusTab[] = ['Under Review', 'Pending', 'Approved', 'Requires Revision'];

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <main className="flex-grow p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-cyan-400">Verification Queue</h1>
          <p className="text-gray-400 mt-1">Review and approve submitted carbon credit projects.</p>
        </header>

        <div className="flex space-x-2 border-b border-gray-700 mb-6">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)} // 5. When a button is clicked, it updates the state.
              className={`py-2 px-4 font-semibold transition-colors ${
                activeTab === tab 
                  ? 'text-white border-b-2 border-cyan-500' 
                  : 'text-gray-400 hover:border-b-2 hover:border-gray-500'
              }`}
            >
              {/* We also add a count to each tab */}
              {tab} ({allProjects.filter(p => p.status === tab).length})
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(proj => <VerificationCard key={proj.id} project={proj} />)
          ) : (
            <p className="text-gray-500 text-center mt-8">No projects in this category.</p>
          )}
        </div>
      </main>
    </div>
  );
}