import Link from "next/link";
import { credits, loans, debitCards, jobs, insurances } from "@/lib/data";
import OfferCard from "@/components/OfferCard";

// Combine credits and loans for total offers count
const offers = [...credits, ...loans];

const CATEGORIES = [
  {
    title: "Кредиты и займы",
    href: "/zaimy",
    count: offers.length,
    description: "Быстрое одобрение",
    color: "bg-brand-600",
    hoverColor: "hover:bg-brand-700",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Дебетовые карты",
    href: "/debitovye-karty",
    count: debitCards.length,
    description: "Кэшбэк до 30%",
    color: "bg-success-600",
    hoverColor: "hover:bg-success-700",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    )
  },
  {
    title: "Вакансии",
    href: "/vakansii",
    count: jobs.length,
    description: "Удалённая работа",
    color: "bg-purple-600",
    hoverColor: "hover:bg-purple-700",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Страхование",
    href: "/strakhovanie",
    count: insurances.length,
    description: "Онлайн-оформление",
    color: "bg-orange-500",
    hoverColor: "hover:bg-orange-600",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
];

const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Проверенные предложения",
    desc: "Только надёжные партнёры"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Быстрое оформление",
    desc: "Решение за 2 минуты"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Без скрытых комиссий",
    desc: "Прозрачные условия"
  },
];

const topOffers = offers.filter((o) => o.highlight).slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 py-16 lg:py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight animate-slide-up">
              Финансовые решения для вашего бизнеса и жизни
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-brand-100 mb-10 text-pretty animate-slide-up" style={{ animationDelay: "80ms", animationFillMode: "both" }}>
              Сравните предложения банков и получите деньги на карту за 2 минуты.
              Более 50 проверенных партнёров.
            </p>

            {/* Quick actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "160ms", animationFillMode: "both" }}>
              <Link
                href="/zaimy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Получить займ
              </Link>
              <Link
                href="/debitovye-karty"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Выбрать карту
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 bg-white/60 backdrop-blur-sm border-y border-white/70">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex items-center gap-4 p-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{f.title}</h3>
                  <p className="text-sm text-slate-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">
            Выберите категорию
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {CATEGORIES.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className={`group relative p-6 rounded-2xl ${c.color} ${c.hoverColor} text-white transition-all hover:shadow-lg hover:-translate-y-1`}
              >
                <div className="mb-4 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  {c.icon}
                </div>
                <h3 className="font-semibold text-lg mb-1">{c.title}</h3>
                <p className="text-sm text-white/80 mb-3">{c.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-lg">
                    {c.count} предложений
                  </span>
                  <svg className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Offers */}
      <section
        className="py-12 lg:py-16">        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-slate-900 mb-2">
                Лучшие предложения
              </h2>
              <p className="text-slate-500">Самые выгодные условия от наших партнёров</p>
            </div>
            <Link
              href="/zaimy"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Все предложения
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topOffers.map((offer, i) => (
              <OfferCard key={offer.id} offer={offer} index={i} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/zaimy"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 transition-colors"
            >
              Смотреть все предложения
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-sm text-slate-400">Партнёров</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-sm text-slate-400">Одобрений</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">2 мин</div>
                <div className="text-sm text-slate-400">Время решения</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-slate-400">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Готовы начать?
            </h2>
            <p className="text-slate-600 mb-8">
              Выберите подходящее предложение и оформите заявку онлайн.
              Деньги поступят на карту в течение нескольких минут.
            </p>
            <Link
              href="/zaimy"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white font-semibold rounded-xl shadow-lg hover:bg-brand-700 transition-all hover:-translate-y-0.5"
            >
              Получить деньги сейчас
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
