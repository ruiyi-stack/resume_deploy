'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, MapPin } from 'lucide-react';
import { profile } from '@/data/cn';
import EmailSelector from './EmailSelector';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showEmailSelector, setShowEmailSelector] = useState(false);

  return (
    <footer id="contact" className="bg-gray-50 border-t border-gray-200 py-12 px-4" style={{ scrollMarginTop: '64px' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {/* Left - Name & Contact */}
          <div className="space-y-4">
            <h3 className="text-2xl font-inter font-bold text-gray-900">
              {profile.name}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-4 h-4" />
                <span className="font-inter text-sm">{profile.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="font-inter text-sm">{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Center - Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => setShowEmailSelector(true)}
              className="px-6 py-3 text-sm font-inter font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4 mr-2" />
              联系我
            </motion.button>
            <motion.a
              href={profile.links.pdf}
              download
              className="px-6 py-3 text-sm font-inter font-medium text-gray-900 bg-white border-2 border-gray-900 hover:bg-gray-900 hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ 
                scale: 0.95,
                boxShadow: "0 0 20px rgba(245, 211, 0, 0.6), 0 0 40px rgba(245, 211, 0, 0.4)"
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              下载简历
            </motion.a>
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-600 font-inter text-sm">
              © {currentYear} {profile.name}
            </p>
            <p className="text-gray-500 font-inter text-xs mt-1">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </motion.div>

      </div>

      {/* Email Selector Modal */}
      <EmailSelector
        isOpen={showEmailSelector}
        onClose={() => setShowEmailSelector(false)}
        recipientEmail={profile.email}
      />
    </footer>
  );
}
