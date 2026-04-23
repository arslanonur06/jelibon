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
              className="glass-panel group relative isolate flex scroll-mt-52 flex-col overflow-hidden rounded-2xl bg-transparent p-4 transition hover:-translate-y-1 sm:rounded-3xl sm:p-6"
            >
              <div
                className={`pointer-events-none absolute inset-[-8%] bg-cover transition duration-500 group-hover:scale-[1.05] ${COLORWAYS_ROTATIONS[index % COLORWAYS_ROTATIONS.length]} ${COLORWAYS_STRENGTH[index % COLORWAYS_STRENGTH.length]}`}
                style={{
                  backgroundImage: colorwaysBackground,
                  backgroundPosition:
                    COLORWAYS_POSITIONS[index % COLORWAYS_POSITIONS.length],
                  backgroundSize: "cover",
                }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.42)_0%,rgba(5,5,16,0.68)_100%)]"
                aria-hidden
              />
              <div className="relative z-[1] flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                    {pkg.title}
                  </h3>
                  {pkg.subtitle ? (
                    <p className="mt-0.5 text-xs text-zinc-400 sm:text-sm">
                      {pkg.subtitle}
                    </p>
                  ) : null}
                </div>
                {pkg.badge ? (
                  <span className="shrink-0 rounded-full border border-[#32CD32]/40 bg-[#32CD32]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#86EFAC] sm:px-3 sm:py-1 sm:text-xs">
                    {pkg.badge}
                  </span>
                ) : null}
              </div>

              <div className="relative z-[1] mt-4 sm:mt-5">
                {pkg.priceHeadline ? (
                  <p className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                    {pkg.priceHeadline}
                  </p>
                ) : (
                  <p className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
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
                {pkg.features.map((line) => (
                  <li key={line} className="flex gap-2 sm:gap-3">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gradient-to-r from-[#FF69B4] to-[#00D4FF] sm:mt-1.5 sm:h-1.5 sm:w-1.5" />
                    <span>{line}</span>
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
            {growthPackageTiersLocalized.map((tier, index) => (
              <article
                key={tier.id}
                className="glass-panel group relative isolate flex min-h-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-transparent p-3 transition hover:-translate-y-1 sm:rounded-2xl sm:p-5"
              >
                <div
                  className={`pointer-events-none absolute inset-[-8%] bg-cover transition duration-500 group-hover:scale-[1.05] ${COLORWAYS_ROTATIONS[(index + 1) % COLORWAYS_ROTATIONS.length]} ${COLORWAYS_STRENGTH[(index + 2) % COLORWAYS_STRENGTH.length]}`}
                  style={{
                    backgroundImage: colorwaysBackground,
                    backgroundPosition:
                      COLORWAYS_POSITIONS[(index + 2) % COLORWAYS_POSITIONS.length],
                    backgroundSize: "cover",
                  }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.48)_0%,rgba(5,5,16,0.74)_100%)]"
                  aria-hidden
                />
                <h4 className="relative z-[1] font-display text-sm font-semibold leading-tight text-white sm:text-lg">
                  {tier.name}
                </h4>
                <p className="relative z-[1] mt-2 font-display text-lg font-semibold text-[#C4B5FD] sm:mt-3 sm:text-2xl">
                  {tier.price}
                  <span className="text-[10px] font-normal text-zinc-500 sm:text-sm">
                    {p.moSuffix}
                  </span>
                </p>
                <ul className="relative z-[1] mt-3 flex-1 space-y-1.5 text-[11px] leading-snug text-zinc-200 sm:mt-4 sm:space-y-2 sm:text-xs">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-1.5 sm:gap-2">
                      <span className="shrink-0 text-[#86EFAC]">✓</span>
                      <span>{f}</span>
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

