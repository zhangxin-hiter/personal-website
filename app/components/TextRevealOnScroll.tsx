'use client';

import { useEffect, useRef, useState } from 'react';

interface TextRevealOnScrollProps {
  text: string;
  className?: string;
}

export default function TextRevealOnScroll({ text, className = '' }: TextRevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.8;
      const end = windowHeight * 0.2;
      const current = rect.top;

      if (current >= start) {
        setProgress(0);
      } else if (current <= end) {
        setProgress(1);
      } else {
        setProgress((start - current) / (start - end));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const words = text.split('');

  return (
    <div ref={ref} className={`py-16 md:py-24 ${className}`}>
      <p className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold leading-relaxed text-center max-w-4xl mx-auto">
        {words.map((char, i) => {
          const charProgress = i / words.length;
          const isVisible = progress > charProgress;
          return (
            <span
              key={i}
              className="transition-colors duration-200"
              style={{
                color: isVisible ? 'var(--primary)' : 'var(--border)',
              }}
            >
              {char}
            </span>
          );
        })}
      </p>
    </div>
  );
}
