import { motion } from "framer-motion";
import backgroundImage from "../../../assets/background.jpg";
import mycrowLogo from "../../../assets/mycrow_logo_text.png";
import ContactForm from "../../../components/contactForm/ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function OdooAppTemplate({ data }) {
  if (!data) return null;

  const { hero, video, reasons, benefits } = data;

  return (
    <main
      className="min-h-screen bg-top bg-no-repeat bg-cover pt-28"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* ================= HERO ================= */}
      <section className="grid items-center px-6 mx-auto gap-14 max-w-7xl md:grid-cols-[1.2fr_0.8fr]">
        {/* TEXT */}
        <motion.div variants={fadeUp}>
          <div className="flex items-center gap-4">
            <img src={mycrowLogo} alt="MyCrow" className="h-8" />

            {hero?.badge && (
              <span className="flex items-center px-6 py-2 mb-4 text-xl font-medium leading-none text-purple-700 rounded-full">
                | {hero.badge}
              </span>
            )}
          </div>

          <h1 className="mt-10 mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-4xl">
            {hero.title}
          </h1>

          <p className="mb-8 text-lg text-gray-700">{hero.description}</p>

          {hero.primaryButton && (
            <motion.a
              href={hero.primaryButton.link}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center py-3 text-white transition bg-purple-600 rounded-full shadow px-7 hover:bg-purple-700"
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
            className="w-full max-w-md h-[500px] mx-auto object-contain"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          />
        )}
      </section>

      {/* ===================================================== */}
      {/* ========== CONTENT CONTAINER (VIDEO+REASONS+BENEFITS) */}
      {/* ===================================================== */}
      <section className="px-5 pt-32 mx-auto max-w-7xl">
        <div
          className="relative
          bg-white
          backdrop-blur-2xl
          rounded-tl-[40px] rounded-tr-[40px] rounded-bl-none
          shadow-[0_40px_120px_rgba(0,0,0,0.18)]
          border border-white/40
          px-6 sm:px-10 md:px-16
          py-24"
        >
          {/* ================= REASONS ================= */}
          {reasons && (
            <div className="px-6 mx-auto mb-32 max-w-7xl">
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-16 text-2xl font-bold text-center text-slate-900"
              >
                {reasons.title}
              </motion.h2>

              <div className="flex grid justify-center gap-12 px-6 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
                {reasons.items?.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center "
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="mx-auto mb-4 h-14"
                    />
                    <h3 className="mb-2 font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* ================= VIDEO ================= */}
          {video && (
            <div className="max-w-5xl px-6 mx-auto mb-32">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="overflow-hidden shadow-2xl rounded-3xl"
              >
                <video
                  src={video.url}
                  poster={video.thumbnail}
                  controls
                  className="w-full"
                />
              </motion.div>
            </div>
          )}

          {/* ================= BENEFITS ================= */}
          {benefits && (
            <div className="max-w-5xl px-3 mx-auto mb-10">
              <div className="max-w-3xl mx-auto mb-20 text-center">
                <h2 className="mb-4 text-3xl font-bold text-slate-900">
                  {benefits.title}
                </h2>
                <p className="text-slate-600">{benefits.description}</p>
              </div>

              <div className="space-y-32">
                {benefits.items?.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid items-center gap-16 md:grid-cols-2"
                  >
                    <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className=" rounded-2xl"
                      />
                    </div>

                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          <ContactForm/>
        </div>
      </section>
    </main>
  );
}
