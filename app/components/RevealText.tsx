'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface RevealTextProps {
  children: ReactNode;
  className?: string;
}

export default function RevealText({ children, className = '' }: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <div ref={ref} className={`relative inline-block overflow-hidden ${className}`}>
      <div
        className="transition-transform duration-700 ease-out"
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
        }}
      >
        {children}
      </div>
      {/* Sweeping color overlay */}
      <div
        className="absolute inset-0 origin-left transition-transform duration-700 ease-out"
        style={{
          background: 'var(--accent)',
          transform: visible ? 'scaleX(0)' : 'scaleX(1)',
          transformOrigin: visible ? 'right' : 'left',
          transitionDelay: visible ? '0.3s' : '0s',
        }}
        aria-hidden="true"
      />
    </div>
  );
}
