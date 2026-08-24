import type { SigmaExhibitor } from "../types";

function ex(
  name: string,
  slug: string,
  category: string,
  description: string,
  sigmaEvents: readonly string[] = ["SiGMA Euro-Med Malta", "SiGMA Rome"],
): SigmaExhibitor {
  return { name, slug, category, description, sigmaEvents };
}

/** SiGMA fuarlarında sık görünen iGaming B2B firmaları */
export const sigmaExhibitors: SigmaExhibitor[] = [
  ex(
    "Soft2Bet",
    "soft2bet",
    "Platform / Turnkey",
    "MEGA retention motoru ile Betinia, CampoBet ve ToonieBet gibi markaları işleten turnkey sağlayıcı.",
  ),
  ex(
    "1xBet",
    "1xbet",
    "Operator / Sponsor",
    "Küresel spor bahisleri ve casino operatörü; SiGMA sponsorları arasında.",
  ),
  ex(
    "BetConstruct",
    "betconstruct",
    "Platform",
    "White-label spor bahisleri ve casino altyapısı; 700+ partner marka.",
  ),
  ex(
    "SOFTSWISS",
    "softswiss",
    "Platform / Casino Aggregator",
    "Casino aggregator, sportsbook ve crypto casino çözümleri.",
  ),
  ex(
    "EveryMatrix",
    "everymatrix",
    "Platform",
    "Modüler iGaming platformu: sportsbook, casino, ödeme, affiliate.",
  ),
  ex(
    "Altenar",
    "altenar",
    "Sportsbook",
    "B2B spor bahisleri ve virtual sports yazılımı.",
  ),
  ex(
    "Pragmatic Play",
    "pragmatic-play",
    "Game Provider",
    "Slot, live casino ve bingo içerik stüdyosu.",
  ),
  ex(
    "Evolution",
    "evolution",
    "Live Casino",
    "Canlı casino ve game show lideri.",
  ),
  ex(
    "Digitain",
    "digitain",
    "Sportsbook Engine",
    "Spor bahisleri motoru; Doğu Avrupa ve TR pazarında yaygın.",
  ),
  ex(
    "Pronet Gaming",
    "pronet-gaming",
    "Platform",
    "1996’dan beri online bahis altyapısı; Türkiye pazarında yaygın.",
  ),
  ex(
    "EGT Digital",
    "egt-digital",
    "Game Provider",
    "Slot ve dijital casino içerikleri; SiGMA Euro-Med katılımcısı.",
  ),
  ex(
    "Spinocchio",
    "spinocchio",
    "Game Studio",
    "Slot oyun stüdyosu; Malta fuarlarında aktif.",
  ),
  ex(
    "Campeón Gaming",
    "campeon-gaming",
    "Platform / Managed Services",
    "Modüler platform ve managed services; SiGMA Rome katılımcısı.",
  ),
  ex(
    "Slotegrator",
    "slotegrator",
    "Aggregator",
    "Casino oyun aggregation ve API hub.",
  ),
  ex(
    "Betby",
    "betby",
    "Sportsbook",
    "AI destekli B2B sportsbook widget ve platform.",
  ),
  ex(
    "Relax Gaming",
    "relax-gaming",
    "Game Provider / Aggregator",
    "Slot stüdyosu ve powered-by aggregation.",
  ),
  ex(
    "Hacksaw Gaming",
    "hacksaw-gaming",
    "Game Provider",
    "Yüksek volatiliteli slot içerikleri.",
  ),
  ex(
    "Spribe",
    "spribe",
    "Game Provider",
    "Aviator ve crash oyunları ile tanınır.",
  ),
  ex(
    "Playtech",
    "playtech",
    "Platform / Games",
    "Köklü casino ve sportsbook teknoloji sağlayıcısı.",
  ),
  ex(
    "Games Global",
    "games-global",
    "Game Provider",
    "Microgaming içerik portföyü (Games Global).",
  ),
  ex(
    "Push Gaming",
    "push-gaming",
    "Game Provider",
    "Mobil-first slot stüdyosu.",
  ),
  ex(
    "Endorphina",
    "endorphina",
    "Game Provider",
    "Slot içerik stüdyosu; Orta Avrupa kökenli.",
  ),
  ex(
    "Wazdan",
    "wazdan",
    "Game Provider",
    "Slot ve RNG oyunları.",
  ),
  ex(
    "BGaming",
    "bgaming",
    "Game Provider",
    "SOFTSWISS ekosisteminde slot stüdyosu.",
  ),
  ex(
    "Smartsoft Gaming",
    "smartsoft-gaming",
    "Game Provider",
    "Crash ve instant oyunlar.",
  ),
  ex(
    "3 Oaks Gaming",
    "3-oaks-gaming",
    "Game Provider",
    "Hold & Win slot serileri.",
  ),
  ex(
    "Salsa Technology",
    "salsa-technology",
    "Platform",
    "LatAm ve global turnkey platform.",
  ),
  ex(
    "SoftGamings",
    "softgamings",
    "Turnkey",
    "Turnkey casino ve sportsbook çözümleri.",
  ),
  ex(
    "Afflyfe",
    "afflyfe",
    "Affiliate / Marketing",
    "iGaming affiliate çözümleri; SiGMA Euro-Med katılımcısı.",
  ),
  ex(
    "Propeller Ads",
    "propeller-ads",
    "Ad Network",
    "Performance reklam ağı; iGaming trafiği.",
  ),
  ex(
    "RollerAds",
    "rollerads",
    "Ad Network",
    "Push ve pop trafik ağı.",
  ),
  ex(
    "Betblocker",
    "betblocker",
    "Responsible Gaming",
    "Sorumlu oyun / self-exclusion aracı.",
  ),
  ex(
    "Malta Gaming Authority",
    "malta-gaming-authority",
    "Regulator",
    "MGA — Malta oyun düzenleyicisi; SiGMA standlarında.",
  ),
  ex(
    "Starpago",
    "starpago",
    "Payments",
    "Ödeme altyapısı; SiGMA Euro-Med.",
  ),
  ex(
    "Passimpay",
    "passimpay",
    "Payments",
    "Kripto ve fiat ödeme çözümleri.",
  ),
  ex(
    "Vegangster",
    "vegangster",
    "Platform",
    "Casino platform sağlayıcısı.",
  ),
  ex(
    "Trifecta Gaming",
    "trifecta-gaming",
    "Services",
    "iGaming danışmanlık ve operasyon.",
  ),
  ex(
    "Othello Software",
    "othello-software",
    "Software",
    "Bahis yazılım çözümleri.",
  ),
  ex(
    "White Label Coders",
    "white-label-coders",
    "Development",
    "White-label geliştirme ve entegrasyon.",
  ),
  ex(
    "Manavia Limited",
    "manavia-limited",
    "Services",
    "iGaming operasyon ve lisans danışmanlığı.",
  ),
  ex(
    "Mera Gaming",
    "mera-gaming",
    "Platform",
    "Platform ve oyun entegrasyonu.",
  ),
  ex(
    "PoggiPlay",
    "poggiplay",
    "Game Provider",
    "Slot stüdyosu.",
  ),
  ex(
    "EXA Gaming",
    "exa-gaming",
    "Game Provider",
    "Casino içerik geliştirici.",
  ),
  ex(
    "CyberBetX",
    "cyberbetx",
    "Platform",
    "Bahis platform teknolojisi.",
  ),
  ex(
    "Source Code Lab",
    "source-code-lab",
    "Development",
    "Özel iGaming yazılım geliştirme.",
  ),
  ex(
    "Hyperion Rapid Solutions",
    "hyperion-rapid-solutions",
    "Payments / Tech",
    "Hızlı entegrasyon ve ödeme çözümleri.",
  ),
  ex(
    "Intergo Telecom",
    "intergo-telecom",
    "SMS / Telecom",
    "OTP ve SMS doğrulama altyapısı.",
  ),
  ex(
    "ValletaPay",
    "valletapay",
    "Payments",
    "Malta merkezli ödeme hizmetleri.",
  ),
  ex(
    "Offer 18",
    "offer-18",
    "Affiliate Tracking",
    "Affiliate takip ve attribution.",
  ),
  ex(
    "Blask",
    "blask",
    "Analytics",
    "iGaming pazar analitiği.",
  ),
];

export const sigmaExhibitorBySlug = new Map(
  sigmaExhibitors.map((item) => [item.slug, item] as const),
);
