'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

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
      color: 'blue',
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
      color: 'purple',
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
      color: 'cyan',
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
      color: 'green',
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
      color: 'orange',
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
      color: 'indigo',
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { dot: 'bg-blue-400', accent: 'text-blue-400', bg: 'bg-blue-500/15' },
      purple: { dot: 'bg-purple-400', accent: 'text-purple-400', bg: 'bg-purple-500/15' },
      cyan: { dot: 'bg-cyan-400', accent: 'text-cyan-400', bg: 'bg-cyan-500/15' },
      green: { dot: 'bg-green-400', accent: 'text-green-400', bg: 'bg-green-500/15' },
      orange: { dot: 'bg-orange-400', accent: 'text-orange-400', bg: 'bg-orange-500/15' },
      indigo: { dot: 'bg-indigo-400', accent: 'text-indigo-400', bg: 'bg-indigo-500/15' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="experience" className="py-20 gradient-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-primary">EXPERIENCE</span>
          </h2>
          <p className="text-xl text-professional max-w-3xl mx-auto">
            My journey through technology, design, and sports - building innovative solutions and
            developing diverse skills
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div
            className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colorClasses = getColorClasses(exp.color);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: 'easeOut',
                  }}
                  className="relative pl-20"
                >
                  {/* Animated Timeline Dot */}
                  <motion.div
                    className={`absolute left-6 top-8 w-4 h-4 ${colorClasses.dot} rounded-full border-4 border-gray-900 shadow-professional z-10`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.2 + 0.3,
                      type: 'spring',
                      stiffness: 300,
                    }}
                  />

                  {/* Experience Card */}
                  <motion.div
                    className="card-professional p-8 hover:shadow-professional-lg transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    {/* Header Section */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <BriefcaseIcon className={`w-5 h-5 ${colorClasses.accent}`} />
                          <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                          {exp.current && (
                            <motion.span
                              className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.accent} text-xs font-bold rounded-full border border-current/30`}
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ delay: index * 0.2 + 0.5 }}
                            >
                              Current
                            </motion.span>
                          )}
                        </div>

                        <div className={`text-lg font-semibold mb-2 ${colorClasses.accent}`}>
                          {exp.company}
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-professional-muted text-sm">
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <span>•</span>
                          <span className="font-medium">{exp.duration}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <MapPinIcon className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <motion.button
                        onClick={() => toggleExpanded(index)}
                        className={`p-3 hover:${colorClasses.bg} rounded-xl transition-all duration-300 group`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {expandedItems[index] ? (
                          <ChevronUpIcon
                            className={`w-5 h-5 ${colorClasses.accent} group-hover:scale-110 transition-transform`}
                          />
                        ) : (
                          <ChevronDownIcon
                            className={`w-5 h-5 ${colorClasses.accent} group-hover:scale-110 transition-transform`}
                          />
                        )}
                      </motion.button>
                    </div>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.technologies.slice(0, 5).map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="pill-professional"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {exp.technologies.length > 5 && (
                        <span className="px-3 py-1 bg-gray-700/30 text-professional-muted rounded-full text-sm">
                          +{exp.technologies.length - 5} more
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
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className={`pt-6 border-t border-blue-400/20`}>
                        <p className="text-professional mb-6 leading-relaxed text-lg">
                          {exp.description}
                        </p>

                        {/* All Technologies */}
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <div className={`w-2 h-2 ${colorClasses.dot} rounded-full`}></div>
                            Technologies & Skills
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="pill-professional">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <div className={`w-2 h-2 ${colorClasses.dot} rounded-full`}></div>
                            Key Achievements
                          </h4>
                          <div className="grid gap-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.div
                                key={achIndex}
                                className="flex items-start gap-3 p-3 glass-effect rounded-lg"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: achIndex * 0.1 }}
                              >
                                <div
                                  className={`w-1.5 h-1.5 ${colorClasses.dot} rounded-full mt-2 flex-shrink-0`}
                                ></div>
                                <span className="text-professional text-sm leading-relaxed">
                                  {achievement}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
