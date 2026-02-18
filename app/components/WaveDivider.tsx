interface WaveDividerProps {
  variant?: 'wave' | 'curve' | 'triangle' | 'tilt';
  flip?: boolean;
  className?: string;
  color?: string;
}

export default function WaveDivider({
  variant = 'wave',
  flip = false,
  className = '',
  color,
}: WaveDividerProps) {
  const paths: Record<string, string> = {
    wave: 'M0,64 C320,120 480,0 720,64 C960,128 1120,0 1440,64 L1440,192 L0,192 Z',
    curve: 'M0,128 Q360,0 720,128 Q1080,256 1440,128 L1440,192 L0,192 Z',
    triangle: 'M0,192 L720,0 L1440,192 Z',
    tilt: 'M0,192 L1440,0 L1440,192 Z',
  };

  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 192"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24"
        style={{ display: 'block' }}
      >
        <path
          d={paths[variant]}
          fill={color || 'var(--section-bg)'}
        />
      </svg>
    </div>
  );
}
