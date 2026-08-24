/**
 * Marka arama önceliği — “Popüler markalar” UI ve iç link ağırlığı için.
 *
 * Ahrefs / Semrush / GSC export yok; sıra elle seçildi.
 * Güncelleme: Ahrefs “Keywords by domain” veya marka adı volume CSV gelince
 * `POPULAR_BRAND_SLUGS` dizisini volume DESC sırala.
 *
 * Kriter (şimdilik):
 * - Marka `bonus-guides.ts` kataloğunda olmalı
 * - TR’de “güncel giriş / deneme bonusu” aramasında sık geçen isimler
 */
export const POPULAR_BRAND_SLUGS = [
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

/** Ahrefs CSV import için placeholder — volume eklendiğinde doldurulur. */
export type BrandSearchVolumeRow = {
  slug: string;
  /** Aylık arama hacmi (Ahrefs Volume) */
  volume: number;
  /** Kaynak: ahrefs | gsc | manual */
  source: "ahrefs" | "gsc" | "manual";
  /** ISO tarih */
  updatedAt: string;
};

/** Gelecekte CSV → buraya merge; şimdilik boş. */
export const BRAND_SEARCH_VOLUME: BrandSearchVolumeRow[] = [];
