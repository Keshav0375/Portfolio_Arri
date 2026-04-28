import React, { useEffect, useRef } from 'react';

const ScrollProgress = React.memo(() => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let ticking = false;

    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scale = height > 0 ? window.scrollY / height : 0;
      bar.style.transform = `scaleX(${scale})`;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div
        ref={barRef}
        className="h-full w-full bg-primary origin-left"
        style={{ transform: 'scaleX(0)', willChange: 'transform' }}
      />
    </div>
  );
});

ScrollProgress.displayName = 'ScrollProgress';

export default ScrollProgress;