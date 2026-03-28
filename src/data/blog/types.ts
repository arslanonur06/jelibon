import type { Locale } from "@/lib/i18n/locales";

/** Stable key for category labels in i18n dictionaries */
export type BlogCategoryKey = "strategy" | "performance" | "compliance";

export type BlogPostLocaleBlock = {
  title: string;
  excerpt: string;
  /** Localised reading time label, e.g. "6 min read" / "6 dk okuma" */
  readTime: string;
  categoryKey: BlogCategoryKey;
  body: string[];
};

export type BlogPostEntry = {
  slug: string;
  date: string;
  coverImage?: string;
  locales: Record<Locale, BlogPostLocaleBlock>;
};

/** Resolved post for a single locale (used in UI) */
export type LocalizedBlogPost = {
  slug: string;
  date: string;
  coverImage?: string;
  title: string;
  excerpt: string;
  readTime: string;
  categoryKey: BlogCategoryKey;
  body: string[];
};
