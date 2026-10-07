'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.08 * i, ease: [0.2, 0.6, 0.2, 1] },
  }),
};

const stats = [
  { value: '4+', label: 'years experience' },
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
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={sectionRef} id="top" className="relative overflow-hidden">
      <motion.div
        style={{ y: glowY }}
        className="absolute top-[-20%] inset-x-0 mx-auto w-[80vw] h-[65vw] max-w-4xl max-h-[44rem] hero-glow pointer-events-none"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="min-h-[calc(100dvh-9rem)] flex flex-col items-center justify-center text-center pt-28">
          <div className="pb-14 lg:pb-20 flex flex-col items-center">
            <motion.p custom={0} initial="hidden" animate="show" variants={rise} className="eyebrow mb-6">
              Sarajevo, Bosnia &amp; Herzegovina · Software Engineer (Tech Lead) @ Shop Circle
            </motion.p>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={rise}
              className="display text-6xl sm:text-7xl lg:text-[5.5rem]"
            >
              HARIS VELIĆ
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={rise}
              className="mt-4 text-2xl sm:text-3xl font-bold leading-tight"
            >
              <span className="text-[--muted]">A Full-Stack</span>{' '}
              <span className="gradient-violet">DEVELOPER</span>
            </motion.p>

            <motion.p
              custom={3}
              initial="hidden"
              animate="show"
              variants={rise}
              className="mt-6 max-w-xl mx-auto text-[17px] leading-relaxed text-[--muted]"
            >
              Tech lead and full-stack engineer on the commerce apps behind{' '}
              <span className="text-[--ink] font-semibold">9,000+ Shopify stores</span>. With my
              brother I built Trainera.fit end to end - web, iOS, Android, and Apple Watch. React,
              Next.js, Remix, React Native, 4+ years of production TypeScript.
            </motion.p>

            <motion.div custom={4} initial="hidden" animate="show" variants={rise} className="mt-9 flex flex-wrap justify-center gap-3">
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
          </div>

        </div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative z-10 grid grid-cols-2 lg:grid-cols-5 border-t border-[--line]"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-7 sm:py-8 px-4 text-center ${i > 0 ? 'lg:border-l lg:border-[--line]' : ''} ${
                i % 2 === 1 ? 'max-lg:border-l max-lg:border-[--line]' : ''
              } ${i > 1 ? 'max-lg:border-t max-lg:border-[--line]' : ''} ${
                i === stats.length - 1 && stats.length % 2 === 1 ? 'max-lg:col-span-2' : ''
              }`}
            >
              <dd className="display text-3xl sm:text-4xl text-[--ink]">{stat.value}</dd>
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
