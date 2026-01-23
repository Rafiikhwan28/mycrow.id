import { motion } from "framer-motion";
import backgroundImage from "../../../assets/background.jpg";
import mycrowLogo from "../../../assets/mycrow_logo_text.png"
import ContactForm from "../../../components/contactForm/ContactForm";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function MarketingTemplate({ data }) {
  if (!data) return null;

  const { hero, whatWeDo, reasons } = data;

  return (
    <main
      className="min-h-screen bg-top bg-no-repeat bg-cover pt-28"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* ================= HERO ================= */}
      <section className="px-6 mx-auto mb-32 max-w-7xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="flex">
              <img src={mycrowLogo} alt="MyCrow" className="h-8 mb-6" />
              {hero?.badge && (
                <span className="inline-block justify-center px-5 py-1 mb-4 text-2xl font-medium text-purple-700 rounded-full">
                  | {hero.badge}
                </span>
              )}
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              {hero.title}
            </h1>

            <p className="mb-8 text-lg text-slate-600">{hero.description}</p>

            <a
              href={hero.primaryButton.link}
              className="inline-flex px-6 py-3 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700"
            >
              {hero.primaryButton.label}
            </a>
          </motion.div>

          <motion.img
            src={hero.heroImage}
            alt={hero.title}
            className="w-full max-w-lg mx-auto"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          />
        </div>
      </section>

      {/* ================= CONTENT CONTAINER ================= */}
      <section className="px-5 mx-auto max-w-7xl">
        <div className="relative bg-white/60 backdrop-blur-2xl rounded-[40px] shadow-[0_40px_120px_rgba(0,0,0,0.18)] border border-white/40 px-6 sm:px-10 md:px-16 py-24">
          {/* ================= WHAT WE DO ================= */}
          <div className="max-w-4xl mx-auto mb-32 text-center">
            <h2 className="mb-6 text-3xl font-bold">{whatWeDo.title}</h2>
            <p className="text-slate-600">{whatWeDo.description}</p>
          </div>

          <div className="grid gap-24 mb-40">
            {whatWeDo.items.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid items-center gap-16 md:grid-cols-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={index % 2 !== 0 ? "md:order-2" : ""}
                />

                <div>
                  <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================= REASONS ================= */}
          <div>
            <h2 className="mb-16 text-2xl font-bold text-center">
              {reasons.title}
            </h2>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {reasons.items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mx-auto mb-4 h-14"
                  />
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <ContactForm/>
        </div>
      </section>
    </main>
  );
}
