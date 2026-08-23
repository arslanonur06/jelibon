import type { BonusBrandGuide } from "./bonus-guides";
import { bonusBrandGuides } from "./bonus-guides";
import { BRAND_SEARCH_INTENTS } from "./brand-seo-intents";

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
      heading: `${brand} güncel giriş adresi`,
      paragraphs: [
        `${brand} güncel giriş ve güncel giriş adresi bilgisi bu sayfada özetlenir. Adres ve giriş akışı değişebileceği için en güncel yönlendirme Telegram botu @emojistarbot üzerinden paylaşılır.`,
        `${brand} mobil giriş ve masaüstü giriş aynı hesap akışına bağlanır; sayfa yalnızca bilgilendirme amaçlıdır.`,
      ],
    },
    {
      heading: `${brand} deneme bonusu ve kampanyalar`,
      paragraphs: [
        `${brand} deneme bonusu, yatırımsız bonus, yatırım bonusu, kayıp bonusu, jest bonusu ve doğum günü bonusu başlıkları ayrı değerlendirilir.`,
        "Kampanya tutarı ve çevrim şartları dönemsel güncellenir; Telegram üzerinden doğrulanmış bilgi alınması önerilir.",
      ],
    },
    {
      heading: `${brand} ödeme ve güven`,
      paragraphs: [
        `${brand} yatırım yöntemleri (kredi kartı, havale, kripto vb.) operatöre göre değişir. KYC ve çekim limitleri bonus kullanımından önce kontrol edilmelidir.`,
      ],
    },
    {
      heading: "Arama niyetleri",
      paragraphs: [
        `Bu rehber; ${BRAND_SEARCH_INTENTS.slice(0, 8).join(", ")} gibi sorgular için ${brand} odaklı tek kanonik sayfadır.`,
      ],
    },
  ];
}

function buildFaqs(brand: string): BonusArticleFaqItem[] {
  return [
    {
      question: `${brand} güncel giriş adresi nereden alınır?`,
      answer:
        "Güncel giriş ve adres bilgisi @emojistarbot Telegram botunda paylaşılır. Doğrulanmış yönlendirme için bot üzerinden ilerleyin.",
    },
    {
      question: `${brand} deneme bonusu şartları nerede görülür?`,
      answer:
        "Deneme bonusu, freespin ve çevrim şartları kampanya dönemine göre değişir. Güncel tutar ve kurallar Telegram üzerinden iletilir.",
    },
    {
      question: `${brand} kayıp bonusu ve haftalık kayıp bonusu var mı?`,
      answer:
        "Kayıp bonusu ve haftalık kayıp bonusu operatör kampanyasına bağlıdır. Detay için @emojistarbot ile iletişime geçin.",
    },
    {
      question: `${brand} yatırım bonusu ile yatırımsız bonus farkı nedir?`,
      answer:
        "Yatırım bonusu para yatırma sonrası verilir; yatırımsız bonus hesap açılışı veya promosyon kodu ile tanımlanabilir. Şartlar farklıdır.",
    },
    {
      question: `${brand} için jest bonusu ve doğum günü bonusu nasıl takip edilir?`,
      answer:
        "Jest bonusu ve doğum günü bonusu CRM kampanyalarına bağlıdır. @emojistarbot üzerinden güncel liste isteyebilirsiniz.",
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
  const seed = hashSeed(brand.slug);
  const relatedBrands = bonusBrandGuides
    .filter((item) => item.slug !== brand.slug)
    .slice(seed % 9, (seed % 9) + 6);

  return {
    title: `${brand.name} güncel giriş adresi ve bonus rehberi`,
    intro: [
      `${brand.name} güncel giriş adresi, giriş, deneme bonusu ve diğer kampanya başlıkları — bilgilendirme rehberi. Güncel yönlendirme: @emojistarbot.`,
    ],
    sections: buildSections(brand.name),
    checklist: buildChecklist(),
    faqs: buildFaqs(brand.name),
    relatedBrands,
  };
}
