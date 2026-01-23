import { useState, useMemo } from "react";
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
import iuconImage1 from "../../assets/icons/social-media.gif";
import iuconImage2 from "../../assets/icons/seo.gif";
import iuconImage3 from "../../assets/icons/search-engine.gif";
import iuconImage4 from "../../assets/icons/reputation.gif";
import iuconImage5 from "../../assets/icons/news.gif";
import iuconImage6 from "../../assets/icons/logo-design.gif";
import iuconImage7 from "../../assets/icons/annual-reports.gif";
import iuconImage8 from "../../assets/icons/startup_4159353.png";

//odooApps

export default function Home() {
  /* ================= STATE ================= */
  const [activeTab, setActiveTab] = useState("All");
  const [servicePage, setServicePage] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: "easeIn",
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
  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE);
  const visibleServices = services.slice(
    servicePage * ITEMS_PER_PAGE,
    servicePage * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

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
      <section className="relative overflow-hidden">
        <div className="relative h-[460px] sm:h-[520px] md:h-[640px] bg-gradient-to-r">
          {/* HAND LEFT */}
          <motion.img
            src={handLeft}
            initial={{ opacity: 0, x: -120, rotate: 45 }}
            animate={{ opacity: 1, x: 0, rotate: 45 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className=" absolute -top-1 -left-44 bottom-0 hidden md:block w-[900px] translate-y-20"
            alt="hand-left"
          />

          {/* HAND RIGHT */}
          <motion.img
            src={handRight}
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="absolute -bottom-24 right-0 hidden md:block w-[850px] translate-y-20 "
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
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="px-7 my-20 py-2.5  mt-7 text-sm text-white bg-purple-600 rounded-full shadow hover:bg-purple-700 transition"
            >
              Meet Our Expert
            </motion.button>

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
      <section className="relative py-32">
        <div className="px-5 mx-auto max-w-7xl">
          {/* GLASS CONTAINER */}
          <div
            className="
        relative
        bg-white
        backdrop-blur-2xl
        rounded-[40px]
        shadow-[0_40px_120px_rgba(0,0,0,0.15)]
        border border-white/40
        px-6 sm:px-10 md:px-16
        py-20
      "
          >
            {/* ================= SERVICES ================= */}
            <div className="mb-32">
              <h2 className="mb-5 text-sm font-medium text-center text-purple-700 sm:text-3xl">
                Discover our product and service that you need
              </h2>

              <div className="relative max-w-6xl mx-auto">
                {/* ARROWS */}
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

                <div className="overflow-hidden">
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
                          className="
            relative
            h-[400px]
            w-[300px]
            overflow-hidden
            bg-white/70
            rounded-[28px]
            transition
            hover:-translate-y-2
          "
                        >
                          <div className="py-5 text-lg font-semibold text-center text-white bg-gradient-to-r from-purple-600 to-blue-500">
                            {service.title}
                          </div>

                          <div className="relative flex items-center justify-center h-[352px] bg-gradient-to-b from-purple-50 to-white">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="object-contain max-w-full max-h-full transition hover:scale-105"
                            />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex justify-center gap-2 mt-10">
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
            <div className="mb-32">
              <h2 className="mb-16 text-sm font-medium font-bold text-center text-purple-700 sm:text-3xl">
                All digital transformation initiative in one solutions
              </h2>

              <div className="p-10 bg-white/70 rounded-[32px] shadow-xl">
                {/* TABS */}
                <div className="flex flex-wrap justify-center gap-4 mb-12 text-xs sm:text-sm">
                  {odooTabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-5 py-1.5 rounded-full transition ${
                        activeTab === tab
                          ? "bg-purple-600 text-white shadow-lg"
                          : "text-gray-500 hover:text-purple-600 hover:bg-purple-50"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* CONTENT */}
                <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8">
                  {filteredApps.map((app) => (
                    <div
                      key={app.id}
                      className="flex flex-col items-center justify-center gap-2 transition bg-white shadow h-28 rounded-2xl hover:-translate-y-1 hover:shadow-lg"
                    >
                      <img
                        src={app.image}
                        alt=""
                        className="object-contain w-12 h-12 "
                      />
                    </div>
                  ))}
                </div>

                {/* EMPTY STATE */}
                {filteredApps.length === 0 && (
                  <p className="mt-10 text-sm text-center text-gray-400">
                    No application found
                  </p>
                )}
              </div>
            </div>

            {/* ================= MARKETING ================= */}
            <div className="py-24">
              <h2 className="mb-16 text-sm font-medium font-bold text-center text-purple-700 sm:text-3xl">
                Marketing strategy and Design Service Solutions
              </h2>

              <div className="grid max-w-6xl mx-auto gap-x-12 gap-y-20 sm:grid-cols-2 md:grid-cols-4">
                {marketingServices.map((item) => (
                  <div
                    key={item.id}
                    className="
          relative flex flex-col items-center justify-center
          h-[150px] px-6 text-center
          bg-white border border-purple-300
          rounded-2xl
        "
                  >
                    {/* ICON FLOATING */}
                    <div className="absolute flex items-center justify-center w-20 h-20 bg-white border rounded-full -top-10">
                      <div className="flex items-center justify-center w-12 h-12 bg-purple-50 rounded-xl">
                        <img src={item.image} alt={item.title} className="" />
                      </div>
                    </div>

                    {/* TEXT */}
                    <p className="text-sm font-medium leading-relaxed text-purple-700">
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
