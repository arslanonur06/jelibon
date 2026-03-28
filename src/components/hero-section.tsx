import Image from "next/image";
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
        {/* Taller hero video — less empty vertical space above the fold */}
        <div className="relative h-[min(80vh,920px)] overflow-hidden rounded-xl bg-[#050510] sm:h-[min(86vh,1000px)] sm:rounded-2xl lg:h-[min(88vh,1080px)] lg:rounded-[2rem]">
          <HeroVideoBackground
            objectFit="cover"
            className="opacity-95 brightness-[1.15] contrast-[1.05] saturate-[1.2]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050510]/18 via-transparent to-[#050510]/12" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_65%_at_50%_42%,rgba(255,105,180,0.04),transparent_58%)]" />

          {/* `jelibonbackpng.png` on top of the tiger area */}
          <div className="pointer-events-none absolute left-1/2 top-[7%] z-20 w-[min(34vw,12rem)] -translate-x-1/2 drop-shadow-[0_14px_30px_rgba(0,0,0,0.7)]">
            <span className="relative block aspect-square w-full">
              <Image
                src="/assets/jelibonbackpng.png"
                alt="Jelibon Marketing"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 42vw, (max-width: 1024px) 24vw, 12rem"
              />
            </span>
          </div>
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
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#FF69B4] via-[#A020F0] to-[#00D4FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_32px_rgba(160,32,240,0.45)] transition hover:brightness-110"
            >
              {dict.hero.viewPackages}
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
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#FF69B4]/20 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-[#00D4FF]/15 blur-3xl" />
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
