import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/site-json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BlogBrandHub } from "@/components/blog-brand-hub";
import { getPostsForLocale } from "@/data/blog";
import {
  bonusBrandGuides,
  popularBonusBrandGuides,
} from "@/data/bonus-guides";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";

import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const locale = getLocale();

  if (locale === "tr") {
    return {
      title: "Yazılar",
      description:
        "Türkiye odaklı online casino pazarlaması, Telegram, SEO ve otomasyon notları. Yuzlerce marka icin giris, bonus ve guncel rehberler. Detay: @jelibonmarketing.",
      alternates: { canonical: "/blog" },
      openGraph: {
        title: "Yazılar | Jelibon Marketing",
        description:
          "Jelibon yazıları: pazarlama notları, marka rehberleri, güncel giriş ve bonus sayfaları. Telegram: @jelibonmarketing",
        type: "website",
        url: "/blog",
        images: [{ url: "/assets/jelibon-brand.png", alt: "Jelibon Marketing" }],
      },
    };
  }

  if (locale === "ru") {
    return {
      title: "Блог",
      description:
        "Заметки по online casino-маркетингу в Турции: Telegram, SEO, автоматизация и быстрые гайды по брендам и бонусам.",
      alternates: { canonical: "/blog" },
      openGraph: {
        title: "Блог | Jelibon Marketing",
        description:
          "Заметки Jelibon: маркетинг, бренд-гайды, актуальные входы и бонусные страницы. Telegram: @jelibonmarketing",
        type: "website",
        url: "/blog",
        images: [{ url: "/assets/jelibon-brand.png", alt: "Jelibon Marketing" }],
      },
    };
  }

  return {
    title: "Blog",
    description:
      "Online casino marketing notes for Türkiye: Telegram, SEO, automation, and quick access to brand and bonus guides.",
    alternates: { canonical: "/blog" },
    openGraph: {
      title: "Blog | Jelibon Marketing",
      description:
        "Jelibon blog: marketing notes, brand guides, current access pages, and bonus content. Telegram: @jelibonmarketing",
      type: "website",
      url: "/blog",
      images: [{ url: "/assets/jelibon-brand.png", alt: "Jelibon Marketing" }],
    },
  };
}

export default function BlogPage() {
  const locale = getLocale();
  const dict = getDictionary(locale);
  const dateLocale =
    locale === "tr" ? "tr-TR" : locale === "ru" ? "ru-RU" : "en-US";
  const sorted = getPostsForLocale(locale);
  const sectionCopy =
    locale === "tr"
      ? {
          description: "Sahadan çıkan kısa notlar ve direkt açılan site rehberleri.",
          articles: "Yazılar",
          sites: "Siteler",
        }
      : locale === "ru"
        ? {
            description: "Короткие заметки по рынку и быстрый доступ к гайдам по сайтам.",
            articles: "Статьи",
            sites: "Сайты",
          }
        : {
            description: "Short market notes and quick access to site guides.",
            articles: "Articles",
            sites: "Sites",
          };

  return (
    <div className="relative min-h-screen">
      <BreadcrumbJsonLd
        items={[
          { name: dict.blog.breadcrumbs.home, path: "/" },
          { name: dict.blog.breadcrumbs.blog, path: "/blog" },
        ]}
      />
      <SiteHeader />
      <main className="pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="text-xs font-semibold uppercase tracking-widest text-[#F9A8D4] transition hover:text-white"
            >
              ← {dict.blog.breadcrumbs.home}
            </Link>
            <span className="text-zinc-600" aria-hidden>
              ·
            </span>
            <p className="font-display text-xs uppercase tracking-[0.35em] text-[#E9A8FF]/90">
              {dict.blog.listEyebrow}
            </p>
          </div>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            {dict.blog.heading}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            {sectionCopy.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#blog-articles"
              className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition hover:border-[#A78BFA]/35 hover:bg-white/[0.08]"
            >
              {sectionCopy.articles}
            </Link>
            <Link
              href="#blog-sites"
              className="rounded-full border border-[#22D3EE]/30 bg-[#101827] px-4 py-2 text-sm font-semibold text-[#A5F3FC] transition hover:border-[#22D3EE]/55 hover:text-white"
            >
              {sectionCopy.sites}
            </Link>
          </div>

          <section id="blog-sites" className="scroll-mt-32">
            <BlogBrandHub
              locale={locale}
              brands={bonusBrandGuides}
              popularBrands={popularBonusBrandGuides}
            />
          </section>

          <section id="blog-articles" className="scroll-mt-32">
            <h2 className="mt-16 font-display text-2xl font-semibold text-white sm:text-3xl">
              {dict.blog.articlesHeading}
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {sorted.map((post, index) => (
                <article
                  key={post.slug}
                  className="glass-panel group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-transparent shadow-[0_18px_40px_rgba(0,0,0,0.16)] transition duration-500 hover:-translate-y-1.5 hover:border-[#A020F0]/35 hover:shadow-[0_26px_60px_rgba(0,0,0,0.28)]"
                >
                  <div
                    className="pointer-events-none absolute inset-x-[-16%] top-[-24%] h-28 rounded-full bg-[radial-gradient(circle,rgba(255,105,180,0.18)_0%,rgba(255,105,180,0)_68%)] opacity-0 blur-2xl transition duration-500 group-hover:translate-y-2 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-y-0 left-[-35%] w-1/2 -skew-x-12 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0)_100%)] opacity-0 blur-xl transition duration-700 group-hover:left-[120%] group-hover:opacity-100"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-[-8%] bg-cover bg-center opacity-[0.98] saturate-[1.15] brightness-[1.18] contrast-[1.28] transition duration-500 group-hover:scale-[1.04]"
                    style={{
                      backgroundImage: "url('/assets/morlines-blog-card-bg.png')",
                      backgroundPosition:
                        index % 2 === 0 ? "center top" : "center bottom",
                      backgroundSize: "cover",
                    }}
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.34)_0%,rgba(5,5,16,0.62)_100%)]"
                    aria-hidden
                  />
                  <div className="relative z-[1] flex flex-1 flex-col p-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#C4B5FD] transition duration-500 group-hover:text-[#E9D5FF]">
                      {dict.blog.categoryLabelsByKey[post.categoryKey] ??
                        post.categoryKey}
                    </p>
                    <h2 className="mt-4 font-display text-2xl font-semibold leading-snug text-white transition duration-500 group-hover:translate-y-[-1px] group-hover:text-[#F8D8FF]">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-[#F9A8D4]"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-4 flex-1 text-zinc-400 transition duration-500 group-hover:text-zinc-200">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between text-xs text-zinc-500 transition duration-500 group-hover:text-zinc-300">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString(dateLocale, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
