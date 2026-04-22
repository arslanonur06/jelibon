import type { LocalizedBlogPost } from "./types";
import { DEFAULT_OG_IMAGE_PATH } from "@/constants";

const COVER_BY_CATEGORY = {
  strategy: "/assets/orbitarka.jpg",
  performance: "/assets/jelibon-brand.png",
  compliance: "/assets/jelibon-marketing-logo.png",
} as const;

const COVER_BY_SLUG_KEYWORD: Array<{ keyword: string; image: string }> = [
  { keyword: "telegram", image: "/assets/telegramicon.png" },
  { keyword: "bonus", image: "/assets/pinkadam.jpg" },
];

/**
 * Use local themed assets so blog cards remain visually consistent.
 */
export function getBlogCoverImage(post: LocalizedBlogPost): string {
  const slug = post.slug.toLowerCase();
  for (const item of COVER_BY_SLUG_KEYWORD) {
    if (slug.includes(item.keyword)) return item.image;
  }
  const byCategory = COVER_BY_CATEGORY[post.categoryKey];
  return byCategory ?? DEFAULT_OG_IMAGE_PATH;
}
