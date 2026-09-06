"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CopyButton from "./CopyButton";

export default function Footer() {
  const { language } = useLanguage();

  const content = {
    en: {
      description:
        "Beauty, confidence and care — all in one place.",

      quickLinks: "Quick Links",
      services: "Services",
      contact: "Contact Us",

      home: "Home",
      about: "About",
      servicesLink: "Services",
      gallery: "Gallery",
      contactLink: "Contact",

      hair: "Hair Care",
      skin: "Skin Care",
      makeup: "Makeup",
      nails: "Nail Care",
      bridal: "Bridal",

      address: "Niwari Road, Jagatpur, Modinagar",
      phone: "+91 72481 74483",
      hours: "Mon - Sun: 10 AM - 8 PM",

     
    },

    hi: {
      description:
        "खूबसूरती, आत्मविश्वास और देखभाल — सब एक ही जगह।",

      quickLinks: "क्विक लिंक्स",
      services: "सेवाएं",
      contact: "संपर्क करें",

      home: "होम",
      about: "हमारे बारे में",
      servicesLink: "सेवाएं",
      gallery: "गैलरी",
      contactLink: "संपर्क",

      hair: "हेयर केयर",
      skin: "स्किन केयर",
      makeup: "मेकअप",
      nails: "नेल केयर",
      bridal: "ब्राइडल",

      address: "निवाड़ी रोड, जगतपुर, मोदीनगर",
      phone: "+91 72481 74483",
      hours: "सोम - रवि: सुबह 10 बजे - रात 8 बजे",

     
    },
  };

  const t = content[language];

  return (
    <footer className="bg-[#171515] px-6 py-14 text-gray-300">

      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="font-serif text-3xl font-bold text-white">
            Gloss{" "}
            <span className="text-[#d95b78]">&</span>{" "}
            Glow
          </h2>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
            {t.description}
          </p>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/gloss_n_glowbeautyparlour9756?igsi=MTZldW96MmU0MHpnNA=="
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-xl  transition text-[#E1306C] hover:text-[#c13584]"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
            <span className="text-sm">Instagram</span>
          </a>
        </div>


        {/* Quick Links */}
        <div>
          <h3 className="mb-5 font-semibold text-[#d95b78]">
            {t.quickLinks}
          </h3>

          <div className="flex flex-col gap-3 text-sm">

            <Link
              href="/"
              className="transition 300 hover:text-[#d95b78]"
            >
              {t.home}
            </Link>

            <Link
              href="/about"
              className="transition 300 hover:text-[#d95b78]"
            >
              {t.about}
            </Link>

            <Link
              href="/services"
              className="transition 300 hover:text-[#d95b78]"
            >
              {t.servicesLink}
            </Link>

            <Link
              href="/gallery"
              className="transition 300 hover:text-[#d95b78]"
            >
              {t.gallery}
            </Link>

            <Link
              href="/contact"
              className="transition 300 hover:text-[#d95b78]"
            >
              {t.contactLink}
            </Link>

          </div>
        </div>


        {/* Services */}
        <div>
          <h3 className="mb-5 font-semibold text-white">
            {t.services}
          </h3>

          <div className="flex flex-col gap-3 text-sm text-gray-400">

            <span>{t.hair}</span>
            <span>{t.skin}</span>
            <span>{t.makeup}</span>
            <span>{t.nails}</span>
            <span>{t.bridal}</span>

          </div>
        </div>


        {/* Contact */}
        <div>
          <h3 className="mb-5 font-semibold text-white">
            {t.contact}
          </h3>

          <div className="space-y-4 text-sm text-gray-400">

            <p>
            <i className="fa-solid fa-location-dot text-gray-300"></i> {t.address}
            </p>

            <a
              href="tel:+917248174483"
              className="block transition hover:text-white"
            >
              <i className="fa-solid fa-phone text-gray-300"></i> {t.phone} <CopyButton text={"72481 74483"} />
            </a>

            <p>
              <i className="fa-regular fa-clock text-gray-300"></i> {t.hours}
            </p>

            <a
              href="https://wa.me/917248174483"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#25D366] transition hover:text-[#1DA851]"
            >
              <i className="fa-brands fa-whatsapp"></i>
              WhatsApp
            </a>

          </div>
        </div>

      </div>


      {/* Bottom */}
      <div className="mx-auto mt-12 max-w-7xl border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
         © {new Date().getFullYear()} Gloss & Glow Beauty Parlour. All Rights Reserved.
      </div>

    </footer>
  );
}