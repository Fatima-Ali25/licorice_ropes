'use client'
import React from 'react'
import { siteData } from '@/content'
import TestimonialCard from '@/components/custom/TesimonialCard'

const Testimonials = () => {
  return (
    <section className="w-full h-full py-16 bg-[#FFF9ED]">
      <div className="layout w-full h-full">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black">
            Testimonials
          </h2>
          <a
            href="#"
            className="text-black hover:text-[#FF8C00] transition-colors duration-200 flex items-center gap-2 group"
          >
            <span className="font-medium">Looking For</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.testimonials.slice(0, 6).map((testimonial, index) => (
              <TestimonialCard
                id={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                rating={testimonial.rating}
                feedback={testimonial.feedback}
                image={testimonial.image}
                index={index}
              />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
