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
      title: 'SC AI Product Recommendation',
      description:
        'AI-powered product recommendation engine for Shopify stores using machine learning algorithms to boost sales and customer engagement.',
      image:
        'https://cdn.shopify.com/s/files/1/0090/9236/6436/files/image7_da72d947-3efb-495d-8879-8ba7654235f2_1024x1024.jpg?v=1580958042',
      users: null,
      rating: null,
      reviews: null,
      tech: ['Python', 'TensorFlow'],
      link: null,
      gradient: 'from-purple-500 to-pink-500',
      isPrivate: true,
    },
    {
      title: 'Sky Pilot',
      description:
        'Digital file delivery app for Shopify merchants with advanced features and seamless integration.',
      image: 'https://i.ytimg.com/vi/l4bqRg3I2Vk/maxresdefault.jpg',
      users: '2,500+',
      rating: '4.9',
      reviews: '150+',
      tech: ['Ruby', 'TypeScript', 'React', 'MySQL', 'Shopify'],
      link: 'https://apps.shopify.com/sky-pilot',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'SC Loyalty Rewards',
      description:
        'Comprehensive loyalty and rewards program for Shopify stores to boost customer retention.',
      image: 'https://i.ytimg.com/vi/yUthw4az4g0/maxresdefault.jpg',
      users: '1,800+',
      rating: '4.8',
      reviews: '120+',
      tech: ['React', 'PHP', 'Laravel', 'Shopify', 'MySQL', 'TypeScript'],
      link: 'https://apps.shopify.com/loyalty-points-by-bold',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'SC Product Options',
      description:
        'Advanced product customization app enabling merchants to offer unlimited product variants.',
      image:
        'https://i.ytimg.com/vi/BlLZ9vgtNz4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVqTBSu0baQeJxKPLKnV6lrpePtQ',
      users: '3,200+',
      rating: '4.9',
      reviews: '200+',
      tech: ['React', 'PHP', 'Laravel', 'Shopify', 'MySQL', 'TypeScript'],
      link: 'https://apps.shopify.com/product-options',
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      title: 'Hulk Mobile App Builder',
      description:
        'No-code mobile app builder for Shopify stores with native features and push notifications.',
      image:
        'https://www.hulkapps.com/cdn/shop/files/MOBILE_APP_BUILDER_1280x720_2996e7ea-15ed-4e8d-9065-131b9d655208.png?v=1689761960',
      users: '5,000+',
      rating: '4.7',
      reviews: '300+',
      tech: ['Vue.js', 'Tailwind CSS', 'Node.js', 'React Native', 'MongoDB'],
      link: 'https://apps.shopify.com/mobile-app-builder',
      gradient: 'from-purple-600 to-blue-500',
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
      gradient: 'from-orange-500 to-red-500',
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
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              FEATURED PROJECTS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Applications serving thousands of users globally with cutting-edge features and
            performance
          </p>
        </motion.div>

        {/* Projects Horizontal Scroll */}
        <div className="relative">
          {/* Scroll Buttons */}
          <motion.button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-slate-800/90 backdrop-blur-xl rounded-full border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 ${
              !canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-700/90'
            }`}
            disabled={!canScrollLeft}
            whileHover={{ scale: canScrollLeft ? 1.1 : 1 }}
            whileTap={{ scale: canScrollLeft ? 0.9 : 1 }}
          >
            <ChevronLeftIcon className="w-6 h-6 text-blue-400" />
          </motion.button>

          <motion.button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-slate-800/90 backdrop-blur-xl rounded-full border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 ${
              !canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-700/90'
            }`}
            disabled={!canScrollRight}
            whileHover={{ scale: canScrollRight ? 1.1 : 1 }}
            whileTap={{ scale: canScrollRight ? 0.9 : 1 }}
          >
            <ChevronRightIcon className="w-6 h-6 text-blue-400" />
          </motion.button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative flex-shrink-0 w-96"
              >
                <div
                  className="bg-slate-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 h-full cursor-pointer"
                  onClick={() =>
                    project.link && window.open(project.link, '_blank', 'noopener,noreferrer')
                  }
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
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
                          className={`w-24 h-24 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center`}
                        >
                          <div className="text-white text-2xl font-bold">
                            {project.title
                              .split(' ')
                              .map((word) => word[0])
                              .join('')}
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.link && (
                        <motion.div
                          className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                        </motion.div>
                      )}
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Project Stats - Only show for public projects */}
                    {!project.isPrivate && (
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <UserGroupIcon className="w-4 h-4 text-blue-400" />
                          <span className="text-white font-semibold text-sm">{project.users}</span>
                          <span className="text-gray-400 text-xs">users</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold text-sm">{project.rating}</span>
                          <span className="text-gray-400 text-xs">({project.reviews})</span>
                        </div>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-300 text-xs font-medium rounded-full border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="text-gray-400 text-sm">Scroll horizontally to see all projects</div>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Want to see more projects?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Check out my GitHub profile for more open-source projects and contributions
          </p>
          <motion.a
            href="https://github.com/har1zarD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full text-lg shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.5)',
            }}
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
