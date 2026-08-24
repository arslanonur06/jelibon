import type { Metadata } from "next";
import { GeoMarketHubView } from "@/components/geo-market-hub";
import {
  GEO_MARKET_CONFIGS,
  getGeoBrands,
  getPopularGeoBrands,
} from "@/data/geo/markets";
import { toCanonicalUrl } from "@/lib/seo";

const MARKET_ID = "az" as const;
const market = GEO_MARKET_CONFIGS[MARKET_ID];

export const metadata: Metadata = {
  title: market.hubTitle,
  description: market.hubDescription,
  alternates: { canonical: toCanonicalUrl(market.hubPath) },
  openGraph: {
    title: market.hubTitle,
    description: market.hubDescription,
    url: toCanonicalUrl(market.hubPath),
    locale: market.ogLocale,
  },
};

export default function AzMarketHubPage() {
  return (
    <GeoMarketHubView
      market={market}
      brands={getGeoBrands(MARKET_ID)}
      popularBrands={getPopularGeoBrands(MARKET_ID)}
    />
  );
}
