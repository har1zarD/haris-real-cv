'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Trainera.fit',
    role: 'Founder & Lead Engineer',
    description:
      'Fitness coaching SaaS I founded and built end-to-end: Next.js web platform, React Native app live on the App Store and Google Play, native Apple Watch companion in SwiftUI, AI Coach and AI food-image analysis, Stripe / PayPal / Apple IAP billing, localized to 20+ languages. Runs on its own today - I stay on as co-founder.',
    image: '/trainera-og.jpg',
    metrics: [
      { value: 'iOS + Android', label: 'live in both stores' },
      { value: '20+', label: 'languages' },
    ],
    tags: ['Next.js', 'React Native', 'Swift/watchOS', 'OpenAI', 'Claude', 'Stripe'],
    link: 'https://trainera.fit',
  },
  {
    title: 'Sky Pilot',
    role: 'Frontend Lead',
    description:
      'Digital file delivery for Shopify merchants - sell videos, ebooks, and downloads with streaming and license control. Carries the Built for Shopify badge, the store’s highest quality bar.',
    image: 'https://i.ytimg.com/vi/l4bqRg3I2Vk/maxresdefault.jpg',
    metrics: [
      { value: '★ 4.8', label: '405 reviews' },
      { value: '2,700+', label: 'merchants' },
      { value: 'BFS', label: 'Built for Shopify' },
    ],
    tags: ['React', 'TypeScript', 'Ruby', 'MySQL', 'Shopify'],
    link: 'https://apps.shopify.com/sky-pilot',
  },
  {
    title: 'SC Product Options',
    role: 'Frontend Lead',
    description:
      'Advanced product customization - unlimited variants and option sets for stores that outgrow Shopify defaults. One of the biggest apps in its category.',
    image:
      'https://i.ytimg.com/vi/BlLZ9vgtNz4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVqTBSu0baQeJxKPLKnV6lrpePtQ',
    metrics: [
      { value: '★ 4.6', label: '1,197 reviews' },
      { value: '4,500+', label: 'merchants' },
    ],
    tags: ['React', 'TypeScript', 'PHP', 'Laravel', 'MongoDB'],
    link: 'https://apps.shopify.com/product-options',
  },
  {
    title: 'SC Store Locator',
    role: 'Frontend Lead',
    description:
      'Interactive store maps and location search for multi-location brands, embedded straight into their storefront.',
    image: '/sc-store-locator.png',
    metrics: [{ value: '★ 4.7', label: '233 reviews' }],
    tags: ['React', 'Remix', 'TypeScript', 'Polaris'],
    link: 'https://apps.shopify.com/store-locator',
  },
  {
    title: 'Hulk Mobile App Builder',
    role: 'Frontend',
    description:
      'No-code native iOS and Android apps for Shopify stores, with push notifications and real-time storefront sync. Built for Shopify badge holder.',
    image:
      'https://www.hulkapps.com/cdn/shop/files/MOBILE_APP_BUILDER_1280x720_2996e7ea-15ed-4e8d-9065-131b9d655208.png?v=1689761960',
    metrics: [
      { value: '★ 5.0', label: '71 reviews' },
      { value: 'BFS', label: 'Built for Shopify' },
    ],
    tags: ['Vue.js', 'Tailwind CSS'],
    link: 'https://apps.shopify.com/mobile-app-builder',
  },
  {
    title: 'Keystone Loyalty Rewards',
    role: 'Frontend Lead',
    description:
      'Next-generation loyalty platform - built from scratch on the reusable Shopify CLI setup I architected for the whole team. Launched with the Built for Shopify badge.',
    image: '/keystone-loyalty.png',
    metrics: [
      { value: '★ 5.0', label: 'early reviews' },
      { value: 'BFS', label: 'Built for Shopify' },
    ],
    tags: ['React', 'Remix', 'TypeScript', 'Polaris'],
    link: 'https://apps.shopify.com/keystone-loyalty-rewards',
  },
  {
    title: 'SC Loyalty Rewards',
    role: 'Frontend Lead',
    description:
      'Points, tiers, and referral programs that keep customers coming back - the full loyalty stack for Shopify stores.',
    image: 'https://i.ytimg.com/vi/yUthw4az4g0/maxresdefault.jpg',
    metrics: [
      { value: '★ 4.5', label: '58 reviews' },
      { value: '2,000+', label: 'merchants' },
    ],
    tags: ['React', 'TypeScript', 'PHP', 'MySQL'],
    link: 'https://apps.shopify.com/loyalty-points-by-bold',
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
        <p className="eyebrow mb-16">Live in production · ratings pulled from the stores, today</p>

        <div className="space-y-24 sm:space-y-32">
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
              <div className="relative group">
                <div className="relative border border-[--line] group-hover:border-[--violet]/60 bg-[--surface] overflow-hidden transition-colors duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1280}
                    height={720}
                    className="w-full h-auto object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#08080c]/40 to-transparent pointer-events-none"
                    aria-hidden
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">{project.title}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[--violet-light]">
                  {project.role}
                </p>

                <div className="mt-5 flex flex-wrap gap-x-10 gap-y-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="display text-3xl sm:text-4xl text-[--ink]">{metric.value}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[--muted]">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-relaxed text-[--muted] max-w-lg">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag, ti) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.04 * ti }}
                      className="tag hover:border-[--violet]/60 hover:text-[--ink] transition-colors duration-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link cursor-pointer mt-6 inline-flex items-center gap-2 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[--ink] hover:text-[--violet-light] transition-colors duration-300"
                >
                  View live{' '}
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
