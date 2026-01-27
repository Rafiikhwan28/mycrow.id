import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mycrowLogo from "../../assets/mycrow_logo_text.png";
import handLeft from "../../assets/hand-gesture-pointing-invisible-screen.png";
import handRight from "../../assets/Hand_cyborg.png";
import bgImage from "../../assets/background.jpg";
import odooLogo from "../../assets/mycrow_logo_text.png";
import LearningPatner from "../../assets/odoo_learning_partner_rgb.png";
import { odooApps, odooTabs } from "../../data/LandingPage/odooApps";

// Images
import Image1 from "../../assets/01. Landing Page/banner-01.png";
import Image2 from "../../assets/01. Landing Page/banner-02.png";
import Image3 from "../../assets/01. Landing Page/banner-03.png";
import Image4 from "../../assets/01. Landing Page/banner-04.png";

//icon
import iuconImage1 from "../../assets/icons/seo.gif";
import iuconImage2 from "../../assets/icons/search-engine.gif";
import iuconImage3 from "../../assets/icons/social-media.gif";
import iuconImage4 from "../../assets/icons/reputation.gif";
import iuconImage5 from "../../assets/icons/annual-reports.gif";
import iuconImage6 from "../../assets/icons/logo-design.gif";
import iuconImage7 from "../../assets/icons/news.gif";
import iuconImage8 from "../../assets/icons/video.gif";

//odooApps

