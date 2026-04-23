import { getGrowthPillars } from "@/data/pillars";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";

const PINKDOT_POSITIONS = [
  "left top",
  "center top",
  "right top",
  "left center",
  "center center",
  "right bottom",
] as const;

const PINKDOT_ROTATIONS = [
  "-rotate-[6deg]",
  "rotate-[4deg]",
  "-rotate-[3deg]",
  "rotate-[6deg]",
  "-rotate-[5deg]",
  "rotate-[3deg]",
] as const;

const PINKDOT_OPACITY = [
  "opacity-[0.74] group-hover:opacity-[0.84]",
  "opacity-[0.66] group-hover:opacity-[0.76]",
  "opacity-[0.8] group-hover:opacity-[0.9]",
  "opacity-[0.7] group-hover:opacity-[0.8]",
  "opacity-[0.76] group-hover:opacity-[0.86]",
  "opacity-[0.68] group-hover:opacity-[0.78]",
] as const;

export function GrowthPillars() {
  const locale = getLocale();
  const dict = getDictionary(locale);
  const growthPillars = getGrowthPillars(locale);

  return (
    <section
      id="solutions"
      className="relative scroll-mt-44 bg-[#050510]/50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-[#E9A8FF]/90">
            {locale === "tr"
              ? "Büyüme ve yazılım"
              : locale === "ru"
                ? "Рост и софт"
                : "Growth & software solutions"}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            {dict.growthPillars.heading}
          </h2>
          <p className="mt-3 text-zinc-400">{dict.growthPillars.description}</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {growthPillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="glass-panel group relative isolate overflow-hidden rounded-3xl bg-transparent p-6 transition hover:-translate-y-1 hover:border-[#FF69B4]/30"
            >
              <div
                className={`pointer-events-none absolute inset-[-10%] bg-cover transition duration-500 group-hover:scale-[1.06] ${PINKDOT_ROTATIONS[index % PINKDOT_ROTATIONS.length]} ${PINKDOT_OPACITY[index % PINKDOT_OPACITY.length]}`}
                style={{
                  backgroundImage: "url('/assets/pinkdot-card-bg.png')",
                  backgroundPosition:
                    PINKDOT_POSITIONS[index % PINKDOT_POSITIONS.length],
                  backgroundSize: "cover",
                }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.46)_0%,rgba(5,5,16,0.68)_100%)]"
                aria-hidden
              />
              <div
                className={`pointer-events-none absolute -right-10 -top-10 z-0 h-40 w-40 rounded-full bg-gradient-to-br ${pillar.accent} opacity-25 blur-3xl transition group-hover:opacity-40`}
              />
              <h3 className="relative z-[1] font-display text-lg font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="relative z-[1] mt-3 text-sm leading-relaxed text-zinc-200">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

