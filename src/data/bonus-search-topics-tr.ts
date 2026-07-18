/**
 * Türkiye arama niyetleri — bonus konu kümeleri.
 * Her konu ilgili blog rehberine bağlanır; marka listesi blog + hub dizininde.
 */
export type BonusSearchTopic = {
  id: string;
  title: string;
  keywords: readonly string[];
  /** Blog rehber URL — SEO hedef sayfa */
  href: string;
  excerpt: string;
};

export const BONUS_SEARCH_TOPICS_TR: BonusSearchTopic[] = [
  {
    id: "deneme-bonusu-veren",
    title: "Deneme bonusu veren siteler",
    keywords: ["deneme bonusu veren siteler", "deneme bonusları", "çevrimsiz deneme bonusu"],
    href: "/blog/deneme-bonusu-veren-siteler-2026",
    excerpt:
      "Liste niyeti: operatör, tutar ve şart. Tek hub + marka sayfaları; ince kopya listelerden kaçının.",
  },
  {
    id: "ozel-oran",
    title: "Özel oran",
    keywords: ["özel oran", "ozel oran", "artırılmış oran", "boost oran"],
    href: "/blog/ozel-oran-seo-turkey-2026",
    excerpt:
      "Spor ve canlı bahis boost kampanyaları; süre, limit ve kombine kuralları net anlatılmalı.",
  },
  {
    id: "kayip-bonusu",
    title: "Kayıp bonusu veren siteler",
    keywords: ["kayıp bonusu veren siteler", "kayip bonusu", "cashback bonusu", "iade bonusu"],
    href: "/blog/kayip-bonusu-veren-siteler-2026",
    excerpt:
      "Net kayıp hesabı, yüzde, tavan ve çevrim — kullanıcıların en çok sorduğu dört madde.",
  },
  {
    id: "haftalik-kayip",
    title: "Haftalık kayıp bonusu veren siteler",
    keywords: ["haftalık kayıp bonusu", "haftalik kayip bonusu", "weekly cashback"],
    href: "/blog/kayip-bonusu-veren-siteler-2026",
    excerpt:
      "Haftalık dönem, minimum kayıp eşiği ve ödeme günü tek sayfada ayrı H2 ile işlenmeli.",
  },
  {
    id: "dogum-gunu",
    title: "Doğum günü bonusu veren siteler",
    keywords: ["doğum günü bonusu veren siteler", "dogum gunu bonusu", "birthday bonus"],
    href: "/blog/dogum-gunu-bonusu-seo-turkey-2026",
    excerpt:
      "CRM tetikleyicisi + şart sayfası; marka + doğum günü sorgularını jenerik baştan ayırın.",
  },
  {
    id: "yatirim-bonusu",
    title: "Yatırım bonusu veren siteler",
    keywords: ["yatırım bonusu veren siteler", "yatirim bonusu", "hoş geldin bonusu", "deposit bonus"],
    href: "/blog/yatirim-bonusu-veren-siteler-2026",
    excerpt:
      "Yüzde eşleşme, min–max yatırım, çevrim ve oyun katkısı — yatırımsız bonustan ayrı URL.",
  },
  {
    id: "jest-bonusu",
    title: "Jest bonusu veren siteler",
    keywords: ["jest bonusu veren siteler", "jest bonusu", "sürpriz bonus", "jest promosyon"],
    href: "/blog/jest-bonusu-veren-siteler-2026",
    excerpt:
      "Segment ve davranış tetikli promosyonlar; şeffaflık olmadan SEO metni yazmayın.",
  },
  {
    id: "yatirimsiz",
    title: "Yatırımsız bonus veren siteler",
    keywords: ["yatırımsız bonus", "yatirimsiz bonus", "yatırımsız bonus veren siteler"],
    href: "/blog/yatirimsiz-bonus-seo-turkey-2026",
    excerpt:
      "KYC, çekim limiti ve çevrim üçlüsü görünür olmalı; yatırım bonusu ile karıştırılmamalı.",
  },
  {
    id: "kredi-karti",
    title: "Kredi kartı ile yatırım alan siteler",
    keywords: [
      "kredi kartı ile yatırım alan siteler",
      "kredi karti yatirim",
      "kart ile yatırım casino",
    ],
    href: "/blog/kredi-karti-yatirim-siteler-2026",
    excerpt:
      "Ödeme yöntemi niyeti; güven, limit, işlem süresi ve alternatif yöntemler aynı hub’da.",
  },
];

/** Hub sayfası marquee / filtre şeridi */
export const BONUS_HUB_KEYWORDS = BONUS_SEARCH_TOPICS_TR.flatMap((topic) =>
  topic.keywords.slice(0, 2),
);

export function getBonusTopicById(id: string): BonusSearchTopic | undefined {
  return BONUS_SEARCH_TOPICS_TR.find((topic) => topic.id === id);
}

/** Blog slug → bonus konusu (marka listesi bloğu için) */
export function getBonusTopicByBlogSlug(slug: string): BonusSearchTopic | undefined {
  const path = `/blog/${slug}`;
  return BONUS_SEARCH_TOPICS_TR.find((topic) => topic.href === path);
}
