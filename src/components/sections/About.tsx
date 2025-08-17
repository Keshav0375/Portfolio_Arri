import React from 'react';
import { Brain, Code, Bot, Database, Download, Eye } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '1+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Hackathons', value: '2' },
    { label: 'Frameworks', value: '10+' }
  ];
  
  const services = [
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: 'Generative AI and Agentic AI Solutions',
      description: 'End-to-end generative AI applications and autonomous agent systems using RAG, LLM orchestration, and multi-modal frameworks.'
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: 'Data Engineering & Analytics',
      description: 'End-to-end data pipeline development, vector databases, and advanced analytics solutions.'
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: 'Backend Development',
      description: 'Scalable APIs and microservices using FastAPI, Django, and cloud infrastructure (AWS, Azure, GCP).'
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: 'ML & Deep Learning',
      description: 'Custom machine learning models, computer vision solutions, and NLP systems using PyTorch and TensorFlow.'
    }
  ];

  // Google Drive direct download link
  const RESUME_DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=17-e7V0hIiQdCqkKfPrroo_NIyMX_xqfW";
  const RESUME_VIEW_URL = "https://drive.google.com/file/d/17-e7V0hIiQdCqkKfPrroo_NIyMX_xqfW/view?usp=sharing";

  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = RESUME_DOWNLOAD_URL;
    link.download = 'Keshav_Arri_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    window.open(RESUME_VIEW_URL, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <section id="about" className="py-20 bg-dark-400 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/20 filter blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-secondary/20 filter blur-[100px]" />
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="animate-slide-up">
            <p className="text-gray-300 text-lg mb-6">
              I'm Keshav Arri, an <span className="text-primary font-semibold">AI/ML Engineer & Data Engineer</span> who thrives at the intersection of cutting-edge tech and real-world impact.
            </p>
            <p className="text-gray-400 mb-6">
            Currently pursuing my Master's in Applied Computing with an AI specialization at the University of Windsor, I bring a strong foundation in software engineering, coupled with hands-on experience in designing scalable, production-grade AI systems.
            </p>
            <p className="text-gray-400 mb-8">
            At Slideoo, I slashed presentation creation time by 90% with my multi-LLM architecture. I'm obsessed with pushing boundaries — whether it's orchestrating agentic AI systems, engineering RAG solutions that transform how we access information, or crafting APIs that scale effortlessly across cloud platforms.
            </p>
            <p className="text-gray-400 mb-8">
            I approach problems with a product mindset, focusing on measurable impact, stakeholder alignment, and operational efficiency — whether it's driving innovation or delivering business-ready solutions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-dark-300 p-4 rounded-lg text-center">
                  <div className="text-primary text-3xl font-bold">{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-mono font-semibold text-white">What I Do</h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="glass-card flex flex-col h-full"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h4 className="text-white text-lg font-semibold mb-2">{service.title}</h4>
                  <p className="text-gray-400 text-sm mt-auto">{service.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleResumeDownload}
                  className="neon-button inline-flex items-center justify-center px-6 py-3"
                >
                  <Download size={18} className="mr-2" />
                  Download Resume
                </button>
                
                <button 
                  onClick={handleViewResume}
                  className="bg-primary/10 border border-primary/30 text-primary px-6 py-3 rounded 
                           transition-all duration-300 hover:bg-primary/20 hover:border-primary/50
                           inline-flex items-center justify-center"
                >
                  <Eye size={18} className="mr-2" />
                  View Resume
                </button>
              </div>
              
              <p className="text-gray-500 text-sm">
                Resume hosted securely on Google Drive
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;