import type { BonusBrandGuide } from "./bonus-guides";

/** ASCII marka token — hashtag ve compact arama eşleşmesi */
export function getBrandCompactToken(brandName: string): string {
  return brandName.replace(/[^a-zA-Z0-9]/g, "");
}

export const BRAND_HASHTAG_SUFFIXES = [
  "DenemeBonusu",
  "Giris",
  "GuncelGiris",
  "GuncelAdres",
  "GuncelGirisAdresi",
  "Bonus",
  "KayipBonusu",
  "YatirimBonusu",
  "JestBonusu",
  "MobilGiris",
] as const;

export function getBrandHashtags(brand: BonusBrandGuide): string[] {
  const token = getBrandCompactToken(brand.name);
  if (!token) return [];
  return BRAND_HASHTAG_SUFFIXES.map((suffix) => `#${token}${suffix}`);
}

export function getBrandHashtag(brandName: string, suffix: (typeof BRAND_HASHTAG_SUFFIXES)[number]): string {
  return `#${getBrandCompactToken(brandName)}${suffix}`;
}
