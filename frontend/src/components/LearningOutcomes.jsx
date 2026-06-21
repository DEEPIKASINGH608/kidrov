import React from 'react';

const LearningOutcomes = () => {
  const outcomes = [
    "Understand Core AI Concepts: Demystify Machine Learning and Neural Networks through visual models.",
    "Hands-on Coding Basics: Master logic blocks and foundational Python syntax tailored perfectly for youth.",
    "Build Virtual Robots: Design, program, and run functional autonomous agents in localized simulator software.",
    "Critical Problem Solving: Develop systematic workflows to trace errors, debug code, and think algorithmically.",
    "Cap Project Portfolio: Complete an independent project showcasing custom intelligence blocks to friends and family."
  ];

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-indigo-900 mb-4">What Your Child Will Learn</h2>
      <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">Our multi-pillar approach bridges theoretical imagination with applicable engineering principles.</p>

      <div className="space-y-4">
        {outcomes.map((point, idx) => (
          <div key={idx} className="flex items-start bg-white p-5 rounded-xl border border-gray-100 shadow-sm transition-all hover:border-orange-200">
            <span className="flex-shrink-0 bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
              {idx + 1}
            </span>
            <p className="text-gray-700 font-medium pt-0.5">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningOutcomes;


