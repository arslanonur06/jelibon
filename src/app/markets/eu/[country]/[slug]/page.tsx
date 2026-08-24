import { notFound } from "next/navigation";
import {
  GeoBrandPageContent,
  geoBrandMetadata,
} from "@/components/geo-brand-page-content";
import {
  EU_COUNTRY_CODES,
  euCountryToMarket,
} from "@/data/geo/eu-countries";
import { getGeoBrands } from "@/data/geo/markets";

export const dynamic = "force-static";

export function generateStaticParams() {
  return EU_COUNTRY_CODES.flatMap((country) => {
    const marketId = euCountryToMarket(country);
    if (!marketId) return [];
    return getGeoBrands(marketId).map((b) => ({ country, slug: b.slug }));
  });
}

type Props = { params: { country: string; slug: string } };

export function generateMetadata({ params }: Props) {
  const marketId = euCountryToMarket(params.country);
  if (!marketId) return { title: "Not found", robots: { index: false } };
  return geoBrandMetadata(marketId, params.slug);
}

export default function EuBrandPage({ params }: Props) {
  const marketId = euCountryToMarket(params.country);
  if (!marketId) notFound();
  return <GeoBrandPageContent marketId={marketId} slug={params.slug} />;
}
