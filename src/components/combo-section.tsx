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
        <div className="glass-panel relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#12121f]/95 p-8 shadow-[0_22px_50px_rgba(0,0,0,0.22)] sm:p-10 lg:p-12">
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.34] saturate-[1.08] brightness-[0.95] transition duration-700"
            style={{ backgroundImage: "url('/assets/growth-tier-red-bg.gif')" }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,18,0.22)_0%,rgba(7,7,18,0.48)_42%,rgba(7,7,18,0.78)_100%)]"
            aria-hidden
          />
          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br from-[#FF69B4]/28 via-[#A020F0]/20 to-[#00D4FF]/18 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-[#32CD32]/8 blur-2xl" />
          <div
            className="pointer-events-none absolute inset-y-0 left-[-30%] w-1/3 -skew-x-12 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.08)_50%,rgba(255,255,255,0)_100%)] opacity-50 blur-lg"
            aria-hidden
          />

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

            <div className="rounded-3xl border border-white/12 bg-[#151526]/94 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] sm:p-8">
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

