import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BrandRehberLightLayout } from "@/components/brand-rehber-light-layout";
import { BreadcrumbJsonLd } from "@/components/site-json-ld";
import { bonusBrandGuides, bonusGuideBySlug } from "@/data/bonus-guides";
import { getSiteUrl } from "@/constants";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return bonusBrandGuides.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const brand = bonusGuideBySlug.get(params.slug);
  if (!brand) return { title: "Sayfa bulunamadı" };

  const title = `${brand.name} Rehberi | Güncel adres, giriş ve bonus`;
  const description = `${brand.name} için tarafsız iGaming rehberi: güncel giriş, adres ve bonus bilgilendirmesi. PR ve iş birliği için Telegram: @jelibonmarketing.`;
  const path = `/blog/rehber/${brand.slug}`;

  return {
    title,
    description,
    keywords: [
      `${brand.name} giriş`,
      `${brand.name} güncel adres`,
      `${brand.name} bonus`,
      `${brand.name} mobil giriş`,
      `${brand.name} kayıt`,
      "iGaming rehberi",
      "jelibonmarketing telegram",
    ],
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Jelibon Marketing`,
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
            description: `${brand.name} güncel giriş, adres ve bonus bilgilendirme sayfası.`,
            inLanguage: "tr-TR",
            isPartOf: { "@id": `${base}/#website` },
          }),
        }}
      />
      <BrandRehberLightLayout brandName={brand.name} slug={brand.slug} />
    </>
  );
}
