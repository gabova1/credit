import type { Metadata } from "next";
import Link from "next/link";
import { jobs } from "@/lib/data";
import JobsGrid from "@/components/JobsGrid";

export const metadata: Metadata = {
  title: "Вакансии с высокой зарплатой 2024 — работа онлайн, курьер, банк",
  description:
    "Актуальные вакансии без опыта и с опытом. Работа курьером, в банке, удалённо. Зарплата от 70 000 рублей. Быстрый отклик, официальное трудоустройство.",
  keywords: [
    "вакансии без опыта",
    "работа курьером",
    "работа в банке",
    "удалённая работа",
    "вакансии с высокой зарплатой",
    "работа яндекс",
    "подработка",
  ],
};

export default function VakansiiPage() {
  const maxSalary = Math.max(...jobs.map((j) => j.salaryMin));
  const remoteCount = jobs.filter((j) => j.format.toLowerCase().includes("удалён")).length;

  const FEATURES = [
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, text: `${jobs.length} вакансий` },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>, text: `${remoteCount} удалённо` },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, text: "Ответ за 1 день" },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>, text: "Обучение" },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>, text: "Официально" },
  ];

  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 py-12 lg:py-16">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-purple-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Вакансии</span>
          </nav>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Вакансии и работа онлайн 2024
          </h1>
          <p className="text-lg text-purple-100 max-w-2xl mb-8 text-pretty">
            {jobs.length} актуальных вакансий от проверенных работодателей. Зарплата до {maxSalary.toLocaleString("ru")} рублей, {remoteCount} удалённые позиции.
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
          <JobsGrid jobs={jobs} />
        </div>
      </section>

      {/* SEO article */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <article className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8">
              Как найти хорошую работу в 2024 году
            </h2>
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed">
                Рынок труда в России предлагает широкие возможности — от курьерской доставки с гибким графиком до карьеры в крупнейших банках страны. В нашем каталоге собраны актуальные вакансии с быстрым откликом и прозрачными условиями трудоустройства.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Популярные категории вакансий</h3>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  <span><strong className="text-slate-900">Курьеры и доставка</strong> — Яндекс Еда, Купер предлагают работу с гибким графиком от 3 часов в день по всей России.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  <span><strong className="text-slate-900">Работа в банке</strong> — Альфа-Банк набирает представителей HR, менеджеров DSA и малого бизнеса. Зарплата от 70 000 до 120 000 рублей.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  <span><strong className="text-slate-900">Удалённая работа</strong> — Т-Банк нанимает специалистов поддержки без привязки к городу.</span>
                </li>
              </ul>

              <div className="bg-slate-50 rounded-2xl p-6 my-6">
                <h4 className="font-semibold text-slate-900 mb-4">Советы по поиску работы</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Откликайтесь сразу на несколько вакансий — это увеличивает шансы быстрого трудоустройства.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Для курьерских позиций достаточно паспорта и смартфона — опыт не требуется.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Уточняйте условия работы и зарплату на собеседовании.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Как быстро трудоустроиться</h3>
              <p className="text-slate-600 leading-relaxed">
                Большинство работодателей из нашего каталога принимают решение в течение 1–2 дней. Для отклика достаточно нажать кнопку «Откликнуться» и заполнить анкету на сайте работодателя. Многие компании предлагают онлайн-собеседование без необходимости посещать офис.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
