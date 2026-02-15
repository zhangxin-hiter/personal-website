import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Academic Personal Website",
  description: "Academic research and publications",
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
                Home
              </a>
              <div className="flex gap-6">
                <a href="#research" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Research
                </a>
                <a href="#publications" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Publications
                </a>
                <a href="#teaching" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Teaching
                </a>
                <a href="#contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <footer className="bg-gray-50 border-t border-gray-200 mt-20">
          <div className="max-w-5xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
            <p>© 2026 Academic Personal Website. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
