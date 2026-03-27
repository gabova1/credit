"use client";
import { useState } from "react";
import { Offer, SortOption, AmountFilter, filterAndSort } from "@/lib/data";
import OfferCard from "./OfferCard";

interface Props {
  offers: Offer[];
}

const SORT_OPTIONS: { value: SortOption; label: string; icon: React.ReactNode }[] = [
  {
    value: "approval",
    label: "По одобрению",
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    value: "time",
    label: "По скорости",
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    value: "amount",
    label: "По сумме",
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
];

const AMOUNT_OPTIONS: { value: AmountFilter; label: string }[] = [
  { value: "all", label: "Любая сумма" },
  { value: "30k", label: "до 30 000" },
  { value: "100k", label: "до 100 000" },
  { value: "1m", label: "до 1 000 000" },
];

export default function OffersGrid({ offers }: Props) {
  const [sort, setSort] = useState<SortOption>("approval");
  const [amountFilter, setAmountFilter] = useState<AmountFilter>("all");

  const filtered = filterAndSort(offers, sort, amountFilter);

  return (
    <div>
      {/* Filter bar */}
      <div className="card p-5 mb-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sort options */}
          <div className="flex-1">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
              Сортировка
            </label>
            <div className="flex flex-wrap gap-2">
              {SORT_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  onClick={() => setSort(o.value)}
                  className={`filter-btn flex items-center gap-2 ${sort === o.value
                      ? "filter-btn-active"
                      : "filter-btn-inactive"
                    }`}
                >
                  {o.icon}
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          {/* Amount filter */}
          <div className="lg:w-auto">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Сумма
            </label>
            <div className="flex flex-wrap gap-2">
              {AMOUNT_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  onClick={() => setAmountFilter(o.value)}
                  className={`filter-btn ${amountFilter === o.value
                      ? "filter-btn-active"
                      : "filter-btn-inactive"
                    }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-5">
        <p className="text-sm text-slate-600">
          Найдено предложений: <span className="font-semibold text-slate-900">{filtered.length}</span>
        </p>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <svg className="w-4 h-4 text-success-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Проверенные предложения
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="card p-12 text-center">
          <svg className="w-12 h-12 text-slate-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-slate-500 font-medium">Нет предложений для выбранных параметров</p>
          <p className="text-slate-400 text-sm mt-1">Попробуйте изменить фильтры</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((offer, i) => (
            <OfferCard key={offer.id} offer={offer} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
