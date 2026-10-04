import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Briefcase } from 'lucide-react';
import { experiences } from '../../data/experience';

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(experiences[0].id);
  const [panelKey, setPanelKey] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const currentExp = experiences.find(exp => exp.id === selectedExp) || experiences[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setSectionVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSelectExp = (id: number) => {
    if (id === selectedExp) return;
    setSelectedExp(id);
    setPanelKey(k => k + 1);
  };

  return (
    <section id="experience" className="py-20 relative bg-white dark:bg-[#141414]" ref={sectionRef}>
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary/20 filter blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 filter blur-[100px]" />
      </div>

      <div className={`section-container relative z-10 transition-opacity duration-500 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="section-title">Experience</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-slate-50 border border-slate-200 dark:bg-[#1a1a1a] dark:border-transparent rounded-lg p-4">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  className={`w-full text-left px-4 py-3 rounded-md mb-2 transition-colors duration-200 ${
                    selectedExp === exp.id
                      ? 'bg-primary/10 border-l-2 border-primary'
                      : 'hover:bg-slate-100 dark:hover:bg-[#222222]'
                  }`}
                  onClick={() => handleSelectExp(exp.id)}
                >
                  <div className="font-semibold text-slate-900 dark:text-white">{exp.role}</div>
                  <div className="text-sm text-primary">{exp.company}</div>
                  <div className="text-xs text-slate-400 dark:text-gray-500 mt-1">{exp.period}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div key={panelKey} className="md:col-span-2 animate-fade-in">
            <div className="glass-card h-full">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{currentExp.role}</h3>
                  <div className="text-lg text-primary">{currentExp.company}</div>
                </div>
                <div className="bg-slate-100 dark:bg-[#1a1a1a] px-3 py-1 rounded text-slate-500 dark:text-gray-400 text-sm">
                  {currentExp.period}
                </div>
              </div>

              <div className="flex items-center text-slate-400 dark:text-gray-400 text-sm mb-6">
                <MapPin size={16} className="mr-2" />
                <span>{currentExp.location}</span>
                <span className="mx-2">•</span>
                <Briefcase size={16} className="mr-2" />
                <span>{currentExp.period.includes('Present') ? 'Current' : 'Past'}</span>
              </div>

              <p className="text-slate-600 dark:text-gray-300 mb-6">{currentExp.description}</p>

              <div className="mb-6">
                <h4 className="text-slate-900 dark:text-white font-semibold mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {currentExp.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2 mt-0.5">•</span>
                      <span className="text-slate-600 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-slate-900 dark:text-white font-semibold mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {currentExp.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-slate-100 dark:bg-[#1a1a1a] border border-slate-200 dark:border-transparent px-3 py-1 rounded-full text-slate-600 dark:text-gray-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
