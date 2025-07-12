'use client';

import { motion } from 'framer-motion';
import {
  ArrowTopRightOnSquareIcon,
  StarIcon,
  UserGroupIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { useState, useRef } from 'react';
import Image from 'next/image';

export default function ProjectsSection() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const projects = [
    {
      title: 'Sky Pilot',
      description:
        'Digital file delivery app for Shopify merchants with advanced features and seamless integration.',
      image: 'https://i.ytimg.com/vi/l4bqRg3I2Vk/maxresdefault.jpg',
      users: '2,700+',
      rating: '4.9',
      reviews: '300+',
      tech: ['Ruby', 'TypeScript', 'React', 'MySQL', 'Shopify'],
      link: 'https://apps.shopify.com/sky-pilot',
      accentColor: 'blue-400',
    },
    {
      title: 'SC Loyalty Rewards',
      description:
        'Comprehensive loyalty and rewards program for Shopify stores to boost customer retention.',
      image: 'https://i.ytimg.com/vi/yUthw4az4g0/maxresdefault.jpg',
      users: '2000+',
      rating: '4.3',
      reviews: '70+',
      tech: ['React', 'PHP', 'Laravel', 'Shopify', 'MySQL', 'MongoDB', 'TypeScript'],
      link: 'https://apps.shopify.com/loyalty-points-by-bold',
      accentColor: 'cyan-400',
    },
    {
      title: 'SC Product Options',
      description:
        'Advanced product customization app enabling merchants to offer unlimited product variants.',
      image:
        'https://i.ytimg.com/vi/BlLZ9vgtNz4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVqTBSu0baQeJxKPLKnV6lrpePtQ',
      users: '4,500+',
      rating: '4.8',
      reviews: '1,280+',
      tech: ['React', 'PHP', 'Laravel', 'Shopify', 'MySQL', 'MongoDB', 'TypeScript'],
      link: 'https://apps.shopify.com/product-options',
      accentColor: 'blue-300',
    },
    {
      title: 'Hulk Mobile App Builder',
      description:
        'No-code mobile app builder for Shopify stores with native features and push notifications.',
      image:
        'https://www.hulkapps.com/cdn/shop/files/MOBILE_APP_BUILDER_1280x720_2996e7ea-15ed-4e8d-9065-131b9d655208.png?v=1689761960',
      users: '10+',
      rating: '5.0',
      reviews: '70+',
      tech: ['Vue.js', 'Tailwind CSS'],
      link: 'https://apps.shopify.com/mobile-app-builder',
      accentColor: 'purple-300',
    },
    {
      title: 'UKSK',
      description:
        'Basketball referee delegation system for Sarajevo Canton Basketball Association. Automates referee assignments, tracks finances, and manages payments. Built with MERN stack (MongoDB, Express.js, React, Node.js).',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQoxefgCPEkHnxtaOCS-2mJ8QBWazkfHaAzA&s',
      users: null,
      rating: null,
      reviews: null,
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript'],
      link: 'https://www.utakmice.uksk.ba/',
      accentColor: 'orange-400',
      isPrivate: true,
    },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 400;
      const newScrollPosition =
        direction === 'left'
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
    }
  };

  return (
    <section id="projects" className="py-20 gradient-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-primary">FEATURED PROJECTS</span>
          </h2>
          <p className="text-xl text-professional max-w-3xl mx-auto">
            Applications serving thousands of users globally with cutting-edge features and
            performance
          </p>
        </motion.div>

        {/* Projects Horizontal Scroll */}
        <div className="relative">
          {/* Scroll Buttons */}
          <motion.button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 glass-effect rounded-full border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 ${
              !canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500/10'
            }`}
            disabled={!canScrollLeft}
            whileHover={{ scale: canScrollLeft ? 1.1 : 1 }}
            whileTap={{ scale: canScrollLeft ? 0.9 : 1 }}
          >
            <ChevronLeftIcon className="w-6 h-6 text-blue-400" />
          </motion.button>

          <motion.button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 glass-effect rounded-full border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 ${
              !canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500/10'
            }`}
            disabled={!canScrollRight}
            whileHover={{ scale: canScrollRight ? 1.1 : 1 }}
            whileTap={{ scale: canScrollRight ? 0.9 : 1 }}
          >
            <ChevronRightIcon className="w-6 h-6 text-blue-400" />
          </motion.button>

          {/* Scrollable Container */}
          <motion.div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide pb-4 px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          >
            {projects.map((project, index) => (
              <div key={index} className="group relative flex-shrink-0 w-96">
                <div
                  className="card-professional overflow-hidden h-full cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
                  onClick={() =>
                    project.link && window.open(project.link, '_blank', 'noopener,noreferrer')
                  }
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                    {project.image.startsWith('http') ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div
                          className={`w-24 h-24 bg-${project.accentColor}/20 rounded-2xl flex items-center justify-center`}
                        >
                          <div className={`text-${project.accentColor} text-2xl font-bold`}>
                            {project.title
                              .split(' ')
                              .map((word) => word[0])
                              .join('')}
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3
                        className={`text-xl font-bold text-white group-hover:text-${project.accentColor} transition-colors duration-300`}
                      >
                        {project.title}
                      </h3>
                      {project.link && (
                        <motion.div
                          className="btn-primary p-2 text-sm"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                        </motion.div>
                      )}
                    </div>

                    <p className="text-professional-muted mb-6 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Project Stats - Only show for public projects */}
                    {!project.isPrivate && (
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <UserGroupIcon className="w-4 h-4 text-blue-400" />
                          <span className="text-white font-semibold text-sm">{project.users}</span>
                          <span className="text-professional-muted text-xs">users</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold text-sm">{project.rating}</span>
                          <span className="text-professional-muted text-xs">
                            ({project.reviews})
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="pill-professional">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="text-professional-muted text-sm">
              Scroll horizontally to see all projects
            </div>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Want to see more projects?</h3>
          <p className="text-professional mb-8 max-w-2xl mx-auto">
            Check out my GitHub profile for more open-source projects and contributions
          </p>
          <motion.a
            href="https://github.com/har1zarD"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 shadow-professional-lg inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
