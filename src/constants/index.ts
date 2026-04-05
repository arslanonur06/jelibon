/**
 * App-wide constants for the Jelibon Marketing site.
 * Import from "@/constants" across the project.
 */

// ─── Brand ───────────────────────────────────────────────────────────────────
export const BRAND_NAME = "Jelibon Marketing";
export const BRAND_TAGLINE = "Premium growth & software · Türkiye";

// ─── Links ───────────────────────────────────────────────────────────────────
export const TELEGRAM_URL = "https://t.me/jelibonmarketing";

// ─── SEO / metadata (NEXT_PUBLIC_SITE_URL in production; VERCEL_URL on Vercel) ─
const DEFAULT_SITE_URL = "https://jelibon.app";

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }

  return DEFAULT_SITE_URL;
}

/** Google Search Console HTML-tag token; override with `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`. */
const DEFAULT_GOOGLE_SITE_VERIFICATION =
  "ybIp6HG1Ki5aaPCkyL0sLs9TfBdfc_LePqxJ1oEL46c";

export function getGoogleSiteVerification(): string {
  const fromEnv = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
  return fromEnv || DEFAULT_GOOGLE_SITE_VERIFICATION;
}

/** Default Open Graph image path (file lives under `public/`). */
export const DEFAULT_OG_IMAGE_PATH = "/assets/jelibon-brand.png";

/** Favicon + PWA chrome icons (distinct from OG card art). */
export const FAVICON_PATH = "/assets/jelibonbackpng.png";

// ─── SEO copy (layout + fallbacks) ───────────────────────────────────────────
export const SEO_DEFAULT_TITLE = "Jelibon Marketing | iGaming Growth Türkiye";

export const SEO_DEFAULT_DESCRIPTION =
  "Premium growth & software for iGaming in Türkiye: Telegram & PornHub traffic, SEO, AI chatbot & Influencer, creative, DMCA, custom software.";

export const SEO_OG_DESCRIPTION =
  "Dominate iGaming in Türkiye—traffic, SEO, AI, and full-stack growth infrastructure.";

export const SEO_KEYWORDS = [
  "iGaming marketing",
  "iGaming Türkiye",
  "casino marketing Turkey",
  "Telegram ads iGaming",
  "Telegram Web App casino",
  "Telegram mini app onboarding",
  "iGaming SEO",
  "deneme bonusu SEO",
  "Google Search Console iGaming",
  "PornHub advertising",
  "iGaming growth agency",
  "DMCA brand protection",
  "iGaming influencer marketing",
  "affiliate growth",
  "internal linking casino",
  "topical authority SEO",
] as const;

/** Child pages use `title` only; layout appends via template. */
export const SEO_TITLE_TEMPLATE = "%s | Jelibon Marketing";

export const SEO_SITE_LANGUAGES = ["en", "tr", "ru"] as const;

// ─── Colors (matches tailwind.config.ts) ─────────────────────────────────────
export const COLORS = {
  pink: "#FF69B4",
  purple: "#A020F0",
  cyan: "#00D4FF",
  green: "#32CD32",
} as const;

// ─── Supported locales ────────────────────────────────────────────────────────
export const SUPPORTED_LOCALES = ["en", "tr", "ru"] as const;
export const DEFAULT_LOCALE = "en" as const;

// ─── Nav section IDs ─────────────────────────────────────────────────────────
export const NAV_SECTION_IDS = [
  "solutions",
  "orbital",
  "packages",
  "calculator",
  "combo",
  "testimonials",
  "blog",
  "faq",
  "contact",
] as const;

export type NavSectionId = (typeof NAV_SECTION_IDS)[number];
