import {
  growthPackageTiers,
  servicePackages,
  type ServicePackage,
} from "@/data/packages";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";

const COLORWAYS_POSITIONS = [
  "left top",
  "center top",
  "right center",
  "left bottom",
  "center center",
  "right bottom",
] as const;

const COLORWAYS_ROTATIONS = [
  "-rotate-[4deg]",
  "rotate-[5deg]",
  "-rotate-[2deg]",
  "rotate-[6deg]",
  "-rotate-[5deg]",
  "rotate-[3deg]",
] as const;

const COLORWAYS_STRENGTH = [
  "opacity-[0.82]",
  "opacity-[0.74]",
  "opacity-[0.88]",
  "opacity-[0.78]",
  "opacity-[0.84]",
  "opacity-[0.72]",
] as const;

const ADULT_CHANNELS_BACKGROUND = "url('/assets/adult-ads-card-bg.png')";
const ADULT_ADS_BACKGROUND = "url('/assets/adult-ads-card-bg.gif')";
const TELEGRAM_ADS_BACKGROUND = "url('/assets/telegram-ads-card-bg.gif')";
const AI_CHATBOT_BACKGROUND = "url('/assets/ai-chatbot-card-bg.gif')";
const DMCA_CARD_BACKGROUND = "url('/assets/dmca-fingerprint-card-bg.gif')";
const SEO_BLOG_CARD_BACKGROUND = "url('/assets/seo-blog-card-bg.png')";
const AI_INFLUENCER_BACKGROUND =
  "url('/assets/ai-influencer-card-bg.jpg'), url('/assets/ai-influencer-card-bg-close.jpg')";
const GROWTH_TIER_BACKGROUND = "url('/assets/growth-tier-red-bg.gif')";
const BRONZE_TIER_BACKGROUND = "url('/assets/growth-tier-bronze-bg.gif')";
const SILVER_TIER_BACKGROUND = "url('/assets/growth-tier-silver-bg.gif')";
const GOLD_TIER_BACKGROUND = "url('/assets/growth-tier-gold-bg.gif')";
const DIAMOND_TIER_BACKGROUND = "url('/assets/growth-tier-diamond-bg.gif')";
const CREATIVE_FUNNEL_BACKGROUND = "url('/assets/creative-funnel-card-bg.gif')";
const CUSTOM_SOFTWARE_BACKGROUND = "url('/assets/custom-software-card-bg.gif')";

