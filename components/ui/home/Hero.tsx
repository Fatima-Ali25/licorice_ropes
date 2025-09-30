'use client';

import Button from '@/components/custom/Button';

export default function Hero() {

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-full w-full min-h-screen relative overflow-hidden flex items-center  bg-cover bg-center bg-no-repeat bg-[url('/images/hero.png')]">
      {/* Background Overlay */}
      <div className=" absolute h-full w-full bg-black/40" />

      {/* Content Container */}
      <div className="layout w-full h-full flex items-center justify-start py-20">

        <div className="flex flex-col gap-4 z-10 text-start justify-start text-white w-full max-w-6xl">
          <h1 className="text-4xl font-inter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider mb-4 leading-14 sm:leading-14 md:leading-20 lg:leading-20 xl:leading-24 md:mb-6 max-w-6xl uppercase">
            Bold Flavors, <span className="text-[#FBC332]">Pure Fun – Taste</span> the Difference Today!
          </h1>

          <p className="text-xl sm:text-sm font-inter md:text-xl lg:text-2xl xl:text-2xl leading-9 font-medium md:mb-8 text-white uppercase max-w-4xl">
            Indulge in mouthwatering candies crafted in Spain, bursting with flavor and quality ingredients. Perfectly sweet or sour – there's a treat for everyone!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-7">
            <Button
              onClick={() => scrollToSection('#order')}
              className="bg-[#FBC332] hover:bg-white text-black w-full px-6 py-3 md:px-8 font-inter sm:w-auto md:py-2 text-base md:text-lg font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Order Now
            </Button>

            <Button
              onClick={() => scrollToSection('#flavors')}
              className="bg-white/50 hover:bg-white text-black px-6 py-3 md:px-8 font-inter md:py-2 text-base md:text-lg font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto"
            >
              Explore Flavors
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
