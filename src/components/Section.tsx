'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -80 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, margin: "-50px" }}
      className={`pt-[38px] pb-16 px-4 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-gray-900 mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Section Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}
