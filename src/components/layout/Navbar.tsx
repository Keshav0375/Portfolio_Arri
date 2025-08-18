import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import UWindsor from "../../logos/file.svg";

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

// University of Windsor Logo Component
const UWindsorLogo = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <img 
    src={UWindsor} 
    alt="University of Windsor" 
    width={size} 
    height={size} 
    className={`${className} object-contain`}
  />
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-500/80 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <span className="text-white text-xl font-mono font-bold">
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
                  className="text-gray-300 hover:text-primary hover:neon-text px-3 py-2 text-sm font-medium transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Keshav0375" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-primary transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/keshav-kumar-arri/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-primary transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="https://www.uwindsor.ca" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-primary transition-colors duration-300"
               title="University of Windsor">
              <UWindsorLogo size={20} />
            </a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-400/90 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-gray-300 hover:text-primary font-medium transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-4 px-3 py-3">
            <a href="https://github.com/Keshav0375" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-primary transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/keshav-kumar-arri/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-primary transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="https://www.uwindsor.ca" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-primary transition-colors duration-300"
               title="University of Windsor">
              <UWindsorLogo size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;