import { BRAND_NAME, TELEGRAM_URL } from "@/constants";
import { DEFAULT_OG_IMAGE_PATH, getSiteUrl } from "@/lib/site-config";

/**
 * Organization + WebSite structured data (no email — contact via Telegram).
 */
export function SiteJsonLd() {
  const url = getSiteUrl();
  const logoUrl = `${url}${DEFAULT_OG_IMAGE_PATH}`;

  const graph = [
    {
      "@type": "Organization",
      "@id": `${url}/#organization`,
      name: BRAND_NAME,
      url,
      logo: { "@type": "ImageObject" as const, url: logoUrl },
      sameAs: [TELEGRAM_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${url}/#website`,
      name: BRAND_NAME,
      url,
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
