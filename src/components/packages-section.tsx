import { servicePackages } from "@/data/packages";

export function PackagesSection() {
  return (
    <section id="packages" className="relative scroll-mt-28 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Offer packages
          </h2>
          <p className="mt-3 text-zinc-400">
            Transparent monthly investments. Ad budgets and placement costs are
            billed separately by the client where noted.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {servicePackages.map((pkg) => (
            <article
              key={pkg.id}
              className="glass-panel flex flex-col rounded-3xl p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {pkg.title}
                  </h3>
                  {pkg.subtitle ? (
                    <p className="mt-1 text-sm text-zinc-400">{pkg.subtitle}</p>
                  ) : null}
                </div>
                {pkg.badge ? (
                  <span className="rounded-full border border-[#32CD32]/40 bg-[#32CD32]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#86EFAC]">
                    {pkg.badge}
                  </span>
                ) : null}
              </div>

              <div className="mt-6">
                <p className="font-display text-3xl font-semibold tracking-tight text-white">
                  {pkg.price}
                  <span className="text-lg font-normal text-zinc-400">
                    {" "}
                    / month
                  </span>
                </p>
                {pkg.billingNote ? (
                  <p className="mt-2 text-sm text-zinc-500">{pkg.billingNote}</p>
                ) : null}
              </div>

              <ul className="mt-6 flex-1 space-y-3 text-sm text-zinc-200">
                {pkg.features.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#FF69B4] to-[#00D4FF]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
