'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteData } from '@/content/index';
import Image from 'next/image';
import Link from 'next/link';

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
    if (href.startsWith('/')) {
      // External link - navigate to page
      window.location.href = href;
    } else {
      // Internal link - scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`bg-transparent h-full w-full  fixed top-10 left-0 z-50
        }`}
    >
      <div className={`layout bg-white sm:w-1/2 flex items-center justify-between rounded-full transition-all duration-300 overflow-hidden ${isScrolled ? 'h-10 xs:h-12 sm:h-14 md:h-16 shadow-lg' : 'h-12 xs:h-14 sm:h-16 md:h-20'
        }`}>
        {/* Logo */}
      
          <Image
            src="/images/logo.png"
            width={100}
            height={100}
            alt="Logo"
            className={`cursor-pointer transition-all duration-300 ${isScrolled ? 'w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' : 'w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14'
              }`}
            onClick={() => scrollToSection('#home')}
          />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-3 lg:gap-6 lg:mx-8">
          {siteData.navigation.links.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`font-medium transition-colors duration-300 hover:text-[#FF8C00] text-xs md:text-sm lg:text-base ${isScrolled ? 'text-gray-700' : 'text-black'
                }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* User & Cart Icons - Mobile Only */}
        <div className="hidden md:flex items-center justify-center gap-2 lg:gap-3 xl:gap-4">
          <Link
            href="/user"
            className="flex items-center justify-center p-1 lg:p-1.5 xl:p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            style={{ minWidth: 36, minHeight: 36 }}
            aria-label="User Account"
          >
            <Image
              src="/svg/user.svg"
              alt="User Account"
              width={22}
              height={22}
              className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
              style={{ maxWidth: "100%", height: "auto" }}
              priority
            />
          </Link>
          <Link
            href="/cart"
            className="flex items-center justify-center p-1 lg:p-1.5 xl:p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            style={{ minWidth: 36, minHeight: 36 }}
            aria-label="Shopping Cart"
          >
            <Image
              src="/svg/cart.svg"
              alt="Shopping Cart"
              width={22}
              height={22}
              className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
              style={{ maxWidth: "100%", height: "auto" }}
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-1 xs:p-1.5 sm:p-2 rounded-lg transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-700 hover:bg-gray-100'
            }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={18} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6" /> : <Menu size={18} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6" />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-2 right-2 xs:left-3 xs:right-3 sm:left-4 sm:right-4 mt-1 xs:mt-2 bg-white rounded-xl xs:rounded-2xl shadow-xl transition-all duration-300 max-w-[calc(100vw-1rem)] ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className="px-2 py-3 xs:px-3 xs:py-4 sm:px-4 sm:py-6 space-y-1 xs:space-y-1 sm:space-y-2">
          {/* User & Cart Links in Mobile Menu */}
          <div className="flex items-center justify-center gap-2 xs:gap-4 pb-2 border-b border-gray-200">
            <Link
              href={'/user'}
              className="flex items-center gap-1 xs:gap-2 px-2 xs:px-3 py-1.5 xs:py-2 text-gray-700 hover:bg-[#FF8C00]/10 hover:text-[#FF8C00] rounded-lg transition-colors text-xs xs:text-sm sm:text-base"
            >
              <Image src="/svg/user.svg" alt="User Account" width={14} height={14} className="xs:w-4 xs:h-4" />
              Account
            </Link>
            <Link
              href={'/cart'}
              className="flex items-center gap-1 xs:gap-2 px-2 xs:px-3 py-1.5 xs:py-2 text-gray-700 hover:bg-[#FF8C00]/10 hover:text-[#FF8C00] rounded-lg transition-colors text-xs xs:text-sm sm:text-base"
            >
              <Image src="/svg/cart.svg" alt="Shopping Cart" width={14} height={14} className="xs:w-4 xs:h-4" />
              Cart
            </Link>
          </div>

          {/* Navigation Links */}
          {siteData.navigation.links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left px-2 xs:px-3 py-1.5 xs:py-2 sm:px-4 sm:py-3 text-gray-700 hover:bg-[#FF8C00]/10 hover:text-[#FF8C00] rounded-lg transition-colors text-xs xs:text-sm sm:text-base"
            >
              {link.name}
            </button>
          ))}

        </div>
      </div>
    </header>
  );
}