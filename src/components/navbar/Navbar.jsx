import { useEffect, useState, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/mycrow_logo.png";
import { navbarData } from "../../data/navbar";

/* ================= LINK BUILDER ================= */
const buildLink = (menu, section, item) => {
  if (section?.sectionPath) {
    return `${menu.basePath}/${section.sectionPath}/${item.slug}`;
  }
  return `${menu.basePath}/${item.slug}`;
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState("EN");
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
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const location = useLocation();
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (prevPath.current !== location.pathname) {
      window.scrollTo({
        top: 0,
        behavior: window.innerWidth < 768 ? "smooth" : "auto",
      });

      setMobileOpen(false);
      setMobileActiveMenu(null);
      prevPath.current = location.pathname;
    }
  }, [location.pathname]);

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* ================= TOP BAR ================= */}
      <div className="py-3 text-sm text-center text-white bg-gradient-to-r from-purple-600 to-blue-500">
        <p>
          Your Trusted Partner for Secure and Scalable Digital Transformation
        </p>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav
        className={`backdrop-blur-3xl transition-all duration-500 ${
          isScrolled ? "py-2 shadow-lg" : "py-5"
        }`}
      >
        <div className="flex items-center px-6 mx-auto max-w-7xl">
          {/* LOGO */}
          <Link to="/" className="flex items-center flex-1">
            <img
              src={logo}
              alt="MyCrow"
              className={`transition-all ${isScrolled ? "h-11" : "h-14"}`}
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <ul className="items-center justify-center flex-1 hidden gap-10 md:flex">
            {Object.values(navbarData).map((menu, index) => {
              /* ===== COMPANY (DIRECT LINK) ===== */
              if (menu.type === "link") {
                return (
                  <li key={menu.label}>
                    <Link
                      to={menu.basePath}
                      className="font-medium hover:text-purple-600"
                    >
                      {menu.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={menu.label} className="relative">
                  <div
                    onMouseEnter={() => {
                      setOpenMenu(index);
                      setActiveSection(0);
                    }}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button className="flex items-center gap-1.5 hover:text-purple-600">
                      {menu.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${
                          openMenu === index && "rotate-180 text-purple-600"
                        }`}
                      />
                    </button>

                    <div className="absolute left-0 right-0 h-6 top-full" />

                    {/* ===== KNOWLEDGE → SIMPLE DROPDOWN ===== */}
                    {menu.label === "Knowledge" ? (
                      <div
                        className={`absolute top-full mt-4 w-56 rounded-xl bg-white shadow-lg border transition
                        ${
                          openMenu === index
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 translate-y-2 pointer-events-none"
                        }`}
                      >
                        <div className="py-2">
                          {menu.sections.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.slug}
                                to={`${menu.basePath}/${item.slug}`}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50"
                              >
                                {Icon && (
                                  <Icon size={18} className="text-purple-600" />
                                )}
                                <span className="text-sm font-medium">
                                  {item.title}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      /* ===== DEFAULT MEGA MENU (UNCHANGED) ===== */
                      <div
                        className={`absolute left-1/2 top-full mt-6 -translate-x-10
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
                                key={sIndex}
                                onMouseEnter={() => setActiveSection(sIndex)}
                                className={`px-4 py-3 mb-1 rounded-lg cursor-pointer transition
                                ${
                                  activeSection === sIndex
                                    ? "bg-white text-purple-600 shadow font-semibold"
                                    : "hover:bg-white"
                                }`}
                              >
                                {section.title}
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
                                  className="relative h-[96px] rounded-2xl bg-white hover:bg-purple-50 transition group"
                                >
                                  <div className="absolute flex items-center justify-center w-12 h-12 text-purple-600 -translate-y-1/2 top-1/2 left-4 rounded-2xl">
                                    {Icon && <Icon size={20} />}
                                  </div>

                                  <div className="absolute -translate-y-1/2 top-1/2 left-20 right-4">
                                    <p className="font-semibold text-gray-800 group-hover:text-purple-600 line-clamp-1">
                                      {item.title}
                                    </p>
                                    <p className="mt-0.5 text-xs text-gray-500 line-clamp-2">
                                      {item.explore}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          {/* MOBILE TOGGLE */}
          <button className="md:hidden" onClick={() => setMobileOpen(true)}>
            <Menu size={30} />
          </button>

          {/* DESKTOP CTA */}
          <div className="items-center justify-end flex-1 hidden gap-4 md:flex">
            <button
              onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-purple-600"
            >
              {lang}
              <ChevronDown size={14} />
            </button>

            <a
              href="https://wa.me/628139300683"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-3 my-2 text-sm text-white transition bg-purple-600 rounded-xl hover:bg-purple-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full bg-white
  overflow-y-auto overscroll-contain
  transform transition-transform duration-500
  ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5">
          <img src={logo} alt="logo" className="h-16" />
          <button onClick={() => setMobileOpen(false)}>
            <X size={30} />
          </button>
        </div>

        {/* MENU */}
        <div className="p-2 space-y-4 overflow-y-auto">
          {Object.values(navbarData || {}).map((menu, index) => (
            <div key={menu?.label || index} className="rounded-xl">
              {/* ================= COMPANY (NO DROPDOWN) ================= */}
              {menu.label === "Company" ? (
                <Link
                  to={menu.basePath}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-4 font-semibold hover:bg-purple-50 rounded-xl"
                >
                  {menu.label}
                </Link>
              ) : (
                <>
                  {/* ================= MENU HEADER ================= */}
                  <button
                    onClick={() =>
                      setMobileActiveMenu(
                        mobileActiveMenu === index ? null : index,
                      )
                    }
                    className="flex items-center justify-between w-full px-4 py-4 font-semibold"
                  >
                    {menu.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        mobileActiveMenu === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* ================= DROPDOWN ================= */}
                  {mobileActiveMenu === index && (
                    <div className="px-4 pb-4 space-y-4">
                      {/* ===== KNOWLEDGE (SIMPLE LIST) ===== */}
                      {menu.label === "Knowledge"
                        ? menu.sections.map((item) => (
                            <Link
                              key={item.slug}
                              to={`${menu.basePath}/${item.slug}`}
                              onClick={() => setMobileOpen(false)}
                              className="
    flex items-center gap-4 p-3
    rounded-xl transition
    hover:bg-purple-50
    active:scale-[0.98]
  "
                            >
                              {/* ICON */}
                              <div className="flex items-center justify-center w-10 h-10 text-purple-600 rounded-xl shrink-0">
                                {item.icon &&
                                  (() => {
                                    const Icon = item.icon;
                                    return <Icon size={18} />;
                                  })()}
                              </div>

                              {/* TEXT */}
                              <div className="text-left">
                                <p className="text-sm font-semibold text-gray-800">
                                  {item.title}
                                </p>
                              </div>
                            </Link>
                          ))
                        : /* ===== DEFAULT (SEMULA) ===== */
                          menu.sections.map((section, sIndex) => (
                            <div key={sIndex}>
                              <p className="mb-2 text-xs font-semibold text-gray-400 uppercase">
                                {section.title}
                              </p>

                              <div className="space-y-2">
                                {section.items.map((item) => {
                                  const Icon = item.icon;
                                  return (
                                    <Link
                                      key={item.slug}
                                      to={buildLink(menu, section, item)}
                                      onClick={() => setMobileOpen(false)}
                                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50"
                                    >
                                      <div className="flex items-center justify-center w-10 h-10 text-purple-600 rounded-xl">
                                        {Icon && <Icon size={18} />}
                                      </div>

                                      <div>
                                        <p className="text-sm font-semibold">
                                          {item.title}
                                        </p>
                                        <p className="text-xs text-gray-500 line-clamp-1">
                                          {item.explore}
                                        </p>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </aside>
    </header>
  );
}
