import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mycrowLogo from "../../assets/mycrow_logo_text.png";
import handLeft from "../../assets/hand-gesture-pointing-invisible-screen.png";
import handRight from "../../assets/Hand_cyborg.png";
import bgImage from "../../assets/background.jpg";
import odooLogo from "../../assets/mycrow_logo_text.png";

// Images
import Image1 from "../../assets/Home-service-image/89826.png";
import Image2 from "../../assets/Home-service-image/55365.png";
import Image3 from "../../assets/Home-service-image/161940.png";

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
  const [servicePage, setServicePage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.92,
      filter: "blur(6px)",
    }),

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        x: { type: "spring", stiffness: 260, damping: 28 },
        scale: { type: "spring", stiffness: 220, damping: 25 },
        opacity: { duration: 0.3 },
        filter: { duration: 0.25 },
      },
    },

    exit: (direction) => ({
      x: direction > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.92,
      filter: "blur(6px)",
      transition: {
        x: { type: "spring", stiffness: 260, damping: 28 },
        scale: { duration: 0.2 },
        opacity: { duration: 0.2 },
        filter: { duration: 0.2 },
      },
    }),
  };

  /* ================= DATA ================= */
  const services = [
    { id: 1, title: "ERP and MRP Solution", image: Image1 },
    { id: 2, title: "Build your app", image: Image2 },
    { id: 3, title: "Design Solutions", image: Image3 },
    { id: 4, title: "Cloud Integration", image: Image1 },
    { id: 5, title: "Digital Consulting", image: Image2 },
  ];

  const odooTabs = [
    "All",
    "Sales",
    "Finance",
    "Inventory",
    "Manufacturing",
    "Human Resources",
    "Website",
  ];

  const odooApps = [
    { id: 1, title: "CRM", category: "Sales", image: iuconImage1 },
    { id: 2, title: "Sales", category: "Sales", image: iuconImage2 },
    { id: 3, title: "Accounting", category: "Finance", image: iuconImage3 },
    { id: 4, title: "Invoicing", category: "Finance", image: iuconImage4 },
    { id: 5, title: "Inventory", category: "Inventory", image: iuconImage5 },
    {
      id: 6,
      title: "Manufacturing",
      category: "Manufacturing",
      image: iuconImage6,
    },
    { id: 7, title: "MRP", category: "Manufacturing", image: iuconImage7 },
    {
      id: 8,
      title: "Employees",
      category: "Human Resources",
      image: iuconImage8,
    },
    {
      id: 9,
      title: "Recruitment",
      category: "Human Resources",
      image: iuconImage1,
    },
    { id: 10, title: "Website", category: "Website", image: iuconImage3 },
    { id: 11, title: "eCommerce", category: "Website", image: iuconImage4 },
    { id: 12, title: "CRM", category: "Sales", image: iuconImage1 },
    { id: 13, title: "Sales", category: "Sales", image: iuconImage2 },
    { id: 14, title: "Accounting", category: "Finance", image: iuconImage3 },
    { id: 15, title: "Invoicing", category: "Finance", image: iuconImage4 },
    { id: 16, title: "Inventory", category: "Inventory", image: iuconImage5 },
    {
      id: 17,
      title: "Manufacturing",
      category: "Manufacturing",
      image: iuconImage6,
    },
    { id: 18, title: "MRP", category: "Manufacturing", image: iuconImage7 },
    {
      id: 19,
      title: "Employees",
      category: "Human Resources",
      image: iuconImage8,
    },
    {
      id: 20,
      title: "Recruitment",
      category: "Human Resources",
      image: iuconImage1,
    },
    { id: 21, title: "Website", category: "Website", image: iuconImage3 },
    { id: 22, title: "eCommerce", category: "Website", image: iuconImage4 },
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
  const ITEMS_PER_PAGE_DESKTOP = 3;
  const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE_DESKTOP);

  const visibleServices = services.slice(
    servicePage * ITEMS_PER_PAGE_DESKTOP,
    servicePage * ITEMS_PER_PAGE_DESKTOP + ITEMS_PER_PAGE_DESKTOP,
  );

  const MOBILE_VISIBLE = 3; // 3 card kelihatan
  const mobileCardWidth = 100 / MOBILE_VISIBLE; // %
  const maxMobileIndex = services.length - MOBILE_VISIBLE;

  const nextMobile = () => {
    setMobileIndex((i) => Math.min(i + 1, maxMobileIndex));
  };

  const prevMobile = () => {
    setMobileIndex((i) => Math.max(i - 1, 0));
  };

  const getItemsPerPage = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3; // desktop
    if (window.innerWidth >= 640) return 2; // tablet
    return 1; // mobile
  };

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setServicePage(0); // reset biar tidak out of range
    };

    handleResize(); // ⬅️ PENTING: init saat pertama render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredApps = useMemo(() => {
    if (activeTab === "All") return odooApps;
    return odooApps.filter((app) => app.category === activeTab);
  }, [activeTab, odooApps]);

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
              bottom-3 sm:bottom-0
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
          bottom-[-40px] sm:bottom-[-120px] md:-bottom-32
          w-[340px] sm:w-[500px] md:w-[850px]
          translate-y-6 sm:translate-y-20
          block
          pointer-events-none
              "
            alt="hand-right"
          />

          {/* CONTENT */}
          <div className="relative z-10 max-w-4xl px-5 mx-auto text-center pt-28 sm:pt-32">
            {/* MYCROW LOGO */}
            <motion.img
              src={mycrowLogo}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-4 h-7 sm:h-8"
              alt="mycrow"
            />

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl font-bold sm:text-4xl md:text-4xl"
            >
              Make Your Digital Transformation Succeed!
              <br />
              <span className="font-semibold text-gray-700">
                One solution covers all needs
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
  px-5 sm:px-7
  py-2 sm:py-2.5
  mt-10 sm:mt-14
  text-xs sm:text-sm
  text-white
  bg-purple-600
  rounded-full
  shadow
  hover:bg-purple-700
  transition"
            >
              Meet Our Expert
            </motion.a>

            {/* ODOO LOGO */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-center mt-6"
            >
              <img
                src={odooLogo}
                alt="Odoo Learning Partner"
                className="object-contain h-6 sm:h-7"
              />
              <span className="mt-1 text-xs text-gray-500 sm:text-sm">
                Learning Partner
              </span>
            </motion.div>
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
                {/* ================= MOBILE SLIDER ================= */}
                <div className="relative md:hidden">
                  {/* LEFT */}
                  <button
                    onClick={prevMobile}
                    className="absolute z-10 w-8 h-8 text-white -translate-y-1/2 bg-purple-500 rounded-full shadow -left-2 top-1/2"
                  >
                    ‹
                  </button>

                  {/* RIGHT */}
                  <button
                    onClick={nextMobile}
                    className="absolute z-10 w-8 h-8 text-white -translate-y-1/2 bg-purple-500 rounded-full shadow -right-2 top-1/2"
                  >
                    ›
                  </button>

                  {/* VIEWPORT */}
                  <div className="overflow-hidden ">
                    <motion.div
                      animate={{
                        x: `-${mobileIndex * mobileCardWidth}%`,
                      }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className="flex gap-14"
                    >
                      {services.map((service) => (
                        <div
                          key={service.id}
                          style={{ width: `${mobileCardWidth}%` }}
                          className="px-2 shrink-0"
                        >
                          <div
                            className="
    flex flex-col
    h-[260px]
    w-[130px]
    bg-white
    border border-purple-200
    rounded-3xl
    overflow-hidden
    shadow-sm
  "
                          >
                            {/* HEADER */}
                            <div className="px-2 py-2 text-[11px] font-semibold text-center text-white bg-gradient-to-r from-purple-600 to-blue-500">
                              {service.title}
                            </div>

                            {/* IMAGE */}
                            <div className="flex items-center justify-center flex-1 p-3">
                              <img
                                src={service.image}
                                alt={service.title}
                                className="object-contain w-full h-full"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* ================= DESKTOP (TETAP, TIDAK DIUBAH) ================= */}
                <div className="hidden md:block">
                  <button
                    onClick={() => {
                      setDirection(-1);
                      setServicePage((p) => (p > 0 ? p - 1 : p));
                    }}
                    disabled={servicePage === 0}
                    className="absolute left-0 z-10 items-center justify-center hidden w-12 h-12 text-white -translate-x-1/2 -translate-y-1/2 bg-purple-400 rounded-full shadow-xl md:flex top-1/2 disabled:opacity-40"
                  >
                    ‹
                  </button>

                  <button
                    onClick={() => {
                      setDirection(1);
                      setServicePage((p) => (p < totalPages - 1 ? p + 1 : p));
                    }}
                    disabled={servicePage === totalPages - 1}
                    className="absolute right-0 z-10 items-center justify-center hidden w-12 h-12 text-white translate-x-1/2 -translate-y-1/2 bg-purple-400 rounded-full shadow-xl md:flex top-1/2 disabled:opacity-40"
                  >
                    ›
                  </button>

                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={servicePage}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="grid justify-center gap-6 px-20 py-20 md:grid-cols-3"
                    >
                      {visibleServices.map((service) => (
                        <div
                          key={service.id}
                          className="h-[400px] w-[300px] bg-white rounded-[28px] border-2 border-purple-200 overflow-hidden"
                        >
                          <div className="py-5 text-lg font-semibold text-center text-white bg-gradient-to-r from-purple-600 to-blue-500">
                            {service.title}
                          </div>

                          <div className="flex items-center justify-center h-[352px]">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="object-contain w-full h-full"
                            />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* ================= PAGINATION ================= */}
                <div className="flex justify-center gap-2 mt-8">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <span
                      key={i}
                      className={`w-2.5 h-2.5 rounded-full ${
                        i === servicePage ? "bg-purple-600" : "bg-purple-300/50"
                      }`}
                    />
                  ))}
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
                {/* Logo Odoo */}
                <img
                  src={odooLogo}
                  alt="Odoo Learning Partner"
                  className="absolute object-contain h-5 top-4 right-4 sm:top-10 sm:right-4 sm:h-7 sm:mr-16 sm:mt-3"
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
                        alt=""
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
