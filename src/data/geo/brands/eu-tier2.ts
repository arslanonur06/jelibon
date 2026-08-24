import { EMOJISTAR_TELEGRAM_URL } from "@/constants";
import type { GeoBrandGuide, GeoMarketId } from "../types";

function b(
  marketId: GeoMarketId,
  name: string,
  slug: string,
  licenseNote?: string,
): GeoBrandGuide {
  return {
    marketId,
    name,
    slug,
    telegramUrl: EMOJISTAR_TELEGRAM_URL,
    licenseNote,
  };
}

/** Finland — Tier 2 EU / Nordics */
export const euFiBrandGuides: GeoBrandGuide[] = [
  b("eu-fi", "Veikkaus", "veikkaus", "Valtion monopoli"),
  b("eu-fi", "PAF", "paf", "Åland-lisenssi"),
  b("eu-fi", "Coolbet", "coolbet"),
  b("eu-fi", "LeoVegas", "leovegas", "MGA"),
  b("eu-fi", "Betsson", "betsson", "MGA"),
  b("eu-fi", "Unibet", "unibet", "MGA"),
  b("eu-fi", "Ninja Casino", "ninja-casino"),
  b("eu-fi", "Wildz", "wildz"),
  b("eu-fi", "Casumo", "casumo"),
  b("eu-fi", "Mr Green", "mr-green"),
];

/** Norway */
export const euNoBrandGuides: GeoBrandGuide[] = [
  b("eu-no", "Norsk Tipping", "norsk-tipping", "Statlig monopol"),
  b("eu-no", "Norsk Rikstoto", "norsk-rikstoto", "Statlig"),
  b("eu-no", "Betsson", "betsson"),
  b("eu-no", "Coolbet", "coolbet"),
  b("eu-no", "Unibet", "unibet"),
  b("eu-no", "LeoVegas", "leovegas"),
  b("eu-no", "ComeOn", "comeon"),
  b("eu-no", "NordicBet", "nordicbet"),
  b("eu-no", "Rizk", "rizk"),
  b("eu-no", "Casumo", "casumo"),
];

/** Denmark */
export const euDkBrandGuides: GeoBrandGuide[] = [
  b("eu-dk", "Danske Spil", "danske-spil", "Statlig licens"),
  b("eu-dk", "Unibet", "unibet"),
  b("eu-dk", "Bet365", "bet365"),
  b("eu-dk", "LeoVegas", "leovegas"),
  b("eu-dk", "Betsson", "betsson"),
  b("eu-dk", "Mr Green", "mr-green"),
  b("eu-dk", "NordicBet", "nordicbet"),
  b("eu-dk", "ComeOn", "comeon"),
  b("eu-dk", "888casino", "888casino"),
  b("eu-dk", "Expekt", "expekt"),
];

/** Malta — operator & MGA hub */
export const euMtBrandGuides: GeoBrandGuide[] = [
  b("eu-mt", "Betsson Group", "betsson-group", "MGA HQ Malta"),
  b("eu-mt", "Kindred", "kindred", "MGA"),
  b("eu-mt", "LeoVegas", "leovegas", "MGA"),
  b("eu-mt", "Tipico", "tipico"),
  b("eu-mt", "Betway", "betway", "MGA"),
  b("eu-mt", "Rizk", "rizk"),
  b("eu-mt", "Videoslots", "videoslots", "MGA"),
  b("eu-mt", "Unibet", "unibet"),
  b("eu-mt", "Betclic", "betclic"),
  b("eu-mt", "Superbet", "superbet"),
  b("eu-mt", "William Hill", "william-hill"),
  b("eu-mt", "888 Holdings", "888-holdings"),
];

/** Estonia */
export const euEeBrandGuides: GeoBrandGuide[] = [
  b("eu-ee", "OlyBet", "olybet", "Eesti litsents"),
  b("eu-ee", "Coolbet", "coolbet"),
  b("eu-ee", "Unibet", "unibet"),
  b("eu-ee", "Optibet", "optibet"),
  b("eu-ee", "TonyBet", "tonybet"),
  b("eu-ee", "Paf", "paf"),
  b("eu-ee", "Betsafe", "betsafe"),
  b("eu-ee", "Ninja Casino", "ninja-casino"),
  b("eu-ee", "HappyLuke", "happyluke"),
  b("eu-ee", "LeoVegas", "leovegas"),
];
