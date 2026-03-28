/**
 * Re-exports the multilingual blog module. Prefer `import { … } from "@/data/blog"`.
 */
export type { BlogCategoryKey, LocalizedBlogPost as BlogPost } from "@/data/blog";
export {
  blogEntries,
  getAllSlugs,
  getLocalizedPost,
  getPostsForLocale,
} from "@/data/blog";
