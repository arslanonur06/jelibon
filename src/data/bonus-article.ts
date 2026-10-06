import type { BonusBrandGuide } from "./bonus-guides";
import { getRelatedBrands } from "./brand-related";
import { getPremiumBrandArticle } from "./brand-premium/registry";

import type {
  BonusArticleContent,
  BonusArticleFaqItem,
  BonusArticleSection,
} from "./bonus-article-types";

export type {
  BonusArticleContent,
  BonusArticleFaqItem,
  BonusArticleHighlight,
  BonusArticleSection,
} from "./bonus-article-types";

function buildSections(brand: string): BonusArticleSection[] {
  return [
    {
      heading: `${brand} katalog kaydı`,
      paragraphs: [
        `${brand} bu dizinde yer alır. Ayrıntılı, bağımsız bir inceleme değildir; güncel giriş adresi değişebileceği için doğrulama Telegram botu @emojistarbot üzerinden yapılır.`,
        "Kampanya tutarı, çevrim ve çekim şartları operatöre ve döneme göre değişir. Bu kayıt tahmin veya vaat içermez.",
      ],
    },
    {
      heading: "Nasıl ilerlemelisiniz",
      paragraphs: [
        "Kayıt veya yatırım öncesi güncel linki bottan alın. Bonus türlerini (deneme, yatırım, kayıp iadesi) karıştırmayın; şart metnini okuyun.",
        "Ayrıntılı rehberler popüler marka sayfalarında ve /guvenilir-siteler dizinindedir.",
      ],
    },
  ];
}

function buildFaqs(brand: string): BonusArticleFaqItem[] {
  return [
    {
      question: `${brand} güncel giriş nereden bakılır?`,
      answer:
        "@emojistarbot Telegram botunda paylaşılan güncel yönlendirmeyi kullanın.",
    },
    {
      question: "Bu sayfa tam inceleme mi?",
      answer:
        "Hayır. Katalog kaydıdır. Derin rehberler seçili popüler markalarda yayınlanır.",
    },
  ];
}

function buildChecklist(): string[] {
  return [
    "Promosyon metni ile gerçek şart aynı olmalı.",
    "Çevrim, maksimum çekim ve süre görünür alanda kalmalı.",
    "KYC gerekiyorsa kayıt öncesinde açık yazılmalı.",
    "Güncel giriş adresi Telegram ile doğrulanmalı.",
    "Bonus türleri (deneme, kayıp, yatırım) karıştırılmamalı.",
  ];
}

export function buildBonusArticle(brand: BonusBrandGuide): BonusArticleContent {
  const premium = getPremiumBrandArticle(brand.slug);
  if (premium) return premium;

  return {
    title: `${brand.name} — dizin kaydı`,
    intro: [
      `${brand.name} güvenilir siteler kataloğunda yer alır. Güncel giriş doğrulaması: @emojistarbot.`,
    ],
    sections: buildSections(brand.name),
    checklist: buildChecklist(),
    faqs: buildFaqs(brand.name),
    relatedBrands: getRelatedBrands(brand.slug, [
      "casibom",
      "holiganbet",
      "herkulbet",
      "sezarcasino",
    ]),
  };
}

import "./brand-premium/herkulbet";
import "./brand-premium/sezarcasino";
import "./brand-premium/sezarbet";
import "./brand-premium/popular-profiles";
