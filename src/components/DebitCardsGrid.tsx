"use client";
import { useState } from "react";
import { DebitCard } from "@/lib/data";
import DebitCardCard from "./DebitCardCard";

type SortKey = "cashback" | "name";
type BankFilter = "all" | string;

interface Props {
  cards: DebitCard[];
}

export default function DebitCardsGrid({ cards }: Props) {
  const [sort, setSort] = useState<SortKey>("cashback");
  const [bank, setBank] = useState<BankFilter>("all");

  const banks = ["all", ...Array.from(new Set(cards.map((c) => c.bank)))];

  let filtered = bank === "all" ? [...cards] : cards.filter((c) => c.bank === bank);
  if (sort === "cashback") filtered.sort((a, b) => b.cashbackMax - a.cashbackMax);
  else filtered.sort((a, b) => a.name.localeCompare(b.name, "ru"));

  return (
    <div>
      {/* Filter bar */}
      <div className="card p-5 mb-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sort options */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
              Сортировка
            </label>
            <div className="flex gap-2">
              {[
                { value: "cashback", label: "По кэшбэку" },
                { value: "name", label: "По названию" },
              ].map((o) => (
                <button
                  key={o.value}
                  onClick={() => setSort(o.value as SortKey)}
                  className={`filter-btn ${sort === o.value
                      ? "bg-success-600 text-white shadow-md"
                      : "filter-btn-inactive"
                    }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bank filter */}
          <div className="flex-1">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Банк
            </label>
            <div className="flex flex-wrap gap-2">
              {banks.map((b) => (
                <button
                  key={b}
                  onClick={() => setBank(b)}
                  className={`filter-btn ${bank === b
                      ? "bg-success-600 text-white shadow-md"
                      : "filter-btn-inactive"
                    }`}
                >
                  {b === "all" ? "Все банки" : b}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-5">
        <p className="text-sm text-slate-600">
          Найдено карт: <span className="font-semibold text-slate-900">{filtered.length}</span>
        </p>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <svg className="w-4 h-4 text-success-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Бесплатная доставка
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((card, i) => (
          <DebitCardCard key={card.id} card={card} index={i} />
        ))}
      </div>
    </div>
  );
}
