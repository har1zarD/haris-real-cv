'use client';

import { motion } from 'framer-motion';
import { Download, User, Code, Palette, Database, Zap, Heart } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  const skills = {
    Programming: {
      items: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Remix',
        'React Native',
        'Swift',
        'SwiftUI',
        'Python',
        'PHP',
      ],
      icon: <Code className="w-5 h-5" />,
      color: 'text-blue-300',
      bgColor: 'bg-blue-500/15',
    },
    Backend: {
      items: ['Node.js', 'Prisma', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST'],
      icon: <Database className="w-5 h-5" />,
      color: 'text-cyan-300',
      bgColor: 'bg-cyan-500/15',
    },
    Styling: {
      items: ['Tailwind CSS', 'Polaris', 'Radix UI'],
      icon: <Palette className="w-5 h-5" />,
      color: 'text-purple-300',
      bgColor: 'bg-purple-500/15',
    },
    'Payments & Auth': {
      items: ['Stripe', 'PayPal', 'Apple IAP', 'NextAuth', 'JWT', 'OAuth'],
      icon: <Zap className="w-5 h-5" />,
      color: 'text-green-300',
      bgColor: 'bg-green-500/15',
    },
    AI: {
      items: ['OpenAI', 'Anthropic Claude'],
      icon: <Zap className="w-5 h-5" />,
      color: 'text-purple-300',
      bgColor: 'bg-purple-500/15',
    },
    DevOps: {
      items: [
        'Docker',
        'GitHub Actions',
        'Hetzner',
        'EAS Build',
        'Fastlane',
        'Sentry',
        'Playwright',
      ],
      icon: <Code className="w-5 h-5" />,
      color: 'text-blue-300',
      bgColor: 'bg-blue-500/15',
    },
    Design: {
      items: ['Adobe Illustrator', 'Photoshop', 'Blender', 'Logo Design'],
      icon: <Palette className="w-5 h-5" />,
      color: 'text-orange-300',
      bgColor: 'bg-orange-500/15',
    },
  };

  const personalTraits = [
    'Persistence',
    'Responsibility',
    'Diligence',
    'Adaptability',
    'Team Player',
    'Fast Learner',
    'Commitment',
    'Multitasking',
  ];

  const funFacts = [
    { icon: <Zap className="w-6 h-6" />, text: 'Always learning new technologies' },
    { icon: <Heart className="w-6 h-6" />, text: 'Passionate about clean code' },
    { icon: <Code className="w-6 h-6" />, text: 'Building intelligent solutions' },
  ];

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/Haris_Velic_CV.pdf';
    link.download = 'Haris_Velic_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 gradient-primary relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <div className="inline-block glass-effect rounded-full px-6 py-2 border border-blue-400/20 mb-6">
            <span className="text-blue-400 font-mono text-sm">{'<about />'}</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text-primary">Me</span>
          </h2>
          <p className="text-xl text-professional max-w-3xl mx-auto">
            Passionate full-stack developer with a diverse background in technology, design, and
            sports, always eager to tackle new challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          >
            {/* Profile Image */}
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto glass-effect rounded-2xl overflow-hidden shadow-professional-lg">
                <Image
                  src="/profile_image.jpg"
                  alt="Haris Velić - Full Stack Developer & AI Engineer"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div className="text-professional leading-relaxed space-y-4 card-professional p-6 text-lg">
              <p>
                Full-stack and mobile engineer specializing in JavaScript/TypeScript ecosystems.
                Currently <span className="text-blue-300 font-semibold">Frontend Lead at Shop
                Circle BH</span> while co-building{' '}
                <span className="text-purple-300 font-semibold">Trainera.fit</span> — a production
                fitness SaaS live on App Store, Google Play, and web.
              </p>
              <p>
                I ship real products end-to-end, from database to native mobile and AI
                integrations. Whether it&apos;s a Next.js dashboard, a React Native app, or a
                Swift/SwiftUI Apple Watch companion — I own the stack.
              </p>
              <p>
                When I&apos;m not shipping code, you can find me on the basketball court as a
                licensed referee for the Basketball Federation of Bosnia and Herzegovina.
              </p>
            </div>

            {/* Fun Facts */}
            <div className="mt-8 space-y-4">
              {funFacts.map((fact, index) => (
                <div key={index} className="flex items-center space-x-3 py-2">
                  <div className="text-blue-400">{fact.icon}</div>
                  <span className="text-professional text-lg">{fact.text}</span>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={downloadCV}
              className="mt-8 btn-primary px-8 py-4 shadow-professional-lg inline-flex items-center gap-3"
            >
              <Download size={20} />
              Download CV
            </motion.button>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Code className="w-8 h-8 text-blue-400" />
              Technical Skills
            </h3>

            <div className="space-y-6">
              {Object.entries(skills).map(([category, data], index) => (
                <div key={category} className="group card-professional p-6">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                    <div className={data.color}>{data.icon}</div>
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="pill-professional">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Personal Characteristics */}
            <div className="mt-8 card-professional p-6">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <Heart className="w-5 h-5 text-red-400" />
                Personal Characteristics
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {personalTraits.map((trait, index) => (
                  <div key={index} className="flex items-center gap-2 text-professional">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="text-base">{trait}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
