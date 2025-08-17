import React from 'react';
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';
import { education } from '../../data/education';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-dark-400 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-secondary/20 filter blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-primary/20 filter blur-[100px]" />
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-12 space-y-8">
          {education.map((edu, index) => (
            <div 
              key={edu.id} 
              className="relative animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Left-aligned timeline with dot */}
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div 
                    className="w-6 h-6 rounded-full bg-primary flex-shrink-0"
                    style={{ boxShadow: '0 0 10px rgba(108, 92, 231, 0.5)' }}
                  ></div>
                  {index < education.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-700 mt-2 min-h-[100px]"></div>
                  )}
                </div>
                
                <div className="glass-card flex-1">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                      <div className="text-primary text-lg mb-2">{edu.institution}</div>
                    </div>
                    <div className="bg-dark-300 px-3 py-1 rounded text-gray-400 text-sm mt-2 sm:mt-0 self-start">
                      {edu.period}
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span>{edu.location}</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-5">{edu.description}</p>
                  
                  {/* Courses */}
                  {edu.courses && (
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <GraduationCap size={18} className="mr-2 text-primary" />
                        Key Courses
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                        {edu.courses.map((course, idx) => (
                          <span 
                            key={idx} 
                            className="bg-dark-300 px-3 py-1 rounded text-gray-300 text-xs text-center"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Achievements */}
                  {edu.achievements && (
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Award size={18} className="mr-2 text-primary" />
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-3 mt-1 flex-shrink-0">•</span>
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="mt-16 text-center">
          <div className="glass-card inline-block">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="mb-4 sm:mb-0 sm:mr-6">
                <Award size={48} className="text-primary" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-2">Lifelong Learner</h3>
                <p className="text-gray-400">
                  Beyond formal education, I'm committed to continuous learning. 
                  I regularly participate in online courses, industry conferences, and research projects 
                  to stay at the forefront of AI and machine learning advancements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;