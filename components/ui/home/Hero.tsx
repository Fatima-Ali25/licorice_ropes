'use client';


import Button from '@/components/custom/Button'
import Link from 'next/link';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-full w-full min-h-screen relative overflow-hidden flex items-center bg-cover bg-center bg-no-repeat bg-[url('/images/hero.png')]">
      {/* Background Image */}
      <div className="absolute h-full w-full bg-black/40" />
      
      {/* Content Container */}
      <div className="layout w-full h-full flex items-center justify-start">
        {/* Content */}
        <div className="z-10 text-start text-white w-full max-w-6xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight uppercase">
            Bold Flavors, <span className="text-[#FBC332]">Pure Fun – Taste</span> the Difference Today!
          </h1>

          <p className="text-xl sm:text-sm md:text-lg lg:text-2xl xl:text-2xl font-medium md:mb-8 text-white leading-relaxed uppercase max-w-4xl">
            Indulge in mouthwatering candies crafted in Spain, bursting with flavor and quality ingredients. Perfectly sweet or sour – there's a treat for everyone!
          </p>
          
          {/* Button Container */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-7">
          
            <Button onClick={() => scrollToSection('#order')}
              className="bg-[#FBC332] hover:bg-white text-black w-52 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 sm:w-auto"
            >
              Order Now
            </Button>
            
            <Button onClick={() => scrollToSection('#flavors')}
              className="bg-white/50 hover:bg-white text-black px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto"
            >
              Explore Flavors
            </Button>
            
          </div>
        </div>
      </div>
    </section>
  );
}