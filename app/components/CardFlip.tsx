'use client';

import { useState, ReactNode } from 'react';

interface CardFlipProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

export default function CardFlip({ front, back, className = '' }: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`perspective-1000 cursor-pointer ${className}`}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsFlipped(!isFlipped);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label="Click to flip card"
    >
      <div
        className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700"
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden">
          {front}
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ transform: 'rotateY(180deg)' }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
