# AGENTS.md - Coding Guidelines for AI Agents

## Project Overview

This is a **Next.js 16+ academic personal website** with static export, featuring a bilingual (Chinese/English) portfolio with blog support, dark/light theme, and GitHub Pages deployment.

- **Framework**: Next.js 16.1.6, React 19.2.3, TypeScript 5
- **Styling**: Tailwind CSS v4 with custom CSS variables for theming
- **Content**: Markdown blog with gray-matter, remark, and syntax highlighting
- **Deployment**: Static export to GitHub Pages

---

## Build, Lint & Test Commands

```bash
# Development server (starts on localhost:3000)
npm run dev

# Production build (outputs to /out for static export)
npm run build

# Start production server (after build)
npm run start

# Lint all files with ESLint
npm run lint

# Install dependencies
npm install
```

**Note**: This project uses static export (`output: 'export'` in next.config.ts). The build generates static HTML in the `/out` directory.

---

## Code Style Guidelines

### TypeScript Conventions

- **Strict mode enabled** - no `any` types, no `@ts-ignore`
- Use explicit return types for exported functions
- Prefer `interface` over `type` for object shapes
- Use `type` for unions, literals, and utility types

```typescript
// Good
export interface BlogPost {
  slug: string;
  title: string;
}

export type Theme = "light" | "dark";

// Use 'type' for imports from Next.js
import type { Metadata } from "next";
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `Navigation.tsx`, `ThemeProvider.tsx` |
| Functions | camelCase | `getAllPosts`, `calculateReadingTime` |
| Interfaces/Types | PascalCase | `BlogPost`, `ThemeContextType` |
| Constants | UPPER_SNAKE_CASE | `GISCUS_CONFIG`, `SITE_CONFIG` |
| Files (components) | PascalCase | `BlogList.tsx` |
| Files (lib/utils) | camelCase or kebab-case | `blog.ts`, `config.ts` |

### Import Order

1. React/Next.js imports
2. Third-party library imports
3. Type imports (`import type`)
4. Local component imports
5. Local utility/lib imports
6. Styles (CSS files last)

```typescript
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import matter from "gray-matter";
import Navigation from "./components/Navigation";
import { getAllPosts } from "../lib/blog";
import "./globals.css";
```

### Component Patterns

- Use `"use client"` directive for client components (hooks, browser APIs)
- Server components are the default (no directive needed)
- Use CSS variables for theming (`var(--primary)`, `var(--background)`)
- Responsive design with Tailwind breakpoints (`md:`, `lg:`)

```typescript
"use client"; // First line if needed

export default function ComponentName({ children }: { children: React.ReactNode }) {
  // Component logic
}
```

### Styling Guidelines

- Use **Tailwind CSS v4** utility classes
- Custom CSS variables defined in `globals.css`:
  - `--primary: #1e3a5f` (navy blue)
  - `--accent: #c9a227` (gold)
  - `--background`, `--foreground`, `--card-bg`
- Dark mode via `.dark` class
- Animation classes: `animate-fade-in`, `animate-fade-in-up`, `animate-scale-in`

```tsx
// Color usage
className="text-[var(--primary)] bg-[var(--card-bg)]"

// Animation usage
className="animate-fade-in-up delay-200"

// Responsive
className="flex flex-col md:flex-row gap-4"
```

### Error Handling

- Always check for file existence before reading
- Return `null` or empty arrays for missing data
- Use early returns to reduce nesting

```typescript
if (!fs.existsSync(filePath)) {
  return null; // or return [];
}
```

### File Organization

```
app/
├── components/      # React components (PascalCase)
├── lib/            # Utility functions (camelCase)
├── blog/           # Blog pages
├── en/             # English version pages
├── globals.css     # Global styles & CSS variables
├── layout.tsx      # Root layout
└── page.tsx        # Home page

content/
└── blog/           # Markdown blog posts

public/             # Static assets
```

### Markdown Blog Format

Frontmatter schema for blog posts in `content/blog/`:

```yaml
---
title: "Post Title"
date: "2025-01-20"
description: "Brief description"
tags: ["Tag1", "Tag2"]
---
```

### Git & Deployment

- Build outputs to `/out` directory (configured for static export)
- No tests configured
- ESLint for code quality
- Deployed to GitHub Pages

---

## Common Patterns

### Creating a New Page

```typescript
// app/new-page/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title | 张昕",
  description: "Page description",
};

export default function NewPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-serif font-bold text-[var(--primary)]">
        Page Title
      </h1>
    </div>
  );
}
```

### Creating a Client Component

```typescript
"use client";

import { useState } from "react";

export default function InteractiveComponent() {
  const [state, setState] = useState(false);
  
  return (
    <button onClick={() => setState(!state)}>
      Toggle
    </button>
  );
}
```

### Adding a New Blog Post

1. Create file in `content/blog/post-slug.md`
2. Add frontmatter with title, date, description, tags
3. Write content in Markdown with code blocks
4. Code highlighting supported via highlight.js

---

## Key Configuration Files

- `next.config.ts` - Static export config, distDir: 'out'
- `tsconfig.json` - Path alias `@/*` mapped to `./*`
- `eslint.config.mjs` - Next.js ESLint config
- `postcss.config.mjs` - Tailwind CSS v4 PostCSS plugin
- `app/globals.css` - CSS variables, animations, syntax highlighting

---

## Dependencies to Know

- `gray-matter` - Frontmatter parsing
- `remark` / `remark-html` - Markdown processing
- `rehype-highlight` - Syntax highlighting
- `unified` - Markdown ecosystem

No testing framework is currently configured.
