// src/components/ProjectLocations.tsx

"use client";

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// --- (The code for Interface, Mock Data, Icon Fix, and ChangeView remains the same) ---
// --- It's good practice to keep these helper parts inside the component file if they are not used elsewhere ---

// Define the Project interface
interface Project {
  id: number;
  name: string;
  location: string;
  position: [number, number];
  status: 'Active' | 'Verified';
  credits: string;
}

// Mock data
const mockProjects: Project[] = [
    { id: 1, name: 'Sundarbans Mangrove', location: 'Bangladesh', position: [21.9497, 89.1833], status: 'Active', credits: '16,420 tCO₂' },
    { id: 2, name: 'Florida Everglades Conservation', location: 'Florida, USA', position: [25.7617, -80.1918], status: 'Verified', credits: '8,750 tCO₂' },
    // ... add other projects if needed
];

// Icon fix
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Helper component to change map view
const ChangeView = ({ center, zoom }: { center: [number, number]; zoom: number }) => {
  const map = useMap();
  useEffect(() => { map.flyTo(center, zoom, { duration: 2 }); }, [center, zoom, map]);
  return null;
};

// --- Main Project Locations Component ---
const ProjectLocations: React.FC = () => {
  const [mapCenter, setMapCenter] = useState<[number, number]>([20, 0]);
  const [mapZoom, setMapZoom] = useState<number>(2);

  const handleProjectClick = (project: Project) => {
    setMapCenter(project.position);
    setMapZoom(8);
  };

  // CHANGED: The outer div is now simpler. No fixed height or background.
  // The parent component will provide the "card" styling.
  return (
    <div className="h-[500px] flex flex-col"> {/* Height is still needed for the map, but background/padding is removed */}
      <h3 className="text-white font-bold text-lg mb-1">Project Locations</h3>
      <p className="text-gray-400 text-sm mb-4">Global distribution of blue carbon projects</p>
      <div className="flex-1 flex gap-6 overflow-hidden">
        {/* Project List (Left Side) */}
        <div className="w-1/3 flex-shrink-0 overflow-y-auto pr-2">
            <h4 className="text-white font-semibold mb-2">Active Projects ({mockProjects.length})</h4>
            <div className="space-y-3">
                {mockProjects.map(project => (
                <div 
                    key={project.id} 
                    className="p-3 bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-600 transition-colors"
                    onClick={() => handleProjectClick(project)}
                >
                    <p className="font-bold text-white">{project.name}</p>
                    <p className="text-sm text-gray-300">{project.location}</p>
                </div>
                ))}
            </div>
        </div>
        {/* Map (Right Side) */}
        <div className="w-2/3 h-full rounded-lg overflow-hidden">
          <MapContainer center={mapCenter} zoom={mapZoom} style={{ height: '100%', width: '100%', backgroundColor: '#1e293b' }}>
            <ChangeView center={mapCenter} zoom={mapZoom} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {mockProjects.map(project => (
              <Marker key={project.id} position={project.position}>
                <Popup>
                  <b>{project.name}</b><br/>{project.location}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ProjectLocations;