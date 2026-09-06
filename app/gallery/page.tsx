"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";


export default function Gallery() {
  const { language } = useLanguage();

  const content = {
    en: {

      hero: {
        small: "GLOSS & GLOW",
        title: "Our Gallery",
        description:
          "Take a look at our beauty work, salon and the Gloss & Glow experience.",
      },

      gallery: {
        small: "OUR WORK",
        title: "Beauty That Speaks for Itself",
        description:
          "Explore our latest work and salon moments.",
      },

      categories: {
        all: "All",
        salon: "Salon",
        makeup: "Makeup",
        mehandi: "Mehandi",
      },

      cta: {
        title: "Love What You See?",
        text: "Book your appointment and experience Gloss & Glow yourself.",
        button: "Book Appointment →",
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
        title: "हमारी गैलरी",
        description:
          "हमारे ब्यूटी वर्क, पार्लर और Gloss & Glow के खूबसूरत अनुभव की झलक देखें।",
      },

      gallery: {
        small: "हमारा काम",
        title: "खूबसूरती जो खुद बयां करे",
        description:
          "हमारे लेटेस्ट काम और पार्लर के खूबसूरत पलों को देखें।",
      },

      categories: {
        all: "सभी",
        salon: "पार्लर",
        makeup: "मेकअप",
        mehandi: "मेहंदी",
      },

      cta: {
        title: "आपको पसंद आया?",
        text:
          "अपना अपॉइंटमेंट बुक करें और खुद Gloss & Glow का अनुभव लें।",
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

  /*
    =====================================================
    ADD YOUR IMAGES HERE
    =====================================================

    Put your images inside:

    public/gallery/

    Example:

    public/
    └── gallery/
        ├── salon-1.jpg
        ├── salon-2.jpg
        ├── makeup-1.jpg
        ├── hair-1.jpg
        └── nails-1.jpg

    Then add them below.
  */

  const galleryImages = [
    {
      src: "/gallery/salon1.jpeg",
      title: "Our Salon",
      category: "salon",
    },
    {
      src: "/gallery/salon2.jpeg",
      title: "Our Salon",
      category: "salon",
    },
    {
      src: "/gallery/bride1.jpeg",
      title: "Bridal Makeup",
      category: "makeup",
    },
    {
      src: "/gallery/bride2.jpeg",
      title: "Bridal Makeup",
      category: "makeup",
    },
    {
      src: "/gallery/bride3.jpeg",
      title: "Bridal Makeup",
      category: "makeup",
    },
    {
      src: "/gallery/makeup1.jpeg",
      title: "Makeup",
      category: "makeup",
    },
    {
      src: "/gallery/makeup2.jpeg",
      title: "Makeup",
      category: "makeup",
    },
    {
      src: "/gallery/makeup3.jpeg",
      title: "Makeup",
      category: "makeup",
    },
    {
      src: "/gallery/makeup4.jpeg",
      title: "Makeup",
      category: "makeup",
    },
    {
      src: "/gallery/makeup5.jpeg",
      title: "Makeup",
      category: "makeup",
    },
    {
      src: "/gallery/makeup6.jpeg",
      title: "Makeup",
      category: "makeup",
    },
    {
      src: "/gallery/mehandi1.jpeg",
      title: "Mehandi",
      category: "mehandi",
    },
    {
      src: "/gallery/mehandi2.jpeg",
      title: "Mehandi",
      category: "mehandi",
    },
    {
      src: "/gallery/mehandi3.jpeg",
      title: "Mehandi",
      category: "mehandi",
    },
    {
      src: "/gallery/mehandi4.jpeg",
      title: "Mehandi",
      category: "mehandi",
    },

    
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter(
        (image) => image.category === activeCategory
      );

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


      {/* ================= GALLERY ================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          {/* HEADING */}

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c84d69]">
              {t.gallery.small}
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">
              {t.gallery.title}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              {t.gallery.description}
            </p>

          </div>


          {/* FILTER BUTTONS */}

          <div className="mt-10 flex flex-wrap justify-center gap-3">

            <button
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${activeCategory === "all"
                ? "bg-[#d95b78] text-white"
                : "border border-pink-200 bg-white text-gray-700 hover:bg-[#fbe7e9]"
                }`}
            >
              {t.categories.all}
            </button>

            <button
              onClick={() => setActiveCategory("salon")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${activeCategory === "salon"
                ? "bg-[#d95b78] text-white"
                : "border border-pink-200 bg-white text-gray-700 hover:bg-[#fbe7e9]"
                }`}
            >
              {t.categories.salon}
            </button>

            <button
              onClick={() => setActiveCategory("makeup")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${activeCategory === "makeup"
                ? "bg-[#d95b78] text-white"
                : "border border-pink-200 bg-white text-gray-700 hover:bg-[#fbe7e9]"
                }`}
            >
              {t.categories.makeup}
            </button>
            <button
              onClick={() => setActiveCategory("mehandi")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${activeCategory === "mehandi"
                ? "bg-[#d95b78] text-white"
                : "border border-pink-200 bg-white text-gray-700 hover:bg-[#fbe7e9]"
                }`}
            >
              {t.categories.mehandi}
            </button>

            
          

          </div>


          {/* IMAGE GRID */}

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {filteredImages.map((image, index) => (

              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-[#fbe7e9]"
              >

                
                  <img
                    src={image.src}
                    alt={image.title}
                    className="h-95 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
              

                {/* OVERLAY */}

                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-6 pb-6 pt-20 opacity-0 transition duration-300 group-hover:opacity-100">

                  <p className="text-lg font-semibold text-white">
                    {image.title}
                  </p>

                </div>

              </div>

            ))}

          </div>


          {/* EMPTY STATE */}

          {filteredImages.length === 0 && (

            <div className="mt-12 rounded-3xl bg-[#fbe7e9] py-20 text-center">

              <p className="text-gray-600">
                No images available.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="bg-[#fbe4e7] px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="font-serif text-4xl font-bold md:text-5xl">
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