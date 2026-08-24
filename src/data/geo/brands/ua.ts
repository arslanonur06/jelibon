import { EMOJISTAR_TELEGRAM_URL } from "@/constants";
import type { GeoBrandGuide } from "../types";

const MARKET = "ua" as const;

function b(name: string, slug: string, licenseNote?: string): GeoBrandGuide {
  return {
    marketId: MARKET,
    name,
    slug,
    telegramUrl: EMOJISTAR_TELEGRAM_URL,
    licenseNote,
  };
}

/** Україна — ліцензовані та популярні платформи */
export const uaBrandGuides: GeoBrandGuide[] = [
  b("BETKING", "betking", "Ліцензія PlayCity UA"),
  b("Favbet", "favbet"),
  b("Parimatch", "parimatch"),
  b("Betwinner", "betwinner"),
  b("Melbet", "melbet"),
  b("Cosmolot", "cosmolot"),
  b("Slotoking", "slotoking"),
  b("First Casino", "first-casino"),
  b("VBET", "vbet"),
  b("Pin-Up", "pin-up"),
  b("1xBet", "1xbet"),
  b("GG.BET", "gg-bet"),
  b("Slots City", "slots-city"),
  b("Supergra", "supergra"),
  b("GGBet", "ggbet"),
];
