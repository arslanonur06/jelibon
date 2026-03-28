import Image from "next/image";
import Link from "next/link";
import { MarqueeStrip } from "@/components/marquee-strip";
import { SiteNavDock } from "@/components/site-nav-dock";
import { getLocale } from "@/lib/i18n/get-locale";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { LanguageSwitcher } from "@/components/language-switcher";

export function SiteHeader() {
  const locale = getLocale();
  const dict = getDictionary(locale);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex flex-col border-b border-white/[0.1] bg-[#050510] shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
      {/* ── Main row ── */}
      <div className="mx-auto flex w-full max-w-7xl items-center gap-2 px-3 py-2 sm:gap-4 sm:px-6 sm:py-2.5">

        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label="Jelibon Marketing">
          <span className="relative block h-9 w-9 overflow-hidden rounded-xl ring-1 ring-white/20 shadow-[0_0_14px_rgba(255,105,180,0.4)] sm:h-11 sm:w-11">
            <Image
              src="/assets/jelibonbackpng.png"
              alt="Jelibon Marketing"
              fill
              className="object-cover object-center"
              sizes="(max-width:640px) 36px, 44px"
              priority
            />
          </span>
        </Link>

        {/* Nav dock – flex-1 so it fills remaining space */}
        <div className="min-w-0 flex-1">
          <SiteNavDock locale={locale} />
        </div>

        {/* Right actions */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <Link
            href="https://t.me/jelibonmarketing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center rounded-full bg-gradient-to-r from-[#FF69B4] via-[#A020F0] to-[#00D4FF] px-3 py-1.5 text-xs font-semibold text-white shadow-[0_0_18px_rgba(255,105,180,0.35)] transition hover:brightness-110 sm:px-4 sm:py-2 sm:text-sm"
          >
            {dict.header.telegram}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>

      {/* ── Marquee strip ── */}
      <MarqueeStrip />
    </header>
  );
}
