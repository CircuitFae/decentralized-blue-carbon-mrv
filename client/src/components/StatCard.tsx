// file: client/src/components/StatCard.tsx
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-cyan-400 transform hover:-translate-y-1 transition-transform duration-300">
      <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">{title}</h3>
      <p className="text-3xl font-bold text-white mt-2">{value}</p>
    </div>
  );
};

export default StatCard;