import type { BonusBrandGuide } from "./bonus-guides";

export type BonusArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type BonusArticleFaqItem = {
  question: string;
  answer: string;
};

export type BonusArticleHighlight = {
  label: string;
  value: string;
};

export type BonusArticleContent = {
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  tagline?: string;
  intro: string[];
  sections: BonusArticleSection[];
  checklist: string[];
  faqs: BonusArticleFaqItem[];
  relatedBrands: BonusBrandGuide[];
  premium?: boolean;
  highlights?: BonusArticleHighlight[];
  paymentMethods?: readonly string[];
  gameCategories?: readonly string[];
  extraKeywords?: readonly string[];
};
