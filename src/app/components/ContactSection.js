'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  MessageCircle,
  Send,
  MapPin,
  Clock,
  User,
  AtSign,
  FileText,
  MessageSquare,
  CheckCircle,
  Star,
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        console.error('Error:', data.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'haris.velic@ses.edu.ba',
      link: 'mailto:haris.velic@ses.edu.ba',
      color: 'text-blue-300',
      bgColor: 'bg-blue-500/15',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/harisvelic',
      link: 'https://linkedin.com/in/harisvelic',
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/15',
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'github.com/har1zarD',
      link: 'https://github.com/har1zarD',
      color: 'text-gray-300',
      bgColor: 'bg-gray-600/15',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+387-60-32-10-314',
      link: 'tel:+38760321031',
      color: 'text-green-300',
      bgColor: 'bg-green-500/15',
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'Viber',
      value: '+387-60-32-10-314',
      link: 'viber://chat?number=+38760321031',
      color: 'text-purple-300',
      bgColor: 'bg-purple-500/15',
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'WhatsApp',
      value: '+387-60-32-10-314',
      link: 'https://wa.me/38760321031',
      color: 'text-green-400',
      bgColor: 'bg-green-600/15',
    },
  ];

  const projectTypes = [
    { icon: <FileText className="w-5 h-5" />, label: 'Web Development', color: 'text-blue-300' },
    { icon: <MessageSquare className="w-5 h-5" />, label: 'Consulting', color: 'text-green-300' },
    { icon: <Star className="w-5 h-5" />, label: 'Full Stack Projects', color: 'text-purple-300' },
    { icon: <CheckCircle className="w-5 h-5" />, label: 'Code Review', color: 'text-cyan-300' },
  ];

  return (
    <section id="contact" className="py-20 gradient-primary relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/3 rounded-full blur-3xl"></div>
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
            <span className="text-blue-400 font-mono text-sm">{'<contact />'}</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In <span className="gradient-text-primary">Touch</span>
          </h2>
          <p className="text-xl text-professional max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your next project and create
            something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-8"
          >
            <div className="card-professional p-8">
              <h3 className="text-3xl font-bold text-white mb-6">Let&apos;s Connect</h3>
              <p className="text-professional text-lg leading-relaxed mb-8">
                I&apos;m always open to discussing new opportunities, exciting projects, or just
                having a friendly chat about technology and development. Feel free to reach out
                through any of the channels below.
              </p>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 glass-effect rounded-xl hover:bg-blue-500/5 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div
                      className={`${contact.bgColor} p-3 rounded-lg ${contact.color} group-hover:scale-105 transition-transform duration-300`}
                    >
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm text-professional-muted font-medium">
                        {contact.label}
                      </div>
                      <div className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="glass-effect rounded-2xl p-6 border border-blue-400/20">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-blue-400" />
                <h4 className="text-xl font-bold text-white">Quick Response</h4>
              </div>
              <p className="text-professional">
                I typically respond to messages within 24 hours. For urgent matters, feel free to
                call or message me directly.
              </p>
              <div className="flex items-center gap-2 mt-4 text-blue-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Sarajevo, Bosnia and Herzegovina</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
            className="card-professional p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Send className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Send Message</h3>
            </div>

            {/* Project Types */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">What can I help you with?</h4>
              <div className="grid grid-cols-2 gap-3">
                {projectTypes.map((type, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 glass-effect rounded-lg hover:bg-blue-500/5 transition-all duration-300"
                  >
                    <div className={type.color}>{type.icon}</div>
                    <span className="text-professional text-sm">{type.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-professional mb-2"
                  >
                    <User className="w-4 h-4 inline mr-2" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-professional mb-2"
                  >
                    <AtSign className="w-4 h-4 inline mr-2" />
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-professional mb-2"
                >
                  <FileText className="w-4 h-4 inline mr-2" />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                  placeholder="What's this about?"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-professional mb-2"
                >
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 resize-vertical text-white placeholder-gray-400"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/15 border border-green-400/30 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-green-400 font-semibold">Message sent successfully!</p>
                    <p className="text-green-300 text-sm">
                      I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/15 border border-red-400/30 rounded-lg flex items-center gap-3"
                >
                  <div className="w-5 h-5 text-red-400">⚠️</div>
                  <div>
                    <p className="text-red-400 font-semibold">Failed to send message</p>
                    <p className="text-red-300 text-sm">Please try again or contact me directly.</p>
                  </div>
                </motion.div>
              )}

              {/* Form Stats */}
              <div className=" gap-4 py-4 border-t flex justify-center items-center border-blue-400/20">
                <div className="text-center flex justify-center items-center">
                  <div className="text-md text-center text-professional-muted">
                    Usually replies within 24 hours
                  </div>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full btn-primary py-4 px-6 shadow-professional-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
