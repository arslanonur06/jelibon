# Jelibon Marketing — Proje değişiklikleri özeti

Bu doküman, SEO odaklı marka sayfaları, blog iyileştirmeleri, yapılandırılmış veri ve favicon düzeltmeleri dahil yapılan başlıca geliştirmeleri özetler. Kod yolu: `jelibon` Next.js 14 (App Router).

---

## 1. Marka listesi ve otomatik sayfa üretimi

- **Veri kaynağı:** `src/data/bonus-guides.ts` içindeki `RAW_BONUS_BRANDS` (şu an **128 marka**).
- **Üretim modeli:** Her marka için **ayrı `.tsx` dosyası yok**; tek şablon + `generateStaticParams` ile build sırasında statik HTML üretilir.
- **URL’ler:**
  - Koyu tema, uzun Türkçe makale şablonu: `/giris-bonuslari/[slug]`
  - Açık tema, ekran görüntüsüne yakın rehber + alt bloklar: `/blog/rehber/[slug]`
- **Slug kuralı:** Marka adından türetilir (küçük harf, ASCII; örn. `Suratbet` → `suratbet`).

---

## 2. SEO ve meta

- **Global meta:** `src/constants/index.ts` — başlık şablonu, açıklama, `SEO_KEYWORDS` (deneme bonusu, freespin, yatırımsız bonus, uçak oyunu / crash, vb.).
- **Ana sayfa:** `src/app/page.tsx` — `generateMetadata` ile dil çerezine göre TR/EN/RU başlık ve açıklama.
- **Layout:** `src/app/layout.tsx` — Open Graph, Twitter kartı, `icons`, `manifest`.
- **Sitemap:** `src/app/sitemap.ts` — `/`, `/blog`, `/blog/*`, `/giris-bonuslari`, `/giris-bonuslari/*`, `/blog/rehber`, `/blog/rehber/*` girişleri.

---

## 3. Yapılandırılmış veri (JSON-LD)

- **Site geneli:** `src/components/site-json-ld.tsx` — Organization, WebSite, `knowsAbout`, `FaqJsonLd`, `BreadcrumbJsonLd`.
- **Blog yazıları:** `BlogPostJsonLd` (mevcut).
- **Marka rehber (blog):** `src/app/blog/rehber/[slug]/page.tsx` — Breadcrumb + basit `WebPage` şeması.

---

## 4. i18n ve görünür metin

- **Sözlük:** `src/lib/i18n/dictionaries.ts` — hero, marquee, FAQ, paket metinleri; Türkiye odaklı bonus kelimeleri ve SSS maddeleri.
- **Marquee:** İstenince **eski kısa hizmet listesi**ne geri alındı (bonus kelime listesi kaldırıldı).

---

## 5. Blog

- **İlgili yazılar:** `src/app/blog/[slug]/page.tsx` — aynı kategoriden öncelikli 3 iç link.
- **Kapak görselleri:** `src/data/blog/cover-image.ts` — uzak görseller yerine yerel `/public/assets/*` temalı seçim; liste ve detayda tutarlı görünüm.
- **Yeni Türkçe odaklı yazı dosyaları:** `src/data/blog/posts/*` (deneme bonusu + freespin, doğum günü bonusu, yatırımsız bonus, uçak/crash) + `entries.ts` kaydı.

---

## 6. Giriş bonusu hub’ı (`/giris-bonuslari`)

- **Liste:** `src/app/giris-bonuslari/page.tsx` — tüm markalara kart linkler, hashtag bulutu, Telegram CTA.
- **Marka sayfası:** `src/app/giris-bonuslari/[slug]/page.tsx` — `buildBonusArticle` (`src/data/bonus-article.ts`) ile uzun Türkçe bölümler, SSS, ilgili marka linkleri.

---

## 7. Açık tema marka rehberi (`/blog/rehber`)

- **Şablon:** `src/components/brand-rehber-light-layout.tsx`
  - Üst şerit, nav, hap butonlar (hepsi bilgilendirme + Telegram).
  - Hero + mavi kutu CTA.
  - **Kısa blog — bonus ve kampanyalar:** `src/data/kisa-blog-bonus-tr.ts` → gerçek `/blog/...` iç linkleri.
  - **Popüler markalar:** `src/data/populer-marka-kartlari-tr.ts` — marka adı geçen özgün Türkçe kart metinleri, iç link.
- **İndeks:** `src/app/blog/rehber/page.tsx`
- **Blog ana sayfa:** `/blog/rehber` linki eklendi.

---

## 8. Favicon ve Vercel

**Sorun:** Bazı ortamlarda varsayılan favicon (ör. Vercel üçgeni) görünebiliyordu; tarayıcılar sıkça `/favicon.ico` ister.

**Çözüm:**

- `src/app/icon.png` ve `src/app/apple-icon.png` — `public/assets/jelibonbackpng.png` ile aynı görsel (Jelibon logosu).
- `src/constants/index.ts` — `FAVICON_PATH = "/icon.png"` (manifest + metadata ile uyumlu).
- `next.config.mjs` — `/favicon.ico` → `/icon.png` **redirect** (eski istekler ve önbellek için).

Build çıktısında `/icon.png` ve `/apple-icon.png` route’ları görünür.

---

## 9. Önemli dosya listesi (referans)

| Alan | Dosyalar |
|------|-----------|
| Marka listesi | `src/data/bonus-guides.ts` |
| Giriş bonusu makalesi | `src/data/bonus-article.ts` |
| Kısa blog kartları | `src/data/kisa-blog-bonus-tr.ts` |
| Popüler marka metinleri | `src/data/populer-marka-kartlari-tr.ts` |
| Blog kapak seçimi | `src/data/blog/cover-image.ts` |
| Açık rehber UI | `src/components/brand-rehber-light-layout.tsx` |
| Sitemap | `src/app/sitemap.ts` |
| Sabitler / favicon path | `src/constants/index.ts` |
| Redirect | `next.config.mjs` |

---

## 10. Yeni marka ekleme

1. `src/data/bonus-guides.ts` içindeki `RAW_BONUS_BRANDS` dizisine ismi ekleyin.
2. `npm run build` (veya CI deploy) — yeni `/giris-bonuslari/{slug}` ve `/blog/rehber/{slug}` sayfaları üretilir.
3. Sitemap otomatik güncellenir.

---

*Son güncelleme: doküman, favicon düzeltmesi ve blog/rehber şablonu ile uyumludur.*
