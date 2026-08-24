import Link from "next/link";
import {
  EMOJISTAR_TELEGRAM_HANDLE,
  EMOJISTAR_TELEGRAM_URL,
  TELEGRAM_URL,
} from "@/constants";
import type { BonusArticleContent } from "@/data/bonus-article";
import type { BonusBrandGuide } from "@/data/bonus-guides";
import { BONUS_SEARCH_TOPICS_TR } from "@/data/bonus-search-topics-tr";
import { getBrandHashtags } from "@/data/brand-hashtags";
import { BRAND_SEARCH_INTENTS } from "@/data/brand-seo-intents";

type BrandRehberLightLayoutProps = {
  brand: BonusBrandGuide;
  article: BonusArticleContent;
  directoryHref: string;
  directoryLabel: string;
  relatedHrefBase: string;
};

const PRIMARY = "#C9A35F";

const HERO_LINKS = [
  "Güncel adres",
  "Giriş",
  "Kayıt ol",
  "Bonus",
  "Mobil giriş",
] as const;

const SEARCH_LINKS = BRAND_SEARCH_INTENTS.slice(0, 12);

function getBrandMonogram(brandName: string) {
  const parts = brandName
    .split(/\s+/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toLocaleUpperCase("tr-TR");
  }

  return brandName.slice(0, 2).toLocaleUpperCase("tr-TR");
}

