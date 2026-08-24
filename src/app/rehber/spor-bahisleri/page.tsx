import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SporBahisTopicClusters } from "@/components/spor-bahis-topic-clusters";
import { SPOR_BAHIS_SPORT_TOPICS, SPOR_BAHIS_HUB_KEYWORDS } from "@/data/spor-bahis-topics-tr";
import { toCanonicalUrl } from "@/lib/seo";

const hubPath = "/rehber/spor-bahisleri";
const hubCanonical = toCanonicalUrl(hubPath);

export const metadata: Metadata = {
  title: "Spor bahisleri ve iddaa rehberi — tüm branşlar",
  description:
    `${SPOR_BAHIS_SPORT_TOPICS.length} spor dalı + genel iddaa rehberleri: futbol, basketbol, tenis, F1, MMA, at yarışı ve daha fazlası — TR/EN eğitim merkezi.`,
  keywords: [...SPOR_BAHIS_HUB_KEYWORDS],
  alternates: { canonical: hubCanonical },
  openGraph: {
    title: "Spor bahisleri ve iddaa rehberi | Jelibon",
    description:
      "Maç sonucu, alt/üst, handikap, kombine ve canlı bahis — adım adım öğrenme merkezi.",
    url: hubCanonical,
    type: "website",
  },
};

export default function SporBahisleriHubPage() {
  return (
    <div className="relative min-h-screen">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "url('/assets/seo-blog-card-bg.png')",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.9)_0%,rgba(5,5,16,0.98)_100%)]"
        aria-hidden
      />
      <SiteHeader />
      <main className="relative z-[1] pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-display text-xs uppercase tracking-[0.35em] text-[#22D3EE]/90">
            Tanıtım rehberi
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            Spor bahisleri ve iddaa rehberi
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-zinc-300 sm:text-base">
            {SPOR_BAHIS_SPORT_TOPICS.length} spor dalı için ayrı rehber + genel iddaa
            eğitimi: maç sonucu, alt/üst, handikap, kombine, canlı bahis. Futboldan
            Formula 1&apos;e, bokstan at yarışına — her branşın marketleri skor
            örnekleriyle anlatılır. Yasal platformlar: Nesine, Bilyoner, Misli, Tuttur.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="/guvenilir-siteler"
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-300 hover:text-white"
            >
              Güvenilir siteler (online)
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-300 hover:text-white"
            >
              Tüm blog
            </Link>
          </div>

          <SporBahisTopicClusters showHubLink={false} />

          <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-white">
              Sorumlu oyun notu
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Spor bahisleri eğlence bütçesi dışına taşmamalıdır. 18 yaş altı
              oyun yasaktır. Yasal platform dışı sitelerde oynamak Türkiye
              mevzuatında risk taşır; yalnızca lisanslı ve resmi kanalları
              tercih edin. Kayıp kovalamayın; limit koyun.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
