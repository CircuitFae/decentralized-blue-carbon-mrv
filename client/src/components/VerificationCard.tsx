// file: client/src/components/VerificationCard.tsx
import React from 'react';

// Define the structure of a project for type safety
export interface ProjectForVerification {
  id: string;
  name: string;
  submittedBy: string;
  date: string;
  status: 'Pending' | 'Approved' | 'Requires Revision' | 'Under Review';
}

interface VerificationCardProps {
  project: ProjectForVerification;
}

const VerificationCard: React.FC<VerificationCardProps> = ({ project }) => {
  const statusStyles = {
    Pending: 'bg-yellow-500/20 text-yellow-400',
    Approved: 'bg-green-500/20 text-green-400',
    'Under Review': 'bg-blue-500/20 text-blue-400',
    'Requires Revision': 'bg-red-500/20 text-red-400',
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex items-center justify-between hover:bg-gray-700/50 transition-colors">
      <div>
        <p className="text-sm text-gray-400">{project.id}</p>
        <h3 className="text-lg font-bold text-white mt-1">{project.name}</h3>
        <p className="text-sm text-gray-300 mt-2">Submitted by: {project.submittedBy}</p>
      </div>
      <div className="text-right flex flex-col items-end">
        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusStyles[project.status]}`}>
          {project.status}
        </span>
        <p className="text-xs text-gray-500 mt-2">{project.date}</p>
        <button className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md text-sm">
          Review Project
        </button>
      </div>
    </div>
  );
};

export default VerificationCard;