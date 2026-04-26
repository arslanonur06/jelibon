"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { BonusBrandGuide } from "@/data/bonus-guides";
import { TELEGRAM_URL } from "@/constants";

type BonusBrandCatalogProps = {
  brands: BonusBrandGuide[];
  popularBrands: BonusBrandGuide[];
  keywords: readonly string[];
};

const ALL_LETTERS = "all";

function normalizeSearchValue(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("tr-TR")
    .trim();
}

function getBrandInitials(name: string) {
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toLocaleUpperCase("tr-TR");
  }

  return parts
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toLocaleUpperCase("tr-TR");
}

export function BonusBrandCatalog({
  brands,
  popularBrands,
  keywords,
}: BonusBrandCatalogProps) {
  const [query, setQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState(ALL_LETTERS);

  const sortedBrands = useMemo(
    () =>
      [...brands].sort((left, right) =>
        left.name.localeCompare(right.name, "tr-TR"),
      ),
    [brands],
  );

  const letters = useMemo(
    () => [
      ALL_LETTERS,
      ...Array.from(
        new Set(
          sortedBrands.map((brand) =>
            brand.name[0]?.toLocaleUpperCase("tr-TR") ?? "",
          ),
        ),
      ),
    ],
    [sortedBrands],
  );

  const normalizedQuery = normalizeSearchValue(query);

  const filteredBrands = useMemo(
    () =>
      sortedBrands.filter((brand) => {
        const matchesQuery =
          normalizedQuery.length === 0 ||
          normalizeSearchValue(brand.name).includes(normalizedQuery) ||
          brand.slug.includes(normalizedQuery.replace(/\s+/g, "-"));

        const matchesLetter =
          selectedLetter === ALL_LETTERS ||
          brand.name[0]?.toLocaleUpperCase("tr-TR") === selectedLetter;

        return matchesQuery && matchesLetter;
      }),
    [normalizedQuery, selectedLetter, sortedBrands],
  );

  const keywordTicker = [...keywords, ...keywords];

  return (
    <section className="mt-8">
      <div className="glass-panel overflow-hidden rounded-[28px] border border-white/12">
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top_left,rgba(249,168,212,0.22),transparent_58%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_52%)]"
            aria-hidden
          />
          <div className="relative px-5 pb-5 pt-5 sm:px-7 sm:pb-7 sm:pt-7">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E9A8FF]">
                  Katalog
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                  Marka listesi
                </h2>
                <p className="mt-2 text-sm text-zinc-400">
                  {filteredBrands.length} / {brands.length} marka listeleniyor
                </p>
              </div>
              <Link
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-[#A855F7]/35 bg-white/[0.04] px-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F472B6]/45 hover:bg-white/[0.07]"
              >
                Telegram desteği
              </Link>
            </div>

            <div className="mt-6 grid gap-3 lg:grid-cols-[minmax(0,1.6fr)_minmax(260px,0.9fr)]">
              <label className="group flex h-14 items-center gap-3 rounded-2xl border border-white/12 bg-[#111221]/90 px-4 transition-all duration-300 focus-within:border-[#F472B6]/45 focus-within:bg-[#121427]">
                <span className="text-sm text-zinc-500 transition-colors duration-300 group-focus-within:text-[#F9A8D4]">
                  Ara
                </span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Marka adı yaz"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
                  aria-label="Marka ara"
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="rounded-full border border-white/12 px-2 py-1 text-[11px] font-semibold text-zinc-300 transition hover:border-white/20 hover:text-white"
                  >
                    Temizle
                  </button>
                ) : null}
              </label>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                    Toplam
                  </p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    {brands.length}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                    Filtre
                  </p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    {selectedLetter === ALL_LETTERS ? "Tümü" : selectedLetter}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] py-3">
              <div className="animate-horizontal-marquee flex min-w-max gap-3 px-3">
                {keywordTicker.map((keyword, index) => (
                  <span
                    key={`${keyword}-${index}`}
                    className="rounded-full border border-white/10 bg-[#131322] px-3 py-1.5 text-xs font-medium text-zinc-200"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-400">
                  Popüler markalar
                </h3>
                <p className="text-xs text-zinc-500">Hızlı giriş</p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {popularBrands.map((brand) => (
                  <Link
                    key={brand.slug}
                    href={`/giris-bonuslari/${brand.slug}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-zinc-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F472B6]/45 hover:bg-white/[0.08] hover:text-white"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#F472B6] to-[#22D3EE] text-[10px] font-bold text-white">
                      {getBrandInitials(brand.name)}
                    </span>
                    {brand.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-400">
                  Alfabetik filtre
                </h3>
                <p className="text-xs text-zinc-500">
                  {letters.length - 1} harf grubu
                </p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {letters.map((letter) => {
                  const isActive = selectedLetter === letter;
                  return (
                    <button
                      key={letter}
                      type="button"
                      onClick={() => setSelectedLetter(letter)}
                      className={[
                        "rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300",
                        isActive
                          ? "bg-gradient-to-r from-[#F472B6] to-[#22D3EE] text-white shadow-[0_10px_30px_rgba(244,114,182,0.22)]"
                          : "border border-white/12 bg-white/[0.03] text-zinc-300 hover:border-[#A855F7]/35 hover:text-white",
                      ].join(" ")}
                    >
                      {letter === ALL_LETTERS ? "Tümü" : letter}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filteredBrands.map((brand, index) => (
          <Link
            key={brand.slug}
            href={`/giris-bonuslari/${brand.slug}`}
            className="group glass-panel relative overflow-hidden rounded-[26px] border border-white/10 p-5 text-zinc-100 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F472B6]/35 hover:shadow-[0_18px_60px_rgba(0,0,0,0.34)]"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at top left, rgba(244,114,182,0.16), transparent 36%), radial-gradient(circle at bottom right, rgba(34,211,238,0.12), transparent 34%)",
              }}
              aria-hidden
            />
            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(249,168,212,0.2),rgba(34,211,238,0.18))] text-sm font-bold tracking-[0.18em] text-white">
                  {getBrandInitials(brand.name)}
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>

              <div className="mt-5">
                <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#FCE7F3]">
                  {brand.name}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Güncel giriş, adres ve bonus akışı.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-zinc-300">
                  Giriş
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-zinc-300">
                  Bonus
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-zinc-300">
                  Güncel adres
                </span>
              </div>

              <div className="mt-6 flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-[#A5F3FC] transition duration-300 group-hover:text-white">
                  Rehberi aç
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg transition-all duration-300 group-hover:border-[#F472B6]/40 group-hover:bg-white/[0.08] group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredBrands.length === 0 ? (
        <div className="glass-panel mt-6 rounded-[24px] border border-white/10 px-5 py-8 text-center">
          <p className="text-base font-semibold text-white">
            Sonuc bulunamadi
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            Farkli bir marka adi yaz veya filtreyi sifirla.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setSelectedLetter(ALL_LETTERS);
            }}
            className="mt-4 inline-flex rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-[#F472B6]/35 hover:text-white"
          >
            Filtreleri sifirla
          </button>
        </div>
      ) : null}
    </section>
  );
}
