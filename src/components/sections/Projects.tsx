import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, TrendingUp, Code2 } from 'lucide-react';
import { projects, Project } from '../../data/projects';

const featuredIds = ['reelify-ai', 'jobfit-crafter', 'data-dialect'];
const featuredProjects = projects.filter(p => featuredIds.includes(p.id));

const StatusBadge = React.memo(({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    Live:        'bg-green-500/20 text-green-600 border-green-500/40 dark:text-green-400',
    Development: 'bg-yellow-500/20 text-yellow-600 border-yellow-500/40 dark:text-yellow-400',
    Completed:   'bg-blue-500/20  text-blue-600  border-blue-500/40  dark:text-blue-400',
  };
  return (
    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
      <div className="flex items-center space-x-1">
        <div className={`w-2 h-2 rounded-full ${
          status === 'Live' ? 'bg-green-500' : status === 'Development' ? 'bg-yellow-500' : 'bg-blue-500'
        }`} />
        <span>{status}</span>
      </div>
    </div>
  );
});

const TechBadge = React.memo(({ tech }: { tech: string }) => (
  <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-medium text-slate-600 transition-all duration-300 hover:bg-slate-200 dark:bg-white/10 dark:border-white/20 dark:text-white/90 dark:hover:bg-white/20">
    {tech}
  </span>
));

const ProjectCard = React.memo(({ project, index }: { project: Project; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) { setIsVisible(true); observer.disconnect(); } }); },
      { threshold: 0.1, rootMargin: '50px' }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-[opacity,transform] duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="relative overflow-hidden rounded-2xl border transition-all duration-300
        bg-white border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md
        dark:bg-white/5 dark:border-white/10 dark:shadow-lg dark:hover:bg-white/10 dark:hover:border-white/30 dark:hover:shadow-xl">

        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 dark:opacity-10`} />

        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:scale-105"
            onLoad={e => (e.currentTarget.style.opacity = '1')}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          <div className="absolute top-4 left-4">
            <StatusBadge status={project.status} />
          </div>
          <div className="absolute top-4 right-4">
            <div className="px-2 py-1 bg-black/30 text-white/80 border border-white/20 rounded text-xs">{project.year}</div>
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
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.name}</h3>
              <span className="px-2 py-1 bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-white/70 rounded text-xs">{project.category}</span>
            </div>
            <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">{project.shortDescription}</p>
          </div>

          {project.metrics && (
            <div className="flex items-center space-x-2 text-xs">
              <TrendingUp size={14} className="text-green-500" />
              <span className="text-green-600 dark:text-green-400 font-medium">{project.metrics}</span>
            </div>
          )}

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Code2 size={14} className="text-blue-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-white/80">Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 4).map(tech => <TechBadge key={tech} tech={tech} />)}
              {project.techStack.length > 4 && (
                <span className="px-3 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-xs text-slate-400 dark:text-white/60">
                  +{project.techStack.length - 4} more
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-3 pt-2">
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                 className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm bg-gradient-to-r ${project.gradient} text-white transition-transform duration-200 hover:scale-105`}>
                <ExternalLink size={16} /><span>Live Demo</span>
              </a>
            )}
            {project.codeLink && (
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer"
                 className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white border border-slate-200 dark:border-white/20 transition-colors duration-200 hover:bg-slate-200 dark:hover:bg-white/20">
                <Github size={16} /><span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

const Projects = () => (
  <section id="projects" className="py-20 relative overflow-hidden bg-slate-50 dark:bg-[#0f0f0f]">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/5 dark:bg-purple-500/10 filter blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 dark:bg-blue-500/10 filter blur-[120px]" />
    </div>

    <div className="section-container relative z-10">
      <div className="mb-12">
        <h2 className="section-title">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Projects</span>
        </h2>
        <p className="text-slate-500 dark:text-gray-400 mt-6 text-base max-w-xl">
          Selected work — AI/ML systems built for production and real users.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="text-center mt-16">
        <a href="https://github.com/Keshav0375" target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center space-x-2 px-8 py-3 rounded-xl font-medium border border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-primary hover:border-primary/50 transition-all duration-300 dark:border-white/20 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white">
          <Github size={20} /><span>View all projects on GitHub</span>
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
