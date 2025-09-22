'use client';

import { siteData } from '@/content/index';
import { Button } from '../button';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center bg-no-repeat bg-[url('/images/hero.png')] "
      />

      {/* Content */}
      <div className="relative z-10 text-start text-white max-w-5xl">
        <h1
          className="text-6xl md:text-7xl font-bold mb-6 leading-tight uppercase max-w-4xl"
        >
         Bold Flavors, <span className="text-[#FBC332]">Pure Fun – Taste </span> the Difference Today!
         
        </h1>

        <p
          className="text-xl md:text-3xl mb-8 text-gray-200 leading-relaxed uppercase"
        >
         Indulge in mouthwatering candies crafted in Spain, bursting with flavor and quality ingredients. Perfectly sweet or sour – there’s a treat for everyone!
        </p>
        <div className="flex gap-7">
        <Button
          onClick={() => scrollToSection('#order')}
          className="bg-[#FBC332] hover:bg-white text-black px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
        >
          order now
        </Button>
        <Button
          onClick={() => scrollToSection('#order')}
          className="bg-white/50 hover:bg-white text-black px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
        >
          Explore Flavors
        </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </div>
    </section>
  );
}