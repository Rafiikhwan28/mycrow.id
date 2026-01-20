import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/mycrow_logo.png";
import { navbarData } from "../../data/navbar";

/* ================= LINK BUILDER ================= */
const buildLink = (menu, section, item) => {
  if (section.sectionPath) {
    return `${menu.basePath}/${section.sectionPath}/${item.slug}`;
  }
  return `${menu.basePath}/${item.slug}`;
};

/* ================= TRANSLATION ================= */
const translations = {
  EN: {
    topBar: "Make it success your digital transformation!",
    explore: "Explore solutions",
    contact: "Contact Us",
  },
  ID: {
    topBar: "Sukseskan transformasi digital Anda!",
    explore: "Jelajahi solusi",
    contact: "Hubungi Kami",
  },
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // LANGUAGE
  const [lang, setLang] = useState("EN");

  // MOBILE
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);

  /* ================= SCROLL EFFECT ================= */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 90);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= LOCK BODY SCROLL ================= */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* ================= TOP BAR ================= */}
      <div className="py-3 text-xs text-center text-white bg-gradient-to-r from-purple-600 to-blue-500">
        {translations[lang].topBar}
      </div>

      {/* ================= NAVBAR ================= */}
      <nav
        className={`bg-white/80 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? "py-2 shadow-lg" : "py-4"
        }`}
      >
        <div className="flex items-center px-6 mx-auto max-w-7xl">
          {/* LOGO */}
          <Link to="/" className="flex items-center flex-1">
            <img
              src={logo}
              alt="MyCrow"
              className={`transition-all ${isScrolled ? "h-10" : "h-12"}`}
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <ul className="items-center justify-center flex-1 hidden gap-10 md:flex">
            {Object.values(navbarData).map((menu, index) => (
              <li key={menu.label} className="relative">
                <div
                  onMouseEnter={() => {
                    setOpenMenu(index);
                    setActiveSection(0);
                  }}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button className="flex items-center gap-1.5 text-black text-start hover:text-purple-600">
                    {menu.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        openMenu === index && "rotate-180 text-purple-600"
                      }`}
                    />
                  </button>

                  <div className="absolute left-0 right-0 h-6 top-full" />

                  {/* ================= MEGA MENU ================= */}
                  <div
                    className={`absolute left-1/2 top-full mt-6 -translate-x-1/3
                    w-[780px] rounded-2xl bg-white shadow-xl border transition-all
                    ${
                      openMenu === index
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="grid grid-cols-[240px_1fr]">
                      {/* LEFT */}
                      <div className="p-4 bg-gray-50 rounded-l-2xl">
                        {menu.sections.map((section, sIndex) => (
                          <div
                            key={section.title || sIndex}
                            onMouseEnter={() => setActiveSection(sIndex)}
                            className={`px-4 py-3 mb-1 rounded-lg cursor-pointer transition
                              ${
                                activeSection === sIndex
                                  ? "bg-white text-purple-600 shadow font-semibold"
                                  : "hover:bg-white"
                              }`}
                          >
                            {section.title || "Menu"}
                          </div>
                        ))}
                      </div>

                      {/* RIGHT */}
                      <div className="grid grid-cols-2 gap-6 p-6">
                        {menu.sections[activeSection]?.items.map((item) => {
                          const Icon = item.icon;
                          const section = menu.sections[activeSection];

                          return (
                            <Link
                              key={item.slug}
                              to={buildLink(menu, section, item)}
                              className="
                                        relative
                                        h-[96px]
                                        rounded-2xl
                                        bg-white
                                        transition
                                        hover:bg-purple-50
                                        group
                                      ">
                              {/* ICON */}
                              <div className="absolute flex items-center justify-center w-12 h-12 text-purple-600 -translate-y-1/2 bg-purple-100 top-1/2 left-4 rounded-2xl">
                                {Icon && <Icon size={20} />}
                              </div>

                              {/* TEXT */}
                              <div className="absolute -translate-y-1/2 top-1/2 left-20 right-4">
                                <p className="font-semibold leading-tight text-gray-800 group-hover:text-purple-600 line-clamp-1">
                                  {item.title}
                                </p>

                                <p
                                  className="mt-0.5 text-xs text-gray-500 leading-snug line-clamp-2"
                                >
                                  {item.explore}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* MOBILE TOGGLE */}
          <button className="md:hidden" onClick={() => setMobileOpen(true)}>
            <Menu size={30} />
          </button>

          {/* ================= DESKTOP CTA ================= */}
          <div className="items-center justify-end flex-1 hidden gap-4 md:flex">
            <button
              onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
              className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-purple-600"
            >
              {lang}
              <ChevronDown size={14} />
            </button>

            <button className="px-5 py-2 text-sm font-medium text-white bg-purple-600 rounded-full">
              {translations[lang].contact}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= OVERLAY ================= */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity
        ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full bg-white
        transform transition-transform duration-300
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <img src={logo} alt="logo" className="h-9" />
          <button onClick={() => setMobileOpen(false)}>
            <X size={30} />
          </button>
        </div>

        <div className="p-6 border-t">
          <button className="w-full py-4 text-lg font-semibold text-white bg-purple-600 rounded-full">
            {translations[lang].contact}
          </button>
        </div>
      </aside>
    </header>
  );
}
