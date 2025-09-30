import Link from 'next/link'
import React from 'react'

const OurProcess = () => {
    return (
        <section className="w-full h-full py-36 bg-white">
            <div className="layout w-full h-full bg-amber-300 flex flex-col items-center justify-center">
                {/* TOP */}
                <div className="w-full p-2 flex flex-col bg-amber-800 items-start mb-12 gap-14">
                    <Link href="/product">
                        <h3 className="text-black inline-block underline font-inter font-regular sm:text-xl lg:text-2xl md:text-2xl hover:scale-105 transition-all duration-300">
                            Steps
                        </h3>
                    </Link>
                    <h2 className=" text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl text-black uppercase font-inter font-semibold sm:mb-10 md:mb-12 lg:mb-20">
                        Our <span className="text-orange-500">Process</span>
                    </h2>
                </div>
                {/* main content */}
                <div className="w-full h-full flex items-center justify-between gap-10">
                    {/* left side */}
                    <div className=" h-full flex flex-col gap-7 bg-amber-400 w-1/2">
                        <i className='bg-white rounded-[24px] w-12 h-20 flex items-center justify-center text-black font-inter font-semibold text-2xl'>01</i>
                        <h2 className='text-black font-inter font-medium text-5xl max-w-xs'>Pick Your Favorites</h2>
                        <div className='flex gap-4 bg-teal-900 w-full'>
                       <span className='bg-amber-300'></span>
                       <p className='text-[#121212] font-inter font-regular text-sm max-w-2xl bg-white'>Browse our collection of classic candies, sour treats, and sweet surprises. </p>
                       </div>
                    </div>
                    {/* right side */}
                    <div className=" h-full flex flex-col gap-7 bg-amber-600 w-1/2">
                        <i className='bg-white rounded-[24px] w-12 h-20 flex items-center justify-center text-black font-inter font-semibold text-2xl'>01</i>
                        <h2 className='text-black font-inter font-medium text-5xl max-w-xs'>Pick Your Favorites</h2>
                        <div className='flex gap-4 bg-teal-900 w-full'>
                       <span className='bg-amber-300'></span>
                       <p className='text-[#121212] font-inter font-regular text-sm max-w-2xl bg-white'>Browse our collection of classic candies, sour treats, and sweet surprises. </p>
                       </div>
                    </div>
                    {/* right side */}  
                    <div className=" h-full flex flex-col gap-7 bg-amber-800 w-1/2">
                        <i className='bg-white rounded-[24px] w-12 h-20 flex items-center justify-center text-black font-inter font-semibold text-2xl'>01</i>
                        <h2 className='text-black font-inter font-medium text-5xl max-w-xs'>Pick Your Favorites</h2>
                        <div className='flex gap-4 w-2/3'>
                       <hr className='bg-amber-300 w-12 h-10 '/>
                       <p className='text-[#121212] font-inter font-regular text-sm max-w-2xl bg-white'>Browse our collection of classic candies, sour treats, and sweet surprises. </p>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurProcess