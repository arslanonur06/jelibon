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
