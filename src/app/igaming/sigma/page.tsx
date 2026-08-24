import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { sigmaExhibitors } from "@/data/geo/brands/sigma";
import { toCanonicalUrl } from "@/lib/seo";

const hubPath = "/igaming/sigma";

export const metadata: Metadata = {
  title: "SiGMA iGaming exhibitors — platforms, studios, payments",
  description:
    "SEO profiles for SiGMA Euro-Med Malta, SiGMA Rome and regional exhibitors: Soft2Bet, BetConstruct, SOFTSWISS, Altenar, Pragmatic Play and more.",
  alternates: { canonical: toCanonicalUrl(hubPath) },
};

export default function SigmaHubPage() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main className="relative z-[1] pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-display text-xs uppercase tracking-[0.35em] text-[#E9A8FF]/90">
            B2B · SiGMA
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            SiGMA iGaming exhibitors
          </h1>
          <p className="mt-4 max-w-3xl text-zinc-300">
            Malta Euro-Med, Rome ve bölgesel zirvelerde yer alan platform,
            oyun stüdyosu, ödeme ve affiliate firmaları — SEO profil sayfaları.
          </p>
          <Link
            href="/markets"
            className="mt-6 inline-block text-sm text-[#A5F3FC] hover:underline"
          >
            ← Regional consumer brands
          </Link>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sigmaExhibitors.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`${hubPath}/${item.slug}`}
                  className="block rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-[#A855F7]/40"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    {item.category}
                  </p>
                  <h2 className="mt-2 font-semibold text-white">{item.name}</h2>
                  <p className="mt-2 line-clamp-2 text-xs text-zinc-400">
                    {item.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
