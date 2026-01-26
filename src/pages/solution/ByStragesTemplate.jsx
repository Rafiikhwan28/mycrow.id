import { motion } from "framer-motion";
import mycrowLogo from "../../assets/mycrow_logo_text.png";
import bgImage from "../../assets/background.jpg";
import ContactForm from "../../components/contactForm/ContactForm";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

/* ================= COMPONENT ================= */

export default function ByStagesTemplate({ data }) {
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-semibold">
        Stages not found
      </div>
    );
  }

  const { hero, reasons, benefits } = data;

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      style={{ backgroundImage: `url(${bgImage})` }}
      className="min-h-screen pt-24 bg-center bg-no-repeat bg-cover md:pt-28"
    >
      {/* ================= HERO ================= */}
      <section className="grid items-center px-6 mx-auto gap-14 max-w-7xl md:grid-cols-[1.2fr_0.8fr]">
        {/* TEXT */}
        <motion.div
          variants={slideFromLeft}
          className="text-center md:text-left"
        >
          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-4">
            <img src={mycrowLogo} alt="MyCrow" className="h-7 md:h-8" />

            {hero?.badge && (
              <span className="flex items-center px-4 py-1.5 md:px-6 md:py-2 text-sm md:text-xl font-medium leading-none text-purple-700 rounded-full">
                | {hero.badge}
              </span>
            )}
          </div>

          <h1 className="mt-8 mb-6 text-4xl font-bold leading-tight text-gray-900 md:mt-10 md:text-6xl">
            {hero.title}
          </h1>

          <p className="mb-8 text-base text-gray-700 md:text-lg">
            {hero.description}
          </p>

          {hero.primaryButton && (
            <motion.a
              href={hero.primaryButton.link}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center px-6 py-2.5 md:px-7 md:py-3 text-sm md:text-base text-white transition bg-purple-600 rounded-full shadow hover:bg-purple-700"
            >
              {hero.primaryButton.label}
            </motion.a>
          )}
        </motion.div>

        {/* IMAGE */}
        {hero.heroImage && (
          <motion.img
            src={hero.heroImage}
            alt={hero.title}
            variants={slideFromRight}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto md:h-[500px] mx-auto object-contain"
          />
        )}
      </section>

      {/* ================= REASONS + BENEFITS ================= */}
      {(reasons?.items?.length > 0 || benefits) && (
        <section className="relative pt-28 md:pt-32">
          <div className="px-5 mx-auto max-w-7xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative bg-white backdrop-blur-2xl rounded-tl-[40px] rounded-tr-[40px] rounded-bl-none shadow-[0_40px_120px_rgba(0,0,0,0.18)] border border-white/40 px-6 sm:px-10 md:px-16 py-20 md:py-24"
            >
              {/* ================= REASONS ================= */}
              {reasons?.items?.length > 0 && (
                <div className="mb-32 md:mb-40">
                  <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-2xl font-semibold text-center text-purple-700 mb-14 md:mb-16"
                  >
                    {reasons.title}
                  </motion.h2>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-8 sm:grid-cols-2 md:grid-cols-4"
                  >
                    {reasons.items.map((item, i) => (
                      <motion.div
                        key={i}
                        variants={i % 2 === 0 ? slideFromLeft : slideFromRight}
                        whileHover={{ y: -8 }}
                        className="p-8 text-center transition shadow-lg rounded-3xl hover:shadow-2xl"
                      >
                        <img
                          src={item.icon}
                          className="mx-auto mb-6 h-14"
                          alt={item.title}
                        />
                        <h3 className="mb-3 font-semibold">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-600">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}

              {/* ================= BENEFITS ================= */}
              {benefits && (
                <div className="max-w-5xl mx-auto">
                  <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-4 text-2xl font-semibold text-center text-purple-700"
                  >
                    {benefits.title}
                  </motion.h2>

                  <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-20 text-base text-center text-gray-700 md:mb-24 md:text-lg"
                  >
                    {benefits.description}
                  </motion.p>

                  <div className="space-y-20 md:space-y-24">
                    {benefits.items.map((item, i) => (
                      <motion.div
                        key={i}
                        variants={i % 2 === 0 ? slideFromLeft : slideFromRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid items-center gap-14 md:gap-16 md:grid-cols-2"
                      >
                        <div
                          className={`flex items-center justify-center ${
                            i % 2 !== 0 ? "md:order-2" : ""
                          }`}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="object-contain w-full max-w-md h-72 md:h-80"
                          />
                        </div>

                        <div className="text-center md:text-left">
                          <h3 className="mb-4 text-2xl font-semibold">
                            {item.title}
                          </h3>
                          <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* ================= CONTACT FORM ================= */}
              <ContactForm />
            </motion.div>
          </div>
        </section>
      )}
    </motion.main>
  );
}
