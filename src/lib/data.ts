export interface Offer {
  id: number;
  name: string;
  company: string;
  category: "credits" | "loans" | "cards";
  rate: string;
  amount: string;
  term: string;
  approval: string;
  time: string;
  features: string[];
  link: string;
  highlight?: boolean;
}

export type SortOption = "approval" | "time" | "amount";
export type AmountFilter = "all" | "30k" | "100k" | "1m";

export const credits: Offer[] = [
  {
    id: 1,
    name: "Т-Банк — рефинансирование",
    company: "АО «ТБанк»",
    category: "credits",
    rate: "от 9.9%",
    amount: "до 5 000 000",
    term: "до 5 лет",
    approval: "95%",
    time: "2 мин",
    features: ["Без залога", "Онлайн решение", "Досрочное погашение"],
    link: "https://my.saleads.pro/s/jso81?erid=2VtzqxL59M7",
    highlight: true,
  },
  {
    id: 2,
    name: "Т-Банк — кредит",
    company: "АО «ТБанк»",
    category: "credits",
    rate: "от 10.9%",
    amount: "до 5 000 000",
    term: "до 5 лет",
    approval: "89%",
    time: "5 мин",
    features: ["Скидка зарплатным", "Без справок"],
    link: "https://my.saleads.pro/s/23i5g?erid=2Vtzqxau2AZ",
  },
  {
    id: 3,
    name: "Альфа Банк — рефинансирование кредита",
    company: "АО «АЛЬФА-БАНК»",
    category: "credits",
    rate: "от 11.5%",
    amount: "до 7 500 000",
    term: "до 7 лет",
    approval: "92%",
    time: "1 мин",
    features: ["Решение за 1 минуту", "Без визита в банк"],
    link: "https://my.saleads.pro/s/blq6j?erid=2VtzqxgpyHw",
  },
  {
    id: 4,
    name: "Альфа Банк — кредит наличными",
    company: "АО «АЛЬФА-БАНК»",
    category: "credits",
    rate: "от 10.5%",
    amount: "до 7 500 000",
    term: "до 5 лет",
    approval: "88%",
    time: "3 мин",
    features: ["Без поручителей", "Кредитные каникулы"],
    link: "https://my.saleads.pro/s/Jp8c2?erid=2VtzqxiJxaH",
  },
  {
    id: 5,
    name: "Т-Банк — кредит под залог недвижимости",
    company: "АО «ТБанк»",
    category: "credits",
    rate: "от 7.5%",
    amount: "до 30 000 000",
    term: "до 15 лет",
    approval: "85%",
    time: "1 день",
    features: ["Под залог недвижимости", "Без справок", "До 30 млн ₽"],
    link: "https://t-cpa.ru/nqOQ4",
  },
  {
    id: 6,
    name: "Т-Банк — кредит под залог авто",
    company: "АО «ТБанк»",
    category: "credits",
    rate: "от 8.9%",
    amount: "до 7 000 000",
    term: "до 7 лет",
    approval: "88%",
    time: "1 день",
    features: ["Авто остается у вас", "На любые цели"],
    link: "https://t-cpa.ru/49OsM5",
  },
  {
    id: 7,
    name: "Т-Банк — кредит наличными",
    company: "АО «ТБанк»",
    category: "credits",
    rate: "от 10.9%",
    amount: "до 5 000 000",
    term: "до 5 лет",
    approval: "90%",
    time: "5 мин",
    features: ["Без залога", "Только паспорт", "Онлайн"],
    link: "https://t-cpa.ru/1R4AUu",
  },
  {
    id: 8,
    name: "Т-Банк — кредиты для бизнеса",
    company: "АО «ТБанк»",
    category: "credits",
    rate: "от 12%",
    amount: "до 30 000 000",
    term: "до 36 мес.",
    approval: "80%",
    time: "2 мин",
    features: ["Для ИП и ООО", "Без документов", "Онлайн расчёт"],
    link: "https://t-cpa.ru/12uLaO",
  },
  {
    id: 9,
    name: "Т-Банк — автокредит",
    company: "АО «ТБанк»",
    category: "credits",
    rate: "от 7.9%",
    amount: "до 8 000 000",
    term: "до 8 лет",
    approval: "87%",
    time: "1 день",
    features: ["Без первого взноса", "Новые и б/у авто"],
    link: "https://t-cpa.ru/3AoCI0",
  },
];