export default function Home() {
  /* ================= STATE ================= */
  const [activeTab, setActiveTab] = useState("All");
  const [activeTitle, setActiveTitle] = useState(0);
  const [activeService, setActiveService] = useState(1);

  const prevService = () => {
    setActiveService((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const nextService = () => {
    setActiveService((prev) => (prev < services.length - 1 ? prev + 1 : prev));
  };

  const morphVariants = {
    enter: {
      opacity: 0,
      filter: "blur(0px)",
      scale: 0.96,
    },
    center: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
    },
    exit: {
      opacity: 0,
      filter: "blur(02px)",
      scale: 1.04,
    },
  };

  /* ================= DATA ================= */
  const services = [
    { id: 1, title: "ERP and MRP Solution", image: Image1 },
    { id: 2, title: "Build your app", image: Image2 },
    { id: 3, title: "Design Solutions", image: Image3 },
    { id: 4, title: "Digital Marketing", image: Image4 },
  ];

  const marketingServices = [
    { id: 1, title: "Search Engine Optimization (SEO)", image: iuconImage1 },
    { id: 2, title: "Search Engine Marketing (SEM)", image: iuconImage2 },
    { id: 3, title: "Social Media Marketing (SMM)", image: iuconImage3 },
    { id: 4, title: "Online Reputation Management (ORM)", image: iuconImage4 },
    { id: 5, title: "Annual Report Design", image: iuconImage5 },
    { id: 6, title: "Logo and Collateral Design", image: iuconImage6 },
    { id: 7, title: "Magazine and Publications", image: iuconImage7 },
    { id: 8, title: "Video and Motions Graphic", image: iuconImage8 },
  ];

  /* ================= DERIVED ================= */

  const heroTitles = [
    "Empower Your Business with Fully Integrated Digital Solutions",
    "Simplify Operations. Accelerate Growth. All in One Platform",
    "Transform the Way You Work with Smart, Connected Systems",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTitle((prev) => (prev + 1) % heroTitles.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const filteredApps =
    activeTab === "All"
      ? odooApps
      : odooApps.filter((item) => item.category === activeTab);

  return (
    <main
      style={{ backgroundImage: `url(${bgImage})` }}
      className="min-h-screen pt-10 bg-center bg-no-repeat bg-cover"
    >
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pb-28">
        <div className="relative h-[460px] sm:h-[520px] md:h-[640px] bg-gradient-to-r">
          {/* HAND LEFT */}
          <motion.img
            src={handLeft}
            initial={{ opacity: 0, x: -120, rotate: 45 }}
            animate={{ opacity: 1, x: 0, rotate: 45 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="
                    absolute
              -left-52 sm:-left-40 md:-left-44
              bottom-3 sm:-bottom-7
              w-[360px] sm:w-[520px] md:w-[900px]
              translate-y-6 sm:translate-y-20 
              block
              pointer-events-none
            "
            alt="hand-left"
          />

          {/* HAND RIGHT */}
          <motion.img
            src={handRight}
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="
                absolute
          right-[-145px] sm:right-[-120px] md:right-0
          bottom-[-40px] sm:bottom-[-120px] md:-bottom-44
          w-[340px] sm:w-[500px] md:w-[850px]
          translate-y-6 sm:translate-y-20
          block
          pointer-events-none
              "
            alt="hand-right"
          />

          {/* CONTENT */}
          <div className="relative z-10 max-w-4xl px-5 mx-auto text-center pt-18 sm:pt-24">
            <div className="flex items-center justify-center gap-6 mb-5">
              {/* MYCROW LOGO */}
              <motion.img
                src={mycrowLogo}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="object-contain h-8 pr-4"
                alt="mycrow"
              />
              <div className="w-1 h-10 bg-purple-400"></div>

              {/* ODOO LOGO */}
              <motion.img
                src={LearningPatner}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="object-contain h-20"
                alt="Odoo Learning Partner"
              />
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold leading-tight sm:text-3xl md:text-3xl"
            >
              {/* MORPHING TITLE */}
              <span className="relative block overflow-hidden min-h-[110px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeTitle}
                    variants={morphVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 1.5,
                      ease: [0.4, 0, 0.2, 1], // premium easing
                    }}
                    className="absolute left-0 right-0 text-5xl l"
                  >
                    {heroTitles[activeTitle]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            {/* BUTTON */}
            <motion.a
              href="https://wa.me/628139300683?text=Halo%20Admin,%20saya%20ingin%20konsultasi"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex
  px-5 sm:px-10
  py-2 sm:py-3.5
  mt-10 sm:mt-14
  border-4
  text-xs sm:text-sm
  text-white
  bg-purple-600
  rounded-xl
  shadow
  hover:bg-purple-700
  transition"
            >
              Meet Our Expert
            </motion.a>
          </div>
        </div>
      </section>

      {/* ================= CONTENT GLASS CONTAINER ================= */}
      <section className="relative pt-10">
        <div className="px-5 mx-auto max-w-7xl">
          {/* GLASS CONTAINER */}
          <div
            className="
        relative
        bg-white
        backdrop-blur-2xl
        rounded-tl-[40px] rounded-tr-[40px] rounded-bl-none
        shadow-[40px_0_80px_rgba(0,0,0,0.15)]
        border border-white/40
        px-6 sm:px-10 md:px-16
        py-20
      "
          >
            {/* ================= SERVICES ================= */}
            <div className="mb-16">
              <h2 className="mb-6 text-base font-bold text-center text-purple-700 sm:text-3xl">
                Discover our product and service that you need
              </h2>

              <div className="relative max-w-6xl mx-auto">
                {/* MOBILE SERVICES */}
                <div className="grid grid-cols-1 gap-6 md:hidden">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="overflow-hidden bg-white shadow-lg rounded-2xl"
                    >
                      <div className="py-4 text-center text-white bg-purple-600">
                        {service.title}
                      </div>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="object-contain w-full h-56 p-4"
                      />
                    </div>
                  ))}
                </div>

                {/* ================= DESKTOP ================= */}
                <div className="relative block md:block">
                  {/* LEFT */}
                  <button
                    onClick={prevService}
                    disabled={activeService === 0}
                    className="absolute z-10 items-center justify-center hidden w-12 h-12 text-white -translate-x-1/2 -translate-y-1/2 bg-purple-400 rounded-full shadow-xl -left-5 md:flex top-1/2 disabled:opacity-40"
                  >
                    ‹
                  </button>

                  {/* RIGHT */}
                  <button
                    onClick={nextService}
                    disabled={activeService === services.length - 1}
                    className="absolute z-10 items-center justify-center hidden w-12 h-12 text-white translate-x-1/2 -translate-y-1/2 bg-purple-400 rounded-full shadow-xl -right-5 md:flex top-1/2 disabled:opacity-40"
                  >
                    ›
                  </button>

                  {/* CARDS */}
                  <div className="relative flex items-center justify-center h-[480px] px-20 overflow-hidden">
                    {services.map((service, index) => {
                      const offset = index - activeService;

                      return (
                        <div
                          key={service.id}
                          style={{
                            transform: `
                  translateX(${offset * 50}px)
                  scale(${index === activeService ? 1 : 0.85})
                `,
                            zIndex: 20 - Math.abs(offset),
                            opacity: Math.abs(offset) > 2 ? 0 : 1,
                          }}
                          className="
                absolute
                transition-all duration-500
                group
                relative
                h-[400px]
                w-[300px]
                bg-white/80
                backdrop-blur-xl
                rounded-[28px]
                border border-purple-200/60
                overflow-hidden
                shadow-lg
                hover:-translate-y-4
                hover:shadow-purple-500/30
                hover:shadow-2xl
              "
                        >
                          {/* GRADIENT GLOW */}
                          <div className="absolute inset-0 transition duration-500 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-transparent" />

                          {/* TITLE */}
                          <div className="relative z-10 py-5 text-lg font-semibold text-center text-white bg-gradient-to-r from-purple-600 to-blue-500">
                            {service.title}
                          </div>

                          {/* IMAGE */}
                          <div className="relative z-10 flex items-center justify-center h-[352px] p-6">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* ================= ODOO ================= */}
            <div className="mb-16">
              <h2 className="mb-6 text-base font-bold text-center text-purple-700 sm:mb-8 sm:text-3xl">
                All digital transformation initiative in one solutions
              </h2>

              <div
                className="
                      relative
                      p-6 pt-14
                      mx-4
                      backdrop-blur-sm
                      rounded-[24px]
                      shadow-2xl

                      sm:p-12 sm:pt-5 sm:mx-16 sm:rounded-[32px]
    "
              >
                {/* Logo mycrow */}
                <img
                  src={odooLogo}
                  alt="Odoo Learning Partner"
                  className="object-contain h-5 pl-12 sm:h-8 sm:mt-14"
                />
                {/* Logo Odoo */}
                <img
                  src={LearningPatner}
                  alt="Odoo Learning Partner"
                  className="absolute object-contain h-32 top-4 right-4 sm:top-10 sm:right-4 sm:h-24 sm:mr-16 sm:mt-3"
                />

                {/* TABS */}
                <div
                  className="
  flex flex-wrap justify-center
  gap-1.5 sm:gap-2
  mt-6 sm:mt-20
  mb-6 sm:mb-12
  px-2 sm:px-10
  text-[11px] sm:text-lg
"
                >
                  {odooTabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`
        px-3 py-1.5
        sm:px-5 sm:py-2
        rounded-full
        whitespace-nowrap
        transition-all duration-200
        text-[11px] sm:text-base
        ${
          activeTab === tab
            ? "bg-purple-600 text-white shadow-lg"
            : "text-gray-500 hover:text-purple-600 hover:bg-purple-50"
        }
      `}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* CONTENT */}
                <div className="grid grid-cols-4 gap-4 px-2 py-4 sm:grid-cols-4 sm:gap-4 sm:px-1 sm:py-5 md:grid-cols-4 lg:grid-cols-8 ">
                  {filteredApps.map((app) => (
                    <div
                      key={app.id}
                      className="flex flex-col items-center justify-center h-16 transition bg-white shadow rounded-xl hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:rounded-2xl"
                    >
                      <img
                        src={app.image}
                        alt={app.title}
                        className="object-contain w-10 h-10 sm:w-14 sm:h-14"
                      />
                    </div>
                  ))}
                </div>

                {/* EMPTY STATE */}
                {filteredApps.length === 0 && (
                  <p className="mt-8 text-xs text-center text-gray-400 sm:text-sm sm:mt-10">
                    No application found
                  </p>
                )}
              </div>
            </div>

            {/* ================= MARKETING ================= */}
            <div className="py-16 sm:py-24">
              <h2 className="mb-10 text-base font-bold text-center text-purple-700 sm:mb-14 sm:text-3xl">
                Marketing strategy and Design Service Solutions
              </h2>

              <div className="grid max-w-6xl grid-cols-2 px-6 mx-auto mt-16 gap-x-6 gap-y-14 sm:px-10 sm:grid-cols-2 md:grid-cols-4 md:gap-x-12 md:gap-y-20 md:mt-24">
                {marketingServices.map((item) => (
                  <div
                    key={item.id}
                    className="
          relative
          flex flex-col items-center justify-center
          h-[130px] px-4
          text-center
          bg-white border border-purple-300
          rounded-2xl
          transition
          hover:-translate-y-1 hover:shadow-lg

          md:h-[150px] md:px-6
        "
                  >
                    {/* ICON FLOATING */}
                    <div className="absolute flex items-center justify-center w-20 h-20 bg-white rounded-full -top-8 md:-top-10 md:w-20 md:h-20">
                      <div className="flex items-center justify-center w-20 h-20 rounded-xl">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="object-contain w-20 h-20"
                        />
                      </div>
                    </div>

                    {/* TEXT */}
                    <p className="mt-6 text-sm font-medium leading-snug text-purple-700 md:mt-8 md:text-xl">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
