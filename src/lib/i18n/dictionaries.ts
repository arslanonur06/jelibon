import type { Locale } from "./locales";

export type Dictionary = {
  header: {
    telegram: string;
  };
  marquee: {
    copy: string;
  };
  nav: Record<
    | "solutions"
    | "orbital"
    | "packages"
    | "calculator"
    | "combo"
    | "testimonials"
    | "blog"
    | "faq"
    | "contact",
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
    articlesHeading: string;
    viewAllPosts: string;
    listEyebrow: string;
    breadcrumbs: {
      home: string;
      blog: string;
    };
    categoryLabelsByKey: {
      strategy: string;
      performance: string;
      compliance: string;
    };
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
  testimonials: {
    heading: string;
    subheading: string;
    sigmaHeading: string;
    sigmaSubtext: string;
    sigmaAwards: readonly [string, string, string];
  };
  faq: {
    heading: string;
    subheading: string;
    items: readonly { question: string; answer: string }[];
  };
  calculator: {
    heading: string;
    description: string;
    totalLabel: string;
    selectedLabel: string;
    estimateNote: string;
    getQuote: string;
    customLabel: string;
    noneSelected: string;
    monthSuffix: string;
  };
};

export const DICTIONARIES: Record<Locale, Dictionary> = {
  en: {
    header: { telegram: "Telegram" },
    marquee: {
      copy:
        "Jelibon Marketing — iGaming growth · Telegram Ads + channel network · PornHub · SEO & content hubs · AI chat + influencer systems · DMCA & brand safety · creative & landing production · custom tracking & automations — Türkiye & nearby markets · ",
    },
    nav: {
      solutions: "Solutions",
      orbital: "Stack",
      packages: "Packages",
      calculator: "Estimator",
      combo: "All-in",
      testimonials: "Clients",
      blog: "Blog",
      faq: "FAQ",
      contact: "Contact",
    },
    language: { en: "English", tr: "Türkçe", ru: "Русский" },
    hero: {
      tagline: "Premium growth & software · Türkiye",
      textColorLines: ["Acquire.", "Scale.", "Dominate."],
      description:
        "Telegram, PornHub, SEO, AI, DMCA, creative, and custom software for iGaming in Türkiye.",
      viewPackages: "View packages",
      readBlog: "Read the blog",
      tags:
        "Freespin · no-deposit · birthday bonus · crash / Aviator SEO · Telegram · PornHub",
      whyUsHeading: "Why us",
      whyUsBullets: [
        "iGaming-focused expertise & multi-channel traffic.",
        "Long-term SEO & blog network systems.",
        "Automation, scalability & brand protection in one stack.",
      ],
    },
    growthPillars: {
      heading: "Full-stack iGaming infrastructure",
      description: "Traffic, SEO, automation, and software for operators in Türkiye.",
    },
    orbitalSection: {
      heading: "Growth orbit",
      description: "Click nodes to view the stack.",
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
            "Clusters for bonus & game intent (freespins, no-deposit, birthday promos, crash/Aviator-style topics)",
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
      description: "Traffic, AI, SEO, protection, and support in one stack.",
      getStarted: "Get started today",
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
      description: "Performance, automation, and brand safety.",
      articlesHeading: "Editorial posts",
      viewAllPosts: "View all posts",
      listEyebrow: "Insights",
      breadcrumbs: { home: "Home", blog: "Blog" },
      categoryLabelsByKey: {
        strategy: "Strategy",
        performance: "Performance",
        compliance: "Compliance",
      },
    },
    footer: {
      heading: "Jelibon Marketing",
      about: "Growth & software for iGaming in Türkiye.",
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
    testimonials: {
      heading: "What operators say",
      subheading: "Recent operator notes and market presence.",
      sigmaHeading: "Seen across the circuit",
      sigmaSubtext: "Regular touchpoints with the same rooms operators already know.",
      sigmaAwards: [
        "ICE Barcelona — operator and affiliate meetings",
        "SBC Summit Lisbon — sportsbook and casino teams",
        "SiGMA Europe Malta — traffic, CRM, and SEO rounds",
      ],
    },
    faq: {
      heading: "Frequently Asked Questions",
      subheading: "Short answers.",
      items: [
        {
          question: "Which markets do you specialise in?",
          answer:
            "Türkiye is our primary focus—we have deep local knowledge of platform rules, audience behaviour, and compliance requirements. We also operate successfully across Russia, CIS, and Eastern Europe.",
        },
        {
          question: "How does the retainer model work?",
          answer:
            "All services are billed as monthly retainers. Scope, channels, and output volume are agreed upfront. Ad spend for paid media (Telegram, PornHub) is invoiced separately so you have full visibility.",
        },
        {
          question: "How quickly can I expect results?",
          answer:
            "Paid channels (Telegram, PornHub) typically deliver measurable traffic within 4–6 weeks. SEO and blog networks are long-term plays—plan for 3–6 months before organic volume compounds. AI chatbot and DMCA protection show impact from the first month.",
        },
        {
          question: "Do you work with brand-new operators?",
          answer:
            "Yes. We regularly build launch stacks for operators entering Türkiye from scratch. That includes brand setup, funnel architecture, creative production, and compliance groundwork before first spend.",
        },
        {
          question: "Can I start with a single service?",
          answer:
            "Absolutely. Most clients start with Telegram Ads or SEO and add services as they scale. Combining channels increases efficiency, but there is no minimum bundle requirement.",
        },
        {
          question: "What makes Jelibon different from a generic performance agency?",
          answer:
            "We operate exclusively in the iGaming vertical. Our creative, compliance, and technical work is built around casino and betting norms—not adapted from e-commerce playbooks. That specialisation cuts onboarding time and improves every KPI from day one.",
        },
        {
          question:
            'Do you support SEO for competitive Turkish queries like "deneme bonusu"?',
          answer:
            "Yes. Our SEO & blog network is built for competitive iGaming SERPs in Türkiye: intent mapping, hub-and-spoke architecture, and sustained publishing—always within your brand and compliance rules. We treat these topics as commercial-intent landscapes, not spam farms.",
        },
        {
          question:
            "Do you cover high-volume Turkish bonus and game SERPs—freespins, birthday bonuses, no-deposit offers, and crash / 'plane' games like Aviator?",
          answer:
            "Yes. We model those demand clusters with hub pages, supporting articles, and internal linking—written in your approved tone with compliance guardrails and editorial quality, so organic growth compounds without thin affiliate spam.",
        },
      ] as const,
    },
    calculator: {
      heading: "Build Your Package",
      description:
        "Toggle the services you need and see your monthly estimate instantly.",
      totalLabel: "Monthly estimate",
      selectedLabel: "services selected",
      estimateNote:
        "Final pricing depends on scope and volume.",
      getQuote: "Get a custom quote",
      customLabel: "Custom pricing",
      noneSelected: "Select services above to see your estimate.",
      monthSuffix: " / mo",
    },
  },
  tr: {
    header: { telegram: "Telegram" },
    marquee: {
      copy:
        "Jelibon Marketing — iGaming growth · Telegram Ads + channel network · PornHub · SEO & content hubs · AI chat + influencer systems · DMCA & brand safety · creative & landing production · custom tracking & automations — Türkiye & nearby markets · ",
    },
    nav: {
      solutions: "Hizmetler",
      orbital: "Modüller",
      packages: "Paketler",
      calculator: "Teklif",
      combo: "Tüm paket",
      testimonials: "Müşteriler",
      blog: "Blog",
      faq: "S.S.S.",
      contact: "İletişim",
    },
    language: { en: "English", tr: "Türkçe", ru: "Русский" },
    hero: {
      tagline: "Büyüme ve yazılım, Türkiye pazarına göre",
      textColorLines: ["Trafik.", "Ölçek.", "Kazan."],
      description:
        "Telegram, PornHub, SEO, AI, DMCA, kreatif ve özel yazılım.",
      viewPackages: "Paketlere bak",
      readBlog: "Blog",
      tags:
        "deneme bonusu · freespin · yatırımsız · doğum günü · uçak oyunu · SEO · Telegram",
      whyUsHeading: "Kısaca neden bizi arıyorlar",
      whyUsBullets: [
        "Sadece iGaming ve bahis tarafındayız, genel ajans oyunu oynamıyoruz.",
        "Aramada + ücretli kanalda aynı masada; birbirini dolduran iş.",
        "Bot, takip, kreatif, koruma: ihtiyaca göre paket, zorunlu fatura yok.",
      ],
    },
    growthPillars: {
      heading: "Ne iş yapıyoruz",
      description: "Trafik, SEO, otomasyon, kreatif ve yazılım.",
    },
    orbitalSection: {
      heading: "Modüllerin birbiriyle bağı",
      description: "Aşağıdaki halkalara tıkla.",
    },
    packages: {
      heading: "Hizmetler ve fiyatlar",
      description:
        "Aksi yazılmadıkça aylık ücretler dolar. Telegram, PornHub, arama, kreatif, DMCA, yazılım. Hacim arttıkça paket fiyatı da artar; aşağıdan modül veya hazır seviye seçebilirsin.",
      growthPackagesHeading: "Büyüme paketleri",
      growthPackagesDescription:
        "Hazır paketler—her modülü tek tek birleştirmek yerine bir paket seviyesi seçin.",
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
            "Bonus ve oyun niyeti kümeleri (deneme bonusu freespin, yatırımsız/doğum günü bonusu, uçak/crash)",
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
          "Tek pakette çok kanallı trafik + uzun vadeli SEO + otomasyon",
        ],
      },
    },
    combo: {
      flagship: "Öne çıkan",
      description: "Trafik, AI, SEO, koruma ve destek tek pakette.",
      getStarted: "Bugün başlayın",
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
          "Tek pakette çok kanallı trafik + uzun vadeli SEO + otomasyon",
        ],
      },
    },
    blog: {
      heading: "Blog",
      description: "Performans, otomasyon ve SEO notları.",
      articlesHeading: "Yazılar",
      viewAllPosts: "Tüm yazıları gör",
      listEyebrow: "İçgörüler",
      breadcrumbs: { home: "Ana Sayfa", blog: "Blog" },
      categoryLabelsByKey: {
        strategy: "Strateji",
        performance: "Performans",
        compliance: "Uyumluluk",
      },
    },
    footer: {
      heading: "Jelibon Marketing",
      about: "Türkiye’de iGaming growth, SEO ve yazılım.",
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
    testimonials: {
      heading: "Sahadaki ses",
      subheading: "Operatör notları ve pazardaki görünürlük.",
      sigmaHeading: "Bulunduğumuz sahne",
      sigmaSubtext: "Operatörlerin zaten takip ettiği ana etkinlikler ve çevreler.",
      sigmaAwards: [
        "ICE Barcelona — operatör ve affiliate görüşmeleri",
        "SBC Summit Lisbon — sportsbook ve casino ekipleri",
        "SiGMA Europe Malta — trafik, CRM ve SEO turları",
      ],
    },
    faq: {
      heading: "Sık sorulanlar",
      subheading: "Kısa cevaplar.",
      items: [
        {
          question: "Hangi pazarlarda çalışıyorsunuz?",
          answer:
            "Ağırlık Türkiye. Kurallar, kitle, dil, hangi sorgu ne zaman hareket ediyor: bunlara hâkimiz. Rusça / bölge operasyonu da olur, ama ana iş burası.",
        },
        {
          question: "Aylık anlaşma (retainer) nasıl işler?",
          answer:
            "Her ay tek fatura. Ne alıyorsun, hangi kanal, ne sıklık çıktı—başta netleşir. Telegram ve PornHub’da reklam bütçesi ayrı; nereye gittiği raporda.",
        },
        {
          question: "Ne zaman sonuç görürüm?",
          answer:
            "Ücretli trafikte birkaç hafta–iki ay arası hareket beklerim; iş, rezerv, rakibe göre değişir. Arama tarafı aylar. Bot ve takedown daha erken dokunur.",
        },
        {
          question: "Yeni markayla sıfırdan da ele alıyor musunuz?",
          answer:
            "Evet. Kimi sadece reklam ister, kiminde sayfa ve metin de bizden çıkar. Sıfırdan girerken önce neyin gürültü olduğunu ayıklarız, sonra harcama açarız.",
        },
        {
          question: "Tek kanaldan başlasam olur mu?",
          answer:
            "Olur. Birçok iş Telegram veya arama ile başlıyor; yürür, ekleriz. Zorunlu “hepsini al” yok.",
        },
        {
          question: "Jelibon'u diğer ajanslardan ne ayırıyor?",
          answer:
            "Biz sadece bu işe bakıyoruz: kumarhane ve bahis. E-ticaret reçetesi kopyalayıp “casino yaptık” demiyoruz. Ne demek, ne risk yaratır, siz zaten söylersiniz; ona göre hareket ederiz.",
        },
        {
          question: '"Deneme bonusu" gibi kelimelerde SEO yapıyor musunuz?',
          answer:
            "Evet, hem teknik hem içerik. Konu: hangi sayfa neyi anlatacak, birbirine nasıl linklenecek, metin sizin dilinizde mi. Spam çöplüğü gibi büyüme uydurmuyoruz; senin sınırların belli olsun.",
        },
        {
          question:
            "Freespin, doğum günü, yatırımsız, uçak oyunu (Aviator/crash) aramalarında da aynı şey geçerli mi?",
          answer:
            "Evet. Niyet farklı, kurgu benzer: ana sayfalar, yardımcı yazılar, iç link. Söylediğin yasal ve marka sınırı içinde kalırız. Bu iş uzun nefes ister, buna da baştan söyleriz.",
        },
      ] as const,
    },
    calculator: {
      heading: "Paketinizi Oluşturun",
      description:
        "İhtiyacınız olan hizmetleri seçin ve aylık tahmininizi anında görün.",
      totalLabel: "Aylık tahmini",
      selectedLabel: "hizmet seçildi",
      estimateNote:
        "Fiyat kapsam ve hacme göre netleşir.",
      getQuote: "Özel teklif alın",
      customLabel: "Özel fiyatlandırma",
      noneSelected: "Tahmininizi görmek için yukarıdan hizmet seçin.",
      monthSuffix: " / ay",
    },
  },
  ru: {
    header: { telegram: "Telegram" },
    marquee: {
      copy:
        "Jelibon Marketing · iGaming · Реклама в Telegram и сеть каналов · PornHub · SEO · AI-чатбот и инфлюенсер · DMCA · Креативная студия · Индивидуальная разработка · Масштаб в Турции · ",
    },
    nav: {
      solutions: "Решения",
      orbital: "Орбита",
      packages: "Пакеты",
      calculator: "Калькулятор",
      combo: "Полный комплект",
      testimonials: "Отзывы",
      blog: "Блог",
      faq: "FAQ",
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
      tags:
        "Фриспины · бездепозит · день рождения · crash/Aviator · SEO · Telegram · PornHub",
      whyUsHeading: "Почему мы",
      whyUsBullets: [
        "Экспертиза в iGaming и многоканальный трафик.",
        "Долгосрочное SEO и система блог-сети.",
        "Автоматизация, масштабирование и защита бренда в одном комплексе.",
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
        "Полная экосистема роста—кликайте по узлам, чтобы увидеть связи модулей.",
    },
    packages: {
      heading: "Услуги и цены",
      description:
        "Ежемесячные ретейнеры в USD (если не указано иное). Telegram, PornHub, SEO, AI, креатив, DMCA, кастомный софт—выбирайте модули или пакеты ниже. Тиры масштабируются по объему (трафик + креатив).",
      growthPackagesHeading: "Пакеты роста",
      growthPackagesDescription:
        "Готовые наборы—выберите уровень пакета вместо сборки каждого модуля.",
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
        "custom-software": "Индивидуальная разработка",
        "ai-influencer": "AI-инфлюенсер",
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
            "Кластеры под бонусные и игровые интенты (фриспины, бездепозит, birthday, crash/Aviator)",
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
          "Сеть SEO-блогов",
          "Защита по DMCA",
          "Персональная поддержка",
        ],
        extras: [
          "Для операторов, масштабирующихся в Турции и рядом",
          "Мультиканальный трафик + долгосрочное SEO + автоматизация в одном комплексе",
        ],
      },
    },
    combo: {
      flagship: "Флагман",
      description:
        "Лучший ежемесячный комплект: трафик, AI, SEO, защита и прямое операционное сопровождение—для серьёзного масштаба в Турции.",
      getStarted: "Начните сегодня",
      fullGrowthSuiteByLocale: {
        title: "Полный комплект роста",
        subtitle: "Единая iGaming-инфраструктура роста",
        billingNote: "Ежемесячные инвестиции · приоритет и кастомная поддержка",
        includes: [
          "Все ключевые сервисы по трафику и креативам",
          "Система AI-influencer",
          "Сеть SEO-блогов",
          "Защита по DMCA",
          "Персональная поддержка",
        ],
        extras: [
          "Для операторов, масштабирующихся в Турции и рядом",
          "Мультиканальный трафик + долгосрочное SEO + автоматизация в одном комплексе",
        ],
      },
    },
    blog: {
      heading: "Блог",
      description:
        "Заметки о производительности, автоматизации и бренд-безопасности—для команд, работающих в конкурентных рынках.",
      articlesHeading: "Статьи блога",
      viewAllPosts: "Все статьи",
      listEyebrow: "Инсайты",
      breadcrumbs: { home: "Главная", blog: "Блог" },
      categoryLabelsByKey: {
        strategy: "Стратегия",
        performance: "Эффективность",
        compliance: "Соответствие",
      },
    },
    footer: {
      heading: "Jelibon Marketing",
      about:
        "Рост и софт для iGaming в Турции — Telegram, PornHub, SEO, AI, DMCA и кастомные стеки. Свяжитесь с нами в Telegram.",
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
    testimonials: {
      heading: "Что говорят операторы",
      subheading: "Заметки операторов и рыночное присутствие.",
      sigmaHeading: "Где нас видят",
      sigmaSubtext: "Ключевые ивенты и залы, которые и так знает рынок.",
      sigmaAwards: [
        "ICE Barcelona — встречи с операторами и аффилиатами",
        "SBC Summit Lisbon — команды sportsbook и casino",
        "SiGMA Europe Malta — трафик, CRM и SEO-круги",
      ],
    },
    faq: {
      heading: "Часто задаваемые вопросы",
      subheading:
        "Всё, что нужно знать перед стартом.",
      items: [
        {
          question: "На каких рынках вы специализируетесь?",
          answer:
            "Турция — наш основной фокус: у нас глубокое знание местных правил платформ, поведения аудитории и требований комплаенса. Мы также успешно работаем в России, СНГ и Восточной Европе.",
        },
        {
          question: "Как устроена модель ретейнера?",
          answer:
            "Все услуги оплачиваются ежемесячными ретейнерами. Объём, каналы и результаты согласовываются заранее. Рекламные бюджеты для платных каналов (Telegram, PornHub) выставляются отдельно — для полной прозрачности.",
        },
        {
          question: "Когда ожидать первых результатов?",
          answer:
            "Платные каналы (Telegram, PornHub) обычно дают измеримый трафик в течение 4–6 недель. SEO и блог-сети — долгосрочная инвестиция: закладывайте 3–6 месяцев на накопление органического объёма. AI-чатбот и защита DMCA показывают эффект уже в первый месяц.",
        },
        {
          question: "Вы работаете с новыми операторами?",
          answer:
            "Да. Мы регулярно формируем стартовые комплексы для операторов, входящих в Турцию с нуля. Это включает настройку бренда, архитектуру воронки, создание креативов и комплаенс-подготовку до первых трат.",
        },
        {
          question: "Можно ли начать с одной услуги?",
          answer:
            "Конечно. Большинство клиентов начинают с рекламы в Telegram или SEO и добавляют услуги по мере роста. Сочетание каналов повышает эффективность, но минимального пакета нет.",
        },
        {
          question: "Чем Jelibon отличается от обычного performance-агентства?",
          answer:
            "Мы работаем исключительно в вертикали iGaming. Наши креативы, комплаенс и техническая часть построены на нормах казино и ставок — а не адаптированы из e-commerce. Эта специализация сокращает время онбординга и улучшает все KPI с первого дня.",
        },
        {
          question:
            "Помогаете ли вы с SEO под конкурентные турецкие запросы (вроде бонусных и триал-кластеров)?",
          answer:
            "Да. Наша SEO- и блог-сеть заточена под конкурентные iGaming SERP в Турции: карта интентов, структура хабов и кластеров и регулярная публикация — строго в рамках вашего бренда и комплаенса. Мы работаем с такими нишами как с высоким коммерческим спросом, без массового спама.",
        },
        {
          question:
            "Делаете ли SEO под массовые турецкие запросы: фриспины к демо-бонусу, бездепозит, день рождения, crash/Aviator («самолёт»)?",
          answer:
            "Да. Мы выстраиваем коммерческие кластеры в рамках вашего tone of voice и комплаенса: хабы, поддерживающие статьи и перелинковка — с упором на устойчивый органический рост и качество текста, а не на тонкий doorway-спам.",
        },
      ] as const,
    },
    calculator: {
      heading: "Соберите свой пакет",
      description:
        "Включите нужные услуги и сразу увидите ежемесячную оценку.",
      totalLabel: "Ежемесячная оценка",
      selectedLabel: "услуг выбрано",
      estimateNote:
        "Итоговая цена зависит от объёма и целей. Свяжитесь с нами для индивидуального расчёта.",
      getQuote: "Получить расчёт",
      customLabel: "Индивидуальная цена",
      noneSelected: "Выберите услуги выше, чтобы увидеть оценку.",
      monthSuffix: " / мес.",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

