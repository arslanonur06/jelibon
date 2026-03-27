import type { Locale } from "./locales";

export type Dictionary = {
  header: {
    emailUs: string;
    telegram: string;
  };
  marquee: {
    copy: string;
  };
  nav: Record<
    "solutions" | "orbital" | "packages" | "combo" | "blog" | "contact",
    string
  >;
  language: {
    en: string;
    tr: string;
    ru: string;
  };
  hero: {
    tagline: string;
    /** Three animated headline lines (EN / TR / RU). */
    textColorLines: readonly [string, string, string];
    description: string;
    viewPackages: string;
    readBlog: string;
    tags: string;
    whyUsHeading: string;
    whyUsBullets: string[];
  };
  growthPillars: {
    heading: string;
    description: string;
  };
  orbitalSection: {
    heading: string;
    description: string;
  };
  packages: {
    heading: string;
    description: string;
    growthPackagesHeading: string;
    growthPackagesDescription: string;
    monthSuffix: string;
    moSuffix: string;
    serviceNavLabelsById: Record<string, string>;
    servicePackagesById: Record<
      string,
      {
        title: string;
        subtitle?: string;
        badge?: string;
        billingNote?: string;
        priceHeadline?: string;
        features: string[];
      }
    >;
    growthPackageTiersById: Record<
      string,
      {
        name: string;
        features: string[];
      }
    >;
    fullGrowthSuiteByLocale: {
      title: string;
      subtitle: string;
      billingNote: string;
      includes: string[];
      extras: string[];
    };
  };
  combo: {
    flagship: string;
    description: string;
    getStarted: string;
    messageTelegram: string;
    fullGrowthSuiteByLocale: {
      title: string;
      subtitle: string;
      billingNote: string;
      includes: string[];
      extras: string[];
    };
  };
  blog: {
    heading: string;
    description: string;
    viewAllPosts: string;
    breadcrumbs: {
      home: string;
      blog: string;
    };
    categoryLabelsByName: Record<string, string>;
  };
  footer: {
    heading: string;
    about: string;
    getStarted: string;
    telegramLink: string;
    rightsTemplate: string;
  };
  orbitalUI: {
    energyLevel: string;
    connectedNodes: string;
    statusCompleted: string;
    statusInProgress: string;
    statusPending: string;
  };
};

