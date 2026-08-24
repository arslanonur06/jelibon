import { EMOJISTAR_TELEGRAM_URL } from "@/constants";
import type { GeoBrandGuide } from "../types";

const MARKET = "ru" as const;

function b(name: string, slug: string, licenseNote?: string): GeoBrandGuide {
  return {
    marketId: MARKET,
    name,
    slug,
    telegramUrl: EMOJISTAR_TELEGRAM_URL,
    licenseNote,
  };
}

/** Россия — популярные букмекеры и казино */
export const ruBrandGuides: GeoBrandGuide[] = [
  b("Fonbet", "fonbet"),
  b("Winline", "winline"),
  b("Leon", "leon"),
  b("Melbet", "melbet"),
  b("1xBet", "1xbet"),
  b("Betwinner", "betwinner"),
  b("Pin-Up", "pin-up"),
  b("Liga Stavok", "liga-stavok"),
  b("Marathonbet", "marathonbet"),
  b("Olimp", "olimp"),
  b("Zenit", "zenit"),
  b("Baltbet", "baltbet"),
  b("Tennisi", "tennisi"),
  b("Parimatch", "parimatch"),
  b("Mostbet", "mostbet"),
  b("1win", "1win"),
  b("22Bet", "22bet"),
  b("Linebet", "linebet"),
  b("BetBoom", "betboom"),
  b("Betcity", "betcity"),
];
