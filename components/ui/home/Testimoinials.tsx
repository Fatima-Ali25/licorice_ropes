'use client'
import React, { useState } from 'react'
import { siteData } from '@/content'
import TestimonialCard from '@/components/custom/TesimonialCard'

const Testimoinials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null)
  
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 bg-[#FFF9ED]">
      <div className="layout px-4 sm:px-6 lg:px-8">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-start justify-center">
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

export default Testimoinials