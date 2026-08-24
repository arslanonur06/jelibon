import type { GeoMarketId } from "@/data/geo/types";

export const EU_COUNTRY_TO_MARKET: Record<string, GeoMarketId> = {
  fi: "eu-fi",
  no: "eu-no",
  dk: "eu-dk",
  mt: "eu-mt",
  ee: "eu-ee",
};

export const EU_COUNTRY_CODES = Object.keys(EU_COUNTRY_TO_MARKET);

export function euCountryToMarket(country: string): GeoMarketId | undefined {
  return EU_COUNTRY_TO_MARKET[country];
}
