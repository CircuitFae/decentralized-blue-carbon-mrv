// src/components/NccrSidebar.tsx
import React from 'react';
import { FiGrid, FiCheckSquare, FiBarChart2, FiFileText, FiUserCheck, FiShield, FiTrendingUp, FiSettings } from 'react-icons/fi';

const navItems = [
  { name: 'Dashboard', icon: <FiGrid /> },
  { name: 'Project Approvals', icon: <FiCheckSquare /> },
  { name: 'Data Validation', icon: <FiBarChart2 /> },
  { name: 'Credit Issuance', icon: <FiFileText /> },
  { name: 'User Management', icon: <FiUserCheck /> },
  { name: 'Dispute Resolution', icon: <FiShield /> },
  { name: 'Analytic Reports', icon: <FiTrendingUp /> },
  { name: 'Policy Updates', icon: <FiSettings /> },
];

const NccrSidebar: React.FC = () => {
  return (
    <div className="w-64 bg-slate-800 p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-white text-2xl font-bold mb-10">NCCR Admin</h1>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.name} className="mb-4">
                <a
                  href="#"
                  className={`flex items-center p-2 rounded-lg transition-colors ${
                    item.name === 'Dashboard'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <span className="mr-4">{item.icon}</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-center p-2 bg-slate-900 rounded-full w-10 h-10">
        <span className="text-white font-bold text-lg">N</span>
      </div>
    </div>
  );
};

export default NccrSidebar;