import type { Metadata } from "next";
import { cards } from "@/lib/data";
import OffersGrid from "@/components/OffersGrid";

export const metadata: Metadata = {
  title: "Лучшие кредитные карты 2024 — сравнение, кэшбэк, беспроцентный период",
  description:
    "Сравните лучшие кредитные карты 2024 года. Беспроцентный период до 120 дней, кэшбэк до 30%, лимит до 1 000 000 ₽. Т-Банк, Халва, Ак Барс и другие.",
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

export default function KreditnyeKartyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Page header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
          <a href="/" className="hover:text-blue-400 transition-colors">Главная</a>
          <span>›</span>
          <span className="text-white">Кредитные карты</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Лучшие кредитные карты 2024
        </h1>
        <p className="text-slate-300 max-w-3xl leading-relaxed">
          Сравните {cards.length} кредитных карт ведущих банков. Беспроцентный период до 120 дней, кэшбэк до 30%, лимит до 1 000 000 ₽. Бесплатное оформление и доставка на дом.
        </p>
      </div>

      {/* Key info badges */}
      <div className="flex flex-wrap gap-3 mb-8">
        {[
          { icon: "⏳", text: "До 120 дней без %" },
          { icon: "💰", text: "Кэшбэк до 30%" },
          { icon: "💳", text: "Лимит до 1 млн ₽" },
          { icon: "🎁", text: "Бесплатно" },
          { icon: "🚀", text: "Доставка на дом" },
        ].map((b) => (
          <span
            key={b.text}
            className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
          >
            <span>{b.icon}</span>
            {b.text}
          </span>
        ))}
      </div>

      {/* Offers */}
      <OffersGrid offers={cards} />

      {/* SEO article */}
      <article className="mt-16 glass-card p-8 prose prose-invert prose-sm max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">
          Как выбрать лучшую кредитную карту в 2024 году
        </h2>
        <div className="text-slate-300 space-y-4 text-sm leading-relaxed">
          <p>
            Кредитная карта — удобный финансовый инструмент, позволяющий пользоваться деньгами банка бесплатно в течение льготного периода, получать кэшбэк за покупки и оплачивать крупные покупки в рассрочку. При правильном использовании кредитная карта приносит выгоду, а не расходы.
          </p>

          <h3 className="text-lg font-semibold text-white mt-5">Что такое льготный период и как им пользоваться</h3>
          <p>
            Льготный (грейс) период — это время, в течение которого банк не начисляет проценты на потраченные средства. Если вернуть долг до окончания льготного периода, кредит обойдётся бесплатно. Лучшие предложения 2024 года:
          </p>
          <ul className="list-none space-y-2">
            <li className="flex gap-2"><span className="text-amber-400">★</span><span><strong className="text-white">Т-Банк Платинум</strong> — до 120 дней без процентов, лимит до 1 000 000 ₽</span></li>
            <li className="flex gap-2"><span className="text-amber-400">★</span><span><strong className="text-white">Ак Барс Банк</strong> — до 115 дней без процентов, снятие наличных без комиссии</span></li>
            <li className="flex gap-2"><span className="text-amber-400">★</span><span><strong className="text-white">Халва (Совкомбанк)</strong> — до 110 дней, рассрочка у 250 000+ партнёров</span></li>
          </ul>

          <h3 className="text-lg font-semibold text-white mt-5">Кредитные карты с кэшбэком</h3>
          <p>
            Многие банки начисляют кэшбэк за покупки по кредитной карте — процент от суммы трат возвращается на счёт. Т-Банк Drive предлагает кэшбэк до 30% на топливо, Уралсиб — до 6% за все покупки. Кэшбэк может быть в виде рублей, баллов или миль.
          </p>

          <h3 className="text-lg font-semibold text-white mt-5">Карты рассрочки</h3>
          <p>
            Карты рассрочки позволяют оплачивать товары и услуги у партнёров банка в рассрочку без процентов. Халва от Совкомбанка — лидер рынка: более 250 000 партнёров по всей России. Уралсиб предлагает рассрочку с кэшбэком до 6%.
          </p>

          <h3 className="text-lg font-semibold text-white mt-5">На что обратить внимание при выборе карты</h3>
          <ul className="list-none space-y-2">
            <li className="flex gap-2"><span className="text-emerald-400">✓</span><span><strong className="text-white">Длина льготного периода</strong> — чем длиннее, тем удобнее пользоваться без переплат.</span></li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span><span><strong className="text-white">Стоимость обслуживания</strong> — многие топовые карты бесплатны при выполнении условий.</span></li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span><span><strong className="text-white">Кэшбэк и бонусы</strong> — изучите категории повышенного кэшбэка.</span></li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span><span><strong className="text-white">Снятие наличных</strong> — как правило, невыгодно: проценты начисляются сразу. Ак Барс предлагает бесплатное снятие.</span></li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span><span><strong className="text-white">Кредитный лимит</strong> — зависит от дохода и кредитной истории. Начальный лимит можно увеличить.</span></li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span><span><strong className="text-white">Минимальный платёж</strong> — ежемесячно нужно вносить минимум 3–5% от долга, чтобы не нарушить условия.</span></li>
          </ul>

          <h3 className="text-lg font-semibold text-white mt-5">Как оформить кредитную карту онлайн</h3>
          <p>
            Оформление кредитной карты занимает 2–10 минут. Выберите карту в нашем каталоге, перейдите на сайт банка и заполните анкету. Банк даст предварительное решение за 2–5 минут. Карту доставят курьером или почтой. Т-Банк и Альфа-Банк доставляют карты по всей России бесплатно.
          </p>

          <h3 className="text-lg font-semibold text-white mt-5">Советы по использованию кредитной карты</h3>
          <ul className="list-none space-y-2">
            <li className="flex gap-2"><span className="text-blue-400">→</span><span>Всегда погашайте долг полностью до конца льготного периода — это позволяет пользоваться кредитом бесплатно.</span></li>
            <li className="flex gap-2"><span className="text-blue-400">→</span><span>Используйте карту для ежедневных покупок, чтобы накапливать кэшбэк и бонусы.</span></li>
            <li className="flex gap-2"><span className="text-blue-400">→</span><span>Установите лимит трат в мобильном приложении, чтобы не выходить за рамки бюджета.</span></li>
            <li className="flex gap-2"><span className="text-blue-400">→</span><span>Избегайте снятия наличных — на это обычно не распространяется льготный период.</span></li>
          </ul>
        </div>
      </article>
    </div>
  );
}
