'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Sky Pilot',
    role: 'Frontend Lead',
    description:
      'Digital file delivery for Shopify merchants - sell videos, ebooks, and downloads with streaming and license control.',
    rating: '4.9',
    users: '2,700+ merchants',
    tech: 'React · TypeScript · Ruby · MySQL',
    link: 'https://apps.shopify.com/sky-pilot',
  },
  {
    title: 'SC Product Options',
    role: 'Frontend Lead',
    description:
      'Advanced product customization - unlimited variants and option sets for stores that outgrow Shopify defaults.',
    rating: '4.8',
    users: '4,500+ merchants',
    tech: 'React · TypeScript · PHP · Laravel',
    link: 'https://apps.shopify.com/product-options',
  },
  {
    title: 'SC Loyalty Rewards',
    role: 'Frontend Lead',
    description:
      'Points, tiers, and referral programs that keep customers coming back - full loyalty stack for Shopify stores.',
    rating: '4.3',
    users: '2,000+ merchants',
    tech: 'React · TypeScript · PHP · MongoDB',
    link: 'https://apps.shopify.com/loyalty-points-by-bold',
  },
  {
    title: 'Keystone Loyalty Rewards',
    role: 'Frontend Lead',
    description:
      'Next-generation loyalty platform - built from scratch on the reusable Shopify CLI setup I architected for the team.',
    rating: null,
    users: 'New release',
    tech: 'React · Remix · TypeScript · Polaris',
    link: 'https://apps.shopify.com/keystone-loyalty-rewards',
  },
  {
    title: 'SC Store Locator',
    role: 'Frontend Lead',
    description:
      'Interactive store maps and location search for multi-location brands, embedded straight into their storefront.',
    rating: null,
    users: 'New release',
    tech: 'React · Remix · TypeScript · Polaris',
    link: 'https://apps.shopify.com/store-locator',
  },
  {
    title: 'Hulk Mobile App Builder',
    role: 'Frontend',
    description:
      'No-code native mobile apps for Shopify stores, with push notifications and real-time storefront sync.',
    rating: '5.0',
    users: 'Early access',
    tech: 'Vue.js · Tailwind CSS',
    link: 'https://apps.shopify.com/mobile-app-builder',
  },
  {
    title: 'UKSK Delegation System',
    role: 'Solo build',
    description:
      'Referee delegation platform for the Sarajevo Canton Basketball Association - assignments, finances, and payments.',
    rating: null,
    users: 'In production',
    tech: 'MongoDB · Express · React · Node',
    link: 'https://www.utakmice.uksk.ba/',
  },
];

function Stars({ rating }) {
  return (
    <span className="text-[--amber] font-mono text-sm" aria-label={`Rated ${rating} out of 5`}>
      ★ {rating}
    </span>
  );
}

export default function ProjectsSection() {
  return (
    <section id="work" className="py-20 sm:py-28 border-t border-[--line]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="display text-4xl sm:text-5xl">Shipped</h2>
          <p className="eyebrow hidden sm:block">Live on the Shopify App Store</p>
        </div>
        <p className="max-w-2xl text-[--muted] mb-14">
          Production apps with real merchants, real reviews, and real revenue on the line. Ratings
          are live store ratings, not vanity numbers.
        </p>

        <ul>
          {projects.map((project, i) => (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: 0.03 * i }}
              className="border-t border-[--line] last:border-b"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid sm:grid-cols-[1fr_240px] gap-2 sm:gap-10 py-7 items-start"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                    {project.title}
                    <span
                      aria-hidden
                      className="inline-block text-[--muted] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[--cobalt]"
                    >
                      ↗
                    </span>
                  </h3>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-[--muted]">
                    {project.description}
                  </p>
                </div>

                <div className="font-mono text-xs text-[--muted] flex sm:flex-col flex-wrap gap-x-5 gap-y-1.5 sm:text-right">
                  <span className="text-[--ink]">{project.role}</span>
                  <span>
                    {project.rating ? <Stars rating={project.rating} /> : null}
                    {project.rating ? ' · ' : ''}
                    {project.users}
                  </span>
                  <span>{project.tech}</span>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
