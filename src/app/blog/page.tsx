import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/site-json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BlogBrandHub } from "@/components/blog-brand-hub";
import { getPostsForLocale } from "@/data/blog";
import { bonusBrandGuides } from "@/data/bonus-guides";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Türkiye iGaming pazarlaması, Telegram, SEO, otomasyon notları. Yüzlerce marka için ayrı rehber: giriş, bonus, günün koşulları. Detay: @jelibonmarketing.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Jelibon Marketing",
    description:
      "Jelibon blog: pazarlama notları, marka rehberleri, güncel giriş ve bonus sayfaları. Telegram: @jelibonmarketing",
    type: "website",
    url: "/blog",
    images: [{ url: "/assets/jelibon-brand.png", alt: "Jelibon Marketing" }],
  },
};

export default function BlogPage() {
  const locale = getLocale();
  const dict = getDictionary(locale);
  const dateLocale =
    locale === "tr" ? "tr-TR" : locale === "ru" ? "ru-RU" : "en-US";
  const sorted = getPostsForLocale(locale);

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
            {dict.blog.description}
          </p>

          <BlogBrandHub locale={locale} brands={bonusBrandGuides} />

          <h2 className="mt-16 font-display text-2xl font-semibold text-white sm:text-3xl">
            {dict.blog.articlesHeading}
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {sorted.map((post) => (
              <article
                key={post.slug}
                className="glass-panel flex flex-col overflow-hidden rounded-3xl border border-white/10 transition hover:border-[#A020F0]/35"
              >
                <div className="flex flex-1 flex-col p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#C4B5FD]">
                    {dict.blog.categoryLabelsByKey[post.categoryKey] ??
                      post.categoryKey}
                  </p>
                  <h2 className="mt-4 font-display text-2xl font-semibold leading-snug text-white">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-[#F9A8D4]"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-4 flex-1 text-zinc-400">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between text-xs text-zinc-500">
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
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
