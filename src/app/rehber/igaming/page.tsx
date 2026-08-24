import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { IgamingContentTopicClusters } from "@/components/igaming-content-topic-clusters";
import type { IgamingContentPillar } from "@/data/igaming-content-topics-data";
import { IGAMING_CONTENT_TOPICS } from "@/data/igaming-content-topics-data";
import { toCanonicalUrl } from "@/lib/seo";

const hubPath = "/rehber/igaming";
const hubCanonical = toCanonicalUrl(hubPath);

const PILLARS: IgamingContentPillar[] = [
  "live-casino",
  "slots",
  "payments",
  "crm",
  "affiliate",
  "mobile",
  "regulation",
  "casino-games",
  "marketing",
  "operator-tech",
];

export const metadata: Metadata = {
  title: "iGaming rehber kütüphanesi — 60+ makale",
  description:
    "Canlı casino, slot RTP, ödeme rehberleri, CRM, affiliate, mobil casino, mevzuat, poker, Aviator, fraud önleme — TR/EN iGaming eğitim merkezi.",
  alternates: { canonical: hubCanonical },
  openGraph: {
    title: "iGaming rehber kütüphanesi | Jelibon",
    url: hubCanonical,
    type: "website",
  },
};

export default function IgamingHubPage() {
  return (
    <div className="relative min-h-screen">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "url('/assets/haribo.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.92)_0%,rgba(5,5,16,0.98)_100%)]"
        aria-hidden
      />
      <SiteHeader />
      <main className="relative z-[1] pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-display text-xs uppercase tracking-[0.35em] text-[#22D3EE]/90">
            iGaming eğitim
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            iGaming rehber kütüphanesi
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-zinc-300 sm:text-base">
            {IGAMING_CONTENT_TOPICS.length} derinlemesine makale: canlı casino
            masaları, slot mekanikleri, Papara/kripto ödemeler, operatör CRM,
            affiliate modelleri, mobil UX, Türkiye mevzuatı, poker/blackjack
            eğitimi, pazarlama kanalları ve fraud teknolojisi. Her yazı TR ve EN.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link href="/rehber/hizmetler" className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-300 hover:text-white">
              Jelibon hizmetleri
            </Link>
            <Link href="/rehber/spor-bahisleri" className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-300 hover:text-white">
              Spor bahisleri
            </Link>
            <Link href="/guvenilir-siteler" className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-300 hover:text-white">
              Güvenilir siteler
            </Link>
            <Link href="/blog" className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-300 hover:text-white">
              Tüm blog
            </Link>
          </div>
          {PILLARS.map((pillar) => (
            <IgamingContentTopicClusters
              key={pillar}
              pillar={pillar}
              showHubLink={false}
            />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
