'use client'
import React from 'react'
import { siteData } from '@/content'
import TestimonialCard from '@/components/custom/TesimonialCard'

const Testimonials = () => {
  return (
    <section className="w-full h-full py-16 bg-[#FFF9ED]">
      <div className="layout w-full h-full">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
          {siteData.testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              id={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              rating={testimonial.rating}
              feedback={testimonial.feedback}
              image={testimonial.image}
              onClick={() => setSelectedTestimonial(testimonial.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
