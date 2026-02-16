'use client';

import { useRef, useState, ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlowCard({ children, className = '' }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGradientPos({ x, y });
  };

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Glow border */}
      <div
        className="absolute -inset-[1px] rounded-lg opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(circle at ${gradientPos.x}% ${gradientPos.y}%, var(--accent) 0%, var(--primary) 50%, transparent 80%)`,
        }}
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative bg-[var(--card-bg)] rounded-lg shadow-md p-5 border border-[var(--border)] transition-all duration-300">
        {children}
      </div>
    </div>
  );
}
