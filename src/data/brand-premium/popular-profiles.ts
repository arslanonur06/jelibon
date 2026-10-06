import type { BonusArticleContent } from "../bonus-article-types";
import { getRelatedBrands } from "../brand-related";
import { registerPremiumBrand } from "./registry";

type PopularProfile = {
  slug: string;
  name: string;
  focus: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  intro: [string, string];
  highlights: BonusArticleContent["highlights"];
  paymentMethods: string[];
  gameCategories: string[];
  extraKeywords: string[];
  angle: string;
  paymentNote: string;
  productNote: string;
  riskNote: string;
};

const PROFILES: PopularProfile[] = [
  {
    slug: "casibom",
    name: "Casibom",
    focus: "Casino + yüksek arama hacmi",
    tagline:
      "Casibom giriş, bonus çevrimi ve ödeme notları — şablon liste değil, kontrol listesi.",
    metaTitle: "Casibom güncel giriş 2026 — bonus, Papara, mobil rehber",
    metaDescription:
      "Casibom güncel giriş adresi, deneme/yatırım bonusu, Papara ve çekim kontrol listesi. Adres doğrulama: @emojistarbot.",
    intro: [
      "Casibom, Türkiye’de “güncel giriş” ve deneme bonusu aramalarında en sık karşılaşılan markalardan biridir. Bu sayfa kampanya vaadi vermez; giriş doğrulama, bonus türleri ve çekim öncesi KYC adımlarını ayırır.",
      "Mirror adresler sık değişir. Kayıt veya yatırım öncesi yalnızca @emojistarbot üzerinden paylaşılan güncel Casibom linkini kullanın.",
    ],
    highlights: [
      { label: "Arama niyeti", value: "Giriş + deneme bonusu" },
      { label: "Odak", value: "Slot ve canlı casino" },
      { label: "Ödeme", value: "Papara / havale / kripto" },
      { label: "Doğrulama", value: "@emojistarbot" },
    ],
    paymentMethods: ["Papara", "Havale / FAST", "USDT", "Cepbank"],
    gameCategories: ["Slot", "Canlı casino", "Crash", "Spor bahis"],
    extraKeywords: ["casibom giriş", "casibom deneme bonusu", "casibom papara"],
    angle:
      "Casibom sayfalarında en sık görülen hata, deneme bonusu ile hoş geldin yatırım bonusunun aynı cümlede vaat edilmesidir. İkisi ayrı kampanyadır; çevrim ve max çekim farklıdır.",
    paymentNote:
      "Papara yatırımlarında hesap adı eşleşmesi beklenir. İlk çekimde kimlik ve ödeme kanıtı istenebilir; belge net değilse işlem beklemeye alınır.",
    productNote:
      "Lobi ağırlığı slot ve canlı masadadır. Canlı rulet ile bonus çevrimi genelde slottan daha düşük katkı alır; şarttaki yüzdeyi okuyun.",
    riskNote:
      "Yüksek arama hacmi aynı zamanda sahte Casibom klonlarını artırır. SSL uyarısı, farklı Telegram kullanıcı adı veya IBAN paylaşımı kırmızı bayraktır.",
  },
  {
    slug: "holiganbet",
    name: "Holiganbet",
    focus: "Spor + casino karma",
    tagline: "Holiganbet giriş, kupon ve bonus şartlarını aynı sayfada ayırın.",
    metaTitle: "Holiganbet güncel giriş 2026 — spor bahis, bonus, mobil",
    metaDescription:
      "Holiganbet güncel giriş, spor bahis / casino ayrımı, bonus çevrimi ve ödeme notları. Güncel link: @emojistarbot.",
    intro: [
      "Holiganbet hem spor kuponu hem casino lobisi arayan kullanıcıların aynı oturumda karıştırdığı markalardandır. Bonus çevrimi hangi üründe tanımlandıysa o üründe tamamlanır.",
      "Güncel giriş adresi @emojistarbot ile doğrulanır. Eski yer imleri phishing riski taşır.",
    ],
    highlights: [
      { label: "Ürün mix", value: "Spor + casino" },
      { label: "Kritik", value: "Bonus ürün eşlemesi" },
      { label: "Mobil", value: "Canlı kupon / slot" },
      { label: "Doğrulama", value: "@emojistarbot" },
    ],
    paymentMethods: ["Papara", "Havale", "Kripto", "QR"],
    gameCategories: ["Futbol bahis", "Canlı bahis", "Slot", "Canlı casino"],
    extraKeywords: ["holiganbet giriş", "holiganbet güncel", "holiganbet deneme bonusu"],
    angle:
      "Spor freebet ile casino freespin aynı bakiyede birleşmez. Kupon oynayıp casino çevrimi beklemeyin.",
    paymentNote:
      "Maç saatine yakın havale gecikmesi kuponu kaçırabilir. Canlı bahis için Papara veya önceden yüklü bakiye daha güvenlidir.",
    productNote:
      "Canlı bahiste oran güncellemesi bağlantıya bağlıdır. Onay öncesi son oranı kontrol edin; cash-out her markette yoktur.",
    riskNote:
      "Kombine kuponlarda her ek seçim hit oranını düşürür. Boost kampanyaları genelde minimum oran eşiği ister.",
  },
  {
    slug: "onwin",
    name: "Onwin",
    focus: "Hızlı casino / crash",
    tagline: "Onwin giriş ve kısa oturum oyunları — limit koyarak okuyun.",
    metaTitle: "Onwin güncel giriş 2026 — casino, crash, bonus rehberi",
    metaDescription:
      "Onwin güncel giriş, crash/slot notları, bonus çevrimi ve çekim kontrolü. Adres: @emojistarbot.",
    intro: [
      "Onwin aramaları genelde hızlı casino ve crash/Aviator tarzı oyunlarla birlikte gelir. Kısa oturumlarda kayıp kovalama riski yüksektir; bu rehber limit ve şart odaklıdır.",
      "Giriş linkini @emojistarbot üzerinden alın. APK indirme önerilmez.",
    ],
    highlights: [
      { label: "Oyun ritmi", value: "Hızlı / crash" },
      { label: "Risk", value: "Volatilite yüksek" },
      { label: "Bonus", value: "Çevrim + tavan" },
      { label: "Doğrulama", value: "@emojistarbot" },
    ],
    paymentMethods: ["Papara", "USDT", "Havale", "Cepbank"],
    gameCategories: ["Crash", "Slot", "Canlı casino"],
    extraKeywords: ["onwin giriş", "onwin güncel adres", "onwin deneme bonusu"],
    angle:
      "Crash oyunlarında teorik RTP uzun vadeli istatistiktir; 10 dakikalık oturumda sonuç garanti etmez.",
    paymentNote:
      "USDT gönderiminde ağ (TRC20/ERC20) yanlışsa transfer geri gelmeyebilir. Çekim cüzdanını whitelist edin.",
    productNote:
      "Bonus bakiyesi crash veya yüksek volatilite slotta kısıtlanabilir. Kampanya oyun listesi dışındaki turlar çevrime sayılmaz.",
    riskNote:
      "Günlük kayıp limiti yoksa oturum süresini kendiniz sınırlayın. 18+ ve eğlence bütçesi kuralı geçerlidir.",
  },
  {
    slug: "sahabet",
    name: "Sahabet",
    focus: "Klasik bahis markası",
    tagline: "Sahabet giriş, kupon kuralları ve bonus ayrımı.",
    metaTitle: "Sahabet güncel giriş 2026 — bahis, bonus, ödeme rehberi",
    metaDescription:
      "Sahabet güncel giriş adresi, spor bahis notları, bonus ve çekim kontrol listesi. @emojistarbot.",
    intro: [
      "Sahabet, uzun süredir “güncel giriş” sorgularında görünen markalardandır. Bu sayfa lisans vaadi değil; adres doğrulama, kupon ve çekim hazırlığı anlatır.",
      "Yeni domain’i yalnızca @emojistarbot ile teyit edin.",
    ],
    highlights: [
      { label: "Odak", value: "Spor bahis" },
      { label: "İkincil", value: "Casino" },
      { label: "KYC", value: "İlk çekim öncesi" },
      { label: "Doğrulama", value: "@emojistarbot" },
    ],
    paymentMethods: ["Papara", "Havale / EFT", "Kripto"],
    gameCategories: ["Futbol", "Canlı bahis", "Slot"],
    extraKeywords: ["sahabet giriş", "sahabet güncel", "sahabet deneme bonusu"],
    angle:
      "Eski yer imleri Sahabet klonlarına gidebilir. Footer lisans metni kopyalanabilir; link kaynağı bot olmalıdır.",
    paymentNote:
      "Havale açıklama kodu yanlışsa yatırım gecikir. Dekontu saklayın.",
    productNote:
      "Maç öncesi 1X2 ile canlı alt/üst marketleri ayrı kuponlarda daha okunaklıdır. Sistem bahisinde stake kombinasyona bölünür.",
    riskNote:
      "Yasal iddaa (Nesine, Bilyoner) ayrı düzenlemededir. Offshore hesap kullanımı kullanıcı sorumluluğundadır.",
  },
  {
    slug: "mobilbahis",
    name: "Mobilbahis",
    focus: "Mobil bahis niyeti",
    tagline: "Mobilbahis — küçük ekranda kupon, kasa ve giriş.",
    metaTitle: "Mobilbahis güncel giriş 2026 — mobil bahis ve bonus",
    metaDescription:
      "Mobilbahis güncel giriş, mobil tarayıcı notları, kasa ve bonus şartları. Link: @emojistarbot.",
    intro: [
      "Mobilbahis adı doğrudan mobil arama niyeti taşır. Uygulama mağazası dışı APK, kimlik bilgisi çalma riski yaratır; resmi web + ana ekran kısayolu tercih edilir.",
      "Kısayol eski domaine bağlı kalabilir. Adres değişince @emojistarbot’tan yeni URL alın.",
    ],
    highlights: [
      { label: "Cihaz", value: "iOS / Android tarayıcı" },
      { label: "Risk", value: "Sahte APK" },
      { label: "Kasa", value: "Papara / QR" },
      { label: "Doğrulama", value: "@emojistarbot" },
    ],
    paymentMethods: ["Papara", "QR", "Cepbank", "Havale"],
    gameCategories: ["Mobil bahis", "Canlı bahis", "Slot"],
    extraKeywords: ["mobilbahis giriş", "mobil bahis güncel", "mobilbahis bonus"],
    angle:
      "3DS veya harici ödeme uygulaması açıldığında tarayıcıya dönüş linki kopabilir. İşlem sonrası bakiyeyi yenileyin.",
    paymentNote:
      "Mobil kasada IBAN kopyala-yapıştır hataları yaygındır. Referans kodunu ekran görüntüsüyle saklayın.",
    productNote:
      "Canlı bahiste zayıf Wi-Fi kupon onayını geciktirir. 4G/5G tercih edin.",
    riskNote:
      "Bildirim izni isteyen sahte PWA’lar olabilir. Kısayolu yalnızca kendi tarayıcınızdan ekleyin.",
  },
  {
    slug: "bets10",
    name: "Bets10",
    focus: "Tanınır bahis markası",
    tagline: "Bets10 giriş ve kampanya şartlarını abartılı listelerden ayırın.",
    metaTitle: "Bets10 güncel giriş 2026 — bahis, casino, bonus rehberi",
    metaDescription:
      "Bets10 güncel giriş, bonus çevrimi, ödeme ve mobil notlar. Doğrulama: @emojistarbot.",
    intro: [
      "Bets10, marka aramalarında yüksek hacimli isimlerden biridir. Yüksek hacim, kopya inceleme sitelerini de çoğaltır; tutar vaat eden listelere güvenmeyin.",
      "Güncel giriş @emojistarbot üzerinden paylaşılır.",
    ],
    highlights: [
      { label: "Ürün", value: "Spor + casino" },
      { label: "Dikkat", value: "Sahte inceleme" },
      { label: "Çekim", value: "KYC + çevrim" },
      { label: "Doğrulama", value: "@emojistarbot" },
    ],
    paymentMethods: ["Papara", "Havale", "Kart", "Kripto"],
    gameCategories: ["Spor bahis", "Slot", "Canlı casino"],
    extraKeywords: ["bets10 giriş", "bets10 güncel adres", "bets10 bonus"],
    angle:
      "“5000 TL deneme” başlıkları çoğu zaman süresi dolmuş kampanyadır. Bot’taki güncel şart geçerlidir.",
    paymentNote:
      "Kart yatırımlarında 3DS onayı gerekebilir. İsim uyuşmazlığı iade sebebi olur.",
    productNote:
      "Casino ve spor bakiyesi ayrı cüzdan gibi yönetilebilir. Transfer kuralını kasa ekranında kontrol edin.",
    riskNote:
      "Şikayet forumları tek kaynak değildir; dekont ve ticket numarasıyla ilerleyin.",
  },
  {
    slug: "mariobet",
    name: "Mariobet",
    focus: "Casino görsel kimliği",
    tagline: "Mariobet slot ve bonus çevrimi — oyun listesini şarttan okuyun.",
    metaTitle: "Mariobet güncel giriş 2026 — slot, freespin, Papara",
    metaDescription:
      "Mariobet güncel giriş, slot/freespin şartları ve ödeme notları. @emojistarbot.",
    intro: [
      "Mariobet aramaları slot ve freespin niyetiyle birleşir. Freespin yalnızca listedeki oyunlarda geçerlidir; jackpot veya buy-bonus slotta kullanılamayabilir.",
      "Giriş adresini @emojistarbot ile doğrulayın.",
    ],
    highlights: [
      { label: "Odak", value: "Slot / freespin" },
      { label: "Çevrim", value: "Oyun katkı yüzdesi" },
      { label: "Ödeme", value: "Papara / kripto" },
      { label: "Doğrulama", value: "@emojistarbot" },
    ],
    paymentMethods: ["Papara", "USDT", "Havale"],
    gameCategories: ["Video slot", "Jackpot", "Canlı casino"],
    extraKeywords: ["mariobet giriş", "mariobet deneme bonusu", "mariobet slot"],
    angle:
      "Yüksek volatilite slotlar kısa vadede bakiyeyi sıfırlayabilir. Bonus bakiyesini buy-feature ile yakmayın.",
    paymentNote:
      "Minimum yatırım kampanya eşiğinin altındaysa bonus tanımlanmaz.",
    productNote:
      "RTP oyun içi bilgi menüsündedir. Teorik yüzde, oturum sonucu değildir.",
    riskNote:
      "Jackpot katkı payı min bahis şartına bağlı olabilir. Düşük bahisle havuza girmeyebilirsiniz.",
  },
  {
    slug: "superbahis",
    name: "Superbahis",
    focus: "Süper Lig / bahis niyeti",
    tagline: "Superbahis — maç günü giriş, kupon ve limit.",
    metaTitle: "Superbahis güncel giriş 2026 — spor bahis ve bonus",
    metaDescription:
      "Superbahis güncel giriş, canlı bahis ve bonus çevrimi. Link doğrulama: @emojistarbot.",
    intro: [
      "Superbahis sorguları maç günlerinde zirve yapar. Yoğunluk, sahte giriş sayfalarını da artırır.",
      "Canlı kupon öncesi bakiyenin yansıdığından emin olun; @emojistarbot güncel adresi verir.",
    ],
    highlights: [
      { label: "Zirve", value: "Maç günü" },
      { label: "Ürün", value: "Canlı bahis" },
      { label: "Limit", value: "Sorumlu oyun" },
      { label: "Doğrulama", value: "@emojistarbot" },
    ],
    paymentMethods: ["Papara", "Havale", "QR"],
    gameCategories: ["Süper Lig", "Canlı bahis", "Kombine"],
    extraKeywords: ["superbahis giriş", "süperbahis güncel", "superbahis bonus"],
    angle:
      "Derbi ve Şampiyonlar Ligi saatlerinde kasa kuyruğu uzayabilir. Yatırımı maçtan önce tamamlayın.",
    paymentNote:
      "FAST dışı EFT mesai dışında bekleyebilir. Canlı market kapanmadan işlem bitmeyebilir.",
    productNote:
      "VAR duraklamasında canlı market askıya alınır. Bekleyen kupon iptal veya yeniden fiyatlanabilir.",
    riskNote:
      "Günlük kayıp limiti tanımlayın. Limit artışı genelde bekleme süresi ister.",
  },
  {
    slug: "hovarda",
    name: "Hovarda",
    focus: "Casino marka tonu",
    tagline: "Hovarda giriş, canlı masa limitleri ve bonus tavanı.",
    metaTitle: "Hovarda güncel giriş 2026 — casino, canlı masa, bonus",
    metaDescription:
      "Hovarda güncel giriş, canlı casino notları ve çekim kontrolü. @emojistarbot.",
    intro: [
      "Hovarda, canlı casino ve slot aramalarında görünen markalardandır. Masa minimumları slot bahisinden yüksektir.",
      "Güncel giriş için @emojistarbot kullanın.",
    ],
    highlights: [
      { label: "Odak", value: "Canlı casino" },
      { label: "Limit", value: "Masa min bahis" },
      { label: "Bonus", value: "Canlı katkı düşük olabilir" },
      { label: "Doğrulama", value: "@emojistarbot" },
    ],
    paymentMethods: ["Papara", "Kart", "Kripto"],
    gameCategories: ["Canlı rulet", "Blackjack", "Slot"],
    extraKeywords: ["hovarda giriş", "hovarda casino", "hovarda deneme bonusu"],
    angle:
      "Bonus çevriminde canlı oyun katkısı %10–20 bandında olabilir. Slot ile tamamlamak daha kısa sürer.",
    paymentNote:
      "Yüksek çekimde ek belge (fatura, selfie) istenebilir. İlk çekimi küçük tutarla test edin.",
    productNote:
      "Lightning rulet ve game show varyantları yüksek varyanslıdır. Eğlence bütçesi ayırın.",
    riskNote:
      "Türkçe masa her saat açık olmayabilir. Dil filtresini lobide kontrol edin.",
  },
  {
    slug: "betgit",
    name: "BetGit",
    focus: "Giriş / güncel adres niyeti",
    tagline: "BetGit güncel giriş — kısa rehber, şart ve doğrulama.",
    metaTitle: "BetGit güncel giriş 2026 — adres, bonus, ödeme",
    metaDescription:
      "BetGit güncel giriş adresi, bonus türleri ve KYC notları. @emojistarbot.",
    intro: [
      "BetGit, “güncel giriş” niyetiyle aranan markalardandır. Bu sayfa katalog şablonu değil; adres, bonus ayrımı ve çekim hazırlığını özetler.",
      "Link yalnızca @emojistarbot kanalından alınmalıdır.",
    ],
    highlights: [
      { label: "Niyet", value: "Güncel giriş" },
      { label: "Bonus", value: "Türleri karıştırmayın" },
      { label: "Çekim", value: "KYC" },
      { label: "Doğrulama", value: "@emojistarbot" },
    ],
    paymentMethods: ["Papara", "Havale", "USDT"],
    gameCategories: ["Spor", "Slot", "Canlı bahis"],
    extraKeywords: ["betgit giriş", "betgit güncel", "bet git deneme bonusu"],
    angle:
      "Yatırımsız bonus ile yatırım bonusu aynı anda seçilemeyebilir. Kayıt ekranındaki seçim sonradan değişmeyebilir.",
    paymentNote:
      "Üçüncü kişi Papara gönderimi reddedilebilir. Hesap adı eşleşmelidir.",
    productNote:
      "Canlı bahis ve slot aynı bakiyeyi paylaşsa bile bonus ürün kilidi olabilir.",
    riskNote:
      "Destek yanıtı gecikirse ticket numarası olmadan ikinci hesaptan yazmayın; kural ihlali görülebilir.",
  },
];

