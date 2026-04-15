import {
  BRAND_NAME,
  DEFAULT_OG_IMAGE_PATH,
  getSiteUrl,
  SEO_DEFAULT_DESCRIPTION,
  SEO_KEYWORDS,
  SEO_SITE_LANGUAGES,
  TELEGRAM_URL,
} from "@/constants";

/**
 * Organization + WebSite structured data (no email — contact via Telegram).
 */
export function SiteJsonLd() {
  const url = getSiteUrl();
  const logoUrl = `${url}${DEFAULT_OG_IMAGE_PATH}`;
  const langs = [...SEO_SITE_LANGUAGES];

  const knowsAbout = [
    ...SEO_KEYWORDS.filter((k) => k.length <= 48),
    "iGaming performance marketing",
  ].slice(0, 40);

  const graph = [
    {
      "@type": "Organization",
      "@id": `${url}/#organization`,
      name: BRAND_NAME,
      url,
      description: SEO_DEFAULT_DESCRIPTION,
      knowsAbout,
      logo: { "@type": "ImageObject" as const, url: logoUrl },
      sameAs: [TELEGRAM_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${url}/#website`,
      name: BRAND_NAME,
      url,
      description: SEO_DEFAULT_DESCRIPTION,
      inLanguage: langs,
      publisher: { "@id": `${url}/#organization` },
    },
  ];

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

export type BreadcrumbJsonLdItem = {
  name: string;
  path: string;
};

type BreadcrumbProps = { items: BreadcrumbJsonLdItem[] };

/**
 * BreadcrumbList for Google rich results; paths must start with `/`.
 */
type FaqJsonLdItem = { question: string; answer: string };

type FaqJsonLdProps = { items: readonly FaqJsonLdItem[]; pageUrl?: string };

/**
 * FAQPage structured data; `items` must match visible FAQ copy on the page.
 */
export function FaqJsonLd({ items, pageUrl }: FaqJsonLdProps) {
  if (items.length === 0) return null;

  const base = getSiteUrl();
  const url = pageUrl?.trim() || `${base}/`;

  const mainEntity = items.map((item) => ({
    "@type": "Question" as const,
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: item.answer,
    },
  }));

  const payload = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url,
    mainEntity,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: BreadcrumbProps) {
  if (items.length === 0) return null;

  const base = getSiteUrl();
  const itemListElement = items.map((item, index) => {
    const path = item.path.startsWith("/") ? item.path : `/${item.path}`;
    return {
      "@type": "ListItem" as const,
      position: index + 1,
      name: item.name,
      item: `${base}${path}`,
    };
  });

  const payload = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
