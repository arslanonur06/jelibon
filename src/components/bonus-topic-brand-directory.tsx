import Link from "next/link";
import { TELEGRAM_URL } from "@/constants";
import type { BonusBrandGuide } from "@/data/bonus-guides";
import { getBrandHashtags } from "@/data/brand-hashtags";
import type { BonusSearchTopic } from "@/data/bonus-search-topics-tr";

type BonusTopicBrandDirectoryProps = {
  topic: BonusSearchTopic;
  brands: BonusBrandGuide[];
};

export function BonusTopicBrandDirectory({
  topic,
  brands,
}: BonusTopicBrandDirectoryProps) {
  const sorted = [...brands].sort((a, b) =>
    a.name.localeCompare(b.name, "tr-TR"),
  );

  return (
    <section aria-labelledby="topic-brands-heading">
      <h2
        id="topic-brands-heading"
        className="font-display text-2xl font-semibold text-white sm:text-3xl"
      >
        {topic.title} — tüm markalar ({sorted.length})
      </h2>
      <p className="mt-3 max-w-3xl text-sm text-zinc-400 sm:text-base">
        Her marka için güncel giriş adresi ve bonus bilgisi @jelibonmarketing
        Telegram kanalından paylaşılır. Rehber sayfası SEO içindir; canlı
        yönlendirme Telegram üzerindedir.
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((brand) => {
          const hashtags = getBrandHashtags(brand).slice(0, 4);
          return (
            <li
              key={brand.slug}
              className="flex flex-col rounded-2xl border border-white/10 bg-[#0c0c18]/80 p-4"
            >
              <Link
                href={`/guvenilir-siteler/${brand.slug}`}
                className="text-base font-semibold text-white transition hover:text-[#E9A8FF]"
              >
                {brand.name} güncel giriş adresi
              </Link>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                {brand.name} {topic.keywords[0]} · deneme bonusu · giriş
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {hashtags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/guvenilir-siteler/${brand.slug}`}
                    className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-semibold text-[#E9A8FF]/90 hover:border-[#A78BFA]/45"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              <Link
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-fit rounded-lg bg-gradient-to-r from-[#FF69B4] via-[#A020F0] to-[#00D4FF] px-3 py-2 text-xs font-semibold text-white"
              >
                Telegram: güncel adres
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