function HeroPills({ brandName }: { brandName: string }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {HERO_LINKS.map((label, index) => (
        <Link
          key={label}
          href={EMOJISTAR_TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${brandName} ${label} için Telegram ${EMOJISTAR_TELEGRAM_HANDLE}`}
          className={
            index === 0
              ? "rounded-xl border px-4 py-2 text-sm font-semibold text-[#1f2a22] shadow-sm transition hover:opacity-90"
              : "rounded-xl border bg-white px-4 py-2 text-sm font-semibold text-[#234336] transition hover:bg-[#faf6ef]"
          }
          style={{
            borderColor: PRIMARY,
            backgroundColor: index === 0 ? PRIMARY : "#fffdf8",
          }}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

function TagPills({ items, ariaPrefix }: { items: readonly string[]; ariaPrefix: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-xl border border-[#d2b178] bg-[#f8f0de] px-3 py-2 text-xs font-semibold text-[#6f4f18]"
          aria-label={`${ariaPrefix}: ${item}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function HighlightGrid({
  highlights,
}: {
  highlights: NonNullable<BonusArticleContent["highlights"]>;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {highlights.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-[#e3d7c2] bg-[#fcfaf5] px-4 py-3"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-[#7f5c22]">
            {item.label}
          </p>
          <p className="mt-1 text-sm font-semibold text-[#17382d]">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export function BrandRehberLightLayout({
  brand,
  article,
  directoryHref,
  directoryLabel,
  relatedHrefBase,
}: BrandRehberLightLayoutProps) {
  const monogram = getBrandMonogram(brand.name);
  const brandHashtags = getBrandHashtags(brand);
  const isPremium = Boolean(article.premium);
  const heroTitle = isPremium && article.title ? article.title : `${brand.name} güncel giriş adresi`;
  const navLinkClass =
    "text-sm font-medium text-[#31443b] transition hover:text-[#7f5c22]";

  return (
    <div
      className="relative z-[120] min-h-screen bg-[#f6f1e6] text-[#1f2a22] antialiased"
      style={{ fontFamily: "var(--font-dm), system-ui, sans-serif" }}
    >
      <header className="border-b border-[#dac7a4] bg-[#f8f4eb]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-[#1f2a22] sm:text-xl"
          >
            Jelibon
          </Link>
          <Link
            href={`${relatedHrefBase}/${brand.slug}`}
            className="text-sm font-semibold text-[#31443b] transition hover:text-[#7f5c22]"
          >
            {brand.name} Rehberi
          </Link>
          <nav className="hidden flex-wrap items-center gap-5 lg:flex" aria-label="Ana menü">
            <Link href="/" className={navLinkClass}>
              Ana sayfa
            </Link>
            <Link href="/blog" className={navLinkClass}>
              Yazılar
            </Link>
            <Link href={directoryHref} className={navLinkClass}>
              Markalar
            </Link>
            <Link href="/blog" className={navLinkClass}>
              Slotlar
            </Link>
            <Link href="/blog" className={navLinkClass}>
              İncelemeler
            </Link>
            <Link
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={navLinkClass}
            >
              İş birliği için yaz
            </Link>
          </nav>
          <Link
            href={EMOJISTAR_TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-5 py-2 text-sm font-semibold text-[#1f2a22] shadow-sm transition hover:opacity-90"
            style={{ backgroundColor: PRIMARY }}
          >
            {brand.name}
          </Link>
        </div>
        <div className="mx-auto max-w-6xl border-t border-[#e3d6bb] px-4 py-3 sm:px-6">
          <HeroPills brandName={brand.name} />
        </div>
      </header>

      <section className="bg-[#052e23]">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14 md:flex-row md:items-center">
          <div
            className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl border text-4xl font-semibold shadow-[0_18px_45px_rgba(0,0,0,0.18)] sm:h-36 sm:w-36"
            style={{
              borderColor: "rgba(201, 163, 95, 0.3)",
              color: PRIMARY,
              background:
                "radial-gradient(circle at 30% 30%, rgba(201,163,95,0.18), rgba(4,27,21,0.9))",
            }}
          >
            {monogram}
          </div>
          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm"
              style={{ color: PRIMARY }}
            >
              {isPremium
                ? `${brand.name.toLocaleUpperCase("tr-TR")} — PREMIUM REHBER`
                : `${brand.name.toLocaleUpperCase("tr-TR")} ADRES VE GİRİŞ NOTLARI`}
            </p>
            <h1
              className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl"
              style={{ color: PRIMARY }}
            >
              {heroTitle}
            </h1>
            {article.tagline ? (
              <p className="mt-3 text-sm font-medium text-[#c9b896] sm:text-base">
                {article.tagline}
              </p>
            ) : null}
            <p className="mt-5 text-base leading-relaxed text-[#e7e1d3] sm:text-lg">
              {article.intro[0]}
            </p>
            {article.intro[1] ? (
              <p className="mt-3 text-base leading-relaxed text-[#d4cfc3] sm:text-lg">
                {article.intro[1]}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <section className="-mt-6 rounded-[28px] border border-[#dbc8a8] bg-[#fdfbf6] p-6 shadow-[0_20px_50px_rgba(8,24,18,0.08)] sm:-mt-8 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#3f5146]">
            {brand.name.toLocaleUpperCase("tr-TR")} — HIZLI ERİŞİM
          </p>
          <div className="mt-4">
            <HeroPills brandName={brand.name} />
          </div>
        </section>

        {isPremium && article.highlights?.length ? (
          <section className="mt-8 rounded-[28px] border border-[#dbc8a8] bg-[#fffdf8] p-6 shadow-[0_10px_30px_rgba(8,24,18,0.05)] sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-[#17382d] sm:text-3xl">
              {brand.name} — hızlı özet
            </h2>
            <div className="mt-5">
              <HighlightGrid highlights={article.highlights} />
            </div>
          </section>
        ) : null}

        <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-6">
            {article.sections.map((section) => (
              <section
                key={section.heading}
                className="rounded-[28px] border border-[#dbc8a8] bg-[#fffdf8] p-6 shadow-[0_10px_30px_rgba(8,24,18,0.05)] sm:p-8"
              >
                <h2 className="font-display text-2xl font-semibold text-[#17382d] sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-[#455248]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            {article.checklist.length > 0 ? (
              <section className="rounded-[28px] border border-[#dbc8a8] bg-[#fffdf8] p-6 shadow-[0_10px_30px_rgba(8,24,18,0.05)] sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-[#17382d] sm:text-3xl">
                  {brand.name} kontrol listesi
                </h2>
                <ul className="mt-5 space-y-3">
                  {article.checklist.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-xl border border-[#e3d7c2] bg-[#fcfaf5] px-4 py-3 text-base text-[#455248]"
                    >
                      <span
                        className="mt-0.5 shrink-0 font-bold"
                        style={{ color: PRIMARY }}
                        aria-hidden
                      >
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <section className="rounded-[28px] border border-[#dbc8a8] bg-[#fffdf8] p-6 shadow-[0_10px_30px_rgba(8,24,18,0.05)] sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-[#17382d] sm:text-3xl">
                    İlgili marka rehberleri
                  </h2>
                </div>
                <Link href={directoryHref} className="text-sm font-semibold text-[#7f5c22] hover:underline">
                  {directoryLabel}
                </Link>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {article.relatedBrands.map((relatedBrand) => (
                  <Link
                    key={relatedBrand.slug}
                    href={`${relatedHrefBase}/${relatedBrand.slug}`}
                    className="rounded-2xl border border-[#e3d7c2] bg-[#fcfaf5] px-4 py-3 text-[#234336] transition hover:border-[#c9a35f] hover:bg-[#f8f2e7]"
                  >
                    {relatedBrand.name} güncel adres ve giriş rehberi
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] border border-[#dbc8a8] bg-[#fffdf8] p-6 shadow-[0_10px_30px_rgba(8,24,18,0.05)] sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-[#17382d] sm:text-3xl">
                Popüler bonus aramaları
              </h2>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {BONUS_SEARCH_TOPICS_TR.map((topic) => (
                  <li key={topic.id}>
                    <Link
                      href={topic.href}
                      className="block rounded-xl border border-[#e3d7c2] bg-[#fcfaf5] px-4 py-3 text-sm font-medium text-[#234336] transition hover:border-[#c9a35f] hover:bg-[#f8f2e7]"
                    >
                      {topic.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[28px] border border-[#dbc8a8] bg-[#fffdf8] p-6 shadow-[0_10px_30px_rgba(8,24,18,0.05)] sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-[#17382d] sm:text-3xl">
                Sık sorulan sorular
              </h2>
              <dl className="mt-5 space-y-5">
                {article.faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-base font-semibold text-[#17382d]">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-base leading-relaxed text-[#455248]">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>

          <aside className="space-y-6">
            {isPremium && article.paymentMethods?.length ? (
              <section className="rounded-[28px] border border-[#dbc8a8] bg-[#fffdf8] p-6 shadow-[0_10px_30px_rgba(8,24,18,0.05)]">
                <h2 className="font-display text-xl font-semibold text-[#17382d]">
                  Ödeme yöntemleri
                </h2>
                <div className="mt-4">
                  <TagPills items={article.paymentMethods} ariaPrefix="Ödeme" />
                </div>
              </section>
            ) : null}

            {isPremium && article.gameCategories?.length ? (
              <section className="rounded-[28px] border border-[#dbc8a8] bg-[#fffdf8] p-6 shadow-[0_10px_30px_rgba(8,24,18,0.05)]">
                <h2 className="font-display text-xl font-semibold text-[#17382d]">
                  Oyun / market kategorileri
                </h2>
                <div className="mt-4">
                  <TagPills items={article.gameCategories} ariaPrefix="Kategori" />
                </div>
              </section>
            ) : null}

            <section className="rounded-[28px] border border-[#dbc8a8] bg-[#fffdf8] p-6 shadow-[0_10px_30px_rgba(8,24,18,0.05)]">
              <h2 className="font-display text-xl font-semibold text-[#17382d]">
                {brand.name} hashtagleri
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {brandHashtags.map((tag) => (
                  <Link
                    key={tag}
                    href={EMOJISTAR_TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-[#d2b178] bg-[#f8f0de] px-3 py-2 text-xs font-semibold text-[#6f4f18] transition hover:bg-[#f1e4c6]"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] border border-[#dbc8a8] bg-[#fffdf8] p-6 shadow-[0_10px_30px_rgba(8,24,18,0.05)]">
              <h2 className="font-display text-xl font-semibold text-[#17382d]">
                Tıklanan kelimeler
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {SEARCH_LINKS.map((item) => (
                  <Link
                    key={item}
                    href={EMOJISTAR_TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-[#d2b178] bg-[#f8f0de] px-3 py-2 text-sm font-medium text-[#6f4f18] transition hover:bg-[#f1e4c6]"
                  >
                    {brand.name} {item}
                  </Link>
                ))}
              </div>
            </section>

            <section
              className="rounded-[28px] border p-6 shadow-[0_16px_40px_rgba(6,43,33,0.14)]"
              style={{
                borderColor: "rgba(201, 163, 95, 0.45)",
                background:
                  "linear-gradient(180deg, rgba(6,43,33,1) 0%, rgba(9,56,42,0.98) 100%)",
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: PRIMARY }}>
                Canlı yönlendirme
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                Telegram erişimi
              </h2>
              <Link
                href={brand.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-xl px-4 py-3 text-sm font-semibold text-[#1f2a22] transition hover:opacity-90"
                style={{ backgroundColor: PRIMARY }}
              >
                Telegram: {EMOJISTAR_TELEGRAM_HANDLE}
              </Link>
            </section>
          </aside>
        </div>

      </main>
    </div>
  );
}
