import React, { useState } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { experiences } from '../../data/experience';

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(experiences[0].id);

  // Get the currently selected experience
  const currentExp = experiences.find(exp => exp.id === selectedExp) || experiences[0];
  
  return (
    <section id="experience" className="py-20 bg-dark-400 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary/20 filter blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 filter blur-[100px]" />
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-dark-300 rounded-lg p-4">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  className={`w-full text-left px-4 py-3 rounded-md mb-2 transition-all duration-300 ${
                    selectedExp === exp.id 
                      ? 'bg-primary/10 border-l-2 border-primary' 
                      : 'hover:bg-dark-200'
                  }`}
                  onClick={() => setSelectedExp(exp.id)}
                >
                  <div className="font-semibold text-white">{exp.role}</div>
                  <div className="text-sm text-gray-400">{exp.company}</div>
                  <div className="text-xs text-gray-500 mt-1">{exp.period}</div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2 animate-fade-in">
            <div className="glass-card h-full">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{currentExp.role}</h3>
                  <div className="text-lg text-primary">{currentExp.company}</div>
                </div>
                <div className="bg-dark-300 px-3 py-1 rounded text-gray-400 text-sm">
                  {currentExp.period}
                </div>
              </div>
              
              <div className="flex items-center text-gray-400 text-sm mb-6">
                <MapPin size={16} className="mr-2" />
                <span>{currentExp.location}</span>
                <span className="mx-2">•</span>
                <Briefcase size={16} className="mr-2" />
                <span>{currentExp.period.split('-')[1].trim() === 'Present' ? 'Full-time' : 'Past'}</span>
              </div>
              
              <p className="text-gray-300 mb-6">{currentExp.description}</p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {currentExp.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {currentExp.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-dark-300 px-3 py-1 rounded-full text-gray-300 text-sm"
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