"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";


export default function Services() {
    const { language } = useLanguage();

    const content = {
        en: {
            

            hero: {
                small: "GLOSS & GLOW",
                title: "Our Beauty Services",
                description:
                    "Professional beauty care designed to help you look beautiful, feel confident and glow with confidence.",
            },

            categories: [
                {
                    icon: "✦",
                    title: "Skin Care",
                    description:
                        "Refresh and rejuvenate your skin with our professional skincare treatments.",
                    services: [
                        ["Basic Facial"],
                        ["Cleanup"],
                        ["D-Tan"],
                        ["Gold Facial"],
                        ["Bridal Facial"],
                    ],
                },

                {
                    icon: "✂",
                    title: "Hair Care",
                    description:
                        "Give your hair the care and styling it deserves with our professional services.",
                    services: [
                        ["Haircut"],
                        ["Hair Spa"],
                        ["Hair Coloring"],
                        ["Hair Smoothening"],
                        ["Hair Styling"],
                    ],
                },

                {
                    icon: "♡",
                    title: "Makeup",
                    description:
                        "Look your best for every special occasion with our professional makeup services.",
                    services: [
                        ["Party Makeup"],
                        ["Engagement Makeup"],
                        ["Bridal Makeup"],
                        ["Reception Makeup"],
                        ["HD Makeup"],
                    ],
                },

                {
                    icon: "♢",
                    title: "Nail Care",
                    description:
                        "Pamper your hands and feet with our relaxing nail care services.",
                    services: [
                        ["Manicure"],
                        ["Pedicure"],
                        ["Spa Pedicure"],
                        ["Nail Art"],
                        ["Gel Nails"],
                    ],
                },

                {
                    icon: "✧",
                    title: "Waxing",
                    description:
                        "Enjoy smooth and beautiful skin with our professional waxing services.",
                    services: [
                        ["Full Arms"],
                        ["Half Legs"],
                        ["Full Legs"],
                        ["Underarms"],
                        ["Full Body"],
                    ],
                }, {
                    icon: "❀",
                    title: "Body Spa",
                    description:
                        "Relax, refresh and recharge with our soothing body treatments.",
                    services: [
                        ["Head Massage"],
                        ["Back Massage"],
                        ["Body Massage"],
                        ["Body Scrub"],
                        ["Relaxation Spa"],
                    ],
                },
            ],

            note: {
                title: "Looking for something special?",
                text:
                    "We also offer customized beauty packages for weddings, parties and special occasions.",
                button: "Contact Us →",
            },

            footer: {
                description:
                    "Beauty, confidence and care — all in one place.",
                links: "Quick Links",
                services: "Services",
                contact: "Contact Us",
                hours: "Mon - Sun: 10 AM - 8 PM",
            },
        },

        hi: {
            

            hero: {
                small: "GLOSS & GLOW",
                title: "हमारी ब्यूटी सेवाएं",
                description:
                    "बेहतरीन ब्यूटी केयर सेवाएं जो आपको खूबसूरत, आत्मविश्वासी और चमकदार महसूस कराने के लिए बनाई गई हैं।",
            },

            categories: [
                {
                    icon: "✦",
                    title: "स्किन केयर",
                    description:
                        "हमारी प्रोफेशनल स्किनकेयर सेवाओं के साथ अपनी त्वचा को ताज़गी और निखार दें।",
                    services: [
                        ["बेसिक फेशियल"],
                        ["क्लीनअप"],
                        ["डी-टैन"],
                        ["गोल्ड फेशियल"],
                        ["ब्राइडल फेशियल"],
                    ],
                },

                {
                    icon: "✂",
                    title: "हेयर केयर",
                    description:
                        "हमारी प्रोफेशनल हेयर सेवाओं के साथ अपने बालों को बेहतरीन देखभाल और स्टाइल दें।",
                    services: [
                        ["हेयरकट"],
                        ["हेयर स्पा"],
                        ["हेयर कलरिंग"],
                        ["हेयर स्मूदनिंग"],
                        ["हेयर स्टाइलिंग"],
                    ],
                },

                {
                    icon: "♡",
                    title: "मेकअप",
                    description:
                        "हर खास मौके पर खूबसूरत दिखें हमारी प्रोफेशनल मेकअप सेवाओं के साथ।",
                    services: [
                        ["पार्टी मेकअप"],
                        ["एंगेजमेंट मेकअप"],
                        ["ब्राइडल मेकअप"],
                        ["रिसेप्शन मेकअप"],
                        ["HD मेकअप"],
                    ],
                },

                {
                    icon: "♢",
                    title: "नेल केयर",
                    description:
                        "हमारी आरामदायक नेल केयर सेवाओं के साथ अपने हाथों और पैरों को खूबसूरत बनाएं।",
                    services: [
                        ["मैनिक्योर"],
                        ["पेडिक्योर"],
                        ["स्पा पेडिक्योर"],
                        ["नेल आर्ट"],
                        ["जेल नेल्स"],
                    ],
                },

                {
                    icon: "✧",
                    title: "वैक्सिंग",
                    description:
                        "हमारी प्रोफेशनल वैक्सिंग सेवाओं के साथ अपनी त्वचा को मुलायम और खूबसूरत बनाएं।",
                    services: [
                        ["फुल आर्म्स"],
                        ["हाफ लेग्स"],
                        ["फुल लेग्स"],
                        ["अंडरआर्म्स"],
                        ["फुल बॉडी"],
                    ],
                },

                {
                    icon: "❀",
                    title: "बॉडी स्पा",
                    description:
                        "हमारी आरामदायक बॉडी ट्रीटमेंट सेवाओं के साथ रिलैक्स और तरोताज़ा महसूस करें।",
                    services: [
                        ["हेड मसाज"],
                        ["बैक मसाज"],
                        ["बॉडी मसाज"],
                        ["बॉडी स्क्रब"],
                        ["रिलैक्सेशन स्पा"],
                    ],
                },
            ],

            note: {
                title: "कुछ खास चाहिए?",
                text:
                    "हम शादी, पार्टी और खास मौकों के लिए कस्टमाइज्ड ब्यूटी पैकेज भी उपलब्ध कराते हैं।",
                button: "संपर्क करें →",
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

            {/* ================= NAVBAR ================= */}

           


            {/* ================= HERO ================= */}

            <section className="bg-[#fdecee]">

                <div className="mx-auto max-w-7xl px-6 py-24 text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c84d69]">
                        {t.hero.small}
                    </p>

                    <h2 className="mx-auto mt-4 max-w-4xl font-serif text-5xl font-bold md:text-7xl">
                        {t.hero.title}
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                        {t.hero.description}
                    </p>

                    <div className="mx-auto mt-7 h-0.5 w-16 bg-[#d95b78]" />

                </div>

            </section>


            {/* ================= SERVICES ================= */}

            <section className="px-6 py-24">

                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-8 md:grid-cols-2">

                        {t.categories.map((category) => (

                            <div
                                key={category.title}
                                className="overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >

                                {/* CARD HEADER */}

                                <div className="bg-[#fbe7e9] p-8">

                                    <div className="flex items-center gap-5">

                                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-3xl text-[#d95b78] shadow-sm">
                                            {category.icon}
                                        </div>

                                        <div>

                                            <h3 className="font-serif text-3xl font-bold">
                                                {category.title}
                                            </h3>

                                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                                {category.description}
                                            </p>

                                        </div>

                                    </div>

                                </div>


                                {/* SERVICE LIST */}

                                <div className="p-7">

                                    <div className="space-y-4">

                                        {category.services.map(([name, price]) => (

                                            <div
                                                key={name}
                                                className="flex items-center justify-between border-b border-dashed border-gray-200 pb-3"
                                            >

                                                <span className="font-medium text-gray-700">
                                                    {name}
                                                </span>

                                                <span className="font-semibold text-[#c84d69]">
                                                    {price}
                                                </span>

                                            </div>

                                        ))}

                                    </div>

                                   
                                        
                                    

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* ================= CUSTOM PACKAGE ================= */}

            <section className="px-6 pb-24">

                <div className="mx-auto max-w-5xl overflow-hidden rounded-[35px] bg-[#171515] px-7 py-14 text-center text-white md:px-14">

                    <div className="mx-auto mb-5 text-4xl text-[#d9aa4d]">
                        ✦
                    </div>

                    <h2 className="font-serif text-3xl font-bold md:text-4xl">
                        {t.note.title}
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
                        {t.note.text}
                    </p>

                    <a
                        href="/contact"
                        className="mt-7 inline-block rounded-full bg-[#d95b78] px-8 py-4 font-semibold text-white transition hover:bg-[#b94460]"
                    >
                        {t.note.button}
                    </a>

                </div>

            </section>


            {/* ================= FOOTER ================= */}

            

        </main>
    );
}