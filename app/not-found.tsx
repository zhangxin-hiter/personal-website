import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - 页面不存在 | Page Not Found",
  description: "抱歉，您访问的页面不存在。Sorry, the page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#faf9f6] to-[#f1f5f9]">
      <div className="max-w-md mx-auto px-6 py-12 text-center">
        <h1 className="text-6xl font-bold text-[#1e3a5f] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#1e293b] mb-4">
          页面不存在
        </h2>
        <p className="text-[#475569] mb-8">
          抱歉，您访问的页面不存在或已被移除。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#c9a227] text-white rounded-lg hover:bg-[#b8941f] transition-colors"
          >
            返回首页
          </Link>
          <Link
            href="/en"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#1e293b] border border-[#e2e8f0] rounded-lg hover:border-[#c9a227] transition-colors"
          >
            English Version
          </Link>
        </div>
      </div>
    </div>
  );
}
