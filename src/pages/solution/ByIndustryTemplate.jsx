import { motion } from "framer-motion";
import backgroundImage from "../../assets/background.jpg";
import mycrowLogo from "../../assets/mycrow_logo_text.png";
import ContactForm from "../../components/contactForm/ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ByIndustryTemplate({ data }) {
  const getYoutubeEmbedUrl = (url) => {
    if (!url) return null;

    // youtu.be/xxxx
    if (url.includes("youtu.be")) {
      const id = url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${id}`;
    }

    // youtube.com/watch?v=xxxx
    if (url.includes("youtube.com")) {
      const params = new URL(url).searchParams;
      const id = params.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    return null;
  };

  if (!data) return null;

  const { hero, video, reasons, benefits } = data;

  return (
    <main
      className="min-h-screen bg-center bg-no-repeat bg-cover pt-28"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* ================= HERO ================= */}
      <section className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] items-center gap-14 px-6 mx-auto max-w-7xl">
        {/* TEXT */}
        <motion.div variants={fadeUp} className="text-center md:text-left">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <img src={mycrowLogo} alt="MyCrow" className="h-7 md:h-8" />

            {hero?.badge && (
              <span className="px-4 py-1.5 text-sm md:text-base font-medium text-purple-700 rounded-full">
                | {hero.badge}
              </span>
            )}
          </div>

          <h1 className="mt-8 mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-6xl">
            {hero.title}
          </h1>

          <p className="max-w-xl mx-auto mb-8 text-base text-gray-700 md:text-lg md:mx-0">
            {hero.description}
          </p>

          {hero.primaryButton && (
            <motion.a
              href={hero.primaryButton.link}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center px-6 py-2.5 md:px-7 md:py-3 text-sm md:text-base text-white bg-purple-600 rounded-lg shadow hover:bg-purple-700 transition"
            >
              {hero.primaryButton.label}
            </motion.a>
          )}
        </motion.div>

        {/* IMAGE */}
        {hero.heroImage && (
          <motion.div variants={fadeUp} className="flex justify-center">
            <img
              src={hero.heroImage}
              alt={hero.title}
              className="w-full max-w-[260px] sm:max-w-sm md:max-w-md object-contain"
            />
          </motion.div>
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
          {/* ================= VIDEO ================= */}
          {video && (
            <div className="max-w-5xl px-6 mx-auto mb-32">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="overflow-hidden shadow-2xl rounded-3xl aspect-video"
              >
                {getYoutubeEmbedUrl(video.url) ? (
                  <iframe
                    src={getYoutubeEmbedUrl(video.url)}
                    title="Youtube Video"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={video.url}
                    poster={video.thumbnail}
                    controls
                    className="object-cover w-full h-full"
                  />
                )}
              </motion.div>
            </div>
          )}

          {/* ================= REASONS ================= */}
          {reasons && (
            <div className="px-6 mx-auto mb-32 max-w-7xl">
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-2xl font-semibold text-center text-purple-700 mb-14"
              >
                {reasons.title}
              </motion.h2>

              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                {reasons.items?.map((item, index) => (
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
                    <h3 className="mb-2 font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-base text-slate-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* ================= BENEFITS ================= */}
          {benefits && (
            <div className="max-w-5xl px-3 mx-auto mb-10">
              <div className="max-w-3xl mx-auto mb-20 text-center">
                <h2 className="text-2xl font-semibold text-center text-purple-700 mb-14">
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
                    <div
                      className={`flex items-center justify-center ${
                        index % 2 !== 0 ? "md:order-2" : ""
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-contain w-full h-80"
                      />
                    </div>

                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-base leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
