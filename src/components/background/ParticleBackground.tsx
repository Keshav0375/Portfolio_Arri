import React, { useEffect, useRef, useState, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const ParticleBackground = React.memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number>();
  const [isVisible, setIsVisible] = useState(false);

  // Optimized resize handler with debouncing
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  // Debounced resize handler
  const debouncedResize = useCallback(() => {
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(resizeCanvas, 100);
  }, [resizeCanvas]);

  // Optimized mouse move handler with throttling
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (performance.now() % 2 === 0) { // Throttle to every other frame
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    resizeCanvas();

    // Reduced particle count for better performance
    const createParticles = () => {
      const neonColors = ['rgba(108, 92, 231, 0.6)', 'rgba(0, 255, 255, 0.5)', 'rgba(233, 30, 99, 0.5)'];
      particlesRef.current = [];
      
      // Significantly reduced particle count
      const particleCount = Math.min(Math.floor(window.innerWidth * 0.02), 60);
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          color: neonColors[Math.floor(Math.random() * neonColors.length)],
        });
      }
      setIsVisible(true);
    };

    createParticles();

    // Optimized animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Optimized mouse interaction - only check every few frames
        if (Math.random() > 0.95) { // Reduce frequency
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 80) { // Reduced interaction distance
            particle.x += dx * 0.001;
            particle.y += dy * 0.001;
            
            ctx.beginPath();
            ctx.strokeStyle = particle.color.replace('0.6', `${0.1 * (1 - distance / 80)}`);
            ctx.lineWidth = 0.3;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();
          }
        }
      });
      
      animationIdRef.current = requestAnimationFrame(animate);
    };
    
    animationIdRef.current = requestAnimationFrame(animate);
    
    // Event listeners
    window.addEventListener('resize', debouncedResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener('resize', debouncedResize);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(window.resizeTimeout);
    };
  }, [resizeCanvas, debouncedResize, handleMouseMove]);

  if (!isVisible) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-40"
      style={{ zIndex: 0, willChange: 'transform' }}
    />
  );
});

ParticleBackground.displayName = 'ParticleBackground';

export default ParticleBackground;