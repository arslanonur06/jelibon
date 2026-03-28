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
      metricLabel: "FTD growth in 4 months",
      role: "Casino Operator · Türkiye",
      flag: "🇹🇷",
      quote:
        "The Telegram network alone tripled our FTD volume in the first quarter. Jelibon's team understood the Turkish market dynamics before we even explained them—niche targeting, creative tone, and funnel timing were all perfectly calibrated from week one.",
    },
    {
      id: "t2",
      initials: "AL",
      gradient: "from-[#22D3EE] to-[#3b82f6]",
      stars: 5,
      metric: "+2.4×",
      metricLabel: "SEO ROI in 5 months",
      role: "iGaming Affiliate · Russia",
      flag: "🇷🇺",
      quote:
        "We tried three SEO agencies before Jelibon. None understood the iGaming compliance landscape. The blog network they built ranks for Turkish keywords we couldn't touch before, and the traffic converts at a level we hadn't seen.",
    },
    {
      id: "t3",
      initials: "DF",
      gradient: "from-[#32CD32] to-[#22D3EE]",
      stars: 5,
      metric: "+210%",
      metricLabel: "conversion rate uplift",
      role: "Game Operator · Eastern Europe",
      flag: "🌍",
      quote:
        "The AI chatbot system turned our late-night traffic into a real revenue stream. Persona targeting and funnel logic were tailored to casino behaviour—it felt like a senior CRM manager working 24/7 at a fraction of the cost.",
    },
  ],
  tr: [
    {
      id: "t1",
      initials: "MK",
      gradient: "from-[#FF69B4] to-[#A020F0]",
      stars: 5,
      metric: "+340%",
      metricLabel: "4 ayda FTD büyümesi",
      role: "Casino Operatörü · Türkiye",
      flag: "🇹🇷",
      quote:
        "Yalnızca Telegram ağı, ilk çeyrekte FTD hacmimizi üçe katladı. Jelibon ekibi Türkiye piyasa dinamiklerini biz açıklamadan önce anlamıştı—niş hedefleme, kreatif ton ve funnel zamanlaması birinci haftadan itibaren mükemmel şekilde ayarlandı.",
    },
    {
      id: "t2",
      initials: "AL",
      gradient: "from-[#22D3EE] to-[#3b82f6]",
      stars: 5,
      metric: "+2.4×",
      metricLabel: "5 ayda SEO ROI",
      role: "iGaming Affiliate · Rusya",
      flag: "🇷🇺",
      quote:
        "Jelibon öncesinde üç farklı SEO ajansı denedik. Hiçbiri iGaming uyumluluk ortamını anlamadı. Jelibon'un kurduğu blog ağı daha önce sıralanmadığımız Türkçe anahtar kelimelerde üst sıralarda ve trafik dönüşüm oranları hiç görmediğimiz seviyelerde.",
    },
    {
      id: "t3",
      initials: "DF",
      gradient: "from-[#32CD32] to-[#22D3EE]",
      stars: 5,
      metric: "+210%",
      metricLabel: "dönüşüm oranı artışı",
      role: "Oyun Operatörü · Doğu Avrupa",
      flag: "🌍",
      quote:
        "AI sohbet botu sistemi, gece geç saatlerdeki trafiğimizi gerçek bir gelir akışına dönüştürdü. Persona hedefleme ve funnel mantığı casino davranışlarına özel tasarlanmıştı—maliyetin çok küçük bir kısmıyla 7/24 çalışan kıdemli bir CRM yöneticisine sahip olmak gibiydi.",
    },
  ],
  ru: [
    {
      id: "t1",
      initials: "МК",
      gradient: "from-[#FF69B4] to-[#A020F0]",
      stars: 5,
      metric: "+340%",
      metricLabel: "FTD за 4 месяца",
      role: "Оператор казино · Турция",
      flag: "🇹🇷",
      quote:
        "Только сеть Telegram утроила объём FTD в первом квартале. Команда Jelibon поняла динамику турецкого рынка ещё до того, как мы объяснили — нишевый таргетинг, тональность креативов и тайминг воронки были идеально выстроены уже с первой недели.",
    },
    {
      id: "t2",
      initials: "АЛ",
      gradient: "from-[#22D3EE] to-[#3b82f6]",
      stars: 5,
      metric: "+2.4×",
      metricLabel: "ROI по SEO за 5 месяцев",
      role: "iGaming Аффилиат · Россия",
      flag: "🇷🇺",
      quote:
        "До Jelibon мы пробовали три SEO-агентства. Ни одно не понимало специфики iGaming-комплаенса. Выстроенная ими сеть блогов занимает позиции по турецким ключам, на которые мы раньше не могли выйти, а конверсия трафика на небывалом уровне.",
    },
    {
      id: "t3",
      initials: "ДФ",
      gradient: "from-[#32CD32] to-[#22D3EE]",
      stars: 5,
      metric: "+210%",
      metricLabel: "рост конверсии",
      role: "Игровой Оператор · Восточная Европа",
      flag: "🌍",
      quote:
        "Система AI-чатбота превратила наш ночной трафик в полноценный источник дохода. Таргетинг персон и логика воронки были заточены под поведение игроков — это как иметь опытного CRM-менеджера 24/7 за малую долю затрат.",
    },
  ],
};
