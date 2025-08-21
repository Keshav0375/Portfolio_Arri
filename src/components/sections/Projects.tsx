import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ExternalLink, Github, Eye, Zap, TrendingUp, Award, Code2 } from 'lucide-react';
import { projects, projectStats, Project } from '../../data/projects';

const StatusBadge = React.memo(({ status }: { status: string }) => {
  const styles = useMemo(() => ({
    Live: 'bg-green-500/20 text-green-400 border-green-500/30',
    Development: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    Completed: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
  }), []);
  
  return (
    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
      <div className="flex items-center space-x-1">
        <div className={`w-2 h-2 rounded-full ${
          status === 'Live' ? 'bg-green-400' :
          status === 'Development' ? 'bg-yellow-400' :
          'bg-blue-400'
        }`} />
        <span>{status}</span>
      </div>
    </div>
  );
});

const ComplexityBadge = React.memo(({ complexity }: { complexity: string }) => {
  const styles = useMemo(() => ({
    Expert: 'bg-red-500/20 text-red-400 border-red-500/30',
    Advanced: 'bg-purple-500/20 text-purple-400 border-purple-500/30', 
    Professional: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
  }), []);
  
  return (
    <div className={`px-2 py-1 rounded text-xs border ${styles[complexity]}`}>
      {complexity}
    </div>
  );
});

const TechBadge = React.memo(({ tech }: { tech: string }) => (
  <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white/90 transition-all duration-300 hover:bg-white/20">
    {tech}
  </span>
));

const ProjectCard = React.memo(({ project, index }: { project: Project; index: number }) => {
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
      { threshold: 0.1, rootMargin: '50px' }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.opacity = '1';
  };
  
  return (
    <div
      ref={cardRef}
      className={`group relative transform transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative overflow-hidden rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
        isHovered 
          ? 'bg-white/10 border-white/30 shadow-xl' 
          : 'bg-white/5 border-white/10 shadow-lg'
      }`}>
        
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
        
        {project.featured && (
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20" />
        )}
        
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            onLoad={handleImageLoad}
            className="w-full h-full object-cover transition-all duration-500 opacity-0"
            style={{ 
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          <div className="absolute top-4 left-4 flex items-center space-x-2">
            <StatusBadge status={project.status} />
            {project.featured && (
              <div className="px-2 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-full text-xs">
                ⭐ Featured
              </div>
            )}
          </div>
          
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <ComplexityBadge complexity={project.complexity} />
            <div className="px-2 py-1 bg-black/30 text-white/80 border border-white/20 rounded text-xs">
              {project.year}
            </div>
          </div>
          
          <div className="absolute bottom-4 left-4">
            <div className="w-12 h-12 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-2xl">
              {project.iconEmoji}
            </div>
          </div>
        </div>
        
        <div className="relative p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
              <span className="px-2 py-1 bg-white/10 text-white/70 rounded text-xs">
                {project.category}
              </span>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
          
          {project.metrics && (
            <div className="flex items-center space-x-2 text-xs">
              <TrendingUp size={14} className="text-green-400" />
              <span className="text-green-400 font-medium">{project.metrics}</span>
            </div>
          )}
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Code2 size={14} className="text-blue-400" />
              <span className="text-sm font-medium text-white/80">Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 4).map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
              {project.techStack.length > 4 && (
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                  +{project.techStack.length - 4} more
                </span>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-3 pt-2">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm bg-gradient-to-r ${project.gradient} text-white transition-all duration-300 hover:scale-105`}
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
                className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm bg-white/10 text-white border border-white/20 transition-all duration-300 hover:bg-white/20"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
            )}
            
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm text-white/70 border border-white/10 transition-all duration-300 hover:text-white hover:border-white/20">
              <Eye size={16} />
              <span>Details</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

const StatsCard = React.memo(({ icon: Icon, value, label, description }: {
  icon: React.ElementType;
  value: string;
  label: string;
  description: string;
}) => (
  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center transition-all duration-300 hover:bg-white/10 hover:scale-105 group">
    <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <div className="text-3xl font-bold text-white mb-1">{value}</div>
    <div className="text-sm font-medium text-gray-300 mb-1">{label}</div>
    <div className="text-xs text-gray-500">{description}</div>
  </div>
));

const Projects = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = useMemo(() => ['All', ...projectStats.categories], []);
  
  const filteredProjects = useMemo(() => 
    filter === 'All' 
      ? projects 
      : projects.filter(project => project.category === filter)
  , [filter]);
  
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 filter blur-[120px]" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-6 py-3">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-white/80 font-medium">Portfolio Showcase</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A curated collection of innovative AI/ML solutions and full-stack applications.
          </p>
        </div>
        
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
        
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-2">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                    filter === category 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-20">
          <div className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Amazing?</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Let's collaborate on your next innovative project.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-all duration-300 hover:scale-105"
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