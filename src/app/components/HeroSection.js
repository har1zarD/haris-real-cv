'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.09 * i, ease: [0.2, 0.6, 0.2, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute -top-40 right-[-10%] w-[70vw] h-[70vw] max-w-4xl max-h-[56rem] hero-glow pointer-events-none"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full pt-28 pb-16 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <motion.p custom={0} initial="hidden" animate="show" variants={rise} className="eyebrow mb-6">
            Sarajevo, Bosnia &amp; Herzegovina
          </motion.p>

          <motion.h1 custom={1} initial="hidden" animate="show" variants={rise} className="display text-5xl sm:text-7xl lg:text-[5.2rem]">
            HARIS VELIĆ
          </motion.h1>

          <motion.p custom={2} initial="hidden" animate="show" variants={rise} className="mt-4 text-2xl sm:text-4xl font-bold leading-tight">
            <span className="text-[--muted]">A Full-Stack</span>{' '}
            <span className="gradient-violet">DEVELOPER</span>
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="show"
            variants={rise}
            className="mt-7 max-w-xl text-[17px] leading-relaxed text-[--muted]"
          >
            Frontend Lead at Shop Circle. I build the commerce apps behind{' '}
            <span className="text-[--ink] font-semibold">9,000+ Shopify stores</span> - React,
            Next.js, Remix, React Native - with 3+ years of production TypeScript.
          </motion.p>

          <motion.div custom={4} initial="hidden" animate="show" variants={rise} className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="bg-[--violet] text-white px-7 py-3.5 text-sm font-semibold hover:bg-[#7c4ff0] transition-colors"
            >
              See my work
            </a>
            <a
              href="/cv/Haris_Velic_CV.pdf"
              download
              className="border border-[--line] px-7 py-3.5 text-sm font-semibold text-[--ink] hover:border-[--violet] transition-colors"
            >
              Download CV
            </a>
          </motion.div>

          <motion.p custom={5} initial="hidden" animate="show" variants={rise} className="mt-12 font-mono text-[10px] tracking-[0.14em] uppercase text-[#4d4d5a]">
            sys.status: shipping · last_deploy: this week · uptime: 3+ yrs
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.2, 0.6, 0.2, 1] }}
          className="relative justify-self-center lg:justify-self-end"
        >
          <div className="absolute inset-0 scale-125 hero-glow" aria-hidden />
          <div className="relative w-64 sm:w-80">
            <Image
              src="/profile_image.jpg"
              alt="Haris Velić"
              width={640}
              height={800}
              priority
              className="w-full h-auto rounded-full aspect-square object-cover object-top border border-[--line]"
            />
            <p className="mt-5 text-center font-mono text-[10px] tracking-[0.16em] uppercase text-[--muted]">
              frontend lead @ shop circle
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
