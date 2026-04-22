import type { Locale } from "@/lib/i18n/locales";

const PILLAR_ACCENTS = [
  "from-[#FF69B4] to-[#00D4FF]",
  "from-[#22D3EE] to-[#6366f1]",
  "from-[#A020F0] to-[#00FFFF]",
  "from-[#FF1493] to-[#7B68EE]",
  "from-[#32CD32] to-[#00CED1]",
  "from-[#f59e0b] to-[#ea580c]",
] as const;

export function getGrowthPillars(locale: Locale) {
  if (locale === "tr") {
    return [
      {
        title: "Alternatif reklam kanalları",
        description:
          "Telegram reklamı, kanal alımı ve diğer alternatif medya alanlarını tek planla yönetiyoruz.",
        accent: PILLAR_ACCENTS[0],
      },
      {
        title: "SEO ve içerik ağı",
        description:
          "Marka ve bonus niyetini toplayan içerik yapısını düzenli yayın planıyla büyütüyoruz.",
        accent: PILLAR_ACCENTS[1],
      },
      {
        title: "Trend ve dağıtım hızı",
        description:
          "Pazardaki hareketi hızlı okuyup içerik, kampanya ve dağıtım tarafını gecikmeden güncelliyoruz.",
        accent: PILLAR_ACCENTS[2],
      },
      {
        title: "Viral içerik üretimi",
        description:
          "Banner, video, landing ve kısa format kreatifleri markanın hızına uygun şekilde üretiyoruz.",
        accent: PILLAR_ACCENTS[3],
      },
      {
        title: "Operasyon ve koruma",
        description:
          "Klon takibi, DMCA süreçleri ve marka riskini azaltan operasyon düzenli olarak yürür.",
        accent: PILLAR_ACCENTS[4],
      },
      {
        title: "Özel yazılım altyapısı",
        description:
          "Takip, otomasyon, panel ve API ihtiyaçlarında hazır araç yetmediğinde özel çözüm geliştiriyoruz.",
        accent: PILLAR_ACCENTS[5],
      },
    ] as const;
  }

  if (locale === "ru") {
    return [
      {
        title: "Трафик",
        description:
          "Реклама в Telegram, закуп каналов и PornHub-медиа в одном операционном цикле.",
        accent: PILLAR_ACCENTS[0],
      },
      {
        title: "SEO и контент",
        description:
          "Структура под брендовый, бонусный и игровой спрос с регулярным продакшном.",
        accent: PILLAR_ACCENTS[1],
      },
      {
        title: "AI автоматизация",
        description:
          "Чат-логика, маршрутизация и AI-процессы контента в одной системе.",
        accent: PILLAR_ACCENTS[2],
      },
      {
        title: "Креатив",
        description:
          "Баннеры, видео, лендинги и экраны воронки под темп кампаний.",
        accent: PILLAR_ACCENTS[3],
      },
      {
        title: "Защита бренда",
        description:
          "Отслеживание клонов, takedown-процессы и регулярный контроль рисков.",
        accent: PILLAR_ACCENTS[4],
      },
      {
        title: "Кастомный софт",
        description:
          "Трекинг, автоматизация и API-логика там, где готовых решений уже мало.",
        accent: PILLAR_ACCENTS[5],
      },
    ] as const;
  }

  return [
    {
      title: "Traffic acquisition",
      description:
        "Telegram ads, channel buying, and PornHub media under one operating flow.",
      accent: PILLAR_ACCENTS[0],
    },
    {
      title: "SEO & content network",
      description:
        "Brand, bonus, and game-intent content structure with ongoing publishing.",
      accent: PILLAR_ACCENTS[1],
    },
    {
      title: "AI automation",
      description:
        "Chat flows, routing logic, and AI-assisted content systems in one stack.",
      accent: PILLAR_ACCENTS[2],
    },
    {
      title: "Creative production",
      description:
        "Banners, videos, landings, and funnel screens updated around campaign pace.",
      accent: PILLAR_ACCENTS[3],
    },
    {
      title: "Brand protection",
      description:
        "Clone monitoring, takedown execution, and regular brand-risk control.",
      accent: PILLAR_ACCENTS[4],
    },
    {
      title: "Custom software",
      description:
        "Tracking, automation, and API-backed workflows when off-the-shelf tools stop fitting.",
      accent: PILLAR_ACCENTS[5],
    },
  ] as const;
}
