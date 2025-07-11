'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function ExperienceSection() {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const experiences = [
    {
      title: 'Frontend Developer & AI Engineer',
      company: 'Shop Circle BH',
      period: 'Dec 2023 - Present',
      duration: '1 yr',
      location: 'Zmaja od Bosne 74, Sarajevo 71000',
      type: 'Full-time',
      current: true,
      description:
        'Frontend Developer specializing in Shopify applications serving thousands of merchants globally. Started as Frontend Lead on Sky Pilot application, and after completing all responsibilities there, transitioned to Frontend Lead role on "SC Loyalty Points and Rewards" where I\'m currently working. Additionally contributed to "Hulk Mobile App Builder" as support developer and recently began working simultaneously as Frontend Lead on "SC Product Option" application. Developed AI-powered product recommendation system using Python and TensorFlow.',
      technologies: [
        'JavaScript',
        'React',
        'Vue.js',
        'Python',
        'TensorFlow',
        'AI/ML',
        'Shopify',
        'Polaris Design System',
        'Remix',
        'PHP',
        'MySQL',
        'Docker',
        'MongoDB',
      ],
      achievements: [
        'Led frontend development on Sky Pilot application',
        'Currently leading "SC Loyalty Points and Rewards" frontend',
        'Supporting "Hulk Mobile App Builder" development',
        'Leading "SC Product Option" application frontend',
        'Developed SC AI Product Recommendation system',
        'Mastered AI/ML technologies including Python and TensorFlow',
        'Implemented machine learning algorithms for product recommendations',
        "Mastered Shopify's Polaris design system",
        'Gained exposure to PHP, MySQL, Docker, and MongoDB',
      ],
    },
    {
      title: 'Assistant Production Manager',
      company: 'Dino Merlin',
      period: '2019 - 2024',
      duration: '5 yrs',
      location: 'Magaza | Ćurčiluk veliki 20, Sarajevo 71000',
      type: 'Contract',
      current: false,
      description:
        "I was deeply involved in Dino Merlin's production, focusing on scenography, stage effects, equipment logistics, and stage setup. Collaborating closely with the creative team, I brought stage designs to life, harmonizing seamlessly with Dino Merlin's artistic vision.",
      technologies: [
        'Stage Design',
        'Equipment Logistics',
        'Project Management',
        'Creative Collaboration',
      ],
      achievements: [
        'Managed lighting and stage effects (smoke machines, confetti cannons)',
        'Coordinated instrument setup and technical aspects',
        'Orchestrated equipment transportation and setup',
        'Contributed to flawless concert execution',
        'Enhanced overall concert experience for audiences',
      ],
    },
    {
      title: 'Full Stack Developer (Internship)',
      company: 'Ant Colony',
      period: 'Apr 2023 - Jul 2023',
      duration: '4 mos',
      location: 'Kolodvorska 12, Sarajevo 71000',
      type: 'Internship',
      current: false,
      description:
        'During my internship at AntColony, I worked as a Full Stack Developer, mastering technologies like TypeScript, React, and Tailwind for frontend development, and building robust APIs with Node.js for the backend. Collaborating with skilled mentors and a motivated team, we formed the most advanced group in the program.',
      technologies: [
        'TypeScript',
        'React',
        'Tailwind CSS',
        'Node.js',
        'RESTful APIs',
        'Software Architecture',
      ],
      achievements: [
        'Mastered TypeScript, React, and Tailwind CSS',
        'Built robust APIs with Node.js',
        'Collaborated with design team on user-friendly interfaces',
        'Learned software architecture and RESTful API design',
        'Worked in agile project management framework',
        'Formed part of the most advanced group in the program',
      ],
    },
    {
      title: 'Basketball Referee',
      company: 'Sarajevo Canton Basketball Association',
      period: 'Sep 2019 - Present',
      duration: '5+ yrs',
      location: 'Sarajevo, Bosnia and Herzegovina',
      type: 'Part-time',
      current: true,
      description:
        'During an impressive 12-year journey as a basketball player, I developed a passion and deep understanding of the game, which inspired me to pursue a career in basketball officiating. Determined to achieve excellence in my new role, I quickly advanced in refereeing and am now proudly listed as a licensed referee for the Basketball Federation of Bosnia and Herzegovina.',
      technologies: [
        'Leadership',
        'Decision Making',
        'Communication',
        'Conflict Resolution',
        'Rules Management',
      ],
      achievements: [
        'Licensed referee for Basketball Federation of Bosnia and Herzegovina',
        'Officiated in various basketball leagues and competitions',
        'Gained experience in managing games and high-level sports events',
        'Developed objective officiating skills',
        'Built strong leadership and communication abilities',
      ],
    },
    {
      title: 'Freelance Graphic Designer',
      company: 'Majestic Games',
      period: 'Jul 2021 - Nov 2023',
      duration: '2 yrs 5 mos',
      location: 'East 45, Abu Dhabi Island, Abu Dhabi, AE',
      type: 'Freelance',
      current: false,
      description:
        'I worked as a freelance graphic designer for Majestic Games, specializing in mobile game development. I created a wide range of visual elements for games, including characters, animations, and backgrounds. I also designed assets for social media, user interfaces, and overall user experience.',
      technologies: [
        'Adobe Illustrator',
        'Adobe Photoshop',
        'UI/UX Design',
        'Game Design',
        'Social Media Design',
      ],
      achievements: [
        'Created visual elements for mobile games',
        'Designed characters, animations, and backgrounds',
        'Developed social media assets and user interfaces',
        'Contributed to innovation and visual appeal in gaming',
        'Used modern design technologies and creative approaches',
      ],
    },
    {
      title: 'Web Developer (Internship)',
      company: 'Zira Talent Academy',
      period: 'Mar 2022 - Jun 2022',
      duration: '4 mos',
      location: 'UNITIC Business Tower, Fra Anđela Zvizdovića 1',
      type: 'Internship',
      current: false,
      description:
        'During my internship at Zira Talent Academy, I had the opportunity to work on developing websites for movies, gaining hands-on experience in both frontend and backend development. My primary objective was to create a user-friendly platform allowing users to browse and filter movies based on various criteria.',
      technologies: [
        'Frontend Development',
        'Backend Development',
        'APIs',
        'Database Management',
        'Web Security',
      ],
      achievements: [
        'Developed websites for movie platforms',
        'Built user-friendly browsing and filtering systems',
        'Focused on robust backend development',
        'Utilized APIs for frontend-backend communication',
        'Ensured scalability and security in web applications',
        'Gained practical experience in full-stack development',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              EXPERIENCE
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey through technology, design, and sports - building innovative solutions and
            developing diverse skills
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-slate-900 shadow-lg shadow-blue-500/25"></div>

                {/* Experience Card */}
                <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        {exp.current && (
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="text-blue-400 font-semibold mb-1">{exp.company}</div>
                      <div className="text-gray-400 text-sm flex items-center gap-4">
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span>{exp.duration}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
                    >
                      {expandedItems[index] ? (
                        <ChevronUpIcon className="w-5 h-5 text-blue-400" />
                      ) : (
                        <ChevronDownIcon className="w-5 h-5 text-blue-400" />
                      )}
                    </button>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-slate-700/50 text-gray-400 rounded-full text-sm">
                        +{exp.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Expandable Content */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedItems[index] ? 'auto' : 0,
                      opacity: expandedItems[index] ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-slate-700/50">
                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                      {/* All Technologies */}
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Technologies & Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="text-gray-300 text-sm flex items-start gap-2"
                            >
                              <span className="text-blue-400 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
