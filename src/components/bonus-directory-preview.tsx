import Link from "next/link";
import { blogEntries } from "@/data/blog/entries";
import { bonusBrandGuides } from "@/data/bonus-guides";
import { getPostsForLocale } from "@/data/blog";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";

const linkClass =
  "rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-zinc-300 transition hover:border-[#A78BFA]/40 hover:text-white";

export function BonusDirectoryPreview() {
  const locale = getLocale();
  const dict = getDictionary(locale);
  const posts = getPostsForLocale(locale);
  const brands = [...bonusBrandGuides].sort((a, b) =>
    a.name.localeCompare(b.name, "tr-TR"),
  );

  return (
    <section
      id="seo-directory"
      className="cv-auto scroll-mt-44 border-t border-white/10 bg-[#050510]/40 py-16 sm:py-20"
      aria-labelledby="seo-directory-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2
            id="seo-directory-heading"
            className="font-display text-3xl font-semibold text-white sm:text-4xl"
          >
            {dict.bonusDirectory.heading}
          </h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            {dict.bonusDirectory.description}
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#E9A8FF]">
                {dict.bonusDirectory.brandsHeading}
              </h3>
              <Link href="/giris-bonuslari" className={linkClass}>
                {dict.bonusDirectory.viewAllBrands}
              </Link>
            </div>
            <nav
              className="mt-4"
              aria-label={dict.bonusDirectory.brandsHeading}
            >
              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                {brands.map((brand) => (
                  <li key={brand.slug}>
                    <Link
                      href={`/giris-bonuslari/${brand.slug}`}
                      className={`block ${linkClass}`}
                    >
                      {brand.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#7DD3FC]">
                {dict.bonusDirectory.blogHeading}
              </h3>
              <Link href="/blog" className={linkClass}>
                {dict.bonusDirectory.viewAllPosts}
              </Link>
            </div>
            <nav className="mt-4" aria-label={dict.bonusDirectory.blogHeading}>
              <ul className="grid gap-2">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className={`block ${linkClass}`}>
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="mt-3 text-xs text-zinc-500">
              {blogEntries.length} articles · {brands.length} brand guides
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
