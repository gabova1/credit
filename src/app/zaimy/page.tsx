import type { Metadata } from "next";
import Link from "next/link";
import { loans } from "@/lib/data";
import OffersGrid from "@/components/OffersGrid";

export const metadata: Metadata = {
  title: "Займы без отказа онлайн 2024 — на карту за 5 минут, первый займ 0%",
  description:
    "Онлайн-займы без отказа на карту. Первый займ под 0% в проверенных МФО. Одобрение 93–98%, перевод за 5 минут. Сравните лучшие предложения прямо сейчас.",
  keywords: [
    "займы без отказа",
    "займ онлайн на карту",
    "займ без проверки кредитной истории",
    "быстрый займ",
    "микрозайм онлайн",
    "первый займ 0 процентов",
    "МФО онлайн",
  ],
};

const FEATURES = [
  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>, text: "Первый займ 0%" },
  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, text: "За 5 минут" },
  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, text: "Одобрение до 98%" },
  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>, text: "Без проверки КИ" },
  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, text: "Круглосуточно" },
  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>, text: "На любую карту" },
];

export default function ZaimyPage() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 py-12 lg:py-16">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-brand-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Займы</span>
          </nav>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Займы онлайн без отказа
          </h1>
          <p className="text-lg text-brand-100 max-w-2xl mb-8 text-pretty">
            Сравните {loans.length} предложений от проверенных МФО. Займы на карту без отказа за 5 минут. Первый займ под 0% доступен во многих компаниях.
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
          <OffersGrid offers={loans} />
        </div>
      </section>

      {/* SEO article */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <article className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8">
              Займы без отказа онлайн: полное руководство 2024
            </h2>
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed">
                Онлайн-займы в микрофинансовых организациях (МФО) стали популярным способом получить деньги быстро — без очередей, лишних документов и длительного ожидания. Вся процедура занимает 5–15 минут: от заявки до получения денег на карту.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Как работают онлайн-займы</h3>
              <p className="text-slate-600 leading-relaxed">
                МФО (микрофинансовые организации) выдают небольшие суммы на короткий срок. Типичный займ — до 30 000 рублей сроком до 30 дней. Крупные МФО предлагают суммы до 100 000 рублей и сроки до 360 дней.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Главное преимущество МФО перед банками — лояльность к кредитной истории. Многие компании одобряют займы даже заёмщикам с плохой КИ или её отсутствием. Процент одобрения достигает 97–98%.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Первый займ под 0% — как воспользоваться</h3>
              <p className="text-slate-600 leading-relaxed">
                Большинство МФО предлагают новым клиентам специальные условия: первый займ под 0% на срок 7–30 дней. Это означает, что вы берёте 10 000 рублей и возвращаете ровно 10 000 рублей — без процентов и комиссий.
              </p>
              
              <div className="bg-slate-50 rounded-2xl p-6 my-6">
                <h4 className="font-semibold text-slate-900 mb-4">Лучшие предложения с 0%</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" /></svg>
                    <span><strong className="text-slate-900">Kviku</strong> — первый займ 0%, до 100 000 рублей, срок до 360 дней</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" /></svg>
                    <span><strong className="text-slate-900">CreditPlus</strong> — первый займ 0%, до 30 000 рублей, срок до 30 дней</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" /></svg>
                    <span><strong className="text-slate-900">Небус</strong> — первый займ 0%, до 100 000 рублей, срок до 360 дней</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Как выбрать МФО</h3>
              <p className="text-slate-600 leading-relaxed">При выборе микрофинансовой организации обратите внимание на:</p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-success-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span><strong className="text-slate-900">Наличие лицензии ЦБ РФ</strong> — все компании в нашем каталоге имеют лицензию и внесены в реестр МФО.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-success-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span><strong className="text-slate-900">Процентная ставка</strong> — по закону не более 0.8% в день. Первый займ часто 0%.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-success-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span><strong className="text-slate-900">Способы получения</strong> — на карту Visa/МИР/МasterCard, через СБП, на счёт.</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
