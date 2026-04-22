import type { BonusBrandGuide } from "./bonus-guides";
import { bonusBrandGuides } from "./bonus-guides";

type BonusArticleSection = {
  heading: string;
  paragraphs: string[];
};

type BonusArticleFaqItem = {
  question: string;
  answer: string;
};

export type BonusArticleContent = {
  title: string;
  intro: string[];
  sections: BonusArticleSection[];
  checklist: string[];
  faqs: BonusArticleFaqItem[];
  relatedBrands: BonusBrandGuide[];
};

function hashSeed(value: string): number {
  let hash = 0;
  for (const char of value) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }
  return hash;
}

function buildSections(brand: string): BonusArticleSection[] {
  return [
    {
      heading: `${brand} giriş ve adres tarafı`,
      paragraphs: [
        `${brand} tarafında giriş, güncel adres ve mobil erişim başlıkları aynı akışta ilerler.`,
      ],
    },
    {
      heading: "Bonus başlıkları",
      paragraphs: [
        "Deneme bonusu, freespin, yatırımsız bonus ve doğum günü bonusu ayrı başlıklarda tutulur.",
      ],
    },
    {
      heading: "Şart tarafı",
      paragraphs: [
        `${brand} sayfasında bonus tutarı, çevrim, geçerli oyunlar, maksimum çekim ve süre bilgisi net görünmelidir.`,
      ],
    },
  ];
}

function buildFaqs(brand: string): BonusArticleFaqItem[] {
  return [
    {
      question: `${brand} güncel giriş bilgisi nereden takip edilir?`,
      answer:
        "En güncel giriş ve kampanya akışı Telegram hesabı @jelibonmarketing üzerinden paylaşılır.",
    },
    {
      question: `${brand} deneme bonusu / freespin şartları neden sık değişiyor?`,
      answer:
        "Bonus kampanyaları dönemsel olarak güncellenir. Bu yüzden şartlar; tarih, çevrim, limit ve uygunluk kriterleriyle birlikte düzenli kontrol edilmelidir.",
    },
    {
      question: `${brand} yatırımsız bonus metninde en kritik detay nedir?`,
      answer:
        "KYC doğrulaması, çekim limiti ve çevrim kuralı net değilse kullanıcı memnuniyeti düşer. Bu üç başlık açık yazılmalıdır.",
    },
  ];
}

function buildChecklist(): string[] {
  return [
    "Promosyon metni ile gerçek şart aynı olmalı.",
    "Çevrim, maksimum çekim ve süre görünür alanda kalmalı.",
    "KYC gerekiyorsa kayıt öncesinde açık yazılmalı.",
    "Bölgesel fark varsa tek satır geçilmemeli.",
  ];
}

export function buildBonusArticle(brand: BonusBrandGuide): BonusArticleContent {
  const seed = hashSeed(brand.slug);
  const relatedBrands = bonusBrandGuides
    .filter((item) => item.slug !== brand.slug)
    .slice(seed % 9, (seed % 9) + 6);

  return {
    title: `${brand.name} site, güncel adres ve bonus rehberi`,
    intro: [
      `${brand.name} güncel adres, giriş ve bonus başlıkları.`,
    ],
    sections: buildSections(brand.name),
    checklist: buildChecklist(),
    faqs: buildFaqs(brand.name),
    relatedBrands,
  };
}
