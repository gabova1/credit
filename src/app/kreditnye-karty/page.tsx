import type { Metadata } from "next";
import Link from "next/link";
import { cards } from "@/lib/data";
import OffersGrid from "@/components/OffersGrid";

export const metadata: Metadata = {
  title: "Лучшие кредитные карты 2026 — сравнение, кэшбэк, беспроцентный период",
  description:
    "Сравните лучшие кредитные карты 2026 года. Беспроцентный период до 120 дней, кэшбэк до 30%, лимит до 1 000 000 ₽. Т-Банк, Халва, Ак Барс и другие.",
  keywords: [
    "лучшие кредитные карты",
    "кредитная карта без процентов",
    "кредитная карта с кэшбэком",
    "кредитная карта рассрочка",
    "беспроцентный период 120 дней",
    "кредитная карта онлайн",
    "карта халва",
  ],
};

const FEATURES = [
  "До 120 дней без процентов",
  "Кэшбэк до 30%",
  "Лимит до 1 000 000 ₽",
  "Бесплатное оформление",
  "Доставка на дом",
];

export default function KreditnyeKartyPage() {
  return (
    <>
      <section className="relative overflow-hidden py-12 lg:py-16 bg-gradient-to-br from-cyan-600 via-sky-700 to-blue-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(255,255,255,0.24),transparent_35%)]" />
        <div className="container relative z-10">
          <nav className="flex items-center gap-2 text-sm text-cyan-100 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>›</span>
            <span className="text-white">Кредитные карты</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 max-w-3xl">
            Лучшие кредитные карты
          </h1>
          <p className="text-lg text-cyan-100 max-w-3xl mb-8">
            Сравните {cards.length} карт с длинным льготным периодом и выгодным кэшбэком. Выберите карту под стиль трат и оформите онлайн за несколько минут.
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
          <OffersGrid offers={cards} />
        </div>
      </section>
      <section className="pb-12 lg:pb-16">
        <div className="container">
          <article className="card max-w-4xl mx-auto p-6 sm:p-8">
            <h2 className="text-2xl lg:text-3xl mb-6">Как выбрать кредитную карту под свои задачи</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Главный параметр кредитной карты — льготный период. Чем он длиннее, тем проще закрывать задолженность без процентов. Дополнительно стоит учитывать кэшбэк и стоимость обслуживания.
              </p>
              <p>
                Если карта нужна для ежедневных покупок, приоритетом должен быть кэшбэк в ваших категориях трат. Для крупных расходов лучше выбирать карту с максимальным лимитом и стабильным грейс-периодом.
              </p>
              <p>
                Перед оформлением полезно сравнить требования к заёмщику и условия увеличения лимита. Это поможет выбрать продукт, который останется выгодным и на старте, и в долгосрочном использовании.
              </p>
            </div>
          </article>

        </div>
      </section>
    </>
  );
}
