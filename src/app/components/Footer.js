'use client';

import { motion } from 'framer-motion';

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
