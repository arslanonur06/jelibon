import { SEO_KEYWORDS } from "@/constants";
import { BRAND_SEARCH_INTENTS } from "./brand-seo-intents";
import type { BonusBrandGuide } from "./bonus-guides";
import { bonusBrandGuides } from "./bonus-guides";
import { getBrandCompactToken } from "./brand-hashtags";

function normalizeKeyword(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("tr-TR")
    .replace(/\s+/g, " ")
    .trim();
}

export function getBonusBrandSeoKeywords(brand: BonusBrandGuide): string[] {
  const base = brand.name;
  const slugName = brand.slug.replace(/-/g, " ");
  const compactName = getBrandCompactToken(brand.name).toLocaleLowerCase("tr-TR");

  const fromIntents = BRAND_SEARCH_INTENTS.flatMap((intent) => [
    `${base} ${intent}`,
    `${slugName} ${intent}`,
    `${compactName} ${intent.replace(/\s+/g, "")}`,
  ]);

  return [
    `${base} giriş`,
    `${base} güncel giriş`,
    `${base} güncel giriş adresi`,
    `${base} güncel adres`,
    `${base} deneme bonusu`,
    `${base} bonus`,
    `${base} site`,
    `${compactName} giriş`,
    `${compactName} güncel giriş`,
    `${compactName} güncel adres`,
    `${compactName} deneme bonusu`,
    ...fromIntents,
  ];
}

/**
 * Tüm markalar için keyword listesi (yalnızca marka sayfalarında kullanın; layout'ta değil).
 */
export function getAllSeoKeywords(): string[] {
  const allKeywords = [
    ...SEO_KEYWORDS,
    ...bonusBrandGuides.flatMap((brand) => getBonusBrandSeoKeywords(brand)),
  ];

  return Array.from(
    new Map(allKeywords.map((keyword) => [normalizeKeyword(keyword), keyword])).values(),
  );
}
