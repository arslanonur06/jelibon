import type { Locale } from "@/lib/i18n/locales";
import { blogEntries } from "./entries";
import type { BlogPostEntry, LocalizedBlogPost } from "./types";

const TR_BLOG_COPY_OVERRIDES = {
  "search-demand-editorial-calendar-2026": {
    title: "Arama Verisinden 90 Günlük İçerik Planı Nasıl Çıkarılır?",
    excerpt:
      "Search Console, Telegram soruları ve sezon takvimini aynı tabloda toplayıp gerçekten çalışan bir yayın planı kurmanın kısa yolu.",
  },
  "internal-linking-hub-spoke-casino-2026": {
    title: "Casino SEO’da İç Link Yapısı Nasıl Kurulur?",
    excerpt:
      "Hub ve spoke kurgusuyla ödeme, bonus ve rehber sayfalarını birbirine bağlayıp hem kullanıcıyı hem Google’ı doğru yola sokmak mümkün.",
  },
  "google-search-console-igaming-workflow-2026": {
    title: "iGaming Siteleri İçin Pratik Search Console Rutini",
    excerpt:
      "Hangi rapora ne zaman bakılmalı, hangi sinyal gerçekten aksiyon ister ve ekip boğulmadan GSC nasıl kullanılır?",
  },
  "telegram-organic-paid-unified-2026": {
    title: "Telegram’da Organik ve Reklam Aynı Dili Konuşmalı",
    excerpt:
      "Sabit mesaj, sponsorlu içerik ve influencer akışını tek teklif dili altında toplamazsan performans çok hızlı dağılır.",
  },
  "deneme-bonusu-seo-turkey-2026": {
    title: "Deneme Bonusu Aramalarında Nasıl Öne Çıkılır?",
    excerpt:
      "Tek sayfa şişirmek yerine niyeti ayıran, şartları net yazan ve güven veren bir yapı kurmak neden daha iyi çalışır?",
  },
  "deneme-bonusu-freespin-seo-turkey-2026": {
    title: "Deneme Bonusu ve Freespin Aynı Sayfada mı Olmalı?",
    excerpt:
      "Hangi durumda tek URL yeterli, hangi durumda ayırmak gerekir ve kullanıcıya mekanikleri nasıl net anlatırsın?",
  },
  "dogum-gunu-bonusu-seo-turkey-2026": {
    title: "Doğum Günü Bonusu Sayfası Nasıl Kurgulanmalı?",
    excerpt:
      "CRM tarafı, uygunluk kuralları ve güven dili doğru kurulmazsa bu sorgular çok hızlı ters etki yaratır.",
  },
  "yatirimsiz-bonus-seo-turkey-2026": {
    title: "Yatırımsız Bonus Sayfalarında En Sık Yapılan Hata",
    excerpt:
      "Abartılı vaat yerine açık şartlar, KYC akışı ve net sınırlar yazmak bu tarafta daha güvenli ve daha sürdürülebilir.",
  },
  "telegram-turkey-member-acquisition-2026": {
    title: "Telegram ile Türkiye’de Üye Toplamak İçin Ne Gerekir?",
    excerpt:
      "Kanal akışı, moderasyon hızı, ödeme dili ve bot geçişleri bir araya gelmediğinde trafik var ama dönüşüm yok.",
  },
  "telegram-web-app-onboarding-2026": {
    title: "Telegram Web App ile Kayıt Akışı Nasıl Kısalır?",
    excerpt:
      "Kullanıcıyı sohbetten çıkarmadan ilerleten sade akışlar, özellikle mobil tarafta tamamlama oranını ciddi biçimde artırır.",
  },
  "telegram-igaming-growth-channel-2026": {
    title: "Telegram Neden Hâlâ En Güçlü Büyüme Kanalı?",
    excerpt:
      "Dağıtım, topluluk ve yeniden etkileşimi tek yerde toplayan yapı, özellikle iGaming tarafında Telegram’ı ayrı bir yere koyuyor.",
  },
  "zero-click-brand-serp-igaming-2026": {
    title: "Tıklamasız Sonuçlarda Marka Hikayesi Nasıl Korunur?",
    excerpt:
      "Google cevapları tıklama almadan gösterirken siten, uygulama sayfan ve destek metinlerin aynı şeyi söylemeli.",
  },
  "topical-authority-igaming-seo-2026": {
    title: "Topikal Otorite Gerçekte Nasıl Kurulur?",
    excerpt:
      "Başlık kelimelerin peşinden koşmadan önce hangi kümeyi sahiplenmen gerektiğini netleştirmek daha fazla iş yapar.",
  },
  "inp-core-web-vitals-casino-2026": {
    title: "INP ve Core Web Vitals Neden Hâlâ Kritik?",
    excerpt:
      "Özellikle mobil lobby ve kayıt akışlarında hız sorunu sadece SEO’yu değil, doğrudan dönüşümü de aşağı çeker.",
  },
  "eeat-casino-content-2026": {
    title: "Casino İçeriğinde E-E-A-T Nasıl Gösterilir?",
    excerpt:
      "Deneyim, sorumluluk ve politika netliği görünür değilse iyi yazılmış içerik bile yeterince güven vermez.",
  },
  "ai-overviews-igaming-seo-2026": {
    title: "AI Özetleri Döneminde iGaming SEO Nasıl Değişiyor?",
    excerpt:
      "Atıf alabilen net içerik, düzgün varlık yapısı ve anlaşılır SSS blokları artık çok daha fazla fark yaratıyor.",
  },
  "igaming-growth-stack-2026": {
    title: "iGaming Büyüme Kurgusu Tek Ekipte Nasıl Toplanır?",
    excerpt:
      "Trafik, otomasyon ve marka korumasını ayrı ayrı değil tek operasyon mantığıyla yönetmek neden daha verimli?",
  },
  "telegram-ads-creative-testing": {
    title: "Telegram Reklamlarında Hangi Kreatif Testleri İşe Yarıyor?",
    excerpt:
      "CPA’yı gerçekten etkileyen şey çoğu zaman daha çok varyasyon değil, daha net teklif ve doğru test disiplini.",
  },
  "dmca-brand-safety-ops": {
    title: "DMCA ve Klon Takibi Nasıl Yönetilmeli?",
    excerpt:
      "Ne izlenmeli, ne zaman aksiyon alınmalı ve marka koruma tarafı haftalık olarak nasıl raporlanmalı?",
  },
  "seo-blog-network-igaming-turkey": {
    title: "Türkçe Pazarda SEO Blog Ağı Ne İşe Yarar?",
    excerpt:
      "Tek blogla ilerlemek yerine doğru kurgulanmış bir ağla organik görünürlüğü daha düzenli büyütmek mümkün.",
  },
  "ai-influencer-casino-marketing": {
    title: "AI Influencer Modelleri Yeni Bir Kanal Olabilir mi?",
    excerpt:
      "Doğru persona ve net funnel kurulursa AI influencer akışları klasik satın alımlardan daha ölçülebilir hale gelir.",
  },
  "pornhub-ads-igaming-operators": {
    title: "PornHub Reklamları iGaming’de Nasıl Çalışır?",
    excerpt:
      "Doğru saat, doğru kreatif ve net landing kurgusu olmadan bu kanal sadece gösterim üretir.",
  },
} as const;

