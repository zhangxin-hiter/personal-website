import { getAllPosts } from '../lib/blog';
import BlogList from '../components/BlogList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '博客 | 张昕',
  description: '记录学习笔记和技术分享，涵盖嵌入式开发、单片机编程、通信技术等领域。',
  openGraph: {
    title: '博客 | 张昕',
    description: '记录学习笔记和技术分享',
    type: 'website',
  },
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <section className="mb-12">
        <h1 className="text-4xl font-serif font-bold text-[var(--primary)] mb-4">博客</h1>
        <p className="text-[var(--text-secondary)]">记录学习笔记和技术分享</p>
      </section>

      <BlogList posts={posts} />
    </div>
  );
}
