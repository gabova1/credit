"use client";
import { useState } from "react";
import { Job } from "@/lib/data";
import JobCard from "./JobCard";

type SortKey = "salary" | "approval";
type FormatFilter = "all" | "remote" | "russia" | "office";

interface Props {
  jobs: Job[];
}

export default function JobsGrid({ jobs }: Props) {
  const [sort, setSort] = useState<SortKey>("salary");
  const [format, setFormat] = useState<FormatFilter>("all");

  let filtered = [...jobs];

  if (format === "remote") filtered = filtered.filter((j) => j.format.toLowerCase().includes("удалён"));
  else if (format === "russia") filtered = filtered.filter((j) => j.format.includes("Вся Россия"));
  else if (format === "office") filtered = filtered.filter((j) => !j.format.toLowerCase().includes("удалён") && !j.format.includes("Вся Россия"));

  if (sort === "salary") filtered.sort((a, b) => b.salaryMin - a.salaryMin);
  else filtered.sort((a, b) => parseInt(b.approval) - parseInt(a.approval));

  const SORT_OPTIONS = [
    { value: "salary", label: "По зарплате" },
    { value: "approval", label: "По отклику" },
  ];

  const FORMAT_OPTIONS = [
    { value: "all", label: "Все форматы" },
    { value: "remote", label: "Удалённо" },
    { value: "russia", label: "Вся Россия" },
    { value: "office", label: "Офис / выезд" },
  ];

  return (
    <div>
      {/* Filter bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-6 shadow-sm">
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
              {SORT_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  onClick={() => setSort(o.value as SortKey)}
                  className={`filter-btn ${
                    sort === o.value
                      ? "bg-purple-600 text-white shadow-md"
                      : "filter-btn-inactive"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Format filter */}
          <div className="flex-1">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Формат работы
            </label>
            <div className="flex flex-wrap gap-2">
              {FORMAT_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  onClick={() => setFormat(o.value as FormatFilter)}
                  className={`filter-btn ${
                    format === o.value
                      ? "bg-purple-600 text-white shadow-md"
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
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm text-slate-600">
          Вакансий: <span className="font-semibold text-slate-900">{filtered.length}</span>
        </p>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <svg className="w-4 h-4 text-success-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Проверенные компании
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
          <svg className="w-12 h-12 text-slate-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <p className="text-slate-500 font-medium">Нет вакансий для выбранных параметров</p>
          <p className="text-slate-400 text-sm mt-1">Попробуйте изменить фильтры</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((job, i) => (
            <JobCard key={job.id} job={job} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
