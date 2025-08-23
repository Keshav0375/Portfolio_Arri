import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ScrollProgress';

// Lazy load components that are below the fold
const ParticleBackground = lazy(() => import('./components/background/ParticleBackground'));
const About = lazy(() => import('./components/sections/About'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Education = lazy(() => import('./components/sections/Education'));
const Contact = lazy(() => import('./components/sections/Contact'));
const CursorEffect = lazy(() => import('./components/ui/CursorEffect'));

// Simple loading fallback component
const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-primary text-xl font-mono animate-pulse">Loading...</div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  useEffect(() => {
    // Much faster loading - remove artificial delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Reduced from 1500ms to 500ms

    return () => clearTimeout(timer);
  }, []);

  // Preload critical components after initial render
  useEffect(() => {
    if (!isLoading) {
      // Load particles after main content
      const particleTimer = setTimeout(() => {
        setParticlesLoaded(true);
      }, 100);

      return () => clearTimeout(particleTimer);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#0f0f0f]">
        <div className="text-[#6c5ce7] text-2xl font-mono">
          Loading<span className="animate-blink">_</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0f0f0f] text-gray-200 min-h-screen relative">
      {/* Load particles only after main content */}
      {particlesLoaded && (
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>
      )}
      
      <Suspense fallback={null}>
        <CursorEffect />
      </Suspense>
      
      <ScrollProgress />
      <Navbar />
      
      <main className="relative z-10">
        {/* Hero loads immediately - above the fold */}
        <Hero />
        
        {/* Lazy load everything else */}
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;