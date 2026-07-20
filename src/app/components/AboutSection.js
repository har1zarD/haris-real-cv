'use client';

import { motion } from 'framer-motion';

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
    <section id="about" className="relative py-24 sm:py-32 border-t border-[--line] overflow-hidden">
      <div
        className="absolute top-0 left-[-20%] w-[60vw] h-[60vw] max-w-3xl max-h-[48rem] hero-glow opacity-60 pointer-events-none"
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-10"
        >
          What I <span className="gradient-violet">do</span>
        </motion.h2>

        <div className="max-w-2xl space-y-4 text-[17px] leading-relaxed text-[--muted]">
          <p>
            My work lives where design and engineering meet: I started as a graphic designer, moved
            into frontend, and now lead frontend development on commerce apps used by thousands of
            merchants every day. On the side I founded Trainera.fit and shipped it solo across web,
            iOS, Android, and Apple Watch.
          </p>
          <p>
            I work AI-first - Claude Code and Cursor are part of my daily workflow, including custom
            MCP servers and agent-driven delivery - and I hold the line on the details: performance
            budgets, accessibility, and interfaces that feel considered.
          </p>
          <p className="font-mono text-sm text-[--ink] leading-relaxed">
            BEng, Computer Science &amp; IT - PIM University Sarajevo, 2023
            <br />
            English (professional) · German (conversational) · Bosnian (native)
          </p>
        </div>

        <dl className="mt-14">
          {skills.map(([group, list], i) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.03 * i }}
              className="grid sm:grid-cols-[170px_1fr] gap-1 sm:gap-8 py-4 border-t border-[--line] last:border-b"
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--violet-light] pt-0.5">
                {group}
              </dt>
              <dd className="text-[15px] text-[--ink]">{list}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
