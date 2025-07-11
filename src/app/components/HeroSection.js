'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [floatingTechVariants, setFloatingTechVariants] = useState([]);

  const techStack = useMemo(
    () => [
      {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'Next.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      },
      {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Shopify',
        icon: 'https://github.com/Shopify.png',
      },
      {
        name: 'MySQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'Docker',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      },
      {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'Remix',
        icon: 'https://github.com/remix-run.png',
      },
      {
        name: 'Vue.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      },
      {
        name: 'Tailwind',
        icon: 'https://www.svgrepo.com/show/333609/tailwind-css.svg',
      },
      {
        name: 'TensorFlow',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      },
    ],
    [],
  );

  // Properly distributed positions across the entire hero section
  const techPositions = [
    { top: '8%', left: '5%' },
    { top: '28%', right: '8%' },
    { top: '19%', right: '2%' },
    { top: '25%', left: '3%' },
    { top: '35%', right: '12%' },
    { top: '42%', left: '7%' },
    { top: '55%', right: '2%' },
    { top: '55%', left: '10%' },
    { top: '68%', right: '10%' },
    { top: '60%', left: '4%' },
    { top: '75%', right: '5%' },
    { top: '12%', left: '85%' },
    { top: '28%', right: '85%' },
    { top: '48%', left: '88%' },
    { top: '79%', right: '82%' },
  ];

  useEffect(() => {
    const variants = techStack.map((_, index) => ({
      animate: {
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.1, 1],
      },
      transition: {
        duration: 6 + index * 0.3,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay: index * 0.4,
      },
    }));
    setFloatingTechVariants(variants);
  }, [techStack]);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/Haris_Velic_CV.pdf';
    link.download = 'Haris_Velic_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Tech Stack - Single Layer, No Duplicates */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute"
            style={{
              ...techPositions[index % techPositions.length],
              filter: 'blur(0.5px)',
              opacity: 0.3,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
          >
            <motion.div
              className="bg-white/5 backdrop-blur-sm p-3 rounded-xl shadow-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              animate={floatingTechVariants[index]?.animate}
              transition={floatingTechVariants[index]?.transition}
              whileHover={{ scale: 1.2, opacity: 0.6 }}
            >
              <div className="text-center">
                <div className="w-10 h-10 mb-2 mx-auto relative">
                  <Image src={tech.icon} alt={tech.name} fill className="object-contain" />
                </div>
                <div className="text-white font-medium text-xs">{tech.name}</div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                HARIS
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                VELIĆ
              </span>
            </motion.h1>

            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                FULL STACK DEVELOPER
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Crafting digital experiences with modern technologies.
              <span className="text-blue-400 font-semibold"> 3+ years</span> of building
              <span className="text-cyan-400 font-semibold"> innovative solutions</span> that serve
              <span className="text-purple-400 font-semibold"> thousands globally</span>.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full text-lg shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
                }
              >
                View My Work
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-bold rounded-full text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
              >
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Improved Laptop Design */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Laptop */}
            <div className="relative">
              {/* Laptop Screen */}
              <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl shadow-2xl border-8 border-slate-700 overflow-hidden transform perspective-1000">
                {/* Screen Content */}
                <div className="bg-slate-900 p-4 rounded-xl">
                  {/* VS Code Header */}
                  <div className="bg-slate-800 rounded-lg overflow-hidden shadow-inner">
                    <div className="bg-slate-900 px-6 py-3 flex items-center justify-between border-b border-slate-700">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                        <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                        <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                      </div>
                      <div className="text-gray-400 text-sm font-mono bg-slate-800 px-4 py-2 rounded-lg">
                        developer.js
                      </div>
                      <div className="w-8"></div>
                    </div>

                    {/* VS Code Interface */}
                    <div className="flex">
                      {/* Code Editor */}
                      <div className="flex-1 bg-slate-800">
                        {/* File Tabs */}
                        <div className="bg-slate-700 px-6 py-2 flex space-x-4 border-b border-slate-600">
                          <div className="bg-slate-800 px-4 py-2 rounded-t-lg text-sm text-blue-400 font-mono shadow-lg">
                            developer.js
                          </div>
                          <div className="bg-slate-600 px-4 py-2 rounded-t-lg text-sm text-gray-400 font-mono">
                            skills.json
                          </div>
                        </div>

                        {/* Code Content */}
                        <div className="p-6 font-mono text-sm leading-relaxed">
                          <div className="space-y-2">
                            <div className="text-gray-500">
                              <span className="text-green-400">&quot;//&quot;</span> Full Stack
                              Developer Profile
                            </div>
                            <div className="text-blue-400">
                              const <span className="text-cyan-400">developer</span> = {'{'}
                            </div>
                            <div className="ml-6 text-green-400">
                              name: <span className="text-yellow-400">&quot;Haris Velić&quot;</span>
                              ,
                            </div>
                            <div className="ml-6 text-green-400">
                              role:{' '}
                              <span className="text-yellow-400">
                                &quot;Full Stack Developer & AI Engineer&quot;
                              </span>
                              ,
                            </div>
                            <div className="ml-6 text-green-400">
                              location:{' '}
                              <span className="text-yellow-400">&quot;Sarajevo, BiH&quot;</span>,
                            </div>
                            <div className="ml-6 text-green-400">
                              experience: <span className="text-purple-400">3</span>,
                            </div>
                            <div className="ml-6 text-green-400">
                              company:{' '}
                              <span className="text-yellow-400">&quot;Shop Circle BH&quot;</span>,
                            </div>
                            <div className="ml-6 text-green-400">skills: [</div>
                            <div className="ml-10 text-yellow-400">
                              &quot;TypeScript&quot;, &quot;JavaScript&quot;, &quot;React&quot;,
                            </div>
                            <div className="ml-10 text-yellow-400">
                              &quot;Next.js&quot;, &quot;Remix&quot;, &quot;Python&quot;,
                            </div>
                            <div className="ml-10 text-yellow-400">
                              &quot;TensorFlow&quot;, &quot;AI/ML&quot;, &quot;Shopify&quot;,
                            </div>
                            <div className="ml-10 text-yellow-400">
                              &quot;Node.js&quot;, &quot;MySQL&quot;, &quot;MongoDB&quot;,
                            </div>
                            <div className="ml-10 text-yellow-400">
                              &quot;Git&quot;, &quot;Docker&quot;, &quot;Vue.js&quot;
                            </div>
                            <div className="ml-6 text-green-400">],</div>
                            <div className="ml-6 text-green-400">
                              passion:{' '}
                              <span className="text-yellow-400">
                                &quot;Building intelligent solutions&quot;
                              </span>
                              ,
                            </div>
                            <div className="ml-6 text-green-400">
                              available: <span className="text-purple-400">true</span>
                            </div>
                            <div className="text-blue-400">{'}'}</div>
                            <div className="text-gray-500 mt-3">
                              <span className="text-green-400">&quot;//&quot;</span> Ready to build
                              something amazing?
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Base */}
              <div className="bg-gradient-to-b from-slate-600 to-slate-700 rounded-b-3xl h-8 shadow-2xl border-8 border-t-0 border-slate-700 relative">
                {/* Laptop Hinge */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-slate-800 rounded-b-lg"></div>
              </div>

              {/* Laptop Shadow */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full h-12 bg-black/30 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center backdrop-blur-sm"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
