import { POPULAR_BRAND_SLUGS } from "./brand-search-priority";

/**
 * Google indeksine yalnızca özgün / popüler marka rehberleri açılır.
 * Şablon katalog kayıtları noindex,follow kalır (kullanıcı gezebilir, dizin şişmez).
 */
export const INDEXABLE_BRAND_SLUGS = new Set<string>(POPULAR_BRAND_SLUGS);

export function isIndexableBrandSlug(slug: string): boolean {
  return INDEXABLE_BRAND_SLUGS.has(slug);
}
