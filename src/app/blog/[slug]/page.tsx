import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getAllSlugs, getLocalizedPost } from "@/data/blog";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  const locale = getLocale();
  const post = getLocalizedPost(params.slug, locale);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | Jelibon Marketing`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const locale = getLocale();
  const post = getLocalizedPost(params.slug, locale);
  if (!post) notFound();

  const dict = getDictionary(locale);
  const dateLocale =
    locale === "tr" ? "tr-TR" : locale === "ru" ? "ru-RU" : "en-US";

  return (
    <div className="relative min-h-screen">
      <div
        className="pointer-events-none fixed inset-0 -z-30 starfield opacity-70"
        aria-hidden
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
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
