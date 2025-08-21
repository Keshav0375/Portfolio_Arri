import React, { useEffect, useRef, useCallback } from 'react';
import { ArrowDown, Terminal } from 'lucide-react';

const Hero = React.memo(() => {
  const typedTextRef = useRef<HTMLSpanElement>(null);
  
  const phrases = [
    'AI Engineer',
    'Data Engineer', 
    'Backend Developer',
    'Problem Solver'
  ];
  
  // Optimized typing effect
  const initTypeWriter = useCallback(() => {
    if (!typedTextRef.current) return;
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 120;
    
    const type = () => {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        if (typedTextRef.current) {
          typedTextRef.current.textContent = currentPhrase.substring(0, charIndex - 1);
        }
        charIndex--;
        typingSpeed = 60;
      } else {
        if (typedTextRef.current) {
          typedTextRef.current.textContent = currentPhrase.substring(0, charIndex + 1);
        }
        charIndex++;
        typingSpeed = 120;
      }
      
      if (!isDeleting && charIndex === currentPhrase.length) {
        typingSpeed = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    setTimeout(type, 1000);
  }, [phrases]);
  
  useEffect(() => {
    const timer = setTimeout(initTypeWriter, 500);
    return () => clearTimeout(timer);
  }, [initTypeWriter]);
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      {/* Optimized background effects */}
      <div className="absolute inset-0 z-[-1] opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/30 filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary/20 filter blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-dark-400/70 rounded-full px-4 py-2 backdrop-blur-sm text-gray-300 text-sm">
              <Terminal size={16} className="text-primary" />
              <span>Welcome to my digital space</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Hi, I'm <span className="neon-text">Keshav Arri</span>
            </h1>
            
            <div className="text-xl sm:text-2xl font-mono text-gray-300 h-8">
              <span>I'm a </span>
              <span ref={typedTextRef} className="neon-text"></span>
              <span className="animate-blink">|</span>
            </div>
            
            <p className="text-gray-400 text-lg max-w-lg">
              Architecting the future: from generative AI systems to cloud-powered backends, 
              I build intelligent solutions that bridge visionary ideas with production-ready code.
            </p>
            
            <div className="flex space-x-4 pt-4">
              <a href="#projects" className="neon-button">
                View My Work
              </a>
              <a href="#contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded transition-all duration-300">
                Contact Me
              </a>
            </div>
          </div>
          
          {/* Optimized code window - lazy loaded content */}
          <div className="relative hidden md:block">
            <div className="relative w-full h-[500px] bg-gradient-to-br from-dark-400 to-dark-300 rounded-lg overflow-hidden neon-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="code-window w-full max-w-md p-4 font-mono text-sm text-gray-300">
                  <pre className="whitespace-pre-wrap">
                    <code>
                      <span className="text-accent">class</span> <span className="text-primary">KeshavArri</span>:<br/>
                      &nbsp;&nbsp;&nbsp;<span className="text-accent">def</span> <span className="text-secondary">__init__</span>(self):<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.<span className="text-secondary">name</span> = <span className="text-green-400">"Keshav Arri"</span><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.<span className="text-secondary">role</span> = <span className="text-green-400">"AI/ML Engineer"</span><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.<span className="text-secondary">experience</span> = <span className="text-accent">2</span>+<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.<span className="text-secondary">projects</span> = <span className="text-accent">15</span>+<br/>
                      <br/>
                      &nbsp;&nbsp;&nbsp;<span className="text-accent">def</span> <span className="text-secondary">solve_problems</span>(self):<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-accent">return</span> <span className="text-green-400">"AI solutions"</span><br/>
                      <br/>
                      &nbsp;&nbsp;&nbsp;<span className="text-accent">def</span> <span className="text-secondary">contact</span>(self):<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-accent">return</span> <span className="text-green-400">"arri@uwindsor.ca"</span><br/>
                    </code>
                  </pre>
                </div>
              </div>
              
              {/* Terminal header */}
              <div className="absolute top-0 left-0 w-full h-8 bg-dark-400 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400">keshav_profile.py</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-primary transition-colors duration-300">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;