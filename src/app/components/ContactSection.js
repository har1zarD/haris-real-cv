'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const channels = [
  { label: 'Email', value: 'harisvelic2000@gmail.com', link: 'mailto:harisvelic2000@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/harisvelic', link: 'https://linkedin.com/in/harisvelic' },
  { label: 'GitHub', value: 'github.com/har1zarD', link: 'https://github.com/har1zarD' },
  { label: 'Phone', value: '+387 60 32 10 314', link: 'tel:+38760321031' },
  { label: 'WhatsApp', value: '+387 60 32 10 314', link: 'https://wa.me/38760321031' },
];

const inputClass =
  'w-full bg-transparent border border-[--line] px-4 py-3 text-[15px] placeholder:text-[--muted] focus:border-[--violet] transition-colors';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-[--line]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="display text-4xl sm:text-5xl mb-4">Say hello</h2>
        <p className="max-w-xl text-[--muted] mb-14">
          Open to interesting engineering problems and good teams. The fastest way to reach me is
          email - I reply within a day.
        </p>

        <div className="grid lg:grid-cols-2 gap-14">
          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            {channels.map((channel) => (
              <li key={channel.label} className="border-t border-[--line] last:border-b">
                <a
                  href={channel.link}
                  target={channel.link.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[110px_1fr] gap-6 py-4 items-baseline"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-[--muted]">
                    {channel.label}
                  </span>
                  <span className="text-[15px] group-hover:text-[--violet-light] transition-colors">
                    {channel.value}
                  </span>
                </a>
              </li>
            ))}
          </motion.ul>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                aria-label="Your name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                aria-label="Your email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              aria-label="Subject"
              value={formData.subject}
              onChange={handleChange}
              className={inputClass}
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="What are you building?"
              aria-label="Message"
              value={formData.message}
              onChange={handleChange}
              className={inputClass}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[--violet] text-white px-8 py-3 text-sm font-semibold hover:bg-[#7c4ff0] transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Sending…' : 'Send message'}
            </button>
            {status === 'success' && (
              <p className="font-mono text-xs text-[--violet-light]">Sent. I&apos;ll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="font-mono text-xs text-red-400">
                Something broke. Email me directly at harisvelic2000@gmail.com.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
