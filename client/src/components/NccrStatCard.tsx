// src/components/NccrStatCard.tsx
import React from 'react';

// Here, we define the types for the component's props.
interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode; // React.ReactNode allows any valid React element, like an icon.
}

const NccrStatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-xl flex flex-col">
      <div className="flex items-center justify-between">
        <p className="text-gray-400">{title}</p>
        <div className="text-cyan-400">{icon}</div>
      </div>
      <p className="text-white text-4xl font-bold mt-4">{value}</p>
    </div>
  );
};

export default NccrStatCard;