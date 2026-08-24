import Link from "next/link";
import {
  SPOR_BAHIS_GENERAL_TOPICS,
  SPOR_BAHIS_SPORT_TOPICS,
  SPOR_DALI_CATEGORY_LABELS,
  getSporDallariByCategory,
  type SporDaliCategory,
} from "@/data/spor-bahis-topics-tr";

const SPORT_CATEGORIES: SporDaliCategory[] = [
  "takim",
  "raket",
  "dovus-motor",
  "precision",
  "amerikan",
  "diger",
];

type SporBahisTopicClustersProps = {
  showHubLink?: boolean;
  locale?: "tr" | "en";
};

function TopicGrid({
  topics,
  locale,
}: {
  topics: { id: string; title: string; titleEn?: string; href: string; excerpt: string }[];
  locale: "tr" | "en";
}) {
  return (
    <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic) => (
        <li key={topic.id}>
          <Link
            href={topic.href}
            className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#0c0c18]/80 p-4 transition hover:border-[#22D3EE]/45 hover:bg-white/[0.05]"
          >
            <span className="text-base font-semibold text-white group-hover:text-[#A5F3FC]">
              {locale === "tr" ? topic.title : topic.titleEn ?? topic.title}
            </span>
            <span className="mt-2 text-sm leading-relaxed text-zinc-400">
              {topic.excerpt}
            </span>
            <span className="mt-3 text-xs font-semibold uppercase tracking-widest text-[#F9A8D4]">
              {locale === "tr" ? "Rehberi oku →" : "Read guide →"}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SporBahisTopicClusters({
  showHubLink = true,
  locale = "tr",
}: SporBahisTopicClustersProps) {
  return (
    <div className="mt-10 space-y-10">
      <section
        className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        aria-labelledby="spor-general-heading"
      >
        <h2
          id="spor-general-heading"
          className="font-display text-2xl font-semibold text-white sm:text-3xl"
        >
          {locale === "tr" ? "Genel rehberler" : "General guides"}
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-zinc-400">
          {locale === "tr"
            ? "İddaa nasıl oynanır, bahis türleri, canlı bahis, sistem kuponu ve terimler."
            : "How to play İddaa, bet types, live betting, system coupons, and glossary."}
        </p>
        {showHubLink ? (
          <p className="mt-2 text-sm text-zinc-500">
            <Link href="/rehber/spor-bahisleri" className="text-[#A5F3FC] hover:underline">
              /rehber/spor-bahisleri
            </Link>
          </p>
        ) : null}
        <TopicGrid topics={SPOR_BAHIS_GENERAL_TOPICS} locale={locale} />
      </section>

      <section
        className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        aria-labelledby="spor-dallari-heading"
      >
        <h2
          id="spor-dallari-heading"
          className="font-display text-2xl font-semibold text-white sm:text-3xl"
        >
          {locale === "tr"
            ? `Spor dalı rehberleri (${SPOR_BAHIS_SPORT_TOPICS.length} branş)`
            : `Sport guides (${SPOR_BAHIS_SPORT_TOPICS.length} disciplines)`}
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-zinc-400">
          {locale === "tr"
            ? "Her spor için ayrı rehber: marketler, skor örnekleri, canlı bahis ve branşa özel kurallar."
            : "Dedicated guide per sport: markets, score examples, live rules, and discipline-specific settlement."}
        </p>
      </section>

      {SPORT_CATEGORIES.map((cat) => {
        const dallar = getSporDallariByCategory(cat);
        const topics = SPOR_BAHIS_SPORT_TOPICS.filter((t) =>
          dallar.some((d) => d.id === t.id),
        );
        if (topics.length === 0) return null;
        return (
          <section
            key={cat}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
          >
            <h3 className="font-display text-xl font-semibold text-white">
              {SPOR_DALI_CATEGORY_LABELS[cat][locale]}
            </h3>
            <TopicGrid topics={topics} locale={locale} />
          </section>
        );
      })}
    </div>
  );
}
