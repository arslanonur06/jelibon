/**
 * Shared TypeScript types for the Jelibon Marketing site.
 * Import from "@/types" across the project.
 */

// ─── Locale ──────────────────────────────────────────────────────────────────
export type { Locale } from "@/lib/i18n/locales";

// ─── Navigation ──────────────────────────────────────────────────────────────
export type { DockNavItem } from "@/components/ui/dock-tabs";

// ─── Blog ────────────────────────────────────────────────────────────────────
export type { BlogPost } from "@/data/blog-posts";

// ─── Packages ────────────────────────────────────────────────────────────────
export type { ServicePackage, GrowthPackageTier } from "@/data/packages";
