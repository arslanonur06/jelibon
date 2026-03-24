import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="/assets/jelibon-brand.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-[0.42] saturate-125"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/80 via-[#07071a]/88 to-[#050510]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(160,32,240,0.35),_transparent_55%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.35em] text-[#E9A8FF]/90">
            Premium growth solutions · 2026
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Dominate the{" "}
            <span className="bg-gradient-to-r from-[#FF69B4] via-[#C084FC] to-[#22D3EE] bg-clip-text text-transparent">
              iGaming
            </span>{" "}
            market.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-300">
            From traffic acquisition to brand protection—complete marketing
            built for adult iGaming operators who want scale without chaos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#packages"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#FF69B4] via-[#A020F0] to-[#00D4FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_32px_rgba(160,32,240,0.45)] transition hover:brightness-110"
            >
              View offer packages
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:border-[#22D3EE]/40 hover:bg-white/10"
            >
              Read the blog
            </Link>
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.28em] text-zinc-400">
            iGaming · AI automation · Telegram ads · DMCA
          </p>
        </div>

        <div className="glass-panel relative rounded-3xl p-6 sm:p-8">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#FF69B4]/25 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-[#00D4FF]/20 blur-3xl" />
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-[#C4B5FD]">
            Growth solutions
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">
            We deliver acquisition, automation, protection, and creative in one
            operating rhythm—so your team ships faster while risk stays
            visible.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-zinc-200">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#FF69B4] shadow-[0_0_12px_#FF69B4]" />
              Premium traffic systems with executive-ready reporting.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#22D3EE] shadow-[0_0_12px_#22D3EE]" />
              GPT-4 chatbot routing, languages, and CRM-aware journeys.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#32CD32] shadow-[0_0_12px_#32CD32]" />
              DMCA enforcement, clone monitoring, and weekly brand safety updates.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
