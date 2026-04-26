import Link from "next/link";
import { HeroVideoBackground } from "@/components/hero-video-background";
import { TextColor } from "@/components/ui/text-color";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";

export function HeroSection() {
  const locale = getLocale();
  const dict = getDictionary(locale);

  return (
    <section className="relative overflow-hidden pb-10 pt-28 sm:pb-16 sm:pt-32">
      <div className="relative z-0 mx-auto w-full max-w-[min(100%,1920px)] px-0 sm:px-3 lg:px-5">
        {/* md+: GIF daha az piksel + daha alçak kutu = hem ekran hem decode yükü */}
        <div className="relative mx-auto h-[min(40vh,360px)] w-full max-w-[min(100%,1100px)] overflow-hidden rounded-xl bg-[#050510] sm:h-[min(45vh,420px)] sm:rounded-2xl md:h-[min(52vh,520px)] md:max-w-[min(100%,880px)] md:rounded-2xl lg:h-[min(54vh,560px)] lg:max-w-[min(100%,920px)] lg:rounded-[2rem]">
          <HeroVideoBackground
            objectFit="cover"
            className="opacity-95 brightness-[1.15] contrast-[1.05] saturate-[1.2]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050510]/18 via-transparent to-[#050510]/12" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_65%_at_50%_42%,rgba(255,105,180,0.04),transparent_58%)]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-6 px-4 pt-6 sm:gap-8 sm:px-6 sm:pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
        <div className="order-2 lg:order-1">
          <p className="font-display text-xs uppercase tracking-[0.35em] text-[#E9A8FF]/90">
            {dict.hero.tagline}
          </p>
          <div className="mt-2 drop-shadow-[0_2px_24px_rgba(0,0,0,0.65)]">
            <TextColor lines={dict.hero.textColorLines} />
          </div>
          <p className="mt-5 max-w-xl text-lg text-zinc-200 drop-shadow-md">
            {dict.hero.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#packages"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_32px_rgba(160,32,240,0.28)] transition hover:-translate-y-0.5"
            >
              <span
                className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.9] transition duration-300 group-hover:scale-[1.04]"
                style={{ backgroundImage: "url('/assets/button-cta-bg.png')" }}
                aria-hidden
              />
              <span
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,24,0.18)_0%,rgba(8,8,24,0.34)_100%)]"
                aria-hidden
              />
              <span className="relative z-[1]">{dict.hero.viewPackages}</span>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-[#141428] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#22D3EE]/40 hover:bg-[#1a1a32]"
            >
              {dict.hero.readBlog}
            </Link>
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.28em] text-zinc-400">
            {dict.hero.tags}
          </p>
        </div>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <div className="glass-panel relative rounded-3xl border border-white/12 p-6 sm:p-8">
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#FF69B4]/14 blur-xl" />
            <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-[#00D4FF]/10 blur-xl" />
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-[#C4B5FD]">
              {dict.hero.whyUsHeading}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-200">
              {dict.hero.whyUsBullets.map((bullet, idx) => (
                <li key={bullet} className="flex gap-3">
                  <span
                    className={
                      idx === 0
                        ? "mt-1 h-2 w-2 shrink-0 rounded-full bg-[#FF69B4] shadow-[0_0_12px_#FF69B4]"
                        : idx === 1
                          ? "mt-1 h-2 w-2 shrink-0 rounded-full bg-[#22D3EE] shadow-[0_0_12px_#22D3EE]"
                          : "mt-1 h-2 w-2 shrink-0 rounded-full bg-[#32CD32] shadow-[0_0_12px_#32CD32]"
                    }
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
