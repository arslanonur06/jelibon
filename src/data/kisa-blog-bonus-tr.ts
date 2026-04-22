/**
 * Türkiye odaklı kısa blog kartları — bonus & kampanya konuları.
 * Tam makaleler /blog altında; burada özet + iç link.
 */
export type KisaBlogBonusItem = {
  title: string;
  readMinutes: number;
  date: string;
  href: string;
};

export const KISA_BLOG_BONUS_ITEMS: KisaBlogBonusItem[] = [
  {
    title: "VIP ve sadakat bonusları nasıl işler?",
    readMinutes: 2,
    date: "2026-03-21",
    href: "/blog/eeat-casino-content-2026",
  },
  {
    title: "Deneme bonusu ile freespin aynı mı, farkı nedir?",
    readMinutes: 2,
    date: "2026-03-22",
    href: "/blog/deneme-bonusu-freespin-seo-turkey-2026",
  },
  {
    title: "Yatırımsız bonusda KYC ve çekim limitleri neden kritik?",
    readMinutes: 3,
    date: "2026-03-23",
    href: "/blog/yatirimsiz-bonus-seo-turkey-2026",
  },
  {
    title: "Bonus çevrim şartı net görünür hale nasıl getirilir?",
    readMinutes: 2,
    date: "2026-03-24",
    href: "/blog/deneme-bonusu-seo-turkey-2026",
  },
];
