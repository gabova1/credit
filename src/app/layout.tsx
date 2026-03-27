import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "КредитПодбор — подбор кредитов, займов и карт онлайн",
    template: "%s | КредитПодбор",
  },
  description:
    "Бесплатный сервис подбора кредитов онлайн. Сравните предложения ведущих банков: кредиты наличными, займы без отказа, лучшие кредитные карты 2024.",
  keywords: [
    "подбор кредита онлайн",
    "лучшие кредитные карты",
    "займы без отказа",
    "кредит наличными",
    "кредит онлайн",
    "онлайн займ",
    "рефинансирование кредита",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "КредитПодбор",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-slate-50 min-h-screen antialiased">
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
