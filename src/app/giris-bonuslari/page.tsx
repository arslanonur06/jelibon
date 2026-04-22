import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TELEGRAM_URL } from "@/constants";
import { BONUS_BRAND_COUNT, bonusBrandGuides } from "@/data/bonus-guides";

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
  "uçak oyunu",
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
  const hashtagCloud = bonusBrandGuides.map((brand) => ({
    slug: brand.slug,
    tag: toHashTag(brand.name),
    name: brand.name,
  }));
  const keywordTicker = [...BONUS_KEYWORDS, ...BONUS_KEYWORDS];

  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main className="pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-display text-xs uppercase tracking-[0.35em] text-[#E9A8FF]/90">
            Bonus Rehberleri
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            Güncel giriş bonusu şartları ve marka rehberleri
          </h1>
          <Link
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-[#FF69B4] via-[#A020F0] to-[#00D4FF] px-5 py-3 text-sm font-semibold text-white"
          >
            Telegram: @jelibonmarketing
          </Link>

          <section className="glass-panel mt-8 rounded-3xl p-5 sm:p-7">
            <h2 className="font-display text-2xl font-semibold text-white">
              Hızlı aramalar ({BONUS_BRAND_COUNT} marka)
            </h2>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] py-3">
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
            <div className="mt-5 flex flex-wrap gap-2">
              {hashtagCloud.map((item) => (
                <Link
                  key={item.slug}
                  href={`/giris-bonuslari/${item.slug}`}
                  className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-[#E9A8FF] transition hover:border-[#A78BFA]/45 hover:text-white"
                  aria-label={`${item.name} hashtag sayfasina git`}
                >
                  {item.tag}
                </Link>
              ))}
            </div>
          </section>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {bonusBrandGuides.map((brand) => (
              <Link
                key={brand.slug}
                href={`/giris-bonuslari/${brand.slug}`}
                className="glass-panel rounded-2xl px-4 py-3 text-zinc-100 transition hover:border-[#A78BFA]/40 hover:bg-white/[0.03]"
              >
                {brand.name} güncel adres ve bonus rehberi
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
