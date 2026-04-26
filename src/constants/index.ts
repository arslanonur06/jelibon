/**
 * App-wide constants for the Jelibon Marketing site.
 * Import from "@/constants" across the project.
 */

// ─── Brand ───────────────────────────────────────────────────────────────────
export const BRAND_NAME = "Jelibon Marketing";
export const BRAND_TAGLINE = "Premium growth & software · Türkiye";

// ─── Links ───────────────────────────────────────────────────────────────────
export const TELEGRAM_URL = "https://t.me/jelibonmarketing";

// ─── SEO / metadata ─────────────────────────────────────────────────────────
// Prefer NEXT_PUBLIC_SITE_URL in Vercel env so sitemap / canonical / OG match the main domain.
// We intentionally avoid VERCEL_URL because preview deployments leak *.vercel.app into canonicals.
const DEFAULT_SITE_URL = "https://jelibon.app";

function toHttpsOrigin(raw: string): string {
  const host = raw.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return `https://${host}`;
}

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (productionHost) return toHttpsOrigin(productionHost);

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

/**
 * Favicon + PWA icons — `src/app/icon.png` ile aynı kaynak (Next `/icon.png` route).
 * Eski `/favicon.ico` istekleri `next.config.mjs` redirect ile buraya yönlendirilir.
 */
export const FAVICON_PATH = "/icon.png";

// ─── SEO copy (layout + fallbacks) ───────────────────────────────────────────
export const SEO_DEFAULT_TITLE = "Jelibon Marketing | Online Casino Growth Türkiye";

export const SEO_DEFAULT_DESCRIPTION =
  "Türkiye odaklı online casino büyümesi: Telegram, Adult Ads, deneme bonusu SEO, guvenilir siteler odakli icerik, kreatif, DMCA ve ozel yazilim. Soru ve teklif: Telegram @jelibonmarketing.";

export const SEO_OG_DESCRIPTION =
  "Online casino growth in Türkiye: deneme bonusu SEO, trusted casino site content, AI systems, traffic operations, and full-stack growth.";

/** Homepage titles (layout `SEO_TITLE_TEMPLATE` appends “| Jelibon Marketing”). */
export const SEO_HOME_TITLE_TR = "Türkiye online casino trafiği & SEO";

export const SEO_HOME_DESCRIPTION_TR =
  "Deneme bonusu, hos geldin bonusu ve guvenilir siteler gibi aramalarda icerik ve teknik SEO; Telegram, Adult Ads, kreatif, DMCA ve ihtiyaca ozel yazilim tek yapida.";

export const SEO_HOME_TITLE_EN = "Trial-Bonus SEO & Online Casino Growth Türkiye";

export const SEO_HOME_DESCRIPTION_EN =
  "Online casino growth in Türkiye: SEO for deneme bonusu and trusted casino site intent, plus Telegram, Adult Ads, AI systems, creative, DMCA, and custom software.";

export const SEO_HOME_TITLE_RU = "SEO под online casino-запросы в Турции";

export const SEO_HOME_DESCRIPTION_RU =
  "Рост online casino в Турции: SEO под deneme bonusu и trusted casino site спрос, трафик Telegram и Adult Ads, AI, креатив, DMCA и кастомная разработка.";

export const SEO_KEYWORDS = [
  "iGaming marketing",
  "iGaming Türkiye",
  "casino SEO Türkiye",
  "deneme bonusu",
  "deneme bonusu freespin",
  "deneme bonusu SEO",
  "freespin bonusu",
  "freespin",
  "doğum günü bonusu",
  "dogum gunu bonusu",
  "yatırımsız bonus",
  "yatirimsiz bonus",
  "çevrimsiz bonus",
  "cevrimsiz bonus",
  "hoş geldin bonusu",
  "hosgeldin bonusu",
  "casino bonusları",
  "güvenilir siteler",
  "guvenilir siteler",
  "güvenilir casino siteleri",
  "guvenilir casino siteleri",
  "online casino Türkiye",
  "online casino marketing",
  "slot bonusu",
  "yüksek niyetli casino sorguları",
  "deneme bonusu pazarlama",
  "trial bonus SEO",
  "no deposit bonus Turkey",
  "casino marketing Turkey",
  "Telegram ads online casino",
  "Telegram Web App casino",
  "Telegram mini app onboarding",
  "online casino SEO",
  "Google Search Console iGaming",
  "PornHub advertising",
  "online casino growth agency",
  "DMCA brand protection",
  "iGaming influencer marketing",
  "affiliate growth",
  "internal linking casino",
  "topical authority SEO",
  "E-E-A-T iGaming içerik",
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
