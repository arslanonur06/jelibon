import { GeoBrandPageContent, geoBrandMetadata } from "@/components/geo-brand-page-content";
import { getGeoBrands } from "@/data/geo/markets";

const MARKET_ID = "ua" as const;

export const dynamic = "force-static";

export function generateStaticParams() {
  return getGeoBrands(MARKET_ID).map((b) => ({ slug: b.slug }));
}

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props) {
  return geoBrandMetadata(MARKET_ID, params.slug);
}

export default function UaBrandPage({ params }: Props) {
  return <GeoBrandPageContent marketId={MARKET_ID} slug={params.slug} />;
}
