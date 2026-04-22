import type { Locale } from "@/lib/i18n/locales";

export type Testimonial = {
  id: string;
  initials: string;
  gradient: string;
  stars: number;
  metric: string;
  metricLabel: string;
  role: string;
  flag: string;
  quote: string;
};

export const TESTIMONIALS: Record<Locale, Testimonial[]> = {
  en: [
    {
      id: "t1",
      initials: "MK",
      gradient: "from-[#FF69B4] to-[#A020F0]",
      stars: 5,
      metric: "+340%",
      metricLabel: "FTD in first full quarter",
      role: "Casino operator · Türkiye",
      flag: "🇹🇷",
      quote:
        "Telegram inventory alone more than tripled our FTD volume in the first full quarter. The team had already internalised how Türkiye behaves—messaging, creative guardrails, and when to press spend—so we were running meaningful tests from week one, not rehearsing strategy decks.",
    },
    {
      id: "t2",
      initials: "AL",
      gradient: "from-[#22D3EE] to-[#3b82f6]",
      stars: 5,
      metric: "2.4×",
      metricLabel: "SEO-attributed ROI at 5 months",
      role: "iGaming affiliate · Russia",
      flag: "🇷🇺",
      quote:
        "We cycled through three generalist SEO teams before this. The difference is fluency: the blog system competes for Turkish iGaming queries we simply could not reach, and the traffic behaves like commercial intent, not empty curiosity traffic.",
    },
    {
      id: "t3",
      initials: "DF",
      gradient: "from-[#32CD32] to-[#22D3EE]",
      stars: 5,
      metric: "+210%",
      metricLabel: "uplift in blended conversion",
      role: "Game operator · Eastern Europe",
      flag: "🌍",
      quote:
        "The chat layer behaves like a tuned retention path, not a generic widget. Tone, funnels, and hand-offs match how our players move between slots and live tables—including late nights—without standing up a bloated in-house CRM lab.",
    },
    {
      id: "t4",
      initials: "ER",
      gradient: "from-amber-400 to-rose-500",
      stars: 5,
      metric: "−38%",
      metricLabel: "blended CPA in 6 weeks",
      role: "Head of acquisition · CEE",
      flag: "🇪🇺",
      quote:
        "We needed one team to own Telegram placements and keep landings in lockstep with the promo calendar. Jelibon’s cadence—daily caps, legible reporting, and same-day creative swaps—pulled performance into a sensible band fast. It feels closer to embedded growth than a faceless vendor.",
    },
    {
      id: "t5",
      initials: "NV",
      gradient: "from-violet-400 to-fuchsia-600",
      stars: 5,
      metric: "3 stages",
      metricLabel: "measured scale-up, no shock spend",
      role: "CMO · crypto-friendly brand",
      flag: "🌐",
      quote:
        "The value wasn’t a one-off spike; it was discipline. We proved a tight GEO, watched cohorts stabilise, then opened budget. Weekly reviews stay short, numeric, and they actually change what we ship the following Monday—rare in this vertical.",
    },
    {
      id: "t6",
      initials: "LP",
      gradient: "from-emerald-500 to-cyan-500",
      stars: 5,
      metric: "≈ 72h",
      metricLabel: "median takedown turnaround",
      role: "Founder · multi-product operator",
      flag: "🛡️",
      quote:
        "DMCA and partner-brand noise used to find me on Friday evenings. Jelibon’s monitoring and repeatable takedown playbooks took most of the firefighting out of the loop, so brand time goes to partnerships, not panicked inboxes.",
    },
  ],
  tr: [
    {
      id: "t1",
      initials: "MK",
      gradient: "from-[#FF69B4] to-[#A020F0]",
      stars: 5,
      metric: "+340%",
      metricLabel: "ilk tam çeyrekte FTD",
      role: "Casino operatörü · Türkiye",
      flag: "🇹🇷",
      quote:
        "Yalnızca Telegram envanteri, ilk tam çeyrekte FTD hacmimizi üçe katın üzerine çıkardı. Ekip Türkiye piyasasını—mesaj tonu, kreatif sınırlar, bütçeyi ne zaman sıkılaştıracağını—önceden içselleştirmişti; ilk haftadan itibaren sunum değil, anlamlı test döndük.",
    },
    {
      id: "t2",
      initials: "AL",
      gradient: "from-[#22D3EE] to-[#3b82f6]",
      stars: 5,
      metric: "2,4×",
      metricLabel: "5. ayda SEO kaynaklı ROI",
      role: "iGaming affiliate · Rusya",
      flag: "🇷🇺",
      quote:
        "Önce üç “genel” SEO ekibiyle dönüp durduk. Fark, derinlik: blog mimarisi, daha önce açamadığımız Türkçe iGaming sorgularında gerçekten yarışıyor ve trafik merak tıklaması gibi değil, niyetli oturum gibi davranıyor.",
    },
    {
      id: "t3",
      initials: "DF",
      gradient: "from-[#32CD32] to-[#22D3EE]",
      stars: 5,
      metric: "+210%",
      metricLabel: "dönüşümde bileşik iyileşme",
      role: "Oyun operatörü · Doğu Avrupa",
      flag: "🌍",
      quote:
        "Sohbet katmanı jenerik bir eklentiden ziyade ayarlı bir elde tutma hattı gibi. Ton, funnel ve yönlendirme, oyuncuların slotla canlı arasında gezdiği gerçek davranışa uyuyor; gece trafiği dâhil, devasa bir CRM laboratu açmadan.",
    },
    {
      id: "t4",
      initials: "ER",
      gradient: "from-amber-400 to-rose-500",
      stars: 5,
      metric: "−%38",
      metricLabel: "6 haftada bileşik CPA",
      role: "Edinim lideri · CEE",
      flag: "🇪🇺",
      quote:
        "Telegram satın almalarını tek ekipte toplayıp landingleri promo takvimiyle bire bir eşleştirecek bir ortak istiyorduk. Jelibon’un tempolu operasyonu—günlük cap, anlaşılır rapor, aynı gün kreatif değişimi—süreği altı haftada makul banda indirdi. Dış tedarikçi değil, masaya oturan ekip gibi hissediliyor.",
    },
    {
      id: "t5",
      initials: "NV",
      gradient: "from-violet-400 to-fuchsia-600",
      stars: 5,
      metric: "3 aşama",
      metricLabel: "ölçümlü ölçek; şok bütçe yok",
      role: "CMO · kripto dostu marka",
      flag: "🌐",
      quote:
        "Bizi etkileyen tek seferlik sıçrayış değil, disiplindi. Dar bir GEO’da test ettik, kohortlar oturdu, sonra bütçe açtık. Haftalık toplantılar kısa, rakamsal ve ertesi hafta neyi değiştireceğimizi net söylüyor—bu pazarda nadir.",
    },
    {
      id: "t6",
      initials: "LP",
      gradient: "from-emerald-500 to-cyan-500",
      stars: 5,
      metric: "~72 saat",
      metricLabel: "takedown ortanca süre",
      role: "Kurucu · çoklu ürün operatörü",
      flag: "🛡️",
      quote:
        "DMCA ve kopya marka gürültüsü cuma akşamları bana kalıyordu. Jelibon’un izleme ve tekrar eden takedown oyun kitabı, yangın söndürmeyi büyük ölçüde devreden aldı; marka ekibi artık ortaklıklara vakit ayırabiliyor.",
    },
  ],
  ru: [
    {
      id: "t1",
      initials: "МК",
      gradient: "from-[#FF69B4] to-[#A020F0]",
      stars: 5,
      metric: "+340%",
      metricLabel: "FTD в первом полном квартале",
      role: "Оператор казино · Турция",
      flag: "🇹🇷",
      quote:
        "Одна только Telegram-инвентарь более чем утроила FTD в первом полном квартале. Команда уже встроила, как ведёт себя Турция—тон, креативные рамки и моменты наращивания—поэтому с первой недели шли тесты, а не вечные слайд-деки.",
    },
    {
      id: "t2",
      initials: "АЛ",
      gradient: "from-[#22D3EE] to-[#3b82f6]",
      stars: 5,
      metric: "2,4×",
      metricLabel: "SEO-ROI к 5-му месяцу",
      role: "iGaming-аффилиат · Россия",
      flag: "🇷🇺",
      quote:
        "До этого мы побывали в трёх «широких» SEO-командах. Разница в глубине: блоговая сеть борется за турецкие iGaming-запросы, до которых мы не дотягивались, а трафик ведёт себя как намерение, а не пустой клик ради клика.",
    },
    {
      id: "t3",
      initials: "ДФ",
      gradient: "from-[#32CD32] to-[#22D3EE]",
      stars: 5,
      metric: "+210%",
      metricLabel: "рост конверсии (смешанно)",
      role: "Игровой оператор · Восточная Европа",
      flag: "🌍",
      quote:
        "Чат-контур ведёт себя как тонкий удержания-пайплайн, а не плагин по умолчанию. Тон, воронки и передачи совпадают с тем, как игроки ходят между слотами и live — включая ночь—без тяжёлого in-house CRM-цеха.",
    },
    {
      id: "t4",
      initials: "ЕР",
      gradient: "from-amber-400 to-rose-500",
      stars: 5,
      metric: "−38%",
      metricLabel: "смешанный CPA за 6 недель",
      role: "Руководитель привлечения · CEE",
      flag: "🇪🇺",
      quote:
        "Нужен был один подрядчик на Telegram-размещения и лендинги, синхронизированные с календарём промо. Ритм Jelibon—дневные капы, прозрачные отчёты и быстрые смены креативов—уже за пару недель ощутимо подтянул эффективность. Скорее встроенный growth, чем «ещё агентство».",
    },
    {
      id: "t5",
      initials: "НВ",
      gradient: "from-violet-400 to-fuchsia-600",
      stars: 5,
      metric: "3 этапа",
      metricLabel: "масштаб без скачка бюджета",
      role: "CMO · крипто-friendly бренд",
      flag: "🌐",
      quote:
        "Нам важен был не «один пик», а дисциплина: узкий GEO, стабилизация когорт, потом бюджет. Еженедельные sync короткие, с цифрами и нормальным смыслом—редкость в вертикали.",
    },
    {
      id: "t6",
      initials: "ЛП",
      gradient: "from-emerald-500 to-cyan-500",
      stars: 5,
      metric: "~72ч",
      metricLabel: "медиана срока takedown",
      role: "Основатель · мульти-продукт",
      flag: "🛡️",
      quote:
        "DMCA и копии бренда раньше прилетали пятницам. Мониторинг Jelibon и повторяемые takedown-сценарии сняли большую часть пожаротушения, и время бренд-команды ушло в партнёрства, а не в паничные письма.",
    },
  ],
};
