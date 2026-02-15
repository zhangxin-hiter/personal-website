import { getAllPosts } from '../lib/blog';
import Link from 'next/link';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <section className="mb-12">
        <h1 className="text-4xl font-serif font-bold text-[#1e3a5f] mb-4">博客</h1>
        <p className="text-[#475569]">记录学习笔记和技术分享</p>
      </section>

      <section>
        {posts.length === 0 ? (
          <p className="text-[#64748b]">暂无博客文章</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-lg shadow-md border border-[#e2e8f0] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold text-[#1e3a5f] hover:text-[#c9a227] transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-sm text-[#64748b] bg-[#f1f5f9] px-3 py-1 rounded-full whitespace-nowrap ml-4">
                    {post.date}
                  </span>
                </div>
                <p className="text-[#475569] mb-3">{post.description}</p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-[#c9a227] bg-[#fef9e7] px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
