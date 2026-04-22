import { TELEGRAM_URL } from "@/constants";

export type BonusBrandGuide = {
  name: string;
  slug: string;
  telegramUrl: string;
};

const RAW_BONUS_BRANDS = [
  "Almanbahis",
  "AMG Bahis",
  "Antikbet",
  "AsyaBahis",
  "Bahisbet",
  "Bahiscom",
  "Bahisfair",
  "Balinabet",
  "BabilonBet",
  "Bankobet",
  "Barbibet",
  "Berlinbet",
  "Betamiral",
  "Betbaba",
  "Betbalina",
  "Betbox",
  "Betci",
  "Betewin",
  "Betgaranti",
  "BetGit",
  "Betingo",
  "Betin",
  "Betjolly",
  "Betkare",
  "Betkom",
  "Betlike",
  "Betmabet",
  "Betmoon",
  "Betparagon",
  "Betparibu",
  "Betpark",
  "Betplay",
  "Betra",
  "Betrupi",
  "Bets10",
  "Betsilin",
  "Betticket",
  "Betvino",
  "Betyap",
  "Beygirbet",
  "Bibubet",
  "Casibom",
  "CasiPol",
  "Casiprom",
  "Cratosroyal",
  "Deobet",
  "Diyarbet",
  "Efbet",
  "Efesbetcasino",
  "Elexbet",
  "Elitbahis",
  "Enbet",
  "Epikbahis",
  "Fashionbet",
  "Fenomenbet",
  "Fifabahis",
  "Fixbet",
  "Gamben",
  "Gameofbet",
  "Ganobet",
  "Gettobet",
  "Girnecasino",
  "Goley90",
  "Golegol",
  "Golden Bahis",
  "Hepbet",
  "Hiltonbet",
  "Hitbet",
  "Hizlicasino",
  "Holiganbet",
  "Hotbahis",
  "Hovarda",
  "Ibizabet",
  "Iddaci",
  "Ikasbet",
  "Imajbet",
  "Interbahis",
  "Jasminbet",
  "Kareasbet",
  "Kargabet",
  "Kayacasino",
  "Kolaybet",
  "Kralbet",
  "Kulisbet",
  "Lordpalace",
  "Macacasino",
  "Maksibet",
  "Mariobet",
  "Masterbetting",
  "Maxibet",
  "Maxroyalcasino",
  "Maxwin",
  "Merco Bahis",
  "Mercurecasino",
  "Mersobahis",
  "Milbet",
  "Millibahis",
  "Milyoner",
  "Mobilbahis",
  "Nemesisbet",
  "Nerobet",
  "Netbahis",
  "NGS Bahis",
  "Nisanbet",
  "Nitrobahis",
  "Oldcasino",
  "Onwin",
  "Oslobet",
  "Palazzobet",
  "Pasacasino",
  "Perabet",
  "Piabet",
  "Pisabet",
  "Poliwin",
  "Polobet",
  "Prensbet",
  "Pulibet",
  "Puntobahis",
  "Risebet",
  "Rivalo",
  "Ronabet",
  "Royalbet",
  "Sahabet",
  "Sezarcasino",
  "Siyahbet",
  "Slotioweb",
  "Sortiebet",
  "Stonebahis",
  "Sultanbet",
  "Superbahis",
  "Suratbet",
  "Teosbet",
  "Teslabahis",
  "Truvabet",
  "Trwin",
  "Tuccobet",
  "Tulipbet",
  "Vegasslot",
  "Venusbet",
  "Verabet",
  "Vizyonbet",
  "Wipbet",
  "Wojobet",
  "Yakabet",
  "Yedibahis",
  "Zingabet",
] as const;

const EXCLUDED_BRAND_SLUGS = new Set([
  "padisahbet",
  "galabet",
  "betoffice",
  "betpipo",
  "vippark",
]);

function toSeoSlug(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const uniqueGuides = new Map<string, BonusBrandGuide>();

for (const name of RAW_BONUS_BRANDS) {
  const slug = toSeoSlug(name);
  if (EXCLUDED_BRAND_SLUGS.has(slug) || uniqueGuides.has(slug)) continue;

  uniqueGuides.set(slug, {
    name,
    slug,
    telegramUrl: TELEGRAM_URL,
  });
}

export const bonusBrandGuides = Array.from(uniqueGuides.values());
export const BONUS_BRAND_COUNT = bonusBrandGuides.length;

export const bonusGuideBySlug = new Map(
  bonusBrandGuides.map((item) => [item.slug, item] as const),
);

