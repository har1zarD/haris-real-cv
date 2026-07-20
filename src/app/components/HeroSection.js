'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.09 * i, ease: [0.2, 0.6, 0.2, 1] },
  }),
};

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section ref={sectionRef} id="top" className="relative min-h-dvh flex items-center overflow-hidden">
      <motion.div
        style={{ y: glowY }}
        className="absolute -top-40 right-[-10%] w-[70vw] h-[70vw] max-w-4xl max-h-[56rem] hero-glow pointer-events-none"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full pt-28 pb-16 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <motion.div style={{ y: textY }}>
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
            <motion.a
              whileTap={{ scale: 0.97 }}
              href="#work"
              className="cursor-pointer bg-[--violet] text-white px-7 py-3.5 text-sm font-semibold hover:bg-[#7c4ff0] transition-colors duration-300"
            >
              See my work
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.97 }}
              href="/cv/Haris_Velic_CV.pdf"
              download
              className="cursor-pointer border border-[--line] px-7 py-3.5 text-sm font-semibold text-[--ink] hover:border-[--violet] transition-colors duration-300"
            >
              Download CV
            </motion.a>
          </motion.div>

          <motion.p custom={5} initial="hidden" animate="show" variants={rise} className="mt-12 font-mono text-[10px] tracking-[0.14em] uppercase text-[#4d4d5a]">
            sys.status: shipping · last_deploy: this week · uptime: 3+ yrs
          </motion.p>
        </motion.div>

        <motion.div
          style={{ y: photoY }}
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        aria-hidden
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="block w-px h-10 bg-gradient-to-b from-transparent via-[--violet] to-transparent"
        />
      </motion.div>
    </section>
  );
}
