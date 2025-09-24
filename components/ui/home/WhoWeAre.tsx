'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from '../button'

const WhoWeAre = () => {
    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
            <div className="layout flex flex-col">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 sm:mb-10 md:mb-12 w-full">
                        <span className="text-black text-2xl font-medium underline">About Us</span>

                    <div className="flex items-center text-2xl font-medium text-black underline lg:justify-end">
                        <span>Baked With Joy, Glazed With Love</span>
                        <span className="text-orange-500">→</span>
                    </div>
                </div>
                {/* Title */}
                        <h1 className=" uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold sm:mb-4">
                            <span className="text-black ">WHO WE</span>{' '}
                            <span className="text-orange-500 ">ARE?</span>
                        </h1>

                {/* Main Content Grid */}
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
                    {/* Left Side - Image and Button */}
                    <div className="flex flex-col items-center lg:items-start justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full lg:w-1/2">
                        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
                            <Image
                                width={436}
                                height={436}
                                src="/images/team.png"
                                alt="Team collaboration meeting"
                                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg"
                            />
                        </div>

                        <Button
                            className="bg-[#FBC332] w-full sm:w-auto min-w-[120px] sm:min-w-[143px] h-10 sm:h-12 hover:bg-white text-black px-4 sm:px-6 text-sm sm:text-base lg:text-lg font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
                        >
                            View More
                        </Button>
                    </div>

                    {/* Statistics */}
                    <div className="flex flex-col justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full lg:w-1/2">
                               <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E85A2D]">10+</span>
                                <span className="text-black font-medium text-sm sm:text-base">Years</span>
                                <p className="text-gray-600 text-xs sm:text-sm">Lorem Ipsum Dolor</p>
                                </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E85A2D]">29,000+</span>
                            <p className="text-gray-600 text-xs sm:text-sm">Lorem Ipsum Dolor Sit Amet</p>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E85A2D]">450+</span>
                            <p className="text-gray-600 text-xs sm:text-sm">Lorem Ipsum Dolor Sit</p>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">
                            Welcome to Southern Sweet and Sour, a proud Disabled Veteran Owned and Operated business.
                            We're more than just a candy brand - we're a mission-driven company committed to giving back.
                            Our passion for fun, flavorful licorice ropes comes with a purpose: supporting the veteran community.
                        </p>
                    </div>

                    {/* Right Side - Stats and Content */}
                    <div className="flex flex-col justify-center gap-4 sm:gap-6 md:gap-7  p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl w-full lg:w-1/2">

                        {/* Company Description */}
                        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">
                            A portion of every purchase helps fund Warrior's Next Adventure, an organization dedicated to
                            helping veterans heal through adventure and support. When you enjoy our sweet and sour treats,
                            you're also contributing to a greater cause. Thank you for being part of our journey to make a
                            difference, one licorice rope at a time.
                        </p>

                        {/* Secondary Image */}
                        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                            <Image
                                width={398}
                                height={400}
                                src="/images/team.png"
                                alt="Team collaboration"
                                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg"
                            />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default WhoWeAre