export function PackagesSection() {
  const locale = getLocale();
  const dict = getDictionary(locale);
  const p = dict.packages;

  const servicePackagesLocalized: ServicePackage[] = servicePackages.map(
    (pkg) => {
      const localized = p.servicePackagesById[pkg.id];
      if (!localized) return pkg;
      return {
        ...pkg,
        title: localized.title ?? pkg.title,
        subtitle: localized.subtitle ?? pkg.subtitle,
        badge: localized.badge ?? pkg.badge,
        billingNote: localized.billingNote ?? pkg.billingNote,
        priceHeadline: localized.priceHeadline ?? pkg.priceHeadline,
        features: localized.features ?? pkg.features,
      };
    },
  );

  const growthPackageTiersLocalized = growthPackageTiers.map((tier) => {
    const localized = p.growthPackageTiersById[tier.id];
    if (!localized) return tier;
    return { ...tier, name: localized.name, features: localized.features };
  });

  const colorwaysBackground = "url('/assets/colorways-card-bg.png')";
  const isTelegramAdsCard = (id: string) => id === "telegram-ads";
  const isTelegramCard = (id: string) =>
    id === "telegram-ads" || id === "telegram-network";
  const isAdultAdsCard = (id: string) => id === "pornhub-ads";
  const isAiChatbotCard = (id: string) => id === "ai-chatbot";
  const isAiInfluencerCard = (id: string) => id === "ai-influencer";
  const isCreativeFunnelCard = (id: string) => id === "creative-funnel";
  const isCustomSoftwareCard = (id: string) => id === "custom-software";
  const isDmcaCard = (id: string) => id === "dmca";
  const isSeoBlogCard = (id: string) => id === "seo-blog-network";
  const isBronzeTier = (id: string) => id === "starter";
  const isSilverTier = (id: string) => id === "growth";
  const isGoldTier = (id: string) => id === "scale";
  const isDiamondTier = (id: string) => id === "domination";
  const getGrowthTierMotionClass = (id: string) =>
    isBronzeTier(id)
      ? "animate-growth-tier-bronze"
      : isSilverTier(id)
        ? "animate-growth-tier-silver"
        : isGoldTier(id)
          ? "animate-growth-tier-gold"
          : isDiamondTier(id)
            ? "animate-growth-tier-diamond"
            : "animate-growth-tier-red";
  const isImagePriorityCard = (id: string) =>
    isTelegramCard(id) ||
    isAdultAdsCard(id) ||
    isAiChatbotCard(id) ||
    isAiInfluencerCard(id) ||
    isCreativeFunnelCard(id) ||
    isCustomSoftwareCard(id) ||
    isDmcaCard(id) ||
    isSeoBlogCard(id);
  const isFullBleedImageCard = (id: string) => isDmcaCard(id) || isSeoBlogCard(id);

  return (
    <section id="packages" className="relative scroll-mt-44 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
            {p.heading}
          </h2>
          <p className="mt-2 text-sm text-zinc-400 sm:mt-3 sm:text-base">
            {p.description}
          </p>
        </div>

        <nav
          className="mt-6 flex flex-wrap gap-2 sm:mt-8"
          aria-label="Jump to a service"
        >
          {servicePackagesLocalized.map((pkg) => (
            <a
              key={pkg.id}
              href={`#pkg-${pkg.id}`}
              className="inline-flex shrink-0 items-center rounded-full border border-white/20 bg-[#12121f] px-3 py-1.5 text-xs font-medium text-white shadow-sm transition hover:border-[#FF69B4]/55 hover:bg-[#1a1a2e] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF69B4]"
            >
              <span className="relative z-[1] select-none">
                {p.serviceNavLabelsById[pkg.id] ?? pkg.title}
              </span>
            </a>
          ))}
        </nav>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-2">
          {servicePackagesLocalized.map((pkg, index) => (
            <article
              key={pkg.id}
              id={`pkg-${pkg.id}`}
              className="glass-panel group relative isolate flex scroll-mt-52 flex-col overflow-hidden rounded-2xl border border-white/10 bg-transparent p-4 shadow-[0_18px_40px_rgba(0,0,0,0.16)] transition duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:rounded-3xl sm:p-6"
            >
              <div
                className="pointer-events-none absolute inset-x-[-12%] top-[-24%] h-32 rounded-full bg-[radial-gradient(circle,rgba(255,105,180,0.18)_0%,rgba(255,105,180,0)_68%)] opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 group-hover:translate-y-2"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-y-0 left-[-35%] w-1/2 -skew-x-12 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0)_100%)] opacity-0 blur-xl transition duration-700 group-hover:left-[120%] group-hover:opacity-100"
                aria-hidden
              />
              <div
                className={`pointer-events-none absolute transition duration-500 ${
                  isAiChatbotCard(pkg.id) ||
                  isTelegramAdsCard(pkg.id) ||
                  isAiInfluencerCard(pkg.id) ||
                  isCreativeFunnelCard(pkg.id) ||
                  isCustomSoftwareCard(pkg.id)
                    ? ""
                    : "group-hover:scale-[1.05]"
                } ${
                  isImagePriorityCard(pkg.id)
                    ? `inset-0 ${isFullBleedImageCard(pkg.id) ? "bg-cover" : "bg-no-repeat"} opacity-[0.9]`
                    : `inset-[-8%] bg-cover ${COLORWAYS_ROTATIONS[index % COLORWAYS_ROTATIONS.length]} ${COLORWAYS_STRENGTH[index % COLORWAYS_STRENGTH.length]}`
                }`}
                style={{
                  backgroundImage:
                    isAdultAdsCard(pkg.id)
                      ? ADULT_ADS_BACKGROUND
                      : isTelegramAdsCard(pkg.id)
                        ? TELEGRAM_ADS_BACKGROUND
                        : isTelegramCard(pkg.id)
                        ? ADULT_CHANNELS_BACKGROUND
                        : isAiChatbotCard(pkg.id)
                          ? AI_CHATBOT_BACKGROUND
                          : isAiInfluencerCard(pkg.id)
                            ? AI_INFLUENCER_BACKGROUND
                            : isCreativeFunnelCard(pkg.id)
                              ? CREATIVE_FUNNEL_BACKGROUND
                              : isCustomSoftwareCard(pkg.id)
                                ? CUSTOM_SOFTWARE_BACKGROUND
                          : isDmcaCard(pkg.id)
                            ? DMCA_CARD_BACKGROUND
                            : isSeoBlogCard(pkg.id)
                              ? SEO_BLOG_CARD_BACKGROUND
                        : colorwaysBackground,
                  backgroundPosition:
                    isAdultAdsCard(pkg.id)
                      ? "center center"
                      : pkg.id === "telegram-ads"
                        ? "center center"
                        : pkg.id === "telegram-network"
                          ? "center center"
                          : isAiChatbotCard(pkg.id)
                            ? "center center"
                            : isAiInfluencerCard(pkg.id)
                              ? "left center, right center"
                              : isCreativeFunnelCard(pkg.id)
                                ? "center center"
                                : isCustomSoftwareCard(pkg.id)
                                  ? "center center"
                            : isDmcaCard(pkg.id)
                              ? "center center"
                              : isSeoBlogCard(pkg.id)
                                ? "center center"
                            : COLORWAYS_POSITIONS[index % COLORWAYS_POSITIONS.length],
                  backgroundSize:
                    isFullBleedImageCard(pkg.id)
                      ? "cover"
                      : isTelegramAdsCard(pkg.id)
                        ? "100% 100%"
                      : isAiChatbotCard(pkg.id)
                        ? "100% auto"
                        : isAiInfluencerCard(pkg.id)
                          ? "48% auto, 48% auto"
                        : isCreativeFunnelCard(pkg.id)
                          ? "100% auto"
                          : isCustomSoftwareCard(pkg.id)
                            ? "100% auto"
                      : isImagePriorityCard(pkg.id)
                        ? "contain"
                        : "cover",
                  backgroundRepeat:
                    isImagePriorityCard(pkg.id) ? "no-repeat" : undefined,
                }}
                aria-hidden
              />
              <div
                className={
                  isAdultAdsCard(pkg.id)
                    ? "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.52)_0%,rgba(5,5,16,0.66)_100%)]"
                    : isTelegramCard(pkg.id)
                      ? "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.48)_0%,rgba(5,5,16,0.64)_100%)]"
                      : isAiChatbotCard(pkg.id)
                        ? "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.54)_0%,rgba(5,5,16,0.72)_100%)]"
                        : isAiInfluencerCard(pkg.id)
                          ? "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.42)_0%,rgba(5,5,16,0.62)_100%)]"
                        : isCreativeFunnelCard(pkg.id)
                          ? "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.46)_0%,rgba(5,5,16,0.66)_100%)]"
                          : isCustomSoftwareCard(pkg.id)
                            ? "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.44)_0%,rgba(5,5,16,0.64)_100%)]"
                        : isDmcaCard(pkg.id)
                          ? "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.34)_0%,rgba(5,5,16,0.58)_100%)]"
                          : isSeoBlogCard(pkg.id)
                            ? "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.28)_0%,rgba(5,5,16,0.54)_100%)]"
                        : "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.42)_0%,rgba(5,5,16,0.68)_100%)]"
                }
                aria-hidden
              />
              <div className="relative z-[1] flex flex-wrap items-start justify-between gap-2 transition duration-500 group-hover:translate-y-[-1px]">
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-white transition duration-500 group-hover:text-[#F8D8FF] sm:text-xl">
                    {pkg.title}
                  </h3>
                  {pkg.subtitle ? (
                    <p className="mt-0.5 text-xs text-zinc-400 transition duration-500 group-hover:text-zinc-300 sm:text-sm">
                      {pkg.subtitle}
                    </p>
                  ) : null}
                </div>
                {pkg.badge ? (
                  <span className="shrink-0 rounded-full border border-[#32CD32]/40 bg-[#32CD32]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#86EFAC] transition duration-500 group-hover:border-[#86EFAC]/60 group-hover:bg-[#32CD32]/15 group-hover:shadow-[0_0_18px_rgba(50,205,50,0.16)] sm:px-3 sm:py-1 sm:text-xs">
                    {pkg.badge}
                  </span>
                ) : null}
              </div>

              <div className="relative z-[1] mt-4 transition duration-500 group-hover:translate-y-[-1px] sm:mt-5">
                {pkg.priceHeadline ? (
                  <p className="font-display text-2xl font-semibold tracking-tight text-white transition duration-500 group-hover:text-[#F7D4FF] sm:text-3xl md:text-4xl">
                    {pkg.priceHeadline}
                  </p>
                ) : (
                  <p className="font-display text-2xl font-semibold tracking-tight text-white transition duration-500 group-hover:text-[#F7D4FF] sm:text-3xl">
                    {pkg.price}
                    <span className="text-base font-normal text-zinc-400 sm:text-lg">
                      {p.monthSuffix}
                    </span>
                  </p>
                )}
                {pkg.billingNote ? (
                  <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                    {pkg.billingNote}
                  </p>
                ) : null}
              </div>

              <ul className="relative z-[1] mt-4 flex-1 space-y-2 text-xs text-zinc-100 sm:mt-5 sm:space-y-2.5 sm:text-sm">
                {pkg.features.map((line, featureIndex) => (
                  <li
                    key={line}
                    className="flex gap-2 transition duration-500 group-hover:translate-x-1 sm:gap-3"
                    style={{ transitionDelay: `${featureIndex * 35}ms` }}
                  >
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gradient-to-r from-[#FF69B4] to-[#00D4FF] transition duration-500 group-hover:scale-125 sm:mt-1.5 sm:h-1.5 sm:w-1.5" />
                    <span className="transition duration-500 group-hover:text-white">{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div id="growth-packages" className="mt-12 scroll-mt-44 sm:mt-14 md:mt-16">
          <h3 className="font-display text-xl font-semibold text-white sm:text-2xl md:text-3xl">
            {p.growthPackagesHeading}
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400 sm:text-base">
            {p.growthPackagesDescription}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5">
            {growthPackageTiersLocalized.map((tier) => (
              <article
                key={tier.id}
                className="glass-panel group relative isolate flex min-h-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-transparent p-3 shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_24px_44px_rgba(0,0,0,0.28)] sm:rounded-2xl sm:p-5"
              >
                <div
                  className="pointer-events-none absolute inset-x-[-15%] top-[-20%] h-24 rounded-full bg-[radial-gradient(circle,rgba(196,181,253,0.2)_0%,rgba(196,181,253,0)_68%)] opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 group-hover:translate-y-2"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-y-0 left-[-40%] w-1/2 -skew-x-12 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0)_100%)] opacity-0 blur-xl transition duration-700 group-hover:left-[125%] group-hover:opacity-100"
                  aria-hidden
                />
                <div
                  className={`pointer-events-none absolute inset-0 bg-cover bg-no-repeat opacity-[0.9] transition duration-500 group-hover:scale-[1.03] ${getGrowthTierMotionClass(
                    tier.id,
                  )}`}
                  style={{
                    backgroundImage: isBronzeTier(tier.id)
                      ? BRONZE_TIER_BACKGROUND
                      : isSilverTier(tier.id)
                        ? SILVER_TIER_BACKGROUND
                        : isGoldTier(tier.id)
                          ? GOLD_TIER_BACKGROUND
                          : isDiamondTier(tier.id)
                            ? DIAMOND_TIER_BACKGROUND
                            : GROWTH_TIER_BACKGROUND,
                    backgroundPosition:
                      isBronzeTier(tier.id) || isSilverTier(tier.id) || isDiamondTier(tier.id)
                        ? "center center"
                        : isGoldTier(tier.id)
                          ? "center 42%"
                          : "center 34%",
                    backgroundSize: "cover",
                  }}
                  aria-hidden
                />
                <div
                  className={
                    isBronzeTier(tier.id)
                      ? "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,10,8,0.28)_0%,rgba(16,10,8,0.56)_46%,rgba(16,10,8,0.84)_100%)]"
                      : isSilverTier(tier.id)
                        ? "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,16,0.16)_0%,rgba(8,10,16,0.4)_42%,rgba(8,10,16,0.72)_100%)]"
                        : isGoldTier(tier.id)
                          ? "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(18,10,4,0.12)_0%,rgba(18,10,4,0.34)_38%,rgba(18,10,4,0.74)_100%)]"
                          : isDiamondTier(tier.id)
                            ? "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,18,0.1)_0%,rgba(8,10,18,0.28)_34%,rgba(8,10,18,0.68)_100%)]"
                      : "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.38)_0%,rgba(5,5,16,0.62)_46%,rgba(5,5,16,0.82)_100%)]"
                  }
                  aria-hidden
                />
                <h4
                  className={`relative z-[1] font-display text-sm font-semibold leading-tight transition duration-500 sm:text-lg ${
                    isBronzeTier(tier.id)
                      ? "text-[#FFF1E2] group-hover:text-[#FFF6ED]"
                      : isSilverTier(tier.id)
                        ? "text-[#F8FBFF] group-hover:text-white"
                        : isGoldTier(tier.id)
                          ? "text-[#FFF3C4] group-hover:text-[#FFF7D8]"
                          : isDiamondTier(tier.id)
                            ? "text-[#F7FBFF] group-hover:text-white"
                            : "text-white group-hover:text-[#F5D8FF]"
                  }`}
                >
                  {tier.name}
                </h4>
                <p
                  className={`relative z-[1] mt-2 font-display text-lg font-semibold transition duration-500 group-hover:translate-y-[-1px] sm:mt-3 sm:text-2xl ${
                    isBronzeTier(tier.id)
                      ? "text-[#FFD6A6] group-hover:text-[#FFE7C8]"
                      : isSilverTier(tier.id)
                        ? "text-[#EAF4FF] group-hover:text-white"
                        : isGoldTier(tier.id)
                          ? "text-[#FFD86B] group-hover:text-[#FFE38F]"
                          : isDiamondTier(tier.id)
                            ? "text-[#F6FBFF] group-hover:text-white"
                            : "text-[#C4B5FD] group-hover:text-[#E9D5FF]"
                  }`}
                >
                  {tier.price}
                  <span className="text-[10px] font-normal text-zinc-500 sm:text-sm">
                    {p.moSuffix}
                  </span>
                </p>
                <ul
                  className={`relative z-[1] mt-3 flex-1 space-y-1.5 text-[11px] leading-snug sm:mt-4 sm:space-y-2 sm:text-xs ${
                    isSilverTier(tier.id) || isDiamondTier(tier.id)
                      ? "text-zinc-100"
                      : isGoldTier(tier.id)
                        ? "text-[#FFF3D9]"
                        : "text-zinc-200"
                  }`}
                >
                  {tier.features.map((f, featureIndex) => (
                    <li
                      key={f}
                      className="flex gap-1.5 transition duration-500 group-hover:translate-x-1 sm:gap-2"
                      style={{ transitionDelay: `${featureIndex * 35}ms` }}
                    >
                      <span
                        className={`shrink-0 transition duration-500 group-hover:scale-110 ${
                          isGoldTier(tier.id) ? "text-[#FFE38F]" : "text-[#86EFAC]"
                        }`}
                      >
                        ✓
                      </span>
                      <span className="transition duration-500 group-hover:text-white">{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

