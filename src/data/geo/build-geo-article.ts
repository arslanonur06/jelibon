import type { BonusArticleContent } from "@/data/bonus-article";
import type { GeoBrandGuide } from "./types";
import type { GeoMarketConfig } from "./types";
import { getGeoBrands } from "./markets";

function hashSeed(value: string): number {
  let hash = 0;
  for (const char of value) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }
  return hash;
}

/** betrehberi.com tarzı: giriş, bonus, ödeme, FAQ bölümleri — pazar diline göre */
export function buildGeoArticle(
  market: GeoMarketConfig,
  brand: GeoBrandGuide,
): BonusArticleContent {
  const seed = hashSeed(`${market.id}-${brand.slug}`);
  const allInMarket = getGeoBrands(market.id);
  const relatedBrands = allInMarket
    .filter((item) => item.slug !== brand.slug)
    .slice(seed % 5, (seed % 5) + 6);

  const licenseLine = brand.licenseNote
    ? ` ${brand.licenseNote}.`
    : "";

  const intents = market.searchIntents.slice(0, 6).join(", ");

  if (market.id === "az") {
    return {
      title: `${brand.name} etibarlı sayt — giriş və bonus rehberi`,
      intro: [
        `${brand.name} ${market.countryName} bazarında populyar bukmeker / casino brendidir.${licenseLine} Bu səhifə giriş, bonus və etibarlılıq barədə məlumat üçündür. Canlı yönləndirmə: @emojistarbot.`,
      ],
      sections: [
        {
          heading: `${brand.name} cari giriş ünvanı`,
          paragraphs: [
            `${brand.name} giriş və mobil giriş axını dəyişə bilər; ən son məlumat Telegram botu @emojistarbot vasitəsilə paylaşılır.`,
            `${brand.name} üçün ${intents} sorğuları bu kanonik səhifədə cəmlənir.`,
          ],
        },
        {
          heading: `${brand.name} bonus və kampaniyalar`,
          paragraphs: [
            "Xoş gəldin bonusu, depozitsiz bonus və cashback kampaniyaları operatora görə dəyişir.",
            "Çevrim şərtləri və maksimum çıxarış limiti kampaniya dövrünə görə yenilənir.",
          ],
        },
        {
          heading: "Ödəniş və təhlükəsizlik",
          paragraphs: [
            "KapitalBank, ABB, Visa/Mastercard, kripto və e-cüzdan seçimləri operatora görə fərqlənir.",
            "KYC yoxlaması çıxarışdan əvvəl tələb oluna bilər.",
          ],
        },
      ],
      checklist: [
        "Bonus şərtləri ilə reklam metni eyni olmalıdır.",
        "Çevrim və müddət görünən olmalıdır.",
        "Giriş yalnız rəsmi kanallardan təsdiqlənməlidir.",
      ],
      faqs: [
        {
          question: `${brand.name} giriş ünvanını haradan tapım?`,
          answer:
            "Cari giriş @emojistarbot Telegram botunda paylaşılır.",
        },
        {
          question: `${brand.name} AZN ilə depozit mümkündürmü?`,
          answer:
            "Çox beynəlxalq operatorlar AZN dəstəyi verir; aktual metodlar operator siyasətinə bağlıdır.",
        },
        {
          question: `${brand.name} mobil tətbiqi varmı?`,
          answer:
            "Android / iOS tətbiqi və mobil brauzer versiyası mövcud ola bilər; rəsmi botdan təsdiq alın.",
        },
      ],
      relatedBrands,
    };
  }

  if (market.id === "ru") {
    return {
      title: `${brand.name} — актуальное зеркало и бонус`,
      intro: [
        `${brand.name} — популярный бренд на рынке ${market.countryName}.${licenseLine} Обзор входа, бонусов и зеркал. Актуальные ссылки: @emojistarbot.`,
      ],
      sections: [
        {
          heading: `${brand.name} рабочее зеркало`,
          paragraphs: [
            `Актуальный вход ${brand.name} может меняться; свежие зеркала публикуются в Telegram @emojistarbot.`,
            `Запросы: ${intents} — каноническая страница для бренда ${brand.name}.`,
          ],
        },
        {
          heading: `${brand.name} бонусы`,
          paragraphs: [
            "Приветственный бонус, фрибет и кэшбэк зависят от акции оператора.",
            "Оборот и лимиты вывода проверяйте до депозита.",
          ],
        },
        {
          heading: "Платежи и безопасность",
          paragraphs: [
            "Карты, СБП, криптовалюта и кошельки — по политике оператора.",
            "Верификация KYC может потребоваться перед выводом.",
          ],
        },
      ],
      checklist: [
        "Проверяйте лицензию и зеркало.",
        "Читайте условия бонуса.",
        "Не используйте фишинговые домены.",
      ],
      faqs: [
        {
          question: `Где взять рабочее зеркало ${brand.name}?`,
          answer: "@emojistarbot — актуальные ссылки.",
        },
        {
          question: `Есть ли мобильное приложение ${brand.name}?`,
          answer: "Android / iOS приложение или мобильная версия сайта — уточняйте у оператора.",
        },
        {
          question: `Какие бонусы у ${brand.name}?`,
          answer: "Приветственный пакет и акции обновляются; сверяйте условия на странице оператора.",
        },
      ],
      relatedBrands,
    };
  }

  if (market.id === "ua") {
    return {
      title: `${brand.name} — вхід, бонуси та огляд`,
      intro: [
        `${brand.name} — популярна платформа в ${market.countryName}.${licenseLine} Інформаційний огляд входу та бонусів. @emojistarbot.`,
      ],
      sections: [
        {
          heading: `${brand.name} актуальне дзеркало`,
          paragraphs: [
            `Вхід ${brand.name} може змінюватися; актуальні посилання — @emojistarbot.`,
            `Пошукові наміри: ${intents}.`,
          ],
        },
        {
          heading: `${brand.name} бонуси`,
          paragraphs: [
            "Вітальний бонус, фріспіни та кешбек залежать від кампанії.",
            "Ліцензовані UA оператори публікують умови на офіційному сайті.",
          ],
        },
        {
          heading: "Платежі",
          paragraphs: [
            "Гривня (UAH), карти, Apple Pay / Google Pay — за політикою оператора.",
            "PlayCity ліцензія — для локально ліцензованих брендів.",
          ],
        },
      ],
      checklist: [
        "Перевірте ліцензію PlayCity для UA операторів.",
        "Порівняйте умови бонусу.",
        "Уникайте фішингових дзеркал.",
      ],
      faqs: [
        {
          question: `Де знайти вхід ${brand.name}?`,
          answer: "@emojistarbot Telegram.",
        },
        {
          question: `${brand.name} ліцензований в Україні?`,
          answer: brand.licenseNote ?? "Перевірте реєстр PlayCity та офіційний сайт оператора.",
        },
        {
          question: `Які бонуси пропонує ${brand.name}?`,
          answer: "Акції оновлюються; читайте офіційні правила.",
        },
      ],
      relatedBrands,
    };
  }

  // EN / Nordics / EU default template
  return {
    title: `${brand.name} trusted site guide — ${market.countryName}`,
    intro: [
      `${brand.name} overview for ${market.countryName} (${market.regionLabel}).${licenseLine} Login, bonus and compliance notes. Live updates: @emojistarbot.`,
    ],
    sections: [
      {
        heading: `${brand.name} login & access`,
        paragraphs: [
          `Current login URLs for ${brand.name} may change; verify via @emojistarbot.`,
          `Search intents covered: ${intents}.`,
        ],
      },
      {
        heading: `${brand.name} bonuses & promotions`,
        paragraphs: [
          "Welcome offers, free bets and cashback vary by operator and local regulation.",
          "Always read wagering requirements before opting in.",
        ],
      },
      {
        heading: "Payments and licensing",
        paragraphs: [
          "Local payment methods depend on operator licensing in the target market.",
          "Tier 2 EU markets often require national or MGA/Spelinspektionen-style oversight.",
        ],
      },
    ],
    checklist: [
      "Confirm local licensing status.",
      "Match bonus terms with marketing claims.",
      "Use official apps or verified mirrors only.",
    ],
    faqs: [
      {
        question: `How to access ${brand.name} in ${market.countryName}?`,
        answer: "Check @emojistarbot for verified entry points.",
      },
      {
        question: `Is ${brand.name} licensed?`,
        answer: brand.licenseNote ?? "Verify the regulator listed on the operator site.",
      },
      {
        question: `What bonuses does ${brand.name} offer?`,
        answer: "Promotions rotate; read official terms on the operator site.",
      },
    ],
    relatedBrands,
  };
}
