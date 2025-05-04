import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { projects } from '../../data/projects';

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  
  // Extract all unique tags
  const allTags = Array.from(new Set(
    projects.flatMap(project => project.tags)
  )).sort();
  
  const filteredProjects = selectedTag 
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;
    
  const handleProjectClick = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };
  
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-accent/20 filter blur-[100px]" />
        <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-primary/20 filter blur-[100px]" />
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Projects</h2>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            className={`px-3 py-1 rounded-full text-sm transition-all duration-300 
                      ${!selectedTag ? 'bg-primary text-white' : 'bg-dark-300 text-gray-400 hover:bg-dark-200'}`}
            onClick={() => setSelectedTag(null)}
          >
            All
          </button>
          
          {allTags.map(tag => (
            <button
              key={tag}
              className={`px-3 py-1 rounded-full text-sm transition-all duration-300 
                        ${selectedTag === tag ? 'bg-primary text-white' : 'bg-dark-300 text-gray-400 hover:bg-dark-200'}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`glass-card flex flex-col overflow-hidden transition-all duration-500 ease-out ${
                expandedProject === project.id ? 'row-span-2 col-span-1 md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-500 to-transparent opacity-70"></div>
                <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs bg-primary/30 backdrop-blur-sm px-2 py-1 rounded text-white">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs bg-dark-400/80 backdrop-blur-sm px-2 py-1 rounded text-white">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
              
              {expandedProject === project.id && (
                <div className="mt-4 mb-6 text-gray-300 text-sm animate-fade-in">
                  <p>{project.details}</p>
                  <div className="mt-4 flex flex-wrap gap-1">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-dark-300 px-2 py-1 rounded text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-700">
                <button 
                  className="text-primary text-sm flex items-center hover:underline"
                  onClick={() => handleProjectClick(project.id)}
                >
                  {expandedProject === project.id ? 'Show Less' : 'View Details'}
                  <ChevronRight size={16} className={`ml-1 transition-transform ${expandedProject === project.id ? 'rotate-90' : ''}`} />
                </button>
                
                <div className="flex space-x-3">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.codeLink && (
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                      aria-label="View code on GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;