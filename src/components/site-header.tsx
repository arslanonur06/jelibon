import Image from "next/image";
import Link from "next/link";
import { DesktopPrimaryNav } from "@/components/desktop-primary-nav";
import { MarqueeStrip } from "@/components/marquee-strip";
import { SiteMobileNav } from "@/components/site-mobile-nav";
import { getLocale } from "@/lib/i18n/get-locale";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { LanguageSwitcher } from "@/components/language-switcher";
import { TELEGRAM_URL } from "@/constants";

function TelegramHeaderLink({ label }: { label: string }) {
  return (
    <Link
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 w-10 shrink-0 touch-manipulation items-center justify-center rounded-full border border-white/12 bg-white/[0.08] text-[#8FDBFF] shadow-[0_12px_28px_rgba(0,0,0,0.2)] backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.12] hover:text-[#B7E8FF]"
      aria-label={label}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[1.4rem] w-[1.4rem]"
        fill="currentColor"
        aria-hidden
      >
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    </Link>
  );
}

export function SiteHeader() {
  const locale = getLocale();
  const dict = getDictionary(locale);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex flex-col shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
      <div className="border-b border-white/[0.1] bg-[#050510]/95 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-3 py-2.5 sm:px-6 lg:gap-5">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            aria-label="Jelibon Marketing"
          >
            <span className="relative block h-9 w-9 overflow-hidden rounded-xl ring-1 ring-white/20 shadow-[0_0_14px_rgba(255,105,180,0.4)] sm:h-10 sm:w-10">
              <Image
                src="/assets/jelibonbackpng.png"
                alt="Jelibon Marketing"
                fill
                className="object-cover object-center"
                sizes="(max-width:640px) 36px, 40px"
                priority
              />
            </span>
            <span className="hidden text-sm font-semibold tracking-[0.14em] text-zinc-100 lg:block">
              JELIBON
            </span>
          </Link>

          <DesktopPrimaryNav locale={locale} />

          <div className="flex min-w-0 flex-1 lg:hidden" aria-hidden />

          <div className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-2 py-1.5 shadow-[0_12px_28px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <TelegramHeaderLink label={dict.header.telegram} />
            <LanguageSwitcher initialLocale={locale} />
            <SiteMobileNav locale={locale} />
          </div>
        </div>
      </div>

      <MarqueeStrip />
    </header>
  );
}
