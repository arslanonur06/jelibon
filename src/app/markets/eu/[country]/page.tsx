import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GeoMarketHubView } from "@/components/geo-market-hub";
import {
  EU_COUNTRY_CODES,
  euCountryToMarket,
} from "@/data/geo/eu-countries";
import {
  GEO_MARKET_CONFIGS,
  getGeoBrands,
  getPopularGeoBrands,
} from "@/data/geo/markets";
import { toCanonicalUrl } from "@/lib/seo";

type Props = { params: { country: string } };

export function generateStaticParams() {
  return EU_COUNTRY_CODES.map((country) => ({ country }));
}

export function generateMetadata({ params }: Props): Metadata {
  const marketId = euCountryToMarket(params.country);
  if (!marketId) return { title: "Not found", robots: { index: false } };
  const market = GEO_MARKET_CONFIGS[marketId];
  return {
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
}

export default function EuCountryHubPage({ params }: Props) {
  const marketId = euCountryToMarket(params.country);
  if (!marketId) notFound();
  const market = GEO_MARKET_CONFIGS[marketId];

  return (
    <GeoMarketHubView
      market={market}
      brands={getGeoBrands(marketId)}
      popularBrands={getPopularGeoBrands(marketId)}
    />
  );
}
