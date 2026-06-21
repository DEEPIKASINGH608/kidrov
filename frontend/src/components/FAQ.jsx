import React, { useState } from 'react';

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      question: "Does my child need prior programming experience?",
      answer: "Not at all! This course starts perfectly from square zero. We focus on visual block tools before introducing core algorithmic programming principles."
    },
    {
      question: "What hardware setup is required for the workshop?",
      answer: "A standard laptop or desktop computer (Windows, macOS, or ChromeOS) with a functioning webcam and a reliable internet connection is all that's required."
    },
    {
      question: "Will recordings be available if a live class is missed?",
      answer: "Yes! High-definition replay modules are pushed to the student's portal workspace within 2 hours of every live broadcast, valid for a lifetime."
    }
  ];

  return (
    <section className="bg-amber-50/50 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-amber-100 overflow-hidden shadow-sm">
              <button
                type="button"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-5 font-bold text-indigo-950 flex justify-between items-center hover:bg-amber-50/40 transition-colors"
              >
                <span>{faq.question}</span>
                <span className="text-xl text-orange-500">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="p-5 pt-0 text-gray-600 border-t border-gray-50 bg-gray-50/50 transition-all">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


