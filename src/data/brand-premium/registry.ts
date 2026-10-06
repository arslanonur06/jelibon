import type { BonusArticleContent } from "../bonus-article-types";

/** Slug → tamamen özelleştirilmiş marka rehberi */
export const PREMIUM_BRAND_ARTICLES: Record<string, BonusArticleContent> = {};

export function getPremiumBrandArticle(
  slug: string,
): BonusArticleContent | undefined {
  return PREMIUM_BRAND_ARTICLES[slug];
}

export function registerPremiumBrand(
  slug: string,
  article: BonusArticleContent,
): void {
  PREMIUM_BRAND_ARTICLES[slug] = article;
}

export const PREMIUM_BRAND_SLUGS = [
  "herkulbet",
  "sezarcasino",
  "sezarbet",
  "casibom",
  "holiganbet",
  "onwin",
  "sahabet",
  "mobilbahis",
  "bets10",
  "mariobet",
  "superbahis",
  "hovarda",
  "betgit",
] as const;

export type PremiumBrandSlug = (typeof PREMIUM_BRAND_SLUGS)[number];
