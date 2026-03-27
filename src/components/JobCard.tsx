import Image from "next/image";
import { Job, getLogoPath } from "@/lib/data";

interface Props {
  job: Job;
  index: number;
}

export default function JobCard({ job, index }: Props) {
  const logo = getLogoPath(job.id);

  return (
    <div
      className="offer-card p-5 relative animate-slide-up"
      style={{ animationDelay: `${index * 50}ms`, animationFillMode: "both" }}
    >
      {/* Top badge */}
      {job.highlight && (
        <div className="absolute top-0 right-0">
          <div className="badge-hot rounded-bl-xl rounded-tr-2xl">
            ТОП
          </div>
        </div>
      )}

      {/* Header with large logo */}
      <div className="flex items-center gap-4 mb-5">
        <div className="logo-container w-20 h-20 shrink-0">
          <Image
            src={logo}
            alt={job.name}
            width={80}
            height={80}
            className="object-contain p-2"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-slate-900 text-base leading-snug line-clamp-2 mb-1">
            {job.name}
          </h3>
          <p className="text-sm text-slate-500 truncate">{job.company}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-purple-50 rounded-xl p-3">
          <div className="text-xs text-slate-500 mb-1">Зарплата</div>
          <div className="text-sm font-bold text-purple-600">{job.salary}</div>
        </div>
        <div className="bg-slate-50 rounded-xl p-3">
          <div className="text-xs text-slate-500 mb-1">График</div>
          <div className="text-sm font-semibold text-slate-800">{job.schedule}</div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm text-slate-600">{job.format}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm text-slate-600">{job.time}</span>
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mb-5">
        {job.features.slice(0, 3).map((f) => (
          <span
            key={f}
            className="inline-flex items-center px-2.5 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-medium border border-purple-100"
          >
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {f}
          </span>
        ))}
      </div>

      {/* Spacer to push button to bottom */}
      <div className="flex-1"></div>

      {/* CTA button */}
      <a
        href={job.link}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="block w-full py-3 text-center text-sm font-semibold text-white rounded-xl mt-auto transition-all hover:opacity-90"
        style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)", boxShadow: "0 4px 14px rgba(124, 58, 237, 0.25)" }}
      >
        Откликнуться
      </a>
    </div>
  );
}
