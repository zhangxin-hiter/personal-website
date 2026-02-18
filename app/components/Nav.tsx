"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = isEnglish
    ? [
        { href: "#education", label: "Education" },
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
        { href: "#awards", label: "Awards" },
        { href: "#contact", label: "Contact" },
        { href: "/blog", label: "Blog", isPage: true },
      ]
    : [
        { href: "#education", label: "教育经历" },
        { href: "#projects", label: "项目经历" },
        { href: "#skills", label: "专业技能" },
        { href: "#awards", label: "荣誉奖励" },
        { href: "#contact", label: "联系方式" },
        { href: "/blog", label: "博客", isPage: true },
      ];

  return (
    <nav className="bg-[var(--nav-bg)] border-b border-[var(--accent)] sticky top-0 z-50 shadow-lg" role="navigation" aria-label="主导航">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href={isEnglish ? "/en" : "/"} className="text-xl font-serif font-semibold text-white hover:text-[var(--accent)] transition-colors" aria-label={isEnglish ? "Xin Zhang Homepage" : "张昕主页"}>
            {isEnglish ? "Xin Zhang" : "张昕"} <span className="text-sm text-gray-400">| Xin Zhang</span>
          </a>
          <div className="flex items-center gap-6">
            {/* Desktop nav */}
            <div className="hidden md:flex gap-6" role="menubar">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  className={`text-sm transition-colors ${item.isPage ? (pathname === item.href ? "text-[var(--accent)]" : "text-gray-300 hover:text-[var(--accent)]") : "text-gray-300 hover:text-[var(--accent)]"}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden p-2 text-gray-300 hover:text-[var(--accent)] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            <div className="flex items-center gap-2 border-l border-gray-600 pl-4" role="group" aria-label="语言切换">
              <a href="/" className={`text-sm font-medium ${!isEnglish ? "text-[var(--accent)]" : "text-gray-300 hover:text-[var(--accent)]"} transition-colors`} aria-label="切换到中文" aria-current={!isEnglish ? "page" : undefined}>中</a>
              <span className="text-gray-500" aria-hidden="true">|</span>
              <a href="/en" className={`text-sm font-medium ${isEnglish ? "text-[var(--accent)]" : "text-gray-300 hover:text-[var(--accent)]"} transition-colors`} aria-label="Switch to English" aria-current={isEnglish ? "page" : undefined}>EN</a>
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-600">
          <div className="max-w-5xl mx-auto px-6 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm py-2 transition-colors ${item.isPage ? (pathname === item.href ? "text-[var(--accent)]" : "text-gray-300 hover:text-[var(--accent)]") : "text-gray-300 hover:text-[var(--accent)]"}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
