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
        <div className="mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 sm:px-6">
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
          {items.map((t) => (
            <div
              key={t.id}
              className="glass-panel relative isolate flex flex-col gap-5 overflow-hidden rounded-3xl p-6"
            >
              {/* Decorative large quote mark */}
              <span
                className="pointer-events-none absolute right-5 top-3 z-0 font-display text-7xl font-bold leading-none text-white/[0.06] select-none"
                aria-hidden
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div className="relative z-[1]">
                <StarRow count={t.stars} />
              </div>

              {/* Quote */}
              <p className="relative z-[1] flex-1 text-sm leading-relaxed text-zinc-100">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Metric badge */}
              <div className="relative z-[1] inline-flex w-fit items-center gap-1.5 rounded-full border border-[#FF69B4]/30 bg-[#FF69B4]/10 px-3 py-1">
                <span className="font-display text-lg font-semibold text-[#F9A8D4]">
                  {t.metric}
                </span>
                <span className="text-xs text-zinc-400">{t.metricLabel}</span>
              </div>

              {/* Author row */}
              <div className="relative z-[1] flex items-center gap-3 border-t border-white/10 pt-4">
                {/* Gradient avatar */}
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} font-display text-sm font-semibold text-white shadow-lg`}
                >
                  {t.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white">
                    {t.role}
                  </p>
                  <p className="text-xs text-zinc-500">{t.flag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
