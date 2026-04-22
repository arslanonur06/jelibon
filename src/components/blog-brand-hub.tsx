import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";
import {
  BONUS_BRAND_COUNT,
  type BonusBrandGuide,
} from "@/data/bonus-guides";

type BlogBrandHubProps = {
  locale: Locale;
  brands: BonusBrandGuide[];
};

function hubCopy(locale: Locale, count: number) {
  if (locale === "tr") {
    return {
      title: `${count} marka, iki görünüm`,
      description: "Her marka için bonus ve rehber sayfası.",
      bonus: "Bonus sayfası (koyu)",
      light: "Blog rehberi (açık)",
      indexBonus: "Hepsini listele: bonus",
      indexLight: "Hepsini listele: rehber",
    };
  }
  if (locale === "ru") {
    return {
      title: `${count} брендов — все гайды`,
      description: "Для каждого бренда: бонусная и блоговая страница.",
      bonus: "Бонус (тёмная)",
      light: "Гайд (светлая)",
      indexBonus: "Индекс бонусов",
      indexLight: "Список гайдов",
    };
  }
  return {
    title: `${count} brands — full directory`,
    description: "Each brand has a bonus page and a blog guide.",
    bonus: "Bonus guide (dark)",
    light: "Blog guide (light)",
    indexBonus: "All brands — bonus hub",
    indexLight: "Guide index",
  };
}

export function BlogBrandHub({ locale, brands }: BlogBrandHubProps) {
  const count = BONUS_BRAND_COUNT;
  const copy = hubCopy(locale, count);

  return (
    <section className="glass-panel mt-10 rounded-3xl p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            {copy.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
            {copy.description}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <Link
            href="/giris-bonuslari"
            className="rounded-xl border border-[#22D3EE]/40 bg-[#141428] px-4 py-2.5 text-xs font-semibold text-[#22D3EE] transition hover:border-[#22D3EE]/70 sm:text-sm"
          >
            {copy.indexBonus} →
          </Link>
          <Link
            href="/blog/rehber"
            className="rounded-xl border border-[#F9A8D4]/40 bg-[#141428] px-4 py-2.5 text-xs font-semibold text-[#F9A8D4] transition hover:border-[#F9A8D4]/70 sm:text-sm"
          >
            {copy.indexLight} →
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {brands.map((brand) => (
          <div
            key={brand.slug}
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 transition hover:border-[#A78BFA]/35"
          >
            <p className="font-semibold text-white">{brand.name}</p>
            <div className="mt-2 flex flex-col gap-1.5 text-xs font-medium">
              <Link
                href={`/giris-bonuslari/${brand.slug}`}
                className="text-[#22D3EE] transition hover:underline"
              >
                {copy.bonus}
              </Link>
              <Link
                href={`/blog/rehber/${brand.slug}`}
                className="text-[#F9A8D4] transition hover:underline"
              >
                {copy.light}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
