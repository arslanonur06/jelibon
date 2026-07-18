import Link from "next/link";
import { BONUS_SEARCH_TOPICS_TR } from "@/data/bonus-search-topics-tr";

export function BonusTopicClusters() {
  return (
    <section
      className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
      aria-labelledby="bonus-topics-heading"
    >
      <h2
        id="bonus-topics-heading"
        className="font-display text-2xl font-semibold text-white sm:text-3xl"
      >
        Bonus arama rehberleri
      </h2>
      <p className="mt-3 max-w-3xl text-sm text-zinc-400 sm:text-base">
        Deneme bonusu, kayıp bonusu, yatırım bonusu ve diğer konular için blog
        rehberleri — her yazının altında tüm marka listesi. Güncel giriş:{" "}
        @jelibonmarketing.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {BONUS_SEARCH_TOPICS_TR.map((topic) => (
          <li key={topic.id}>
            <Link
              href={topic.href}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#0c0c18]/80 p-4 transition hover:border-[#A78BFA]/45 hover:bg-white/[0.05]"
            >
              <span className="text-base font-semibold text-white group-hover:text-[#E9A8FF]">
                {topic.title}
              </span>
              <span className="mt-2 text-sm leading-relaxed text-zinc-400">
                {topic.excerpt}
              </span>
              <span className="mt-3 text-xs font-semibold uppercase tracking-widest text-[#22D3EE]">
                Rehberi oku →
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-zinc-500">
        Tüm markalar:{" "}
        <Link href="/guvenilir-siteler" className="text-[#E9A8FF] hover:underline">
          güvenilir siteler dizini
        </Link>
      </p>
    </section>
  );
}
