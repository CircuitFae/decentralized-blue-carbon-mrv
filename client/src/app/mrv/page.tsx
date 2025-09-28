// file: client/src/app/mrv/page.tsx
import { Sidebar } from "@/components/Sidebar";
import DataUpload from "@/components/DataUpload";
import SubmissionsTable from "@/components/SubmissionsTable";
import 'leaflet/dist/leaflet.css';
import ProjectLocations from "@/components/ProjectLocations";

export default function MrvPage() {
  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <main className="flex-grow p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-cyan-400">MRV Dashboard</h1>
          <p className="text-gray-400 mt-1">
            Submit and track your monitoring, reporting, and verification data.
          </p>
        </header>

        {/* This is your original, untouched section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
              <DataUpload />
          </div>
          <div className="lg:col-span-2">
              <SubmissionsTable />
          </div>
        </div>

        {/* NEW: A styled container for our map component */}
        {/* This creates the "card" effect safely on this page */}
        <div className="mt-8 bg-slate-800 p-6 rounded-xl">
          <ProjectLocations />
        </div>

      </main>
    </div>
  );
}