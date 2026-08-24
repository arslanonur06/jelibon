export type ServicePillar =
  | "traffic"
  | "creative"
  | "seo"
  | "telegram"
  | "ai"
  | "protection"
  | "software"
  | "sports"
  | "casino"
  | "geo";

export type ServiceTopic = {
  id: string;
  title: string;
  titleEn: string;
  keywords: readonly string[];
  href: string;
  excerpt: string;
  pillar: ServicePillar;
};

export const SERVICE_PILLAR_LABELS: Record<
  ServicePillar,
  { tr: string; en: string }
> = {
  traffic: { tr: "Trafik edinimi", en: "Traffic acquisition" },
  creative: { tr: "Kreatif üretim", en: "Creative production" },
  seo: { tr: "SEO ve içerik", en: "SEO & content" },
  telegram: { tr: "Telegram büyüme", en: "Telegram growth" },
  ai: { tr: "AI otomasyon", en: "AI automation" },
  protection: { tr: "Marka koruması", en: "Brand protection" },
  software: { tr: "Özel yazılım", en: "Custom software" },
  sports: { tr: "Spor bahisleri", en: "Sports betting" },
  casino: { tr: "Casino & bonus", en: "Casino & bonus" },
  geo: { tr: "Geo pazarlar", en: "Geo markets" },
};
