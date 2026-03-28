import { VelocityMarquee } from "@/components/ui/velocity-marquee";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";

/**
 * Lives directly under the top bar inside `SiteHeader` (same fixed stack, no extra z-index layer).
 */
export function MarqueeStrip() {
  const locale = getLocale();
  const dict = getDictionary(locale);
  return (
    <div className="pointer-events-none w-full border-t border-white/[0.08] bg-[#08081a]">
      <div className="mx-auto max-w-[100vw] py-2 sm:py-2.5">
        <VelocityMarquee
          baseVelocity={-1.15}
          scrollDependent={false}
          delay={80}
          textClassName="bg-gradient-to-r from-[#FF69B4] via-[#E9D5FF] to-[#22D3EE] bg-clip-text text-transparent [filter:drop-shadow(0_0_12px_rgba(255,105,180,0.35))]"
        >
          {dict.marquee.copy}
        </VelocityMarquee>
      </div>
    </div>
  );
}
