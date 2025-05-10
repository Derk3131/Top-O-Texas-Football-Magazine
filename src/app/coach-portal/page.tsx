import React from 'react';

export default function CoachPortalPage() {
  return (
    <main className="flex flex-col items-center min-h-screen p-6 md:p-12 lg:p-24 bg-gray-100 text-black">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 font-oswald text-center">Coach Portal</h1>
        <p className="text-lg font-open-sans text-center">This is the Coach Portal page. Content and features for coaches will be added here soon.</p>
        {/* Add coach-specific content, forms, resources here */}
      </div>
    </main>
  );
}
