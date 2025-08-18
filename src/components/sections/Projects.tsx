import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Eye, Zap, Calendar, TrendingUp, Award, Code2 } from 'lucide-react';
import { projects, projectStats, Project } from '../../data/projects';

const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    Live: 'bg-green-500/20 text-green-400 border-green-500/30 shadow-green-500/20',
    Development: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30 shadow-yellow-500/20',
    Completed: 'bg-blue-500/20 text-blue-400 border-blue-500/30 shadow-blue-500/20'
  };
  
  return (
    <div className={`
      px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm
      ${styles[status]} shadow-lg
    `}>
      <div className="flex items-center space-x-1">
        <div className={`w-2 h-2 rounded-full ${
          status === 'Live' ? 'bg-green-400 animate-pulse' :
          status === 'Development' ? 'bg-yellow-400 animate-pulse' :
          'bg-blue-400'
        }`} />
        <span>{status}</span>
      </div>
    </div>
  );
};

const ComplexityBadge = ({ complexity }: { complexity: string }) => {
  const styles = {
    Expert: 'bg-red-500/20 text-red-400 border-red-500/30',
    Advanced: 'bg-purple-500/20 text-purple-400 border-purple-500/30', 
    Professional: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
  };
  
  return (
    <div className={`px-2 py-1 rounded text-xs border ${styles[complexity]} backdrop-blur-sm`}>
      {complexity}
    </div>
  );
};

