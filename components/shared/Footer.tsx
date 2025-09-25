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
    <footer id="contact" className="bg-[#E85A2D] text-white py-8 sm:py-12 lg:py-16">
      <div className="layout px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Left Column - Contact Us & Subscription */}
          <div className="space-y-4 sm:space-y-6 lg:col-span-1">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold uppercase">CONTACT US</h3>
            
            {/* Email Subscription */}
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-white text-black placeholder-gray-500 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#FBC332] text-sm sm:text-base"
              />
              <button className="bg-[#FBC332] hover:bg-[#E8A847] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-l-none sm:rounded-r-md font-medium transition-colors duration-300 text-sm sm:text-base mt-2 sm:mt-0">
                Subscribe Free
              </button>
            </div>
          </div>

          {/* Middle-Left Column - Contact Information */}
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Phone</h4>
              <p className="text-white text-sm sm:text-base">111-111-111-11</p>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Address</h4>
              <p className="text-white text-sm sm:text-base">Lorem Ipsum Is The Address</p>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Email</h4>
              <p className="text-white text-sm sm:text-base">Lorem@gmail.Com</p>
            </div>
          </div>

          {/* Middle-Right Column - Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
            {/* Contact Us Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 uppercase">CONTACT US</h4>
              <div className="space-y-1 sm:space-y-2">
                <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300 text-sm sm:text-base">
                  Contact us
                </a>
                <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300 text-sm sm:text-base">
                  Delivery and return
                </a>
                <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300 text-sm sm:text-base">
                  Terms and conditions
                </a>
                <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300 text-sm sm:text-base">
                  FAQs
                </a>
                <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300 text-sm sm:text-base">
                  Accessibility
                </a>
              </div>
            </div>

            {/* About Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 uppercase">ABOUT</h4>
              <div className="space-y-1 sm:space-y-2">
                <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300 text-sm sm:text-base">
                  Our story
                </a>
                <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300 text-sm sm:text-base">
                  Careers
                </a>
                <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300 text-sm sm:text-base">
                  Corporate gifts
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-semibold uppercase">SOCIAL</h4>
            
            {/* Social Links List */}
            <div className="space-y-1 sm:space-y-2">
              <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300 text-sm sm:text-base">
                Instagram
              </a>
              <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300 text-sm sm:text-base">
                Twitter
              </a>
              <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300 text-sm sm:text-base">
                Facebook
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-2 sm:space-x-3">
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <span className="text-white font-bold text-xs sm:text-sm">F</span>
              </a>
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <span className="text-white font-bold text-xs sm:text-sm">X</span>
              </a>
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <span className="text-white font-bold text-xs sm:text-sm">O</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Legal */}
        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
            <div className="text-white font-medium uppercase text-xs sm:text-sm text-center lg:text-left">
              PRIVACY POLICY
            </div>
            
            <div className="text-white font-medium uppercase text-xs sm:text-sm text-center">
              © 2005 METASOFT CO. ALL RIGHTS RESERVED
            </div>
            
            <div className="text-white font-medium uppercase text-xs sm:text-sm text-center lg:text-right">
              TERMS OF SERVICE
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}