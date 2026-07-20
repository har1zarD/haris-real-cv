'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Trainera.fit',
    title: 'Side Project - Built & Shipped Solo',
    year: '2025',
    location: 'Side project, remote',
    description:
      'Built and shipped a fitness coaching SaaS end-to-end: Next.js web app, React Native app live on the App Store and Google Play, native Apple Watch companion in SwiftUI. AI Coach and food-image analysis with OpenAI and Claude, Stripe / PayPal / Apple IAP billing, 20+ languages. It runs without needing me day-to-day - everything I learned shipping it goes straight into my full-time engineering work.',
  },
  {
    company: 'Shop Circle',
    title: 'Software Engineer - Frontend Lead',
    year: '2023',
    now: 'NOW',
    location: 'Sarajevo',
    description:
      'Frontend lead across production Shopify apps serving 9,000+ merchants: Sky Pilot, SC Loyalty Rewards, SC Product Options, Keystone Loyalty Rewards, and SC Store Locator. Architected the reusable Shopify CLI frontend setup adopted across all new company apps. React, Remix, TypeScript, Polaris; sprint planning and technical documentation for the team.',
  },
  {
    company: 'Ant Colony',
    title: 'Full-Stack Developer Intern',
    year: '2023',
    location: 'Sarajevo',
    description:
      'Built RESTful APIs in Node.js with TypeScript and React + Tailwind frontends inside an agile team, under senior mentors. Software architecture, data security, and accessible interface design.',
  },
  {
    company: 'Zira Talent Academy',
    title: 'Web Developer Intern',
    year: '2022',
    location: 'Sarajevo',
    description:
      'Developed a movie browsing platform end-to-end: filtering, APIs, and database work with a focus on scalability and security.',
  },
  {
    company: 'Majestic Games',
    title: 'Freelance Graphic Designer',
    year: '2021',
    location: 'Abu Dhabi, remote',
    description:
      'Characters, animations, backgrounds, and UI for mobile games, plus social media assets - the design eye I still bring to frontend work.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl sm:text-5xl font-bold mb-20"
        >
          My career &amp;{' '}
          <span className="gradient-violet relative">
            experience
            <span
              className="absolute -right-5 top-1 w-3 h-3 rounded-full bg-[--violet-light] glow-dot"
              aria-hidden
            />
          </span>
        </motion.h2>

        <div className="relative">
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[--violet] via-[--violet]/40 to-transparent"
            aria-hidden
          />

          <ol className="space-y-16 md:space-y-24">
            {experiences.map((job, i) => (
              <motion.li
                key={job.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="relative grid md:grid-cols-[1fr_120px_1fr] gap-4 md:gap-8 items-start"
              >
                <div className="md:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight">{job.title}</h3>
                  <p className="mt-1 font-mono text-xs text-[--violet-light]">{job.company}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[--muted] mt-1">
                    {job.location}
                  </p>
                </div>

                <div className="hidden md:flex flex-col items-center pt-1">
                  <span className="text-2xl font-bold text-[--ink]">{job.now || job.year}</span>
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.2 }}
                    className="mt-3 w-2.5 h-2.5 rounded-full bg-[--violet-light] glow-dot"
                    aria-hidden
                  />
                </div>

                <p className="text-[15px] leading-relaxed text-[--muted] max-w-md">
                  <span className="md:hidden font-mono text-xs text-[--ink] block mb-1">
                    {job.now || job.year}
                  </span>
                  {job.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
