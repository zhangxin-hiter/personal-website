'use client';

import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
}

const MAX_PARTICLES = 150;
const PARTICLES_PER_CLICK = 20;

export default function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animatingRef = useRef(false);
  const rafRef = useRef<number>(0);
  const lastClickRef = useRef(0);
  const isVisibleRef = useRef(true);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Skip rendering if tab is not visible
    if (!isVisibleRef.current) {
      rafRef.current = requestAnimationFrame(animate);
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current = particlesRef.current.filter((p) => p.alpha > 0);

    if (particlesRef.current.length === 0) {
      animatingRef.current = false;
      return;
    }

    particlesRef.current.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.12;
      p.alpha -= 0.025;
      p.vx *= 0.98;
      p.vy *= 0.98;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dfe6e9', '#c9a227', '#1e3a5f'];

    const createParticles = (x: number, y: number) => {
      // Rate limiting: max 1 click per 100ms
      const now = Date.now();
      if (now - lastClickRef.current < 100) return;
      lastClickRef.current = now;

      // Limit total particles for performance
      if (particlesRef.current.length >= MAX_PARTICLES) {
        particlesRef.current = particlesRef.current.slice(-MAX_PARTICLES + PARTICLES_PER_CLICK);
      }

      for (let i = 0; i < PARTICLES_PER_CLICK; i++) {
        const angle = (Math.PI * 2 * i) / PARTICLES_PER_CLICK + Math.random() * 0.5;
        const speed = Math.random() * 3 + 1.5;
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 2.5 + 1.5,
        });
      }

      if (!animatingRef.current) {
        animatingRef.current = true;
        animate();
      }
    };

    const handleClick = (e: MouseEvent) => {
      createParticles(e.clientX, e.clientY);
    };

    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('click', handleClick, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('click', handleClick);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
    />
  );
}
