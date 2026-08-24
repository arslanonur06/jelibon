import { EMOJISTAR_TELEGRAM_URL } from "@/constants";
import type { GeoBrandGuide } from "../types";

const MARKET = "az" as const;

function b(name: string, slug: string, licenseNote?: string): GeoBrandGuide {
  return {
    marketId: MARKET,
    name,
    slug,
    telegramUrl: EMOJISTAR_TELEGRAM_URL,
    licenseNote,
  };
}

/** Azərbaycan — populyar bukmeker və casino brendləri */
export const azBrandGuides: GeoBrandGuide[] = [
  b("Melbet", "melbet", "Beynəlxalq operator; AZ dil və AZN"),
  b("1xBet", "1xbet"),
  b("Pin-Up", "pin-up"),
  b("Mostbet", "mostbet"),
  b("Betwinner", "betwinner"),
  b("22Bet", "22bet"),
  b("1win", "1win"),
  b("Linebet", "linebet"),
  b("Megapari", "megapari"),
  b("Parimatch", "parimatch"),
  b("Stake", "stake"),
  b("BC.Game", "bc-game"),
  b("Fonbet", "fonbet"),
  b("Leon", "leon"),
  b("Marathonbet", "marathonbet"),
];
