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
      heading: `${brand} site, güncel adres ve arama niyeti`,
      paragraphs: [
        `${brand} aramalarında kullanıcı niyeti tek başlıktan oluşmaz. Aynı markada “site”, “güncel adres”, “güncel giriş”, “deneme bonusu”, “freespin”, “yatırımsız bonus” ve “uçak oyunu” sorguları farklı beklentiler taşır. Bu nedenle içerik tek paragraf değil, niyet bazlı alt başlıklarla modellenmelidir.`,
        "Odak; giriş aramalarını, bonus kümelerini ve yüksek niyetli sorguları aynı yapıda toplamaktır.",
      ],
    },
    {
      heading: "Bulunan bonuslar nasıl gruplandırılmalı?",
      paragraphs: [
        `${brand} özelinde önerilen yapı: deneme bonusu, freespin, doğum günü bonusu, yatırımsız bonus ve crash / uçak oyunu aramalarını ayrı niyet kümeleri hâlinde ele almaktır. Bu modelde kullanıcı önce kısa özet görür, ardından bonus türlerine göre detay bölümlere iner ve sonunda tek aksiyon kanalına yönlendirilir.`,
        "Böylece her bonus başlığı ayrı görünür, sayfa tek merkezden güncel kalır.",
      ],
    },
    {
      heading: "Bilgilendirme sayfası mimarisi",
      paragraphs: [
        `${brand} özelinde önerilen yapı: sorgu niyetine göre bölümleme + SSS + karşılaştırma tabloları. Bu modelde kullanıcı önce kısa özet görür, ardından bonus türlerine göre detay bölümlere iner ve sonunda tek aksiyon kanalına yönlendirilir.`,
        "Tek sayfada net başlıklar, kısa bloklar ve hızlı yönlendirme kullanılır.",
      ],
    },
    {
      heading: "Güncel giriş bonus şartları nasıl yazılmalı?",
      paragraphs: [
        `${brand} sayfasında şart metinleri kısa ama eksiksiz olmalıdır: bonus tutarı, çevrim oranı, geçerli oyun kategorileri, maksimum çekim limiti ve son kullanım tarihi.`,
        "Şartlar değiştiğinde sayfa metni ve yönlendirme aynı anda güncellenmelidir.",
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
    "Promosyon metni ile gerçek şartlar birebir eşleşmelidir.",
    "Çevrim, maksimum çekim ve süre bilgileri görünür alanda olmalıdır.",
    "KYC onayı gerekiyorsa kayıt öncesi açık şekilde belirtilmelidir.",
    "Bölgesel/lisans farklılıkları varsa tek satır dipnot yerine detaylı açıklama verilmelidir.",
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
      `${brand.name} için site, güncel adres, güncel giriş ve bonus başlıklarını tek sayfada topluyoruz.`,
      "Deneme bonusu, freespin, yatırımsız bonus, doğum günü bonusu ve crash / uçak oyunu aramaları için hızlı erişim burada.",
    ],
    sections: buildSections(brand.name),
    checklist: buildChecklist(),
    faqs: buildFaqs(brand.name),
    relatedBrands,
  };
}
