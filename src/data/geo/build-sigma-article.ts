import type { BonusArticleContent } from "@/data/bonus-article";

type SigmaExhibitorInput = {
  name: string;
  slug: string;
  category: string;
  description: string;
  sigmaEvents: readonly string[];
};

export function buildSigmaArticle(
  exhibitor: SigmaExhibitorInput,
): BonusArticleContent {
  const title = exhibitor.name + " — SiGMA iGaming company profile";
  const introText =
    exhibitor.description +
    " Category: " +
    exhibitor.category +
    ". Exhibitor at " +
    exhibitor.sigmaEvents.join(", ") +
    ".";

  return {
    title,
    intro: [introText],
    sections: [
      {
        heading: exhibitor.name + " at SiGMA",
        paragraphs: [
          "SiGMA Euro-Med (Malta), SiGMA Rome and regional summits bring operators, platforms, game studios and payment providers together.",
          exhibitor.name +
            " participates as " +
            exhibitor.category.toLowerCase() +
            " — typical booth focus: B2B partnerships, white-label and product demos.",
        ],
      },
      {
        heading: "Products and services",
        paragraphs: [
          exhibitor.description,
          "Operators evaluating vendors should compare integration time, licensing coverage, payment rails and post-launch support.",
        ],
      },
      {
        heading: "SEO and market relevance",
        paragraphs: [
          "Turkey, Azerbaijan, Russia, Ukraine and EU Tier 2 markets each have distinct licensing and acquisition channels.",
          "Platform and content choices at SiGMA often map to which brands can scale in a given geography.",
        ],
      },
    ],
    checklist: [
      "Verify SiGMA exhibitor list on sigma.world before partnership talks.",
      "Request demo environment and SLA documentation.",
      "Confirm regulated market coverage.",
    ],
    faqs: [
      {
        question: "What does " + exhibitor.name + " do?",
        answer: exhibitor.description,
      },
      {
        question: "Which SiGMA events feature " + exhibitor.name + "?",
        answer: exhibitor.sigmaEvents.join("; "),
      },
      {
        question: "How to contact for partnership?",
        answer:
          "Visit the official SiGMA exhibitor directory or company website from the event app.",
      },
    ],
    relatedBrands: [],
  };
}
