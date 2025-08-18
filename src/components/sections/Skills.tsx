import React, { useState, useEffect, useRef } from 'react';
import { Award, Code, Database, Cloud, Zap, TrendingUp } from 'lucide-react';
import { techStackLayers, skillStats, TechLayer, SkillItem } from '../../data/skills';

const ProficiencyBadge = ({ proficiency }: { proficiency: string }) => {
  const colors = {
    'Expert': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Advanced': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Proficient': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'Learning': 'bg-purple-500/20 text-purple-400 border-purple-500/30'
  };
  
  return (
    <span className={`px-2 py-1 rounded text-xs border ${colors[proficiency]} font-medium`}>
      {proficiency}
    </span>
  );
};

const SkillCard = ({ skill, index }: { skill: SkillItem; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative group"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        bg-dark-300/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4
        transition-all duration-300 hover:border-primary/50 hover:bg-dark-300/70
        hover:transform hover:scale-105 hover:shadow-lg animate-slide-up
        ${isHovered ? 'shadow-lg shadow-primary/20' : ''}
      `}>
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-white font-semibold text-sm">{skill.name}</h4>
          <ProficiencyBadge proficiency={skill.proficiency} />
        </div>
        
        {skill.description && (
          <p className="text-gray-400 text-xs leading-relaxed">
            {skill.description}
          </p>
        )}
        
        {/* Hover glow effect */}
        {isHovered && (
          <div className="absolute inset-0 bg-primary/5 rounded-lg -z-10 animate-pulse" />
        )}
      </div>
    </div>
  );
};

const LayerCard = ({ layer, index, isVisible }: { layer: TechLayer; index: number; isVisible: boolean }) => {
  return (
    <div 
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      {/* Connection line to next layer */}
      {index < techStackLayers.length - 1 && (
        <div className="absolute left-1/2 bottom-0 w-0.5 h-8 bg-gradient-to-b from-gray-600 to-transparent transform translate-y-full -translate-x-px z-10" />
      )}
      
      {/* Layer container */}
      <div className={`
        relative bg-gradient-to-r ${layer.bgGradient} 
        border border-gray-700/50 rounded-xl p-6 mb-8
        transition-all duration-500 hover:border-gray-600/70
        backdrop-blur-sm
      `}>
        {/* Layer header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
              style={{ backgroundColor: `${layer.color}20`, border: `1px solid ${layer.color}30` }}
            >
              {layer.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{layer.title}</h3>
              <p className="text-gray-400 text-sm">{layer.subtitle}</p>
            </div>
          </div>
          
          {/* Skills count badge */}
          <div className="bg-dark-300/80 px-3 py-1 rounded-full border border-gray-700/50">
            <span className="text-gray-300 text-sm font-medium">
              {layer.skills.length} skills
            </span>
          </div>
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {layer.skills.map((skill, skillIndex) => (
            <SkillCard key={skill.name} skill={skill} index={skillIndex} />
          ))}
        </div>
        
        {/* Layer accent line */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl"
          style={{ backgroundColor: layer.color, opacity: 0.3 }}
        />
      </div>
    </div>
  );
};

const StatsCard = ({ icon: Icon, label, value, description }: {
  icon: React.ElementType;
  label: string;
  value: string;
  description: string;
}) => (
  <div className="bg-dark-300/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 text-center group hover:border-primary/50 transition-all duration-300">
    <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <div className="text-2xl font-bold text-white mb-1">{value}</div>
    <div className="text-sm font-medium text-gray-300 mb-1">{label}</div>
    <div className="text-xs text-gray-500">{description}</div>
  </div>
);

const Skills = () => {
  const [visibleLayers, setVisibleLayers] = useState<boolean[]>(new Array(techStackLayers.length).fill(false));
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observers = layerRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleLayers(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref);
      return observer;
    });
    
    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);
  
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-secondary/20 filter blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-accent/20 filter blur-[100px]" />
      </div>
      
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Tech Stack Architecture</h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            My technical expertise organized by architectural layers, 
            from high-level applications down to core infrastructure
          </p>
        </div>
        
        {/* Stats overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <StatsCard 
            icon={Code}
            label="Total Skills"
            value={skillStats.totalSkills.toString()}
            description="Across all layers"
          />
          <StatsCard 
            icon={Award}
            label="Expert Level"
            value={skillStats.expertSkills.toString()}
            description="Advanced proficiency"
          />
          <StatsCard 
            icon={TrendingUp}
            label="Tech Layers"
            value={skillStats.layersCount.toString()}
            description="Full stack coverage"
          />
          <StatsCard 
            icon={Zap}
            label="Experience"
            value={skillStats.yearsExperience}
            description="Years building"
          />
        </div>
        
        {/* Architecture diagram intro */}
        <div className="bg-dark-400/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-primary/20 p-3 rounded-lg mr-4">
              <Database className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Layered Architecture Approach</h3>
              <p className="text-gray-400">From applications to infrastructure - see how I build scalable AI systems</p>
            </div>
          </div>
          
          {/* Architecture flow */}
          <div className="flex justify-center items-center space-x-4 text-sm text-gray-400">
            <span>Applications</span>
            <div className="w-4 h-0.5 bg-gray-600"></div>
            <span>Frameworks</span>
            <div className="w-4 h-0.5 bg-gray-600"></div>
            <span>Languages</span>
            <div className="w-4 h-0.5 bg-gray-600"></div>
            <span>Infrastructure</span>
          </div>
        </div>
        
        {/* Tech stack layers */}
        <div className="max-w-6xl mx-auto">
          {techStackLayers.map((layer, index) => (
            <div
              key={layer.id}
              ref={el => layerRefs.current[index] = el}
            >
              <LayerCard 
                layer={layer} 
                index={index} 
                isVisible={visibleLayers[index]} 
              />
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 inline-block">
            <h3 className="text-xl font-bold text-white mb-2">Ready to Build Something Amazing?</h3>
            <p className="text-gray-400 mb-6">
              Let's discuss how these skills can solve your next challenge
            </p>
            <a 
              href="#contact" 
              className="neon-button inline-flex items-center"
            >
              <Zap size={18} className="mr-2" />
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;