import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";
import { TESTIMONIALS } from "@/data/testimonials";

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-3.5 w-3.5 fill-[#FDE047] text-[#FDE047]"
          viewBox="0 0 20 20"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const locale = getLocale();
  const dict = getDictionary(locale);
  const items = TESTIMONIALS[locale];

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-44 border-t border-white/10 bg-[#050510]/30 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-[#E9A8FF]/90">
            Partners
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            {dict.testimonials.heading}
          </h2>
          <p className="mt-3 text-zinc-400">{dict.testimonials.subheading}</p>
        </div>

        {/* SiGMA & industry recognition */}
        <div className="glass-panel group relative mt-10 max-w-3xl overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:px-6">
          <div className="pointer-events-none absolute inset-x-[-12%] top-[-45%] h-28 rounded-full bg-[radial-gradient(circle,rgba(233,168,255,0.2)_0%,rgba(233,168,255,0)_70%)] opacity-70 blur-2xl" />
          <div className="pointer-events-none absolute inset-y-0 left-[-35%] w-1/2 -skew-x-12 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)] opacity-0 blur-xl transition duration-700 group-hover:left-[120%] group-hover:opacity-100" />
          <p className="font-display text-xs uppercase tracking-[0.25em] text-[#E9A8FF]/80">
            {dict.testimonials.sigmaHeading}
          </p>
          <p className="mt-2 text-xs text-zinc-500 sm:text-sm">
            {dict.testimonials.sigmaSubtext}
          </p>
          <ul className="mt-4 list-none space-y-2.5 text-sm text-zinc-300">
            {dict.testimonials.sigmaAwards.map((line) => (
              <li key={line} className="flex gap-2.5">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF69B4]/70"
                  aria-hidden
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, index) => (
            <div
              key={t.id}
              className="glass-panel group relative isolate flex flex-col gap-5 overflow-hidden rounded-3xl border border-white/12 bg-white/[0.05] p-6 shadow-[0_22px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_30px_70px_rgba(0,0,0,0.28)]"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-[-10%] top-[-26%] h-28 rounded-full bg-[radial-gradient(circle,rgba(255,105,180,0.18)_0%,rgba(255,105,180,0)_68%)] opacity-0 blur-2xl transition duration-500 group-hover:translate-y-2 group-hover:opacity-100"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-y-0 left-[-38%] w-1/2 -skew-x-12 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0)_100%)] opacity-0 blur-xl transition duration-700 group-hover:left-[122%] group-hover:opacity-100"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-70"
                aria-hidden
              />
              {/* Decorative large quote mark */}
              <span
                className="pointer-events-none absolute right-5 top-3 z-0 select-none font-display text-7xl font-bold leading-none text-white/[0.08] transition duration-500 group-hover:scale-110 group-hover:text-white/[0.12]"
                aria-hidden
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div
                className="relative z-[1] transition duration-500 group-hover:translate-y-[-1px]"
                style={{ transitionDelay: `${index * 25}ms` }}
              >
                <StarRow count={t.stars} />
              </div>

              {/* Quote */}
              <p className="relative z-[1] flex-1 text-sm leading-relaxed text-zinc-100 transition duration-500 group-hover:text-white">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Metric badge */}
              <div className="relative z-[1] inline-flex w-fit items-center gap-1.5 rounded-full border border-[#FF69B4]/30 bg-[#FF69B4]/10 px-3 py-1 transition duration-500 group-hover:border-[#FF69B4]/55 group-hover:bg-[#FF69B4]/15 group-hover:shadow-[0_0_24px_rgba(255,105,180,0.16)]">
                <span className="font-display text-lg font-semibold text-[#F9A8D4] transition duration-500 group-hover:text-[#FFD2EE]">
                  {t.metric}
                </span>
                <span className="text-xs text-zinc-400 transition duration-500 group-hover:text-zinc-300">
                  {t.metricLabel}
                </span>
              </div>

              {/* Author row */}
              <div className="relative z-[1] flex items-center gap-3 border-t border-white/10 pt-4 transition duration-500 group-hover:border-white/20">
                {/* Gradient avatar */}
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} font-display text-sm font-semibold text-white shadow-lg transition duration-500 group-hover:scale-110 group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.28)]`}
                >
                  {t.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white transition duration-500 group-hover:text-[#F8D8FF]">
                    {t.role}
                  </p>
                  <p className="text-xs text-zinc-500 transition duration-500 group-hover:text-zinc-300">
                    {t.flag}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
