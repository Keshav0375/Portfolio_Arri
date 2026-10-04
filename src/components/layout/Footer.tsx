import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 dark:bg-[#141414] dark:border-gray-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h3 className="text-xl font-mono font-bold mb-4">
              <span className="neon-text">Keshav</span><span className="text-slate-900 dark:text-white">Arri</span><span className="text-primary">.</span>
            </h3>
            <p className="text-slate-500 dark:text-gray-400 mb-4">
              AI Software Engineer building production agentic systems, RAG pipelines, and LLM gateway infrastructure.
            </p>
            <div className="flex space-x-4 mt-auto">
              <a href="https://github.com/Keshav0375" target="_blank" rel="noopener noreferrer"
                 className="text-slate-400 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/keshav-kumar-arri/" target="_blank" rel="noopener noreferrer"
                 className="text-slate-400 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:keshavk5655@gmail.com"
                 className="text-slate-400 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-mono font-semibold mb-4 text-slate-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`}
                     className="text-slate-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-mono font-semibold mb-4 text-slate-900 dark:text-white">Contact</h3>
            <p className="text-slate-500 dark:text-gray-400 mb-2">
              <Mail size={16} className="inline mr-2" />
              keshavk5655@gmail.com
            </p>
            <p className="text-slate-500 dark:text-gray-400">
              Based in Ottawa, Ontario, Canada
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 dark:text-gray-500 text-sm">
            &copy; {currentYear} Keshav Arri. All rights reserved.
          </p>
          <p className="text-slate-400 dark:text-gray-500 text-sm mt-4 md:mt-0">
            Designed & Built with <span className="text-primary">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
