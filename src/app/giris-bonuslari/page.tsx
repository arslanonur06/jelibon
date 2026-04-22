import type { Metadata } from "next";
import Link from "next/link";
import { BonusBrandCatalog } from "@/components/bonus-brand-catalog";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TELEGRAM_URL } from "@/constants";
import {
  bonusBrandGuides,
  popularBonusBrandGuides,
} from "@/data/bonus-guides";

function toHashTag(value: string): string {
  const compact = value.replace(/[^a-zA-Z0-9]/g, "");
  return `#${compact}GirisBonusu`;
}

const BONUS_KEYWORDS = [
  "deneme bonusu",
  "freespin",
  "yatırımsız bonus",
  "güncel giriş",
  "güncel adres",
  "mobil giriş",
  "kayıt bonusu",
  "hoş geldin bonusu",
] as const;

export const metadata: Metadata = {
  title: "Güncel giriş bonusu rehberi",
  description: "Marka marka güncel giriş, adres ve bonus rehberleri.",
  alternates: { canonical: "/giris-bonuslari" },
  openGraph: {
    title: "Güncel giriş bonusu rehberi | Jelibon Marketing",
    description:
      "Marka marka giriş, adres ve bonus rehberleri.",
    type: "website",
    url: "/giris-bonuslari",
  },
};

export default function GirisBonuslariPage() {
  const featuredTags = bonusBrandGuides.slice(0, 18).map((brand) => ({
    slug: brand.slug,
    tag: toHashTag(brand.name),
    name: brand.name,
  }));

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
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.86)_0%,rgba(5,5,16,0.95)_35%,rgba(5,5,16,0.98)_100%)]" aria-hidden />
      <SiteHeader />
      <main className="relative z-[1] pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-display text-xs uppercase tracking-[0.35em] text-[#E9A8FF]/90">
            Bonus Rehberleri
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            Güncel giriş ve bonus rehberleri
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-zinc-300 sm:text-base">
            Tüm markalar tek katalogda. Arama, alfabetik filtre ve popüler sıra
            ile hızlı geçiş yap.
          </p>
          <Link
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-[#FF69B4] via-[#A020F0] to-[#00D4FF] px-5 py-3 text-sm font-semibold text-white"
          >
            Telegram: @jelibonmarketing
          </Link>

          <section className="mt-8 flex flex-wrap gap-2">
            {featuredTags.map((item) => (
              <Link
                key={item.slug}
                href={`/giris-bonuslari/${item.slug}`}
                className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-[#E9A8FF] transition hover:border-[#A78BFA]/45 hover:text-white"
                aria-label={`${item.name} hashtag sayfasina git`}
              >
                {item.tag}
              </Link>
            ))}
          </section>

          <BonusBrandCatalog
            brands={bonusBrandGuides}
            popularBrands={popularBonusBrandGuides}
            keywords={BONUS_KEYWORDS}
          />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
