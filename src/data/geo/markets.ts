import type { GeoMarketConfig, GeoMarketId } from "./types";
import { azBrandGuides } from "./brands/az";
import { ruBrandGuides } from "./brands/ru";
import { uaBrandGuides } from "./brands/ua";
import {
  euDkBrandGuides,
  euEeBrandGuides,
  euFiBrandGuides,
  euMtBrandGuides,
  euNoBrandGuides,
} from "./brands/eu-tier2";
import type { GeoBrandGuide } from "./types";

export const GEO_MARKET_CONFIGS: Record<GeoMarketId, GeoMarketConfig> = {
  az: {
    id: "az",
    hubPath: "/markets/az",
    hubTitle: "Azərbaycan etibarlı saytlar rehberi",
    hubDescription:
      "Melbet, 1xBet, Pin-Up və digər populyar AZ bukmeker / casino markaları — giriş, bonus və etibarlılıq rehberi.",
    directoryLabel: "Bütün AZ saytlar",
    ogLocale: "az_AZ",
    htmlLang: "az",
    countryName: "Azərbaycan",
    regionLabel: "Cənubi Qafqaz",
    searchIntents: [
      "etibarlı sayt",
      "giriş",
      "güncel giriş",
      "bonus",
      "deneme bonusu",
      "mobil giriş",
      "AZN yatırım",
    ],
  },
  ru: {
    id: "ru",
    hubPath: "/markets/ru",
    hubTitle: "Надёжные букмекеры и казино — Россия",
    hubDescription:
      "Fonbet, Winline, Leon, Melbet, 1xBet и другие популярные бренды: актуальный вход, бонусы и обзор.",
    directoryLabel: "Все RU бренды",
    ogLocale: "ru_RU",
    htmlLang: "ru",
    countryName: "Россия",
    regionLabel: "СНГ",
    searchIntents: [
      "рабочее зеркало",
      "актуальный вход",
      "бонус",
      "ставки на спорт",
      "казино",
      "мобильное приложение",
      "регистрация",
    ],
  },
  ua: {
    id: "ua",
    hubPath: "/markets/ua",
    hubTitle: "Надійні сайти України — букмекери та казино",
    hubDescription:
      "BETKING, Favbet, Parimatch та інші популярні UA платформи: вхід, бонуси, ліцензія.",
    directoryLabel: "Всі UA бренди",
    ogLocale: "uk_UA",
    htmlLang: "uk",
    countryName: "Україна",
    regionLabel: "Східна Європа",
    searchIntents: [
      "актуальне дзеркало",
      "вхід",
      "бонус",
      "ліцензія",
      "казино",
      "ставки на спорт",
      "мобільний додаток",
    ],
  },
  "eu-fi": {
    id: "eu-fi",
    hubPath: "/markets/eu/fi",
    hubTitle: "Trusted betting sites Finland",
    hubDescription:
      "Veikkaus, PAF, Coolbet, LeoVegas and licensed Nordic operators — Finland market guide.",
    directoryLabel: "All Finland brands",
    ogLocale: "fi_FI",
    htmlLang: "fi",
    countryName: "Finland",
    regionLabel: "EU Tier 2 · Nordics",
    searchIntents: [
      "trusted site",
      "login",
      "bonus",
      "licensed operator",
      "mobile app",
      "sports betting",
      "casino",
    ],
  },
  "eu-no": {
    id: "eu-no",
    hubPath: "/markets/eu/no",
    hubTitle: "Pålitelige spillsider Norge",
    hubDescription:
      "Norsk Tipping, Betsson, Coolbet, LeoVegas og andre populære norske markeder.",
    directoryLabel: "Alle NO merker",
    ogLocale: "nb_NO",
    htmlLang: "no",
    countryName: "Norge",
    regionLabel: "EU Tier 2 · Nordics",
    searchIntents: [
      "pålitelig",
      "innlogging",
      "bonus",
      "lisens",
      "mobil",
      "odds",
      "casino",
    ],
  },
  "eu-dk": {
    id: "eu-dk",
    hubPath: "/markets/eu/dk",
    hubTitle: "Pålidelige betting sider Danmark",
    hubDescription:
      "Danske Spil, Unibet, Bet365, LeoVegas og licenserede danske operatører.",
    directoryLabel: "Alle DK mærker",
    ogLocale: "da_DK",
    htmlLang: "da",
    countryName: "Danmark",
    regionLabel: "EU Tier 2 · Nordics",
    searchIntents: [
      "login",
      "bonus",
      "licens",
      "mobil app",
      "odds",
      "casino",
      "sikker side",
    ],
  },
  "eu-mt": {
    id: "eu-mt",
    hubPath: "/markets/eu/mt",
    hubTitle: "Malta iGaming operators & trusted brands",
    hubDescription:
      "MGA-licensed operators headquartered in Malta: Betsson, Kindred, LeoVegas, Tipico and more.",
    directoryLabel: "All Malta brands",
    ogLocale: "en_MT",
    htmlLang: "en",
    countryName: "Malta",
    regionLabel: "EU Tier 2 · MGA Hub",
    searchIntents: [
      "MGA license",
      "trusted operator",
      "login",
      "bonus",
      "casino",
      "sportsbook",
      "regulated",
    ],
  },
  "eu-ee": {
    id: "eu-ee",
    hubPath: "/markets/eu/ee",
    hubTitle: "Usaldusväärsed saidid Eesti",
    hubDescription:
      "OlyBet, Coolbet, Optibet ja teised populaarsed Eesti turu brändid.",
    directoryLabel: "Kõik EE brändid",
    ogLocale: "et_EE",
    htmlLang: "et",
    countryName: "Eesti",
    regionLabel: "EU Tier 2 · Baltics",
    searchIntents: [
      "sisse login",
      "boonus",
      "litsents",
      "mobili",
      "panustamine",
      "kasiino",
    ],
  },
};

