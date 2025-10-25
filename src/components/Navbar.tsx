'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Menu, X } from 'lucide-react';
import { profile } from '@/data/cn';
import EmailSelector from './EmailSelector';
import Image from 'next/image';

const navItems = [
  { name: '关于', href: '#about' },
  { name: '教育', href: '#education' },
  { name: '奖项', href: '#awards' },
  { name: '经历', href: '#experience' },
  { name: '项目', href: '#projects' },
  { name: '技能', href: '#skills' },
  { name: '联系', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showEmailSelector, setShowEmailSelector] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // Use scrollIntoView with scroll-margin-top for accurate positioning
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center gap-3"
          >
            {/* School Logo - Desktop */}
            <div className="hidden sm:block relative w-10 h-10">
              <Image
                src="/tju.jpg"
                alt="同济大学"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <h1 className="text-xl font-inter font-semibold text-gray-900">
              {profile.name}
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={() => setShowEmailSelector(true)}
              className="btn-neon px-4 py-2 text-sm font-medium text-primary border-primary hover:bg-primary hover:text-dark-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4 mr-2 inline" />
              联系我
            </motion.button>
            <motion.a
              href={profile.links.pdf}
              download
              className="btn-neon px-4 py-2 text-sm font-medium text-accent border-accent hover:bg-accent hover:text-dark-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ 
                scale: 0.95,
                boxShadow: "0 0 20px rgba(245, 211, 0, 0.6), 0 0 40px rgba(245, 211, 0, 0.4)"
              }}
            >
              <Download className="w-4 h-4 mr-2 inline" />
              下载PDF
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-accent transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* School Logo */}
          <div className="flex items-center gap-3 px-3 py-3 mb-2 border-b border-gray-200">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/tju.jpg"
                alt="同济大学"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div>
              <p className="text-sm font-inter font-semibold text-gray-900">
                {profile.education[0].school}
              </p>
              <p className="text-xs font-inter text-gray-600">
                {profile.education[0].major}
              </p>
            </div>
          </div>
          
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 ${
                activeSection === item.href.substring(1)
                  ? 'text-gray-900 font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              whileHover={{ x: 5 }}
            >
              {item.name}
            </motion.button>
          ))}
          <div className="pt-4 pb-2 space-y-2">
            <motion.button
              onClick={() => {
                setShowEmailSelector(true);
                setIsOpen(false);
              }}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 transition-colors duration-300 w-full text-left"
              whileHover={{ x: 5 }}
            >
              <Mail className="w-4 h-4 mr-2 inline" />
              联系我
            </motion.button>
            <motion.a
              href={profile.links.pdf}
              download
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 transition-colors duration-300 rounded-lg"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4 mr-2 inline" />
              下载PDF
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Email Selector Modal */}
      <EmailSelector
        isOpen={showEmailSelector}
        onClose={() => setShowEmailSelector(false)}
        recipientEmail={profile.email}
      />
    </motion.nav>
  );
}
