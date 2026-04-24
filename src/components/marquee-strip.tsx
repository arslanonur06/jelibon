import { DICTIONARIES } from "@/lib/i18n/dictionaries";

const tickerClass =
  "bg-gradient-to-r from-[#FF69B4] via-[#E9D5FF] to-[#22D3EE] bg-clip-text font-sans text-xs font-semibold uppercase tracking-[0.14em] text-transparent sm:text-sm md:text-[15px]";

/**
 * English ticker only (locale-independent) — product/service line, easy to read globally.
 * Pure CSS transform loop (no rAF) so the fixed header stays cheap to composite.
 */
export function MarqueeStrip() {
  const copy = DICTIONARIES.en.marquee.copy;

  return (
    <div className="pointer-events-none w-full border-t border-white/[0.08] bg-[#08081a]">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-2 sm:px-6 sm:py-2.5">
        <p
          className={`motion-reduce:block hidden truncate text-center ${tickerClass}`}
        >
          {copy}
        </p>
        <div className="motion-reduce:hidden" role="img" aria-label={copy}>
          <div
            className="animate-header-marquee flex w-max backface-hidden transform-gpu"
            aria-hidden
          >
            <span
              className={`inline-block shrink-0 whitespace-nowrap px-8 ${tickerClass}`}
            >
              {copy}
            </span>
            <span
              className={`inline-block shrink-0 whitespace-nowrap px-8 ${tickerClass}`}
            >
              {copy}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
