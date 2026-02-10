import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import youtube from "../../assets/icons/youtube.png";
import instagram from "../../assets/icons/instagram.png";
import facebook from "../../assets/icons/facebook.png";
import mycrowLogo from "../../assets/logo_putih-01.png";

import { navbarData } from "../../data/navbar.js";

export default function Footer() {
  /* ================= ANIMATION ================= */
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  /* ================= SOCIAL ================= */
  const socials = [
    { id: 1, src: youtube, alt: "YouTube", href: "https://youtube.com" },
    { id: 2, src: instagram, alt: "Instagram", href: "https://instagram.com" },
    { id: 3, src: facebook, alt: "Facebook", href: "https://facebook.com" },
  ];

  /* ================= PATH BUILDER ================= */
  const buildPath = (menu, section, item) => {
    if (section?.sectionPath) {
      return `${menu.basePath}/${section.sectionPath}/${item.slug}`;
    }
    return `${menu.basePath}/${item.slug}`;
  };

  console.log("NAVBAR DATA:", navbarData);

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      className="w-full text-white bg-gradient-to-r from-purple-700 to-sky-500 rounded-t-[40px]"
    >
      <div className="px-6 py-20 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-7">
          {/* ================= COMPANY INFO ================= */}
          <motion.div variants={fadeUp} className="space-y-4 lg:col-span-2">
            <img src={mycrowLogo} alt="MyCrow" className="h-7 md:h-8" />

            <p className="text-xs font-semibold tracking-wide opacity-90">
              PT Mycrow Digital Indonesia
            </p>

            <p className="max-w-sm text-xs leading-relaxed opacity-85">
              Jl. Bintaro Raya No.8, Kebayoran Lama,
              <br />
              Kota Jakarta Selatan, DKI Jakarta
            </p>

            <div className="space-y-1 text-xs opacity-85">
              <p>www.mycrow.id</p>
              <p>mustain@mycrow.id</p>
            </div>

            <div className="flex pt-4">
              {socials.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="w-12 h-12 p-2 mr-3 transition rounded-full shadow-sm hover:bg-white/10"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="object-contain w-full h-full"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ================= MENUS ================= */}
          {Object.entries(navbarData).map(([key, menu]) => {
            // HANYA tampilkan menu yang relevan di footer
            if (!menu.sections && menu.type === "link") return null;

            return (
              <motion.div key={key} variants={fadeUp}>
                <h3 className="mb-3 text-xs font-semibold tracking-widest uppercase opacity-90">
                  {menu.label}
                </h3>

                <ul className="space-y-2 text-xs leading-relaxed opacity-85">
                  {/* CASE 1: MENU LINK LANGSUNG (Company) */}
                  {menu.type === "link" && (
                    <li>
                      <Link
                        to={menu.basePath}
                        className="transition hover:underline hover:opacity-100"
                      >
                        About
                      </Link>
                    </li>
                  )}

                  {/* CASE 2: MENU DROPDOWN SEDERHANA (Knowledge) */}
                  {menu.type === "dropdown" &&
                    menu.sections?.map((item) => (
                      <li key={item.slug}>
                        <Link
                          to={`${menu.basePath}/${item.slug}`}
                          className="transition hover:underline hover:opacity-100"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}

                  {/* CASE 3: MENU MEGA / BERTINGKAT (Solutions dll – backward safe) */}
                  {menu.sections?.some((s) => s.items) &&
                    menu.sections.map((section) =>
                      section.items?.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={
                              section.sectionPath
                                ? `${menu.basePath}/${section.sectionPath}/${item.slug}`
                                : `${menu.basePath}/${item.slug}`
                            }
                            className="transition hover:underline hover:opacity-100"
                          >
                            {item.title}
                          </Link>
                        </li>
                      )),
                    )}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.footer>
  );
}
