import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { blogPosts, getPostBySlug } from "@/data/blog-posts";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | Jelibon Marketing`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="relative min-h-screen">
      <div
        className="pointer-events-none fixed inset-0 -z-30 starfield opacity-70"
        aria-hidden
      />
      <SiteHeader />
      <article className="pb-20 pt-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/blog"
            className="text-sm font-semibold text-[#C4B5FD] transition hover:text-white"
          >
            ← Back to blog
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-[#C4B5FD]">
            {post.category}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>{post.readTime}</span>
          </div>

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
