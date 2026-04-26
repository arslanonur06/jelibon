import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";
import { TELEGRAM_URL } from "@/constants";

export function SiteFooter() {
  const locale = getLocale();
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();
  const rights = dict.footer.rightsTemplate.replace("{year}", String(year));

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#03030a] py-14"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-[center_top] opacity-[0.46] sm:bg-center"
        style={{ backgroundImage: "url('/assets/footer-zeus-bg.png')" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,10,0.42)_0%,rgba(3,3,10,0.68)_35%,rgba(3,3,10,0.88)_100%)] sm:bg-[linear-gradient(90deg,rgba(3,3,10,0.62)_0%,rgba(3,3,10,0.52)_42%,rgba(3,3,10,0.84)_100%)]"
        aria-hidden
      />
      <div className="relative z-[1] mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-lg font-semibold text-white">
            {dict.footer.heading}
          </p>
          <p className="mt-2 max-w-md text-sm text-zinc-400">
            {dict.footer.about}
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            {dict.footer.getStarted}
          </span>
          <Link
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-white/15 px-5 py-3 font-semibold text-white shadow-[0_0_24px_rgba(255,105,180,0.18)] transition hover:-translate-y-0.5"
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.88] transition duration-300 group-hover:scale-[1.04]"
              style={{ backgroundImage: "url('/assets/button-cta-bg.png')" }}
              aria-hidden
            />
            <span
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,24,0.22)_0%,rgba(8,8,24,0.42)_100%)]"
              aria-hidden
            />
            <span className="relative z-[1]">{dict.footer.telegramLink}</span>
          </Link>
        </div>
      </div>
      <div className="relative z-[1] mx-auto mt-10 max-w-6xl border-t border-white/10 px-4 pt-8 text-center text-xs text-zinc-500 sm:px-6 sm:text-left">
        {rights}
      </div>
    </footer>
  );
}
