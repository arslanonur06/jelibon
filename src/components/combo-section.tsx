import Link from "next/link";
import { fullCombo } from "@/data/packages";

export function ComboSection() {
  return (
    <section
      id="combo"
      className="relative scroll-mt-28 border-y border-white/10 bg-gradient-to-b from-[#0b0b18]/80 to-[#050510]/90 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-[#FF69B4]/40 via-[#A020F0]/30 to-[#00D4FF]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#32CD32]/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FDE047]/30 bg-[#FDE047]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#FEF9C3]">
                Best value
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
                {fullCombo.title}
              </h2>
              <p className="mt-2 text-lg text-zinc-300">{fullCombo.subtitle}</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Full suite integration with priority support, a dedicated
                account manager, and a comprehensive scaling strategy—everything
                in one monthly investment.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-8">
              <p className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                {fullCombo.price}
              </p>
              <p className="mt-2 text-sm text-zinc-400">{fullCombo.billingNote}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {fullCombo.includes.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <ul className="mt-6 space-y-2 text-sm text-zinc-300">
                {fullCombo.extras.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-[#86EFAC]">✓</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="mailto:contact@jelibonmarketing.com"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl bg-gradient-to-r from-[#FF69B4] via-[#A020F0] to-[#00D4FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_32px_rgba(255,105,180,0.35)] transition hover:brightness-110"
                >
                  Get started today
                </Link>
                <Link
                  href="https://t.me/jelibonmarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-[#22D3EE]/40 hover:bg-white/10"
                >
                  Message on Telegram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
