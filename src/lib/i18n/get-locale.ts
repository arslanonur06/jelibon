import { cookies } from "next/headers";
import type { Locale } from "./locales";
import { LOCALES, LOCALE_COOKIE_NAME } from "./locales";

export function getLocale(): Locale {
  const cookieStore = cookies();
  const value = cookieStore.get(LOCALE_COOKIE_NAME)?.value;

  if (value && LOCALES.includes(value as Locale)) return value as Locale;
  return "en";
}

