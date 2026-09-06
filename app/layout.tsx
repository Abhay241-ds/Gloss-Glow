import type { Metadata } from "next";
import "./globals.css";

import {
  Playfair_Display,
  Poppins,
  Noto_Sans_Devanagari,
} from "next/font/google";

import { LanguageProvider } from "@/app/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CopyButton from "@/components/CopyButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoHindi = Noto_Sans_Devanagari({
  variable: "--font-hindi",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gloss & Glow Beauty Parlour",
  description:
    "Gloss & Glow Beauty Parlour",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${playfair.variable} ${notoHindi.variable} bg-[#fffaf8] text-[#1b1717] antialiased`}
      >
        <LanguageProvider>

          <Header />

          {children}

          <Footer />

        </LanguageProvider>
      </body>
    </html>
  );
}