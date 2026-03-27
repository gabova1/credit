import Link from "next/link";

const LINKS = {
  products: [
    { href: "/kredity/", label: "Кредиты" },
    { href: "/zaimy/", label: "Займы" },
    { href: "/kreditnye-karty/", label: "Кредитные карты" },
    { href: "/debitovye-karty/", label: "Дебетовые карты" },
  ],
  more: [
    { href: "/strakhovanie/", label: "Страхование" },
    { href: "/vakansii/", label: "Вакансии" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-bold text-slate-900 text-lg">КредитПодбор</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              Бесплатный сервис подбора кредитов, займов и кредитных карт. Сравниваем предложения ведущих банков и МФО России для вашего удобства.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <svg className="w-4 h-4 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Безопасно</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <svg className="w-4 h-4 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Бесплатно</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Продукты</h4>
            <ul className="space-y-2.5">
              {LINKS.products.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-600 hover:text-primary-600 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Ещё</h4>
            <ul className="space-y-2.5">
              {LINKS.more.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-600 hover:text-primary-600 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} КредитПодбор. Сервис сравнения финансовых продуктов.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-400 px-3 py-1 bg-slate-100 rounded-full">18+</span>
              <p className="text-xs text-slate-400">
                Не является финансовой организацией
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-4 leading-relaxed">
            Все предложения носят информационный характер. Окончательные условия уточняйте непосредственно в банке или МФО. Реклама. Финансовые услуги оказываются лицензированными организациями.
          </p>
        </div>
      </div>
    </footer>
  );
}
