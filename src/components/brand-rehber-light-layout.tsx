import Link from "next/link";
import { TELEGRAM_URL } from "@/constants";
import { KISA_BLOG_BONUS_ITEMS } from "@/data/kisa-blog-bonus-tr";
import { getPopulerMarkaKartlari } from "@/data/populer-marka-kartlari-tr";

type BrandRehberLightLayoutProps = {
  brandName: string;
  slug: string;
};

const PRIMARY = "#0047FF";

function PillRow() {
  const pills = [
    { label: "Güncel adres", filled: true },
    { label: "Giriş", filled: false },
    { label: "Kayıt ol", filled: false },
    { label: "Bonus", filled: false },
    { label: "Mobil giriş", filled: false },
  ] as const;

  return (
    <div className="flex flex-wrap gap-2">
      {pills.map((pill) => (
        <Link
          key={pill.label}
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${pill.label} — bilgi için Telegram`}
          className={
            pill.filled
              ? "rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              : "rounded-full border-2 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-slate-50"
          }
          style={
            pill.filled
              ? { backgroundColor: PRIMARY }
              : { borderColor: PRIMARY, color: PRIMARY }
          }
        >
          {pill.label}
        </Link>
      ))}
    </div>
  );
}

/**
 * Açık tema “marka rehberi” şablonu (blog altında kullanılır).
 * Tüm aksiyonlar bilgilendirme + Telegram yönlendirmesi içindir.
 */
export function BrandRehberLightLayout({
  brandName,
  slug,
}: BrandRehberLightLayoutProps) {
  const logoLabel = `${brandName} Rehberi.`;
  const boxLabel = `${brandName.toUpperCase()} — GÜNCEL ADRES, GİRİŞ VE BONUS`;
  const populerMarkalar = getPopulerMarkaKartlari(slug, 6);

  const navLinkClass =
    "text-sm font-medium text-slate-700 transition hover:text-[#0047FF]";

  return (
    <div
      className="relative z-[120] min-h-screen bg-white text-slate-900 antialiased"
      style={{ fontFamily: "var(--font-dm), system-ui, sans-serif" }}
    >
      <p className="border-b border-slate-200 bg-slate-50 px-4 py-2 text-center text-xs text-slate-600 sm:text-sm">
        Google aramasıyla gelen markalar: PR anlaşması ve iş birliği için bize
        ulaşın.{" "}
        <Link
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#0047FF] underline-offset-2 hover:underline"
        >
          Telegram
        </Link>
      </p>

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            href={`/blog/rehber/${slug}`}
            className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl"
            style={{ color: PRIMARY }}
          >
            {logoLabel}
          </Link>
          <nav
            className="hidden flex-wrap items-center gap-5 md:flex"
            aria-label="Ana menü"
          >
            <Link href="/blog" className={navLinkClass}>
              Blog
            </Link>
            <Link href="/blog/rehber" className={navLinkClass}>
              Markalar
            </Link>
            <Link href="/blog/rehber" className={navLinkClass}>
              Karşılaştır
            </Link>
            <Link href="/giris-bonuslari" className={navLinkClass}>
              Rehberler
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
              Telegram
            </Link>
          </nav>
          <Link
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${brandName} — Telegram ile iletişim`}
            className="rounded-full px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
            style={{ backgroundColor: PRIMARY }}
          >
            {brandName}
          </Link>
        </div>
        <nav
          className="md:hidden"
          aria-label="Mobil menü"
        >
          <div className="mx-auto flex max-w-5xl gap-4 overflow-x-auto whitespace-nowrap border-t border-slate-100 px-4 py-2.5 sm:px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <Link href="/blog" className={navLinkClass}>
              Blog
            </Link>
            <Link href="/blog/rehber" className={navLinkClass}>
              Markalar
            </Link>
            <Link href="/blog/rehber" className={navLinkClass}>
              Karşılaştır
            </Link>
            <Link href="/giris-bonuslari" className={navLinkClass}>
              Rehberler
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
              Telegram
            </Link>
          </div>
        </nav>
        <div className="mx-auto max-w-5xl border-t border-slate-100 px-4 py-3 sm:px-6">
          <PillRow />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <p
            className="text-center text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm"
            style={{ color: PRIMARY }}
          >
            EĞİTİM • KARŞILAŞTIRMAYA UYGUN • ŞEFFAF AÇIKLAMALAR
          </p>
          <h1 className="mt-6 text-center text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Şartları okuyan okuyucular için dürüst{" "}
            <span style={{ color: PRIMARY }}>iGaming rehberleri</span>; öne çıkan
            ortak <span style={{ color: PRIMARY }}>{brandName}</span>.
          </h1>
          <p className="mt-8 text-center text-base leading-relaxed text-slate-600 sm:text-lg">
            Bu sayfa bilgilendirme amaçlıdır. {brandName} markasına dair güncel
            giriş, adres, bonus ve kampanya şartları hakkında tarafsız özet sunar;
            ticari vaat içermez. Kumar risklidir; sadece yasal yaşta ve sorumlu
            oyun ilkeleriyle hareket edin. Güncel ve kişiye özel bilgi için
            yalnızca resmi iletişim kanalımız olan Telegram üzerinden yönlendirme
            yapılır.
          </p>

          <section
            className="mt-12 rounded-2xl border border-blue-100 bg-blue-50/50 p-6 sm:p-8"
            aria-labelledby="cta-box-heading"
          >
            <p
              id="cta-box-heading"
              className="text-xs font-bold uppercase tracking-widest sm:text-sm"
              style={{ color: PRIMARY }}
            >
              {boxLabel}
            </p>
            <div className="mt-5">
              <PillRow />
            </div>
          </section>
        </div>

        <div className="mt-16 rounded-3xl border border-slate-100 bg-gradient-to-b from-sky-50 via-white to-white px-4 py-12 shadow-sm sm:px-8 sm:py-14">
          <section aria-labelledby="kisa-blog-heading">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2
                  id="kisa-blog-heading"
                  className="text-xl font-bold text-slate-900 sm:text-2xl"
                >
                  Kısa blog — bonus ve kampanyalar
                </h2>
                <p className="mt-1 max-w-xl text-sm text-slate-600">
                  Türkiye aramalarında sık geçen deneme bonusu, freespin ve
                  kampanya başlıkları için hızlı okuma notları.
                </p>
              </div>
              <Link
                href="/blog"
                className="shrink-0 text-sm font-semibold text-[#0047FF] hover:underline"
              >
                Tümünü gör
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {KISA_BLOG_BONUS_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={`${item.title} — blog yazısını aç`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#0047FF]/40 hover:shadow-md"
                >
                  <h3 className="text-base font-bold leading-snug text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-500">
                    {item.readMinutes} dk · {item.date}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-14" aria-labelledby="populer-markalar-heading">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2
                  id="populer-markalar-heading"
                  className="text-xl font-bold text-slate-900 sm:text-2xl"
                >
                  Popüler markalar (bilgi sayfaları)
                </h2>
                <p className="mt-1 max-w-xl text-sm text-slate-600">
                  Türkiye’de sık aranan işletmeler için kısa bilgilendirme
                  metinleri; her kart ilgili rehber sayfasına gider.
                </p>
              </div>
              <Link
                href="/blog/rehber"
                className="shrink-0 text-sm font-semibold text-[#0047FF] hover:underline"
              >
                Tüm markalar
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {populerMarkalar.map((m) => (
                <Link
                  key={m.slug}
                  href={`/blog/rehber/${m.slug}`}
                  aria-label={`${m.name} bilgi rehberi`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#0047FF]/40 hover:shadow-md"
                >
                  <h3 className="text-lg font-bold text-slate-900">{m.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {m.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <p className="mt-12 text-center text-sm text-slate-500">
            Jelibon Marketing — Türkiye odaklı SEO ve içerik rehberleri. Tüm
            yönlendirmeler:{" "}
            <Link
              href={TELEGRAM_URL}
              className="font-semibold text-[#0047FF] underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @jelibonmarketing
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
