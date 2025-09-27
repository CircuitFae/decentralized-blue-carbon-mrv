// file: client/src/components/CarbonChart.tsx
"use client"; // This must be a client component

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Placeholder data to mimic your design
const data = [
  { name: 'Jan', Mangroves: 150, Wetlands: 100, Seagrass: 50 },
  { name: 'Feb', Mangroves: 200, Wetlands: 120, Seagrass: 60 },
  { name: 'Mar', Mangroves: 250, Wetlands: 150, Seagrass: 80 },
  { name: 'Apr', Mangroves: 220, Wetlands: 180, Seagrass: 100 },
  { name: 'May', Mangroves: 280, Wetlands: 200, Seagrass: 120 },
  { name: 'Jun', Mangroves: 320, Wetlands: 220, Seagrass: 150 },
  { name: 'Jul', Mangroves: 350, Wetlands: 250, Seagrass: 180 },
  { name: 'Aug', Mangroves: 400, Wetlands: 280, Seagrass: 200 },
];

const CarbonChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
        <XAxis dataKey="name" stroke="#A0AEC0" />
        <YAxis stroke="#A0AEC0" />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1A202C',
            border: '1px solid #4A5568',
          }}
        />
        <Legend wrapperStyle={{ color: '#E2E8F0' }} />
        <Line type="monotone" dataKey="Mangroves" stroke="#38B2AC" strokeWidth={2} />
        <Line type="monotone" dataKey="Wetlands" stroke="#4299E1" strokeWidth={2} />
        <Line type="monotone" dataKey="Seagrass" stroke="#F6E05E" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CarbonChart;