import Image from "next/image";
import { DebitCard, getLogoPath } from "@/lib/data";

interface Props {
  card: DebitCard;
  index: number;
}

export default function DebitCardCard({ card, index }: Props) {
  const logo = getLogoPath(card.id);

  return (
    <div
      className="offer-card p-6 relative animate-slide-up"
      style={{ animationDelay: `${index * 50}ms`, animationFillMode: "both" }}
    >
      {/* Top badge */}
      {card.highlight && (
        <div className="absolute top-0 right-0">
          <div className="badge-hot rounded-bl-xl rounded-tr-[20px]">
            ТОП
          </div>
        </div>
      )}

      {/* Header with unified logo placement */}
      <div className="flex items-center gap-4 mb-5">
        <div className="logo-container w-20 h-20 shrink-0">
          <Image
            src={logo}
            alt={card.name}
            width={80}
            height={80}
            className="object-contain p-2"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-slate-900 text-base leading-snug line-clamp-2 mb-1">
            {card.name}
          </h3>
          <p className="text-sm text-slate-500 truncate">{card.bank}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 text-center">
          <div className="text-xs text-slate-500 mb-1">Кэшбэк</div>
          <div className="text-base font-bold text-emerald-700">{card.cashback}</div>
        </div>
        <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3 text-center">
          <div className="text-xs text-slate-500 mb-1">Обслуживание</div>
          <div className="text-xs font-bold text-slate-800">{card.service}</div>
        </div>
        <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3 text-center">
          <div className="text-xs text-slate-500 mb-1">Доставка</div>
          <div className="text-xs font-bold text-slate-800">{card.delivery}</div>
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mb-6">
        {card.features.slice(0, 3).map((f) => (
          <span
            key={f}
            className="badge badge-success"
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

      {/* CTA button - aligned at bottom */}
      <a
        href={card.link}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="btn-success block w-full py-4 text-center font-semibold mt-auto"
      >
        Оформить карту
      </a>
    </div>
  );
}
