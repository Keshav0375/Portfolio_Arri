import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ScrollProgress';

const ParticleBackground = lazy(() => import('./components/background/ParticleBackground'));
const Education = lazy(() => import('./components/sections/Education'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Contact = lazy(() => import('./components/sections/Contact'));
const CursorEffect = lazy(() => import('./components/ui/CursorEffect'));

const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="text-primary text-xl font-mono animate-pulse">Loading...</div>
  </div>
);

function App() {
  const [particlesLoaded, setParticlesLoaded] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  useEffect(() => {
    const timer = setTimeout(() => setParticlesLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white text-slate-800 dark:bg-[#0f0f0f] dark:text-gray-200 min-h-screen relative">
      {particlesLoaded && (
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>
      )}

      <Suspense fallback={null}>
        <CursorEffect />
      </Suspense>

      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="relative z-10">
        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
