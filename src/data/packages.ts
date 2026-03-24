export type ServicePackage = {
  id: string;
  title: string;
  subtitle?: string;
  price: string;
  /** Shown under the price (billing notes, separate budgets, etc.) */
  billingNote?: string;
  badge?: string;
  features: string[];
};

export const servicePackages: ServicePackage[] = [
  {
    id: "pornhub-ads",
    title: "PornHub Advertising Management",
    price: "$8,500",
    billingNote: "Ad budget billed separately by client",
    features: [
      "Full campaign management — setup and ongoing optimization",
      "Banner and video ads (10+ A/B variants)",
      "Advanced bid and targeting optimization",
      "Landing page CRO and conversion tracking",
      "Weekly executive reports",
    ],
  },
  {
    id: "telegram-network",
    title: "Adult Telegram Channel Network",
    price: "$6,500",
    billingNote: "Placement costs billed separately by client",
    features: [
      "Premium channel research and vetting",
      "Direct deal negotiation",
      "Native content creation",
      "Performance tracking with ROI measurement",
      "Network expansion strategy",
    ],
  },
  {
    id: "telegram-ads",
    title: "Telegram Ads Management",
    price: "$5,000",
    billingNote: "Ad budget billed separately by client",
    features: [
      "Paid traffic funnels",
      "Campaign setup and audience segmentation",
      "High-converting creatives and copy",
      "Funnel architecture with A/B testing",
      "Continuous bid optimization",
      "Weekly performance reporting",
    ],
  },
  {
    id: "ai-chatbot",
    title: "AI Telegram Chatbot",
    subtitle: "24/7 intelligent conversion engine",
    price: "$2,000",
    billingNote: "Maintenance retainer for continuous 24/7 operation",
    features: [
      "GPT-4 powered engine for unlimited conversations",
      "Smart casino routing and multi-language support (10+ languages)",
      "CRM integration with VIP tier flows",
      "Personalized customer journeys",
    ],
  },
  {
    id: "dmca",
    title: "DMCA & Clone Protection",
    price: "$4,000",
    billingNote: "Complete brand protection suite",
    features: [
      "Real-time detection — continuous clone site monitoring across domains",
      "Rapid takedowns — DMCA filings and hosting complaints",
      "Weekly reports — brand safety updates and legal escalation pipeline",
    ],
  },
  {
    id: "creative",
    title: "Design & Creative Production",
    price: "$5,500",
    billingNote: "Unlimited revisions included",
    features: [
      "Premium visual studio — high-impact banner and ad creatives",
      "Custom landing page design",
      "Telegram visual identity kit",
      "Video editing and motion graphics",
      "Continuous production pipeline",
    ],
  },
];

export const fullCombo = {
  title: "Full Combo Package",
  subtitle: "Complete iGaming Growth Suite",
  price: "$27,500",
  billingNote: "Monthly investment",
  includes: [
    "PornHub Ads",
    "Telegram Network",
    "Telegram Ads",
    "AI Chatbot",
    "DMCA Protection",
    "Design Package",
  ],
  extras: [
    "Priority support and dedicated account manager",
    "Comprehensive scaling strategy",
    "All six services combined for maximum impact",
  ],
};
