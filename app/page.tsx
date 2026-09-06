"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Home() {
    const { language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const content = {
    en: {
      topLocation: "Niwari Road, Jagatpur Modinagar, Ghaziabad",
      topMessage: "Look Beautiful, Feel Beautiful",
      phone: "+91 72481 74483",



      hero: {
        small: "BEAUTY & BEYOND",
        title1: "Enhance Your",
        title2: "Beauty:",
        highlight: "Naturally",
        description:
          "Discover premium beauty treatments designed to make you look beautiful, feel confident and shine every day.",
        appointment: "Book Appointment",
        services: "Our Services",
      },

      
     


      why: {
        small: "WHY CHOOSE US",
        title: "Because You Deserve the Best",
        items: [
          {
            icon: "✦",
            title: "Premium Products",
            text: "We use quality products for your beauty and care.",
          },
          {
            icon: "♕",
            title: "Experienced Staff",
            text: "Our professionals are trained and experienced.",
          },
          {
            icon: "✧",
            title: "Hygiene & Safety",
            text: "Clean and comfortable environment for every client.",
          },
          {
            icon: "♡",
            title: "Customer Satisfaction",
            text: "Your happiness and satisfaction come first.",
          },
        ],
      },

      about: {
        small: "ABOUT US",
        title: "Beauty is Our Passion",
        description:
          "At Glos and Glow, we believe beauty is personal. Our goal is to provide professional beauty services in a relaxing, welcoming and comfortable environment.",
        button: "Read More About Us",
      },

      booking: {
        small: "READY TO GLOW?",
        title: "Book Your Beauty Appointment",
        description: "Let us help you look and feel your best.",
        button: "Book Appointment →",
      },

      footer: {
        description:
          "Beauty, confidence and care — all in one place.",
        quickLinks: "Quick Links",
        services: "Services",
        contact: "Contact Us",
        hair: "Hair Care",
        skin: "Skin Care",
        makeup: "Makeup",
        nails: "Nail Care",
        bridal: "Bridal",
        copyright:
          "© 2026 Gloss and Glow Beauty Parlour. All Rights Reserved.",
        hours: "Mon - Sun: 10 AM - 8 PM",
      },
    },

    hi: {
      topLocation: "निवाड़ी रोड, जगतपुर मोड़, मोदीनगर, गाज़ियाबाद",
      topMessage: "खूबसूरत दिखें, खूबसूरत महसूस करें",
      phone: "+91 72481 74483 ",


      hero: {
        small: "खूबसूरती से भी आगे",
        title1: "निखारें अपनी",
        title2: "खूबसूरती:",
        highlight: "प्राकृतिक रूप से",
        description:
          "बेहतरीन ब्यूटी ट्रीटमेंट का अनुभव करें और हर दिन खूबसूरत, आत्मविश्वासी और खास महसूस करें।",
        appointment: "अपॉइंटमेंट बुक करें",
        services: "हमारी सेवाएं",
      },

      
    
      why: {
        small: "हमें क्यों चुनें",
        title: "क्योंकि आप सबसे बेहतर की हकदार हैं",
        items: [
          {
            icon: "✦",
            title: "प्रीमियम प्रोडक्ट्स",
            text: "हम आपकी सुंदरता और देखभाल के लिए बेहतरीन प्रोडक्ट्स का उपयोग करते हैं।",
          },
          {
            icon: "♕",
            title: "अनुभवी स्टाफ",
            text: "हमारे प्रोफेशनल स्टाफ प्रशिक्षित और अनुभवी हैं।",
          },
          {
            icon: "✧",
            title: "स्वच्छता और सुरक्षा",
            text: "हम अपने ग्राहकों के लिए स्वच्छ और आरामदायक वातावरण रखते हैं।",
          },
          {
            icon: "♡",
            title: "ग्राहक संतुष्टि",
            text: "आपकी खुशी और संतुष्टि हमारी पहली प्राथमिकता है।",
          },
        ],
      },

      about: {
        small: "हमारे बारे में",
        title: "खूबसूरती हमारा जुनून है",
        description:
          "Glos and Glow में हम मानते हैं कि हर व्यक्ति की खूबसूरती खास होती है। हमारा उद्देश्य आपको आरामदायक और स्वागतपूर्ण वातावरण में बेहतरीन ब्यूटी सेवाएं प्रदान करना है।",
        button: "हमारे बारे में और जानें",
      },

      booking: {
        small: "खूबसूरती के लिए तैयार?",
        title: "अपना ब्यूटी अपॉइंटमेंट बुक करें",
        description: "हम आपकी खूबसूरती और आत्मविश्वास को निखारने में मदद करेंगे।",
        button: "अपॉइंटमेंट बुक करें →",
      },

      footer: {
        description:
          "खूबसूरती, आत्मविश्वास और देखभाल — सब एक ही जगह।",
        quickLinks: "क्विक लिंक्स",
        services: "सेवाएं",
        contact: "संपर्क करें",
        hair: "हेयर केयर",
        skin: "स्किन केयर",
        makeup: "मेकअप",
        nails: "नेल केयर",
        bridal: "ब्राइडल",
        copyright:
          "© 2026 Gloss and Glow Beauty Parlour. सर्वाधिकार सुरक्षित।",
        hours: "सोम - रवि: सुबह 10 बजे - रात 8 बजे",
      },
    },
  };

  const t = content[language];

  return (
    <main className="bg-[#fffaf8] text-[#1b1717]">

      {/* ================= TOP BAR ================= */}

      <div className="hidden items-center justify-between bg-[#f9dfe2] px-8 py-2 text-sm md:flex">
        <p><i className="fa-solid fa-location-dot"></i> {t.topLocation}</p>

        <p><span className=" text-[#d95b78] animate-pulse"><i className="fa-solid fa-wand-magic-sparkles"></i></span> {t.topMessage} <span className=" text-[#d95b78] animate-pulse"><i className="fa-solid fa-wand-magic-sparkles"></i></span></p>

        <p><i className="fa-solid fa-phone "></i> {t.phone}</p>
      </div>


      {/* ================= NAVBAR ================= */}

      


      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[#fdecee]">

        <div className="mx-auto grid min-h-155 max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">

          {/* HERO TEXT */}

          <div className="relative z-10">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c84d69]">
              {t.hero.small}
            </p>

            <h2 className="max-w-xl font-serif text-5xl font-bold leading-tight md:text-7xl">

              {t.hero.title1}

              <br />

              {t.hero.title2}

              <span className="ml-2 font-normal italic text-[#d65c78]">
                {t.hero.highlight}
              </span>

            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              {t.hero.description}
            </p>


            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="/contact"
                className="rounded-full bg-[#d95b78] px-7 py-4 font-semibold text-white shadow-lg shadow-pink-200 transition hover:-translate-y-1"
              >
                {t.hero.appointment}
              </a>

              <a
                href="/services"
                className="rounded-full border border-[#d95b78] px-7 py-4 font-semibold text-[#b94460] transition hover:bg-[#d95b78] hover:text-white"
              >
                {t.hero.services} →
              </a>

            </div>

          </div>


          {/* HERO IMAGE */}

          <div className="relative flex justify-center">

            <div className="absolute h-80 w-80 rounded-full bg-[#f6c5ce] blur-3xl md:h-125 md:w-125" />

            <div className="relative h-112.5 w-full max-w-125 overflow-hidden rounded-t-[250px] bg-linear-to-b from-[#f3bfc8] to-[#fff0f0]">

              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=85"
                alt="Beauty"
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      

      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-[#171515] px-6 py-24 text-white">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          <div className="overflow-hidden rounded-[100px]">

            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85"
              alt="Beauty salon"
              className="h-125 w-full object-cover"
            />

          </div>


          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e68a9c]">
              {t.why.small}
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">
              {t.why.title}
            </h2>

            <div className="my-8 h-0.5 w-16 bg-[#d95b78]" />


            <div className="grid gap-8 sm:grid-cols-2">

              {t.why.items.map((item) => (

                <div key={item.title}>

                  <div className="text-3xl text-[#d9aa4d]">
                    {item.icon}
                  </div>

                  <h3 className="mt-3 font-serif text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="px-6 py-24">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c84d69]">
              {t.about.small}
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">
              {t.about.title}
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-gray-600">
              {t.about.description}
            </p>

            <a
              href="/about"
              className="mt-7 inline-block rounded-full bg-[#d95b78] px-7 py-3 font-semibold text-white"
            >
              {t.about.button}
            </a>

          </div>


          <div>

            <img
              src="/gallery/salon2.jpeg"
              alt="Salon interior"
              className="h-72 w-full rounded-3xl object-cover"
            />

          </div>

        </div>

      </section>


      {/* ================= BOOKING CTA ================= */}

      <section className="bg-[#fbe4e7] px-6 py-20">

        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c84d69]">
              {t.booking.small}
            </p>

            <h2 className="mt-2 font-serif text-4xl font-bold">
              {t.booking.title}
            </h2>

            <p className="mt-3 text-gray-600">
              {t.booking.description}
            </p>

          </div>


          <a
            href="/contact"
            className="whitespace-nowrap rounded-full bg-[#d95b78] px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1"
          >
            {t.booking.button}
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}


    </main>
  );
}