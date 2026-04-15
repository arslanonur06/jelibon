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
        "Jelibon Marketing · iGaming acquisition · Telegram Ads & network · PornHub · SEO · freespin & no-deposit SERPs · birthday bonus · crash / Aviator · AI chatbot & influencer · DMCA · Creative · Custom dev · Scale in Türkiye · ",
    },
    nav: {
      solutions: "Solutions",
      orbital: "Orbit",
      packages: "Packages",
      calculator: "Estimator",
      combo: "Full suite",
      testimonials: "Reviews",
      blog: "Blog",
      faq: "FAQ",
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
      description:
        "Our top monthly stack: traffic, AI, SEO, protection, and hands-on support—built for serious scale in Türkiye.",
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
      description:
        "Notes on performance, automation, and brand safety—built for teams shipping in competitive markets.",
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
      about:
        "Growth & software for iGaming in Türkiye—Telegram, PornHub, SEO, AI, DMCA, and custom stacks. Reach us on Telegram.",
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
      heading: "Results, Not Promises",
      subheading:
        "Our partners share what changed after working with us.",
    },
    faq: {
      heading: "Frequently Asked Questions",
      subheading:
        "Everything you need to know before getting started.",
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
        "Final pricing is scoped to your volume and goals. Contact us for a custom quote.",
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
        "Jelibon Marketing · iGaming büyümesi · deneme bonusu freespin · doğum günü bonusu · yatırımsız bonus · uçak oyunu · Aviator/crash SEO · Telegram & ağ · PornHub · AI · DMCA · Kreatif · Özel yazılım · Türkiye'de ölçek · ",
    },
    nav: {
      solutions: "Çözümler",
      orbital: "Yörünge",
      packages: "Paketler",
      calculator: "Hesaplayıcı",
      combo: "Eksiksiz paket",
      testimonials: "Referanslar",
      blog: "Blog",
      faq: "SSS",
      contact: "İletişim",
    },
    language: { en: "English", tr: "Türkçe", ru: "Русский" },
    hero: {
      tagline: "Türkiye'ye özel büyüme & yazılım",
      textColorLines: ["Trafik.", "Ölçek.", "Kazan."],
      description:
        "Deneme bonusu freespin, doğum günü bonusu, yatırımsız bonus ve uçak oyunu (Aviator/crash) gibi yüksek hacimli aramalarda SEO; Telegram ve PornHub ile trafik, AI otomasyonu, influencer, kreatif, DMCA ve özel yazılım—Türkiye pazarına göre.",
      viewPackages: "Paketleri görüntüle",
      readBlog: "Blogu oku",
      tags:
        "Deneme bonusu freespin · doğum günü bonusu · yatırımsız bonus · uçak oyunu · SEO · Telegram",
      whyUsHeading: "Neden Biz",
      whyUsBullets: [
        "iGaming odaklı uzmanlık & çok kanallı trafik.",
        "Uzun vadeli SEO & blog ağı sistemleri.",
        "Tek pakette otomasyon, ölçeklenebilirlik ve marka koruması.",
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
      description:
        "Aylık öne çıkan paketimiz: trafik, AI, SEO, koruma ve birebir operasyonel destek—Türkiye'de ciddi ölçek için tasarlandı.",
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
      description:
        "Performans, otomasyon ve marka güvenliği üzerine notlar—rekabetçi pazarlarda ilerleyen ekipler için.",
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
      about:
        "Türkiye'de iGaming için büyüme & yazılım—Telegram, PornHub, SEO, AI, DMCA ve özel paketler. Bize Telegram üzerinden ulaşın.",
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
      heading: "Söz Değil, Sonuç",
      subheading:
        "Partnerlerimiz birlikte çalıştıktan sonra ne değiştiğini anlatıyor.",
    },
    faq: {
      heading: "Sık Sorulan Sorular",
      subheading:
        "Başlamadan önce bilmeniz gereken her şey.",
      items: [
        {
          question: "Hangi pazarlarda uzmanlaşıyorsunuz?",
          answer:
            "Öncelikli odağımız Türkiye—platform kuralları, kitle davranışı ve uyumluluk gereksinimleri konusunda derin yerel bilgiye sahibiz. Rusya, BDT ve Doğu Avrupa'da da başarılı şekilde hizmet veriyoruz.",
        },
        {
          question: "Retainer modeli nasıl çalışır?",
          answer:
            "Tüm hizmetler aylık retainer olarak faturalandırılır. Kapsam, kanallar ve çıktı hacmi önceden belirlenir. Ücretli medya (Telegram, PornHub) için reklam harcaması ayrı faturalandırılır; böylece tam şeffaflık sağlanır.",
        },
        {
          question: "Sonuçları ne zaman görmeye başlarım?",
          answer:
            "Ücretli kanallar (Telegram, PornHub) genellikle 4–6 hafta içinde ölçülebilir trafik sağlar. SEO ve blog ağları uzun vadeli yatırımlardır—organik hacmin birikmesi için 3–6 ay öngörün. AI sohbet botu ve DMCA koruması ilk aydan itibaren etki gösterir.",
        },
        {
          question: "Yeni operatörlerle çalışıyor musunuz?",
          answer:
            "Evet. Türkiye pazarına sıfırdan giren operatörler için düzenli olarak lansman paketleri oluşturuyoruz. Bu; marka kurulumu, funnel mimarisi, kreatif prodüksiyon ve ilk harcama öncesi uyumluluk temellerini kapsar.",
        },
        {
          question: "Tek bir hizmetle başlayabilir miyim?",
          answer:
            "Kesinlikle. Çoğu müşteri Telegram Reklamları veya SEO ile başlar ve büyüdükçe hizmet ekler. Kanalları birleştirmek verimliliği artırır, ancak minimum paket zorunluluğu yoktur.",
        },
        {
          question: "Jelibon'u genel bir performans ajansından ayıran ne?",
          answer:
            "Yalnızca iGaming sektöründe faaliyet gösteriyoruz. Kreatif, uyumluluk ve teknik çalışmalarımız casino ve bahis normları üzerine inşa edilmiştir—e-ticaret playbook'larından uyarlanmamıştır. Bu uzmanlaşma, onboarding süresini kısaltır ve birinci günden itibaren tüm KPI'ları iyileştirir.",
        },
        {
          question:
            '"Deneme bonusu" gibi yüksek rekabetli Türkçe aramalarda SEO çalışması yapıyor musunuz?',
          answer:
            "Evet. SEO ve blog ağımız Türkiye'deki rekabetçi iGaming SERP'leri için tasarlandı: arama niyeti haritalama, hub–spoke mimarisi ve sürdürülebilir yayıncılık—markanız ve uyumluluk kurallarınız çerçevesinde. Bu sorguları ticari niyet alanları olarak ele alır, kalıcı otorite inşa etmeyi hedefleriz.",
        },
        {
          question:
            "Deneme bonusu freespin, doğum günü bonusu, yatırımsız bonus ve uçak oyunu (Aviator/crash) gibi çok aranan konularda SEO desteği veriyor musunuz?",
          answer:
            "Evet. Bu tür yüksek hacimli aramaları onayladığınız mesaj ve uyumluluk çerçevesinde cluster'lar halinde planlarız: hub sayfalar, destekleyici içerikler ve iç bağlantı. Amaç; E-E-A-T ve marka diliyle sürdürülebilir sıralama kazanmak, düşük kaliteli affiliate spam’ine düşmeden organik büyümeyi ölçeklemektir.",
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
        "Nihai fiyatlandırma hacminize ve hedeflerinize göre belirlenir. Özel teklif için bize ulaşın.",
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
        "Jelibon Marketing · iGaming · SEO под турецкий спрос: фриспины, бездепозит, день рождения, crash/Aviator · Telegram и сеть · PornHub · AI · DMCA · Креатив · Индивидуальная разработка · Турция · ",
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
      heading: "Результаты, не обещания",
      subheading:
        "Наши партнёры рассказывают, что изменилось после работы с нами.",
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

