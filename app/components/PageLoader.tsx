'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setProgress(0);

    const simulateProgress = () => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 90);
      });
    };

    const interval = setInterval(simulateProgress, 100);

    timeoutRef.current = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => setIsLoading(false), 300);
    }, 500);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[10000] h-1 bg-[var(--accent)] transition-all duration-300 ease-out"
      style={{
        width: `${progress}%`,
        opacity: progress >= 100 ? 0 : 1,
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page loading progress"
    />
  );
}
