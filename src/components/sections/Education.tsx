import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
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
        
        <div className="mt-12 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform md:translate-x-px"></div>
          
          {education.map((edu, index) => (
            <div 
              key={edu.id} 
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-12 md:pr-0 md:text-left' : 'md:mr-auto md:pr-12 md:pl-0 md:text-right'
              } pl-12 md:w-1/2 animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div 
                className={`absolute top-0 w-6 h-6 rounded-full bg-primary left-0 md:left-auto ${
                  index % 2 === 0 ? 'md:-left-3' : 'md:-right-3'
                }`}
                style={{ boxShadow: '0 0 10px rgba(108, 92, 231, 0.5)' }}
              ></div>
              
              <div className="glass-card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <div className="text-primary">{edu.institution}</div>
                  </div>
                  <div className="bg-dark-300 px-3 py-1 rounded text-gray-400 text-sm">
                    {edu.period}
                  </div>
                </div>
                
                <div className={`flex items-center text-gray-400 text-sm mb-4 ${
                  index % 2 !== 0 ? 'md:justify-end' : ''
                }`}>
                  <MapPin size={16} className={index % 2 !== 0 ? 'md:order-2 md:ml-2' : 'mr-2'} />
                  <span>{edu.location}</span>
                </div>
                
                <p className="text-gray-300 mb-5">{edu.description}</p>
                
                {edu.courses && (
                  <div className="mb-4">
                    <h4 className={`text-white font-semibold mb-2 ${
                      index % 2 !== 0 ? 'md:text-right' : ''
                    }`}>
                      Key Courses
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, idx) => (
                        <span 
                          key={idx} 
                          className="bg-dark-300 px-2 py-1 rounded text-gray-300 text-xs"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {edu.achievements && (
                  <div>
                    <h4 className={`text-white font-semibold mb-2 ${
                      index % 2 !== 0 ? 'md:text-right' : ''
                    }`}>
                      Achievements
                    </h4>
                    <ul className={`space-y-1 ${
                      index % 2 !== 0 ? 'md:text-right' : ''
                    }`}>
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className={`text-primary mr-2 ${
                            index % 2 !== 0 ? 'md:hidden' : ''
                          }`}>
                            •
                          </span>
                          <span className="text-gray-300">{achievement}</span>
                          <span className={`text-primary ml-2 ${
                            index % 2 !== 0 ? 'md:inline-block' : 'hidden'
                          }`}>
                            •
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
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