import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import ParticleBackground from './components/background/ParticleBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import CursorEffect from './components/ui/CursorEffect';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload critical resources
    Promise.all([
      // Add any critical resources to preload here
      new Promise(resolve => setTimeout(resolve, 1500)) // Minimum loading time
    ]).then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#0f0f0f]">
        <div className="text-[#6c5ce7] text-4xl font-mono animate-pulse">
          Loading<span className="animate-blink">_</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0f0f0f] text-gray-200 min-h-screen relative overflow-hidden">
      <ParticleBackground />
      <CursorEffect />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;