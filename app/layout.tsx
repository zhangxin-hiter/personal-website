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
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                首页
              </a>
              <div className="flex gap-6">
                <a href="#education" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  教育背景
                </a>
                <a href="#projects" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  项目经历
                </a>
                <a href="#skills" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  专业技能
                </a>
                <a href="#contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  联系方式
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <footer className="bg-gray-50 border-t border-gray-200 mt-20">
          <div className="max-w-5xl mx-auto px-6 py-8">
            <div className="flex flex-col items-center gap-4">
              <div className="text-center text-sm text-gray-500">
                <p>© 2026 张昕个人主页</p>
              </div>
              <div className="mt-4">
                <a href="https://clustrmaps.com/site/1c99c" title="Visitor Map">
                  <img 
                    src="//www.clustrmaps.com/map_v2.png?d=7NKnjFd9sTzDrKdIaJlf34f2X7ZY_WSFuMH_AnY5BPA&cl=ffffff" 
                    alt="Visitor Map"
                    width="150"
                    height="100"
                    className="rounded"
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
