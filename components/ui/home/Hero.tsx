'use client';

import { siteData } from '@/content/index';
import { Button } from '../button';

export default function Hero() {
    const { hero } = siteData;

  return (
    <section className="w-full min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center bg-no-repeat bg-[url('/images/hero.png')] "
      />

      {/* Content */}
      <div className="relative z-10 text-start text-white max-w-5xl mx-auto">
        <h1
          className="text-6xl md:text-7xl font-bold mb-6 leading-tight uppercase max-w-4xl"
        >
         Bold Flavors, <span className="text-[#FBC332]">Pure Fun – Taste </span> the Difference Today!
        </h1>

        <p
          className="text-xl md:text-3xl mb-8 text-gray-200 leading-relaxed uppercase"
        >
         {hero.subtext}
        </p>
        <div className="flex gap-7">
        <Button
          onClick={() => {}}
          className="bg-[#FBC332] hover:bg-white text-black px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
        >
          {hero.ctaText}
        </Button>
        <Button
          onClick={() => {}}
          className="bg-white/30 hover:bg-white text-black w-56 h-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
        >
          {hero.ctaText}
        </Button>
        </div>
      </div>

    </section>
  );
}