export const DICTIONARIES: Record<Locale, Dictionary> = {
  en: {
    header: { emailUs: "Email us", telegram: "Telegram" },
    marquee: {
      copy: "Jelibon Marketing · iGaming acquisition · Telegram Ads & network · PornHub · SEO · AI chatbot & influencer · DMCA · Creative studio · Custom dev · Scale in Türkiye · ",
    },
    nav: {
      solutions: "Solutions",
      orbital: "Orbit",
      packages: "Packages",
      combo: "Full suite",
      blog: "Blog",
      contact: "Contact",
    },
    language: { en: "English", tr: "Türkçe", ru: "Русский" },
    hero: {
      tagline: "Premium growth & software · Türkiye",
      textColorLines: ["Acquire.", "Scale.", "Dominate."],
      description:
        "Traffic acquisition through long-term SEO, Telegram & PornHub; AI automation, AI Influencer, creative studio, DMCA, and custom software—built for the Turkish market.",
      viewPackages: "View packages",
      readBlog: "Read the blog",
      tags: "Telegram · PornHub · SEO · AI · DMCA",
      whyUsHeading: "Why us",
      whyUsBullets: [
        "iGaming-focused expertise & multi-channel traffic.",
        "Long-term SEO & blog network systems.",
        "Automation, scalability & brand protection in one stack.",
      ],
    },
    growthPillars: {
      heading: "Full-stack iGaming infrastructure",
      description:
        "From traffic and SEO to automation and custom software—aligned for operators targeting Türkiye.",
    },
    orbitalSection: {
      heading: "Growth orbit",
      description:
        "Full growth stack—click nodes to explore how modules connect.",
    },
    packages: {
      heading: "Services & pricing",
      description:
        "Monthly retainers in USD unless noted. Telegram, PornHub, SEO, AI, creative, DMCA, custom software—pick modules or bundles below. Tiers scale with scope (traffic + creative volume).",
      growthPackagesHeading: "Growth packages",
      growthPackagesDescription:
        "Pre-built bundles—pick a tier instead of assembling every module.",
      monthSuffix: " / month",
      moSuffix: " / mo",
      serviceNavLabelsById: {
        "telegram-ads": "Telegram Ads",
        "telegram-network": "TG network",
        "pornhub-ads": "PornHub",
        "ai-chatbot": "AI chatbot",
        dmca: "DMCA",
        "creative-funnel": "Creative",
        "seo-blog-network": "SEO & blogs",
        "custom-software": "Custom dev",
        "ai-influencer": "AI influencer",
      },
      servicePackagesById: {
        "telegram-ads": {
          title: "Telegram Ads Management",
          billingNote: "Monthly retainer",
          features: [
            "Campaign setup & targeting",
            "Funnel creation",
            "Creative production",
            "A/B testing",
            "Weekly reporting",
          ],
        },
        "telegram-network": {
          title: "Telegram Channel Network",
          billingNote: "Monthly retainer",
          features: [
            "Channel research & negotiation",
            "Native content production",
            "ROI tracking",
            "Scaling strategy",
          ],
        },
        "pornhub-ads": {
          title: "PornHub Ads Management",
          billingNote: "Monthly retainer · ad spend billed separately",
          features: [
            "Full campaign management",
            "Banner & video creatives",
            "Targeting optimization",
            "Conversion tracking",
          ],
        },
        "ai-chatbot": {
          title: "AI Chatbot System",
          subtitle: "24/7 conversion system",
          billingNote: "Monthly retainer",
          features: [
            "GPT-powered conversations",
            "Multi-language support",
            "Funnel routing",
            "Basic CRM integration",
          ],
        },
        dmca: {
          title: "DMCA & Clone Protection",
          billingNote: "Monthly retainer",
          features: ["Clone detection", "Takedown processes", "Weekly reporting"],
        },
        "creative-funnel": {
          title: "Creative & Funnel Production",
          billingNote: "Monthly retainer",
          features: [
            "Ad creatives",
            "Landing pages",
            "Funnel design",
            "Continuous optimization",
          ],
        },
        "seo-blog-network": {
          title: "SEO & Blog Network",
          badge: "SEO",
          priceHeadline: "From $1,100 / month",
          billingNote:
            "Long-term growth system (typically 3–6 months) · scope affects pricing",
          features: [
            "SEO blog site setup",
            "Keyword targeting strategy",
            "Content production",
            "Backlink structure",
          ],
        },
        "custom-software": {
          title: "Custom Software Solutions",
          priceHeadline: "Custom pricing",
          billingNote: "Scoped to your tracking, automation, and API needs",
          features: [
            "Tracking systems",
            "Automation tools",
            "Custom funnels",
            "API integrations",
          ],
        },
        "ai-influencer": {
          title: "AI Influencer System",
          badge: "AI",
          billingNote: "Monthly retainer",
          features: [
            "AI-generated influencer models",
            "Custom persona creation (casino niche)",
            "Daily content (Telegram & socials)",
            "Engagement & funnel integration",
            "Traffic redirection to offers",
          ],
        },
      },
      growthPackageTiersById: {
        starter: {
          name: "Starter Package",
          features: ["Telegram Ads", "Basic creatives", "Funnel setup"],
        },
        growth: {
          name: "Growth Package",
          features: [
            "Telegram Ads + Network",
            "Creative production",
            "Funnel optimization",
          ],
        },
        scale: {
          name: "Scale Package",
          features: [
            "Telegram + PornHub Ads",
            "Advanced creatives",
            "Funnel & CRO",
            "Basic SEO support",
            "AI Influencer (lite)",
          ],
        },
        domination: {
          name: "Domination Package",
          features: [
            "All traffic channels",
            "AI Chatbot",
            "AI Influencer (full)",
            "Creative studio",
            "Funnel optimization",
          ],
        },
      },
      fullGrowthSuiteByLocale: {
        title: "Full Growth Suite",
        subtitle: "All-in-one iGaming growth infrastructure",
        billingNote: "Monthly investment · priority & custom support",
        includes: [
          "All core traffic & creative services",
          "AI Influencer System",
          "SEO Blog Network",
          "DMCA Protection",
          "Custom support",
        ],
        extras: [
          "Built for operators scaling in Türkiye & adjacent markets",
          "Multi-channel traffic + long-term SEO + automation in one stack",
        ],
      },
    },
    combo: {
      flagship: "Flagship",
      description:
        "Our top monthly stack: traffic, AI, SEO, protection, and hands-on support—built for serious scale in Türkiye.",
      getStarted: "Get started today",
      messageTelegram: "Message on Telegram",
      fullGrowthSuiteByLocale: {
        title: "Full Growth Suite",
        subtitle: "All-in-one iGaming growth infrastructure",
        billingNote: "Monthly investment · priority & custom support",
        includes: [
          "All core traffic & creative services",
          "AI Influencer System",
          "SEO Blog Network",
          "DMCA Protection",
          "Custom support",
        ],
        extras: [
          "Built for operators scaling in Türkiye & adjacent markets",
          "Multi-channel traffic + long-term SEO + automation in one stack",
        ],
      },
    },
    blog: {
      heading: "Blog",
      description:
        "Notes on performance, automation, and brand safety—built for teams shipping in competitive markets.",
      viewAllPosts: "View all posts",
      breadcrumbs: { home: "Home", blog: "Blog" },
      categoryLabelsByName: {
        Strategy: "Strategy",
        Performance: "Performance",
        Compliance: "Compliance",
      },
    },
    footer: {
      heading: "Jelibon Marketing",
      about:
        "Growth & software for iGaming in Türkiye—Telegram, PornHub, SEO, AI, DMCA, and custom stacks. Start on Telegram or email.",
      getStarted: "Get started",
      telegramLink: "Telegram: @jelibonmarketing",
      rightsTemplate: "© {year} Jelibon Marketing. All rights reserved.",
    },
    orbitalUI: {
      energyLevel: "Energy Level",
      connectedNodes: "Connected Nodes",
      statusCompleted: "COMPLETE",
      statusInProgress: "IN PROGRESS",
      statusPending: "PENDING",
    },
  },
  tr: {
    header: { emailUs: "Bize e-posta", telegram: "Telegram" },
    marquee: {
      copy: "Jelibon Marketing · iGaming büyümesi · Telegram Reklamları & ağ · PornHub · SEO · AI sohbet botu & influencer · DMCA · Kreatif stüdyo · Özel geliştirme · Türkiye'de ölçek · ",
    },
    nav: {
      solutions: "Çözümler",
      orbital: "Yörünge",
      packages: "Paketler",
      combo: "Eksiksiz paket",
      blog: "Blog",
      contact: "İletişim",
    },
    language: { en: "English", tr: "Türkçe", ru: "Русский" },
    hero: {
      tagline: "Türkiye'ye özel büyüme & yazılım",
      textColorLines: ["Trafik.", "Ölçek.", "Kazan."],
      description:
        "Uzun vadeli SEO, Telegram ve PornHub ile trafik kazanımı; yapay zeka otomasyonu, AI influencer, kreatif stüdyo, DMCA ve özel yazılım—Türkiye pazarına uygun şekilde tasarlandı.",
      viewPackages: "Paketleri görüntüle",
      readBlog: "Blogu oku",
      tags: "Telegram · PornHub · SEO · AI · DMCA",
      whyUsHeading: "Neden Biz",
      whyUsBullets: [
        "iGaming odaklı uzmanlık & çok kanallı trafik.",
        "Uzun vadeli SEO & blog ağı sistemleri.",
        "Tek bir stack’te otomasyon, ölçeklenebilirlik ve marka koruması.",
      ],
    },
    growthPillars: {
      heading: "Tam kapsamlı iGaming altyapısı",
      description:
        "Trafikten SEO'ya, otomasyondan özel yazılıma kadar—Türkiye'ye odaklanan operatörlerle uyumlu.",
    },
    orbitalSection: {
      heading: "Büyüme yörüngesi",
      description:
        "Eksiksiz büyüme ekosistemi—modüllerin nasıl bağlandığını keşfetmek için düğümlere tıklayın.",
    },
    packages: {
      heading: "Hizmetler ve fiyatlar",
      description:
        "Belirtilmedikçe USD üzerinden aylık retainer. Telegram, PornHub, SEO, AI, kreatif, DMCA, özel yazılım—aşağıdan modül veya paket seçin. Paketler kapsamla ölçeklenir (trafik + kreatif hacim).",
      growthPackagesHeading: "Büyüme paketleri",
      growthPackagesDescription:
        "Hazır paketler—her modülü tek tek birleştirmek yerine bir tier seçin.",
      monthSuffix: " / ay",
      moSuffix: " / ay",
      serviceNavLabelsById: {
        "telegram-ads": "Telegram Reklamları",
        "telegram-network": "TG ağı",
        "pornhub-ads": "PornHub",
        "ai-chatbot": "AI sohbet botu",
        dmca: "DMCA",
        "creative-funnel": "Kreatif",
        "seo-blog-network": "SEO & bloglar",
        "custom-software": "Özel yazılım",
        "ai-influencer": "AI influencer",
      },
      servicePackagesById: {
        "telegram-ads": {
          title: "Telegram Reklam Yönetimi",
          billingNote: "Aylık retainer",
          features: [
            "Kampanya kurulumu & hedefleme",
            "Funnel oluşturma",
            "Kreatif prodüksiyon",
            "A/B testleri",
            "Haftalık raporlama",
          ],
        },
        "telegram-network": {
          title: "Telegram Kanal Ağı",
          billingNote: "Aylık retainer",
          features: [
            "Kanal araştırması & müzakere",
            "Natif içerik prodüksiyonu",
            "ROI takibi",
            "Ölçekleme stratejisi",
          ],
        },
        "pornhub-ads": {
          title: "PornHub Reklam Yönetimi",
          billingNote: "Aylık retainer · reklam harcaması ayrı faturalandırılır",
          features: [
            "Tam kampanya yönetimi",
            "Banner & video kreatifler",
            "Hedefleme optimizasyonu",
            "Dönüşüm takibi",
          ],
        },
        "ai-chatbot": {
          title: "AI Sohbet Botu Sistemi",
          subtitle: "7/24 dönüşüm sistemi",
          billingNote: "Aylık retainer",
          features: [
            "GPT destekli görüşmeler",
            "Çok dilli destek",
            "Funnel yönlendirme",
            "Temel CRM entegrasyonu",
          ],
        },
        dmca: {
          title: "DMCA ve Kopya Koruması",
          billingNote: "Aylık retainer",
          features: [
            "Klon tespiti",
            "Kaldırma süreçleri",
            "Haftalık raporlama",
          ],
        },
        "creative-funnel": {
          title: "Kreatif ve Funnel Prodüksiyonu",
          billingNote: "Aylık retainer",
          features: [
            "Reklam kreatifleri",
            "Landing sayfaları",
            "Funnel tasarımı",
            "Sürekli optimizasyon",
          ],
        },
        "seo-blog-network": {
          title: "SEO ve Blog Ağı",
          badge: "SEO",
          priceHeadline: "Aylık $1,100'dan başlayan fiyatlar",
          billingNote:
            "Uzun vadeli büyüme sistemi (genellikle 3–6 ay) · kapsam fiyatı etkiler",
          features: [
            "SEO blog site kurulumu",
            "Anahtar kelime hedefleme stratejisi",
            "İçerik üretimi",
            "Backlink yapısı",
          ],
        },
        "custom-software": {
          title: "Özel Yazılım Çözümleri",
          priceHeadline: "Özel fiyatlandırma",
          billingNote: "Takip, otomasyon ve API ihtiyaçlarınıza göre kapsamlanır",
          features: [
            "Takip sistemleri",
            "Otomasyon araçları",
            "Özel funnel’lar",
            "API entegrasyonları",
          ],
        },
        "ai-influencer": {
          title: "AI Influencer Sistemi",
          badge: "AI",
          billingNote: "Aylık retainer",
          features: [
            "AI tarafından üretilen influencer modelleri",
            "Özel persona oluşturma (casino nişi)",
            "Günlük içerik (Telegram & sosyal medya)",
            "Etkileşim ve funnel entegrasyonu",
            "Tekliflere trafik yönlendirme",
          ],
        },
      },
      growthPackageTiersById: {
        starter: {
          name: "Başlangıç Paketi",
          features: ["Telegram Reklamları", "Temel kreatifler", "Funnel kurulumu"],
        },
        growth: {
          name: "Büyüme Paketi",
          features: [
            "Telegram Reklamları + Ağ",
            "Kreatif prodüksiyon",
            "Funnel optimizasyonu",
          ],
        },
        scale: {
          name: "Ölçek Paketi",
          features: [
            "Telegram + PornHub Reklamları",
            "Gelişmiş kreatifler",
            "Funnel & CRO",
            "Temel SEO desteği",
            "AI Influencer (lite)",
          ],
        },
        domination: {
          name: "Hakimiyet Paketi",
          features: [
            "Tüm trafik kanalları",
            "AI Sohbet Botu",
            "AI Influencer (tam)",
            "Kreatif stüdyo",
            "Funnel optimizasyonu",
          ],
        },
      },
      fullGrowthSuiteByLocale: {
        title: "Tam Büyüme Paketi",
        subtitle: "Tek noktada iGaming büyüme altyapısı",
        billingNote: "Aylık yatırım · öncelik & özel destek",
        includes: [
          "Tüm temel trafik & kreatif hizmetleri",
          "AI Influencer Sistemi",
          "SEO Blog Ağı",
          "DMCA Koruması",
          "Özel destek",
        ],
        extras: [
          "Türkiye ve komşu pazarlarda ölçekleyen operatörler için",
          "Tek stack’te çok kanallı trafik + uzun vadeli SEO + otomasyon",
        ],
      },
    },
    combo: {
      flagship: "Öne çıkan",
      description:
        "Aylık öne çıkan stack'imiz: trafik, AI, SEO, koruma ve hands-on destek—Türkiye'de ciddi ölçek için tasarlandı.",
      getStarted: "Bugün başlayın",
      messageTelegram: "Telegram'dan mesaj",
      fullGrowthSuiteByLocale: {
        title: "Tam Büyüme Paketi",
        subtitle: "Tek noktada iGaming büyüme altyapısı",
        billingNote: "Aylık yatırım · öncelik & özel destek",
        includes: [
          "Tüm temel trafik & kreatif hizmetleri",
          "AI Influencer Sistemi",
          "SEO Blog Ağı",
          "DMCA Koruması",
          "Özel destek",
        ],
        extras: [
          "Türkiye ve komşu pazarlarda ölçekleyen operatörler için",
          "Tek stack’te çok kanallı trafik + uzun vadeli SEO + otomasyon",
        ],
      },
    },
    blog: {
      heading: "Blog",
      description:
        "Performans, otomasyon ve marka güvenliği üzerine notlar—rekabetçi pazarlarda ilerleyen ekipler için.",
      viewAllPosts: "Tüm yazıları gör",
      breadcrumbs: { home: "Ana Sayfa", blog: "Blog" },
      categoryLabelsByName: {
        Strategy: "Strateji",
        Performance: "Performans",
        Compliance: "Uyumluluk",
      },
    },
    footer: {
      heading: "Jelibon Marketing",
      about:
        "Türkiye'de iGaming için büyüme & yazılım—Telegram, PornHub, SEO, AI, DMCA ve özel stack'ler. Telegram'dan başlayın ya da e-posta gönderin.",
      getStarted: "Hemen başlayın",
      telegramLink: "Telegram: @jelibonmarketing",
      rightsTemplate: "© {year} Jelibon Marketing. Tüm hakları saklıdır.",
    },
    orbitalUI: {
      energyLevel: "Enerji Seviyesi",
      connectedNodes: "Bağlı Düğümler",
      statusCompleted: "TAMAMLANDI",
      statusInProgress: "SÜRÜYOR",
      statusPending: "BEKLEMEDE",
    },
  },
  ru: {
    header: { emailUs: "Написать нам", telegram: "Telegram" },
    marquee: {
      copy: "Jelibon Marketing · iGaming acquisition · Реклама Telegram и сеть · PornHub · SEO · AI-бот · DMCA · Креативная студия · Custom dev · Масштабирование в Турции · ",
    },
    nav: {
      solutions: "Решения",
      orbital: "Орбита",
      packages: "Пакеты",
      combo: "Полный комплект",
      blog: "Блог",
      contact: "Контакты",
    },
    language: { en: "English", tr: "Türkçe", ru: "Русский" },
    hero: {
      tagline: "Премиальный рост и софт · Турция",
      textColorLines: ["Трафик.", "Масштаб.", "Победа."],
      description:
        "Привлечение трафика через долгосрочное SEO, Telegram и PornHub; AI-автоматизация, AI-influencer, креативная студия, DMCA и кастомная разработка—для турецкого рынка.",
      viewPackages: "Смотреть пакеты",
      readBlog: "Читать блог",
      tags: "Telegram · PornHub · SEO · AI · DMCA",
      whyUsHeading: "Почему мы",
      whyUsBullets: [
        "Экспертиза в iGaming и многоканальный трафик.",
        "Долгосрочное SEO и система блог-сети.",
        "Автоматизация, масштабирование и защита бренда в одном стеке.",
      ],
    },
    growthPillars: {
      heading: "Полноценная iGaming инфраструктура",
      description:
        "От трафика и SEO до автоматизации и кастомного софта—для операторов, нацеленных на Турцию.",
    },
    orbitalSection: {
      heading: "Орбита роста",
      description:
        "Полный stack роста—кликайте по узлам, чтобы увидеть связи модулей.",
    },
    packages: {
      heading: "Услуги и цены",
      description:
        "Ежемесячные ретейнеры в USD (если не указано иное). Telegram, PornHub, SEO, AI, креатив, DMCA, кастомный софт—выбирайте модули или пакеты ниже. Тиры масштабируются по объему (трафик + креатив).",
      growthPackagesHeading: "Пакеты роста",
      growthPackagesDescription:
        "Готовые наборы—выберите tier вместо сборки каждого модуля.",
      monthSuffix: " / мес.",
      moSuffix: " / мес.",
      serviceNavLabelsById: {
        "telegram-ads": "Реклама Telegram",
        "telegram-network": "TG сеть",
        "pornhub-ads": "PornHub",
        "ai-chatbot": "AI-чатбот",
        dmca: "DMCA",
        "creative-funnel": "Креатив",
        "seo-blog-network": "SEO & блоги",
        "custom-software": "Кастом dev",
        "ai-influencer": "AI influencer",
      },
      servicePackagesById: {
        "telegram-ads": {
          title: "Управление рекламой Telegram",
          billingNote: "Ежемесячный ретейнер",
          features: [
            "Настройка кампаний и таргетинга",
            "Создание воронок",
            "Продакшн креативов",
            "A/B тесты",
            "Еженедельная отчетность",
          ],
        },
        "telegram-network": {
          title: "Сеть каналов Telegram",
          billingNote: "Ежемесячный ретейнер",
          features: [
            "Исследование каналов и переговоры",
            "Производство нативного контента",
            "Отслеживание ROI",
            "Стратегия масштабирования",
          ],
        },
        "pornhub-ads": {
          title: "Управление рекламой PornHub",
          billingNote: "Ежемесячный ретейнер · рекламный бюджет отдельно",
          features: [
            "Полное управление кампаниями",
            "Баннеры и видео креативы",
            "Оптимизация таргетинга",
            "Отслеживание конверсий",
          ],
        },
        "ai-chatbot": {
          title: "Система AI-чатбота",
          subtitle: "Система конверсий 24/7",
          billingNote: "Ежемесячный ретейнер",
          features: [
            "Диалоги с GPT",
            "Поддержка нескольких языков",
            "Маршрутизация по воронке",
            "Базовая интеграция с CRM",
          ],
        },
        dmca: {
          title: "DMCA и защита от клонов",
          billingNote: "Ежемесячный ретейнер",
          features: [
            "Поиск клонов",
            "Процессы takedown",
            "Еженедельная отчетность",
          ],
        },
        "creative-funnel": {
          title: "Креативы и производство воронок",
          billingNote: "Ежемесячный ретейнер",
          features: [
            "Рекламные креативы",
            "Лендинги",
            "Дизайн воронки",
            "Постоянная оптимизация",
          ],
        },
        "seo-blog-network": {
          title: "SEO и блог-сеть",
          badge: "SEO",
          priceHeadline: "От $1,100 / мес.",
          billingNote:
            "Долгосрочная система роста (обычно 3–6 месяцев) · объем влияет на цену",
          features: [
            "Настройка SEO-блогов",
            "Стратегия таргетинга по ключам",
            "Производство контента",
            "Структура бэклинков",
          ],
        },
        "custom-software": {
          title: "Решения кастомного софта",
          priceHeadline: "Кастомная цена",
          billingNote: "Координируется под ваш трекинг, автоматизацию и API",
          features: [
            "Системы трекинга",
            "Инструменты автоматизации",
            "Кастомные воронки",
            "Интеграции API",
          ],
        },
        "ai-influencer": {
          title: "Система AI-influencer",
          badge: "AI",
          billingNote: "Ежемесячный ретейнер",
          features: [
            "Модели AI-influencer",
            "Создание персон под нишу",
            "Ежедневный контент (Telegram и соцсети)",
            "Вовлечение и интеграция в воронку",
            "Перенаправление трафика на офферы",
          ],
        },
      },
      growthPackageTiersById: {
        starter: {
          name: "Стартовый пакет",
          features: ["Реклама Telegram", "Базовые креативы", "Настройка воронки"],
        },
        growth: {
          name: "Пакет роста",
          features: [
            "Реклама Telegram + сеть",
            "Производство креативов",
            "Оптимизация воронки",
          ],
        },
        scale: {
          name: "Пакет масштабирования",
          features: [
            "Реклама Telegram + PornHub",
            "Продвинутые креативы",
            "Воронка и CRO",
            "Базовая поддержка SEO",
            "AI-influencer (lite)",
          ],
        },
        domination: {
          name: "Пакет доминирования",
          features: [
            "Все каналы трафика",
            "AI-чатбот",
            "AI-influencer (full)",
            "Креативная студия",
            "Оптимизация воронки",
          ],
        },
      },
      fullGrowthSuiteByLocale: {
        title: "Полный комплект роста",
        subtitle: "Единая iGaming-инфраструктура роста",
        billingNote: "Ежемесячные инвестиции · приоритет и кастомная поддержка",
        includes: [
          "Все ключевые сервисы по трафику и креативам",
          "Система AI-influencer",
          "SEO Blog Network",
          "DMCA Protection",
          "Кастомная поддержка",
        ],
        extras: [
          "Для операторов, масштабирующихся в Турции и рядом",
          "Мультиканальный трафик + долгосрочное SEO + автоматизация в одном стеке",
        ],
      },
    },
    combo: {
      flagship: "Флагман",
      description:
        "Лучший ежемесячный комплект: трафик, AI, SEO, защита и hands-on поддержка—для серьезного масштаба в Турции.",
      getStarted: "Начните сегодня",
      messageTelegram: "Написать в Telegram",
      fullGrowthSuiteByLocale: {
        title: "Полный комплект роста",
        subtitle: "Единая iGaming-инфраструктура роста",
        billingNote: "Ежемесячные инвестиции · приоритет и кастомная поддержка",
        includes: [
          "Все ключевые сервисы по трафику и креативам",
          "Система AI-influencer",
          "SEO Blog Network",
          "DMCA Protection",
          "Кастомная поддержка",
        ],
        extras: [
          "Для операторов, масштабирующихся в Турции и рядом",
          "Мультиканальный трафик + долгосрочное SEO + автоматизация в одном стеке",
        ],
      },
    },
    blog: {
      heading: "Блог",
      description:
        "Заметки о производительности, автоматизации и бренд-безопасности—для команд, работающих в конкурентных рынках.",
      viewAllPosts: "Все статьи",
      breadcrumbs: { home: "Главная", blog: "Блог" },
      categoryLabelsByName: {
        Strategy: "Стратегия",
        Performance: "Эффективность",
        Compliance: "Соответствие",
      },
    },
    footer: {
      heading: "Jelibon Marketing",
      about:
        "Рост и софт для iGaming в Турции — Telegram, PornHub, SEO, AI, DMCA и кастомные стеки. Начните в Telegram или напишите на email.",
      getStarted: "Начать",
      telegramLink: "Telegram: @jelibonmarketing",
      rightsTemplate: "© {year} Jelibon Marketing. Все права защищены.",
    },
    orbitalUI: {
      energyLevel: "Уровень энергии",
      connectedNodes: "Связанные узлы",
      statusCompleted: "ГОТОВО",
      statusInProgress: "В ПРОЦЕССЕ",
      statusPending: "В ОЖИДАНИИ",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

