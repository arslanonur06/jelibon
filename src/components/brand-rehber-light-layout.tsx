import Link from "next/link";
import { TELEGRAM_URL } from "@/constants";
import type { BonusArticleContent } from "@/data/bonus-article";
import type { BonusBrandGuide } from "@/data/bonus-guides";

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

const SEARCH_LINKS = [
  "site",
  "güncel adres",
  "güncel giriş",
  "bulunan bonuslar",
  "deneme bonusu freespin",
  "yatırımsız bonus",
] as const;

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
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${brandName} ${label} bilgisi için Telegram`}
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

export function BrandRehberLightLayout({
  brand,
  article,
  directoryHref,
  directoryLabel,
  relatedHrefBase,
}: BrandRehberLightLayoutProps) {
  const monogram = getBrandMonogram(brand.name);
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
            href={`${relatedHrefBase}/${brand.slug}`}
            className="text-lg font-bold tracking-tight text-[#1f2a22] sm:text-xl"
          >
            {brand.name} Rehberi.
          </Link>
          <nav className="hidden flex-wrap items-center gap-5 lg:flex" aria-label="Ana menü">
            <Link href="/blog" className={navLinkClass}>
              Blog
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
            href={TELEGRAM_URL}
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
              {brand.name.toLocaleUpperCase("tr-TR")} ADRES VE GİRİŞ NOTLARI
            </p>
            <h1
              className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl"
              style={{ color: PRIMARY }}
            >
              {brand.name} Giriş
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[#e7e1d3] sm:text-lg">
              {article.intro[0]}
            </p>
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
          </div>

          <aside className="space-y-6">
            <section className="rounded-[28px] border border-[#dbc8a8] bg-[#fffdf8] p-6 shadow-[0_10px_30px_rgba(8,24,18,0.05)]">
              <h2 className="font-display text-xl font-semibold text-[#17382d]">
                Tıklanan kelimeler
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {SEARCH_LINKS.map((item) => (
                  <Link
                    key={item}
                    href={TELEGRAM_URL}
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
                Telegram: @jelibonmarketing
              </Link>
            </section>
          </aside>
        </div>

      </main>
    </div>
  );
}
