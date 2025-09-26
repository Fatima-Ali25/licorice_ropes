<<<<<<< HEAD
'use client'
import Image from 'next/image'
import React from 'react'
import Button from '@/components/custom/Button'
import Link from 'next/link'
=======
"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../button";
>>>>>>> 05ed974f032a31352d303261157d4d699533ea75

const WhoWeAre = () => {
<<<<<<< HEAD
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
=======
    return (
        <section className="py-16 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
            <div className="layout flex flex-col">
                {/* Header Section */}
                <div className="flex  mb-8 sm:mb-10 md:mb-12 w-full justify-between">
                    <span className="text-black text-2xl font-medium underline">About Us</span>
                        <Button className="text-black inline-block relative font-inter text-2xl sm:text-xl lg:text-2xl hover:scale-105 transition-all duration-300"> Baked With Joy, Glazed With Love  <Image src="/images/Arrow 3.png" alt="arrow-right" width={200} height={0} className='' />
                        </Button>

                    
                </div>
                {/* Title */}
                <h1 className="w-full h-full uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold sm:mb-10 md:mb-12 lg:mb-20">
                    <span className="text-black ">WHO WE</span>{' '}
                    <span className="text-orange-500 ">ARE?</span>
                </h1>

                {/* Main Content Grid */}
                <div className="flex flex-col lg:flex-row gap-6 w-full h-full">
                    {/* Left Side - Image and Button */}
                    <div className=" flex flex-col items-center lg:items-start gap-4 p-2 sm:gap-6 md:gap-8 lg:gap-10 lg:w-1/2">
                        {/* <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto  "> */}
                        <Image
                            width={400}
                            height={400}
                            src="/images/team.png"
                            alt="Team collaboration"
                            className=" object-cover rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg"
                        />
                        {/* </div> */}

                        <Button className="bg-[#FBC332] w-full sm:w-auto h-10 hover:bg-[#fbc231e5] text-black px-4 sm:px-6 text-lg font-medium sm:text-base lg:text-lg rounded-full transition-all duration-300"
                        >
                            View More
                        </Button>
                    </div>

                    {/* Statistics */}
                    <div className="flex flex-col w-full lg:w-1/2 h-full justify-center gap-10 sm:gap-12 md:gap-16 lg:gap-20 p-2 sm:p-4">
                        <div className="flex flex-col w-full h-auto justify-center gap-6 sm:gap-4 md:gap-6 lg:gap-10">
                            <div className="flex flex-col w-full gap-1">
                                <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#E85A2D]">
                                    10+ <span className="text-black font-medium text-xl sm:text-2xl">Years</span>
                                </h1>
                                <p className="text-black text-lg sm:text-xl md:text-2xl">Lorem Ipsum Dolor</p>
                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#E85A2D]">
                                    29,000+
                                </h1>
                                <p className="text-black text-lg sm:text-xl md:text-2xl">Lorem Ipsum Dolor Sit Amet</p>
                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#E85A2D]">
                                    450+
                                </h1>
                                <p className="text-black text-lg sm:text-xl md:text-2xl">Lorem Ipsum Dolor Sit</p>
                            </div>
                        </div>
                        <p className="text-black font-inter leading-5 text-xs sm:text-sm md:text-base">
                            Welcome to Southern Sweet and Sour, a proud Disabled Veteran Owned and Operated business.
                            We're more than just a candy brand - we're a mission-driven company committed to giving back.
                            Our passion for fun, flavorful licorice ropes comes with a purpose: supporting the veteran community.
                        </p>
                    </div>
                    {/* Right Side - Stats and Content */}
                    <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-7 p-2 lg:w-1/2">

                        {/* Company Description */}
                        <p className="text-black leading-5 text-sm font-inter ">
                            A portion of every purchase helps fund Warrior's Next Adventure, an organization dedicated to
                            helping veterans heal through adventure and support. When you enjoy our sweet and sour treats,
                            you're also contributing to a greater cause. Thank you for being part of our journey to make a
                            difference, one licorice rope at a time.
                        </p>

                        {/* Secondary Image */}
                        {/* <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto"> */}
                        <Image
                            width={400}
                            height={400}
                            src="/images/team.png"
                            alt="Team collaboration"
                            className=" object-cover rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg"
                        />
                        {/* </div> */}

                    </div>

                </div>
>>>>>>> 1672470f795c07ff77e66f6c4dba89347aa21b53
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
