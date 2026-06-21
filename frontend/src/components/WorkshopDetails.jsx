import React from 'react';

const WorkshopDetails = () => {
  const details = [
    { label: 'Age Group', value: '8–14 Years', icon: '🧒' },
    { label: 'Duration', value: '4 Weeks', icon: '📅' },
    { label: 'Mode', value: 'Online (Live Interactive Sessions)', icon: '💻' },
    { label: 'Fee', value: '₹2,999/-', icon: '💰' },
    { label: 'Start Date', value: '15 July 2026', icon: '🚀' },
  ];

  return (
    <section className="bg-indigo-50/60 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Workshop Overview</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {details.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100 flex flex-col items-center text-center transition-all hover:shadow-md">
              <span className="text-4xl mb-3">{item.icon}</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{item.label}</span>
              <span className="text-lg font-bold text-indigo-950">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails;


