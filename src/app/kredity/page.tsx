import type { Metadata } from "next";
import { credits } from "@/lib/data";
import OffersGrid from "@/components/OffersGrid";

export const metadata: Metadata = {
  title: "Кредиты наличными онлайн 2024 — подбор лучших предложений банков",
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

export default function KredityPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Page header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
          <a href="/" className="hover:text-blue-400 transition-colors">Главная</a>
          <span>›</span>
          <span className="text-white">Кредиты</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Кредиты наличными онлайн
        </h1>
        <p className="text-slate-300 max-w-3xl leading-relaxed">
          Подберите выгодный кредит наличными из {credits.length} предложений ведущих банков России. Ставки от 7.5% годовых, суммы до 30 000 000 ₽. Получите онлайн-решение за 1–5 минут без визита в банк.
        </p>
      </div>

      {/* Key info badges */}
      <div className="flex flex-wrap gap-3 mb-8">
        {[
          { icon: "📈", text: "Ставка от 7.5%" },
          { icon: "💰", text: "До 30 000 000 ₽" },
          { icon: "⏱", text: "Решение за 1 мин" },
          { icon: "📄", text: "Без справок" },
          { icon: "🏠", text: "Без залога" },
        ].map((b) => (
          <span
            key={b.text}
            className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs text-blue-300"
          >
            <span>{b.icon}</span>
            {b.text}
          </span>
        ))}
      </div>

      {/* Offers */}
      <OffersGrid offers={credits} />

      {/* SEO article */}
      <article className="mt-16 glass-card p-8 prose prose-invert prose-sm max-w-none">
        <h2 className="text-2xl font-bold text-white mb-6">
          Как получить кредит наличными в 2024 году
        </h2>
        <div className="text-slate-300 space-y-4 text-sm leading-relaxed">
          <p>
            Кредит наличными — удобный финансовый инструмент для решения любых жизненных задач: ремонта, покупки техники, лечения, путешествий или непредвиденных расходов. Современные банки предлагают оформить кредит полностью онлайн — достаточно паспорта и смартфона.
          </p>

          <h3 className="text-lg font-semibold text-white mt-5">Виды кредитов</h3>
          <ul className="list-none space-y-2">
            <li className="flex gap-2"><span className="text-blue-400">→</span><span><strong className="text-white">Кредит наличными без залога</strong> — самый популярный вид. Т-Банк предлагает до 5 000 000 ₽ по ставке от 10.9%, Альфа-Банк — до 7 500 000 ₽ от 10.5%.</span></li>
            <li className="flex gap-2"><span className="text-blue-400">→</span><span><strong className="text-white">Рефинансирование</strong> — объединение нескольких кредитов в один с более низкой ставкой. Позволяет снизить ежемесячный платёж и переплату.</span></li>
            <li className="flex gap-2"><span className="text-blue-400">→</span><span><strong className="text-white">Кредит под залог недвижимости</strong> — большие суммы до 30 000 000 ₽ по низкой ставке от 7.5%. Авто остаётся в пользовании заёмщика.</span></li>
            <li className="flex gap-2"><span className="text-blue-400">→</span><span><strong className="text-white">Автокредит</strong> — целевой кредит на покупку автомобиля. Т-Банк предлагает до 8 000 000 ₽ без первоначального взноса.</span></li>
            <li className="flex gap-2"><span className="text-blue-400">→</span><span><strong className="text-white">Кредит для бизнеса</strong> — финансирование ИП и ООО до 30 000 000 ₽ без сложного пакета документов.</span></li>
          </ul>

          <h3 className="text-lg font-semibold text-white mt-5">На что обратить внимание при выборе кредита</h3>
          <p>При сравнении кредитных предложений важно учитывать несколько ключевых параметров:</p>
          <ul className="list-none space-y-2">
            <li className="flex gap-2"><span className="text-emerald-400">✓</span><span><strong className="text-white">Годовая процентная ставка (ГПС)</strong> — основной показатель стоимости кредита. Чем ниже ставка, тем меньше переплата.</span></li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span><span><strong className="text-white">Полная стоимость кредита (ПСК)</strong> — включает все комиссии и дополнительные платежи. Обязательно проверяйте этот показатель.</span></li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span><span><strong className="text-white">Срок кредита</strong> — влияет на размер ежемесячного платежа. Более длительный срок снижает платёж, но увеличивает общую переплату.</span></li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span><span><strong className="text-white">Досрочное погашение</strong> — проверьте, есть ли штрафы. По закону банки не вправе запрещать досрочное погашение.</span></li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span><span><strong className="text-white">Страховка</strong> — часто предлагается при оформлении. Отказ от страховки снижает расходы, но может немного увеличить ставку.</span></li>
          </ul>

          <h3 className="text-lg font-semibold text-white mt-5">Требования к заёмщикам</h3>
          <p>Большинство банков предъявляют стандартные требования: гражданство РФ, возраст от 18–21 до 65–75 лет, постоянная регистрация на территории России, официальный доход. Некоторые банки (Т-Банк, Альфа-Банк) предлагают кредиты только по паспорту без подтверждения доходов.</p>

          <h3 className="text-lg font-semibold text-white mt-5">Как оформить кредит онлайн</h3>
          <p>Оформление кредита через наш сервис займёт несколько минут: выберите подходящее предложение, нажмите «Оформить» и заполните анкету на сайте банка. Большинство банков дают предварительное решение за 1–5 минут, деньги поступают на счёт в день одобрения или на следующий день.</p>
        </div>
      </article>
    </div>
  );
}
