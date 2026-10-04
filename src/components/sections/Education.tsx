import React from 'react';
import { MapPin } from 'lucide-react';

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Card 1: Bachelors */}
          <div className="glass-card flex flex-col group hover:shadow-xl transition-all duration-300">
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                🎓
              </div>
              <span className="text-xs font-mono text-slate-400 dark:text-gray-500 bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10">
                2020 – 2024
              </span>
            </div>

            <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-tight mb-1">
              Bachelor of Computer Science & Technology
            </h3>
            <p className="text-violet-500 dark:text-violet-400 text-sm font-medium mb-2">
              Guru Nanak Dev Engineering College (GNDEC)
            </p>
            <div className="flex items-center text-slate-400 dark:text-gray-500 text-xs mb-5">
              <MapPin size={11} className="mr-1 shrink-0" />
              Punjab, India
            </div>

            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-5 flex-1">
              Where it all clicked. Built CS from the ground up — algorithms, OS, networks, databases — and caught the AI bug early. Graduated{' '}
              <span className="text-slate-900 dark:text-white font-semibold">SGPA 8.13/10</span>, shipped real projects, and got obsessed with making machines think.
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {['DSA', 'Operating Systems', 'Computer Networks', 'DBMS', 'ML Fundamentals', 'OOP'].map(tag => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-slate-100 dark:bg-[#1a1a1a] text-slate-500 dark:text-gray-400 text-xs rounded-lg border border-slate-200 dark:border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Masters */}
          <div className="glass-card neon-border bg-white dark:bg-[#1a1a1a]/80 flex flex-col relative group hover:shadow-xl transition-all duration-300">
            <div className="absolute -top-3 right-5">
              <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-primary/30">
                Latest
              </span>
            </div>

            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                🍁
              </div>
              <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                Jan 2025 – Aug 2026
              </span>
            </div>

            <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-tight mb-1">
              Master of Applied Computing
            </h3>
            <p className="text-primary text-sm font-medium mb-0.5">
              University of Windsor
            </p>
            <p className="text-slate-400 dark:text-gray-500 text-xs mb-2">
              Specialization: Artificial Intelligence
            </p>
            <div className="flex items-center text-slate-400 dark:text-gray-500 text-xs mb-5">
              <MapPin size={11} className="mr-1 shrink-0" />
              Windsor, Ontario, Canada
            </div>

            <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed mb-5 flex-1">
              Relocated to Canada to go all-in on AI — advanced ML, autonomous systems, LLMOps, and large-scale distributed computing. Not just studied it:{' '}
              <span className="text-slate-900 dark:text-white font-semibold">shipped production AI at Kinaxis</span> alongside the degree.
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {['Advanced ML', 'Deep Learning', 'Autonomous Systems', 'Distributed Systems', 'AI Systems'].map(tag => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-lg border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
