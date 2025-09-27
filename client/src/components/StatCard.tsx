// file: client/src/components/StatCard.tsx
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  isLoading?: boolean; // Add an optional 'isLoading' property
}

const StatCard: React.FC<StatCardProps> = ({ title, value, isLoading }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-sm font-medium text-gray-400">{title}</h3>

      {/* If isLoading is true, show a pulsing animation. Otherwise, show the value. */}
      {isLoading ? (
        <div className="mt-2 h-9 w-24 bg-gray-700 rounded-md animate-pulse"></div>
      ) : (
        <p className="text-3xl font-bold text-white mt-2">{value}</p>
      )}
    </div>
  );
};

export default StatCard;