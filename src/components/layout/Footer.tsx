import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-400 border-t border-gray-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h3 className="text-xl font-mono font-bold mb-4">
              <span className="neon-text">Keshav</span>Arri<span className="text-primary">.</span>
            </h3>
            <p className="text-gray-400 mb-4">
            Generative AI & LLM Specialist | Architect of Agentic AI Systems | Data Engineering & Backend API Developer | Cloud-Powered AI Solutions Builder
            </p>
            <div className="flex space-x-4 mt-auto">
              <a 
                href="https://github.com/Keshav0375" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/keshav-kumar-arri/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              
              <a 
                href="mailto:arri@uwindsor.ca" 
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-mono font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-mono font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">
              <Mail size={16} className="inline mr-2" />
              arri@uwindsor.ca
            </p>
            <p className="text-gray-400">
              Based in Ontario, Canada
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Keshav Arri. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Designed & Built with <span className="text-primary">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;