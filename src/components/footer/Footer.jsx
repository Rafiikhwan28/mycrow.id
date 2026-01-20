import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
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

  const menus = [
    {
      title: "Solution",
      items: [
        "Retail",
        "F&B",
        "Manufacturing",
        "Health & Fitness",
        "Real Estate",
        "Trades",
        "Consulting",
        "Others",
      ],
    },
    {
      title: "Product",
      items: [
        "Sales",
        "Finance",
        "Supply Chain",
        "Marketing",
        "Website",
        "Human Capital",
        "Productivity",
        "Service",
      ],
    },
    {
      title: "Service",
      items: [
        "SEO",
        "SEM",
        "SMM",
        "CRM",
        "Annual Report",
        "Logo Design",
        "Publications",
        "Video & Motions",
      ],
    },
    {
      title: "Company",
      items: ["Vision", "Mission", "Values", "Teams", "Contact Us"],
    },
    {
      title: "Knowledge",
      items: [
        "Digital Transformation",
        "Digital Marketing",
        "Design",
        "Trends",
      ],
    },
  ];

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

          {/* COMPANY INFO */}
          <motion.div
            variants={fadeUp}
            className="space-y-4 lg:col-span-2"
          >
            <h2 className="text-2xl font-bold">mycrow</h2>

            <p className="text-xs font-semibold tracking-wide opacity-90">
              PT Mycro Digital Indonesia
            </p>

            <p className="max-w-sm text-xs leading-relaxed opacity-85">
              Jl. Bintaro Raya No.8, Kebayoran Lama,
              <br />
              Kota Jakarta Selatan, DKI Jakarta
            </p>

            <div className="space-y-1 text-xs opacity-85">
              <p>www.mycrow.id</p>
              <p>info@mycrow.id</p>
            </div>

            <div className="flex gap-3 pt-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="p-2 text-purple-700 transition bg-white rounded-full cursor-pointer hover:bg-purple-100"
                >
                  <Icon size={18} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* MENUS */}
          {menus.map((menu, index) => (
            <motion.div key={index} variants={fadeUp}>
              <h3 className="mb-3 text-xs font-semibold tracking-widest uppercase opacity-90">
                {menu.title}
              </h3>

              <ul className="space-y-2 text-xs leading-relaxed opacity-85">
                {menu.items.map((item, i) => (
                  <li
                    key={i}
                    className="transition cursor-pointer hover:underline hover:opacity-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
