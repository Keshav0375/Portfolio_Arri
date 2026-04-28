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
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animationIdRef = useRef<number>();
  const resizeTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const lastMouseUpdateRef = useRef(0);
  const [isVisible, setIsVisible] = useState(false);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  const debouncedResize = useCallback(() => {
    clearTimeout(resizeTimerRef.current);
    resizeTimerRef.current = setTimeout(resizeCanvas, 150);
  }, [resizeCanvas]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = performance.now();
    if (now - lastMouseUpdateRef.current >= 16) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      lastMouseUpdateRef.current = now;
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    resizeCanvas();

    const neonColors = ['rgba(108, 92, 231, 0.6)', 'rgba(0, 255, 255, 0.5)', 'rgba(233, 30, 99, 0.5)'];
    const particleCount = Math.min(Math.floor(window.innerWidth * 0.018), 50);

    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      color: neonColors[Math.floor(Math.random() * neonColors.length)],
    }));
    setIsVisible(true);

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const p of particlesRef.current) {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width) p.x = 0;
        else if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        else if (p.y < 0) p.y = canvas.height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        const dx = mx - p.x;
        const dy = my - p.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < 6400) {
          const dist = Math.sqrt(distSq);
          p.x += dx * 0.001;
          p.y += dy * 0.001;
          ctx.beginPath();
          ctx.strokeStyle = p.color.replace(/[\d.]+\)$/, `${0.1 * (1 - dist / 80)})`);
          ctx.lineWidth = 0.3;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mx, my);
          ctx.stroke();
        }
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    const handleVisibility = () => {
      if (document.hidden) {
        if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      } else {
        animationIdRef.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener('resize', debouncedResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener('resize', debouncedResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibility);
      clearTimeout(resizeTimerRef.current);
    };
  }, [resizeCanvas, debouncedResize, handleMouseMove]);

  if (!isVisible) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-40"
      style={{ zIndex: 0, willChange: 'transform', contain: 'strict' }}
    />
  );
});

ParticleBackground.displayName = 'ParticleBackground';

export default ParticleBackground;