const TechBadge = ({ tech, index }: { tech: string; index: number }) => (
  <span 
    className="
      px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full 
      text-xs font-medium text-white/90 transition-all duration-300
      hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:shadow-lg
      cursor-default
    "
    style={{ 
      animationDelay: `${index * 0.1}s`,
      backdropFilter: 'blur(12px)'
    }}
  >
    {tech}
  </span>
);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div
      ref={cardRef}
      className={`
        group relative transform transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        ${isHovered ? 'scale-105 -translate-y-2' : 'scale-100'}
      `}
      style={{ 
        transitionDelay: `${index * 0.15}s`,
        transformStyle: 'preserve-3d'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card container with premium glassmorphism */}
      <div className={`
        relative overflow-hidden rounded-2xl backdrop-blur-xl border
        transition-all duration-500 ease-out
        ${isHovered 
          ? 'bg-white/10 border-white/30 shadow-2xl shadow-black/20' 
          : 'bg-white/5 border-white/10 shadow-xl shadow-black/10'
        }
      `}>
        
        {/* Gradient overlay that matches project theme */}
        <div 
          className={`
            absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10
            transition-opacity duration-500
            ${isHovered ? 'opacity-20' : 'opacity-10'}
          `} 
        />
        
        {/* Featured project glow */}
        {project.featured && (
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 animate-pulse" />
        )}
        
        {/* Image section with parallax effect */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className={`
              w-full h-full object-cover transition-all duration-700
              ${isHovered ? 'scale-110 brightness-110' : 'scale-100 brightness-100'}
            `}
            style={{ 
              filter: isHovered ? 'saturate(1.2) contrast(1.1)' : 'saturate(1) contrast(1)'
            }}
          />
          
          {/* Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Top badges */}
          <div className="absolute top-4 left-4 flex items-center space-x-2">
            <StatusBadge status={project.status} />
            {project.featured && (
              <div className="px-2 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-full text-xs backdrop-blur-sm">
                ⭐ Featured
              </div>
            )}
          </div>
          
          {/* Top right badges */}
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <ComplexityBadge complexity={project.complexity} />
            <div className="px-2 py-1 bg-black/30 text-white/80 border border-white/20 rounded backdrop-blur-sm text-xs">
              {project.year}
            </div>
          </div>
          
          {/* Project emoji icon */}
          <div className="absolute bottom-4 left-4">
            <div className={`
              w-12 h-12 rounded-xl bg-black/40 backdrop-blur-md border border-white/20
              flex items-center justify-center text-2xl
              transition-all duration-300
              ${isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}
            `}>
              {project.iconEmoji}
            </div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="relative p-6 space-y-4">
          
          {/* Project title and category */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className={`
                text-xl font-bold text-white transition-all duration-300
                ${isHovered ? 'text-transparent bg-clip-text bg-gradient-to-r ' + project.gradient : ''}
              `}>
                {project.name}
              </h3>
              <span className="px-2 py-1 bg-white/10 text-white/70 rounded text-xs backdrop-blur-sm">
                {project.category}
              </span>
            </div>
            
            {/* Short description */}
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
              {project.shortDescription}
            </p>
          </div>
          
          {/* Impact metrics */}
          {project.metrics && (
            <div className="flex items-center space-x-2 text-xs">
              <TrendingUp size={14} className="text-green-400" />
              <span className="text-green-400 font-medium">{project.metrics}</span>
            </div>
          )}
          
          {/* Tech stack */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Code2 size={14} className="text-blue-400" />
              <span className="text-sm font-medium text-white/80">Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 4).map((tech, techIndex) => (
                <TechBadge key={tech} tech={tech} index={techIndex} />
              ))}
              {project.techStack.length > 4 && (
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 backdrop-blur-sm">
                  +{project.techStack.length - 4} more
                </span>
              )}
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex items-center space-x-3 pt-2">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm
                  bg-gradient-to-r ${project.gradient} text-white
                  transition-all duration-300 hover:shadow-lg hover:scale-105
                  backdrop-blur-sm border border-white/20
                `}
                style={{ 
                  boxShadow: isHovered ? `0 8px 25px ${project.accentColor}40` : 'none'
                }}
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
            
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm
                  bg-white/10 text-white border border-white/20 backdrop-blur-sm
                  transition-all duration-300 hover:bg-white/20 hover:scale-105
                "
              >
                <Github size={16} />
                <span>Code</span>
              </a>
            )}
            
            {/* View details button */}
            <button className="
              flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm
              text-white/70 border border-white/10 backdrop-blur-sm
              transition-all duration-300 hover:text-white hover:border-white/20
            ">
              <Eye size={16} />
              <span>Details</span>
            </button>
          </div>
        </div>
        
        {/* Hover glow effect */}
        {isHovered && (
          <div 
            className="absolute inset-0 rounded-2xl opacity-20 animate-pulse -z-10"
            style={{ 
              boxShadow: `0 0 60px ${project.accentColor}`,
              transform: 'scale(1.05)'
            }}
          />
        )}
      </div>
    </div>
  );
};

const StatsCard = ({ icon: Icon, value, label, description }: {
  icon: React.ElementType;
  value: string;
  label: string;
  description: string;
}) => (
  <div className="
    bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center
    transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105
    group
  ">
    <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <div className="text-3xl font-bold text-white mb-1">{value}</div>
    <div className="text-sm font-medium text-gray-300 mb-1">{label}</div>
    <div className="text-xs text-gray-500">{description}</div>
  </div>
);

const Projects = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', ...projectStats.categories];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-pink-500/10 filter blur-[120px] animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="section-container relative z-10">
        {/* Premium section header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-white/80 font-medium">Portfolio Showcase</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A curated collection of innovative AI/ML solutions, full-stack applications, 
            and system-level projects that showcase technical expertise and real-world impact.
          </p>
        </div>
        
        {/* Stats overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <StatsCard 
            icon={Code2}
            value={projectStats.totalProjects.toString()}
            label="Total Projects"
            description="Diverse portfolio"
          />
          <StatsCard 
            icon={Zap}
            value={projectStats.liveProjects.toString()}
            label="Live Projects"
            description="Production ready"
          />
          <StatsCard 
            icon={Award}
            value={projectStats.techCount.toString()}
            label="Technologies"
            description="Tech stack depth"
          />
          <StatsCard 
            icon={TrendingUp}
            value="10k+"
            label="Users Impacted"
            description="Real-world reach"
          />
        </div>
        
        {/* Category filters */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`
                    px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300
                    ${filter === category 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="
            inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 
            backdrop-blur-xl border border-white/20 rounded-2xl p-8
          ">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Amazing?</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Let's collaborate on your next innovative project. From AI solutions to full-stack applications.
            </p>
            <a 
              href="#contact" 
              className="
                inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-medium
                bg-gradient-to-r from-purple-500 to-pink-500 text-white
                transition-all duration-300 hover:scale-105 hover:shadow-2xl
                backdrop-blur-sm border border-white/20
              "
            >
              <Zap size={20} />
              <span>Start a Project</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;