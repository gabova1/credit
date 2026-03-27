import type { Metadata } from "next";
import Link from "next/link";
import { insurances } from "@/lib/data";
import InsuranceGrid from "@/components/InsuranceGrid";

export const metadata: Metadata = {
  title: "Страхование онлайн 2026 — ОСАГО, КАСКО, ВЗР, ипотека, жизнь",
  description:
    "Оформите страховку онлайн за 2–3 минуты. ОСАГО, КАСКО, страхование путешественников, ипотечное страхование. Полис на email сразу. Экономия до 50%.",
  keywords: [
    "страхование онлайн",
    "ОСАГО онлайн",
    "КАСКО онлайн",
    "страхование путешественников ВЗР",
    "ипотечное страхование",
    "страхование жизни",
    "страхование квартиры",
  ],
};

export default function StrakhovaniePage() {
  const autoCount = insurances.filter((i) => i.category === "auto").length;
  const travelCount = insurances.filter((i) => i.category === "travel").length;
  const propertyCount = insurances.filter((i) => i.category === "property").length;
  const lifeCount = insurances.filter((i) => i.category === "life").length;

  const FEATURES = [
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, text: `${insurances.length} предложений` },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, text: "Полис за 2 минуты" },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, text: "На email сразу" },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, text: "Экономия до 50%" },
  ];

  const CATEGORIES = [
    { label: "Авто", count: autoCount, color: "bg-orange-500" },
    { label: "Путешествия", count: travelCount, color: "bg-sky-500" },
    { label: "Имущество", count: propertyCount, color: "bg-amber-500" },
    { label: "Жизнь", count: lifeCount, color: "bg-rose-500" },
  ];

  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 py-12 lg:py-16">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-orange-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Страхование</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Страхование онлайн 2026
          </h1>
          <p className="text-lg text-orange-100 max-w-2xl mb-8 text-pretty">
            {insurances.length} предложений от проверенных страховщиков. ОСАГО, КАСКО, ВЗР, ипотека, жизнь и здоровье. Полис за 2–3 минуты, мгновенно на email.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-3 mb-8">
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

          {/* Category stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {CATEGORIES.map((c) => (
              <div key={c.label} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center border border-white/10">
                <div className="text-2xl font-bold text-white mb-1">{c.count}</div>
                <div className="text-sm text-orange-100">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-10 lg:py-12 bg-slate-50">
        <div className="container">
          <InsuranceGrid items={insurances} />
        </div>
      </section>

      {/* SEO article */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <article className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8">
              Страхование онлайн — полный гид 2026
            </h2>
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed">
                Онлайн-страхование стало доступным и удобным: оформить полис можно за 2–5 минут без визита в офис. Полис приходит на email немедленно, принимается во всех необходимых инстанциях.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Автострахование: ОСАГО и КАСКО</h3>
              <p className="text-slate-600 leading-relaxed">
                <strong className="text-slate-900">ОСАГО</strong> — обязательное страхование гражданской ответственности. Без полиса ОСАГО езда на автомобиле запрещена. Оформите е-ОСАГО онлайн за 5 минут: Mafin, Т-Страхование, ВСК, Cherehapa предлагают электронные полисы.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong className="text-slate-900">КАСКО</strong> — добровольное страхование автомобиля от ДТП, угона, ущерба, полного тотала. Т-Страхование предлагает скидку 30% за аккуратное вождение и кэшбэк 10% на счёт.
              </p>

              <div className="bg-slate-50 rounded-2xl p-6 my-6">
                <h4 className="font-semibold text-slate-900 mb-4">Как оформить страховку онлайн</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Выберите нужный вид страхования в каталоге и нажмите «Оформить полис».</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Заполните данные на сайте страховщика (2–5 минут для большинства полисов).</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Оплатите картой — полис немедленно придёт на email.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Для ОСАГО полис вносится в базу РСА автоматически в течение нескольких минут.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Страхование путешественников (ВЗР)</h3>
              <p className="text-slate-600 leading-relaxed">
                Страховка ВЗР (выезд за рубеж) — обязательное условие для получения шенгенской визы и рекомендуется для любых зарубежных поездок. Покрывает медицинскую помощь, экстренную эвакуацию, отмену поездки.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Ипотечное страхование</h3>
              <p className="text-slate-600 leading-relaxed">
                При ипотечном кредите банки требуют страхование имущества (залога) и жизни заёмщика. Страховка через наш каталог обойдётся на 20–50% дешевле, чем через банк. Все полисы принимаются Сбербанком, Т-Банком и другими ипотечными банками.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
