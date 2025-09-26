'use client';

import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { siteData } from '@/content/index';

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#E85A2D] text-white py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {/* Left Column - Contact Us & Subscription */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 lg:col-span-1">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase tracking-wide">CONTACT US</h3>
            
            {/* Email Subscription */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 bg-white text-black placeholder-gray-500 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#FBC332] text-sm sm:text-base md:text-lg transition-all duration-300"
              />
              <button className="bg-[#FBC332] hover:bg-[#E8A847] text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-md sm:rounded-l-none sm:rounded-r-md font-medium transition-all duration-300 text-sm sm:text-base md:text-lg hover:scale-105 active:scale-95">
                Subscribe Free
              </button>
            </div>
          </div>

          {/* Middle-Left Column - Contact Information */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
            <div>
              <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 md:mb-3">Phone</h4>
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg">111-111-111-11</p>
            </div>
            
            <div>
              <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 md:mb-3">Address</h4>
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">Lorem Ipsum Is The Address</p>
            </div>
            
            <div>
              <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 md:mb-3">Email</h4>
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg">Lorem@gmail.Com</p>
            </div>
          </div>

          {/* Middle-Right Column - Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Contact Us Links */}
            <div>
              <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 md:mb-5 lg:mb-6 uppercase tracking-wide">CONTACT US</h4>
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <a href="#" className="block text-white hover:text-[#FBC332] transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg hover:translate-x-1">
                  Contact us
                </a>
                <a href="#" className="block text-white hover:text-[#FBC332] transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg hover:translate-x-1">
                  Delivery and return
                </a>
                <a href="#" className="block text-white hover:text-[#FBC332] transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg hover:translate-x-1">
                  Terms and conditions
                </a>
                <a href="#" className="block text-white hover:text-[#FBC332] transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg hover:translate-x-1">
                  FAQs
                </a>
                <a href="#" className="block text-white hover:text-[#FBC332] transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg hover:translate-x-1">
                  Accessibility
                </a>
              </div>
            </div>

            {/* About Links */}
            <div>
              <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 md:mb-5 lg:mb-6 uppercase tracking-wide">ABOUT</h4>
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <a href="#" className="block text-white hover:text-[#FBC332] transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg hover:translate-x-1">
                  Our story
                </a>
                <a href="#" className="block text-white hover:text-[#FBC332] transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg hover:translate-x-1">
                  Careers
                </a>
                <a href="#" className="block text-white hover:text-[#FBC332] transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg hover:translate-x-1">
                  Corporate gifts
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold uppercase tracking-wide">SOCIAL</h4>
            
            {/* Social Links List */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <a href="#" className="block text-white hover:text-[#FBC332] transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg hover:translate-x-1">
                Instagram
              </a>
              <a href="#" className="block text-white hover:text-[#FBC332] transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg hover:translate-x-1">
                Twitter
              </a>
              <a href="#" className="block text-white hover:text-[#FBC332] transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg hover:translate-x-1">
                Facebook
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5">
              <a
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <span className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg">F</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <span className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg">X</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <span className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg">O</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Legal */}
        <div className="border-t border-white/20 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-0">
            <div className="text-white font-medium uppercase text-xs sm:text-sm md:text-base text-center lg:text-left tracking-wide">
              PRIVACY POLICY
            </div>
            
            <div className="text-white font-medium uppercase text-xs sm:text-sm md:text-base text-center tracking-wide">
              © 2005 METASOFT CO. ALL RIGHTS RESERVED
            </div>
            
            <div className="text-white font-medium uppercase text-xs sm:text-sm md:text-base text-center lg:text-right tracking-wide">
              TERMS OF SERVICE
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}