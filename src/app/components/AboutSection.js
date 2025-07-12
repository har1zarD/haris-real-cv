'use client';

import { motion } from 'framer-motion';
import { Download, User, Code, Palette, Database, Zap, Heart } from 'lucide-react';
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
      color: 'text-blue-300',
      bgColor: 'bg-blue-500/15',
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
      color: 'text-purple-300',
      bgColor: 'bg-purple-500/15',
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
      color: 'text-green-300',
      bgColor: 'bg-green-500/15',
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
      color: 'text-cyan-300',
      bgColor: 'bg-cyan-500/15',
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
            <div className="text-professional leading-relaxed space-y-4 card-professional p-6">
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
                <div
                  key={index}
                  className="flex items-center space-x-3 glass-effect rounded-xl p-4"
                >
                  <div className="text-blue-400">{fact.icon}</div>
                  <span className="text-professional">{fact.text}</span>
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
                    <div className={`${data.bgColor} p-2 rounded-lg ${data.color}`}>
                      {data.icon}
                    </div>
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
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm">{trait}</span>
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
