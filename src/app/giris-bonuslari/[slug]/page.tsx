import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BrandRehberLightLayout } from "@/components/brand-rehber-light-layout";
import { buildBonusArticle } from "@/data/bonus-article";
import { bonusBrandGuides, bonusGuideBySlug } from "@/data/bonus-guides";

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

  return {
    title,
    description,
    alternates: { canonical: `/giris-bonuslari/${brand.slug}` },
    openGraph: {
      title: `${brand.name} bonus rehberi | Jelibon Marketing`,
      description,
      url: `/giris-bonuslari/${brand.slug}`,
      type: "article",
    },
  };
}

export default function BonusBrandPage({ params }: Props) {
  const brand = bonusGuideBySlug.get(params.slug);
  if (!brand) notFound();
  const article = buildBonusArticle(brand);

  return (
    <BrandRehberLightLayout
      brand={brand}
      article={article}
      directoryHref="/giris-bonuslari"
      directoryLabel="Tüm bonus rehberleri"
      relatedHrefBase="/giris-bonuslari"
    />
  );
}
