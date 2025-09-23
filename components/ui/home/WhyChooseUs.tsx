import Image from "next/image";
import WhyChooseUsCard from "@/components/custom/Card";
import { siteData } from "@/content/index";


const WhyChooseUs = () => {
  const cardData = siteData.whyChooseUs.cardData;

  return (
    <section className="w-full h-full bg-[#F5F5DC] py-16">
      <div className="layout w-full h-full flex flex-col items-center justify-center">
        {/* Header */}
        <div className="w-full h-full flex justify-between items-center mb-12">
          <h2 className="text-6xl lg:text-6xl font-semibold text-black font-inter uppercase">
            WHY CHOOSE US?
          </h2>
          <span className="text-black font-inter text-2xl underline decoration-2 underline-offset-4">
            Designed For You →
          </span>
        </div>

        {/* Main Content Grid */}
          <div className="w-full h-full flex items-center justify-between gap-8">
          {/* Left Section - Main Image */}
          <div className=" w-full h-full rounded-3xl overflow-hidden shadow-lg">
            <div className="relative h-[600px] lg:h-[700px] rounded-2xl overflow-hidden">
              <Image
                src="/images/whychoose.png"
                alt="Team working together"
                fill
                className="object-cover"
                priority
              />
              
              {/* Overlay Text Box */}
              <div className="absolute bottom-6 left-6 rounded-lg p-6 max-w-md">
                <h3 className="text-white font-bold text-xl mb-3">
                  Candy With a Purpose
                </h3>
                <p className="text-white text-sm leading-relaxed">
                  We're committed to delivering high quality, flavorful candies made with carefully selected ingredients. Proudly crafted in-house, our sweets are designed to delight with every bite.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Three Content Blocks */}
          <div className="w-1/2 h-full flex flex-col gap-10 items-center justify-between">
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
