'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteData } from '@/content/index';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed px-4 w-full top-0 z-50 flex items-center justify-between  bg-yellow-500 transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className='container mx-auto px-4 w-7xl h-20 bg-red-600 flex items-center justify-between rounded-full'>
          {/* Logo */}
          <motion.div 
            className={` text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-red-600' : 'text-white'
            }`}
            whileHover={{ scale: 1.05 }}
          >
          <img
            src="/images/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="cursor-pointer"
            onClick={() => scrollToSection('#home')}
          />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-4 ">
            {siteData.navigation.links.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium transition-colors duration-300 hover:text-red-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            onClick={() => scrollToSection(siteData.navigation.ctaButton.href)}
            className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            {siteData.navigation.ctaButton.text}
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden bg-white rounded-2xl shadow-xl ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6 space-y-4">
            {siteData.navigation.links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection(siteData.navigation.ctaButton.href)}
              className="w-full bg-red-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              {siteData.navigation.ctaButton.text}
            </button>
          </div>
        </motion.div>
        </div>
    </motion.header>
  );
}