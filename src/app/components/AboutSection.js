'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  ['Frontend', 'React · Next.js · Remix · TypeScript · Tailwind · Polaris'],
  ['Mobile', 'React Native · Expo · Swift/SwiftUI · HealthKit · Live Activities'],
  ['Backend', 'Node.js · Prisma · PostgreSQL · MySQL · MongoDB · Redis · REST · GraphQL'],
  ['AI & tooling', 'OpenAI · Anthropic Claude · Claude Code · Cursor · MCP servers'],
  ['Payments', 'Stripe · PayPal · Apple IAP'],
  ['DevOps & QA', 'GitHub Actions · Docker · Sentry · Playwright · Fastlane'],
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-[--line]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_320px] gap-14 items-start">
          <div>
            <h2 className="display text-4xl sm:text-5xl mb-8">About</h2>
            <div className="max-w-2xl space-y-4 text-[17px] leading-relaxed text-[--muted]">
              <p>
                I&apos;m a full-stack and mobile engineer from Sarajevo. My work lives where design
                and engineering meet: I started as a graphic designer, moved into frontend, and now
                lead frontend development on commerce apps used by thousands of merchants daily.
              </p>
              <p>
                I work AI-first - Claude Code and Cursor are part of my daily workflow, including
                custom MCP servers and agent-driven delivery - and I hold the line on the details:
                performance budgets, accessibility, and interfaces that feel considered.
              </p>
              <p className="font-mono text-sm text-[--ink]">
                BEng, Computer Science &amp; IT - PIM University Sarajevo, 2023
                <br />
                English (professional) · German (conversational) · Bosnian (native)
              </p>
            </div>

            <dl className="mt-12">
              {skills.map(([group, list], i) => (
                <motion.div
                  key={group}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: 0.03 * i }}
                  className="grid sm:grid-cols-[160px_1fr] gap-1 sm:gap-8 py-3.5 border-t border-[--line] last:border-b"
                >
                  <dt className="font-mono text-xs uppercase tracking-widest text-[--muted] pt-0.5">
                    {group}
                  </dt>
                  <dd className="text-[15px]">{list}</dd>
                </motion.div>
              ))}
            </dl>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <div className="border border-[--line]">
              <Image
                src="/profile_image.jpg"
                alt="Haris Velić"
                width={640}
                height={800}
                className="w-full h-auto grayscale"
              />
              <p className="font-mono text-xs text-[--muted] px-4 py-3 border-t border-[--line]">
                Sarajevo, Bosnia &amp; Herzegovina
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
