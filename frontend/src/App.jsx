import React, { useRef } from 'react';
import Hero from './components/Hero';
import WorkshopDetails from './components/WorkshopDetails';
import LearningOutcomes from './components/LearningOutcomes';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-orange-50 text-gray-800 font-sans selection:bg-orange-200">
      {/* Kidrove inspired header banner */}
      <header className="py-4 px-6 bg-white shadow-sm flex justify-between items-center sticky top-0 z-50">
        <div className="text-2xl font-black tracking-wider text-indigo-600">
          KID<span className="text-orange-500">ROVE</span> <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full font-bold uppercase tracking-normal ml-1">Workshops</span>
        </div>
        <button
          onClick={scrollToForm}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-sm md:text-base"
        >
          Join Workshop
        </button>
      </header>

      <main>
        <Hero onEnrollClick={scrollToForm} />
        <WorkshopDetails />
        <LearningOutcomes />
        <FAQ />
        <div ref={formRef} className="py-12 bg-indigo-900 text-white">
          <RegistrationForm />
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm border-t border-gray-800">
        <p>© 2026 Kidrove & GEMA Education Technology. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;



