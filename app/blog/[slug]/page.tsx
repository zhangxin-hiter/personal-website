import { getAllPosts, getPostBySlug, markdownToHtml, getAdjacentPosts } from '../../lib/blog';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: '文章不存在',
    };
  }

  return {
    title: `${post.title} | 张昕的博客`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
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
  const adjacentPosts = getAdjacentPosts(slug);

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
            {post.readingTime && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readingTime}
              </span>
            )}
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

      <nav className="mt-12 pt-8 border-t border-[#e2e8f0]">
        <div className="flex justify-between items-center">
          {adjacentPosts.next ? (
            <Link
              href={`/blog/${encodeURIComponent(adjacentPosts.next.slug)}`}
              className="flex-1 group"
            >
              <span className="text-sm text-[#64748b] mb-1 block">← 上一篇</span>
              <span className="text-[#1e3a5f] group-hover:text-[#c9a227] transition-colors font-medium line-clamp-1">
                {adjacentPosts.next.title}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {adjacentPosts.prev ? (
            <Link
              href={`/blog/${encodeURIComponent(adjacentPosts.prev.slug)}`}
              className="flex-1 text-right group"
            >
              <span className="text-sm text-[#64748b] mb-1 block">下一篇 →</span>
              <span className="text-[#1e3a5f] group-hover:text-[#c9a227] transition-colors font-medium line-clamp-1">
                {adjacentPosts.prev.title}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </nav>
    </div>
  );
}
