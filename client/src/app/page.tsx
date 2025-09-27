// file: client/src/app/page.tsx
import { Sidebar } from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import DataUpload from "@/components/DataUpload";
import Header from "@/components/Header";
import CarbonChart from "@/components/CarbonChart"; // Import the new chart component

export default function Home() {
  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <main className="flex-grow p-8">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Carbon Sequestered" value="2,847 tCO₂" />
          <StatCard title="Active Data Sources" value="156" />
          <StatCard title="Verification Progress" value="78%" />
          <StatCard title="Data Quality Score" value="94.2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Area */}
          <div className="lg:col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold text-white mb-4">Carbon Sequestration Trends</h3>
            <CarbonChart />
          </div>

          {/* Data Upload Area */}
          <div className="lg:col-span-1">
            <DataUpload />
          </div>
        </div>
      </main>
    </div>
  );
}