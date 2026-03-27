import { growthPillars } from "@/data/pillars";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";

export function GrowthPillars() {
  const locale = getLocale();
  const dict = getDictionary(locale);

  return (
    <section
      id="solutions"
      className="relative scroll-mt-44 bg-[#050510]/30 py-16 backdrop-blur-[2px] sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-[#E9A8FF]/90">
            Growth &amp; software solutions
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            {dict.growthPillars.heading}
          </h2>
          <p className="mt-3 text-zinc-400">{dict.growthPillars.description}</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {growthPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="glass-panel group relative overflow-hidden rounded-3xl p-6 transition hover:border-[#FF69B4]/30"
            >
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${pillar.accent} opacity-25 blur-3xl transition group-hover:opacity-40`}
              />
              <h3 className="font-display text-lg font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

