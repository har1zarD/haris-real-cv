'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const rise = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: [0.2, 0.6, 0.2, 1] },
  }),
};

const stats = [
  { value: '9,000+', label: 'merchants served' },
  { value: '1,900+', label: 'app store reviews' },
  { value: '7', label: 'production apps' },
  { value: '3×', label: 'Built for Shopify' },
];

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const nameY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={sectionRef} id="top" className="relative overflow-hidden">
      <motion.div
        style={{ y: glowY }}
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] max-w-5xl max-h-[60rem] hero-glow pointer-events-none"
        aria-hidden
      />

      <div className="relative min-h-dvh max-w-6xl mx-auto px-5 sm:px-8 flex flex-col justify-end">
        <motion.p
          custom={0}
          initial="hidden"
          animate="show"
          variants={rise}
          className="eyebrow absolute top-24 left-5 sm:left-8"
        >
          Sarajevo, Bosnia &amp; Herzegovina · Frontend Lead @ Shop Circle · Founder @ Trainera.fit
        </motion.p>

        <div className="relative pt-40 sm:pt-32">
          <motion.div style={{ y: nameY }} className="relative z-0 text-center select-none">
            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={rise}
              className="display text-[16.5vw] lg:text-[10.5rem] leading-[0.86] tracking-tight"
            >
              HARIS
              <br />
              <span className="gradient-violet">VELIĆ</span>
            </motion.h1>
          </motion.div>

          <motion.div
            style={{ y: photoY }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.2, 0.6, 0.2, 1] }}
            className="relative z-10 mx-auto -mt-[24vw] lg:-mt-56 w-[70vw] max-w-[26rem] pointer-events-none"
          >
            <Image
              src="/haris-cutout.png"
              alt="Haris Velić"
              width={1069}
              height={1603}
              priority
              className="w-full h-auto drop-shadow-[0_0_60px_rgba(139,92,246,0.35)]"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08080c] to-transparent"
              aria-hidden
            />
          </motion.div>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={rise}
            className="relative z-20 -mt-10 sm:-mt-14 flex flex-col items-center gap-6 pb-10"
          >
            <p className="text-2xl sm:text-3xl font-bold text-center">
              <span className="text-[--muted]">A Full-Stack</span>{' '}
              <span className="gradient-violet">DEVELOPER</span>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <motion.a
                whileTap={{ scale: 0.97 }}
                href="#work"
                className="cursor-pointer bg-[--violet] text-white px-8 py-4 text-sm font-semibold hover:bg-[#7c4ff0] transition-colors duration-300"
              >
                See my work
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.97 }}
                href="/cv/Haris_Velic_CV.pdf"
                download
                className="cursor-pointer border border-[--line] bg-[#08080c]/70 backdrop-blur px-8 py-4 text-sm font-semibold text-[--ink] hover:border-[--violet] transition-colors duration-300"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative z-20 grid grid-cols-2 lg:grid-cols-4 border-t border-[--line]"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-7 sm:py-9 px-4 text-center ${i > 0 ? 'border-l border-[--line]' : ''} ${
                i === 2 ? 'max-lg:border-l-0 max-lg:border-t max-lg:border-[--line]' : ''
              } ${i === 3 ? 'max-lg:border-t max-lg:border-[--line]' : ''}`}
            >
              <dd className="display text-4xl sm:text-5xl gradient-violet">{stat.value}</dd>
              <dt className="mt-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[--muted]">
                {stat.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
