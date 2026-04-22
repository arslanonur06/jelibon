import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BrandRehberLightLayout } from "@/components/brand-rehber-light-layout";
import { BreadcrumbJsonLd } from "@/components/site-json-ld";
import { buildBonusArticle } from "@/data/bonus-article";
import { bonusBrandGuides, bonusGuideBySlug } from "@/data/bonus-guides";
import { getSiteUrl } from "@/constants";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return bonusBrandGuides.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const brand = bonusGuideBySlug.get(params.slug);
  if (!brand) return { title: "Sayfa bulunamadı" };

  const title = `${brand.name} — giriş ve bonus notları`;
  const description = `${brand.name} giris, adres ve bonus rehberi.`;
  const path = `/blog/rehber/${brand.slug}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${brand.name} rehberi | Jelibon Marketing`,
      description,
      type: "article",
      url: path,
      locale: "tr_TR",
    },
  };
}

export default function BlogBrandRehberPage({ params }: Props) {
  const brand = bonusGuideBySlug.get(params.slug);
  if (!brand) notFound();
  const article = buildBonusArticle(brand);

  const base = getSiteUrl();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Marka rehberleri", path: "/blog/rehber" },
          { name: `${brand.name} Rehberi`, path: `/blog/rehber/${brand.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${base}/blog/rehber/${brand.slug}#webpage`,
            url: `${base}/blog/rehber/${brand.slug}`,
            name: `${brand.name} Rehberi`,
            description: `${brand.name} güncel giriş, adres ve bonus sayfası.`,
            inLanguage: "tr-TR",
            isPartOf: { "@id": `${base}/#website` },
          }),
        }}
      />
      <BrandRehberLightLayout
        brand={brand}
        article={article}
        directoryHref="/blog/rehber"
        directoryLabel="Tüm markalar"
        relatedHrefBase="/blog/rehber"
      />
    </>
  );
}
