'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

interface SmoothCounterProps {
  stats: StatItem[];
  className?: string;
}

export default function SmoothCounter({ stats, className = '' }: SmoothCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

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
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(stats.map((s) => s.value * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [visible, stats]);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 ${className}`}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="text-center"
          style={{
            animation: visible ? `counterSlide 0.6s ease-out ${i * 0.1}s both` : 'none',
          }}
        >
          <div className="text-3xl md:text-5xl font-bold text-[var(--primary)] mb-2 tabular-nums">
            {stat.prefix}
            {counts[i].toFixed(stat.decimals ?? 0)}
            {stat.suffix}
          </div>
          <div className="text-sm text-[var(--text-muted)] font-medium uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
