"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { BlogPost } from "../lib/blog";

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((post) => {
      post.tags?.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts;
    return posts.filter((post) => post.tags?.includes(selectedTag));
  }, [posts, selectedTag]);

  if (posts.length === 0) {
    return <p className="text-[var(--text-muted)]">暂无博客文章</p>;
  }

  return (
    <>
      {allTags.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-medium text-[var(--text-secondary)] mb-3">标签筛选</h3>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedTag(null)}
              className={`text-xs px-3 py-1 rounded-full transition-colors ${
                selectedTag === null
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--section-bg)] text-[var(--text-secondary)] hover:bg-[var(--border)]"
              }`}
              type="button"
            >
              全部
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`text-xs px-3 py-1 rounded-full transition-colors ${
                  selectedTag === tag
                    ? "bg-[var(--accent)] text-white"
                    : "bg-[var(--section-bg)] text-[var(--text-secondary)] hover:bg-[var(--border)]"
                }`}
                type="button"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-[var(--card-bg)] rounded-lg shadow-md border border-[var(--border)] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-colors">
                {post.title}
              </h2>
              <span className="text-sm text-[var(--text-muted)] bg-[var(--section-bg)] px-3 py-1 rounded-full whitespace-nowrap ml-4">
                {post.date}
              </span>
            </div>
            <p className="text-[var(--text-secondary)] mb-3">{post.description}</p>
            {post.tags && post.tags.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[var(--accent)] bg-[var(--section-bg)] px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-[var(--text-muted)] text-center py-12">
          没有找到包含标签 &quot;{selectedTag}&quot; 的文章
        </p>
      )}
    </>
  );
}
