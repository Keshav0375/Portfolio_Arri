import React, { useState, useEffect, useRef } from 'react';
import { skills, skillCategories, Skill } from '../../data/skills';

const SkillBar = ({ skill, animate = false }: { skill: Skill; animate?: boolean }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!animate) {
      setWidth(skill.level);
      return;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            setWidth(skill.level);
          }, 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (barRef.current) {
      observer.observe(barRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [skill.level, animate]);
  
  return (
    <div className="mb-4" ref={barRef}>
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{skill.name}</span>
        <span className="text-primary">{skill.level}%</span>
      </div>
      <div className="h-2 bg-dark-300 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${width}%`,
            boxShadow: '0 0 10px rgba(108, 92, 231, 0.5)'
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('programming');
  
  const filteredSkills = skills.filter(skill => skill.category === activeCategory);
  
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-primary/20 filter blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-accent/20 filter blur-[100px]" />
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Skills</h2>
        
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-dark-300 text-gray-400 hover:bg-dark-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {filteredSkills.slice(0, Math.ceil(filteredSkills.length / 2)).map((skill) => (
            <SkillBar key={skill.name} skill={skill} animate={true} />
          ))}
          
          {filteredSkills.slice(Math.ceil(filteredSkills.length / 2)).map((skill) => (
            <SkillBar key={skill.name} skill={skill} animate={true} />
          ))}
        </div>
        
        <div className="mt-16 glass-card text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Always Learning</h3>
          <p className="text-gray-400">
            Technology is always evolving, and so am I. I'm constantly expanding my skillset and exploring new technologies to stay at the cutting edge.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
          <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-dark-300 flex items-center justify-center">
                <span className="text-primary text-2xl font-bold">20+</span>
              </div>
              <span className="mt-2 text-sm text-gray-400">Technologies</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-dark-300 flex items-center justify-center">
                <span className="text-primary text-2xl font-bold">1+</span>
              </div>
              <span className="mt-2 text-sm text-gray-400">Years of Experience</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-dark-300 flex items-center justify-center">
                <span className="text-primary text-2xl font-bold">∞</span>
              </div>
              <span className="mt-2 text-sm text-gray-400">Curiosity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;