import { motion } from "framer-motion";
import backgroundImage from "../../assets/background.jpg";
import mycrowLogo from "../../assets/mycrow_logo_text.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function KnowledgeTemplate({ data }) {
  if (!data) return null;

  const { hero, content, author } = data;

  return (
    <main
      className="min-h-screen bg-top bg-no-repeat bg-cover pt-28"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* ================= ARTICLE ================= */}
      <section className="px-6 mx-auto max-w-4xl">
        {/* Breadcrumb */}

        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-block mb-4 text-sm font-medium text-purple-600"
        >
          <div className="flex">
            <img src={mycrowLogo} alt="MyCrow" className="h-8 mb-6" />
            {hero?.breadcrumb && (
              <span className="inline-block justify-center px-5 py-1 mb-4 text-2xl font-medium text-purple-700 rounded-full">
                | {hero.breadcrumb}
              </span>
            )}
          </div>
        </motion.span>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-10 text-4xl font-bold leading-tight text-slate-900"
        >
          {hero.title}
        </motion.h1>

        {/* Image */}
        <motion.img
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          src={hero.image}
          alt={hero.title}
          className="w-full mb-12 rounded-2xl shadow-lg"
        />

        {/* Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="prose prose-slate max-w-none"
        >
          {content.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}

          {content.sections.map((section, index) => (
            <div key={index} className="mt-8">
              <h3 className="font-semibold">{section.title}</h3>
              <p>{section.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Author */}
        {author && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="p-6 mt-16 border rounded-2xl bg-slate-50"
          >
            <h4 className="mb-2 font-semibold text-slate-900">{author.name}</h4>
            <p className="text-sm text-slate-600">{author.description}</p>
          </motion.div>
        )}
      </section>
    </main>
  );
}
