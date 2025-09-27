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
    <footer className="bg-[#E85A2D] py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
      <div className="layout w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase tracking-wide mb-6 sm:mb-8 md:mb-10 lg:mb-12">CONTACT US</h3>
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row w-full gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left Column - Contact Us & Subscription */}
          <div className="flex flex-col w-full lg:w-1/2 gap-6 sm:gap-8 md:gap-10">
            {/* Email Subscription */}
            <div className="flex w-full h-10 sm:h-12 md:h-14 gap-2 border-2 border-white items-center rounded-2xl overflow-hidden">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-transparent text-white placeholder-white/70 w-full h-full px-3 sm:px-4 md:px-6 text-sm sm:text-base focus:outline-none"
              />
              <button className="bg-white text-black px-4 sm:px-6 md:px-8 h-full text-xs sm:text-sm md:text-base font-medium hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap">
                Subscribe Free
              </button>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div>
                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-white">Phone</h4>
                <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg">111-111-111-11</p>
              </div>

              <div>
                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-white">Address</h4>
                <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">Lorem Ipsum Is The Address</p>
              </div>

              <div>
                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-white">Email</h4>
                <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg">Lorem@gmail.Com</p>
              </div>
            </div>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {/* Contact Us Links */}
              <div>
                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 md:mb-5 lg:mb-6 uppercase tracking-wide text-white">CONTACT US</h4>
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
                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 md:mb-5 lg:mb-6 uppercase tracking-wide text-white">ABOUT</h4>
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

              {/* Social Links */}
              <div>
                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 md:mb-5 lg:mb-6 uppercase tracking-wide text-white">SOCIAL</h4>

                {/* Social Links List */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6">
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
                <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
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
          </div>
        </div>

        {/* Bottom Section - Copyright and Legal */}
        <div className="border-t border-white/20 pt-6 sm:pt-8 md:pt-10 lg:pt-12 mt-8 sm:mt-10 md:mt-12 lg:mt-16">
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