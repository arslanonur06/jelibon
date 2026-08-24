/**
 * Spor dalı rehberleri — her branş için blog slug ve meta.
 */
export type SporDaliCategory =
  | "takim"
  | "raket"
  | "dovus-motor"
  | "precision"
  | "amerikan"
  | "diger";

export type SporDali = {
  id: string;
  title: string;
  titleEn: string;
  slug: string;
  excerpt: string;
  category: SporDaliCategory;
  keywords: readonly string[];
};

export const SPOR_DALI_CATEGORY_LABELS: Record<
  SporDaliCategory,
  { tr: string; en: string }
> = {
  takim: { tr: "Takım sporları", en: "Team sports" },
  raket: { tr: "Raket & file", en: "Racket & net" },
  "dovus-motor": { tr: "Dövüş & motor", en: "Combat & motorsport" },
  precision: { tr: "Hassas & kış", en: "Precision & ice" },
  amerikan: { tr: "Amerikan sporları", en: "American sports" },
  diger: { tr: "Diğer branşlar", en: "Other disciplines" },
};

function d(
  id: string,
  title: string,
  titleEn: string,
  slug: string,
  excerpt: string,
  category: SporDaliCategory,
  keywords: readonly string[],
): SporDali {
  return { id, title, titleEn, slug, excerpt, category, keywords };
}

