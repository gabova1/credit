"use client";
import { useState } from "react";
import { Insurance, InsuranceCategory } from "@/lib/data";
import InsuranceCard from "./InsuranceCard";

interface Props {
  items: Insurance[];
}

const CATEGORIES: { value: InsuranceCategory | "all"; label: string }[] = [
  { value: "all", label: "Все" },
  { value: "auto", label: "Авто" },
  { value: "travel", label: "Путешествия" },
  { value: "property", label: "Имущество" },
  { value: "life", label: "Жизнь" },
];

const categoryColors: Record<string, string> = {
  all: "bg-slate-600",
  auto: "bg-orange-500",
  travel: "bg-sky-500",
  property: "bg-amber-500",
  life: "bg-rose-500",
};

export default function InsuranceGrid({ items }: Props) {
  const [cat, setCat] = useState<InsuranceCategory | "all">("all");

  const filtered = cat === "all" ? items : items.filter((i) => i.category === cat);

  return (
    <div>
      {/* Filter bar */}
      <div className="card p-5 mb-6">
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Категория страхования
        </label>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => {
            const count = c.value === "all" ? items.length : items.filter((i) => i.category === c.value).length;
            return (
              <button
                key={c.value}
                onClick={() => setCat(c.value)}
                className={`filter-btn flex items-center gap-2 ${cat === c.value
                    ? `${categoryColors[c.value]} text-white shadow-md`
                    : "filter-btn-inactive"
                  }`}
              >
                {c.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${cat === c.value ? "bg-white/20" : "bg-slate-200 text-slate-500"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-5">
        <p className="text-sm text-slate-600">
          Предложений: <span className="font-semibold text-slate-900">{filtered.length}</span>
        </p>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <svg className="w-4 h-4 text-success-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Онлайн-оформление
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item, i) => (
          <InsuranceCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}
