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
    title: "Deneme bonusu veren siteler nasıl listelenmeli?",
    readMinutes: 3,
    date: "2026-05-15",
    href: "/blog/deneme-bonusu-veren-siteler-2026",
  },
  {
    title: "Kayıp bonusu ve haftalık kayıp bonusu farkı",
    readMinutes: 3,
    date: "2026-06-02",
    href: "/blog/kayip-bonusu-veren-siteler-2026",
  },
  {
    title: "Yatırım bonusu ile yatırımsız bonus aynı sayfada olmamalı",
    readMinutes: 3,
    date: "2026-06-03",
    href: "/blog/yatirim-bonusu-veren-siteler-2026",
  },
  {
    title: "Jest bonusu veren sitelerde şeffaflık",
    readMinutes: 2,
    date: "2026-06-04",
    href: "/blog/jest-bonusu-veren-siteler-2026",
  },
  {
    title: "Özel oran içeriği spor bahis niyetine göre kurulmalı",
    readMinutes: 3,
    date: "2026-06-05",
    href: "/blog/ozel-oran-seo-turkey-2026",
  },
  {
    title: "Kredi kartı ile yatırım alan siteler — güven blokları",
    readMinutes: 3,
    date: "2026-06-06",
    href: "/blog/kredi-karti-yatirim-siteler-2026",
  },
  {
    title: "Doğum günü bonusu sayfası nasıl kurgulanmalı?",
    readMinutes: 3,
    date: "2026-03-20",
    href: "/blog/dogum-gunu-bonusu-seo-turkey-2026",
  },
  {
    title: "Deneme bonusu ile freespin aynı mı, farkı nedir?",
    readMinutes: 2,
    date: "2026-03-22",
    href: "/blog/deneme-bonusu-freespin-seo-turkey-2026",
  },
];
