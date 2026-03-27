import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

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
  verification: {
    google: "fdXrGVvQ16wtOzjY6PrbfxyUReBXl9IIQSFX7XavPmQ",
    yandex: "3167ce2a229cc5c5",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${manrope.variable} ${sora.variable}`}>
      <body className="site-shell min-h-screen antialiased font-sans">
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