function buildPopularArticle(profile: PopularProfile): BonusArticleContent {
  const name = profile.name;
  return {
    premium: true,
    title: `${name} güncel giriş, bonus ve ödeme rehberi`,
    metaTitle: profile.metaTitle,
    metaDescription: profile.metaDescription,
    tagline: profile.tagline,
    intro: profile.intro,
    highlights: profile.highlights,
    paymentMethods: profile.paymentMethods,
    gameCategories: profile.gameCategories,
    extraKeywords: profile.extraKeywords,
    sections: [
      {
        heading: `${name} güncel giriş adresi`,
        paragraphs: [
          `${name} güncel giriş linki erişim kısıtları nedeniyle değişebilir. Arama sonuçlarındaki ilk site her zaman güncel veya resmi değildir.`,
          `Giriş öncesi HTTPS, tanıdık arayüz ve @emojistarbot doğrulamasını birlikte kullanın. Şüphede kayıt veya kart bilgisi girmeyin.`,
        ],
      },
      {
        heading: `${name} — bu rehberin farkı`,
        paragraphs: [profile.angle, profile.productNote],
      },
      {
        heading: `${name} bonus türlerini ayırma`,
        paragraphs: [
          `Deneme bonusu, yatırım bonusu, kayıp iadesi ve freespin ayrı şart taşır. Çevrim, max çekim ve süre kampanya metninde yazmalıdır.`,
          `Bonus aktifken erken çekim genelde reddedilir. Çevrimi tamamlamadan kasa talebi açmayın.`,
        ],
      },
      {
        heading: `${name} yatırım ve çekim`,
        paragraphs: [
          profile.paymentNote,
          `KYC: kimlik, adres ve ödeme yöntemi kanıtı ilk yüksek çekimde istenebilir. Bulanık fotoğraf onayı geciktirir.`,
        ],
      },
      {
        heading: "Güven ve sorumlu oyun",
        paragraphs: [
          profile.riskNote,
          "18 yaş altı yasaktır. Kumar gelir planı değildir. Limit, oturum uyarısı ve kendini dışlama seçeneklerini sorun.",
        ],
      },
    ],
    checklist: [
      "Giriş linkini @emojistarbot ile doğrula.",
      "Bonus türünü ve çevrimi oku.",
      "KYC belgelerini net yükle.",
      "Yanlış kripto ağına gönderme.",
      "Kayıp kovalama; günlük limit koy.",
    ],
    faqs: [
      {
        question: `${name} güncel giriş nerede?`,
        answer:
          "@emojistarbot Telegram botunda paylaşılan güncel linki kullanın. Eski yer imleri güncel olmayabilir.",
      },
      {
        question: `${name} deneme bonusu nasıl alınır?`,
        answer:
          "Kampanyaya göre kayıt kodu veya otomatik tanım gerekir. Tutar ve max çekim bot üzerinden doğrulanır.",
      },
      {
        question: `${name} çekim ne kadar sürer?`,
        answer:
          "KYC onaylı hesaplarda birçok işlem 24 saat içinde sonuçlanır. İlk çekim veya bonus çevrimi incelemeyi uzatır.",
      },
      {
        question: `${name} güvenilir mi?`,
        answer:
          "Lisans, ödeme geçmişi ve destek birlikte bakılmalıdır. Bu sayfa bilgilendirmedir; yatırım tavsiyesi değildir.",
      },
    ],
    relatedBrands: getRelatedBrands(profile.slug, [
      "herkulbet",
      "sezarcasino",
      "casibom",
      "holiganbet",
      "onwin",
    ]),
  };
}

for (const profile of PROFILES) {
  registerPremiumBrand(profile.slug, buildPopularArticle(profile));
}
