import Image from "next/image";
import { EMOJISTAR_BOT_URL } from "@/constants";

const BANNER_SRC = "/assets/emojistar-side-banner.png";

function SideBanner({ side }: { side: "left" | "right" }) {
  return (
    <a
      href={EMOJISTAR_BOT_URL}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label="Emoji Star — Telegram @emojistarbot"
      className={`pointer-events-auto fixed top-0 z-[8] hidden h-screen w-[min(12vw,152px)] min-w-[100px] max-w-[168px] overflow-hidden bg-[#050818] transition hover:brightness-110 xl:block ${
        side === "left" ? "left-0" : "right-0"
      }`}
    >
      <Image
        src={BANNER_SRC}
        alt=""
        fill
        sizes="168px"
        className="object-contain object-center"
      />
    </a>
  );
}

export function SiteSideBanners() {
  return (
    <>
      <SideBanner side="left" />
      <SideBanner side="right" />
    </>
  );
}
