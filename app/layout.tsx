import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const lena = localFont({
  src: "./fonts/Lena.ttf",
  variable: "--font-lena",
  weight: "400",
  display: "swap",
});

const commissioner = localFont({
  src: "./fonts/Commissioner.ttf",
  variable: "--font-commissioner",
  weight: "300 700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "авадом — центр коррекции речи и поведения",
  description:
    "ABA-терапия, денверская модель (ESDM) и интенсивы. Сопровождаем семью: понятный маршрут, спокойный процесс, поддержка родителей.",
  openGraph: {
    title: "авадом — центр коррекции речи и поведения",
    description: "Ты не одна, мы рядом. ABA-терапия, ESDM, интенсивы и сопровождение семьи.",
    images: ["/brand/og.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${lena.variable} ${commissioner.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-ink">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
