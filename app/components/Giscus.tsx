'use client';

import { useEffect, useRef } from 'react';

interface GiscusProps {
  repo: string;
  repoId: string;
  category: string;
  categoryId: string;
}

export default function Giscus({ repo, repoId, category, categoryId }: GiscusProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

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
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'zh-CN');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    ref.current.appendChild(script);

    return () => {
      if (ref.current) {
        ref.current.innerHTML = '';
      }
    };
  }, [repo, repoId, category, categoryId]);

  return (
    <div className="bg-white rounded-lg shadow-md border border-[#e2e8f0] p-6">
      <h3 className="text-lg font-semibold text-[#1e3a5f] mb-4 flex items-center gap-2">
        <span className="text-[#c9a227]">💬</span> 留言板
      </h3>
      <div ref={ref} />
    </div>
  );
}
