/**
 * App-wide constants for the Jelibon Marketing site.
 * Import from "@/constants" across the project.
 */

// ─── Brand ───────────────────────────────────────────────────────────────────
export const BRAND_NAME = "Jelibon Marketing";
export const BRAND_TAGLINE = "Premium growth & software · Türkiye";

// ─── Links ───────────────────────────────────────────────────────────────────
export const TELEGRAM_URL = "https://t.me/jelibonmarketing";
export const EMAIL = "contact@jelibonmarketing.com";

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
