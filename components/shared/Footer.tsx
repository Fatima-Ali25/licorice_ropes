'use client';

import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { siteData } from '@/content/index';

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-red-500 mb-4">{siteData.company.name}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {siteData.company.description}
            </p>
            
            <div className="flex space-x-4">
              {siteData.company.socialLinks.map((social, index) => {
                const IconComponent = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors duration-300"
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div
          >
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-red-500" />
                <span className="text-gray-300">{siteData.company.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-red-500" />
                <span className="text-gray-300">{siteData.company.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-red-500" />
                <span className="text-gray-300">{siteData.company.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div
          >
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {siteData.navigation.links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-300 hover:text-red-500 transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 {siteData.company.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}