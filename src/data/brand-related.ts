import { isIndexableBrandSlug } from "./brand-index-policy";
import type { BonusBrandGuide } from "./bonus-guides";
import { bonusBrandGuides } from "./bonus-guides";

/** Yalnızca indekslenen marka rehberlerine iç link */
export function getRelatedBrands(
  slug: string,
  preferredSlugs: string[],
): BonusBrandGuide[] {
  const preferred = preferredSlugs
    .map((s) => bonusBrandGuides.find((b) => b.slug === s))
    .filter((b): b is BonusBrandGuide => {
      if (!b) return false;
      return b.slug !== slug && isIndexableBrandSlug(b.slug);
    });
  const rest = bonusBrandGuides.filter(
    (b) =>
      b.slug !== slug &&
      isIndexableBrandSlug(b.slug) &&
      !preferredSlugs.includes(b.slug),
  );
  return [...preferred, ...rest].slice(0, 6);
}
