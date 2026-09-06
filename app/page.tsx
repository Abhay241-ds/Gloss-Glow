"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

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
    },

    hi: {
      topLocation: "निवाड़ी रोड, जगतपुर मोड़, मोदीनगर, गाज़ियाबाद",
      topMessage: "खूबसूरत दिखें, खूबसूरत महसूस करें",
      phone: "+91 72481 74483",

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
        description:
          "हम आपकी खूबसूरती और आत्मविश्वास को निखारने में मदद करेंगे।",
        button: "अपॉइंटमेंट बुक करें →",
      },
    },
  };

  const t = content[language];

  return (
    <main className="overflow-hidden bg-[#fffaf8] text-[#1b1717]">

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div className="hidden items-center justify-between gap-6 bg-[#f9dfe2] px-6 py-2 text-sm md:flex lg:px-8">
        <p className="flex items-center gap-2">
          <i className="fa-solid fa-location-dot text-[#c84d69]" />
          <span>{t.topLocation}</span>
        </p>

        <p className="flex items-center gap-2 text-center">
          <span className="animate-pulse text-[#d95b78]">
            <i className="fa-solid fa-wand-magic-sparkles" />
          </span>

          <span>{t.topMessage}</span>

          <span className="animate-pulse text-[#d95b78]">
            <i className="fa-solid fa-wand-magic-sparkles" />
          </span>
        </p>

        <p className="flex items-center gap-2 whitespace-nowrap">
          <i className="fa-solid fa-phone text-[#c84d69]" />
          <span>{t.phone}</span>
        </p>
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#fdecee]">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-6 sm:py-16 md:min-h-[620px] md:grid-cols-2 md:gap-10 lg:px-8">

          {/* HERO TEXT */}

          <div className="relative z-10 text-center md:text-left">

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c84d69] sm:text-sm sm:tracking-[0.25em]">
              {t.hero.small}
            </p>

            <h1 className="mx-auto max-w-xl font-serif text-4xl font-bold leading-[1.1] sm:text-5xl md:mx-0 md:text-6xl lg:text-7xl">

              <span>{t.hero.title1}</span>

              <br />

              <span>{t.hero.title2}</span>

              <span className="ml-2 font-normal italic text-[#d65c78]">
                {t.hero.highlight}
              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 md:mx-0">
              {t.hero.description}
            </p>

            {/* BUTTONS */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 md:justify-start">

              <a
                href="/contact"
                className="w-full rounded-full bg-[#d95b78] px-7 py-4 text-center font-semibold text-white shadow-lg shadow-pink-200 transition duration-300 hover:-translate-y-1 hover:bg-[#c84d69] sm:w-auto"
              >
                {t.hero.appointment}
              </a>

              <a
                href="/services"
                className="w-full rounded-full border border-[#d95b78] px-7 py-4 text-center font-semibold text-[#b94460] transition duration-300 hover:bg-[#d95b78] hover:text-white sm:w-auto"
              >
                {t.hero.services} →
              </a>

            </div>

          </div>


          {/* HERO IMAGE */}

          <div className="relative flex justify-center">

            {/* Background Glow */}

            <div className="absolute h-72 w-72 rounded-full bg-[#f6c5ce] blur-3xl sm:h-96 sm:w-96 md:h-[500px] md:w-[500px]" />

            {/* Image Container */}

            <div className="relative h-[360px] w-full max-w-[320px] overflow-hidden rounded-t-[180px] bg-linear-to-b from-[#f3bfc8] to-[#fff0f0] sm:h-[420px] sm:max-w-[360px] sm:rounded-t-[210px] md:h-[450px] md:max-w-[390px] md:rounded-t-[230px] lg:h-[500px] lg:max-w-[430px] lg:rounded-t-[250px]">

              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=85"
                alt="Beauty"
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      {/* Your Services section can remain here if you already
          have one. */}


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="bg-[#171515] px-5 py-16 text-white sm:px-6 sm:py-20 md:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* IMAGE */}

          <div className="mx-auto w-full max-w-xl overflow-hidden rounded-[60px] sm:rounded-[80px] lg:rounded-[100px]">

            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85"
              alt="Beauty salon"
              className="h-[380px] w-full object-cover sm:h-[450px] lg:h-[500px]"
            />

          </div>


          {/* CONTENT */}

          <div className="text-center lg:text-left">

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e68a9c] sm:text-sm sm:tracking-[0.25em]">
              {t.why.small}
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {t.why.title}
            </h2>

            <div className="mx-auto my-8 h-0.5 w-16 bg-[#d95b78] lg:mx-0" />


            {/* FEATURES */}

            <div className="grid gap-8 text-left sm:grid-cols-2">

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


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="px-5 py-16 sm:px-6 sm:py-20 md:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">

          {/* TEXT */}

          <div className="text-center lg:text-left">

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c84d69] sm:text-sm sm:tracking-[0.25em]">
              {t.about.small}
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {t.about.title}
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-7 text-gray-600 sm:leading-8 lg:mx-0">
              {t.about.description}
            </p>

            <a
              href="/about"
              className="mt-7 inline-block rounded-full bg-[#d95b78] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#b94460] sm:text-base"
            >
              {t.about.button}
            </a>

          </div>


          {/* IMAGE */}

          <div className="w-full">

            <img
              src="/gallery/salon2.jpeg"
              alt="Salon interior"
              className="h-64 w-full rounded-3xl object-cover sm:h-80 lg:h-96"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          BOOKING CTA
      ===================================================== */}

      <section className="bg-[#fbe4e7] px-5 py-16 sm:px-6 sm:py-20">

        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">

          {/* TEXT */}

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c84d69] sm:text-sm">
              {t.booking.small}
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              {t.booking.title}
            </h2>

            <p className="mt-3 text-gray-600">
              {t.booking.description}
            </p>

          </div>


          {/* BUTTON */}

          <a
            href="/contact"
            className="w-full rounded-full bg-[#d95b78] px-8 py-4 text-center font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#b94460] sm:w-auto"
          >
            {t.booking.button}
          </a>

        </div>

      </section>

    </main>
  );
}