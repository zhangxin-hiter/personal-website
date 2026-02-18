'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  fill,
  width,
  height,
  priority = false,
  className = '',
  sizes,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setIsError(false);
  }, [src]);

  if (isError) {
    return (
      <div
        className={`bg-[var(--section-bg)] flex items-center justify-center ${className}`}
        style={fill ? {} : { width, height }}
        role="img"
        aria-label={`Failed to load: ${alt}`}
      >
        <svg
          className="w-8 h-8 text-[var(--text-muted)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={fill ? {} : { width, height }}>
      {!isLoaded && !priority && (
        <div className="absolute inset-0 bg-[var(--section-bg)] animate-pulse rounded-lg" />
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        priority={priority}
        sizes={sizes}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
        unoptimized
      />
    </div>
  );
}
