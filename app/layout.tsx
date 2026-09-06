import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const nunitoBody = Nunito({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ABA-DOM — помощь детям с СДВГ",
  description:
    "ABA-DOM — яркая и дружелюбная поддержка детей с СДВГ и их семей: навыки, режим и понятный путь помощи.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${nunito.variable} ${nunitoBody.variable} h-full antialiased`}>
      <body className="min-h-full font-sans text-ink">{children}</body>
    </html>
  );
}
