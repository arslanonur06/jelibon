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
    <header className="fixed inset-x-0 top-0 z-[100] flex flex-col border-b border-white/[0.1] bg-[#050510]/88 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-[#050510]/72">
      <div className="mx-auto flex w-full min-w-0 max-w-7xl flex-wrap items-center gap-2 px-3 py-2.5 sm:flex-nowrap sm:gap-3 sm:px-5 sm:py-3 md:gap-4 md:px-6">
        <Link href="/" className="order-1 flex min-w-0 shrink-0 items-center gap-2 sm:order-none sm:gap-3">
          <span className="relative h-8 w-[7.25rem] shrink-0 sm:h-11 sm:w-40 md:w-48">
            <Image
              src="/assets/jelibonbackpng.png"
              alt="Jelibon Marketing"
              fill
              className="object-contain object-left drop-shadow-[0_0_18px_rgba(255,105,180,0.35)]"
              sizes="(max-width:640px) 128px, 192px"
              priority
            />
          </span>
        </Link>

        <div className="order-3 basis-full sm:order-none sm:basis-auto sm:flex-1">
          <SiteNavDock locale={locale} />
        </div>

        <div className="order-2 ml-auto flex min-w-0 shrink-0 items-center gap-1 sm:order-none sm:gap-2">
          <Link
            href="https://t.me/jelibonmarketing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 rounded-full bg-gradient-to-r from-[#FF69B4] via-[#A020F0] to-[#00D4FF] px-2.5 py-2 text-xs font-semibold text-white shadow-[0_0_24px_rgba(255,105,180,0.35)] transition hover:brightness-110 sm:px-4 sm:text-sm"
          >
            {dict.header.telegram}
          </Link>

          <div className="flex">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      <MarqueeStrip />
    </header>
  );
}