/** Tüm spor dalı rehberleri — her branş için bir makale */
export const SPOR_DALLARI: SporDali[] = [
  d(
    "futbol",
    "Futbol bahisleri",
    "Football betting",
    "futbol-bahisleri-rehberi-2026",
    "Gol, korner, kart, skor — Süper Lig ve Avrupa ligleri.",
    "takim",
    ["futbol bahis", "süper lig", "premier lig", "gol bahis"],
  ),
  d(
    "basketbol",
    "Basketbol bahisleri",
    "Basketball betting",
    "basketbol-bahisleri-rehberi-2026",
    "Handikap, toplam sayı, çeyrek — NBA ve BSL.",
    "takim",
    ["basketbol bahis", "NBA", "BSL", "handikap"],
  ),
  d(
    "hentbol",
    "Hentbol bahisleri",
    "Handball betting",
    "hentbol-bahisleri-rehber-2026",
    "Yüksek skor, 1X2, yarı ve toplam gol marketleri.",
    "takim",
    ["hentbol bahis", "EHF", "alt üst hentbol"],
  ),
  d(
    "plaj-voleybolu",
    "Plaj voleybolu bahisleri",
    "Beach volleyball betting",
    "plaj-voleybolu-bahisleri-rehber-2026",
    "Set formatı ve hava koşulu etkisi.",
    "takim",
    ["plaj voleybolu", "beach volleyball bahis"],
  ),
  d(
    "tenis",
    "Tenis bahisleri",
    "Tennis betting",
    "tenis-bahisleri-rehberi-2026",
    "Set, oyun, maç sonucu — çekilme kuralları.",
    "raket",
    ["tenis bahis", "set bahis", "Wimbledon"],
  ),
  d(
    "masa-tenisi",
    "Masa tenisi bahisleri",
    "Table tennis betting",
    "masa-tenisi-bahisleri-rehber-2026",
    "Hızlı canlı, set ve oyun marketleri.",
    "raket",
    ["masa tenisi bahis", "ping pong iddaa"],
  ),
  d(
    "badminton",
    "Badminton bahisleri",
    "Badminton betting",
    "badminton-bahisleri-rehber-2026",
    "Set skoru ve BWF turnuva formatı.",
    "raket",
    ["badminton bahis", "BWF"],
  ),
  d(
    "boks",
    "Boks bahisleri",
    "Boxing betting",
    "boks-bahisleri-rehber-2026",
    "Nokta, nakavt, round bahisleri.",
    "dovus-motor",
    ["boks bahis", "nakavt", "round bahis"],
  ),
  d(
    "mma",
    "MMA bahisleri",
    "MMA betting",
    "mma-bahisleri-rehber-2026",
    "UFC: KO, submission, karar marketleri.",
    "dovus-motor",
    ["MMA bahis", "UFC", "submission"],
  ),
  d(
    "formula-1",
    "Formula 1 bahisleri",
    "Formula 1 betting",
    "formula-1-bahisleri-rehber-2026",
    "Yarış galibi, podyum, en hızlı tur.",
    "dovus-motor",
    ["F1 bahis", "formula 1 iddaa", "podyum"],
  ),
  d(
    "motogp",
    "MotoGP bahisleri",
    "MotoGP betting",
    "motogp-bahisleri-rehber-2026",
    "Yarış, sıralama turları, head-to-head.",
    "dovus-motor",
    ["MotoGP bahis", "motosiklet yarış"],
  ),
  d(
    "bisiklet",
    "Bisiklet bahisleri",
    "Cycling betting",
    "bisiklet-bahisleri-rehber-2026",
    "Etap galibi, genel klasmanda birincilik.",
    "dovus-motor",
    ["bisiklet bahis", "Tour de France"],
  ),
  d(
    "at-yarisi",
    "At yarışı bahisleri",
    "Horse racing betting",
    "at-yarisi-bahisleri-rehber-2026",
    "Ganyan, plase, ikili — Türkiye jokey kulübü bağlamı.",
    "dovus-motor",
    ["at yarışı", "ganyan", "tjk"],
  ),
  d(
    "dart",
    "Dart bahisleri",
    "Darts betting",
    "dart-bahisleri-rehber-2026",
    "Leg, handikap, checkout marketleri.",
    "precision",
    ["dart bahis", "PDC", "180"],
  ),
  d(
    "snooker",
    "Snooker bahisleri",
    "Snooker betting",
    "snooker-bahisleri-rehber-2026",
    "Frame bahis, century break, maç sonucu.",
    "precision",
    ["snooker bahis", "frame bahis"],
  ),
  d(
    "golf",
    "Golf bahisleri",
    "Golf betting",
    "golf-bahisleri-rehber-2026",
    "Turnuva galibi, top 5/10, head-to-head.",
    "precision",
    ["golf bahis", "PGA", "Masters"],
  ),
  d(
    "buz-hokeyi",
    "Buz hokeyi bahisleri",
    "Ice hockey betting",
    "buz-hokeyi-bahisleri-rehber-2026",
    "Puck line, toplam gol, uzatma kuralları.",
    "precision",
    ["buz hokeyi bahis", "NHL", "puck line"],
  ),
  d(
    "amerikan-futbolu",
    "Amerikan futbolu bahisleri",
    "American football betting",
    "amerikan-futbolu-bahisleri-rehber-2026",
    "NFL spread, toplam, çeyrek marketleri.",
    "amerikan",
    ["NFL bahis", "amerikan futbolu", "super bowl"],
  ),
  d(
    "beyzbol",
    "Beyzbol bahisleri",
    "Baseball betting",
    "beyzbol-bahisleri-rehber-2026",
    "Run line, ilk 5 inning, toplam run.",
    "amerikan",
    ["beyzbol bahis", "MLB", "run line"],
  ),
  d(
    "kriket",
    "Kriket bahisleri",
    "Cricket betting",
    "kriket-bahisleri-rehber-2026",
    "T20, ODI, Test format farkları.",
    "amerikan",
    ["kriket bahis", "T20", "IPL"],
  ),
  d(
    "e-spor",
    "E-spor bahisleri",
    "Esports betting",
    "e-spor-bahisleri-rehberi-2026",
    "CS2, LoL, map ve maç marketleri.",
    "diger",
    ["e-spor bahis", "CS2", "LoL"],
  ),
  d(
    "kis-sporlari",
    "Kış sporları bahisleri",
    "Winter sports betting",
    "kis-sporlari-bahisleri-rehber-2026",
    "Biatlon, alp disiplini, kayak cross.",
    "diger",
    ["kış sporları bahis", "biathlon", "kayak"],
  ),
];

export function getSporDaliBySlug(slug: string): SporDali | undefined {
  return SPOR_DALLARI.find((s) => s.slug === slug);
}

export function getSporDallariByCategory(
  category: SporDaliCategory,
): SporDali[] {
  return SPOR_DALLARI.filter((s) => s.category === category);
}
