import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BonusBrandJsonLd } from "@/components/bonus-brand-json-ld";
import { BrandRehberLightLayout } from "@/components/brand-rehber-light-layout";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/site-json-ld";
import { buildGeoArticle } from "@/data/geo/build-geo-article";
import {
  GEO_MARKET_CONFIGS,
  getBrandPagePath,
  resolveGeoBrand,
} from "@/data/geo/markets";
import type { GeoMarketId } from "@/data/geo/types";
import { toCanonicalUrl } from "@/lib/seo";

export function geoBrandMetadata(
  marketId: GeoMarketId,
  slug: string,
): Metadata {
  const market = GEO_MARKET_CONFIGS[marketId];
  const brand = resolveGeoBrand(marketId, slug);
  if (!brand) return { title: "Not found", robots: { index: false } };

  const article = buildGeoArticle(market, brand);
  const pagePath = getBrandPagePath(marketId, brand.slug);
  const canonicalUrl = toCanonicalUrl(pagePath);

  return {
    title: article.title,
    description: article.intro[0],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${brand.name} | ${market.countryName} | Jelibon`,
      description: article.intro[0],
      url: canonicalUrl,
      type: "article",
      locale: market.ogLocale,
    },
    robots: { index: true, follow: true },
  };
}

type GeoBrandPageContentProps = {
  marketId: GeoMarketId;
  slug: string;
};

export function GeoBrandPageContent({ marketId, slug }: GeoBrandPageContentProps) {
  const market = GEO_MARKET_CONFIGS[marketId];
  const brand = resolveGeoBrand(marketId, slug);
  if (!brand) notFound();

  const article = buildGeoArticle(market, brand);
  const pagePath = getBrandPagePath(marketId, brand.slug);
  const canonicalUrl = toCanonicalUrl(pagePath);

  return (
    <>
      <BonusBrandJsonLd
        slug={brand.slug}
        title={article.title}
        description={article.intro[0]}
        pagePath={pagePath}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Markets", path: "/markets" },
          { name: market.countryName, path: market.hubPath },
          { name: brand.name, path: pagePath },
        ]}
      />
      <FaqJsonLd items={article.faqs} pageUrl={canonicalUrl} />
      <BrandRehberLightLayout
        brand={brand}
        article={article}
        directoryHref={market.hubPath}
        directoryLabel={market.directoryLabel}
        relatedHrefBase={market.hubPath}
      />
    </>
  );
}
