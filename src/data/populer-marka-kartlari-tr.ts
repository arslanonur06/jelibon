import { bonusBrandGuides } from "./bonus-guides";

export type PopulerMarkaKarti = {
  name: string;
  slug: string;
  description: string;
};

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return h;
}

function buildMarkaDescription(brandName: string, variantIndex: number): string {
  const templates = [
    `${brandName} güncel adres, giriş ve bonus başlıklarını tek sayfada toplar.`,
    `${brandName} için deneme bonusu, freespin ve yatırımsız bonus kümeleri.`,
    `${brandName} mobil giriş, kayıt ve kampanya aramaları için hızlı erişim.`,
    `${brandName} crash / uçak oyunu ve bonus niyeti için kısa rehber.`,
    `${brandName} güncel giriş akışı ve bonus başlıkları.`,
    `${brandName} için giriş, adres ve kampanya sorgularını tek merkezde toplar.`,
    `${brandName} aramalarında hızlı yönlendirme ve net başlık yapısı.`,
    `${brandName} bonus rehberi, güncel adres ve giriş odaklı sayfa.`,
  ] as const;
  return templates[variantIndex % templates.length];
}

/** Mevcut marka hariç, stabil sırayla `limit` adet komşu marka kartı. */
export function getPopulerMarkaKartlari(
  currentSlug: string,
  limit = 6,
): PopulerMarkaKarti[] {
  const others = bonusBrandGuides.filter((b) => b.slug !== currentSlug);
  if (others.length === 0) return [];

  const start = hashSlug(currentSlug) % others.length;
  const rotated = [...others.slice(start), ...others.slice(0, start)];
  const picked = rotated.slice(0, limit);

  return picked.map((b, i) => ({
    name: b.name,
    slug: b.slug,
    description: buildMarkaDescription(b.name, hashSlug(currentSlug) + i),
  }));
}
