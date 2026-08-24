import { getSiteUrl } from "@/constants";
import { toCanonicalUrl } from "@/lib/seo";

type Props = {
  slug: string;
  title: string;
  description: string;
  /** e.g. /guvenilir-siteler/casibom or /markets/az/melbet */
  pagePath: string;
};

export function BonusBrandJsonLd({ title, description, pagePath }: Props) {
  const pageUrl = toCanonicalUrl(pagePath);
  const site = getSiteUrl();

  const payload = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl,
    url: pageUrl,
    name: title,
    description,
    isPartOf: { "@type": "WebSite", "@id": `${site}/#website` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