export const geoBrandsByMarket: Record<GeoMarketId, GeoBrandGuide[]> = {
  az: azBrandGuides,
  ru: ruBrandGuides,
  ua: uaBrandGuides,
  "eu-fi": euFiBrandGuides,
  "eu-no": euNoBrandGuides,
  "eu-dk": euDkBrandGuides,
  "eu-mt": euMtBrandGuides,
  "eu-ee": euEeBrandGuides,
};

export const ALL_GEO_MARKET_IDS = Object.keys(
  GEO_MARKET_CONFIGS,
) as GeoMarketId[];

export function getGeoMarketConfig(id: string): GeoMarketConfig | undefined {
  return GEO_MARKET_CONFIGS[id as GeoMarketId];
}

export function getGeoBrands(marketId: GeoMarketId): GeoBrandGuide[] {
  return geoBrandsByMarket[marketId] ?? [];
}

export function resolveGeoBrand(
  marketId: GeoMarketId,
  slug: string,
): GeoBrandGuide | undefined {
  const brands = getGeoBrands(marketId);
  const direct = brands.find((b) => b.slug === slug);
  if (direct) return direct;
  const compact = slug.replace(/-/g, "");
  return brands.find((b) => b.slug.replace(/-/g, "") === compact);
}

export function getAllGeoBrandRoutes(): { marketId: GeoMarketId; slug: string }[] {
  return ALL_GEO_MARKET_IDS.flatMap((marketId) =>
    getGeoBrands(marketId).map((b) => ({ marketId, slug: b.slug })),
  );
}

export function getPopularGeoBrands(
  marketId: GeoMarketId,
  limit = 8,
): GeoBrandGuide[] {
  return getGeoBrands(marketId).slice(0, limit);
}

export function getBrandPagePath(marketId: GeoMarketId, slug: string): string {
  const config = GEO_MARKET_CONFIGS[marketId];
  return `${config.hubPath}/${slug}`;
}
