// file: client/src/components/DataUpload.tsx
import React from 'react';

const DataUpload = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-full">
      <h3 className="text-lg font-bold text-white mb-4">Data Upload</h3>
      <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center mb-6 cursor-pointer hover:border-cyan-400 hover:bg-gray-700/50 transition-colors">
        <p className="text-gray-400">Drop files here or click to browse</p>
        <span className="text-xs text-gray-500">Supports CSV, JSON, XLSX up to 10MB</span>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-3">Recent Uploads</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li className="bg-gray-700 p-2 rounded-md">carbon_data_aug_2024.csv</li>
          <li className="bg-gray-700 p-2 rounded-md">sensor_readings_weekly.json</li>
        </ul>
      </div>
    </div>
  );
};

export default DataUpload;