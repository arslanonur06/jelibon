import { SEO_KEYWORDS } from "@/constants";
import type { BonusBrandGuide } from "./bonus-guides";
import { bonusBrandGuides } from "./bonus-guides";

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

  return [
    `${base} giriş`,
    `${base} güncel giriş`,
    `${base} güncel adres`,
    `${base} bonus`,
    `${base} bonusları`,
    `${base} site`,
    `${base} adres`,
    `${slugName} giriş`,
    `${slugName} güncel adres`,
    `${slugName} bonus`,
  ];
}

/**
 * Tüm `bonus` markaları için "slug giriş" (site+giriş) niyetli anahtar kelimeler
 * + temel `SEO_KEYWORDS`. Layout metadata tek yerde; alt sayfalar `keywords` vermezse
 * bu liste inherit olur.
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
