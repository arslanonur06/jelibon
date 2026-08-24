import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JelibonServiceTopicClusters } from "@/components/jelibon-service-topic-clusters";
import {
  type ServicePillar,
} from "@/data/jelibon-service-topics-data";
import { IGAMING_CONTENT_TOPICS } from "@/data/igaming-content-topics-data";
import { servicePackages } from "@/data/packages";
import { toCanonicalUrl } from "@/lib/seo";

const hubPath = "/rehber/hizmetler";
const hubCanonical = toCanonicalUrl(hubPath);

const PILLARS: ServicePillar[] = [
  "traffic",
  "creative",
  "seo",
  "telegram",
  "ai",
  "protection",
  "software",
  "sports",
  "casino",
  "geo",
];

export const metadata: Metadata = {
  title: "Jelibon hizmet rehberleri — trafik, kreatif, SEO, AI",
  description:
    "60+ TR/EN rehber: yetişkin display trafik yönetimi, kreatif ve görsel üretim, Telegram büyüme, SEO blog network, AI chatbot, DMCA koruması, özel yazılım.",
  alternates: { canonical: hubCanonical },
  openGraph: {
    title: "Jelibon hizmet rehberleri | Jelibon Marketing",
    description:
      "iGaming operatörleri için trafik, kreatif, SEO, Telegram, AI ve marka koruması — detaylı hizmet rehberleri.",
    url: hubCanonical,
    type: "website",
  },
};

export default function HizmetlerHubPage() {
  return (
    <div className="relative min-h-screen">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "url('/assets/creative-studio-cover.png')",
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
            Jelibon Marketing
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            Hizmet rehberleri (TR / EN)
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-zinc-300 sm:text-base">
            Türkiye ve komşu pazarlarda iGaming operatörleri için sunduğumuz
            hizmetlerin detaylı tanıtım rehberleri. Yetişkin display trafik
            yönetimi, banner/video kreatif üretimi, AI destekli görsel üretim,
            Telegram Ads ve kanal ağı, SEO blog network, AI chatbot & influencer,
            DMCA klon koruması ve özel yazılım — platform ismi vermeden
            hizmet mantığını anlatıyoruz.
          </p>
          <p className="mt-3 max-w-3xl text-sm text-zinc-400">
            Service guides in English are available on each blog post — switch
            site language or open any article for the EN locale block.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="/#packages"
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-300 hover:text-white"
            >
              Paketler & fiyatlar
            </Link>
            <Link
              href="/rehber/igaming"
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-300 hover:text-white"
            >
              iGaming rehberleri ({IGAMING_CONTENT_TOPICS.length})
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-300 hover:text-white"
            >
              Tüm blog
            </Link>
            <Link
              href="/rehber/spor-bahisleri"
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-300 hover:text-white"
            >
              Spor bahisleri rehberi
            </Link>
            <Link
              href="/guvenilir-siteler"
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-300 hover:text-white"
            >
              Güvenilir siteler
            </Link>
          </div>

          <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicePackages.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-[#F9A8D4]">
                  {pkg.badge ?? "Hizmet"}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-white">{pkg.title}</h2>
                <p className="mt-1 text-sm text-[#A5F3FC]">
                  {pkg.priceHeadline ?? `${pkg.price} / ay`}
                </p>
                <ul className="mt-3 space-y-1 text-sm text-zinc-400">
                  {pkg.features.slice(0, 4).map((f) => (
                    <li key={f}>· {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {PILLARS.map((pillar) => (
            <JelibonServiceTopicClusters
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
