'use client';

import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="gradient-primary text-white py-12 border-t border-blue-400/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <motion.h3
              className="text-3xl font-bold mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-blue-400">&lt;</span>
              <span className="text-white">Haris</span>
              <span className="text-blue-400">.</span>
              <span className="text-white">Velic</span>
              <span className="text-blue-400">/&gt;</span>
            </motion.h3>
            <p className="text-professional-muted text-lg">Full Stack Developer</p>
          </div>

          <div className="flex items-center justify-center gap-3 text-professional-muted mb-6">
            <span>Crafted with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={18} className="text-red-400 fill-current" />
            </motion.div>
            <span>&</span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <Code size={18} className="text-blue-400" />
            </motion.div>
            <span>using</span>
            <span className="text-blue-400 font-semibold">Next.js</span>
            <span>&</span>
            <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-professional-muted mb-6">
            <Coffee size={16} />
            <span className="text-sm">Powered by coffee and late-night coding sessions</span>
          </div>

          <div className="pt-6 border-t border-blue-400/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-professional-muted text-sm">
                &copy; 2025 Haris Velić. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <motion.a
                  href="#home"
                  whileHover={{ scale: 1.1 }}
                  className="text-professional-muted hover:text-blue-400 transition-colors duration-200"
                >
                  Back to top
                </motion.a>
                <motion.a
                  href="mailto:haris.velic@ses.edu.ba"
                  whileHover={{ scale: 1.1 }}
                  className="text-professional-muted hover:text-blue-400 transition-colors duration-200"
                >
                  Say hello
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
