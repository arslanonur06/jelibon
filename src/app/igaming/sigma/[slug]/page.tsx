import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BonusBrandJsonLd } from "@/components/bonus-brand-json-ld";
import { BrandRehberLightLayout } from "@/components/brand-rehber-light-layout";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/site-json-ld";
import { buildSigmaArticle } from "@/data/geo/build-sigma-article";
import { sigmaExhibitorBySlug, sigmaExhibitors } from "@/data/geo/brands/sigma";
import { EMOJISTAR_TELEGRAM_URL } from "@/constants";
import { toCanonicalUrl } from "@/lib/seo";

export const dynamic = "force-static";

const HUB = "/igaming/sigma";

export function generateStaticParams() {
  return sigmaExhibitors.map((e) => ({ slug: e.slug }));
}

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const exhibitor = sigmaExhibitorBySlug.get(params.slug);
  if (!exhibitor) return { title: "Not found", robots: { index: false } };

  const article = buildSigmaArticle(exhibitor);
  const pagePath = `${HUB}/${exhibitor.slug}`;
  const canonicalUrl = toCanonicalUrl(pagePath);

  return {
    title: article.title,
    description: article.intro[0],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${exhibitor.name} | SiGMA | Jelibon`,
      description: article.intro[0],
      url: canonicalUrl,
      type: "article",
    },
    robots: { index: false, follow: true },
  };
}

export default function SigmaExhibitorPage({ params }: Props) {
  const exhibitor = sigmaExhibitorBySlug.get(params.slug);
  if (!exhibitor) notFound();

  const article = buildSigmaArticle(exhibitor);
  const pagePath = `${HUB}/${exhibitor.slug}`;
  const canonicalUrl = toCanonicalUrl(pagePath);

  const brand = {
    name: exhibitor.name,
    slug: exhibitor.slug,
    telegramUrl: EMOJISTAR_TELEGRAM_URL,
  };

  return (
    <>
      <BonusBrandJsonLd
        slug={exhibitor.slug}
        title={article.title}
        description={article.intro[0]}
        pagePath={pagePath}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "SiGMA", path: HUB },
          { name: exhibitor.name, path: pagePath },
        ]}
      />
      <FaqJsonLd items={article.faqs} pageUrl={canonicalUrl} />
      <BrandRehberLightLayout
        brand={brand}
        article={article}
        directoryHref={HUB}
        directoryLabel="All SiGMA exhibitors"
        relatedHrefBase={HUB}
      />
    </>
  );
}
