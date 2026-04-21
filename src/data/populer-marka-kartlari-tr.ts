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
    `${brandName} için Türkiye’de sık aranan giriş, güncel adres ve bonus sorgularında tarafsız özet; güncel kampanya koşulları Telegram üzerinden paylaşılır.`,
    `${brandName} markasına dair deneme bonusu ve freespin aramalarında beklentiyi netleştiren kısa bilgilendirme metni; ticari vaat veya garanti içermez.`,
    `${brandName} çevresinde yatırımsız bonus ve KYC süreçleri hakkında okunabilir bir çerçeve sunar; çekim limitleri ve çevrim şartları mutlaka doğrulanmalıdır.`,
    `${brandName} ile ilişkili mobil giriş ve kampanya başlıklarında içerik–reklam uyumunu güçlendirmek için eğitim odaklı yapı kullanılır.`,
    `${brandName} sorgularında Google ve kullanıcı güveni için şeffaf dipnotlar ve sorumlu oyun uyarısı içeren bilgi kartıdır.`,
    `${brandName} için uçak oyunu / crash promolarında risk anlatımı ve bonus katkı oranlarının anlaşılır şekilde özetlenmesine uygundur.`,
    `${brandName} karşılaştırma ve rehber formatında; yalnızca bilgilendirme amaçlıdır, yasal yaş ve bölgesel uygunluk kullanıcı sorumluluğundadır.`,
    `${brandName} hub–spoke SEO modelinde iç linklerle desteklenir; her kart ilgili rehber URL’sine gider ve tekrarlayan ince sayfalar üretmez.`,
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
