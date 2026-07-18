import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { BonusBrandJsonLd } from "@/components/bonus-brand-json-ld";
import { BrandRehberLightLayout } from "@/components/brand-rehber-light-layout";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/site-json-ld";
import { buildBonusArticle } from "@/data/bonus-article";
import {
  bonusBrandGuides,
  resolveBonusBrandBySlug,
} from "@/data/bonus-guides";
import { getBonusBrandSeoKeywords } from "@/data/seo-all-keywords";
import { toCanonicalUrl } from "@/lib/seo";

type Props = { params: { slug: string } };

export const dynamic = "force-static";

export function generateStaticParams() {
  return bonusBrandGuides.map((item) => ({ slug: item.slug }));
}

function getBrandMeta(brand: NonNullable<ReturnType<typeof resolveBonusBrandBySlug>>) {
  const title = `${brand.name} güncel giriş, adres ve bonus rehberi`;
  const description = `${brand.name} güncel giriş, güncel adres, deneme bonusu ve kampanya rehberi. ${brand.name} site bilgileri ve SSS.`;
  const canonicalUrl = toCanonicalUrl(`/giris-bonuslari/${brand.slug}`);
  return { title, description, canonicalUrl };
}

export function generateMetadata({ params }: Props): Metadata {
  const brand = resolveBonusBrandBySlug(params.slug);
  if (!brand) return { title: "Sayfa bulunamadı", robots: { index: false } };

  const { title, description, canonicalUrl } = getBrandMeta(brand);

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
      locale: "tr_TR",
    },
    robots: { index: true, follow: true },
  };
}

export default function BonusBrandPage({ params }: Props) {
  const brand = resolveBonusBrandBySlug(params.slug);
  if (!brand) notFound();

  if (params.slug !== brand.slug) {
    permanentRedirect(`/giris-bonuslari/${brand.slug}`);
  }

  const article = buildBonusArticle(brand);
  const { title, description, canonicalUrl } = getBrandMeta(brand);

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
      <FaqJsonLd items={article.faqs} pageUrl={canonicalUrl} />
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
