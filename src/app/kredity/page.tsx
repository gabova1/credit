import type { Metadata } from "next";
import Link from "next/link";
import { credits } from "@/lib/data";
import OffersGrid from "@/components/OffersGrid";

export const metadata: Metadata = {
  title: "Кредиты наличными онлайн 2026 — подбор лучших предложений банков",
  description:
    "Сравните кредиты наличными от ведущих банков России. Ставки от 7.5%, суммы до 30 000 000 ₽, решение онлайн за 1 минуту. Т-Банк, Альфа-Банк и другие.",
  keywords: [
    "кредит наличными онлайн",
    "подбор кредита онлайн",
    "кредит без залога",
    "рефинансирование кредита",
    "автокредит",
    "кредит под залог недвижимости",
    "кредит для бизнеса",
  ],
};
const FEATURES = [
  "Ставка от 7.5%",
  "Сумма до 30 000 000 ₽",
  "Решение за 1 минуту",
  "Без справок",
  "Без залога",
];
export default function KredityPage() {
  return (
    <>
      <section className="relative overflow-hidden py-12 lg:py-16 hero-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.24),transparent_38%)]" />
        <div className="container relative z-10">
          <nav className="flex items-center gap-2 text-sm text-brand-100 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>›</span>
            <span className="text-white">Кредиты</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 max-w-3xl">
            Кредиты наличными онлайн
          </h1>
          <p className="text-lg text-brand-100 max-w-3xl mb-8">
            Подберите выгодный кредит из {credits.length} предложений ведущих банков России. Оформление онлайн, решение за несколько минут и прозрачные условия.
          </p>

          <div className="flex flex-wrap gap-3">
            {FEATURES.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-12">
        <div className="container">
          <OffersGrid offers={credits} />
        </div>
      </section>
      <section className="pb-12 lg:pb-16">
        <div className="container">
          <article className="card max-w-4xl mx-auto p-6 sm:p-8">
            <h2 className="text-2xl lg:text-3xl mb-6">Как выбрать кредит и не переплатить</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Перед оформлением кредита важно сравнить не только ставку, но и полную стоимость кредита. Этот показатель учитывает дополнительные расходы и помогает увидеть реальную переплату.
              </p>
              <p>
                Для краткосрочных задач обычно подходит классический кредит наличными. Если нужно снизить ежемесячный платёж по действующим обязательствам, лучше рассмотреть рефинансирование.
              </p>
              <p>
                Оптимальная стратегия: выбрать 2-3 подходящих предложения, заполнить заявки и сравнить финальные условия после одобрения. Так можно получить лучшие параметры по ставке и сроку.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
