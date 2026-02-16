import { getAllPosts } from '../lib/blog';
import Link from 'next/link';

export default function BlogPreview() {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 3);

  if (recentPosts.length === 0) {
    return null;
  }

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-[var(--accent)] rounded-full"></div>
          <h2 className="text-2xl font-serif font-bold text-[var(--primary)]">最新博客</h2>
        </div>
        <Link
          href="/blog"
          className="text-sm text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
        >
          查看全部 →
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${encodeURIComponent(post.slug)}`}
            className="bg-[var(--card-bg)] rounded-lg shadow-md border border-[var(--border)] p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <h3 className="text-base font-semibold text-[var(--primary)] mb-2 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-3 line-clamp-2">{post.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[var(--text-muted)]">{post.date}</span>
              {post.tags && post.tags.length > 0 && (
                <span className="text-xs text-[var(--accent)] bg-[var(--section-bg)] px-2 py-1 rounded">
                  {post.tags[0]}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
