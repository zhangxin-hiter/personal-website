interface GridPatternProps {
  variant?: 'dots' | 'grid' | 'cross';
  size?: number;
  spacing?: number;
  className?: string;
}

export default function GridPattern({
  variant = 'dots',
  size = 1.5,
  spacing = 32,
  className = '',
}: GridPatternProps) {
  const patternId = `grid-${variant}`;

  const patternContent = (() => {
    switch (variant) {
      case 'dots':
        return (
          <circle
            cx={spacing / 2}
            cy={spacing / 2}
            r={size}
            fill="var(--text-muted)"
            opacity="0.15"
          />
        );
      case 'grid':
        return (
          <>
            <line x1="0" y1="0" x2={spacing} y2="0" stroke="var(--text-muted)" strokeWidth="0.5" opacity="0.1" />
            <line x1="0" y1="0" x2="0" y2={spacing} stroke="var(--text-muted)" strokeWidth="0.5" opacity="0.1" />
          </>
        );
      case 'cross':
        return (
          <g opacity="0.12">
            <line
              x1={spacing / 2 - size}
              y1={spacing / 2}
              x2={spacing / 2 + size}
              y2={spacing / 2}
              stroke="var(--text-muted)"
              strokeWidth="1"
            />
            <line
              x1={spacing / 2}
              y1={spacing / 2 - size}
              x2={spacing / 2}
              y2={spacing / 2 + size}
              stroke="var(--text-muted)"
              strokeWidth="1"
            />
          </g>
        );
    }
  })();

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <svg className="w-full h-full">
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            {patternContent}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
