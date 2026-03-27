import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";

export function SiteFooter() {
  const locale = getLocale();
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();
  const rights = dict.footer.rightsTemplate.replace("{year}", String(year));

  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-[#03030a] py-14"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6">
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
          <a
            className="text-zinc-200 transition hover:text-white"
            href="mailto:contact@jelibonmarketing.com"
          >
            contact@jelibonmarketing.com
          </a>
          <Link
            className="text-zinc-200 transition hover:text-white"
            href="https://t.me/jelibonmarketing"
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.footer.telegramLink}
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-4 pt-8 text-center text-xs text-zinc-600 sm:px-6 sm:text-left">
        {rights}
      </div>
    </footer>
  );
}
