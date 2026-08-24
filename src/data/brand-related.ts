import type { BonusBrandGuide } from "./bonus-guides";
import { bonusBrandGuides } from "./bonus-guides";

/** Premium marka rehberlerinde ilgili marka seçimi */
export function getRelatedBrands(
  slug: string,
  preferredSlugs: string[],
): BonusBrandGuide[] {
  const preferred = preferredSlugs
    .map((s) => bonusBrandGuides.find((b) => b.slug === s))
    .filter((b): b is BonusBrandGuide => Boolean(b));
  const rest = bonusBrandGuides.filter(
    (b) => b.slug !== slug && !preferredSlugs.includes(b.slug),
  );
  return [...preferred, ...rest].slice(0, 6);
}
