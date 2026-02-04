import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollSmoothStep() {
  const STEP = 900; // jarak scroll per klik (px)
  const DURATION = 720; // ms

  const smoothScrollStep = () => {
    const start = window.scrollY;
    const target = start + STEP;
    const startTime = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased = easeOutCubic(progress);

      window.scrollTo(0, start + STEP * eased);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <motion.button
      onClick={smoothScrollStep}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.92 }}
      className="
    fixed bottom-14 left-1/2 -translate-x-1/2 z-[9999]
    w-16 h-16 rounded-full
    bg-white/20 backdrop-blur-xl
    border border-white/30
    flex items-center justify-center
    text-white hover:text-purple-500
  "
    >
      <ChevronDown size={40} />
    </motion.button>
  );
}
