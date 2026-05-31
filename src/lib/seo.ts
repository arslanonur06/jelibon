import { getSiteUrl } from "@/constants";

/** Absolute URL for rel=canonical, Open Graph, and JSON-LD @id (must match metadataBase host). */
export function toCanonicalUrl(path: string): string {
  const base = getSiteUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
