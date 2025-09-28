// src/components/NccrSystemActivityChart.tsx
"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartData {
  name: string;
  Approvals: number;
  'Data Validated': number;
  'Sprest for PROJ-01': number;
}

const data: ChartData[] = [
    { name: 'Jan', Approvals: 220, 'Data Validated': 300, 'Sprest for PROJ-01': 280 },
    { name: 'Feb', Approvals: 250, 'Data Validated': 340, 'Sprest for PROJ-01': 310 },
    // ... rest of data
];

const NccrSystemActivityChart: React.FC = () => {
    return (
        <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-white font-bold text-lg mb-4">System Activity Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none' }} />
                    <Legend />
                    <Line type="monotone" dataKey="Approvals" stroke="#22d3ee" strokeWidth={2} />
                    <Line type="monotone" dataKey="Data Validated" stroke="#34d399" strokeWidth={2} />
                    <Line type="monotone" dataKey="Sprest for PROJ-01" stroke="#a78bfa" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
export default NccrSystemActivityChart;