import React from 'react';

const Hero = ({ onEnrollClick }) => {
  return (
    <section className="relative overflow-hidden py-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-700"></div>

      <span className="bg-orange-100 text-orange-600 text-xs md:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 inline-block">
        🚀 Limited Seats Available for Summer 2026
      </span>

      <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-900 tracking-tight leading-tight max-w-4xl">
        AI & Robotics <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Summer Workshop</span>
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
        Empower your child to build the future! An interactive, hands-on immersive experience where young minds discover the foundational magic of Artificial Intelligence, coding, and robotics.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <button
          onClick={onEnrollClick}
          className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-lg px-8 py-4 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-orange-200"
        >
          Enroll Now 
        </button>
        <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Next batch filling fast
        </div>
      </div>
    </section>
  );
};

export default Hero;

