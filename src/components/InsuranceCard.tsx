import Image from "next/image";
import { Insurance, getLogoPath } from "@/lib/data";

interface Props {
  item: Insurance;
  index: number;
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  auto: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-100" },
  travel: { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-100" },
  property: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100" },
  life: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-100" },
};

const btnGradients: Record<string, string> = {
  auto: "linear-gradient(135deg, #ea580c, #dc2626)",
  travel: "linear-gradient(135deg, #0284c7, #0369a1)",
  property: "linear-gradient(135deg, #d97706, #b45309)",
  life: "linear-gradient(135deg, #e11d48, #be185d)",
};

export default function InsuranceCard({ item, index }: Props) {
  const logo = getLogoPath(item.id);
  const colors = categoryColors[item.category] || categoryColors.auto;
  const btnGradient = btnGradients[item.category] || btnGradients.auto;

  return (
    <div
      className="offer-card p-5 relative animate-slide-up"
      style={{ animationDelay: `${index * 50}ms`, animationFillMode: "both" }}
    >
      {/* Top badge */}
      {item.highlight && (
        <div className="absolute top-0 right-0">
          <div className="badge-hot rounded-bl-xl rounded-tr-2xl">
            ТОП
          </div>
        </div>
      )}

      {/* Category badge */}
      <div className="mb-3">
        <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border}`}>
          {item.categoryName}
        </span>
      </div>

      {/* Header with large logo */}
      <div className="flex items-center gap-4 mb-5">
        <div className="logo-container w-20 h-20 shrink-0">
          <Image
            src={logo}
            alt={item.name}
            width={80}
            height={80}
            className="object-contain p-2"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-slate-900 text-base leading-snug line-clamp-2 mb-1">
            {item.name}
          </h3>
          <p className="text-sm text-slate-500 truncate">{item.company}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-slate-50 rounded-xl p-3 text-center">
          <div className="text-xs text-slate-500 mb-1">Оформление</div>
          <div className="text-xs font-semibold text-slate-800">{item.registration}</div>
        </div>
        <div className="bg-slate-50 rounded-xl p-3 text-center">
          <div className="text-xs text-slate-500 mb-1">Период</div>
          <div className="text-xs font-semibold text-slate-800">{item.period}</div>
        </div>
        <div className={`${colors.bg} rounded-xl p-3 text-center`}>
          <div className="text-xs text-slate-500 mb-1">Цена</div>
          <div className={`text-xs font-bold ${colors.text}`}>{item.price}</div>
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mb-5">
        {item.features.slice(0, 3).map((f) => (
          <span
            key={f}
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border}`}
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
        href={item.link}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="block w-full py-3 text-center text-sm font-semibold text-white rounded-xl mt-auto transition-all hover:opacity-90"
        style={{ background: btnGradient, boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)" }}
      >
        Оформить полис
      </a>
    </div>
  );
}
