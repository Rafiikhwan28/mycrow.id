import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mycrowLogo from "../../assets/mycrow_logo_text.png";
import handLeft from "../../assets/hand-gesture-pointing-invisible-screen.png";
import handRight from "../../assets/Hand_cyborg.png";
import bgImage from "../../assets/background.jpg";
import odooLogo from "../../assets/odoo_logo.png";
import LearningPatner from "../../assets/odoo_learning_partner_rgb.png";
import { odooApps, odooTabs } from "../../data/LandingPage/odooApps.js";

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
  const [servicePage, setServicePage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [activeTitle, setActiveTitle] = useState(0);

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
    {
      id: 1,
      title: "Search Engine Optimization (SEO)",
      image: iuconImage1,
      deskripsi:
        "Website optimization strategies designed to improve organic search rankings, making your website more visible and accessible to your target audience.",
    },
    {
      id: 2,
      title: "Search Engine Marketing (SEM)",
      image: iuconImage2,
      deskripsi:
        "Paid marketing services through search engines to reach the right audience quickly and drive higher traffic, leads, and conversions.",
    },
    {
      id: 3,
      title: "Social Media Marketing (SMM)",
      image: iuconImage3,
      deskripsi:
        "Strategic social media management to increase brand awareness, engagement, and meaningful interactions with your audience.",
    },
    {
      id: 4,
      title: "Online Reputation Management (ORM)",
      image: iuconImage4,
      deskripsi:
        "Professional management of your brand’s online presence to maintain a positive, trustworthy, and credible public image.",
    },
    {
      id: 5,
      title: "Annual Report Design",
      image: iuconImage5,
      deskripsi:
        "Creative and professional annual report designs that present company performance in a clear, visual, and impactful way.",
    },
    {
      id: 6,
      title: "Logo and Collateral Design",
      image: iuconImage6,
      deskripsi:
        "Custom logo and brand collateral designs that ensure consistency, creativity, and a strong visual identity.",
    },
    {
      id: 7,
      title: "Magazine and Publications",
      image: iuconImage7,
      deskripsi:
        "Modern and visually appealing magazine and publication designs that communicate information clearly and effectively.",
    },
    {
      id: 8,
      title: "Video and Motions Graphic",
      image: iuconImage8,
      deskripsi:
        "Creative video and motion graphic production to enhance visual storytelling and deliver your brand message dynamically.",
    },
  ];

  /* ================= DERIVED ================= */
  const ITEMS_PER_PAGE_DESKTOP = 3;
  const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE_DESKTOP);

  const visibleServices = services.slice(
    servicePage * ITEMS_PER_PAGE_DESKTOP,
    servicePage * ITEMS_PER_PAGE_DESKTOP + ITEMS_PER_PAGE_DESKTOP,
  );

  // ===== SERVICE SLIDER CONFIG =====
  const VISIBLE = 3;
  const CARD_WIDTH = 300;
  const GAP = 24;

  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = kanan, -1 = kiri

  const total = services.length;

  const next = () => {
    setDirection(1);
    setPageIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setDirection(-1);
    setPageIndex((prev) => (prev - 1 + total) % total);
  };

  const visibleItems = Array.from({ length: VISIBLE }, (_, i) => {
    return services[(pageIndex + i) % total];
  });

  const getItemsPerPage = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3; // desktop
    if (window.innerWidth >= 640) return 2; // tablet
    return 1; // mobile
  };

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

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setServicePage(0); // reset biar tidak out of range
    };

    handleResize(); // ⬅️ PENTING: init saat pertama render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //fungsi odoo

  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(0);

  // FILTER DATA (DATA ASLI TIDAK DIUBAH)
  const filteredApps =
    activeTab === "All"
      ? odooApps.filter((app) => app.id)
      : odooApps.filter((app) => app.category === activeTab && app.id);

  // PAGINATION
  const totalPagesOdoo = Math.ceil(filteredApps.length / ITEMS_PER_PAGE);

  const paginatedApps = filteredApps.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  // RESET PAGE SAAT TAB BERUBAH
  useEffect(() => {
    setCurrentPage(0);
  }, [activeTab]);

  return (
    <main
      style={{ backgroundImage: `url(${bgImage})` }}
      className="min-h-screen pt-10 bg-center bg-no-repeat bg-cover"
    >
      {/* ================= HERO ================= */}
      <section className="relative pt-5 overflow-hidden pb-16 sm:pb-28">
        <div className="relative h-[380px] sm:h-[460px] md:h-[640px] bg-gradient-to-r">
          {/* HAND LEFT */}
          <motion.img
            src={handLeft}
            initial={{ opacity: 0, x: -120, rotate: 45 }}
            animate={{ opacity: 1, x: 0, rotate: 45 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="
                    absolute
              -left-28 sm:-left-40 md:-left-44
              bottom-0 sm:bottom-3 md:bottom-3
              w-[220px] sm:w-[360px] md:w-[900px]
              translate-y-4 sm:translate-y-6 md:translate-y-20 
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
          right-[-80px] sm:right-[-120px] md:right-0
          bottom-[-20px] sm:bottom-[-40px] md:-bottom-44
          w-[200px] sm:w-[340px] md:w-[850px]
          translate-y-4 sm:translate-y-6 md:translate-y-20
          block
          pointer-events-none
              "
            alt="hand-right"
          />

          {/* CONTENT */}
          <div className="relative z-10 max-w-4xl px-5 mx-auto text-center pt-10 sm:pt-18 md:pt-18">
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-5">
              {/* MYCROW LOGO */}
              <motion.img
                src={mycrowLogo}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="object-contain h-6 sm:h-8 pr-2 sm:pr-4"
                alt="mycrow"
              />

              {/* ODOO LOGO */}
              <motion.img
                src={LearningPatner}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="object-contain h-12 sm:h-20"
                alt="Odoo Learning Partner"
              />
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-bold leading-tight"
            >
              {/* MORPHING TITLE */}
              <span className="relative block overflow-hidden min-h-[72px] sm:min-h-[110px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeTitle}
                    variants={morphVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 1.5,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="absolute left-0 right-0 text-2xl sm:text-4xl md:text-5xl"
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
  px-5 sm:px-8
  py-2 sm:py-3.5
  mt-6 sm:mt-14
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
      <section className="relative pt-4 sm:pt-10">
        <div className="px-3 sm:px-5 mx-auto max-w-7xl">
          {/* GLASS CONTAINER */}
          <div
            className="
        relative
        bg-white
        backdrop-blur-2xl
        rounded-tl-[28px] rounded-tr-[28px] sm:rounded-tl-[40px] sm:rounded-tr-[40px] rounded-bl-none
        shadow-[40px_0_80px_rgba(0,0,0,0.15)]
        border border-white/40
        px-4 sm:px-6 md:px-16
        py-10 sm:py-20
      "
          >
            {/* ================= SERVICES ================= */}
            <div data-section className="mb-10 sm:mb-16">
              <h2 className="mb-5 sm:mb-6 text-xl sm:text-3xl font-bold text-center text-purple-700">
                Discover Our Product and Service
              </h2>

              {/* mobile: horizontal scroll cards */}
              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {services.map((service) => (
                  <div key={service.id} className="snap-center shrink-0 w-[220px] rounded-2xl border border-purple-200/60 bg-white/80 shadow-md overflow-hidden">
                    <div className="py-3 text-xs font-semibold text-center text-white bg-gradient-to-r from-purple-600 to-blue-500">{service.title}</div>
                    <div className="flex items-center justify-center h-40 p-4">
                      <img src={service.image} alt={service.title} className="object-contain w-full h-full" />
                    </div>
                  </div>
                ))}
              </div>

              {/* desktop: carousel slider */}
              <div className="relative max-w-6xl mx-auto">
                <div className="relative hidden md:block">
                  {/* LEFT */}
                  <button
                    onClick={next}
                    className="absolute z-20 hidden w-12 h-12 text-purple-500 -translate-x-1/2 -translate-y-1/2 left-10 text-8xl md:flex top-1/2"
                  >
                    ‹
                  </button>

                  {/* RIGHT */}
                  <button
                    onClick={prev}
                    className="absolute z-20 hidden w-12 h-12 text-purple-500 translate-x-1/2 -translate-y-1/2 right-10 text-8xl md:flex top-1/2"
                  >
                    ›
                  </button>

                  {/* VIEWPORT */}
                  <div className="px-20 overflow-hidden">
                    <motion.div
                      layout
                      className="flex justify-center gap-6 py-20"
                      transition={{
                        type: "spring",
                        stiffness: 90,
                        damping: 20,
                        mass: 0.8,
                      }}
                    >
                      {visibleItems.map((service, index) => {
                        const isCenter = index === 1;

                        return (
                          <motion.div
                            key={service.id}
                            layout
                            animate={{
                              scale: isCenter ? 1.12 : 0.92,
                              opacity: isCenter ? 1 : 0.8,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 120,
                              damping: 18,
                              mass: 0.9,
                            }}
                            className="w-[300px] shrink-0"
                            style={{
                              filter: isCenter ? "blur(0px)" : "blur(0.1px)",
                            }}
                          >
                            <div
                              className="
                              border-purple-600
                                group relative
                                h-[400px] w-[300px]
                                rounded-[28px]
                                border border-purple-200/60
                                bg-white/80 backdrop-blur-xl
                                shadow-lg overflow-hidden
                                transition-transform duration-300 hover:-translate-y-2
                              "
                              style={{
                                boxShadow: isCenter
                                  ? "0 35px 90px rgba(124,58,237,0.35)"
                                  : "0 12px 30px rgba(0,0,0,0.15)",
                              }}
                            >
                              {/* TITLE */}
                              <div className="py-5 text-lg font-semibold text-center text-white bg-gradient-to-r from-purple-600 to-blue-500">
                                {service.title}
                              </div>

                              {/* IMAGE */}
                              <div className="flex items-center justify-center h-[352px] p-6">
                                <img
                                  src={service.image}
                                  alt={service.title}
                                  className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2"
                                />
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-10 sm:mb-16">
              <h2 className="mb-5 sm:mb-8 text-xl sm:text-3xl font-bold text-center text-purple-700">
                All digital transformation initiative in one solutions
              </h2>

              <div
                className="
      relative
      p-4 pt-12
      mx-0 sm:mx-4
      backdrop-blur-sm
      rounded-[18px]
      shadow-2xl
      sm:p-6 sm:pt-14 md:p-12 md:pt-5 md:mx-16 md:rounded-[32px]
    "
              >
                {/* LOGO MYCROW */}
                <img
                  src={mycrowLogo}
                  alt="Mycrow"
                  className="object-contain h-7 sm:h-10 pl-2 sm:pl-12 md:mt-12"
                />

                {/* LOGO ODOO */}
                <img
                  src={odooLogo}
                  alt="Odoo"
                  className="absolute object-contain h-7 sm:h-10 top-3 right-3 sm:top-4 sm:right-4 md:top-10 md:h-12 md:mr-16 md:mt-3"
                />

                {/* ================= TABS ================= */}
                <div
                  className="
    flex flex-nowrap overflow-x-auto
    gap-1 sm:gap-1.5 md:gap-2
    mt-5 sm:mt-6 md:mt-20
    mb-4 sm:mb-6 md:mb-12
    px-1 sm:px-2 md:px-10
    text-[11px] sm:text-sm md:text-lg
    [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
  "
                >
                  {odooTabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`
                        m-0.5 sm:m-1 md:m-2
        flex-shrink-0
        px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-5 md:py-2
        rounded-full
        whitespace-nowrap
        transition-all duration-200
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

                {/* ================= CONTENT (3x3 GRID) ================= */}
                <div className="grid grid-cols-1 gap-4 sm:gap-6 px-1 sm:px-2 py-4 sm:grid-cols-2 lg:grid-cols-3 sm:px-6">
                  {paginatedApps.map((app) => (
                    <div
                      key={app.id}
                      className="flex flex-col p-4 transition bg-white shadow-lg h-64 sm:h-72 md:h-80 rounded-2xl hover:-translate-y-1 hover:shadow-2xl"
                    >
                      {/* IMAGE */}
                      {app.image && (
                        <img
                          src={app.image}
                          alt={app.title}
                          className="object-contain w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4"
                        />
                      )}

                      {/* TITLE */}
                      <h3 className="mb-2 text-xs sm:text-sm font-semibold text-center text-black md:text-lg">
                        {app.title}
                      </h3>

                      {/* DESKRIPSI */}
                      <p className="flex-grow text-xs text-center text-gray-500 sm:text-sm">
                        {app.deskripsi}
                      </p>
                    </div>
                  ))}
                </div>

                {/* ================= SLIDER NAVIGATION ================= */}
                {filteredApps.length > ITEMS_PER_PAGE && (
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(p - 1, 0))}
                      disabled={currentPage === 0}
                      className="px-4 py-1.5 text-sm rounded-full border transition disabled:opacity-40 hover:bg-purple-50"
                    >
                      Prev
                    </button>

                    <span className="text-sm text-gray-500">
                      {currentPage + 1} / {totalPagesOdoo}
                    </span>

                    <button
                      onClick={() =>
                        setCurrentPage((p) =>
                          Math.min(p + 1, totalPagesOdoo - 1),
                        )
                      }
                      disabled={currentPage === totalPagesOdoo - 1}
                      className="px-4 py-1.5 text-sm rounded-full border transition disabled:opacity-40 hover:bg-purple-50"
                    >
                      Next
                    </button>
                  </div>
                )}

                {/* ================= EMPTY STATE ================= */}
                {filteredApps.length === 0 && (
                  <p className="mt-8 text-xs text-center text-gray-400 sm:text-sm sm:mt-10">
                    No application found
                  </p>
                )}
              </div>
            </div>

            {/* ================= MARKETING ================= */}
            <div className="py-10 sm:py-16 md:py-24">
              <h2 className="mb-10 text-lg sm:text-2xl md:text-3xl font-bold text-center text-purple-700 sm:mb-14">
                Marketing Strategy and Design Service Solutions
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 max-w-6xl px-3 sm:px-6 md:px-6 mx-auto mt-12 sm:mt-16 gap-x-4 gap-y-14 sm:gap-x-6 sm:gap-y-16 md:gap-x-12 md:gap-y-20 md:mt-24">
                {marketingServices.map((item) => (
                  <div
                    key={item.id}
                    className="relative flex flex-col p-3 sm:p-4 transition bg-white shadow-lg min-h-[200px] sm:h-72 md:h-80 rounded-2xl hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* ICON FLOATING */}
                    <div className="absolute flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-full -top-7 sm:-top-8 md:-top-10 left-3 sm:left-auto">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                      />
                    </div>

                    {/* TEXT */}
                    <p className="mt-5 sm:mt-6 md:mt-8 text-xs sm:text-xs md:text-xl font-medium leading-snug text-black">
                      {item.title}
                    </p>
                    {/* DESKRIPSI */}
                    <p className="flex-grow mt-2 sm:my-3 text-xs text-gray-500 sm:text-sm md:text-base line-clamp-4 sm:line-clamp-none">
                      {item.deskripsi}
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
