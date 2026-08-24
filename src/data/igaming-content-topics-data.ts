/**
 * iGaming education hub — batch2 topic registry (60 articles).
 */
export type IgamingContentPillar =
  | "live-casino"
  | "slots"
  | "payments"
  | "crm"
  | "affiliate"
  | "mobile"
  | "regulation"
  | "casino-games"
  | "marketing"
  | "operator-tech";

export type IgamingContentTopic = {
  id: string;
  title: string;
  titleEn: string;
  excerpt: string;
  href: string;
  pillar: IgamingContentPillar;
};

export const IGAMING_PILLAR_LABELS: Record<
  IgamingContentPillar,
  { tr: string; en: string }
> = {
  "live-casino": { tr: "Canlı casino", en: "Live casino" },
  slots: { tr: "Slot oyunları", en: "Slot games" },
  payments: { tr: "Ödeme & bankacılık", en: "Payments & banking" },
  crm: { tr: "CRM & retention", en: "CRM & retention" },
  affiliate: { tr: "Affiliate", en: "Affiliate" },
  mobile: { tr: "Mobil casino", en: "Mobile casino" },
  regulation: { tr: "Mevzuat & uyum", en: "Regulation & compliance" },
  "casino-games": { tr: "Casino oyunları", en: "Casino games" },
  marketing: { tr: "Pazarlama kanalları", en: "Marketing channels" },
  "operator-tech": { tr: "Operatör teknolojisi", en: "Operator technology" },
};

function t(
  id: string,
  title: string,
  titleEn: string,
  excerpt: string,
  slug: string,
  pillar: IgamingContentPillar,
): IgamingContentTopic {
  return { id, title, titleEn, excerpt, href: `/blog/${slug}`, pillar };
}

