import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { GrowthPillars } from "@/components/growth-pillars";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FaqJsonLd } from "@/components/site-json-ld";
import {
  DEFAULT_OG_IMAGE_PATH,
  SEO_HOME_DESCRIPTION_EN,
  SEO_HOME_DESCRIPTION_RU,
  SEO_HOME_DESCRIPTION_TR,
  SEO_HOME_TITLE_EN,
  SEO_HOME_TITLE_RU,
  SEO_HOME_TITLE_TR,
  SEO_KEYWORDS,
  getSiteUrl,
} from "@/constants";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";

const OrbitalTimelineSection = dynamic(
  () =>
    import("@/components/orbital-timeline-section").then((m) => ({
      default: m.OrbitalTimelineSection,
    })),
  { loading: () => <div className="min-h-[560px]" aria-hidden /> },
);

const PackagesSection = dynamic(
  () =>
    import("@/components/packages-section").then((m) => ({
      default: m.PackagesSection,
    })),
  { loading: () => <div className="min-h-[420px]" aria-hidden /> },
);

const PriceCalculator = dynamic(
  () =>
    import("@/components/price-calculator").then((m) => ({
      default: m.PriceCalculator,
    })),
  { loading: () => <div className="min-h-[280px]" aria-hidden /> },
);

const ComboSection = dynamic(
  () =>
    import("@/components/combo-section").then((m) => ({
      default: m.ComboSection,
    })),
  { loading: () => <div className="min-h-[200px]" aria-hidden /> },
);

const TestimonialsSection = dynamic(
  () =>
    import("@/components/testimonials-section").then((m) => ({
      default: m.TestimonialsSection,
    })),
  { loading: () => <div className="min-h-[300px]" aria-hidden /> },
);

const BlogPreview = dynamic(
  () =>
    import("@/components/blog-preview").then((m) => ({
      default: m.BlogPreview,
    })),
  { loading: () => <div className="min-h-[260px]" aria-hidden /> },
);

const FaqSection = dynamic(
  () =>
    import("@/components/faq-section").then((m) => ({
      default: m.FaqSection,
    })),
  { loading: () => <div className="min-h-[360px]" aria-hidden /> },
);

export function generateMetadata(): Metadata {
  const locale = getLocale();
  const siteUrl = getSiteUrl();

  const home =
    locale === "tr"
      ? {
          title: SEO_HOME_TITLE_TR,
          description: SEO_HOME_DESCRIPTION_TR,
          ogLocale: "tr_TR" as const,
        }
      : locale === "ru"
        ? {
            title: SEO_HOME_TITLE_RU,
            description: SEO_HOME_DESCRIPTION_RU,
            ogLocale: "ru_RU" as const,
          }
        : {
            title: SEO_HOME_TITLE_EN,
            description: SEO_HOME_DESCRIPTION_EN,
            ogLocale: "en_US" as const,
          };

  return {
    alternates: { canonical: "/" },
    title: home.title,
    description: home.description,
    keywords: [...SEO_KEYWORDS],
    openGraph: {
      title: home.title,
      description: home.description,
      url: siteUrl,
      locale: home.ogLocale,
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE_PATH, alt: home.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: home.title,
      description: home.description,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  };
}

export default function Home() {
  const locale = getLocale();
  const dict = getDictionary(locale);

  return (
    <div className="relative min-h-screen bg-transparent">
      <FaqJsonLd items={dict.faq.items} pageUrl={`${getSiteUrl()}/`} />
      <SiteHeader />
      <main className="relative z-10">
        <HeroSection />
        <div className="relative -mt-4 overflow-hidden rounded-t-[1.75rem] border-t border-white/[0.08] bg-[#050510]/80 shadow-[0_-12px_48px_rgba(0,0,0,0.4)] sm:-mt-5 sm:rounded-t-[2rem]">
          <GrowthPillars />
          <OrbitalTimelineSection />
          <PackagesSection />
          <PriceCalculator locale={locale} />
          <ComboSection />
          <TestimonialsSection />
          <BlogPreview />
          <FaqSection locale={locale} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