function applyLocaleOverrides(
  slug: string,
  locale: Locale,
  block: BlogPostEntry["locales"][Locale],
): BlogPostEntry["locales"][Locale] {
  if (locale !== "tr") return block;

  const override = TR_BLOG_COPY_OVERRIDES[slug as keyof typeof TR_BLOG_COPY_OVERRIDES];
  if (!override) return block;

  return {
    ...block,
    ...override,
  };
}

const TR_BODY_REPLACEMENTS: ReadonlyArray<readonly [string, string]> = [
  [" hub ", " merkez sayfa "],
  [" Hub ", " Merkez sayfa "],
  [" spoke ", " alt sayfa "],
  [" Spoke ", " Alt sayfa "],
  ["hub’", "merkez sayfa "],
  ["spoke’", "alt sayfa "],
  ["landing", "açılış sayfası"],
  ["attribution", "ölçümleme"],
  ["guardrail", "çerçeve"],
  ["snippet", "arama sonucu metni"],
  ["hook", "açılış cümlesi"],
  ["brief", "içerik planı"],
  ["onboarding", "ilk kayıt akışı"],
  ["programatik SEO", "seri üretilmiş SEO"],
  ["kanonik", "ana"],
  ["uyum dili", "uyumluluk dili"],
  ["story", "anlatı"],
  ["persona", "karakter"],
  ["CRM kuralıyla aynı gün", "CRM kuralı güncellendiği gün"],
  ["gürültü", "yanıltıcı dalgalanma"],
  ["çapa", "bağlantı metni"],
  ["edge önbellek", "uç önbellek"],
  ["saha verisidir", "gerçek kullanıcı verisidir"],
  ["gövde", "metin"],
];

function normalizeTurkishBodyParagraph(paragraph: string): string {
  let value = paragraph;

  for (const [from, to] of TR_BODY_REPLACEMENTS) {
    value = value.split(from).join(to);
  }

  return value
    .replace(/“/g, '"')
    .replace(/”/g, '"')
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();
}

function pickLocale(
  entry: BlogPostEntry,
  locale: Locale,
): BlogPostEntry["locales"][Locale] {
  const block = entry.locales[locale] ?? entry.locales.en;
  const localizedBlock = applyLocaleOverrides(entry.slug, locale, block);

  if (locale !== "tr") {
    return localizedBlock;
  }

  return {
    ...localizedBlock,
    body: localizedBlock.body.map(normalizeTurkishBodyParagraph),
  };
}

export function getLocalizedPost(
  slug: string,
  locale: Locale,
): LocalizedBlogPost | undefined {
  const entry = blogEntries.find((e) => e.slug === slug);
  if (!entry) return undefined;
  const block = pickLocale(entry, locale);
  return {
    slug: entry.slug,
    date: entry.date,
    coverImage: entry.coverImage,
    title: block.title,
    excerpt: block.excerpt,
    readTime: block.readTime,
    categoryKey: block.categoryKey,
    body: block.body,
  };
}

export function getPostsForLocale(locale: Locale): LocalizedBlogPost[] {
  return blogEntries
    .map((entry) => {
      const block = pickLocale(entry, locale);
      return {
        slug: entry.slug,
        date: entry.date,
        coverImage: entry.coverImage,
        title: block.title,
        excerpt: block.excerpt,
        readTime: block.readTime,
        categoryKey: block.categoryKey,
        body: block.body,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllSlugs(): string[] {
  return blogEntries.map((e) => e.slug);
}
