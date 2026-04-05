import {
  BRAND_NAME,
  DEFAULT_OG_IMAGE_PATH,
  getSiteUrl,
  SEO_DEFAULT_DESCRIPTION,
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

  const graph = [
    {
      "@type": "Organization",
      "@id": `${url}/#organization`,
      name: BRAND_NAME,
      url,
      description: SEO_DEFAULT_DESCRIPTION,
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
