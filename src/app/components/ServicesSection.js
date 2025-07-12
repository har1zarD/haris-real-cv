'use client';

import { motion } from 'framer-motion';
import { CodeBracketIcon, ShoppingCartIcon, PaintBrushIcon } from '@heroicons/react/24/outline';

export default function ServicesSection() {
  const services = [
    {
      icon: <CodeBracketIcon className="w-8 h-8" />,
      title: 'Full Stack Development',
      description:
        'Building modern web applications with React, Node.js, and cutting-edge technologies.',
      features: [
        'React & Next.js',
        'Node.js & Express',
        'TypeScript',
        'Database Design',
        'API Development',
        'Cloud Deployment',
      ],
      iconColor: 'text-blue-300',
      bgColor: 'bg-blue-500/15',
    },
    {
      icon: <ShoppingCartIcon className="w-8 h-8" />,
      title: 'E-commerce Solutions',
      description: 'Creating powerful Shopify applications and custom e-commerce platforms.',
      features: [
        'Shopify Apps',
        'Custom Themes',
        'Payment Integration',
        'Inventory Management',
        'Analytics',
        'Performance Optimization',
      ],
      iconColor: 'text-cyan-300',
      bgColor: 'bg-cyan-500/15',
    },
    {
      icon: <PaintBrushIcon className="w-8 h-8" />,
      title: 'UI/UX Design',
      description:
        'Designing beautiful and intuitive user interfaces with modern design principles.',
      features: [
        'Responsive Design',
        'User Experience',
        'Design Systems',
        'Prototyping',
        'Accessibility',
        'Modern Animations',
      ],
      iconColor: 'text-blue-200',
      bgColor: 'bg-blue-400/15',
    },
  ];

  const stats = [
    {
      number: '8+',
      label: 'Projects Completed',
      description: 'Successful projects delivered',
    },
    {
      number: '3+',
      label: 'Years Experience',
      description: 'In web development',
    },
    {
      number: '4+',
      label: 'Companies Worked',
      description: 'Diverse industry experience',
    },
  ];

  return (
    <section id="services" className="py-20 gradient-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-primary">SERVICES & EXPERTISE</span>
          </h2>
          <p className="text-xl text-professional max-w-3xl mx-auto">
            Transforming ideas into powerful digital solutions with modern technologies and best
            practices
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="card-professional p-8 h-full">
                {/* Service Icon */}
                <div
                  className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}
                >
                  <div className={service.iconColor}>{service.icon}</div>
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-professional-muted mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-professional">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="card-professional p-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-4">
                  <div className="text-5xl md:text-6xl font-black gradient-text-primary">
                    {stat.number}
                  </div>
                  <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full"></div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{stat.label}</h4>
                <p className="text-professional-muted">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to start your project?</h3>
          <p className="text-professional mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to bring your ideas to life with cutting-edge technology and
            modern design
          </p>
          <motion.button
            className="btn-primary text-lg px-8 py-4 shadow-professional-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
