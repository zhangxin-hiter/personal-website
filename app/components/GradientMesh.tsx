'use client';

interface GradientMeshProps {
  className?: string;
}

export default function GradientMesh({ className = '' }: GradientMeshProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          top: '-10%',
          left: '-10%',
          animation: 'meshFloat1 20s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          top: '20%',
          right: '-5%',
          animation: 'meshFloat2 25s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[450px] h-[450px] rounded-full opacity-25 blur-[110px]"
        style={{
          background: 'radial-gradient(circle, var(--link) 0%, transparent 70%)',
          bottom: '-5%',
          left: '30%',
          animation: 'meshFloat3 22s ease-in-out infinite',
        }}
      />
    </div>
  );
}
