"use client";

import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";



import { useLanguage } from "@/app/context/LanguageContext";
import CopyButton from "@/components/CopyButton";

export default function Contact() {
    const { language } = useLanguage();

    const content = {
        en: {


            contact: {
                small: "CONTACT US",
                title: "Let's Connect",
                description:
                    "Whether you want to know more about our services or book an appointment, we're just a call or message away.",

                addressTitle: "Visit Us",
                address: "Niwari Road, Jagatpur, Modinagar",

                phoneTitle: "Call Us",
                phone: "+91 72481 74483",

                hoursTitle: "Opening Hours",
                days: "Monday - Sunday",
                time: "10:00 AM - 8:00 PM",

                socialTitle: "Follow Us",
                socialText:
                    "Follow Gloss & Glow for our latest beauty work, offers and updates.",
                whatsappTitle: "Chat on WhatsApp",
                whatsappNumber: "+91 72481 74483",
            },

            buttons: {
                whatsapp: "WhatsApp",
                instagram: "Instagram",
                directions: "Get Directions",
            },

            map: {
                small: "FIND US",
                title: "Visit Gloss & Glow",
                description:
                    "Come visit us and enjoy a relaxing and beautiful salon experience.",
            },

            cta: {
                title: "Ready to Glow?",
                description:
                    "Contact us today and let us help you look and feel your best.",
                button: "WhatsApp Us →",
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



            contact: {
                small: "CONTACT US",
                title: "Let's Connect",
                description:
                    "Whether you want to know more about our services or book an appointment, we're just a call or message away.",

                addressTitle: "Visit Us",
                address: "Niwari Road, Jagatpur, Modinagar",

                phoneTitle: "Call Us",
                phone: "+91 72481 74483",

                hoursTitle: "Opening Hours",
                days: "Monday - Sunday",
                time: "10:00 AM - 8:00 PM",

                socialTitle: "Chat With Us on WhatsApp",
                socialText:
                    "Have questions about our services or want to book an appointment? Send us a message on WhatsApp and we'll be happy to help.",

                whatsappTitle: "Chat on WhatsApp",
                whatsappNumber: "+91 72481 74483",
            },

            buttons: {
                whatsapp: "WhatsApp",
                instagram: "Instagram",
                directions: "दिशा देखें",
            },

            map: {
                small: "हमारा स्थान",
                title: "Gloss & Glow पर आएं",
                description:
                    "हमसे मिलने आएं और एक आरामदायक और खूबसूरत पार्लर अनुभव का आनंद लें।",
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




            {/* ================= CONTACT INFORMATION ================= */}

            <section className="px-6 py-12">

                <div className="mx-auto max-w-7xl">

                    {/* HEADING */}

                    <div className="mx-auto max-w-3xl text-center">

                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c84d69]">
                            {t.contact.small}
                        </p>

                        <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">
                            {t.contact.title}
                        </h2>

                        <p className="mt-5 leading-7 text-gray-600">
                            {t.contact.description}
                        </p>

                    </div>


                    {/* CONTACT CARDS */}

                    <div className="mt-14 grid gap-6 md:grid-cols-3">

                        {/* ADDRESS */}

                        <div className="rounded-3xl border border-pink-100 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fbe7e9] text-2xl">
                            <i className="fa-solid fa-location-dot text-[#c84d69]"></i>
                            </div>

                            <h3 className="mt-5 font-serif text-2xl font-bold">
                                {t.contact.addressTitle}
                            </h3>

                            <p className="mt-3 leading-6 text-gray-600">
                                {t.contact.address}
                            </p>

                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=28.846665,77.572660"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 inline-block font-semibold text-[#c84d69] hover:underline"
                            >
                                {t.buttons.directions} →
                            </a>

                        </div>


                        {/* PHONE */}

                        <div className="rounded-3xl border border-pink-100 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fbe7e9] text-2xl">
                                <i className="fa-solid fa-phone text-[#c84d69]"></i>
                            </div>

                            <h3 className="mt-5 font-serif text-2xl font-bold">
                                {t.contact.phoneTitle}
                            </h3>

                            <p className="mt-3 text-gray-600">
                                {t.contact.phone} <CopyButton text={"72481 74483"} />
                            </p>

                        </div>


                        {/* HOURS */}

                        <div className="rounded-3xl border border-pink-100 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fbe7e9] text-2xl">
                                <i className="fa-regular fa-clock text-[#c84d69]"></i>
                            </div>

                            <h3 className="mt-5 font-serif text-2xl font-bold">
                                {t.contact.hoursTitle}
                            </h3>

                            <p className="mt-3 text-gray-600">
                                {t.contact.days}
                            </p>

                            <p className="font-semibold text-[#c84d69]">
                                {t.contact.time}
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= SOCIAL SECTION ================= */}
            <section className=" bg-[#fdf0f3] px-6 py-10 grid md:grid-cols-2 gap-8 grid-cols-1 items-center">

                <div className="mx-auto max-w-4xl text-center my-10">

                    <i className="fa-brands fa-instagram text-5xl text-[#E1306C] duration-300 hover:-translate-y-1 "></i>

                    <h2 className="mt-5 font-serif text-4xl font-bold">
                        {t.contact.socialTitle}
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                        {t.contact.socialText}
                    </p>
                    <a
                        href="https://www.instagram.com/gloss_n_glowbeautyparlour9756?igsi=MTZldW96MmU0MHpnNA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E1306C] px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <i className="fa-brands fa-instagram"></i>
                        Instagram
                    </a>
                </div>

                <div className=" rounded-2xl  bg-[#fdf0f3] p-4 flex flex-col items-center justify-center text-center ">

                    {/* QR CODE */}
                    <div>
                        <i className="fa-brands fa-instagram text-5xl text-[#E1306C] mb-4 hover:text-[#c9275d] duration-300 hover:-translate-y-1"></i>
                        <QRCodeSVG
                            value="https://www.instagram.com/gloss_n_glowbeautyparlour9756?igsi=MTZldW96MmU0MHpnNA=="
                            size={180}
                            bgColor="#ffffff"
                            fgColor="#171515"
                            level="H"
                        />
                    </div>

                    <h3 className="mt-4 font-semibold text-2xl text-[#171515]">
                        Scan to Follow Us
                    </h3>
                </div>





            </section>


            {/* ================= Whatsapp ================= */}

            <section className="bg-[#EAF7EE] my-10 px-6 py-10">

                <div className="mx-auto max-w-4xl text-center">

                    <i className="fa-brands fa-whatsapp text-5xl text-[#25D366] duration-300 hover:-translate-y-1 "></i>

                    <h2 className="mt-5 font-serif text-4xl font-bold">
                        {t.contact.whatsappTitle}
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 ">
                        {t.contact.whatsappNumber}
                    </p>

                    <a
                        href="https://wa.me/917248174483"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 inline-block rounded-full border-2 border-[#2a7018] bg-white px-8 py-3 font-semibold text-[#25D366] transition hover:bg-[#2a7018] hover:text-white duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <i className="fa-brands fa-whatsapp"></i> {t.buttons.whatsapp}
                    </a>

                </div>

            </section>




            {/* ================= MAP ================= */}

            <section className="px-6 pb-24">

                <div className="mx-auto max-w-7xl overflow-hidden rounded-[35px] bg-[#fbe7e9]">

                    <div className="grid lg:grid-cols-2">

                        {/* MAP */}

                        <div className="min-h-95 bg-[#ead6d8]">

                            <iframe
                                src="https://www.google.com/maps?q=28.846665,77.572660&output=embed"
                                width="100%"
                                height="100%"
                                style={{
                                    border: 0,
                                    minHeight: "380px",
                                }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                        </div>


                        {/* MAP INFORMATION */}

                        <div className="flex flex-col justify-center p-10 md:p-14">

                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c84d69]">
                                {t.map.small}
                            </p>

                            <h2 className="mt-3 font-serif text-4xl font-bold">
                                {t.map.title}
                            </h2>

                            <p className="mt-5 leading-7 text-gray-600">
                                {t.map.description}
                            </p>

                            <p className="mt-4 font-medium text-gray-700">
                            <i className="fa-solid fa-location-dot text-[#c84d69]"></i> {t.contact.address}
                            </p>

                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=28.846665,77.572660"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-7 inline-block w-fit rounded-full bg-[#d95b78] px-7 py-3 font-semibold text-white transition hover:bg-[#b94460]"
                            >
                                {t.buttons.directions} →
                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= FOOTER ================= */}



        </main>
    );
}