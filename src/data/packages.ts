export type ServicePackage = {
  id: string;
  title: string;
  subtitle?: string;
  /** e.g. "$2,300" — used with default "/ month" unless priceHeadline is set */
  price?: string;
  /** Full price line (skips automatic "/ month" suffix) */
  priceHeadline?: string;
  billingNote?: string;
  badge?: string;
  features: string[];
};

/** À la carte services */
export const servicePackages: ServicePackage[] = [
  {
    id: "telegram-ads",
    title: "Telegram Ads Management",
    price: "$2,760",
    billingNote: "Monthly retainer",
    features: [
      "Campaign setup & targeting",
      "Funnel creation",
      "Creative production",
      "A/B testing",
      "Weekly reporting",
    ],
  },
  {
    id: "telegram-network",
    title: "Telegram Channel Network",
    price: "$4,560",
    billingNote: "Monthly retainer",
    features: [
      "Channel research & negotiation",
      "Native content production",
      "ROI tracking",
      "Scaling strategy",
    ],
  },
  {
    id: "pornhub-ads",
    title: "Adult Ads Management",
    price: "$4,800",
    billingNote: "Monthly retainer · ad spend billed separately",
    features: [
      "Full campaign management",
      "Banner & video creatives",
      "Targeting optimization",
      "Conversion tracking",
    ],
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot System",
    subtitle: "24/7 conversion system",
    price: "$1,560",
    billingNote: "Monthly retainer",
    features: [
      "GPT-powered conversations",
      "Multi-language support",
      "Funnel routing",
      "Basic CRM integration",
    ],
  },
  {
    id: "dmca",
    title: "DMCA & Clone Protection",
    price: "$1,920",
    billingNote: "Monthly retainer",
    features: [
      "Clone detection",
      "Takedown processes",
      "Weekly reporting",
    ],
  },
  {
    id: "creative-funnel",
    title: "Creative & Funnel Production",
    price: "$3,240",
    billingNote: "Monthly retainer",
    features: [
      "Ad creatives",
      "Landing pages",
      "Funnel design",
      "Continuous optimization",
    ],
  },
  {
    id: "seo-blog-network",
    title: "SEO & Blog Network",
    priceHeadline: "From $1,320 / month",
    billingNote:
      "Long-term growth system (typically 3–6 months) · scope affects pricing",
    badge: "SEO",
    features: [
      "SEO blog site setup",
      "Keyword targeting strategy",
      "Content production",
      "Backlink structure",
    ],
  },
  {
    id: "custom-software",
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
  {
    id: "ai-influencer",
    title: "AI Influencer System",
    price: "$2,400",
    billingNote: "Monthly retainer",
    badge: "AI",
    features: [
      "AI-generated influencer models",
      "Custom persona creation (casino niche)",
      "Daily content (Telegram & socials)",
      "Engagement & funnel integration",
      "Traffic redirection to offers",
    ],
  },
];

export type GrowthPackageTier = {
  id: string;
  name: string;
  price: string;
  features: string[];
};

/** Bundled growth packages */
export const growthPackageTiers: GrowthPackageTier[] = [
  {
    id: "starter",
    name: "Starter Package",
    price: "$3,600",
    features: ["Telegram Ads", "Basic creatives", "Funnel setup"],
  },
  {
    id: "growth",
    name: "Growth Package",
    price: "$7,440",
    features: [
      "Telegram Ads + Network",
      "Creative production",
      "Funnel optimization",
    ],
  },
  {
    id: "scale",
    name: "Scale Package",
    price: "$11,400",
    features: [
      "Telegram + Adult Ads",
      "Advanced creatives",
      "Funnel & CRO",
      "Basic SEO support",
      "AI Influencer (lite)",
    ],
  },
  {
    id: "domination",
    name: "Domination Package",
    price: "$15,000",
    features: [
      "All traffic channels",
      "AI Chatbot",
      "AI Influencer (full)",
      "Creative studio",
      "Funnel optimization",
    ],
  },
];

/** Flagship monthly suite */
export const fullGrowthSuite = {
  title: "Full Growth Suite",
  subtitle: "All-in-one iGaming growth infrastructure",
  price: "$18,360",
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
};

