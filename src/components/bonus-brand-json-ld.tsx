import { getSiteUrl } from "@/constants";
import { toCanonicalUrl } from "@/lib/seo";

type Props = {
  slug: string;
  title: string;
  description: string;
};

export function BonusBrandJsonLd({ slug, title, description }: Props) {
  const pageUrl = toCanonicalUrl(`/guvenilir-siteler/${slug}`);
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
