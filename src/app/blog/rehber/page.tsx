import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/site-json-ld";
import { TELEGRAM_URL } from "@/constants";
import { BONUS_BRAND_COUNT, bonusBrandGuides } from "@/data/bonus-guides";

export const metadata: Metadata = {
  title: "Marka rehberleri",
  description: `${BONUS_BRAND_COUNT} marka için güncel giriş, adres ve bonus odaklı açık tema rehber sayfaları. PR ve iş birliği: @jelibonmarketing.`,
  alternates: { canonical: "/blog/rehber" },
  openGraph: {
    title: "Marka rehberleri | Jelibon Marketing",
    description:
      "Her marka için blog altında rehber şablonu; tüm yönlendirmeler Telegram.",
    url: "/blog/rehber",
    type: "website",
    locale: "tr_TR",
  },
};

export default function BlogRehberIndexPage() {
  return (
    <div
      className="relative z-[120] min-h-screen bg-white text-slate-900"
      style={{ fontFamily: "var(--font-dm), system-ui, sans-serif" }}
    >
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Marka rehberleri", path: "/blog/rehber" },
        ]}
      />
      <header className="border-b border-slate-200 px-4 py-6 sm:px-8">
        <Link
          href="/blog"
          className="text-sm font-semibold text-[#0047FF] hover:underline"
        >
          ← Bloga dön
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Marka rehberleri
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Aşağıdaki her satır, ekran görüntüsündeki gibi açık tema rehber
          şablonuna gider. Güncel kampanya ve adres bilgisi için{" "}
          <Link
            href={TELEGRAM_URL}
            className="font-semibold text-[#0047FF] underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram @jelibonmarketing
          </Link>{" "}
          kullanılır.
        </p>
      </header>
      <main className="mx-auto max-w-5xl px-4 pb-16 sm:px-8">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {bonusBrandGuides.map((b) => (
            <Link
              key={b.slug}
              href={`/blog/rehber/${b.slug}`}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#0047FF] hover:bg-white hover:text-[#0047FF]"
            >
              {b.name} Rehberi
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
