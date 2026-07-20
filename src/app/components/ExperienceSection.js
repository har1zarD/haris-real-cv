'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Shop Circle',
    title: 'Software Engineer - Frontend Lead',
    period: 'Dec 2023 - Present',
    location: 'Sarajevo',
    points: [
      'Frontend lead across multiple production Shopify apps serving 9,000+ merchants combined: Sky Pilot, SC Loyalty Rewards, SC Product Options, Keystone Loyalty Rewards, and SC Store Locator.',
      'Architected the reusable Shopify CLI frontend setup adopted as the baseline for every new Shop Circle app - structure, tooling, and performance defaults the whole team builds on.',
      'Ship with React, Remix, TypeScript, Tailwind, and the Polaris design system; collaborate across PHP, MySQL, and MongoDB backends.',
      'Run the team’s agile delivery: sprint planning, retrospectives, Jira backlog, and technical documentation.',
    ],
    tech: 'React · Remix · TypeScript · Vue.js · Polaris · PHP · MySQL · MongoDB',
  },
  {
    company: 'Ant Colony',
    title: 'Full-Stack Developer - Internship',
    period: 'Apr 2023 - Jul 2023',
    location: 'Sarajevo',
    points: [
      'Built RESTful APIs in Node.js with TypeScript and React + Tailwind frontends inside an agile team, under senior mentors.',
      'Hands-on exposure to software architecture, data security, and accessible interface design.',
    ],
    tech: 'TypeScript · React · Node.js · Tailwind',
  },
  {
    company: 'Zira Talent Academy',
    title: 'Web Developer - Internship',
    period: 'Mar 2022 - Jun 2022',
    location: 'Sarajevo',
    points: [
      'Developed a movie browsing platform end-to-end: filtering, APIs, and database work with a focus on scalability and security.',
    ],
    tech: 'JavaScript · APIs · Databases',
  },
  {
    company: 'Majestic Games',
    title: 'Graphic Designer - Freelance',
    period: 'Jul 2021 - Nov 2023',
    location: 'Abu Dhabi, remote',
    points: [
      'Designed characters, animations, backgrounds, and UI for mobile games, plus social media assets - the design eye I still use in frontend work.',
    ],
    tech: 'Illustrator · Photoshop · UI/UX',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-[--line]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="display text-4xl sm:text-5xl mb-14">Experience</h2>

        <ol>
          {experiences.map((job, i) => (
            <motion.li
              key={job.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: 0.04 * i }}
              className="grid sm:grid-cols-[220px_1fr] gap-2 sm:gap-10 py-8 border-t border-[--line] last:border-b"
            >
              <div className="font-mono text-xs text-[--muted] space-y-1">
                <p className="text-[--ink]">{job.period}</p>
                <p>{job.location}</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  {job.company}
                  <span className="text-[--muted] font-normal"> - {job.title}</span>
                </h3>
                <ul className="mt-4 space-y-2 max-w-2xl">
                  {job.points.map((point) => (
                    <li key={point} className="text-[15px] leading-relaxed text-[--muted] pl-4 relative">
                      <span className="absolute left-0 top-[0.65em] w-1.5 h-px bg-[--cobalt]" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-mono text-xs text-[--muted]">{job.tech}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
