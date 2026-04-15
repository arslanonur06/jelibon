import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildBonusArticle } from "@/data/bonus-article";
import {
  bonusBrandGuides,
  bonusGuideBySlug,
  bonusHeadKeywords,
} from "@/data/bonus-guides";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return bonusBrandGuides.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const brand = bonusGuideBySlug.get(params.slug);
  if (!brand) return { title: "Sayfa bulunamadi" };

  const title = `${brand.name} giris bonusu, guncel bonus sartlari ve deneme/freespin rehberi`;
  const description =
    `${brand.name} icin bilgilendirme rehberi: guncel giris bonus sartlari, deneme bonusu/freespin, yatirimsiz bonus ve ucak oyunu odakli arama niyetleri. Tum yonlendirmeler @jelibonmarketing Telegram hesabina yapilir.`;

  return {
    title,
    description,
    keywords: [
      `${brand.name} giris`,
      `${brand.name} bonus`,
      `${brand.name} guncel giris bonus sartlari`,
      `${brand.name} deneme bonusu`,
      `${brand.name} yatirimsiz bonus`,
      "deneme bonusu freespin",
      "dogum gunu bonusu",
      "ucak oyunu",
      ...bonusHeadKeywords.slice(0, 12),
    ],
    alternates: { canonical: `/giris-bonuslari/${brand.slug}` },
    openGraph: {
      title: `${brand.name} bonus rehberi | Jelibon Marketing`,
      description,
      url: `/giris-bonuslari/${brand.slug}`,
      type: "article",
    },
  };
}

export default function BonusBrandPage({ params }: Props) {
  const brand = bonusGuideBySlug.get(params.slug);
  if (!brand) notFound();
  const article = buildBonusArticle(brand);

  const entryIntents = [
    `${brand.name} giriş bonusu`,
    `${brand.name} deneme bonusu freespin`,
    `${brand.name} doğum günü bonusu`,
    `${brand.name} yatırımsız bonus`,
    `${brand.name} uçak oyunu / crash kampanya aramaları`,
  ];

  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main className="pb-16 pt-32 sm:pb-20 sm:pt-36">
        <article className="mx-auto max-w-4xl px-4 sm:px-6">
          <Link
            href="/giris-bonuslari"
            className="text-xs font-semibold uppercase tracking-widest text-[#F9A8D4] transition hover:text-white"
          >
            ← Tüm bonus rehberleri
          </Link>
          <h1 className="mt-4 font-display text-3xl font-semibold text-white sm:text-5xl">
            {article.title}
          </h1>
          <div className="mt-4 space-y-3 text-zinc-300">
            {article.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <section className="glass-panel mt-8 rounded-3xl p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-white">
              Arama niyeti odaklı kelimeler
            </h2>
            <ul className="mt-4 space-y-2 text-zinc-300">
              {entryIntents.map((intent) => (
                <li key={intent}>- {intent}</li>
              ))}
            </ul>
          </section>

          {article.sections.map((section) => (
            <section
              key={section.heading}
              className="glass-panel mt-6 rounded-3xl p-6 sm:p-8"
            >
              <h2 className="font-display text-2xl font-semibold text-white">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-3 text-zinc-300">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="glass-panel mt-6 rounded-3xl p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-white">
              Güncel giriş bonus şartları kontrol listesi
            </h2>
            <ul className="mt-4 space-y-2 text-zinc-300">
              {article.checklist.map((rule) => (
                <li key={rule}>- {rule}</li>
              ))}
            </ul>
            <p className="mt-5 text-zinc-300">
              Her markada kampanya şartları sürekli değişebilir. Bu nedenle en doğru
              ve güncel bilgilendirme akışı Telegram üzerinden yapılır.
            </p>
            <Link
              href={brand.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-xl bg-gradient-to-r from-[#FF69B4] via-[#A020F0] to-[#00D4FF] px-5 py-3 text-sm font-semibold text-white"
            >
              Güncel bilgi ve yönlendirme: @jelibonmarketing
            </Link>
          </section>

          <section className="glass-panel mt-6 rounded-3xl p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-white">
              Sık sorulan sorular
            </h2>
            <div className="mt-4 space-y-5 text-zinc-300">
              {article.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-base font-semibold text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-panel mt-6 rounded-3xl p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-white">
              Bu site nasıl bir site?
            </h2>
            <p className="mt-4 text-zinc-300">
              Jelibon Marketing; iGaming tarafında SEO, içerik, teknik
              optimizasyon ve trafik yönetimi konularında çalışan bir
              bilgilendirme ve büyüme platformudur. Bu sayfa seti, markalara dair
              bonus terimlerinde arama niyetini açıklamak ve kullanıcıyı doğru
              kanala yönlendirmek için hazırlanmıştır.
            </p>
          </section>

          <section className="glass-panel mt-6 rounded-3xl p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-white">
              İlgili marka rehberleri
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {article.relatedBrands.map((relatedBrand) => (
                <Link
                  key={relatedBrand.slug}
                  href={`/giris-bonuslari/${relatedBrand.slug}`}
                  className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-zinc-200 transition hover:border-[#A78BFA]/40 hover:bg-white/[0.04]"
                >
                  {relatedBrand.name} giriş bonus rehberi
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
