// src/components/NccrDashboardPage.js
import React from 'react';
import NccrSidebar from './NccrSidebar';
import NccrHeader from './NccrHeader';
import NccrStatCard from './NccrStatCard';
import NccrSystemActivityChart from './NccrSystemActivityChart';
import NccrRecentActions from './NccrRecentActions';
import NccrQuickAccess from './NccrQuickAccess';
import NccrSystemStatus from './NccrSystemStatus';

// Import icons for StatCards
import { FiBarChart, FiFlag, FiCheckCircle, FiUsers } from 'react-icons/fi';

const NccrDashboardPage = () => {
  return (
    // This top-level flex container is crucial for the layout
    <div className="flex min-h-screen bg-slate-900 text-gray-300">
      
      {/* Renders the Sidebar */}
      <NccrSidebar />
      
      {/* Main content area that takes the remaining space */}
      <main className="flex-1 p-8">
        <NccrHeader />
        
        {/* Stats Cards Section with the correct data */}
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

export default NccrDashboardPage;