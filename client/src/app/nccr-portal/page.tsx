// src/app/dashboard/page.tsx (or wherever your main page.tsx is located for the dashboard route)

import React from 'react';
// Import all your NCCR components
import NccrSidebar from '../../components/NccrSidebar'; // Adjust path if necessary
import NccrHeader from '../../components/NccrHeader'; // Adjust path if necessary
import NccrStatCard from '../../components/NccrStatCard'; // Adjust path if necessary
import NccrSystemActivityChart from '../../components/NccrSystemActivityChart'; // Adjust path if necessary
import NccrRecentActions from '../../components/NccrRecentActions'; // Adjust path if necessary
import NccrQuickAccess from '../../components/NccrQuickAccess'; // Adjust path if necessary
import NccrSystemStatus from '../../components/NccrSystemStatus'; // Adjust path if necessary

// Import icons for StatCards
import { FiBarChart, FiFlag, FiCheckCircle, FiUsers } from 'react-icons/fi';

// This is your main page component that renders the entire dashboard structure
const DashboardPage: React.FC = () => {
  return (
    // This top-level flex container is crucial for the overall layout
    <div className="flex min-h-screen bg-slate-900 text-gray-300">
      
      {/* Renders the Sidebar */}
      <NccrSidebar />
      
      {/* Main content area that takes the remaining space */}
      <main className="flex-1 p-8">
        <NccrHeader />
        
        {/* Stats Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
          <NccrStatCard title="Pending Approvals" value="48" icon={<FiBarChart size={24} />} />
          <NccrStatCard title="Data Flagged" value="12" icon={<FiFlag size={24} />} />
          <NccrStatCard title="Credits Issued (MT)" value="8,000,000" icon={<FiCheckCircle size={24} />} />
          <NccrStatCard title="Active Users" value="5,345" icon={<FiUsers size={24} />} />
        </div>

        {/* The main grid for the chart and other widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <NccrSystemActivityChart />
          </div>
          <div>
            <NccrRecentActions />
          </div>
          <div className="lg:col-span-2">
            <NccrQuickAccess />
          </div>
          <div>
            <NccrSystemStatus />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;