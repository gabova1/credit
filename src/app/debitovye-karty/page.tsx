import type { Metadata } from "next";
import Link from "next/link";
import { debitCards } from "@/lib/data";
import DebitCardsGrid from "@/components/DebitCardsGrid";

export const metadata: Metadata = {
  title: "Лучшие дебетовые карты 2024 — кэшбэк, бесплатное обслуживание, доставка",
  description:
    "Сравните дебетовые карты ведущих банков России. Кэшбэк до 100%, бесплатное обслуживание, доставка курьером. Т-Банк, Альфа-Банк, УБРиР и другие.",
  keywords: [
    "лучшие дебетовые карты",
    "дебетовая карта с кэшбэком",
    "бесплатная дебетовая карта",
    "дебетовая карта онлайн",
    "карта с кэшбэком",
    "карта с доставкой на дом",
  ],
};

export default function DebitovyeKartyPage() {
  const banks = Array.from(new Set(debitCards.map((c) => c.bank)));
  const maxCashback = Math.max(...debitCards.map((c) => c.cashbackMax));

  const FEATURES = [
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, text: `Кэшбэк до ${maxCashback}%` },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>, text: "Бесплатное обслуживание" },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, text: "Доставка на дом" },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>, text: `${banks.length} банков` },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>, text: "Онлайн-оформление" },
  ];

  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-success-600 via-success-700 to-success-800 py-12 lg:py-16">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-success-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Дебетовые карты</span>
          </nav>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Лучшие дебетовые карты 2024
          </h1>
          <p className="text-lg text-success-100 max-w-2xl mb-8 text-pretty">
            Сравните {debitCards.length} дебетовых карт от {banks.length} банков. Кэшбэк до {maxCashback}%, бесплатное обслуживание, курьерская доставка.
          </p>
          
          {/* Feature badges */}
          <div className="flex flex-wrap gap-3">
            {FEATURES.map((f) => (
              <span
                key={f.text}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm text-white"
              >
                {f.icon}
                {f.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-10 lg:py-12 bg-slate-50">
        <div className="container">
          <DebitCardsGrid cards={debitCards} />
        </div>
      </section>

      {/* SEO article */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <article className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8">
              Как выбрать лучшую дебетовую карту в 2024 году
            </h2>
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed">
                Дебетовая карта — базовый банковский инструмент для хранения и расходования собственных средств. Современные банки предлагают карты не просто для оплаты, но и с кэшбэком, накопительными процентами, страховкой в путешествиях и другими бонусами.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Виды дебетовых карт</h3>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-success-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  <span><strong className="text-slate-900">Карты с кэшбэком</strong> — возврат процента от покупок на счёт. Т-Банк Black предлагает до 30%, Альфа-Карта Молодёжная — до 100% в определённых категориях.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-success-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  <span><strong className="text-slate-900">Карты с накопительным счётом</strong> — остаток на счёте приносит до 14–23% годовых. УБРиР My Life, УРАЛСИБ Прибыль.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-success-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  <span><strong className="text-slate-900">Премиальные карты</strong> — Т-Банк Black Premium с доступом в бизнес-залы, повышенными лимитами и персональным менеджером.</span>
                </li>
              </ul>

              <div className="bg-slate-50 rounded-2xl p-6 my-6">
                <h4 className="font-semibold text-slate-900 mb-4">На что обратить внимание при выборе</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-success-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span><strong className="text-slate-900">Кэшбэк</strong> — изучите категории и максимальную сумму возврата в месяц.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-success-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span><strong className="text-slate-900">Стоимость обслуживания</strong> — многие карты бесплатны при выполнении условий.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-success-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span><strong className="text-slate-900">Переводы</strong> — бесплатные переводы через СБП, лимиты на переводы другим клиентам.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Как оформить дебетовую карту онлайн</h3>
              <p className="text-slate-600 leading-relaxed">
                Оформление дебетовой карты занимает 2–5 минут: выберите карту, заполните анкету на сайте банка и ожидайте доставку курьером (обычно 1–5 дней). Большинство банков из нашего каталога бесплатно доставляют карту по всей России.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
