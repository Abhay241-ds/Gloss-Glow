"use client";

import { useState } from "react";


import { useLanguage } from "@/app/context/LanguageContext";

export default function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        small: "ABOUT GLOSS & GLOW",
        title: "Where Beauty Meets Confidence",
        description:
          "A place where beauty, care and confidence come together.",
      },

      story: {
        small: "OUR STORY",
        title: "Beauty is Our Passion",
        p1: "At Glos and Glow Beauty Parlour, we believe that beauty is not just about appearance. It is about feeling confident, comfortable and truly yourself.",
        p2: "Our goal is to provide professional beauty services in a warm, relaxing and welcoming environment. From everyday grooming to special occasions, we are here to help you look and feel your best.",
        button: "Explore Our Services",
      },

      values: {
        small: "WHAT WE BELIEVE",
        title: "Our Values",
        items: [
          {
            icon: "✦",
            title: "Quality",
            text: "We believe every client deserves quality beauty care and attention.",
          },
          {
            icon: "♡",
            title: "Care",
            text: "We take the time to understand your needs and make you feel comfortable.",
          },
          {
            icon: "♕",
            title: "Confidence",
            text: "Our goal is to help you leave feeling confident and beautiful.",
          },
        ],
      },

      experience: {
        small: "THE GLOSS & GLOW EXPERIENCE",
        title: "More Than Just a Beauty Parlour",
        text: "From the moment you walk through our doors, our focus is on giving you a comfortable and enjoyable beauty experience.",
        points: [
          "Professional beauty services",
          "Quality products",
          "Clean and hygienic environment",
          "Personal attention",
          "Friendly and experienced staff",
        ],
      },

      cta: {
        title: "Ready to Feel Your Best?",
        text: "Book your appointment and let us take care of the rest.",
        button: "Book Appointment →",
      },

      footer: {
        description:
          "Beauty, confidence and care — all in one place.",
        links: "Quick Links",
        services: "Services",
        contact: "Contact Us",
        hours: "Mon - Sun: 10 AM - 6 PM",
      },
    },

    hi: {
      
      hero: {
        small: "GLOS & GLOW के बारे में",
        title: "जहाँ खूबसूरती आत्मविश्वास से मिलती है",
        description:
          "एक ऐसी जगह जहाँ खूबसूरती, देखभाल और आत्मविश्वास एक साथ मिलते हैं।",
      },

      story: {
        small: "हमारी कहानी",
        title: "खूबसूरती हमारा जुनून है",
        p1: "Gloss and Glow Beauty Parlour में हमारा मानना है कि खूबसूरती सिर्फ दिखने के बारे में नहीं है। यह आत्मविश्वास, आराम और खुद को बेहतर महसूस करने के बारे में है।",
        p2: "हमारा उद्देश्य आपको एक आरामदायक और स्वागतपूर्ण वातावरण में बेहतरीन ब्यूटी सेवाएं प्रदान करना है। रोज़मर्रा की ग्रूमिंग से लेकर खास मौकों तक, हम आपको खूबसूरत और आत्मविश्वासी महसूस कराने के लिए यहाँ हैं।",
        button: "हमारी सेवाएं देखें",
      },

      values: {
        small: "हमारे सिद्धांत",
        title: "हमारे मूल्य",
        items: [
          {
            icon: "✦",
            title: "गुणवत्ता",
            text: "हम मानते हैं कि हर ग्राहक बेहतरीन ब्यूटी केयर और ध्यान का हकदार है।",
          },
          {
            icon: "♡",
            title: "देखभाल",
            text: "हम आपकी जरूरतों को समझकर आपको आरामदायक अनुभव देने का प्रयास करते हैं।",
          },
          {
            icon: "♕",
            title: "आत्मविश्वास",
            text: "हमारा उद्देश्य आपको आत्मविश्वासी और खूबसूरत महसूस कराना है।",
          },
        ],
      },

      experience: {
        small: "GLOSS & GLOW का अनुभव",
        title: "सिर्फ एक ब्यूटी पार्लर से कहीं ज्यादा",
        text: "हमारे पार्लर में कदम रखने से लेकर आपकी सेवा पूरी होने तक, हमारा ध्यान आपको आरामदायक और शानदार अनुभव देने पर रहता है।",
        points: [
          "प्रोफेशनल ब्यूटी सेवाएं",
          "बेहतरीन प्रोडक्ट्स",
          "स्वच्छ और हाइजीनिक वातावरण",
          "व्यक्तिगत ध्यान",
          "दोस्ताना और अनुभवी स्टाफ",
        ],
      },

      cta: {
        title: "क्या आप खूबसूरत महसूस करने के लिए तैयार हैं?",
        text: "अपना अपॉइंटमेंट बुक करें और बाकी की जिम्मेदारी हमें दें।",
        button: "अपॉइंटमेंट बुक करें →",
      },

      footer: {
        description:
          "खूबसूरती, आत्मविश्वास और देखभाल — सब एक ही जगह।",
        links: "क्विक लिंक्स",
        services: "सेवाएं",
        contact: "संपर्क करें",
        hours: "सोम - रवि: सुबह 10 बजे - रात 8 बजे",
      },
    },
  };

  const t = content[language];

  return (
    <main className="bg-[#fffaf8] text-[#1b1717]">

         
      {/* ================= VALUES ================= */}

      <section className="bg-[#fbe7e9] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c84d69]">
              {t.values.small}
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">
              {t.values.title}
            </h2>

            <div className="mx-auto mt-5 h-0.5 w-16 bg-[#d95b78]" />

          </div>


          <div className="grid gap-6 md:grid-cols-3">

            {t.values.items.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="text-5xl text-[#d9aa4d]  animate-bounce">
                  {item.icon}
                </div>

                <h3 className="mt-5 font-serif text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section className="bg-[#171515] px-6 py-24 text-white">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e68a9c]">
              {t.experience.small}
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
              {t.experience.title}
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-gray-400">
              {t.experience.text}
            </p>

          </div>


          <div className="rounded-3xl border border-gray-800 bg-[#211e1e] p-8">

            <div className="space-y-5">

              {t.experience.points.map((point) => (

                <div
                  key={point}
                  className="flex items-center gap-4"
                >

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d95b78] text-white">
                    ✓
                  </div>

                  <p className="text-gray-200">
                    {point}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="bg-[#fbe4e7] px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c84d69]">
            GLOSS & GLOW
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">
            {t.cta.title}
          </h2>

          <p className="mt-4 text-gray-600">
            {t.cta.text}
          </p>

          <a
            href="/contact"
            className="mt-7 inline-block rounded-full bg-[#d95b78] px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1"
          >
            {t.cta.button}
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

     
    </main>
  );
}