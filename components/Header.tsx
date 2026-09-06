"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import React from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
  pathname === path
    ? "font-semibold text-[#a51d48]"
    : "text-gray-700 transition hover:text-[#a51d48]";
  const nav = {
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact Us",
      
    },

    hi: {
      home: "होम",
      about: "हमारे बारे में",
      services: "सेवाएं",
      gallery: "गैलरी",
      contact: "संपर्क करें",
      
    },
  };

  const t = nav[language];

  return (
     <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/95 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">

          {/* LOGO */}

          <a href="/" className="flex items-center gap-3">

            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-[#c89b3c] bg-[#fff4f3]">

              <img
                src="/images/logo.png"
                alt="Glos and Glow Beauty Parlour"
                className="h-full w-full object-contain p-1"
              />

            </div>

            <div>
              <h1 className="font-serif text-2xl font-bold leading-none text-[#a51d48]">
                Gloss & Glow
              </h1>

              <p className="text-xs tracking-[0.25em] text-gray-700">
                BEAUTY PARLOUR
              </p>
            </div>

          </a>


          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-7 md:flex text-black">

            <a
              href="/"
              className={linkClass("/")}
            >
              {t.home}
            </a>

            <a
              href="/about"
              className={linkClass("/about")}
            >
              {t.about}
            </a>

            <a
              href="/services"
              className={linkClass("/services")}
            >
              {t.services}
            </a>

            <a
              href="/gallery"
              className={linkClass("/gallery")}
            >
              {t.gallery}
            </a>

            <a
              href="/contact"
              className={linkClass("/contact")}
            >
              {t.contact}
            </a>


            {/* LANGUAGE BUTTON */}

            <button
              onClick={() =>
                setLanguage(language === "en" ? "hi" : "en")
              }
              className="rounded-full border border-[#d95b78] px-4 py-2 text-sm font-semibold text-[#a51d48] transition hover:bg-[#d95b78] hover:text-white"
            >
              {language === "en" ? "हिंदी" : "English"}
            </button>


            {/* APPOINTMENT */}

          </nav>


          {/* MOBILE BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden text-gray-900"
            aria-label="Toggle menu"
          >
            ☰
          </button>

        </div>


        {/* MOBILE MENU */}

        {menuOpen && (
          <nav className="border-t border-pink-100 bg-white px-5 py-5 md:hidden">

            <div className="flex flex-col gap-4">

              <a href="/" onClick={() => setMenuOpen(false)} className={linkClass("/")}>
                {t.home}
              </a>

              <a href="/about" onClick={() => setMenuOpen(false)} className={linkClass("/about")}>
                {t.about}
              </a>

              <a href="/services" onClick={() => setMenuOpen(false)} className={linkClass("/services")}>
                {t.services}
              </a>

              <a href="/gallery" onClick={() => setMenuOpen(false)} className={linkClass("/gallery")}>
                {t.gallery}
              </a>

              <a href="/contact" onClick={() => setMenuOpen(false)} className={linkClass("/contact")}>
                {t.contact}
              </a>


              {/* MOBILE LANGUAGE */}

              <button
                onClick={() =>
                  setLanguage(language === "en" ? "hi" : "en")
                }
                className="w-fit rounded-full border border-[#d95b78] px-5 py-2 text-sm font-medium text-[#a51d48]"
              >
                {language === "en" ? "हिंदी" : "English"}
              </button>


              

            </div>

          </nav>
        )}

      </header>

  );
}