import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import type { Locale } from "@/lib/i18n/locales";
import { DICTIONARIES } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";

const timelineDataEn = [
  {
    id: 1,
    title: "Telegram Ads",
    date: "$2.3k",
    content:
      "Campaign setup, funnels, creatives, A/B tests, and weekly reporting.",
    category: "Traffic",
    iconImage: "/assets/telegramicon.png",
    iconAlt: "Telegram",
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 92,
  },
  {
    id: 2,
    title: "Telegram Network",
    date: "$3.8k",
    content:
      "Channel research, native content, ROI tracking, scaling strategy.",
    category: "Traffic",
    iconImage: "/assets/telegramicon.png",
    iconAlt: "Telegram",
    relatedIds: [3, 7],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "PornHub Ads",
    date: "$4k",
    content:
      "Full campaign management, creatives, targeting, conversion tracking.",
    category: "Traffic",
    iconKey: "megaphone",
    relatedIds: [4, 8],
    status: "in-progress" as const,
    energy: 88,
  },
  {
    id: 4,
    title: "AI Chatbot",
    date: "$1.3k",
    content:
      "GPT-powered chat, multi-language, funnel routing, basic CRM hooks.",
    category: "Automation",
    iconKey: "bot",
    relatedIds: [5, 8],
    status: "in-progress" as const,
    energy: 87,
  },
  {
    id: 5,
    title: "DMCA",
    date: "$1.6k",
    content: "Clone detection, takedowns, weekly reporting.",
    category: "Trust",
    iconKey: "shield",
    relatedIds: [6],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 6,
    title: "Creative",
    date: "$2.7k",
    content: "Ads, landing pages, funnel design, continuous optimization.",
    category: "Creative",
    iconKey: "palette",
    relatedIds: [7],
    status: "pending" as const,
    energy: 84,
  },
  {
    id: 7,
    title: "SEO",
    date: "From $1.1k",
    content:
      "Blog farms, parasite SEO, keywords, content, backlinks—3–6 month horizon.",
    category: "SEO",
    iconKey: "globe",
    relatedIds: [8],
    status: "in-progress" as const,
    energy: 83,
  },
  {
    id: 8,
    title: "AI Influencer",
    date: "$2k",
    content:
      "AI personas, daily content, engagement & funnel integration to offers.",
    category: "AI",
    iconKey: "sparkles",
    relatedIds: [1],
    status: "in-progress" as const,
    energy: 89,
  },
];

const timelineOverrides: Record<
  Locale,
  Partial<Record<number, Partial<Pick<(typeof timelineDataEn)[number], "title" | "content" | "category" | "date">>>>
> = {
  en: {},
  tr: {
    1: {
      title: "Telegram Reklamları",
      content:
        "Kampanya kurulumu, akış kurgusu, kreatif üretimi, A/B testleri ve haftalık raporlama.",
      category: "Trafik",
    },
    2: {
      title: "Telegram Ağı",
      content:
        "Kanal araştırması, satın alma planı, natif içerik ve ROI takibi.",
      category: "Trafik",
    },
    3: {
      title: "PornHub Reklamları",
      content:
        "Tam kampanya yönetimi, kreatifler, hedefleme, dönüşüm takibi.",
      category: "Trafik",
    },
    4: {
      title: "AI Sohbet Botu",
      content:
        "GPT destekli sohbet, çok dilli yönlendirme ve temel CRM bağlantıları.",
      category: "Otomasyon",
    },
    5: {
      title: "DMCA",
      content: "Klon tespiti, kaldırma talepleri, haftalık raporlama.",
      category: "Güven",
    },
    6: {
      title: "Kreatif",
      content:
        "Reklam görselleri, landing sayfaları ve dönüşüm odaklı akış tasarımları.",
      category: "Kreatif",
    },
    7: {
      title: "SEO",
      date: "$1.1k’dan başlar",
      content:
        "Blog ağı, anahtar kelime kurgusu, içerik üretimi ve link akışıyla 3–6 aylık organik büyüme hattı.",
      category: "SEO",
    },
    8: {
      title: "AI Influencer",
      content:
        "AI karakterler, günlük içerik üretimi ve tekliflere bağlanan etkileşim akışları.",
      category: "AI",
    },
  },
  ru: {
    1: {
      title: "Реклама в Telegram",
      content:
        "Настройка кампаний, воронки, креативы, A/B тесты и еженедельная отчетность.",
      category: "Трафик",
    },
    2: {
      title: "Сеть Telegram",
      content:
        "Исследование каналов, нативный контент, отслеживание ROI, стратегия масштабирования.",
      category: "Трафик",
    },
    3: {
      title: "Реклама PornHub",
      content:
        "Полное управление кампаниями, креативы, таргетинг и tracking конверсий.",
      category: "Трафик",
    },
    4: {
      title: "AI Чат-бот",
      content:
        "GPT-чат, мультиязычная маршрутизация, настройки воронки и базовые интеграции CRM.",
      category: "Автоматизация",
    },
    5: {
      title: "DMCA",
      content: "Поиск клонов, takedown'ы и еженедельная отчетность.",
      category: "Доверие",
    },
    6: {
      title: "Креатив",
      content:
        "Рекламные материалы, лендинги, дизайн воронки и постоянная оптимизация.",
      category: "Креатив",
    },
    7: {
      title: "SEO",
      date: "От $1.1k",
      content:
        "Блог-сети, parasite SEO, ключевые слова, контент, бэклинки — горизонт 3–6 месяцев.",
      category: "SEO",
    },
    8: {
      title: "AI Influencer",
      content:
        "AI-персоны, ежедневный контент, вовлеченность и интеграция воронок в предложения.",
      category: "AI",
    },
  },
};

function getTimelineData(locale: Locale) {
  const overrides = timelineOverrides[locale] ?? {};
  return timelineDataEn.map((item) => {
    const patch = overrides[item.id] ?? {};
    return {
      ...item,
      ...patch,
    };
  });
}

export function OrbitalTimelineSection() {
  const locale = getLocale();
  const dict = DICTIONARIES[locale];
  const timelineData = getTimelineData(locale);

  return (
    <section
      id="orbital"
      className="relative scroll-mt-44 border-t border-white/10 bg-[#050510]/50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            {dict.orbitalSection.heading}
          </h2>
          <p className="mt-3 text-zinc-400">{dict.orbitalSection.description}</p>
        </div>
        <div className="mt-10">
          <RadialOrbitalTimeline timelineData={timelineData} locale={locale} />
        </div>
      </div>
    </section>
  );
}

