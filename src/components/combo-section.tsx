import Link from "next/link";
import { TELEGRAM_URL } from "@/constants";
import { fullGrowthSuite } from "@/data/packages";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";

export function ComboSection() {
  const locale = getLocale();
  const dict = getDictionary(locale);

  const suite = {
    ...fullGrowthSuite,
    ...dict.combo.fullGrowthSuiteByLocale,
  };

  return (
    <section
      id="combo"
      className="relative scroll-mt-44 border-y border-white/10 bg-gradient-to-b from-[#0b0b18]/80 to-[#050510]/90 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-[#FF69B4]/40 via-[#A020F0]/30 to-[#00D4FF]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#32CD32]/10 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FDE047]/30 bg-[#FDE047]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#FEF9C3]">
                {dict.combo.flagship}
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
                {suite.title}
              </h2>
              <p className="mt-2 text-lg text-zinc-300">{suite.subtitle}</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                {dict.combo.description}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-8">
              <p className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                {suite.price}
              </p>
              <p className="mt-2 text-sm text-zinc-400">{suite.billingNote}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-1">
                {suite.includes.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <ul className="mt-6 space-y-2 text-sm text-zinc-300">
                {suite.extras.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-[#86EFAC]">✓</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex flex-1 items-center justify-center overflow-hidden rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_32px_rgba(255,105,180,0.25)] transition hover:-translate-y-0.5"
                >
                  <span
                    className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.88] transition duration-300 group-hover:scale-[1.04]"
                    style={{ backgroundImage: "url('/assets/button-cta-bg.png')" }}
                    aria-hidden
                  />
                  <span
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,24,0.2)_0%,rgba(8,8,24,0.36)_100%)]"
                    aria-hidden
                  />
                  <span className="relative z-[1]">{dict.combo.getStarted}</span>
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-[#22D3EE]/40 hover:bg-white/10"
                >
                  {dict.nav.contact}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

