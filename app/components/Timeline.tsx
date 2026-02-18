'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface TimelineItem {
  date: string;
  title: string;
  subtitle?: string;
  content: ReactNode;
  icon?: string;
  color?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

function TimelineEntry({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex items-start gap-4 md:gap-8 mb-8 md:mb-12 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-row`}
    >
      {/* Card */}
      <div
        className={`flex-1 transition-all duration-700 ${
          visible
            ? 'opacity-100 translate-x-0'
            : isLeft
            ? 'opacity-0 md:-translate-x-8 -translate-x-4'
            : 'opacity-0 md:translate-x-8 -translate-x-4'
        }`}
      >
        <div className="bg-[var(--card-bg)] rounded-lg shadow-md border border-[var(--border)] p-5 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-2 mb-2">
            {item.icon && <span className="text-lg">{item.icon}</span>}
            <span
              className="text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{
                backgroundColor: `color-mix(in srgb, ${item.color || 'var(--accent)'} 15%, transparent)`,
                color: item.color || 'var(--accent)',
              }}
            >
              {item.date}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-[var(--primary)] mb-1">
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="text-sm text-[var(--text-muted)] mb-3">{item.subtitle}</p>
          )}
          <div className="text-sm text-[var(--text-secondary)]">{item.content}</div>
        </div>
      </div>

      {/* Node - visible on md+ in center */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0 order-none">
        <div
          className={`w-4 h-4 rounded-full border-4 transition-all duration-500 ${
            visible ? 'scale-100' : 'scale-0'
          }`}
          style={{
            borderColor: item.color || 'var(--accent)',
            backgroundColor: 'var(--background)',
          }}
        />
      </div>

      {/* Spacer for alternating layout on desktop */}
      <div className="hidden md:block flex-1" />
    </div>
  );
}

export default function Timeline({ items, className = '' }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Central line - desktop only */}
      <div
        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
        style={{ backgroundColor: 'var(--border)' }}
        aria-hidden="true"
      />
      {/* Left line - mobile only */}
      <div
        className="md:hidden absolute left-0 top-0 bottom-0 w-0.5"
        style={{ backgroundColor: 'var(--border)' }}
        aria-hidden="true"
      />
      <div className="relative">
        {items.map((item, i) => (
          <TimelineEntry key={`${item.title}-${i}`} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}
