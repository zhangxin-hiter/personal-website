import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - 页面不存在 | Page Not Found",
  description: "抱歉，您访问的页面不存在。Sorry, the page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 py-12 text-center">
        <h1 className="text-6xl font-bold text-[var(--primary)] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
          页面不存在
        </h2>
        <p className="text-[var(--text-secondary)] mb-8">
          抱歉，您访问的页面不存在或已被移除。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
          >
            返回首页
          </Link>
          <Link
            href="/en"
            className="inline-flex items-center justify-center px-6 py-3 bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-colors"
          >
            English Version
          </Link>
        </div>
      </div>
    </div>
  );
}