export const loans: Offer[] = [
  {
    id: 101,
    name: "Kviku",
    company: "ООО МКК «МАРТИН»",
    category: "loans",
    rate: "0%",
    amount: "до 100 000",
    term: "до 360 дней",
    approval: "98%",
    time: "5 мин",
    features: ["Первый займ 0%", "На карту за 5 мин", "Без отказа"],
    link: "https://my.saleads.pro/s/vxjj7?erid=2Vtzqw8T5qo",
    highlight: true,
  },
  {
    id: 102,
    name: "Быстроденьги",
    company: "ООО МКК Быстроденьги",
    category: "loans",
    rate: "0%",
    amount: "до 100 000",
    term: "до 180 дней",
    approval: "97%",
    time: "10 мин",
    features: ["Без проверки КИ", "Круглосуточно", "На любую карту"],
    link: "https://my.saleads.pro/s/at22w?erid=2VtzqwVCund",
  },
  {
    id: 103,
    name: "Монеткин NEW",
    company: "ООО «ЦЕЛФИН»",
    category: "loans",
    rate: "от 0%",
    amount: "до 100 000",
    term: "до 12 мес.",
    approval: "94%",
    time: "15 мин",
    features: ["Большие суммы", "Длительный срок", "Онлайн"],
    link: "https://my.saleads.pro/s/mi6cJ?erid=2VtzqviFjvM",
  },
  {
    id: 107,
    name: "CreditPlus займ под 0%",
    company: "ООО МФК «Экофинанс»",
    category: "loans",
    rate: "0%",
    amount: "до 30 000",
    term: "до 30 дней",
    approval: "98%",
    time: "5 мин",
    features: ["Первый займ 0%", "На карту за 5 мин", "Без отказа"],
    link: "https://my.saleads.pro/s/p0d73?erid=2Vtzqx9kb7b",
    highlight: true,
  },
  {
    id: 108,
    name: "МаниКэш",
    company: "ООО МКК «МаниКэш»",
    category: "loans",
    rate: "0%",
    amount: "до 30 000",
    term: "до 180 дней",
    approval: "97%",
    time: "10 мин",
    features: ["Без проверки КИ", "Круглосуточно", "На любую карту"],
    link: "https://my.saleads.pro/s/y6xtu?erid=2Vtzqvs9fcR",
  },
  {
    id: 109,
    name: "Альфа Деньги",
    company: "ООО МКК «А ДЕНЬГИ»",
    category: "loans",
    rate: "от 0%",
    amount: "до 30 000",
    term: "до 30 дней",
    approval: "94%",
    time: "15 мин",
    features: ["Большие суммы", "Длительный срок", "Онлайн"],
    link: "https://my.saleads.pro/s/dct1k?erid=2VtzqvwbdTT",
  },
  {
    id: 110,
    name: "Давака",
    company: "ООО «Да-кредит МКК»",
    category: "loans",
    rate: "0%",
    amount: "до 50 000",
    term: "до 30 дней",
    approval: "96%",
    time: "7 мин",
    features: ["Моментальное решение", "Без звонков"],
    link: "https://my.saleads.pro/s/7z1gy?erid=2VtzqvzZc29",
  },
  {
    id: 113,
    name: "Небус",
    company: "ООО МКК «Луна»",
    category: "loans",
    rate: "0%",
    amount: "до 100 000",
    term: "до 360 дней",
    approval: "98%",
    time: "5 мин",
    features: ["Первый займ 0%", "На карту за 5 мин", "Без отказа"],
    link: "https://my.saleads.pro/s/fb0kn?erid=2Vtzqx3M6aH",
    highlight: true,
  },
  {
    id: 114,
    name: "КотоЗайм",
    company: "АО МФК «Саммит»",
    category: "loans",
    rate: "0%",
    amount: "до 100 000",
    term: "до 180 дней",
    approval: "97%",
    time: "10 мин",
    features: ["Без проверки КИ", "Круглосуточно", "На любую карту"],
    link: "https://my.saleads.pro/s/sJuyr?erid=2VtzqxJAyPj",
  },
  {
    id: 116,
    name: "Krediska",
    company: "ООО МКК «Кредиска»",
    category: "loans",
    rate: "0%",
    amount: "до 50 000",
    term: "до 31 дней",
    approval: "96%",
    time: "7 мин",
    features: ["Моментальное решение", "Без звонков"],
    link: "https://my.saleads.pro/s/fb0yn?erid=2VtzqvQoNUD",
  },
  {
    id: 117,
    name: "Деньга",
    company: "ООО «ЦЕЛФИН»",
    category: "loans",
    rate: "0%",
    amount: "до 100 000",
    term: "до 180 дней",
    approval: "95%",
    time: "5 мин",
    features: ["Мгновенное одобрение", "Деньги на карту"],
    link: "https://my.saleads.pro/s/sJudr?erid=2VtzqvsV9YR",
  },
  {
    id: 119,
    name: "Центрофинанс офлайн",
    company: "ООО МКК «Центрофинанс Групп»",
    category: "loans",
    rate: "0%",
    amount: "до 30 000",
    term: "до 35 дней",
    approval: "98%",
    time: "5 мин",
    features: ["Первый займ 0%", "На карту за 5 мин", "Без отказа"],
    link: "https://my.saleads.pro/s/lmyws?erid=2VtzqwwkdNu",
    highlight: true,
  },
  {
    id: 120,
    name: "ФинМолл",
    company: "ООО МКК «ФИНМОЛЛ»",
    category: "loans",
    rate: "0%",
    amount: "до 60 000",
    term: "до 371 дней",
    approval: "97%",
    time: "10 мин",
    features: ["Без проверки КИ", "Круглосуточно", "На любую карту"],
    link: "https://my.saleads.pro/s/p0dv3?erid=2VtzqxJWTKj",
  },
  {
    id: 122,
    name: "Vivus",
    company: "ООО МКК «СМСФИНАНС»",
    category: "loans",
    rate: "0%",
    amount: "до 30 000",
    term: "до 32 дней",
    approval: "96%",
    time: "7 мин",
    features: ["Моментальное решение", "Без звонков"],
    link: "https://my.saleads.pro/s/ikwhp?erid=2VtzqukG2dB",
  },
  {
    id: 124,
    name: "Деньги Сразу онлайн",
    company: "ООО «МКНФ»",
    category: "loans",
    rate: "0%",
    amount: "до 100 000",
    term: "до 30 дней",
    approval: "93%",
    time: "8 мин",
    features: ["Акция для новых", "Без отказа"],
    link: "https://my.saleads.pro/s/8dani?erid=2VtzqvSHhEV",
  },
  {
    id: 128,
    name: "Joymoney",
    company: "ООО МК «Джой Мани»",
    category: "loans",
    rate: "от 0%",
    amount: "до 100 000",
    term: "до 168 дней",
    approval: "94%",
    time: "15 мин",
    features: ["Большие суммы", "Длительный срок", "Онлайн"],
    link: "https://my.saleads.pro/s/ehflc?erid=2Vtzqupn2FP",
  },
  {
    id: 129,
    name: "ДоброЗайм",
    company: "АО МФК «Саммит»",
    category: "loans",
    rate: "0%",
    amount: "до 100 000",
    term: "до 168 дней",
    approval: "96%",
    time: "7 мин",
    features: ["Моментальное решение", "Без звонков"],
    link: "https://my.saleads.pro/s/x4spz?erid=2VtzqvVKhaM",
  },
  {
    id: 136,
    name: "Альфа-Деньги",
    company: "Альфа-Деньги",
    category: "loans",
    rate: "от 0%",
    amount: "до 100 000",
    term: "до 364 дн.",
    approval: "92%",
    time: "10 мин",
    features: ["0% для новых", "Через СБП", "До 100 000 ₽"],
    link: "https://t-cpa.ru/2QaSO0",
  },
  {
    id: 134,
    name: "Webbankir",
    company: "Webbankir",
    category: "loans",
    rate: "от 0%",
    amount: "до 30 000",
    term: "до 31 дн.",
    approval: "90%",
    time: "10 мин",
    features: ["Через СБП", "От 18 лет", "Пролонгация"],
    link: "https://t-cpa.ru/WKsyO",
  },
];

