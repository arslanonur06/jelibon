import { BRAND_NAME, DEFAULT_OG_IMAGE_PATH, getSiteUrl } from "@/constants";

type Props = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  coverImage?: string;
};

export function BlogPostJsonLd({
  slug,
  title,
  description,
  datePublished,
  coverImage,
}: Props) {
  const base = getSiteUrl();
  const pageUrl = `${base}/blog/${slug}`;
  const imageUrl = coverImage
    ? coverImage.startsWith("http")
      ? coverImage
      : `${base}${coverImage}`
    : `${base}${DEFAULT_OG_IMAGE_PATH}`;

  const payload = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    image: [imageUrl],
    author: {
      "@type": "Organization" as const,
      name: BRAND_NAME,
      url: base,
    },
    publisher: {
      "@type": "Organization" as const,
      name: BRAND_NAME,
      logo: {
        "@type": "ImageObject" as const,
        url: `${base}${DEFAULT_OG_IMAGE_PATH}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage" as const,
      "@id": pageUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
