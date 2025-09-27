// file: client/src/app/register-project/page.tsx
import React from 'react';

const RegisterProjectPage = () => {
  return (
    <main className="flex-grow p-8">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-cyan-400 mb-2">
          Register New Project
        </h1>
        <p className="text-gray-400 mb-8">
          Fill in the details below to register a new blue carbon project.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="projectName" className="block text-sm font-medium text-gray-300 mb-1">
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              className="w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="e.g., Sundarbans Mangrove Restoration Initiative"
            />
          </div>

          <div>
            <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-300 mb-1">
              Project Description
            </label>
            <textarea
              id="projectDescription"
              rows={4}
              className="w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="Describe the goals, scope, and expected outcomes of your project."
            />
          </div>

          <div className="pt-4 flex justify-end space-x-4">
            <button type="button" className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-md transition-colors">
              Save as Draft
            </button>
            <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded-md transition-colors">
              Submit for Review
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default RegisterProjectPage;