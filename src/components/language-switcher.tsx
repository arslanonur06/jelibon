"use client";

import { useEffect, useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n/locales";
import { LOCALE_COOKIE_NAME, LOCALES } from "@/lib/i18n/locales";
import { DICTIONARIES } from "@/lib/i18n/dictionaries";

function getCookieLocale(): Locale {
  if (typeof document === "undefined") return "en";
  const match = document.cookie
    .split(";")
    .map((s) => s.trim())
    .find((c) => c.startsWith(`${LOCALE_COOKIE_NAME}=`));

  const value = match?.split("=").at(1);
  if (value && LOCALES.includes(value as Locale)) return value as Locale;
  return "en";
}

export function LanguageSwitcher() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    setLocale(getCookieLocale());
  }, []);

  const labels = useMemo(() => {
    return {
      en: DICTIONARIES.en.language.en,
      tr: DICTIONARIES.tr.language.tr,
      ru: DICTIONARIES.ru.language.ru,
    };
  }, []);

  const setAndReload = (nextLocale: Locale) => {
    setLocale(nextLocale);
    document.cookie = `${LOCALE_COOKIE_NAME}=${encodeURIComponent(
      nextLocale,
    )}; path=/; max-age=31536000; SameSite=Lax`;
    document.documentElement.lang = nextLocale;
    // Reload so server components re-render using the new cookie.
    // Small delay so the cookie is definitely written before reload.
    window.setTimeout(() => {
      window.location.reload();
    }, 50);
  };

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1.5 py-1"
      aria-label="Language"
    >
      {LOCALES.map((l) => {
        const isActive = locale === l;
        const short = l === "en" ? "EN" : l === "tr" ? "TR" : "RU";
        return (
          <button
            key={l}
            type="button"
            onClick={() => setAndReload(l)}
            className={[
              "rounded-full px-2 py-1 text-xs font-semibold transition",
              isActive
                ? "bg-gradient-to-r from-[#FF69B4] via-[#A020F0] to-[#00D4FF] text-white"
                : "text-zinc-200 hover:bg-white/10",
            ].join(" ")}
            aria-current={isActive ? "true" : undefined}
            aria-label={labels[l]}
          >
            {short}
          </button>
        );
      })}
    </div>
  );
}

