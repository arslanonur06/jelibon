/**
 * Spor bahisleri hub — genel rehberler + tüm spor dalları.
 */
export type SporBahisTopic = {
  id: string;
  title: string;
  titleEn?: string;
  keywords: readonly string[];
  href: string;
  excerpt: string;
  kind: "general" | "sport";
};

export const SPOR_BAHIS_GENERAL_TOPICS: SporBahisTopic[] = [
  {
    id: "iddaa-nasil-oynanir",
    title: "İddaa nasıl oynanır?",
    titleEn: "How to play İddaa",
    keywords: ["iddaa nasıl oynanır", "iddaa kuponu", "nesine bilyoner"],
    href: "/blog/iddaa-nasil-oynanir-rehber-2026",
    excerpt:
      "Adım adım kupon: maç seçimi, market, oran, onay ve ikramiye.",
    kind: "general",
  },
  {
    id: "bahis-turleri",
    title: "Bahis türleri rehberi",
    titleEn: "Bet types guide",
    keywords: ["bahis türleri", "1x2", "alt üst", "handikap"],
    href: "/blog/bahis-turleri-rehberi-2026",
    excerpt: "MS, alt/üst, handikap, çifte şans, KG — skor örnekleriyle.",
    kind: "general",
  },
  {
    id: "canli-bahis",
    title: "Canlı bahis rehberi",
    titleEn: "Live betting guide",
    keywords: ["canlı bahis", "live bet", "cash-out"],
    href: "/blog/canli-bahis-rehberi-2026",
    excerpt: "Maç içi oran, gecikme, cash-out ve risk yönetimi.",
    kind: "general",
  },
  {
    id: "sistem-kombine",
    title: "Sistem ve kombine kupon",
    titleEn: "System & accumulator",
    keywords: ["kombine kupon", "sistem kuponu", "2/3 sistem"],
    href: "/blog/sistem-kuponu-kombine-rehber-2026",
    excerpt: "Tek, kombine ve 2/3 sistem — ne zaman hangisi?",
    kind: "general",
  },
  {
    id: "iddaa-terimleri",
    title: "İddaa terimleri sözlüğü",
    titleEn: "İddaa glossary",
    keywords: ["iddaa terimleri", "MS", "MBS", "handikap"],
    href: "/blog/iddaa-terimleri-sozluk-2026",
    excerpt: "MS, MBS, HMS, KG, oran, banko — kısa sözlük.",
    kind: "general",
  },
  {
    id: "oran-hesaplama",
    title: "Oran hesaplama",
    titleEn: "Odds calculation",
    keywords: ["oran hesaplama", "implied probability"],
    href: "/blog/spor-bahis-oran-hesaplama-2026",
    excerpt: "Ondalık oran, olasılık ve potansiyel getiri.",
    kind: "general",
  },
  {
    id: "sorumlu-bahis",
    title: "Sorumlu bahis",
    titleEn: "Responsible gambling",
    keywords: ["sorumlu bahis", "limit", "18+"],
    href: "/blog/sorumlu-bahis-limit-rehberi-2026",
    excerpt: "Bütçe limiti ve kayıp kovalamadan kaçınma.",
    kind: "general",
  },
  {
    id: "iddaa-bayi-online",
    title: "Bayi vs online iddaa",
    titleEn: "Retailer vs online",
    keywords: ["iddaa bayi", "online iddaa"],
    href: "/blog/iddaa-bayi-online-farklari-2026",
    excerpt: "Fiziksel bayi ve mobil uygulama farkları.",
    kind: "general",
  },
];

import {
  SPOR_DALLARI,
  type SporDaliCategory,
  SPOR_DALI_CATEGORY_LABELS,
  getSporDallariByCategory,
} from "./spor-dallari-data";

export {
  SPOR_DALLARI,
  SPOR_DALI_CATEGORY_LABELS,
  getSporDallariByCategory,
  type SporDaliCategory,
};

/** Spor dalı konuları — otomatik spor-dallari-data'dan */
export const SPOR_BAHIS_SPORT_TOPICS: SporBahisTopic[] = SPOR_DALLARI.map(
  (s) => ({
    id: s.id,
    title: s.title,
    titleEn: s.titleEn,
    keywords: s.keywords,
    href: `/blog/${s.slug}`,
    excerpt: s.excerpt,
    kind: "sport" as const,
  }),
);

export const SPOR_BAHIS_TOPICS_TR: SporBahisTopic[] = [
  ...SPOR_BAHIS_GENERAL_TOPICS,
  ...SPOR_BAHIS_SPORT_TOPICS,
];

export function getSporBahisTopicByBlogSlug(
  slug: string,
): SporBahisTopic | undefined {
  const path = `/blog/${slug}`;
  return SPOR_BAHIS_TOPICS_TR.find((topic) => topic.href === path);
}

export const SPOR_BAHIS_HUB_KEYWORDS = [
  "spor bahisleri",
  "iddaa",
  "canlı bahis",
  "futbol bahis",
  "basketbol bahis",
  "tenis bahis",
  "bahis türleri",
  "kombine kupon",
  "nesine",
  "bilyoner",
] as const;
