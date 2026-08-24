import type { BonusBrandGuide } from "@/data/bonus-guides";

export type GeoMarketId =
  | "az"
  | "ru"
  | "ua"
  | "eu-fi"
  | "eu-no"
  | "eu-dk"
  | "eu-mt"
  | "eu-ee";

export type GeoBrandGuide = BonusBrandGuide & {
  marketId: GeoMarketId;
  /** Optional: lokal lisans / düzenleyici notu */
  licenseNote?: string;
};

export type GeoMarketConfig = {
  id: GeoMarketId;
  hubPath: string;
  hubTitle: string;
  hubDescription: string;
  directoryLabel: string;
  ogLocale: string;
  htmlLang: string;
  countryName: string;
  regionLabel: string;
  /** betrehberi tarzı ana niyet kelimeleri */
  searchIntents: readonly string[];
};

export type SigmaExhibitor = {
  name: string;
  slug: string;
  category: string;
  description: string;
  sigmaEvents: readonly string[];
  website?: string;
};
