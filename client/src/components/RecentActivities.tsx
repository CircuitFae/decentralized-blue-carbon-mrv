// file: client/src/components/RecentActivities.tsx
import React from 'react';

const activities = [
  { text: "Project 'Sundarbans Restoration' was approved.", time: "2 hours ago" },
  { text: "New MRV data uploaded for 'PROJ-002'.", time: "5 hours ago" },
  { text: "User '0x123...abc' connected.", time: "1 day ago" },
];

const RecentActivities = () => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <h3 className="text-lg font-bold text-white mb-4">Recent Activities</h3>
    <ul className="space-y-4">
      {activities.map((activity, index) => (
        <li key={index} className="text-sm border-l-2 border-gray-700 pl-3">
          <p className="text-gray-300">{activity.text}</p>
          <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default RecentActivities;