
import { motion } from "framer-motion";
import backgroundImage from "../../assets/background.jpg";
import ContactForm from "../../components/contactForm/ContactForm";
import mycrowLogo from "../../assets/mycrow_logo_text.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CompanyTemplate({ data }) {
  if (!data) return null;

  const { hero, missions, values, workflow } = data;

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

            <h1 className="mb-6 text-4xl font-bold md:text-5xl text-slate-900">
              {hero.title}
            </h1>

            <p className="text-lg text-slate-600">{hero.description}</p>
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

      {/*====================Missions dan Valur=========== */}
      {(missions?.items?.length > 0 || values) && (
        <section className="relative py-32">
          <div className="px-5 mx-auto max-w-7xl">
            {/* GLASS CONTAINER */}
            <div
              className="
                      relative
                      bg-white/60
                      backdrop-blur-2xl
                      rounded-[40px]
                      shadow-[0_40px_120px_rgba(0,0,0,0.18)]
                      border border-white/40
                      px-6 sm:px-10 md:px-16
                      py-24
                    "
            >
              {/* ================= MISSIONS ================= */}
              <section className="px-6 mx-auto mb-32 max-w-6xl space-y-24">
                {missions.map((item, index) => (
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
                      className="w-full max-w-md mx-auto"
                    />

                    <div>
                      <p className="mb-2 text-sm text-purple-600">
                        {item.label}
                      </p>
                      <h3 className="text-2xl font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-slate-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </section>

              {/* ================= VALUES ================= */}
              <section className="px-6 mx-auto mb-32 max-w-6xl">
                <h2 className="mb-16 text-2xl font-bold text-center text-slate-900">
                  {values.title}
                </h2>

                <div className="grid gap-10 md:grid-cols-3">
                  {values.items.map((item, index) => (
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
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      )}
      {/*====================HOW WE WORK=========== */}
      {(workflow?.items?.length > 0 || workflow) && (
        <section className="relative">
          <div className="px-5 mx-auto max-w-7xl">
            {/* GLASS CONTAINER */}
            <div
              className="
                      relative
                      bg-white/60
                      backdrop-blur-2xl
                      rounded-[40px]
                      shadow-[0_40px_120px_rgba(0,0,0,0.18)]
                      border border-white/40
                      px-6 sm:px-10 md:px-16
                      py-24
                    "
            >
              {/* ================= HOW WE WORK ================= */}
              <section className="px-6 mx-auto mb-40 max-w-6xl">
                <h2 className="mb-20 text-2xl font-bold text-center text-slate-900">
                  {workflow.title}
                </h2>

                <div className="space-y-20">
                  {workflow.items.map((item, index) => (
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
                        className="w-full max-w-sm mx-auto"
                      />

                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
              {/* ================= CONTACT FORM ================= */}
              <ContactForm />
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
