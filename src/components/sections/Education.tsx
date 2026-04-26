import React from 'react';
import { MapPin, ArrowRight, ArrowDown, GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-slate-50 dark:bg-[#0f0f0f]">
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-secondary/20 filter blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-primary/20 filter blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        <h2 className="section-title">Academic Journey</h2>
        <p className="text-slate-500 dark:text-gray-400 mt-6 mb-12 text-base">The foundation behind the engineering</p>

        <div className="flex flex-col md:flex-row items-stretch gap-4 max-w-5xl mx-auto">

          {/* Card 1: Bachelors */}
          <div className="flex-1 glass-card flex flex-col">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-slate-100 dark:bg-gray-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-5 w-5 text-slate-400 dark:text-gray-400" />
              </div>
              <span className="text-slate-400 dark:text-gray-500 text-xs uppercase tracking-widest font-mono">2020 – 2024</span>
            </div>

            <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-1">B.Tech Computer Science & Engineering</h3>
            <p className="text-primary text-sm mb-2">Guru Nanak Dev Engineering College</p>
            <div className="flex items-center text-slate-400 dark:text-gray-500 text-xs mb-4">
              <MapPin size={12} className="mr-1 flex-shrink-0" />
              Punjab, India
            </div>

            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
              Built CS fundamentals from the ground up — algorithms, distributed systems, databases, OS, and first deep-dives into machine learning. Graduated with SGPA 8.13/10.
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {['DSA', 'Operating Systems', 'Networking', 'ML Fundamentals', 'DBMS', 'OOP'].map(tag => (
                <span key={tag} className="px-2 py-1 bg-slate-100 dark:bg-[#1a1a1a] text-slate-500 dark:text-gray-400 text-xs rounded border border-slate-200 dark:border-transparent">{tag}</span>
              ))}
            </div>
          </div>

          {/* Connector arrow */}
          <div className="flex items-center justify-center flex-shrink-0 text-primary py-2 md:py-0">
            <ArrowRight size={28} className="hidden md:block" />
            <ArrowDown size={28} className="md:hidden" />
          </div>

          {/* Card 2: Masters — highlighted */}
          <div className="flex-1 relative glass-card neon-border bg-white dark:bg-[#1a1a1a]/80 flex flex-col">
            <div className="absolute -top-3 right-4">
              <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Current</span>
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <span className="text-primary text-xs uppercase tracking-widest font-mono">2025 – Present</span>
            </div>

            <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-1">Master of Applied Computing</h3>
            <p className="text-primary text-sm mb-1">University of Windsor 🍁</p>
            <p className="text-slate-400 dark:text-gray-500 text-xs mb-2">Specialization: Artificial Intelligence</p>
            <div className="flex items-center text-slate-400 dark:text-gray-500 text-xs mb-4">
              <MapPin size={12} className="mr-1 flex-shrink-0" />
              Windsor, Ontario, Canada
            </div>

            <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
              Moved to Canada to go deep on AI — advanced ML, autonomous systems, and large-scale distributed computing. Concurrently interning at Kinaxis as an ML Developer.
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {['Advanced ML', 'Deep Learning', 'Distributed Systems', 'AI Systems', 'System Programming'].map(tag => (
                <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20">{tag}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
