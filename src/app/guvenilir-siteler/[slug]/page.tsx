import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { BonusBrandJsonLd } from "@/components/bonus-brand-json-ld";
import { BrandRehberLightLayout } from "@/components/brand-rehber-light-layout";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/site-json-ld";
import { buildBonusArticle } from "@/data/bonus-article";
import { isIndexableBrandSlug } from "@/data/brand-index-policy";
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

function getBrandMeta(
  brand: NonNullable<ReturnType<typeof resolveBonusBrandBySlug>>,
  article?: ReturnType<typeof buildBonusArticle>,
) {
  const title =
    article?.metaTitle ?? `${brand.name} — katalog kaydı`;
  const description =
    article?.metaDescription ??
    `${brand.name} dizin kaydı. Güncel giriş doğrulaması Telegram @emojistarbot.`;
  const canonicalUrl = toCanonicalUrl(`/guvenilir-siteler/${brand.slug}`);
  return { title, description, canonicalUrl };
}

export function generateMetadata({ params }: Props): Metadata {
  const brand = resolveBonusBrandBySlug(params.slug);
  if (!brand) return { title: "Sayfa bulunamadı", robots: { index: false } };

  const article = buildBonusArticle(brand);
  const { title, description, canonicalUrl } = getBrandMeta(brand, article);
  const indexable = isIndexableBrandSlug(brand.slug);

  return {
    title,
    description,
    keywords: indexable ? getBonusBrandSeoKeywords(brand) : undefined,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${brand.name} güvenilir site rehberi | Jelibon Marketing`,
      description,
      url: canonicalUrl,
      type: "article",
      locale: "tr_TR",
    },
    robots: { index: indexable, follow: true },
  };
}

export default function BonusBrandPage({ params }: Props) {
  const brand = resolveBonusBrandBySlug(params.slug);
  if (!brand) notFound();

  if (params.slug !== brand.slug) {
    permanentRedirect(`/guvenilir-siteler/${brand.slug}`);
  }

  const article = buildBonusArticle(brand);
  const { title, description, canonicalUrl } = getBrandMeta(brand, article);

  return (
    <>
      <BonusBrandJsonLd
        slug={brand.slug}
        title={title}
        description={description}
        pagePath={`/guvenilir-siteler/${brand.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Ana sayfa", path: "/" },
          { name: "Güvenilir siteler", path: "/guvenilir-siteler" },
          { name: brand.name, path: `/guvenilir-siteler/${brand.slug}` },
        ]}
      />
      {article.premium ? (
        <FaqJsonLd items={article.faqs} pageUrl={canonicalUrl} />
      ) : null}
      <BrandRehberLightLayout
        brand={brand}
        article={article}
        directoryHref="/guvenilir-siteler"
        directoryLabel="Tüm güvenilir siteler"
        relatedHrefBase="/guvenilir-siteler"
      />
    </>
  );
}
