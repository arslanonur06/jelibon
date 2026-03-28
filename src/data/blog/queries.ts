import type { Locale } from "@/lib/i18n/locales";
import { blogEntries } from "./entries";
import type { BlogPostEntry, LocalizedBlogPost } from "./types";

function pickLocale(
  entry: BlogPostEntry,
  locale: Locale,
): BlogPostEntry["locales"][Locale] {
  return entry.locales[locale] ?? entry.locales.en;
}

export function getLocalizedPost(
  slug: string,
  locale: Locale,
): LocalizedBlogPost | undefined {
  const entry = blogEntries.find((e) => e.slug === slug);
  if (!entry) return undefined;
  const block = pickLocale(entry, locale);
  return {
    slug: entry.slug,
    date: entry.date,
    coverImage: entry.coverImage,
    title: block.title,
    excerpt: block.excerpt,
    readTime: block.readTime,
    categoryKey: block.categoryKey,
    body: block.body,
  };
}

export function getPostsForLocale(locale: Locale): LocalizedBlogPost[] {
  return blogEntries
    .map((entry) => {
      const block = pickLocale(entry, locale);
      return {
        slug: entry.slug,
        date: entry.date,
        coverImage: entry.coverImage,
        title: block.title,
        excerpt: block.excerpt,
        readTime: block.readTime,
        categoryKey: block.categoryKey,
        body: block.body,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllSlugs(): string[] {
  return blogEntries.map((e) => e.slug);
}
