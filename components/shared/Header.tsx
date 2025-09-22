'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteData } from '@/content/index';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      console.log(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll y', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className={`container mx-auto px-4 bg-white flex items-center justify-between rounded-full transition-all duration-300 ${
        isScrolled ? 'h-16 shadow-lg' : 'h-20'
      }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="Logo"
              className={`cursor-pointer transition-all duration-300 ${
                isScrolled ? 'w-12 h-12' : 'w-14 h-14'
              }`}
              onClick={() => scrollToSection('#home')}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-6 flex-1 max-w-md mx-8">
            {siteData.navigation.links.map((link, index) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium transition-colors duration-300 hover:text-red-500 text-sm ${
                  isScrolled ? 'text-gray-700' : 'text-black'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection(siteData.navigation.ctaButton.href)}
            className={`hidden lg:block bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 ${
              isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3'
            }`}
          >
            {siteData.navigation.ctaButton.text}
          </button>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {siteData.navigation.links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors text-sm"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection(siteData.navigation.ctaButton.href)}
            className="w-full bg-red-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm mt-4"
          >
            {siteData.navigation.ctaButton.text}
          </button>
        </div>
      </div>
    </header>
  );
}