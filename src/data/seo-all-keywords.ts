import { getPremiumBrandArticle } from "./brand-premium/registry";
import type { BonusBrandGuide } from "./bonus-guides";

/** Marka sayfası meta keywords — kısa, tekrarsız. Google keywords etiketine güvenmez; stuffing zarar verir. */
export function getBonusBrandSeoKeywords(brand: BonusBrandGuide): string[] {
  const extra = getPremiumBrandArticle(brand.slug)?.extraKeywords ?? [];
  const base = [
    `${brand.name} giriş`,
    `${brand.name} güncel giriş`,
    `${brand.name} deneme bonusu`,
  ];
  return Array.from(new Set([...base, ...extra])).slice(0, 8);
}

import "./brand-premium/herkulbet";
import "./brand-premium/sezarcasino";
import "./brand-premium/sezarbet";
import "./brand-premium/popular-profiles";
