import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getAllSlugs, getLocalizedPost, getPostsForLocale } from "@/data/blog";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { BreadcrumbJsonLd } from "@/components/site-json-ld";
import { BlogPostJsonLd } from "@/components/blog-post-json-ld";
import { BRAND_NAME, DEFAULT_OG_IMAGE_PATH } from "@/constants";
import { getLocale } from "@/lib/i18n/get-locale";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const locale = getLocale();
  const post = getLocalizedPost(params.slug, locale);
  if (!post) return { title: "Post not found" };

  const path = `/blog/${params.slug}`;
  const ogImage = post.coverImage ?? DEFAULT_OG_IMAGE_PATH;

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: BRAND_NAME }],
    alternates: { canonical: path },
    openGraph: {
      title: `${post.title} | Jelibon Marketing`,
      description: post.excerpt,
      type: "article",
      url: path,
      publishedTime: post.date,
      modifiedTime: post.date,
      images: [{ url: ogImage, alt: post.title }],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const locale = getLocale();
  const post = getLocalizedPost(params.slug, locale);
  if (!post) notFound();

  const dict = getDictionary(locale);
  const dateLocale =
    locale === "tr" ? "tr-TR" : locale === "ru" ? "ru-RU" : "en-US";
  const relatedHeading =
    locale === "tr"
      ? "İlgili Yazılar"
      : locale === "ru"
        ? "Похожие статьи"
        : "Related Posts";
  const relatedCta =
    locale === "tr" ? "Yazıyı oku" : locale === "ru" ? "Читать" : "Read post";
  const allLocalizedPosts = getPostsForLocale(locale).filter(
    (entry) => entry.slug !== post.slug,
  );
  const sameCategoryPosts = allLocalizedPosts.filter(
    (entry) => entry.categoryKey === post.categoryKey,
  );
  const fallbackPosts = allLocalizedPosts.filter(
    (entry) => entry.categoryKey !== post.categoryKey,
  );
  const relatedPosts = [...sameCategoryPosts, ...fallbackPosts].slice(0, 3);

  return (
    <div className="relative min-h-screen">
      <BreadcrumbJsonLd
        items={[
          { name: dict.blog.breadcrumbs.home, path: "/" },
          { name: dict.blog.breadcrumbs.blog, path: "/blog" },
          { name: post.title, path: `/blog/${params.slug}` },
        ]}
      />
      <BlogPostJsonLd
        slug={params.slug}
        title={post.title}
        description={post.excerpt}
        datePublished={post.date}
        coverImage={post.coverImage}
      />
      <SiteHeader />
      <article className="pb-20 pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link
              href="/"
              className="font-semibold text-[#F9A8D4] transition hover:text-white"
            >
              ← {dict.blog.breadcrumbs.home}
            </Link>
            <Link
              href="/blog"
              className="font-semibold text-[#C4B5FD] transition hover:text-white"
            >
              ← {dict.blog.breadcrumbs.blog}
            </Link>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-[#C4B5FD]">
            {dict.blog.categoryLabelsByKey[post.categoryKey]}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(dateLocale, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>{post.readTime}</span>
          </div>

          {post.coverImage && (
            <div className="relative mt-10 h-56 w-full overflow-hidden rounded-3xl sm:h-72">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover object-center opacity-85"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510]/60" />
            </div>
          )}
          <div className="glass-panel mt-10 rounded-3xl p-8 sm:p-10">
            <p className="text-lg leading-relaxed text-zinc-300">{post.excerpt}</p>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-zinc-300">
              {post.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          {relatedPosts.length > 0 ? (
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                {relatedHeading}
              </h2>
              <div className="mt-6 grid gap-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="glass-panel rounded-2xl p-5 transition hover:border-[#A78BFA]/40 hover:bg-white/[0.03]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#C4B5FD]">
                      {dict.blog.categoryLabelsByKey[relatedPost.categoryKey]}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {relatedPost.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-zinc-300">
                      {relatedPost.excerpt}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
                      <span>{relatedPost.readTime}</span>
                      <span className="font-semibold text-[#F9A8D4]">
                        {relatedCta} →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
