"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Locale } from "@/lib/i18n/locales";
import { LOCALE_COOKIE_NAME, LOCALES } from "@/lib/i18n/locales";
import { DICTIONARIES } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  initialLocale: Locale;
};

export function LanguageSwitcher({ initialLocale }: LanguageSwitcherProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLocale(initialLocale);
  }, [initialLocale]);

  const labels = useMemo(() => {
    return {
      en: DICTIONARIES.en.language.en,
      tr: DICTIONARIES.tr.language.tr,
      ru: DICTIONARIES.ru.language.ru,
    };
  }, []);

  const short = locale === "en" ? "EN" : locale === "tr" ? "TR" : "RU";

  const setAndReload = (nextLocale: Locale) => {
    setOpen(false);
    setLocale(nextLocale);
    document.cookie = `${LOCALE_COOKIE_NAME}=${encodeURIComponent(
      nextLocale,
    )}; path=/; max-age=31536000; SameSite=Lax`;
    document.documentElement.lang = nextLocale;
    window.setTimeout(() => {
      window.location.reload();
    }, 50);
  };

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        id="language-switcher-button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="language-switcher-listbox"
        className={cn(
          "flex touch-manipulation items-center gap-1 rounded-full border border-white/12 bg-white/[0.06] px-2 py-1.5 text-xs font-semibold text-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.2)] transition hover:bg-white/10 sm:px-2.5 sm:py-2 sm:text-sm",
          open && "bg-white/10 ring-1 ring-[#FF69B4]/35",
        )}
      >
        <span className="min-w-[1.75rem] tabular-nums">{short}</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 shrink-0 text-zinc-300 transition-transform duration-200 sm:h-4 sm:w-4",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>

      {open ? (
        <ul
          id="language-switcher-listbox"
          role="listbox"
          aria-labelledby="language-switcher-button"
          className="absolute right-0 top-[calc(100%+0.375rem)] z-[200] min-w-[10.5rem] overflow-hidden rounded-xl border border-white/[0.14] bg-[#0c0c18] py-1 shadow-[0_12px_40px_rgba(0,0,0,0.55)] ring-1 ring-black/40"
        >
          {LOCALES.map((l) => {
            const isActive = locale === l;
            return (
              <li key={l} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => setAndReload(l)}
                  className={cn(
                    "flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition",
                    isActive
                      ? "bg-gradient-to-r from-[#FF69B4]/25 via-[#A020F0]/20 to-[#00D4FF]/15 text-white"
                      : "text-zinc-200 hover:bg-white/[0.08]",
                  )}
                >
                  <span className="w-7 tabular-nums text-xs font-bold text-zinc-400">
                    {l === "en" ? "EN" : l === "tr" ? "TR" : "RU"}
                  </span>
                  <span className="font-medium">{labels[l]}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
