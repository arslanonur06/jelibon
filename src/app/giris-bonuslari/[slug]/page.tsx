import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BonusBrandJsonLd } from "@/components/bonus-brand-json-ld";
import { BrandRehberLightLayout } from "@/components/brand-rehber-light-layout";
import { BreadcrumbJsonLd } from "@/components/site-json-ld";
import { buildBonusArticle } from "@/data/bonus-article";
import { bonusBrandGuides, bonusGuideBySlug } from "@/data/bonus-guides";
import { getBonusBrandSeoKeywords } from "@/data/seo-all-keywords";
import { toCanonicalUrl } from "@/lib/seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return bonusBrandGuides.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const brand = bonusGuideBySlug.get(params.slug);
  if (!brand) return { title: "Sayfa bulunamadi" };

  const title = `${brand.name} site, guncel adres ve bonus rehberi`;
  const description =
    `${brand.name} site, guncel adres, guncel giris ve bonus rehberi.`;
  const canonicalUrl = toCanonicalUrl(`/giris-bonuslari/${brand.slug}`);

  return {
    title,
    description,
    keywords: getBonusBrandSeoKeywords(brand),
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${brand.name} bonus rehberi | Jelibon Marketing`,
      description,
      url: canonicalUrl,
      type: "article",
    },
  };
}

export default function BonusBrandPage({ params }: Props) {
  const brand = bonusGuideBySlug.get(params.slug);
  if (!brand) notFound();
  const article = buildBonusArticle(brand);
  const title = `${brand.name} site, guncel adres ve bonus rehberi`;
  const description =
    `${brand.name} site, guncel adres, guncel giris ve bonus rehberi.`;

  return (
    <>
      <BonusBrandJsonLd
        slug={brand.slug}
        title={title}
        description={description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Ana sayfa", path: "/" },
          { name: "Giriş bonusları", path: "/giris-bonuslari" },
          { name: brand.name, path: `/giris-bonuslari/${brand.slug}` },
        ]}
      />
      <BrandRehberLightLayout
        brand={brand}
        article={article}
        directoryHref="/giris-bonuslari"
        directoryLabel="Tüm bonus rehberleri"
        relatedHrefBase="/giris-bonuslari"
      />
    </>
  );
}
