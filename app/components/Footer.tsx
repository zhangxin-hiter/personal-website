"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <footer className="bg-[var(--primary)] border-t border-[var(--accent)] mt-20">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="text-center text-sm text-gray-300">
            <p>© 2026 {isEnglish ? "Xin Zhang Personal Website" : "张昕个人主页"} | Xin Zhang Personal Website</p>
            <p className="mt-1 text-xs text-gray-400">哈尔滨工业大学(深圳) | Harbin Institute of Technology (Shenzhen)</p>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <a href="/" className={`text-xs ${!isEnglish ? "text-[var(--accent)]" : "text-gray-400 hover:text-[var(--accent)]"} transition-colors`}>中文版</a>
            <span className="text-gray-600">|</span>
            <a href="/en" className={`text-xs ${isEnglish ? "text-[var(--accent)]" : "text-gray-400 hover:text-[var(--accent)]"} transition-colors`}>English</a>
          </div>
          <div className="mt-4 bg-[var(--card-bg)] p-4 rounded-lg shadow-md">
            <h4 className="text-xs font-medium text-[var(--primary)] mb-2 text-center">访客分布 | Visitor Map</h4>
            <a href="https://clustrmaps.com/site/1c99c" title="查看详细访客统计 | View detailed statistics">
              <img
                src="//www.clustrmaps.com/map_v2.png?d=7NKnjFd9sTzDrKdIaJlf34f2X7ZY_WSFuMH_AnY5BPA&cl=ffffff"
                alt="访客地理分布热图 | Visitor geographic distribution"
                width="180"
                height="120"
                loading="lazy"
                className="rounded hover:opacity-90 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
