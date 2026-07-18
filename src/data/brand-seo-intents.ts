/** Marka + niyet birleşimleri — meta keywords ve görünür metin için */
export const BRAND_SEARCH_INTENTS = [
  "güncel giriş",
  "güncel giriş adresi",
  "güncel adres",
  "giris",
  "giriş",
  "mobil giriş",
  "site",
  "adres",
  "deneme bonusu",
  "deneme bonusu veren siteler",
  "yatırımsız bonus",
  "yatırım bonusu",
  "kayıp bonusu",
  "haftalık kayıp bonusu",
  "jest bonusu",
  "doğum günü bonusu",
  "freespin",
  "hoş geldin bonusu",
  "kayıt bonusu",
  "bonus",
  "bonusları",
  "özel oran",
  "kredi kartı yatırım",
] as const;

export type BrandSearchIntent = (typeof BRAND_SEARCH_INTENTS)[number];
