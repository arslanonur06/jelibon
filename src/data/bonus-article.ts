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

function pickBySeed<T>(items: readonly T[], seed: number, index: number): T {
  return items[(seed + index) % items.length];
}

const AUDIT_ANGLES = [
  "kayıt bonusu uygunluk kriterleri",
  "deneme bonusu ve freespin şartlarının netliği",
  "yatırımsız bonus metninde KYC ve çekim açıklığı",
  "uçak oyunu/crash kampanyalarında risk anlatımı",
] as const;

const CONTENT_SYSTEMS = [
  "hub + destekleyici içerik + iç bağlantı",
  "sorgu niyetine göre bölümleme + SSS + karşılaştırma tabloları",
  "marka sorguları için güncelleme logu + şartlar özeti",
  "bonus türüne göre niyet kümeleri + arama talebi haritası",
] as const;

const COMPLIANCE_NOTES = [
  "Promosyon metni ile gerçek şartlar birebir eşleşmelidir.",
  "Çevrim, maksimum çekim ve süre bilgileri görünür alanda olmalıdır.",
  "KYC onayı gerekiyorsa kayıt öncesi açık şekilde belirtilmelidir.",
  "Bölgesel/lisans farklılıkları varsa tek satır dipnot yerine detaylı açıklama verilmelidir.",
] as const;

function buildSections(brand: string, seed: number): BonusArticleSection[] {
  const angle = pickBySeed(AUDIT_ANGLES, seed, 0);
  const system = pickBySeed(CONTENT_SYSTEMS, seed, 1);

  return [
    {
      heading: `${brand} için arama niyeti ve kelime kümeleri`,
      paragraphs: [
        `${brand} aramalarında kullanıcı niyeti tek başlıktan oluşmaz. Aynı markada “giriş”, “güncel giriş”, “deneme bonusu”, “freespin”, “yatırımsız bonus” ve “uçak oyunu” sorguları farklı beklentiler taşır. Bu nedenle içerik tek paragraf değil, niyet bazlı alt başlıklarla modellenmelidir.`,
        `Biz bu marka için SEO çerçevesini özellikle ${angle} odağıyla ele alıyoruz. Amaç sadece trafik değil; doğru beklenti yönetimi, doğru kelime eşleşmesi ve yüksek dönüşüm niyeti taşıyan sorguları temiz bilgiyle karşılamaktır.`,
      ],
    },
    {
      heading: "Bilgilendirme sayfası mimarisi",
      paragraphs: [
        `${brand} özelinde önerilen yapı: ${system}. Bu modelde kullanıcı önce kısa özet görür, ardından bonus türlerine göre detay bölümlerine iner ve sonunda tek aksiyon kanalına yönlendirilir.`,
        "Bu yaklaşım hem kullanıcı deneyimi hem de arama motoru açısından güçlüdür. Çünkü içerik dağınık kopyalar yerine tek kaynakta güncellenir; başlıklar, metinler ve yönlendirme dili birbiriyle çelişmez.",
      ],
    },
    {
      heading: "Güncel giriş bonus şartları nasıl yazılmalı?",
      paragraphs: [
        `${brand} sayfasında şart metinleri kısa ama eksiksiz olmalıdır: bonus tutarı, çevrim oranı, geçerli oyun kategorileri, maksimum çekim limiti ve son kullanım tarihi.`,
        "Şartlar değiştiğinde yalnızca reklam görseli değil, sayfa metni de aynı gün güncellenmelidir. Eski/çelişkili bilgi arama motorunda güven kaybı yaratır ve CTR düşüşü üretir.",
      ],
    },
    {
      heading: "Yönlendirme ve iletişim akışı",
      paragraphs: [
        `${brand} için tüm yönlendirme trafiği tek kanal üzerinden yönetilmelidir. Bu sayfada aksiyon butonlarının tamamı Telegram hesabı @jelibonmarketing adresine gider.`,
        "Tek kanal yaklaşımı, kullanıcının farklı sahte bağlantılara gitmesini engeller; aynı zamanda destek, güncelleme ve kampanya metinlerinin tek merkezden yönetilmesini sağlar.",
      ],
    },
  ];
}

function buildFaqs(brand: string): BonusArticleFaqItem[] {
  return [
    {
      question: `${brand} güncel giriş bilgisi nereden takip edilir?`,
      answer:
        "Bu sayfa bilgilendirme amaçlıdır; en güncel giriş ve kampanya yönlendirmesi Telegram hesabı @jelibonmarketing üzerinden paylaşılır.",
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

function buildChecklist(seed: number): string[] {
  return Array.from({ length: 4 }).map((_, index) =>
    pickBySeed(COMPLIANCE_NOTES, seed, index),
  );
}

export function buildBonusArticle(brand: BonusBrandGuide): BonusArticleContent {
  const seed = hashSeed(brand.slug);
  const relatedBrands = bonusBrandGuides
    .filter((item) => item.slug !== brand.slug)
    .slice(seed % 9, (seed % 9) + 6);

  return {
    title: `${brand.name} güncel giriş bonus rehberi`,
    intro: [
      `${brand.name} için hazırlanan bu sayfa, bonus odaklı arama niyetlerini tek noktada toplar: deneme bonusu freespin, doğum günü bonusu, yatırımsız bonus ve uçak oyunu/crash sorguları.`,
      "Metinler bilgilendirme amaçlıdır; kullanıcıyı tek bir doğrulanmış iletişim kanalına yönlendirmek ve güncel şartların doğru anlaşılmasını sağlamak hedeflenir.",
    ],
    sections: buildSections(brand.name, seed),
    checklist: buildChecklist(seed),
    faqs: buildFaqs(brand.name),
    relatedBrands,
  };
}
