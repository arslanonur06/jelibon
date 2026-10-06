import type { Metadata } from "next";
import Link from "next/link";
import { BonusBrandCatalog } from "@/components/bonus-brand-catalog";
import { BonusTopicClusters } from "@/components/bonus-topic-clusters";
import { SporBahisTopicClusters } from "@/components/spor-bahis-topic-clusters";
import { JelibonServiceTopicClusters } from "@/components/jelibon-service-topic-clusters";
import { IgamingContentTopicClusters } from "@/components/igaming-content-topic-clusters";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { EMOJISTAR_TELEGRAM_HANDLE, EMOJISTAR_TELEGRAM_URL } from "@/constants";
import { BONUS_HUB_KEYWORDS } from "@/data/bonus-search-topics-tr";
import {
  bonusBrandGuides,
  popularBonusBrandGuides,
} from "@/data/bonus-guides";
import { toCanonicalUrl } from "@/lib/seo";

const BONUS_KEYWORDS = BONUS_HUB_KEYWORDS;

const hubCanonical = toCanonicalUrl("/guvenilir-siteler");

export const metadata: Metadata = {
  title: "Güvenilir siteler rehberi",
  description: "Marka marka güvenilir siteler, güncel giriş ve adres rehberleri.",
  alternates: { canonical: hubCanonical },
  openGraph: {
    title: "Güvenilir siteler rehberi | Jelibon Marketing",
    description:
      "Marka marka güvenilir siteler, güncel giriş ve adres rehberleri.",
    type: "website",
    url: hubCanonical,
  },
};

export default function GuvenilirSitelerPage() {
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
            Güvenilir Siteler
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            Güvenilir siteler rehberi
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-zinc-300 sm:text-base">
            Tüm markalar tek katalogda. Güncel giriş adresi ve site bilgisi için
            Telegram: {EMOJISTAR_TELEGRAM_HANDLE}.
          </p>
          <Link
            href={EMOJISTAR_TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-[#FF69B4] via-[#A020F0] to-[#00D4FF] px-5 py-3 text-sm font-semibold text-white"
          >
            Telegram: {EMOJISTAR_TELEGRAM_HANDLE}
          </Link>

          <BonusTopicClusters />

          <SporBahisTopicClusters />

          <JelibonServiceTopicClusters showHubLink={false} />

          <IgamingContentTopicClusters showHubLink />

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
