'use client';

import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { siteData } from '@/content/index';
import Link from 'next/link';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
};

export default function Footer() {
  return (
    <footer className="bg-[#E85A2D] py-6 sm:py-8 md:py-12 lg:py-12 xl:py-16">
      <div className="layout w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <h3 className="text-4xl text-white sm:text-4xl md:text-5xl font-inter lg:text-5xl xl:text-6xl font-semibold uppercase tracking-wide mb-6 sm:mb-8 md:mb-10 lg:mb-12">CONTACT US</h3>
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row w-full h-full gap-8 sm:gap-10 mb-8 md:gap-12 lg:gap-16">
          {/* Left Column - Contact Us & Subscription */}
          <div className=" flex flex-col items-start justify-between w-full lg:w-2/3 gap-20 sm:gap-10 md:gap-20 lg:gap-20">
            {/* Email Subscription */}
            <div className="flex w-full max-w-2xl h-10 sm:h-12 md:h-14 gap-2 border-2 border-white items-center rounded-xl overflow-hidden mt-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-transparent text-white placeholder-white/70 w-full h-full px-3 sm:px-4 md:px-6 text-sm sm:text-base font-inter focus:outline-none"
              />
              <button className="bg-[#FBC332] text-black px-4 sm:px-6 rounded-xl md:px-8 h-full text-xs sm:text-sm md:text-base font-medium hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap">
                Subscribe Free
              </button>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full md:gap-16 ">
              <span className=' flex flex-col gap-1 '>
                <h4 className="text-sm sm:text-sm md:text-base lg:text-base tracking-wide font-bold font-inter text-white">Phone</h4>
                <p className="text-white font-inter font-regular tracking-wide text-xs sm:text-xs md:text-sm lg:text-base">111-111-111-11</p>
              </span>

              <span className=' flex flex-col gap-1'>
                <h4 className="text-sm sm:text-sm md:text-base lg:text-base tracking-wider font-bold font-inter text-white">Address</h4>
                <p className="text-white font-inter font-regular  tracking-wide text-xs sm:text-xs md:text-sm lg:text-base ">Lorem Ipsum Is The Address</p>
              </span>

                <span className=' flex flex-col gap-1 '>
                <h4 className="text-sm sm:text-sm md:text-base lg:text-base tracking-wider font-bold font-inter text-white">Email</h4>
                <p className="text-white font-inter font-regular tracking-wide text-xs sm:text-xs md:text-sm lg:text-base">Lorem@gmail.Com</p>
              </span>
            </div>
          </div>

          {/* Right Column - Navigation Links */}
            <div className="grid grid-cols-1 w-full lg:w-1/2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {/* Contact Us Links */}
              <span className='flex flex-col gap-2 '>
                <h4 className="text-sm sm:text-sm md:text-base lg:text-base tracking-wider font-bold font-inter text-white">CONTACT US</h4>
                <div className=" flex flex-col justify-between tracking-tight gap-2">
                  < Link  href="#" className="block text-xs leading-8 sm:text-xs md:text-sm lg:text-base text-white hover:text-[#FBC332] transition-all duration-300 hover:translate-x-1">
                    Contact us
                  </Link>
                  <Link href="#" className="block text-xs leading-8 sm:text-xs md:text-sm lg:text-base text-white hover:text-[#FBC332] transition-all duration-300 hover:translate-x-1">
                    Delivery and return
                  </Link>
                  <Link href="#" className="block text-xs leading-8 sm:text-xs md:text-sm lg:text-base text-white hover:text-[#FBC332] transition-all duration-300 hover:translate-x-1">
                    Terms and conditions
                  </Link>
                  <Link href="#" className="block text-xs leading-8 sm:text-xs md:text-sm lg:text-base text-white hover:text-[#FBC332] transition-all duration-300 hover:translate-x-1">
                    FAQs
                  </Link>
                  <Link href="#" className="block text-xs leading-8 sm:text-xs md:text-sm lg:text-base text-white hover:text-[#FBC332] transition-all duration-300 hover:translate-x-1">
                    Accessibility
                  </Link>
                </div>
              </span>

              {/* About Links */}
              <span className='flex flex-col gap-2 '>
                <h4 className="text-sm sm:text-sm md:text-base lg:text-base tracking-wider font-bold font-inter uppercase text-white">ABOUT</h4>
                <div className="flex flex-col justify-between tracking-tight gap-2">
                  <Link href="#" className="block text-xs leading-8 sm:text-xs md:text-sm lg:text-base text-white hover:text-[#FBC332] transition-all duration-300 hover:translate-x-1">
                    Our story
                  </Link>
                  <Link href="#" className="block text-xs leading-8 sm:text-xs md:text-sm lg:text-base text-white hover:text-[#FBC332] transition-all duration-300 hover:translate-x-1">
                    Careers
                  </Link>
                  <Link href="#" className="block text-xs leading-8 sm:text-xs md:text-sm lg:text-base text-white hover:text-[#FBC332] transition-all duration-300 hover:translate-x-1">
                    Corporate gifts
                  </Link>
                </div>
              </span>

              {/* Social Links */}
              <span className='flex flex-col gap-2'>
                <h4 className="text-sm sm:text-base md:text-lg lg:text-sm font-bold font-inter mb-3 sm:mb-4 md:mb-5 lg:mb-6 uppercase tracking-wide text-white">SOCIAL</h4>

                {/* Social Links List */}
                <div className="flex flex-col justify-between gap-2">
                  <Link href="#" className="block text-xs leading-8 sm:text-xs md:text-sm lg:text-base text-white hover:text-[#FBC332] transition-all duration-300 hover:translate-x-1">
                    Instagram
                    </Link>
                  <Link href="#" className="block text-xs leading-8 sm:text-xs md:text-sm lg:text-base text-white hover:text-[#FBC332] transition-all duration-300 hover:translate-x-1">
                    Twitter
                  </Link>
                  <Link href="#" className="block text-xs leading-8 sm:text-xs md:text-sm lg:text-base text-white hover:text-[#FBC332] transition-all duration-300 hover:translate-x-1">
                    Facebook
                  </Link>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-2 text-xs text-white sm:text-sm md:text-base lg:text-lg">
                  <Link
                    href="#"
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                  >
                    <BsFacebook />
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                  >
                    <span className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg">X</span>
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12   flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                  >
                    <FaInstagram />
                  </Link>
                </div>
              </span>
            </div>
        </div>

        {/* Bottom Section - Copyright and Legal */}
        <div className="border-t border-white/90 flex flex-col md:flex-row items-center justify-center md:justify-between w-full h-26 gap-2">
            <div className="text-white font-inter uppercase text-xs text-center md:text-left tracking-wide w-full md:w-auto">
              PRIVACY POLICY
            </div>

            <div className="text-white font-inter uppercase text-xs text-center md:text-left tracking-wide w-full md:w-auto">
              © 2005 METASOFT CO. ALL RIGHTS RESERVED
            </div>

            <div className="text-white font-inter uppercase text-xs text-center md:text-left tracking-wide w-full md:w-auto">
              TERMS OF SERVICE
            </div>
        </div>
      </div>
    </footer>
  );
}