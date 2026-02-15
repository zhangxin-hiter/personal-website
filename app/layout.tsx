import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "张昕 - 个人主页 | Xin Zhang - Personal Website",
  description: "哈尔滨工业大学(深圳)通信工程本科生 | Telecommunications Engineering Undergraduate at HIT Shenzhen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="antialiased">
        <nav className="bg-[#1e3a5f] border-b border-[#c9a227] sticky top-0 z-50 shadow-lg">
          <div className="max-w-5xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-xl font-serif font-semibold text-white hover:text-[#c9a227] transition-colors">
                张昕 <span className="text-sm text-gray-400">| Xin Zhang</span>
              </a>
              <div className="flex items-center gap-6">
                <div className="flex gap-6">
                  <a href="#education" className="text-sm text-gray-300 hover:text-[#c9a227] transition-colors hidden md:block">
                    教育背景
                  </a>
                  <a href="#projects" className="text-sm text-gray-300 hover:text-[#c9a227] transition-colors hidden md:block">
                    项目经历
                  </a>
                  <a href="#skills" className="text-sm text-gray-300 hover:text-[#c9a227] transition-colors hidden md:block">
                    专业技能
                  </a>
                  <a href="#contact" className="text-sm text-gray-300 hover:text-[#c9a227] transition-colors hidden md:block">
                    联系方式
                  </a>
                </div>
                <div className="flex items-center gap-2 border-l border-gray-600 pl-4">
                  <a href="/" className="text-sm font-medium text-[#c9a227]">中</a>
                  <span className="text-gray-500">|</span>
                  <a href="/en" className="text-sm text-gray-300 hover:text-[#c9a227] transition-colors">EN</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-[#1e3a5f] border-t border-[#c9a227] mt-20">
          <div className="max-w-5xl mx-auto px-6 py-8">
            <div className="flex flex-col items-center gap-4">
              <div className="text-center text-sm text-gray-300">
                <p>© 2026 张昕个人主页 | Xin Zhang Personal Website</p>
                <p className="mt-1 text-xs text-gray-400">哈尔滨工业大学(深圳) | Harbin Institute of Technology (Shenzhen)</p>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <a href="/" className="text-xs text-gray-400 hover:text-[#c9a227] transition-colors">中文版</a>
                <span className="text-gray-600">|</span>
                <a href="/en" className="text-xs text-gray-400 hover:text-[#c9a227] transition-colors">English</a>
              </div>
              <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-xs font-medium text-[#1e3a5f] mb-2 text-center">访客分布 | Visitor Map</h4>
                <a href="https://clustrmaps.com/site/1c99c" title="查看详细访客统计 | View detailed statistics">
                  <img 
                    src="//www.clustrmaps.com/map_v2.png?d=7NKnjFd9sTzDrKdIaJlf34f2X7ZY_WSFuMH_AnY5BPA&cl=ffffff" 
                    alt="访客地理分布热图 | Visitor geographic distribution"
                    width="180"
                    height="120"
                    className="rounded hover:opacity-90 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
