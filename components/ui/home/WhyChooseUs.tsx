import Image from "next/image";
import WhyChooseUsCard from "@/components/custom/Card";
import { siteData } from "@/content/index";
import Button from "@/components/custom/Button";


const WhyChooseUs = () => {
  const cardData = siteData.whyChooseUs.cardData;

  return (
    <section className="w-full bg-[#F5F5DC] py-8 sm:py-12 lg:py-16">
      <div className="layout">
        {/* Header */}
        <div className="w-full p-2  flex flex-col sm:flex-row justify-between items-start mb-12 gap-4 sm:gap-6">
          <h2 className=" uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black font-inter font-bold sm:mb-10 md:mb-12 lg:mb-20">
            WHY CHOOSE US?
          </h2>
          <Button className="text-black inline-block font-inter sm:text-xl lg:text-2xl md:text-2xl hover:scale-105 transition-all duration-300">
            Designed For You <Image src="/images/Arrow 3.png" alt="arrow-right" width={200} height={0} className='w-full h-auto' />
          </Button>
        </div>

        {/* Main Content Grid */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Left Section - Main Image */}
          <div className="w-full lg:w-2/3 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-xl sm:rounded-2xl overflow-hidden bg-black">
              <Image
                src="/images/whychoose.png"
                alt="Team working together"
                fill
                className="object-cover opacity-80"
                priority
              />
              
              {/* Overlay Text Box */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 rounded-lg p-4 sm:p-6 max-w-xs sm:max-w-md">
                <h3 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                  Candy With a Purpose
                </h3>
                <p className="text-white text-xs sm:text-sm leading-relaxed">
                  We're committed to delivering high quality, flavorful candies made with carefully selected ingredients. Proudly crafted in-house, our sweets are designed to delight with every bite.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Three Content Blocks */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6 sm:gap-8 lg:gap-10 items-center justify-between">
            {cardData.map((card, index) => (
              <WhyChooseUsCard
                key={index}
                title={card.title}
                description={card.description}
                backgroundImage={card.backgroundImage}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
