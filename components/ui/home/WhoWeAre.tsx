"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../button";

const WhoWeAre = () => {
  return (
    <section className="py-16 md:py-24 bg-white w-full h-full">
      <div className="layout w-full h-full bg-amber-200">
        {/* Header Section */}
        <div className="flex flex-col py-10 text-black lg:flex-row lg:items-center lg:justify-between text-2xl font-inter">
          <span className=" font-medium underline uppercase">
            About Us
          </span>

          <span className=" font-medium underline lg:justify-end uppercase">Baked With Joy, Glazed With Love</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl py-7 lg:text-7xl font-bold mb-4 font-inter uppercase">
          <span className="text-black">WHO WE</span>{" "}
          <span className="text-orange-500">ARE?</span>
        </h1>

        {/* Main Content Grid */}
        <div className="flex gap-8 lg:gap-10 w-full h-full py-6">
          {/* Left Side - Image and Button */}
          <div className=" flex flex-col items-start justify-center gap-10 h-full w-full">
            <Image
              width={436}
              height={436}
              src="/images/team.png"
              alt="Team collaboration meeting"
              className="w-[436px] h-[436px] md:h-80 lg:h-96 object-cover rounded-3xl shadow-lg"
            />

            <Button className="bg-[#FBC332] w-[143px] h-[36px] hover:bg-white text-black py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl">
              View More
            </Button>
          </div>

          {/* Statistics */}
          <div className=" flex flex-col justify-center gap-10 h-full w-full">
            <div className="flex items-center gap-4">
              <span className="text-3xl md:text-4xl font-bold text-[#E85A2D]">
                10+
              </span>
              <span className="text-black font-medium">Years</span>
              <p className="text-gray-600 text-sm mt-1">Lorem Ipsum Dolor</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl md:text-4xl font-bold text-[#E85A2D]">
                29,000+
              </span>

              <p className="text-gray-600 text-sm">
                Lorem Ipsum Dolor Sit Amet
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl md:text-4xl font-bold text-[#E85A2D]">
                450+
              </span>
              <p className="text-gray-600 text-sm">Lorem Ipsum Dolor Sit</p>
            </div>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Welcome to Southern Sweet and Sour, a proud Disabled Veteran Owned
              and Operated business. We're more than just a candy brand - we're
              a mission-driven company committed to giving back. Our passion for
              fun, flavorful licorice ropes comes with a purpose: supporting the
              veteran community.
            </p>
          </div>

          {/* Right Side - Stats and Content */}
          <div className=" flex flex-col justify-center gap-7 h-full w-full ">
            {/* Company Description */}
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              A portion of every purchase helps fund Warrior's Next Adventure,
              an organization dedicated to helping veterans heal through
              adventure and support. When you enjoy our sweet and sour treats,
              you're also contributing to a greater cause. Thank you for being
              part of our journey to make a difference, one licorice rope at a
              time.
            </p>

            {/* Secondary Image */}
            <Image
              width={398}
              height={400}
              src="/images/team.png"
              alt="Team collaboration"
              className="w-full h-full md:h-56 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
