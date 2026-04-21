import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { DM_Sans, Orbitron } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteGradientBackground } from "@/components/site-gradient-background";
import { SiteAnalytics } from "@/components/site-analytics";
import { SiteJsonLd } from "@/components/site-json-ld";
import {
  BRAND_NAME,
  DEFAULT_OG_IMAGE_PATH,
  FAVICON_PATH,
  getGoogleSiteVerification,
  getSiteUrl,
  SEO_DEFAULT_DESCRIPTION,
  SEO_DEFAULT_TITLE,
  SEO_OG_DESCRIPTION,
  SEO_TITLE_TEMPLATE,
} from "@/constants";
import { getAllSeoKeywords } from "@/data/seo-all-keywords";
import { getLocale } from "@/lib/i18n/get-locale";

const VercelAnalytics = dynamic(
  () => import("@vercel/analytics/react").then((m) => m.Analytics),
  { ssr: false },
);

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
  preload: false,
});

const dmSans = DM_Sans({
  subsets: ["latin-ext"],
  variable: "--font-dm",
  display: "swap",
});

const siteUrl = getSiteUrl();
const googleSiteVerification = getGoogleSiteVerification();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: SEO_DEFAULT_TITLE, template: SEO_TITLE_TEMPLATE },
  description: SEO_DEFAULT_DESCRIPTION,
  keywords: getAllSeoKeywords(),
  authors: [{ name: BRAND_NAME, url: siteUrl }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SEO_DEFAULT_TITLE,
    description: SEO_OG_DESCRIPTION,
    type: "website",
    url: siteUrl,
    siteName: BRAND_NAME,
    locale: "en_US",
    alternateLocale: ["tr_TR", "ru_RU"],
    images: [
      {
        url: DEFAULT_OG_IMAGE_PATH,
        alt: BRAND_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_DEFAULT_TITLE,
    description: SEO_OG_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE_PATH],
  },
  icons: {
    icon: [{ url: FAVICON_PATH, type: "image/png" }],
    apple: [{ url: FAVICON_PATH, type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  verification: { google: googleSiteVerification },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = getLocale();
  return (
    <html
      lang={locale}
      className="scroll-smooth dark"
      suppressHydrationWarning
    >
      <body
        className={cn(
          "min-h-screen bg-[#050510] font-sans text-zinc-100 antialiased",
          dmSans.variable,
          orbitron.variable,
        )}
      >
        <SiteJsonLd />
        <SiteAnalytics />
        <SiteGradientBackground />
        <div className="relative z-10">{children}</div>
        <VercelAnalytics />
      </body>
    </html>
  );
}
