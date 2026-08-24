import Link from "next/link";
import { BonusBrandCatalog } from "@/components/bonus-brand-catalog";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { EMOJISTAR_TELEGRAM_HANDLE, EMOJISTAR_TELEGRAM_URL } from "@/constants";
import type { GeoMarketConfig } from "@/data/geo/types";
import type { GeoBrandGuide } from "@/data/geo/types";
import { getBrandPagePath } from "@/data/geo/markets";

type GeoMarketHubViewProps = {
  market: GeoMarketConfig;
  brands: GeoBrandGuide[];
  popularBrands: GeoBrandGuide[];
};

export function GeoMarketHubView({
  market,
  brands,
  popularBrands,
}: GeoMarketHubViewProps) {
  return (
    <div className="relative min-h-screen">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: "url('/assets/bonus-directory-bg.png')",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.86)_0%,rgba(5,5,16,0.95)_35%,rgba(5,5,16,0.98)_100%)]"
        aria-hidden
      />
      <SiteHeader />
      <main className="relative z-[1] pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-display text-xs uppercase tracking-[0.35em] text-[#E9A8FF]/90">
            {market.regionLabel}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            {market.hubTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-zinc-300 sm:text-base">
            {market.hubDescription} Telegram: {EMOJISTAR_TELEGRAM_HANDLE}.
          </p>
          <Link
            href={EMOJISTAR_TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-[#FF69B4] via-[#A020F0] to-[#00D4FF] px-5 py-3 text-sm font-semibold text-white"
          >
            Telegram: {EMOJISTAR_TELEGRAM_HANDLE}
          </Link>

          <div className="mt-8 flex flex-wrap gap-2">
            <Link
              href="/markets"
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-300 hover:text-white"
            >
              ← All markets
            </Link>
            <Link
              href="/guvenilir-siteler"
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-300 hover:text-white"
            >
              Türkiye (TR)
            </Link>
            <Link
              href="/igaming/sigma"
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-300 hover:text-white"
            >
              SiGMA exhibitors
            </Link>
          </div>

          <BonusBrandCatalog
            brands={brands}
            popularBrands={popularBrands}
            keywords={market.searchIntents}
          />

          <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="font-display text-xl font-semibold text-white">
              Quick links — {market.countryName}
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {brands.map((brand) => (
                <li key={brand.slug}>
                  <Link
                    href={getBrandPagePath(market.id, brand.slug)}
                    className="block rounded-xl border border-white/10 px-4 py-3 text-sm text-zinc-200 hover:border-[#A855F7]/40 hover:text-white"
                  >
                    {brand.name} — {market.searchIntents[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
