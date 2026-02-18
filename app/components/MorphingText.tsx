'use client';

import { useEffect, useState } from 'react';

interface MorphingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function MorphingText({ words, interval = 3000, className = '' }: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 600);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={`inline-block relative ${className}`}>
      <span
        className="inline-block transition-all duration-500"
        style={{
          opacity: isAnimating ? 0 : 1,
          filter: isAnimating ? 'blur(12px)' : 'blur(0px)',
          transform: isAnimating ? 'scale(0.95)' : 'scale(1)',
        }}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
}
