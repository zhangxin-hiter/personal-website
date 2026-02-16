'use client';

import { useEffect, useRef, useState, useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

interface GiscusProps {
  repo: string;
  repoId: string;
  category: string;
  categoryId: string;
}

export default function Giscus({ repo, repoId, category, categoryId }: GiscusProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme ?? 'light';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !ref.current) return;

    ref.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', repo);
    script.setAttribute('data-repo-id', repoId);
    script.setAttribute('data-category', category);
    script.setAttribute('data-category-id', categoryId);
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    script.setAttribute('data-lang', 'zh-CN');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    ref.current.appendChild(script);
  }, [isVisible, repo, repoId, category, categoryId, theme]);

  return (
    <div className="bg-[var(--card-bg)] rounded-lg shadow-md border border-[var(--border)] p-6">
      <h3 className="text-lg font-semibold text-[var(--primary)] mb-4 flex items-center gap-2">
        <span>💬</span> 留言板
      </h3>
      <div ref={ref} className="min-h-[200px]" />
    </div>
  );
}
