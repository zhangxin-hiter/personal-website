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
          <div className="w-1 h-8 bg-[#c9a227] rounded-full"></div>
          <h2 className="text-2xl font-serif font-bold text-[#1e3a5f]">最新博客</h2>
        </div>
        <Link
          href="/blog"
          className="text-sm text-[#c9a227] hover:text-[#b8931f] transition-colors"
        >
          查看全部 →
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-white rounded-lg shadow-md border border-[#e2e8f0] p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <h3 className="text-base font-semibold text-[#1e3a5f] mb-2 group-hover:text-[#c9a227] transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-[#475569] mb-3 line-clamp-2">{post.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#64748b]">{post.date}</span>
              {post.tags && post.tags.length > 0 && (
                <span className="text-xs text-[#c9a227] bg-[#fef9e7] px-2 py-1 rounded">
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
