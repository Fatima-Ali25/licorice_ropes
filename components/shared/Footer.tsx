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
    <footer id="contact" className="bg-[#E85A2D] text-white py-16">
      <div className="layout">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Left Column - Contact Us & Subscription */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold uppercase">CONTACT US</h3>
            
            {/* Email Subscription */}
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-4 py-3 bg-white text-black placeholder-gray-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#FBC332]"
              />
              <button className="bg-[#FBC332] hover:bg-[#E8A847] text-white px-6 py-3 rounded-r-md font-medium transition-colors duration-300">
                Subscribe Free
              </button>
            </div>
          </div>

          {/* Middle-Left Column - Contact Information */}
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold mb-2">Phone</h4>
              <p className="text-white">111-111-111-11</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Address</h4>
              <p className="text-white">Lorem Ipsum Is The Address</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Email</h4>
              <p className="text-white">Lorem@gmail.Com</p>
            </div>
          </div>

          {/* Middle-Right Column - Navigation Links */}
          <div className="grid grid-cols-1 gap-8">
            {/* Contact Us Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 uppercase">CONTACT US</h4>
              <div className="space-y-2">
                <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300">
                  Contact us
                </a>
                <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300">
                  Delivery and return
                </a>
                <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300">
                  Terms and conditions
                </a>
                <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300">
                  FAQs
                </a>
                <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300">
                  Accessibility
                </a>
              </div>
            </div>

            {/* About Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 uppercase">ABOUT</h4>
              <div className="space-y-2">
                <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300">
                  Our story
                </a>
                <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300">
                  Careers
                </a>
                <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300">
                  Corporate gifts
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold uppercase">SOCIAL</h4>
            
            {/* Social Links List */}
            <div className="space-y-2">
              <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300">
                Twitter
              </a>
              <a href="#" className="block text-white hover:text-[#FBC332] transition-colors duration-300">
                Facebook
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <span className="text-white font-bold text-sm">F</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <span className="text-white font-bold text-sm">X</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <span className="text-white font-bold text-sm">O</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Legal */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white font-medium uppercase">
              PRIVACY POLICY
            </div>
            
            <div className="text-white font-medium uppercase text-center">
              © 2005 METASOFT CO. ALL RIGHTS RESERVED
            </div>
            
            <div className="text-white font-medium uppercase">
              TERMS OF SERVICE
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}