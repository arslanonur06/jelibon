import Link from "next/link";
import {
  JELIBON_SERVICE_TOPICS,
  SERVICE_PILLAR_LABELS,
  type ServicePillar,
} from "@/data/jelibon-service-topics-data";

type JelibonServiceTopicClustersProps = {
  pillar?: ServicePillar;
  showHubLink?: boolean;
  locale?: "tr" | "en";
};

export function JelibonServiceTopicClusters({
  pillar,
  showHubLink = true,
  locale = "tr",
}: JelibonServiceTopicClustersProps) {
  const topics = pillar
    ? JELIBON_SERVICE_TOPICS.filter((t) => t.pillar === pillar)
    : JELIBON_SERVICE_TOPICS;

  const heading =
    locale === "tr"
      ? pillar
        ? `${SERVICE_PILLAR_LABELS[pillar].tr} rehberleri`
        : "Jelibon hizmet rehberleri"
      : pillar
        ? `${SERVICE_PILLAR_LABELS[pillar].en} guides`
        : "Jelibon service guides";

  const intro =
    locale === "tr"
      ? "Trafik edinimi, kreatif üretim, SEO, Telegram, AI otomasyon, marka koruması ve özel yazılım — sunduğumuz hizmetleri TR/EN rehberlerle detaylandırıyoruz. Yetişkin display, görsel üretim ve dönüşüm optimizasyonu dahil."
      : "Traffic acquisition, creative production, SEO, Telegram, AI automation, brand protection, and custom software — detailed TR/EN guides for every service we offer, including adult display, image production, and conversion optimization.";

  return (
    <section
      className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
      aria-labelledby="service-topics-heading"
    >
      <h2
        id="service-topics-heading"
        className="font-display text-2xl font-semibold text-white sm:text-3xl"
      >
        {heading}
      </h2>
      <p className="mt-3 max-w-3xl text-sm text-zinc-400 sm:text-base">{intro}</p>
      {showHubLink ? (
        <p className="mt-2 text-sm text-zinc-500">
          {locale === "tr" ? "Tüm rehberler:" : "All guides:"}{" "}
          <Link href="/rehber/hizmetler" className="text-[#A5F3FC] hover:underline">
            /rehber/hizmetler
          </Link>
        </p>
      ) : null}
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((t) => (
          <li key={t.id}>
            <Link
              href={t.href}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#0c0c18]/80 p-4 transition hover:border-[#22D3EE]/45 hover:bg-white/[0.05]"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C4B5FD]">
                {SERVICE_PILLAR_LABELS[t.pillar][locale]}
              </span>
              <span className="mt-2 text-base font-semibold text-white group-hover:text-[#A5F3FC]">
                {locale === "tr" ? t.title : t.titleEn}
              </span>
              <span className="mt-2 text-sm leading-relaxed text-zinc-400">
                {t.excerpt}
              </span>
              <span className="mt-3 text-xs font-semibold uppercase tracking-widest text-[#F9A8D4]">
                {locale === "tr" ? "Rehberi oku →" : "Read guide →"}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
