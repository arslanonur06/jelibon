import { DICTIONARIES } from "@/lib/i18n/dictionaries";

/**
 * English ticker only (locale-independent) — product/service line, easy to read globally.
 */
export function MarqueeStrip() {
  return (
    <div className="pointer-events-none w-full border-t border-white/[0.08] bg-[#08081a]">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-2 text-center sm:px-6 sm:py-2.5">
        <p className="truncate bg-gradient-to-r from-[#FF69B4] via-[#E9D5FF] to-[#22D3EE] bg-clip-text font-sans text-xs font-semibold uppercase tracking-[0.14em] text-transparent sm:text-sm md:text-[15px]">
          {DICTIONARIES.en.marquee.copy}
        </p>
      </div>
    </div>
  );
}
