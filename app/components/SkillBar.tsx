'use client';

import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  color?: string;
}

interface SkillBarProps {
  skills: Skill[];
  className?: string;
}

export default function SkillBar({ skills, className = '' }: SkillBarProps) {
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`space-y-4 ${className}`}>
      {skills.map((skill, i) => (
        <div key={skill.name}>
          <div className="flex justify-between mb-1.5">
            <span className="text-sm font-medium text-[var(--foreground)]">
              {skill.name}
            </span>
            <span className="text-sm text-[var(--text-muted)]">{skill.level}%</span>
          </div>
          <div className="h-2.5 bg-[var(--section-bg)] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{
                width: visible ? `${skill.level}%` : '0%',
                background: skill.color || 'linear-gradient(90deg, var(--primary), var(--accent))',
                transitionDelay: `${i * 100}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
