import React, { useEffect, useRef } from 'react';

const CursorEffect = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device has hover capability
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;

    const moveCursor = (e: MouseEvent) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;
      
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    window.addEventListener('mousemove', moveCursor);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  useEffect(() => {
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) return;

    const cursor = cursorRef.current;
    if (!cursor) return;
    
    const handleMouseDown = () => {
      cursor.classList.add('cursor-active');
    };
    
    const handleMouseUp = () => {
      cursor.classList.remove('cursor-active');
    };
    
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Add effect when hovering over links and buttons
    const handleMouseEnterLink = () => {
      cursor.classList.add('cursor-hover');
    };
    
    const handleMouseLeaveLink = () => {
      cursor.classList.remove('cursor-hover');
    };
    
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnterLink);
      link.addEventListener('mouseleave', handleMouseLeaveLink);
    });
    
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnterLink);
        link.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
    };
  }, []);
  
  return (
    <>
      <div 
        ref={cursorRef} 
        className="hidden md:block fixed pointer-events-none w-8 h-8 rounded-full 
                  border border-primary z-50 -translate-x-1/2 -translate-y-1/2 
                  transition-transform duration-100 ease-out will-change-transform"
        style={{ 
          boxShadow: '0 0 10px rgba(108, 92, 231, 0.5)',
          opacity: 0.6,
        }}
      />
      <div 
        ref={cursorDotRef} 
        className="hidden md:block fixed pointer-events-none w-1 h-1 rounded-full 
                  bg-primary z-50 -translate-x-1/2 -translate-y-1/2"
        style={{ 
          boxShadow: '0 0 5px rgba(108, 92, 231, 0.7)',
        }}
      />
    </>
  );
};

export default CursorEffect;