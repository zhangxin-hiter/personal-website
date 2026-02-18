'use client';

import { useState, ReactNode } from 'react';

interface DockItem {
  icon: ReactNode;
  label: string;
  href: string;
}

interface FloatingDockProps {
  items: DockItem[];
  className?: string;
}

export default function FloatingDock({ items, className = '' }: FloatingDockProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return 1.5;
    if (distance === 1) return 1.25;
    if (distance === 2) return 1.1;
    return 1;
  };

  return (
    <div
      className={`hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-50
        items-end gap-1 px-4 py-2 rounded-2xl
        bg-[var(--card-bg)] border border-[var(--border)]
        shadow-2xl backdrop-blur-sm ${className}`}
      role="navigation"
      aria-label="Quick navigation"
    >
      {items.map((item, i) => (
        <a
          key={item.label}
          href={item.href}
          className="flex flex-col items-center transition-all duration-200 ease-out px-1.5 group relative"
          style={{
            transform: `scale(${getScale(i)})`,
            transformOrigin: 'bottom center',
          }}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          title={item.label}
        >
          {/* Tooltip */}
          <span
            className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs
              bg-[var(--foreground)] text-[var(--background)] whitespace-nowrap
              opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
          >
            {item.label}
          </span>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg
            bg-[var(--section-bg)] text-[var(--primary)]
            group-hover:bg-[var(--accent)] group-hover:text-white
            transition-colors duration-200">
            {item.icon}
          </div>
        </a>
      ))}
    </div>
  );
}
