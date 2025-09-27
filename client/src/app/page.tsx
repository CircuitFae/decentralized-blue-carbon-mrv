// file: client/src/app/page.tsx
"use client"; // This page now needs to be a Client Component to use state

import { Sidebar } from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import Header from "@/components/Header";
import RecentActivities from "@/components/RecentActivities";
import BlockchainStatus from "@/components/BlockchainStatus";
import CarbonChart from "@/components/CarbonChart";
import { useState, useEffect } from "react"; // 1. Import React hooks

export default function Home() {
  // 2. Create state for the project count and loading status
  const [totalProjects, setTotalProjects] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // 3. This effect simulates fetching data when the page loads
  useEffect(() => {
    setIsLoading(true);
    // Simulate a 2-second network delay
    setTimeout(() => {
      setTotalProjects(128); // This is our placeholder data for now
      setIsLoading(false); // Turn off loading
    }, 2000);
  }, []);

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <main className="flex-grow p-8">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Carbon Sequestered" value="2,847 tCO₂" />
          {/* 4. This card is now dynamic */}
          <StatCard 
            title="Total Projects" 
            value={totalProjects.toString()} 
            isLoading={isLoading} 
          />
          <StatCard title="Verification Progress" value="78%" />
          <StatCard title="Data Quality Score" value="94.2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold text-white mb-4">Carbon Sequestration Trends</h3>
            <CarbonChart />
          </div>
          <div className="lg:col-span-1 space-y-8">
            <RecentActivities />
            <BlockchainStatus />
          </div>
        </div>
      </main>
    </div>
  );
}