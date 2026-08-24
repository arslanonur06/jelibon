import Link from "next/link";
import {
  IGAMING_CONTENT_TOPICS,
  IGAMING_PILLAR_LABELS,
  type IgamingContentPillar,
} from "@/data/igaming-content-topics-data";

type IgamingContentTopicClustersProps = {
  pillar?: IgamingContentPillar;
  showHubLink?: boolean;
  locale?: "tr" | "en";
};

export function IgamingContentTopicClusters({
  pillar,
  showHubLink = true,
  locale = "tr",
}: IgamingContentTopicClustersProps) {
  const topics = pillar
    ? IGAMING_CONTENT_TOPICS.filter((t) => t.pillar === pillar)
    : IGAMING_CONTENT_TOPICS;

  const heading =
    locale === "tr"
      ? pillar
        ? `${IGAMING_PILLAR_LABELS[pillar].tr} rehberleri`
        : "iGaming rehber kütüphanesi"
      : pillar
        ? `${IGAMING_PILLAR_LABELS[pillar].en} guides`
        : "iGaming guide library";

  return (
    <section
      className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
      aria-labelledby="igaming-topics-heading"
    >
      <h2
        id="igaming-topics-heading"
        className="font-display text-2xl font-semibold text-white sm:text-3xl"
      >
        {heading}
      </h2>
      <p className="mt-3 max-w-3xl text-sm text-zinc-400 sm:text-base">
        {locale === "tr"
          ? "Canlı casino, slot, ödeme, CRM, affiliate, mobil, mevzuat, oyun eğitimi, pazarlama ve operatör teknolojisi — 60 derinlemesine iGaming makalesi."
          : "Live casino, slots, payments, CRM, affiliate, mobile, regulation, game education, marketing, and operator tech — 60 in-depth iGaming articles."}
      </p>
      {showHubLink ? (
        <p className="mt-2 text-sm text-zinc-500">
          <Link href="/rehber/igaming" className="text-[#A5F3FC] hover:underline">
            /rehber/igaming
          </Link>
        </p>
      ) : null}
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <li key={topic.id}>
            <Link
              href={topic.href}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#0c0c18]/80 p-4 transition hover:border-[#22D3EE]/45 hover:bg-white/[0.05]"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C4B5FD]">
                {IGAMING_PILLAR_LABELS[topic.pillar][locale]}
              </span>
              <span className="mt-2 text-base font-semibold text-white group-hover:text-[#A5F3FC]">
                {locale === "tr" ? topic.title : topic.titleEn}
              </span>
              <span className="mt-2 text-sm leading-relaxed text-zinc-400">
                {topic.excerpt}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
