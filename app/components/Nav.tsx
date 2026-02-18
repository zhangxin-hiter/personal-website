"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--nav-bg)]/95 backdrop-blur-md shadow-xl border-b border-[var(--accent)]"
          : "bg-[var(--nav-bg)] border-b border-[var(--accent)]"
      }`}
      role="navigation"
      aria-label="主导航"
    >
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href={isEnglish ? "/en" : "/"}
            className="text-xl font-serif font-semibold text-white hover:text-[var(--accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--nav-bg)] rounded px-2 -ml-2"
            aria-label={isEnglish ? "Xin Zhang Homepage" : "张昕主页"}
          >
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
                  className={`text-sm transition-colors relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--nav-bg)] rounded px-2 py-1 -mx-2 ${
                    item.isPage
                      ? pathname === item.href
                        ? "text-[var(--accent)]"
                        : "text-gray-300 hover:text-[var(--accent)]"
                      : "text-gray-300 hover:text-[var(--accent)]"
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-2 right-2 h-0.5 bg-[var(--accent)] transition-transform origin-left ${pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </a>
              ))}
            </div>
            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden p-2 text-gray-300 hover:text-[var(--accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--nav-bg)] rounded"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-5 h-5 relative">
                <span
                  className={`absolute left-0 block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                    menuOpen ? 'top-2 rotate-45' : 'top-1'
                  }`}
                />
                <span
                  className={`absolute left-0 top-2 block w-5 h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                    menuOpen ? 'top-2 -rotate-45' : 'top-3'
                  }`}
                />
              </div>
            </button>
            <div className="flex items-center gap-2 border-l border-gray-600 pl-4" role="group" aria-label="语言切换">
              <a
                href="/"
                className={`text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--nav-bg)] rounded px-1 ${
                  !isEnglish ? "text-[var(--accent)]" : "text-gray-300 hover:text-[var(--accent)]"
                }`}
                aria-label="切换到中文"
                aria-current={!isEnglish ? "page" : undefined}
              >
                中
              </a>
              <span className="text-gray-500" aria-hidden="true">|</span>
              <a
                href="/en"
                className={`text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--nav-bg)] rounded px-1 ${
                  isEnglish ? "text-[var(--accent)]" : "text-gray-300 hover:text-[var(--accent)]"
                }`}
                aria-label="Switch to English"
                aria-current={isEnglish ? "page" : undefined}
              >
                EN
              </a>
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="border-t border-gray-600/50 bg-[var(--nav-bg)]/95 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-6 py-3 flex flex-col gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm py-3 px-2 rounded transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--nav-bg)] ${
                  item.isPage
                    ? pathname === item.href
                      ? "text-[var(--accent)] bg-[var(--accent)]/10"
                      : "text-gray-300 hover:text-[var(--accent)] hover:bg-[var(--accent)]/5"
                    : "text-gray-300 hover:text-[var(--accent)] hover:bg-[var(--accent)]/5"
                }`}
                style={{
                  transitionDelay: menuOpen ? `${index * 50}ms` : '0ms',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
