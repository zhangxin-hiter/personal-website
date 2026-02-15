import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "张昕 - 个人主页",
  description: "哈尔滨工业大学(深圳)通信工程本科生",
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
                张昕
              </a>
              <div className="flex gap-6">
                <a href="#education" className="text-sm text-gray-300 hover:text-[#c9a227] transition-colors">
                  教育背景
                </a>
                <a href="#projects" className="text-sm text-gray-300 hover:text-[#c9a227] transition-colors">
                  项目经历
                </a>
                <a href="#skills" className="text-sm text-gray-300 hover:text-[#c9a227] transition-colors">
                  专业技能
                </a>
                <a href="#contact" className="text-sm text-gray-300 hover:text-[#c9a227] transition-colors">
                  联系方式
                </a>
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
                <p>© 2026 张昕个人主页 | 哈尔滨工业大学(深圳)</p>
              </div>
              <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-xs font-medium text-[#1e3a5f] mb-2 text-center">访客分布</h4>
                <a href="https://clustrmaps.com/site/1c99c" title="查看详细访客统计">
                  <img 
                    src="//www.clustrmaps.com/map_v2.png?d=7NKnjFd9sTzDrKdIaJlf34f2X7ZY_WSFuMH_AnY5BPA&cl=ffffff" 
                    alt="访客地理分布热图"
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