export const cards: Offer[] = [
  {
    id: 201,
    name: "Т-Банк — кредитная карта Drive",
    company: "АО «ТБанк»",
    category: "cards",
    rate: "0% 55 дн.",
    amount: "до 1 000 000",
    term: "бессрочно",
    approval: "93%",
    time: "2 мин",
    features: ["Кэшбэк до 30%", "Бесплатно", "Доставка на дом"],
    link: "https://my.saleads.pro/s/weggd?erid=2VtzqxWTPj3",
    highlight: true,
  },
  {
    id: 202,
    name: "Ак Барс Банк — 115 дней без процентов",
    company: "ПАО «АК БАРС» БАНК",
    category: "cards",
    rate: "0% 115 дн.",
    amount: "до 1 000 000",
    term: "бессрочно",
    approval: "90%",
    time: "5 мин",
    features: ["115 дней без %", "Снятие без комиссии"],
    link: "https://my.saleads.pro/s/fb0un?erid=2VtzqwpUkT7",
  },
  {
    id: 203,
    name: "Уралсиб — карта рассрочки",
    company: "ПАО «БАНК УРАЛСИБ»",
    category: "cards",
    rate: "0% рассрочка",
    amount: "до 1 000 000",
    term: "бессрочно",
    approval: "94%",
    time: "3 мин",
    features: ["Рассрочка у партнёров", "Кэшбэк до 6%"],
    link: "https://my.saleads.pro/s/jsoi1?erid=2VtzqvN7BTs",
  },
  {
    id: 204,
    name: "Т-Банк — кредитная карта Платинум",
    company: "АО «ТБанк»",
    category: "cards",
    rate: "0% 120 дн.",
    amount: "до 1 000 000",
    term: "бессрочно",
    approval: "88%",
    time: "10 мин",
    features: ["Бонусы Спасибо", "Большой лимит"],
    link: "https://my.saleads.pro/s/23iqg?erid=2VtzqvU38bF",
  },
  {
    id: 205,
    name: "Халва",
    company: "ПАО «Совкомбанк»",
    category: "cards",
    rate: "0% 110 дн.",
    amount: "до 500 000",
    term: "бессрочно",
    approval: "87%",
    time: "5 мин",
    features: ["Мультибонус", "Рассрочка до 4 мес."],
    link: "https://my.saleads.pro/s/blq8j?erid=2Vtzqvfu2r1",
  },
  {
    id: 206,
    name: "Т-Банк — Платинум",
    company: "АО «ТБанк»",
    category: "cards",
    rate: "0% до 120 дн.",
    amount: "до 1 000 000",
    term: "бессрочно",
    approval: "90%",
    time: "1 день",
    features: ["До 120 дн. без %", "Рассрочка", "Бесплатная доставка"],
    link: "https://t-cpa.ru/2E5Ysl",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// DEBIT CARDS
// ─────────────────────────────────────────────────────────────────────────────
export interface DebitCard {
  id: number;
  name: string;
  bank: string;
  cashback: string;
  cashbackMax: number;
  service: string;
  delivery: string;
  features: string[];
  link: string;
  highlight?: boolean;
}

export const debitCards: DebitCard[] = [
  { id: 401, name: "Т-Банк — Drive", bank: "Т-Банк", cashback: "до 10% АЗС", cashbackMax: 10, service: "От 0 ₽/мес", delivery: "Курьер", features: ["АЗС до 10%", "Автоуслуги 5%", "Семейные карты"], link: "https://my.saleads.pro/s/jsia1?erid=2VtzquvkLp5", highlight: true },
  { id: 402, name: "Альфа-Карта — Самозанятые", bank: "Альфа-Банк", cashback: "до 100%", cashbackMax: 100, service: "Бесплатно", delivery: "Курьер/Офис", features: ["Для самозанятых", "Суперкэшбэк", "Уплата налогов"], link: "https://my.saleads.pro/s/23qhg?erid=2VtzqvLU9Kb" },
  { id: 403, name: "Альфа-Карта — Пенсионная", bank: "Альфа-Банк", cashback: "5% аптеки", cashbackMax: 5, service: "Бесплатно", delivery: "Курьер/Офис", features: ["Пенсионная", "5% в аптеках", "Бесплатно навсегда"], link: "https://my.saleads.pro/s/bl84j?erid=2VtzqveFzhj" },
  { id: 404, name: "Т-Банк — Islam Black", bank: "Т-Банк", cashback: "до 30%", cashbackMax: 30, service: "299 ₽/мес", delivery: "Курьер", features: ["Исламская карта", "Халяль финансы", "Без харам-трат"], link: "https://my.saleads.pro/s/r2m04?erid=2Vtzqwh4p3P" },
  { id: 405, name: "Т-Банк — Black Premium", bank: "Т-Банк", cashback: "до 60 000 ₽/мес", cashbackMax: 30, service: "От 0 ₽/мес", delivery: "Курьер", features: ["Бизнес-залы", "Поддержка 24/7", "Премиальная"], link: "https://my.saleads.pro/s/Jp5n2?erid=2VtzqwCsiuK", highlight: true },
  { id: 406, name: "Т-Банк — Black Нерезиденты", bank: "Т-Банк", cashback: "до 15%", cashbackMax: 15, service: "От 0 ₽/мес", delivery: "Курьер", features: ["Для иностранцев", "Переводы в СНГ", "Многоязычный сервис"], link: "https://my.saleads.pro/s/9o6rb?erid=2Vtzqwe5WhB" },
  { id: 407, name: "Т-Банк — ALL Airlines", bank: "Т-Банк", cashback: "до 10% милями", cashbackMax: 10, service: "От 0 ₽/мес", delivery: "Курьер", features: ["Авиамили", "Страховка в поездках", "Отели до 10%"], link: "https://my.saleads.pro/s/0qzs9?erid=2VtzqxH9Cjo" },
  { id: 408, name: "Альфа-Карта — Детская", bank: "Альфа-Банк", cashback: "до 100%", cashbackMax: 100, service: "Бесплатно", delivery: "Курьер/Офис", features: ["Для детей 6–14 лет", "Финансовые игры", "Суперкэшбэк"], link: "https://my.saleads.pro/s/u8e3m?erid=2VtzqxS38Rs" },
  { id: 409, name: "Т-Банк — Black Молодёжная", bank: "Т-Банк", cashback: "до 30%", cashbackMax: 30, service: "Бесплатно", delivery: "Курьер", features: ["От 14 лет", "10% в ресторанах", "Бесплатные переводы"], link: "https://my.saleads.pro/s/k5xl0?erid=2VtzquX2snV" },
  { id: 410, name: "УРАЛСИБ — Прибыль", bank: "УРАЛСИБ", cashback: "до 30%", cashbackMax: 30, service: "От 0 ₽/мес", delivery: "Курьер/Офис", features: ["3 категории кэшбэк", "До 14% на остаток", "Карта в день обращения"], link: "https://my.saleads.pro/s/y6tpu?erid=2VtzquxEfaM" },
  { id: 411, name: "УБРиР — My Life", bank: "УБРиР", cashback: "до 35%", cashbackMax: 35, service: "Бесплатно", delivery: "Курьер/Офис", features: ["4 категории", "До 23% накопительный", "35% от партнёров"], link: "https://my.saleads.pro/s/dc1ok?erid=2Vtzqvr8ESR", highlight: true },
  { id: 412, name: "Т-Банк — Джуниор", bank: "Т-Банк", cashback: "до 30%", cashbackMax: 30, service: "Бесплатно", delivery: "Курьер", features: ["Детская 4–14 лет", "Копилка до 14%", "Детское приложение"], link: "https://my.saleads.pro/s/wejqd?erid=2VtzqxQapZB" },
  { id: 413, name: "Т-Банк — Black", bank: "Т-Банк", cashback: "до 30%", cashbackMax: 30, service: "От 0 ₽/мес", delivery: "Курьер", features: ["15% в 4 категориях", "До 30% спецпредложения", "Бесплатные переводы"], link: "https://my.saleads.pro/s/vx287?erid=2Vtzqw16Buf", highlight: true },
  { id: 414, name: "Альфа-Карта — Альфа-Смарт", bank: "Альфа-Банк", cashback: "до 7 000 ₽/мес", cashbackMax: 10, service: "Бесплатно", delivery: "Курьер/Офис", features: ["4 категории кэшбэка", "До 7000 ₽ в месяц", "200К наличных"], link: "https://my.saleads.pro/s/39kyf?erid=2Vtzqx5JdGZ" },
  { id: 415, name: "Альфа-Карта — Для иностранцев", bank: "Альфа-Банк", cashback: "кэшбэк", cashbackMax: 5, service: "Бесплатно", delivery: "Курьер/Офис", features: ["Для иностранцев", "Быстрые переводы", "Бесплатный выпуск"], link: "https://my.saleads.pro/s/lmyds?erid=2Vtzqx8GbqF" },
  { id: 416, name: "Альфа-Банк — Апельсиновая", bank: "Альфа-Банк", cashback: "до 7% Апельсинки", cashbackMax: 7, service: "Бесплатно", delivery: "Курьер/Офис", features: ["Пятёрочка и Перекрёсток", "До 7% кэшбэк", "Оплата бонусами 100%"], link: "https://my.saleads.pro/s/sJukr?erid=2VtzqwqxjjT" },
  { id: 417, name: "Ак Барс — Барс Карта", bank: "Ак Барс Банк", cashback: "до 5%", cashbackMax: 5, service: "От 0 ₽/мес", delivery: "Курьер/Офис", features: ["Зарплатная", "До 10% на остаток", "Пенсионерам +2000 ₽"], link: "https://my.saleads.pro/s/ehsyc?erid=2VtzqwHKMGR" },
  { id: 418, name: "МТС Деньги — Дебетовая", bank: "МТС Банк", cashback: "до 30%", cashbackMax: 30, service: "Бесплатно", delivery: "Курьер/МТС", features: ["30% за МТС связь", "15% маркетплейсы", "МТС Premium в подарок"], link: "https://my.saleads.pro/s/x43dz?erid=2Vtzqwws2bP" },
  { id: 419, name: "ОТП Банк — Premium", bank: "ОТП Банк", cashback: "до 5%", cashbackMax: 5, service: "Бесплатно", delivery: "Курьер", features: ["8 категорий на выбор", "До 20 000 ₽ бонусов", "5% рестораны/аптеки"], link: "https://my.saleads.pro/s/tnl7e?erid=2VtzqxEAthB" },
  { id: 420, name: "ОТП Банк — ОТП Карта", bank: "ОТП Банк", cashback: "до 5%", cashbackMax: 5, service: "Бесплатно", delivery: "Курьер", features: ["До 16% накопительный", "5% кафе и рестораны", "5% такси и одежда"], link: "https://my.saleads.pro/s/1rpwx?erid=2VtzqxgrfmP" },
  { id: 421, name: "Альфа-Карта — Молодёжная", bank: "Альфа-Банк", cashback: "до 100%", cashbackMax: 100, service: "Бесплатно", delivery: "Курьер/Офис", features: ["От 14 лет", "Steam/Spotify/Xbox", "100К переводы бесплатно"], link: "https://my.saleads.pro/s/gfovt?erid=2VtzqufvTzd" },
  { id: 422, name: "Т-Банк — ALL Airlines Debit", bank: "Т-Банк", cashback: "до 30% милями", cashbackMax: 30, service: "От 0 ₽/мес", delivery: "Курьер", features: ["Авиамили до 30%", "Страховка 50 000$", "Бесплатные переводы"], link: "https://t-cpa.ru/4FoEF" },
  { id: 425, name: "Т-Банк — Black", bank: "Т-Банк", cashback: "до 30%", cashbackMax: 30, service: "От 0 ₽/мес", delivery: "Курьер", features: ["4 любимые категории", "До 30% партнёры", "Зарплатная и пенсионная"], link: "https://t-cpa.ru/2h9F3B", highlight: true },
  { id: 426, name: "Т-Банк — Drive Debit", bank: "Т-Банк", cashback: "до 10% АЗС", cashbackMax: 10, service: "От 0 ₽/мес", delivery: "Курьер", features: ["АЗС до 10%", "Автоуслуги 5%", "Бесплатная доставка"], link: "https://t-cpa.ru/3XECaZ" },
  { id: 427, name: "Т-Банк — S7 Debit", bank: "Т-Банк", cashback: "мили S7", cashbackMax: 18, service: "От 0 ₽/мес", delivery: "Курьер", features: ["Мили S7 за покупки", "Закрытые распродажи", "До 18 миль/60 ₽"], link: "https://t-cpa.ru/3ld6Vv" },
];

// ─────────────────────────────────────────────────────────────────────────────
// JOBS / VACANCIES
// ─────────────────────────────────────────────────────────────────────────────
export interface Job {
  id: number;
  name: string;
  company: string;
  salary: string;
  salaryMin: number;
  schedule: string;
  format: string;
  approval: string;
  time: string;
  features: string[];
  link: string;
  highlight?: boolean;
}

export const jobs: Job[] = [
  { id: 601, name: "Яндекс.Маркет — кладовщик", company: "Партнёр Яндекс.Маркет", salary: "от 84 600 ₽", salaryMin: 84600, schedule: "Гибкий", format: "Склад / Вахта", approval: "90%", time: "1 день", features: ["Самозанятость", "Обучение", "Тёплый склад"], link: "https://my.saleads.pro/s/k5xp0?erid=2VtzqwqQBEm", highlight: true },
  { id: 602, name: "Руки — мастер (сборщик / установщик)", company: "Сервис «Руки»", salary: "По заказам", salaryMin: 50000, schedule: "Гибкий", format: "Москва, СПб", approval: "85%", time: "2 дня", features: ["Ежедневные выплаты", "Приложение", "Leroy Merlín"], link: "https://my.saleads.pro/s/y6tou/2982?erid=2VtzqxgKmY9" },
  { id: 603, name: "Альфа Банк — представитель HR", company: "АО «АЛЬФА-БАНК»", salary: "от 90 000 ₽", salaryMin: 90000, schedule: "5/2 или 2/2", format: "Разъездная", approval: "88%", time: "1 день", features: ["ТК РФ", "ДМС", "Обучение"], link: "https://my.saleads.pro/s/dc1ik?erid=2Vtzqw4wti9" },
  { id: 604, name: "Купер — курьер / водитель", company: "Купер (ex. СберМаркет)", salary: "Еженедельно", salaryMin: 40000, schedule: "от 3 часов", format: "Вся Россия", approval: "92%", time: "1 день", features: ["Самозанятость", "Аренда авто", "Гибкий график"], link: "https://my.saleads.pro/s/7zgqy/3257?erid=2VtzqwFM9cH" },
  { id: 605, name: "Альфа Банк — менеджер DSA", company: "АО «АЛЬФА-БАНК»", salary: "от 70 000 ₽", salaryMin: 70000, schedule: "5/2", format: "Разъездная", approval: "87%", time: "1 день", features: ["ТК РФ", "ДМС", "Обучение 3 недели"], link: "https://my.saleads.pro/s/wej8d?erid=2Vtzqxkrmc9" },
  { id: 606, name: "Альфа Банк — мобильный банкир", company: "АО «АЛЬФА-БАНК»", salary: "от 70 000 ₽", salaryMin: 70000, schedule: "5/2 или 2/2", format: "Разъездная", approval: "86%", time: "1 день", features: ["ТК РФ", "ДМС", "Карьерный рост"], link: "https://my.saleads.pro/s/vx257?erid=2VtzqucWdRf" },
  { id: 607, name: "Альфа Банк — менеджер малого бизнеса", company: "АО «АЛЬФА-БАНК»", salary: "от 120 000 ₽", salaryMin: 120000, schedule: "5/2", format: "Разъездная", approval: "84%", time: "2 дня", features: ["ДМС", "Компенсация проезда", "Обучение"], link: "https://my.saleads.pro/s/atb6w?erid=2VtzqutpVXT" },
  { id: 608, name: "Домовёнок — клинер / мойщик окон", company: "Сервис «Домовёнок»", salary: "до 110 000 ₽", salaryMin: 70000, schedule: "Гибкий", format: "Москва, СПб, НН", approval: "89%", time: "2 дня", features: ["Оплата после заказа", "Обучение", "Форма выдаётся"], link: "https://my.saleads.pro/s/h1Jcv/5859?erid=2Vtzqv8AP4Z" },
  { id: 609, name: "Т-Банк — специалист поддержки", company: "АО «ТБанк»", salary: "По результатам", salaryMin: 50000, schedule: "Гибкий", format: "Удалённо", approval: "91%", time: "1 день", features: ["Удалённая работа", "Обучение", "Карьерный рост"], link: "https://my.saleads.pro/s/4g9za?erid=2Vtzqv9eNLu" },
  { id: 610, name: "Яндекс Еда — курьер", company: "Партнёр Яндекс.Еда", salary: "до 3 000 ₽/день", salaryMin: 60000, schedule: "Гибкий", format: "Вся Россия", approval: "93%", time: "1 день", features: ["Экипировка бесплатно", "Гибкий график", "Бонусы"], link: "https://my.saleads.pro/s/r20t4?erid=2VtzqvCcLub" },
  { id: 611, name: "Т-Банк — массовый набор", company: "АО «ТБанк»", salary: "По вакансии", salaryMin: 60000, schedule: "Разный", format: "Вся Россия", approval: "88%", time: "1 день", features: ["Офис и удалёнка", "Обучение", "Карьерный рост"], link: "https://t-cpa.ru/15H0kh", highlight: true },
];

// ─────────────────────────────────────────────────────────────────────────────
// INSURANCE
// ─────────────────────────────────────────────────────────────────────────────
export type InsuranceCategory = "auto" | "travel" | "property" | "life" | "all";

export interface Insurance {
  id: number;
  name: string;
  company: string;
  category: InsuranceCategory;
  categoryName: string;
  registration: string;
  period: string;
  price: string;
  features: string[];
  link: string;
  highlight?: boolean;
}

export const insurances: Insurance[] = [
  { id: 501, name: "Полис812 — Отмена поездки", company: "Полис812", category: "travel", categoryName: "Путешествия", registration: "Онлайн", period: "Разовый", price: "от 299 ₽", features: ["Компенсация затрат", "Форс-мажоры", "Мгновенный полис"], link: "https://my.saleads.pro/s/r20x4?erid=2VtzqvR29qP", highlight: true },
  { id: 502, name: "Полис812 — Страхование квартиры", company: "Полис812", category: "property", categoryName: "Имущество", registration: "Онлайн", period: "1 год", price: "от 1 800 ₽", features: ["Залив и пожар", "Кража", "Без осмотра"], link: "https://my.saleads.pro/s/fbutn?erid=2VtzqwmbVmf" },
  { id: 503, name: "Полис812 — Ипотечное страхование", company: "Полис812", category: "property", categoryName: "Имущество", registration: "Онлайн", period: "1 год", price: "−50% vs банк", features: ["Сбербанк", "Любой банк", "Экономия 30–50%"], link: "https://my.saleads.pro/s/sJk1r?erid=2VtzqxMhDFb", highlight: true },
  { id: 504, name: "Полис812 — Антиклещ", company: "Полис812", category: "life", categoryName: "Жизнь и здоровье", registration: "Онлайн", period: "1 сезон", price: "от 150 ₽", features: ["Лечение", "Диагностика", "Дети и взрослые"], link: "https://my.saleads.pro/s/lmdjs?erid=2VtzqvHcYub" },
  { id: 505, name: "Полис812 — Страхование спортсменов", company: "Полис812", category: "life", categoryName: "Жизнь и здоровье", registration: "2 мин", period: "Разовый", price: "от 200 ₽", features: ["Любительский спорт", "Соревнования", "Дети и взрослые"], link: "https://my.saleads.pro/s/p0723?erid=2VtzqvhLMR7" },
  { id: 506, name: "Полис812 — ВЗР", company: "Полис812", category: "travel", categoryName: "Путешествия", registration: "2–3 мин", period: "По дням", price: "от 49 ₽/день", features: ["100+ стран", "Консульства", "Медпомощь"], link: "https://my.saleads.pro/s/ouwbl?erid=2VtzqwCz741" },
  { id: 507, name: "Mafin — е-ОСАГО", company: "Mafin", category: "auto", categoryName: "Авто", registration: "Онлайн", period: "1 год", price: "Расчёт онлайн", features: ["Мгновенный полис", "База НСИС", "Без офиса"], link: "https://my.saleads.pro/s/qya9o?erid=2VtzqxfVQ7f", highlight: true },
  { id: 508, name: "Mafin — еКАСКО", company: "Mafin", category: "auto", categoryName: "Авто", registration: "Онлайн", period: "1 год", price: "Расчёт онлайн", features: ["ДТП", "Угон", "Ущерб", "Полный тотал"], link: "https://my.saleads.pro/s/8dhmi?erid=2VtzqurR6bf" },
  { id: 509, name: "Cherehapa — Ипотечное страхование", company: "Cherehapa", category: "property", categoryName: "Имущество", registration: "3 мин", period: "1 год", price: "−20% vs банк", features: ["Все банки", "Экономия до 8 000 ₽", "Сразу на email"], link: "https://my.saleads.pro/s/5740q?erid=2Vtzqv7EyR7" },
  { id: 510, name: "Cherehapa — ВЗР", company: "Cherehapa", category: "travel", categoryName: "Путешествия", registration: "3 мин", period: "По дням", price: "Расчёт онлайн", features: ["Поддержка 24/7", "Любая страна", "Отмена поездки"], link: "https://my.saleads.pro/s/6wnu8?erid=2VtzqvR2poF" },
  { id: 511, name: "Ренессанс Жизнь — Копилка Плюс", company: "Ренессанс Жизнь", category: "life", categoryName: "Жизнь и здоровье", registration: "Онлайн", period: "2 года", price: "от 2 999 ₽", features: ["11.7% годовых", "Ежемесячное пополнение", "Гарант. доход"], link: "https://my.saleads.pro/s/ehsdc?erid=2VtzqwTpKMP" },
  { id: 512, name: "Ренессанс Жизнь — Выгодный старт", company: "Ренессанс Жизнь", category: "life", categoryName: "Жизнь и здоровье", registration: "10 мин", period: "3 месяца", price: "от 30 000 ₽", features: ["18% годовых", "Гарантированный доход", "Юр. защита"], link: "https://my.saleads.pro/s/tnlwe?erid=2VtzqxLEER3", highlight: true },
  { id: 513, name: "Т-Страхование — Ипотека", company: "Т-Страхование", category: "property", categoryName: "Имущество", registration: "Онлайн", period: "1 год", price: "−30% vs банк", features: ["Без справок", "Менеджер 24/7", "Все банки"], link: "https://my.saleads.pro/s/1rpvx?erid=2Vtzqx8P189" },
  { id: 514, name: "ВСК — ОСАГО", company: "Страховой Дом ВСК", category: "auto", categoryName: "Авто", registration: "Онлайн", period: "1 год", price: "е-ОСАГО", features: ["Инд. подход", "Личный кабинет", "Моб. приложение"], link: "https://my.saleads.pro/s/bl8nj?erid=2VtzqwqPqkq" },
  { id: 515, name: "ВСК — КАСКО", company: "Страховой Дом ВСК", category: "auto", categoryName: "Авто", registration: "Онлайн", period: "1 год", price: "Расчёт онлайн", features: ["Инд. подход", "Личный кабинет", "Моб. приложение"], link: "https://my.saleads.pro/s/Jp5r2?erid=2VtzqwzHmSu" },
  { id: 516, name: "Т-Страхование — КАСКО", company: "Т-Страхование", category: "auto", categoryName: "Авто", registration: "Онлайн", period: "1 год", price: "−30% за аккуратность", features: ["Кэшбэк 10%", "Ремонт у дилеров", "Без осмотра"], link: "https://my.saleads.pro/s/9o6fb?erid=2VtzqxRVZEm" },
  { id: 517, name: "Т-Страхование — ОСАГО", company: "Т-Страхование", category: "auto", categoryName: "Авто", registration: "Онлайн", period: "1 год", price: "е-ОСАГО", features: ["Кэшбэк 10%", "Помощь 24/7", "Без офиса"], link: "https://my.saleads.pro/s/micsJ?erid=2VtzqxYuVeV", highlight: true },
  { id: 518, name: "Cherehapa — ОСАГО", company: "Cherehapa", category: "auto", categoryName: "Авто", registration: "Онлайн", period: "1 год", price: "Сравнение цен", features: ["Все страховые", "Экономия 5–20%", "ГИБДД и РСА"], link: "https://my.saleads.pro/s/u8elm?erid=2VtzqwGnT3B" },
];

// ─────────────────────────────────────────────────────────────────────────────
// LOGO HELPER — all logos live in /public/logos/{id}.{ext}
// ─────────────────────────────────────────────────────────────────────────────
const JPEG_IDS = new Set([123, 124, 127, 128]);
const JPG_IDS  = new Set([138, 142, 144, 501, 502, 503, 504, 505, 506, 507, 508]);

export function getLogoPath(id: number): string {
  if (JPEG_IDS.has(id)) return `/logos/${id}.jpeg`;
  if (JPG_IDS.has(id))  return `/logos/${id}.jpg`;
  return `/logos/${id}.png`;
}

export function getApprovalInt(approval: string): number {
  return parseInt(approval.replace("%", "").trim()) || 0;
}

export function getAmountValue(amount: string): number {
  const cleaned = amount.replace(/до|от|\s/g, "").replace(/[^\d]/g, "");
  return parseInt(cleaned) || 0;
}

export function getTimeMinutes(time: string): number {
  if (time.includes("день") || time.includes("дн")) return 60 * 24;
  return parseInt(time.replace(/[^\d]/g, "")) || 9999;
}

export function filterAndSort(
  offers: Offer[],
  sort: SortOption,
  amountFilter: AmountFilter
): Offer[] {
  let filtered = [...offers];

  if (amountFilter !== "all") {
    const maxMap: Record<string, number> = {
      "30k": 30000,
      "100k": 100000,
      "1m": 1000000,
    };
    const max = maxMap[amountFilter];
    filtered = filtered.filter((o) => getAmountValue(o.amount) <= max);
  }

  filtered.sort((a, b) => {
    if (sort === "approval")
      return getApprovalInt(b.approval) - getApprovalInt(a.approval);
    if (sort === "time")
      return getTimeMinutes(a.time) - getTimeMinutes(b.time);
    if (sort === "amount")
      return getAmountValue(b.amount) - getAmountValue(a.amount);
    return 0;
  });

  return filtered;
}
