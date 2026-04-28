import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Sun, Moon } from 'lucide-react';
import UWindsor from "../../logos/file.svg";

const navLinks = [
  { name: 'Home',       href: '#home' },
  { name: 'Education',  href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Contact',    href: '#contact' },
];

const UWindsorLogo = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <img src={UWindsor} alt="University of Windsor" width={size} height={size} className={`${className} object-contain`} />
);

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-[background-color,backdrop-filter,box-shadow] duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm dark:bg-[#141414]/80 dark:shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <span className="text-slate-900 dark:text-white text-xl font-mono font-bold">
                <span className="neon-text">Keshav</span>Arri<span className="text-primary">.</span>
              </span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 text-sm font-medium transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a href="https://github.com/Keshav0375" target="_blank" rel="noopener noreferrer"
               className="text-slate-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/keshav-kumar-arri/" target="_blank" rel="noopener noreferrer"
               className="text-slate-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="https://www.uwindsor.ca" target="_blank" rel="noopener noreferrer"
               className="text-slate-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300"
               title="University of Windsor">
              <UWindsorLogo size={20} />
            </a>
            <button
              onClick={toggleTheme}
              className="ml-1 p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-primary hover:border-primary/50 transition-all duration-300 dark:border-gray-700 dark:text-gray-400 dark:hover:text-primary dark:hover:border-primary/50"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-primary transition-all duration-300 dark:border-gray-700 dark:text-gray-400"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 dark:text-gray-400 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-slate-200 dark:bg-[#141414]/95 dark:border-gray-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-slate-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary font-medium transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-4 px-3 py-3">
            <a href="https://github.com/Keshav0375" target="_blank" rel="noopener noreferrer"
               className="text-slate-500 hover:text-primary dark:text-gray-400 transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/keshav-kumar-arri/" target="_blank" rel="noopener noreferrer"
               className="text-slate-500 hover:text-primary dark:text-gray-400 transition-colors duration-300">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
