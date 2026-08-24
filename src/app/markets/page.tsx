import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  ALL_GEO_MARKET_IDS,
  GEO_MARKET_CONFIGS,
  getGeoBrands,
} from "@/data/geo/markets";
import { toCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Global iGaming markets — AZ, RU, UA, EU",
  description:
    "Regional trusted betting site guides: Azerbaijan, Russia, Ukraine, Finland, Norway, Denmark, Malta, Estonia.",
  alternates: { canonical: toCanonicalUrl("/markets") },
};

export default function MarketsIndexPage() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main className="relative z-[1] pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            Global market directories
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Bölgesel SEO rehberleri — betrehberi tarzı marka sayfaları. Türkiye
            listesi ayrı:{" "}
            <Link href="/guvenilir-siteler" className="text-[#A5F3FC] hover:underline">
              /guvenilir-siteler
            </Link>
            .
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {ALL_GEO_MARKET_IDS.map((id) => {
              const config = GEO_MARKET_CONFIGS[id];
              const count = getGeoBrands(id).length;
              return (
                <li key={id}>
                  <Link
                    href={config.hubPath}
                    className="block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#A855F7]/40"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      {config.regionLabel}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-white">
                      {config.countryName}
                    </h2>
                    <p className="mt-2 text-sm text-zinc-400">{config.hubDescription}</p>
                    <p className="mt-3 text-xs font-semibold text-[#E9A8FF]">
                      {count} brands →
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>

          <section className="mt-10">
            <Link
              href="/igaming/sigma"
              className="block rounded-2xl border border-[#A855F7]/30 bg-gradient-to-r from-[#1a1030] to-[#0c1820] p-6"
            >
              <h2 className="text-xl font-semibold text-white">SiGMA iGaming exhibitors</h2>
              <p className="mt-2 text-sm text-zinc-300">
                Platform, game studio, payment and B2B firms at SiGMA Malta, Rome and
                regional summits.
              </p>
            </Link>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
