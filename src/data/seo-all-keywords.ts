import { SEO_KEYWORDS } from "@/constants";
import { bonusBrandGuides } from "./bonus-guides";

/**
 * Tüm `bonus` markaları için "slug giriş" (site+giriş) niyetli anahtar kelimeler
 * + temel `SEO_KEYWORDS`. Layout metadata tek yerde; alt sayfalar `keywords` vermezse
 * bu liste inherit olur.
 */
export function getAllSeoKeywords(): string[] {
  const brandGiris = bonusBrandGuides.map((b) => `${b.slug} giriş`);
  return [...SEO_KEYWORDS, ...brandGiris];
}
