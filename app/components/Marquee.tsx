'use client';

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  speed?: number;
  className?: string;
}

function MarqueeRow({ items, reverse = false, speed = 30 }: { items: string[]; reverse?: boolean; speed?: number }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-2">
      <div
        className="flex gap-4 w-max"
        style={{
          animation: `${reverse ? 'marqueeRight' : 'marqueeLeft'} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-[var(--border)] bg-[var(--card-bg)] text-[var(--foreground)] whitespace-nowrap hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee({ items, className = '' }: MarqueeProps) {
  const mid = Math.ceil(items.length / 2);
  const row1 = items.slice(0, mid);
  const row2 = items.slice(mid);

  return (
    <div className={`space-y-2 ${className}`} aria-label="Tech stack">
      <MarqueeRow items={row1} speed={35} />
      {row2.length > 0 && <MarqueeRow items={row2} reverse speed={40} />}
    </div>
  );
}
