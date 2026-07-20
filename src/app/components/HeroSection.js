'use client';

import { motion } from 'framer-motion';

const line = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.08 * i, ease: [0.2, 0.6, 0.2, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section id="top" className="pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.p custom={0} initial="hidden" animate="show" variants={line} className="eyebrow mb-8">
          Sarajevo, Bosnia &amp; Herzegovina - Frontend Lead at Shop Circle
        </motion.p>

        <h1 className="display text-[13vw] sm:text-7xl lg:text-[6.5rem]">
          <motion.span custom={1} initial="hidden" animate="show" variants={line} className="block">
            I build the apps behind
          </motion.span>
          <motion.span custom={2} initial="hidden" animate="show" variants={line} className="block">
            <span className="text-[--cobalt]">9,000+</span> Shopify stores.
          </motion.span>
        </h1>

        <div className="mt-12 grid sm:grid-cols-[1fr_auto] gap-10 items-end">
          <motion.p
            custom={3}
            initial="hidden"
            animate="show"
            variants={line}
            className="max-w-xl text-lg text-[--muted] leading-relaxed"
          >
            Full-stack &amp; mobile engineer, 3+ years of production TypeScript. I lead frontend on
            commerce apps that merchants rely on every day - React, Next.js, Remix, React Native -
            and I care about the last 5% most teams skip.
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={line}
            className="flex gap-3"
          >
            <a
              href="#work"
              className="bg-[--ink] text-[#f7f7f4] px-6 py-3 text-sm font-medium hover:bg-[--cobalt] transition-colors"
            >
              See the work
            </a>
            <a
              href="/cv/Haris_Velic_CV.pdf"
              download
              className="border border-[--ink] px-6 py-3 text-sm font-medium hover:bg-[--ink] hover:text-[#f7f7f4] transition-colors"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
