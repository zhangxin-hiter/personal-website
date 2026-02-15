import { getAllPosts, getPostBySlug, markdownToHtml } from '../../lib/blog';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-[#64748b]">文章不存在</p>
      </div>
    );
  }

  const contentHtml = await markdownToHtml(post.contentHtml || '');

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#b8931f] mb-8 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        返回博客列表
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-[#1e3a5f] mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-[#64748b]">
            <span>{post.date}</span>
            {post.tags && post.tags.length > 0 && (
              <div className="flex gap-2">
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
          </div>
        </header>

        <div
          className="prose prose-lg max-w-none text-[#334155]"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  );
}
