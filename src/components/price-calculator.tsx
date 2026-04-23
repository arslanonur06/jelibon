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
                    "relative isolate flex items-center gap-3 rounded-2xl border p-4 text-left transition",
                    active
                      ? "border-[#FF69B4]/50 bg-[#FF69B4]/15 shadow-[0_0_18px_rgba(255,105,180,0.15)]"
                      : "border-white/15 bg-[#12121f] hover:border-white/25 hover:bg-[#16162a]",
                  )}
                  aria-pressed={active}
                >
                  {/* Checkbox */}
                  <span
                    className={cn(
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition",
                      active
                        ? "border-[#FF69B4] bg-[#FF69B4]"
                        : "border-white/25 bg-transparent",
                    )}
                  >
                    {active && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-white">
                      {svc.fullName}
                    </p>
                    <p
                      className={cn(
                        "mt-0.5 text-xs",
                        active ? "text-[#F9A8D4]" : "text-zinc-500",
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
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(255,105,180,0.22)] transition hover:-translate-y-0.5"
            >
              <span
                className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.88] transition duration-300 group-hover:scale-[1.04]"
                style={{ backgroundImage: "url('/assets/button-cta-bg.png')" }}
                aria-hidden
              />
              <span
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,24,0.22)_0%,rgba(8,8,24,0.38)_100%)]"
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
