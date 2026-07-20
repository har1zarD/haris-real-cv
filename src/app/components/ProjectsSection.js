'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Sky Pilot',
    description:
      'Digital file delivery for Shopify merchants - sell videos, ebooks, and downloads with streaming and license control. Led the frontend through its current production era.',
    image: 'https://i.ytimg.com/vi/l4bqRg3I2Vk/maxresdefault.jpg',
    stats: '★ 4.9 · 2,700+ merchants',
    tags: ['React', 'TypeScript', 'Ruby', 'MySQL', 'Shopify'],
    link: 'https://apps.shopify.com/sky-pilot',
  },
  {
    title: 'SC Product Options',
    description:
      'Advanced product customization - unlimited variants and option sets for stores that outgrow Shopify defaults. One of the biggest apps in its category.',
    image:
      'https://i.ytimg.com/vi/BlLZ9vgtNz4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVqTBSu0baQeJxKPLKnV6lrpePtQ',
    stats: '★ 4.8 · 4,500+ merchants',
    tags: ['React', 'TypeScript', 'PHP', 'Laravel', 'MongoDB'],
    link: 'https://apps.shopify.com/product-options',
  },
  {
    title: 'SC Loyalty Rewards',
    description:
      'Points, tiers, and referral programs that keep customers coming back - the full loyalty stack for Shopify stores.',
    image: 'https://i.ytimg.com/vi/yUthw4az4g0/maxresdefault.jpg',
    stats: '★ 4.3 · 2,000+ merchants',
    tags: ['React', 'TypeScript', 'PHP', 'MySQL'],
    link: 'https://apps.shopify.com/loyalty-points-by-bold',
  },
  {
    title: 'Keystone Loyalty Rewards',
    description:
      'Next-generation loyalty platform - built from scratch on the reusable Shopify CLI frontend setup I architected for the whole team.',
    image: '/keystone-loyalty.png',
    stats: 'New release',
    tags: ['React', 'Remix', 'TypeScript', 'Polaris'],
    link: 'https://apps.shopify.com/keystone-loyalty-rewards',
  },
  {
    title: 'SC Store Locator',
    description:
      'Interactive store maps and location search for multi-location brands, embedded straight into their storefront.',
    image: '/sc-store-locator.png',
    stats: 'New release',
    tags: ['React', 'Remix', 'TypeScript', 'Polaris'],
    link: 'https://apps.shopify.com/store-locator',
  },
  {
    title: 'Hulk Mobile App Builder',
    description:
      'No-code native mobile apps for Shopify stores, with push notifications and real-time storefront sync.',
    image:
      'https://www.hulkapps.com/cdn/shop/files/MOBILE_APP_BUILDER_1280x720_2996e7ea-15ed-4e8d-9065-131b9d655208.png?v=1689761960',
    stats: '★ 5.0 · Early access',
    tags: ['Vue.js', 'Tailwind CSS'],
    link: 'https://apps.shopify.com/mobile-app-builder',
  },
  {
    title: 'UKSK Delegation System',
    description:
      'Referee delegation platform for the Sarajevo Canton Basketball Association - automated assignments, finance tracking, and payments. Designed, built, and shipped solo on the MERN stack.',
    image: null,
    stats: 'In production',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: 'https://www.utakmice.uksk.ba/',
  },
];

export default function ProjectsSection() {
  return (
    <section id="work" className="relative py-24 sm:py-32 border-t border-[--line]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          My <span className="gradient-violet">Work</span>
        </motion.h2>
        <p className="eyebrow mb-16">Live on the Shopify App Store · real merchants, real ratings</p>

        <div className="space-y-20 sm:space-y-28">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
                i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="relative">
                {project.image ? (
                  <div className="relative border border-[--line] bg-[--surface] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1280}
                      height={720}
                      className="w-full h-auto object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#08080c]/40 to-transparent pointer-events-none"
                      aria-hidden
                    />
                  </div>
                ) : (
                  <div className="relative border border-[--line] bg-[--surface] aspect-video flex items-center justify-center">
                    <span className="display text-5xl text-[#22222c]">UKSK</span>
                  </div>
                )}
                <span className="absolute -top-5 -left-2 display text-5xl sm:text-6xl text-[#26262f] select-none" aria-hidden>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">{project.title}</h3>
                <p className="mt-1.5 font-mono text-xs text-[--violet-light]">{project.stats}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-[--muted] max-w-lg">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[--ink] hover:text-[--violet-light] transition-colors"
                >
                  View live <span aria-hidden>↗</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
