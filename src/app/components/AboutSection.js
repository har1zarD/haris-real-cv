'use client';

import { motion } from 'framer-motion';
import { Download, User, Code, Palette, Database, Zap, Heart, Coffee } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  const skills = {
    'Programming Skills': {
      items: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Remix',
        'Node.js',
        'Vue.js',
        'Python',
        'PHP',
        'MySQL',
        'MongoDB',
        'Docker',
        'Git',
      ],
      icon: <Code className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
    },
    'AI & Machine Learning': {
      items: [
        'Python',
        'TensorFlow',
        'Machine Learning',
        'Product Recommendation',
        'Data Analysis',
        'AI Integration',
      ],
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
    },
    'Shopify Development': {
      items: [
        'Shopify API',
        'Polaris Design System',
        'Shopify Apps',
        'Liquid Templates',
        'Shopify CLI',
        'GraphQL',
      ],
      icon: <Database className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',
    },
    'Design & Creative': {
      items: [
        'Adobe Illustrator',
        'Adobe Photoshop',
        'Logo Design',
        'Blender',
        'UI/UX Design',
        'Responsive Design',
        'Tailwind CSS',
      ],
      icon: <Palette className="w-5 h-5" />,
      color: 'from-cyan-500 to-blue-500',
    },
    'Other Skills': {
      items: [
        'Linux',
        'MacOS',
        'Windows',
        'Sony Vegas',
        'Premiere Pro',
        'Camtasia Studio',
        'Microsoft Office',
        'RESTful APIs',
      ],
      icon: <Zap className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500',
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
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block bg-blue-500/10 backdrop-blur-sm rounded-full px-6 py-2 border border-blue-500/20 mb-6"
          >
            <span className="text-blue-400 font-mono text-sm">{'<about />'}</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate full-stack developer with a diverse background in technology, design, and
            sports, always eager to tackle new challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Profile Image */}
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-blue-500/20">
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
            <div className="text-gray-300 leading-relaxed space-y-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <p>
                I am an ambitious and driven individual with a relentless desire to excel in life
                and make a mark in the IT industry. My diverse interests span the realms of
                technology, creative design, and sports. As a lifelong learner, I am constantly
                expanding my horizons and staying updated with the latest trends in the IT world.
              </p>
              <p>
                With a solid educational foundation in computer science, I have cultivated a
                versatile skill set that fuels my motivation to tackle new challenges head-on and
                achieve remarkable outcomes. My passion for graphic design fuels my creative flair,
                allowing me to craft visually captivating and user-friendly solutions.
              </p>
              <p>
                When I&apos;m not immersed in the world of technology, you can find me on the
                basketball court, honing my skills as a referee. This experience has taught me the
                value of fair play, quick decision-making, and effective communication—traits that
                seamlessly integrate into my professional life.
              </p>
            </div>

            {/* Fun Facts */}
            <div className="mt-8 space-y-4">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700/30"
                >
                  <div className="text-blue-400">{fact.icon}</div>
                  <span className="text-gray-300">{fact.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCV}
              className="mt-8 flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-blue-500/25"
            >
              <Download size={20} />
              Download CV
            </motion.button>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Code className="w-8 h-8 text-blue-400" />
              Technical Skills
            </h3>

            <div className="space-y-6">
              {Object.entries(skills).map(([category, data], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                    <div className={`bg-gradient-to-r ${data.color} p-2 rounded-lg text-white`}>
                      {data.icon}
                    </div>
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Personal Characteristics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50"
            >
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <Heart className="w-5 h-5 text-red-400" />
                Personal Characteristics
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {personalTraits.map((trait, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                    <span className="text-sm">{trait}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
