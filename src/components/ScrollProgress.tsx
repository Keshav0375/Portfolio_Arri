import React, { useEffect, useState } from 'react';
import { useScrollThrottle } from '../hooks/useScrollThrottle';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  const handleScroll = useScrollThrottle(() => {
    const winScroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (winScroll / height) * 100;
    setProgress(scrolled);
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{
          width: `${progress}%`,
          transform: 'translateZ(0)',
          willChange: 'width',
        }}
      />
    </div>
  );
};

export default ScrollProgress;