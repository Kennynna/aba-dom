import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const lena = localFont({
  src: "./fonts/Lena.ttf",
  variable: "--font-lena",
  weight: "400",
  display: "swap",
  fallback: ["Commissioner", "sans-serif"],
});

const commissioner = localFont({
  src: "./fonts/Commissioner.ttf",
  variable: "--font-commissioner",
  weight: "400 500",
  display: "swap",
});

export const metadata: Metadata = {
  title: "авадом — центр коррекции речи и поведения",
  description: "Центр коррекции речи и поведения в Грозном: ABA-терапия, денверская модель (ESDM), индивидуальные программы, нейропедагогическая диагностика.",
  metadataBase: new URL("https://aba-dom.vercel.app"),
  twitter: {
    card: "summary_large_image",
    title: "авадом — центр коррекции речи и поведения",
    description: "ABA-терапия, денверская модель (ESDM), индивидуальные программы развития. Консультация онлайн или офлайн.",
    images: ["/opengraph-image"],
  },
  openGraph: {
    title: "авадом — центр коррекции речи и поведения",
    description: "ABA-терапия, денверская модель (ESDM), индивидуальные программы развития. Консультация онлайн или офлайн.",
    images: ["/opengraph-image"],
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
