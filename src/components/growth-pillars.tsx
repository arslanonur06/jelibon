import { growthPillars } from "@/data/pillars";

export function GrowthPillars() {
  return (
    <section
      id="solutions"
      className="relative scroll-mt-28 border-t border-white/10 bg-[#050510]/40 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Growth solutions
          </h2>
          <p className="mt-3 text-zinc-400">
            From traffic acquisition to brand protection—complete marketing
            solutions tailored for adult iGaming operators.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
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
