"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { servicePackages } from "@/data/packages";
import type { Locale } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils";
import { TELEGRAM_URL } from "@/constants";

/** Parse "$2,300" → 2300, or null for custom */
function parsePrice(raw?: string): number | null {
  if (!raw) return null;
  const n = parseInt(raw.replace(/[^0-9]/g, ""), 10);
  return isNaN(n) ? null : n;
}

function formatUSD(n: number): string {
  return "$" + n.toLocaleString("en-US");
}

export function PriceCalculator({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const calc = dict.calculator;
  const eyebrow =
    locale === "tr" ? "Fiyatlandırma" : locale === "ru" ? "Стоимость" : "Pricing";

  /* Localise service names using existing serviceNavLabelsById dict */
  const services = servicePackages.map((pkg) => ({
    id: pkg.id,
    name: dict.packages.serviceNavLabelsById[pkg.id] ?? pkg.title,
    fullName: dict.packages.servicePackagesById[pkg.id]?.title ?? pkg.title,
    price: parsePrice(pkg.price),
    priceRaw: pkg.price,
    isCustom: !pkg.price,
  }));

  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });

  const total = services
    .filter((s) => selected.has(s.id) && s.price !== null)
    .reduce((sum, s) => sum + (s.price ?? 0), 0);

  const hasCustomSelected = services.some(
    (s) => selected.has(s.id) && s.price === null,
  );
  const selectedCount = selected.size;

  return (
    <section
      id="calculator"
      className="relative scroll-mt-44 border-t border-white/10 bg-gradient-to-b from-[#050510]/60 to-[#080818]/80 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-[#E9A8FF]/90">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            {calc.heading}
          </h2>
          <p className="mt-3 text-zinc-400">{calc.description}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start sm:mt-12">
          {/* Service list */}
          <div className="grid gap-2 sm:grid-cols-2">
            {services.map((svc) => {
              const active = selected.has(svc.id);
              return (
                <button
                  key={svc.id}
                  onClick={() => toggle(svc.id)}
                  className={cn(
                    "group relative isolate flex items-center gap-3 overflow-hidden rounded-2xl border p-4 text-left shadow-[0_12px_24px_rgba(0,0,0,0.16)] transition duration-500 hover:-translate-y-0.5",
                    active
                      ? "border-[#FF69B4]/40 bg-[#1a1a2b]/96 shadow-[0_0_18px_rgba(255,105,180,0.12)]"
                      : "border-white/12 bg-[#12121f]/94 hover:border-white/20 hover:bg-[#171727]",
                  )}
                  aria-pressed={active}
                >
                  <span
                    className={cn(
                      "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] transition duration-500",
                      active ? "opacity-100" : "opacity-80 group-hover:opacity-100",
                    )}
                    aria-hidden
                  />
                  <span
                    className="pointer-events-none absolute inset-y-0 left-[-38%] w-1/2 -skew-x-12 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0)_100%)] opacity-0 blur-xl transition duration-700 group-hover:left-[122%] group-hover:opacity-100"
                    aria-hidden
                  />
                  {/* Checkbox */}
                  <span
                    className={cn(
                      "relative z-[1] flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition",
                      active
                        ? "border-[#FF69B4] bg-[#FF69B4]"
                        : "border-white/25 bg-white/[0.06]",
                    )}
                  >
                    {active && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                  </span>

                  <div className="relative z-[1] min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-white transition duration-500 group-hover:text-[#FCE7F3]">
                      {svc.fullName}
                    </p>
                    <p
                      className={cn(
                        "mt-0.5 text-xs transition duration-500",
                        active ? "text-[#F9A8D4]" : "text-zinc-400 group-hover:text-zinc-300",
                      )}
                    >
                      {svc.price !== null
                        ? `${formatUSD(svc.price)}${calc.monthSuffix}`
                        : calc.customLabel}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Total panel */}
          <div className="glass-panel isolate sticky top-28 flex flex-col gap-5 rounded-3xl p-6">
            <p className="text-sm font-medium text-zinc-400">
              {calc.totalLabel}
            </p>

            {selectedCount === 0 ? (
              <p className="text-sm text-zinc-500">{calc.noneSelected}</p>
            ) : (
              <>
                <p className="font-display text-4xl font-semibold tracking-tight text-white">
                  {total > 0 ? formatUSD(total) : "—"}
                  {total > 0 && (
                    <span className="ml-1 text-base font-normal text-zinc-400">
                      {calc.monthSuffix}
                    </span>
                  )}
                </p>

                <p className="text-xs text-zinc-500">
                  {selectedCount} {calc.selectedLabel}
                  {hasCustomSelected && (
                    <span className="ml-1 text-[#F9A8D4]">
                      + {calc.customLabel}
                    </span>
                  )}
                </p>

                <div className="h-px bg-white/10" />
              </>
            )}

            <p className="text-xs leading-relaxed text-zinc-500">
              {calc.estimateNote}
            </p>

            <Link
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-white/14 bg-[#171727]/96 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_28px_rgba(0,0,0,0.16)] transition duration-500 hover:-translate-y-0.5 hover:border-white/22 hover:bg-[#1b1b2d]"
            >
              <span
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))]"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute inset-y-0 left-[-38%] w-1/2 -skew-x-12 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.14)_50%,rgba(255,255,255,0)_100%)] opacity-0 blur-xl transition duration-700 group-hover:left-[122%] group-hover:opacity-100"
                aria-hidden
              />
              <span className="relative z-[1]">{calc.getQuote}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
