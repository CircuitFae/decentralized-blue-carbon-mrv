// src/app/dashboard/page.tsx (or your main dashboard page file)
import React from 'react';

// Import all your newly typed .tsx components
// IMPORTANT: Double-check that these import paths are correct for your project!
import NccrSidebar from '../../components/NccrSidebar';
import NccrHeader from '../../components/NccrHeader';
import NccrStatCard from '../../components/NccrStatCard';
import NccrSystemActivityChart from '../../components/NccrSystemActivityChart';
import NccrRecentActions from '../../components/NccrRecentActions';
import NccrQuickAccess from '../../components/NccrQuickAccess';
import NccrSystemStatus from '../../components/NccrSystemStatus';

// Import icons for StatCards
import { FiBarChart, FiFlag, FiCheckCircle, FiUsers } from 'react-icons/fi';

const DashboardPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-slate-900 text-gray-300">
      <NccrSidebar />
      <main className="flex-1 p-8">
        <NccrHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
          <NccrStatCard title="Pending Approvals" value="48" icon={<FiBarChart size={24} />} />
          <NccrStatCard title="Data Flagged" value="12" icon={<FiFlag size={24} />} />
          <NccrStatCard title="Credits Issued (MT)" value="8,000,000" icon={<FiCheckCircle size={24} />} />
          <NccrStatCard title="Active Users" value="5,345" icon={<FiUsers size={24} />} />
        </div>
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