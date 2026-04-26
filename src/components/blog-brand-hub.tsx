"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n/locales";
import {
  BONUS_BRAND_COUNT,
  type BonusBrandGuide,
} from "@/data/bonus-guides";

type BlogBrandHubProps = {
  locale: Locale;
  brands: BonusBrandGuide[];
  popularBrands: BonusBrandGuide[];
};

function hubCopy(locale: Locale, count: number) {
  if (locale === "tr") {
    return {
      title: `Siteler (${count})`,
      description: "Markaları tek yerden ara, rehbere direkt geç.",
      guide: "Rehberi aç",
      index: "Tüm markalar",
      searchPlaceholder: "Site adı ara",
      popular: "Öne çıkan siteler",
      all: "Toplam site",
      clear: "Temizle",
    };
  }
  if (locale === "ru") {
    return {
      title: `Сайты (${count})`,
      description: "Единый поток гайдов с быстрым поиском.",
      guide: "Открыть гайд",
      index: "Все бренды",
      searchPlaceholder: "Введите сайт",
      popular: "Популярные сайты",
      all: "Все сайты",
      clear: "Очистить",
    };
  }
  return {
    title: `Sites (${count})`,
    description: "One guide flow with quick search.",
    guide: "Open guide",
    index: "View all",
    searchPlaceholder: "Search sites",
    popular: "Popular sites",
    all: "All sites",
    clear: "Clear",
  };
}

function normalizeValue(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("tr-TR")
    .trim();
}

export function BlogBrandHub({
  locale,
  brands,
  popularBrands,
}: BlogBrandHubProps) {
  const count = BONUS_BRAND_COUNT;
  const copy = hubCopy(locale, count);
  const [query, setQuery] = useState("");

  const filteredBrands = useMemo(() => {
    const normalizedQuery = normalizeValue(query);
    const sortedBrands = [...brands].sort((left, right) =>
      left.name.localeCompare(right.name, "tr-TR"),
    );

    if (!normalizedQuery) {
      return sortedBrands;
    }

    return sortedBrands.filter((brand) => {
      const normalizedName = normalizeValue(brand.name);
      return (
        normalizedName.includes(normalizedQuery) ||
        brand.slug.includes(normalizedQuery.replace(/\s+/g, "-"))
      );
    });
  }, [brands, query]);

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
            {copy.index} →
          </Link>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {popularBrands.map((brand) => (
          <Link
            key={brand.slug}
            href={`/giris-bonuslari/${brand.slug}`}
            className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-zinc-100 transition hover:-translate-y-0.5 hover:border-[#F472B6]/35 hover:bg-white/[0.08]"
          >
            {brand.name}
          </Link>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          {copy.popular}
        </p>
        <p className="text-xs text-zinc-500">
          {copy.all}: {filteredBrands.length}
        </p>
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111221] px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
          Ara
        </span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={copy.searchPlaceholder}
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
          aria-label={copy.searchPlaceholder}
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="rounded-full border border-white/12 px-2.5 py-1 text-[11px] font-semibold text-zinc-300 transition hover:border-white/20 hover:text-white"
          >
            {copy.clear}
          </button>
        ) : null}
      </div>

      <div className="mt-6 max-h-[26rem] overflow-y-auto pr-1">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filteredBrands.map((brand) => (
            <div
              key={brand.slug}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 transition hover:border-[#A78BFA]/35 hover:bg-white/[0.06]"
            >
              <p className="font-semibold text-white">{brand.name}</p>
              <div className="mt-2 text-xs font-medium">
                <Link
                  href={`/giris-bonuslari/${brand.slug}`}
                  className="text-[#22D3EE] transition hover:underline"
                >
                  {copy.guide}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {filteredBrands.length === 0 ? (
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-zinc-400">
          Sonuç bulunamadı.
        </div>
      ) : null}
    </section>
  );
}