export const IGAMING_CONTENT_TOPICS: IgamingContentTopic[] = [
  t("lc1", "Canlı casino nedir?", "What is live casino?", "Evolution, Pragmatic Live — gerçek krupiye akışı.", "canli-casino-nedir-rehber-2026", "live-casino"),
  t("lc2", "Canlı blackjack kuralları", "Live blackjack rules", "Hit, stand, double, split — başlangıç rehberi.", "canli-blackjack-kurallari-2026", "live-casino"),
  t("lc3", "Canlı rulet çeşitleri", "Live roulette types", "Avrupa, Amerikan, Lightning rulet farkları.", "canli-rulet-cesitleri-2026", "live-casino"),
  t("lc4", "Canlı baccarat", "Live baccarat", "Player, banker, tie — nasıl oynanır.", "canli-baccarat-nasil-oynanir-2026", "live-casino"),
  t("lc5", "Game show oyunları", "Game show games", "Crazy Time tarzı canlı show formatları.", "canli-casino-game-show-2026", "live-casino"),
  t("lc6", "Krupiye vs RNG", "Dealer vs RNG", "Canlı masa vs yazılım tablosu karşılaştırması.", "canli-krupiye-vs-rng-2026", "live-casino"),
  t("sl1", "Slot RTP nedir?", "What is slot RTP?", "Return to Player ve uzun vadeli beklenti.", "slot-rtp-nedir-rehber-2026", "slots"),
  t("sl2", "Volatilite rehberi", "Volatility guide", "Düşük vs yüksek volatilite slot farkı.", "slot-volatilite-dusuk-yuksek-2026", "slots"),
  t("sl3", "Megaways nasıl çalışır?", "How Megaways works", "Değişken makara ve ways mekaniği.", "megaways-slot-nasil-calisir-2026", "slots"),
  t("sl4", "Jackpot türleri", "Jackpot types", "Sabit vs progresif jackpot.", "jackpot-slot-turleri-2026", "slots"),
  t("sl5", "Slot terimleri", "Slot glossary", "Wild, scatter, payline, multiplier sözlüğü.", "slot-terimleri-sozluk-2026", "slots"),
  t("sl6", "Sağlayıcı karşılaştırma", "Provider comparison", "Pragmatic, NetEnt, EGT eğitim karşılaştırması.", "slot-saglayici-karsilastirma-2026", "slots"),
  t("py1", "Havale/EFT yatırım", "Bank transfer deposit", "Banka havalesi ile casino yatırımı.", "havale-eft-yatirim-rehber-2026", "payments"),
  t("py2", "Papara yatırım & çekim", "Papara deposit & withdrawal", "Papara ile casino ödeme derin rehber.", "papara-casino-yatirim-cekim-2026", "payments"),
  t("py3", "Kripto cüzdan", "Crypto wallet", "Casino için kripto cüzdan kurulumu.", "kripto-cuzdan-casino-rehber-2026", "payments"),
  t("py4", "Çekim süreleri", "Withdrawal times", "Doğrulama gecikmeleri ve beklenti.", "casino-cekim-sureleri-rehber-2026", "payments"),
  t("py5", "KYC belgeleri", "KYC documents", "Hesap doğrulama belge checklist'i.", "kyc-dogrulama-belgeleri-2026", "payments"),
  t("py6", "Ödeme güvenliği", "Payment security", "Oyuncu tarafı dolandırıcılık önleme.", "odeme-guvenligi-igaming-2026", "payments"),
  t("cr1", "Oyuncu yaşam döngüsü", "Player lifecycle", "CRM aşamaları: acquire → retain.", "oyuncu-yasam-dongusu-crm-2026", "crm"),
  t("cr2", "Churn önleme", "Churn prevention", "Operatör churn azaltma taktikleri.", "churn-onleme-igaming-2026", "crm"),
  t("cr3", "Reactivation", "Reactivation campaigns", "Uyuyan oyuncu geri kazanma.", "reactivation-kampanya-2026", "crm"),
  t("cr4", "Sadakat kademeleri", "Loyalty tiers", "Bronze/silver/gold tier tasarımı.", "sadakat-programi-kademe-2026", "crm"),
  t("cr5", "Push bildirim", "Push notifications", "Casino app push stratejisi.", "push-bildirim-casino-2026", "crm"),
  t("cr6", "Email marketing", "Email marketing", "Uyumlu iGaming email kampanyaları.", "email-marketing-igaming-2026", "crm"),
  t("af1", "RevShare vs CPA", "RevShare vs CPA", "Affiliate gelir modelleri karşılaştırması.", "affiliate-revshare-vs-cpa-2026", "affiliate"),
  t("af2", "Sub-affiliate", "Sub-affiliate networks", "Alt affiliate ağları.", "sub-affiliate-network-2026", "affiliate"),
  t("af3", "Postback tracking", "Postback tracking", "Affiliate dönüşüm takibi.", "affiliate-tracking-postback-2026", "affiliate"),
  t("af4", "Affiliate compliance TR", "Affiliate compliance TR", "Türkiye bağlamında affiliate uyumu.", "affiliate-compliance-turkey-2026", "affiliate"),
  t("af5", "Affiliate hub SEO", "Affiliate hub SEO", "Affiliate içerik hub SEO stratejisi.", "affiliate-content-hub-seo-2026", "affiliate"),
  t("af6", "Komisyon hesaplama", "Commission calculation", "Affiliate komisyon örnekleri.", "affiliate-commission-hesaplama-2026", "affiliate"),
  t("mb1", "App vs tarayıcı", "App vs browser", "Mobil casino uygulama karşılaştırması.", "mobil-casino-uygulama-vs-tarayici-2026", "mobile"),
  t("mb2", "PWA casino", "PWA casino", "Progressive Web App casino deneyimi.", "pwa-casino-rehber-2026", "mobile"),
  t("mb3", "Mobil ödeme", "Mobile payments", "Mobil cihazdan casino ödemeleri.", "mobil-odeme-casino-2026", "mobile"),
  t("mb4", "Mobil slot UX", "Mobile slot UX", "Mobil slot performans ipuçları.", "mobil-slot-performans-2026", "mobile"),
  t("mb5", "Mobil canlı casino", "Mobile live casino", "Telefondan canlı masa oynama.", "mobil-canli-casino-rehber-2026", "mobile"),
  t("mb6", "Mobil casino SEO", "Mobile casino SEO", "Mobil landing SEO.", "mobil-casino-seo-2026", "mobile"),
  t("rg1", "TR bahis mevzuatı", "TR gambling law", "Türkiye online bahis mevzuat özeti.", "turkiye-online-bahis-mevzuat-2026", "regulation"),
  t("rg2", "Curacao vs MGA", "Curacao vs MGA", "Lisans türleri oyuncu rehberi.", "curacao-vs-mga-lisans-2026", "regulation"),
  t("rg3", "Yaş doğrulama", "Age verification", "18+ doğrulama süreçleri.", "yas-dogrulama-igaming-2026", "regulation"),
  t("rg4", "AML/KYC operatör", "AML/KYC for operators", "Operatör uyumluluk temelleri.", "aml-kyc-operators-2026", "regulation"),
  t("rg5", "Sorumlu oyun araçları", "RG tools", "Limit, self-exclusion araçları.", "sorumlu-oyun-araclari-2026", "regulation"),
  t("rg6", "Lisans rozeti güven", "License badge trust", "Güven sinyalleri ve lisans gösterimi.", "lisans-rozet-guven-2026", "regulation"),
  t("cg1", "Texas Hold'em", "Texas Hold'em basics", "Poker başlangıç kuralları.", "poker-texas-holdem-baslangic-2026", "casino-games"),
  t("cg2", "Rulet stratejileri", "Roulette strategies", "Martingale ve riskler.", "rulet-strateji-martingale-2026", "casino-games"),
  t("cg3", "Blackjack strateji", "Blackjack strategy", "Temel strateji tablosu giriş.", "blackjack-temel-strateji-2026", "casino-games"),
  t("cg4", "Aviator/crash", "Aviator/crash games", "Crash oyun mekaniği.", "aviator-crash-oyunlari-2026", "casino-games"),
  t("cg5", "Sanal spor", "Virtual sports", "Sanal maç bahis rehberi.", "sanal-spor-bahis-rehber-2026", "casino-games"),
  t("cg6", "Bingo & loto", "Bingo & lottery", "Online bingo ve loto tarzı oyunlar.", "bingo-loto-casino-rehber-2026", "casino-games"),
  t("mk1", "Influencer marketing", "Influencer marketing", "Casino markaları için influencer.", "influencer-marketing-igaming-2026", "marketing"),
  t("mk2", "Retargeting funnel", "Retargeting funnel", "Yeniden hedefleme hunisi.", "retargeting-funnel-igaming-2026", "marketing"),
  t("mk3", "Native ads", "Native ads", "iGaming native reklam (genel).", "native-ads-igaming-2026", "marketing"),
  t("mk4", "Referral program", "Referral program", "Arkadaşını getir programları.", "referral-program-casino-2026", "marketing"),
  t("mk5", "Push traffic", "Push traffic acquisition", "Push bildirim trafik edinimi.", "push-traffic-acquisition-2026", "marketing"),
  t("mk6", "Organik sosyal", "Organic social", "Politika farkındalığı ile organik sosyal.", "sosyal-medya-igaming-organik-2026", "marketing"),
  t("ot1", "RNG adilliği", "RNG fairness", "Slot RNG ve adillik.", "rng-adilligi-slot-2026", "operator-tech"),
  t("ot2", "Provably fair", "Provably fair", "Kripto casino doğrulanabilir adillik.", "provably-fair-kripto-casino-2026", "operator-tech"),
  t("ot3", "Çoklu hesap", "Multi-account detection", "Operatör çoklu hesap tespiti.", "coklu-hesap-detect-2026", "operator-tech"),
  t("ot4", "Chargeback önleme", "Chargeback prevention", "iGaming chargeback yönetimi.", "chargeback-onleme-casino-2026", "operator-tech"),
  t("ot5", "Fraud sinyalleri", "Fraud signals", "Gerçek zamanlı fraud kuralları.", "fraud-signal-real-time-2026", "operator-tech"),
  t("ot6", "White-label seçim", "White-label selection", "Operatör platform seçimi.", "white-label-platform-secim-2026", "operator-tech"),
];

export function getIgamingTopicByBlogSlug(
  slug: string,
): IgamingContentTopic | undefined {
  return IGAMING_CONTENT_TOPICS.find((t) => t.href === `/blog/${slug}`);
}

export function getIgamingTopicsByPillar(
  pillar: IgamingContentPillar,
): IgamingContentTopic[] {
  return IGAMING_CONTENT_TOPICS.filter((t) => t.pillar === pillar);
}
