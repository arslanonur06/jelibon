import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";

export function BlogPreview() {
  const locale = getLocale();
  const dict = getDictionary(locale);
  const dateLocale = locale === "tr" ? "tr-TR" : locale === "ru" ? "ru-RU" : "en-US";
  const featured = blogPosts.slice(0, 3);

  return (
    <section
      id="blog"
      className="relative scroll-mt-44 border-t border-white/10 bg-[#050510]/30 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              {dict.blog.heading}
            </h2>
            <p className="mt-3 text-zinc-400">
              {dict.blog.description}
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex w-fit items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 transition hover:border-[#FF69B4]/40 hover:bg-white/10"
          >
            {dict.blog.viewAllPosts}
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((post) => (
            <article
              key={post.slug}
              className="glass-panel flex flex-col rounded-3xl p-6 transition hover:border-[#A020F0]/35"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C4B5FD]">
                {dict.blog.categoryLabelsByName[post.category] ?? post.category}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-white">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-[#F9A8D4]"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between text-xs text-zinc-500">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(dateLocale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

