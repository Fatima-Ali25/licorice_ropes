'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Button from '@/components/custom/Button';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  phone: string;
  restaurantName: string;
  comment: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    restaurantName: '',
    comment: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.comment.trim()) {
      newErrors.comment = 'Comment is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
      alert('Message sent successfully!');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        restaurantName: '',
        comment: ''
      });
    }
  };

  return (
    <section className="w-full h-full py-32  bg-white">

      <div className="layout w-full h-full py-10 bg-amber-200 ">
        {/* Main Content */}
        <div className="max-w-3xl mx-auto bg-amber-300 h-full">
          {/* Header */}
          <div className="text-center mb-12 ">
            <h1 className="text-4xl md:text-5xl font-inter font-semibold text-gray-900 mb-4">
              Get in Touch with Our Team
            </h1>
            <p className="font-inter text-lg text-[#373131] leading-12">
              Whether you need support, a demo, or a custom quote — we’re just one message away.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-amber-300 h-full">
            {/* First Row - Name and Email */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="name" className="block text-xl font-inter font-semibold text-[#7B7A7A]">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name here"
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-72 h-16 px-4 py-3 rounded-full border-1 border-[#797E86] text-[#7B7A7A] shadow-lg transition-colors bg-transparent'
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className='w-full flex flex-col gap-3'>
                <label htmlFor="email" className="block text-xl font-inter font-semibold text-[#7B7A7A]">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email here"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-72 h-16 px-4 py-3 rounded-full border-1 border-[#797E86] text-[#7B7A7A] shadow-lg transition-colors bg-transparent `}
                     
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Second Row - Phone and Restaurant Name */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="name" className="block text-xl font-inter font-semibold text-[#7B7A7A]">
                Phone Number *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name here"
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-72 h-16 px-4 py-3 rounded-full border-1 border-[#797E86] text-[#7B7A7A] shadow-lg transition-colors bg-transparent'
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className='w-full flex flex-col gap-3'>
                <label htmlFor="email" className="block text-xl font-inter font-semibold text-[#7B7A7A]">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email here"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-72 h-16 px-4 py-3 rounded-full border-1 border-[#797E86] text-[#7B7A7A] shadow-lg transition-colors bg-transparent `}
                     
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Comment Field */}
            <div className="space-y-2">
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                Comment *
              </label>
              <Textarea
                id="comment"
                name="comment"
                placeholder="Inquiry box"
                value={formData.comment}
                onChange={handleInputChange}
                rows={6}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors resize-none ${errors.comment
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-200 focus:border-orange-500'
                  }`}
              />
              {errors.comment && (
                <p className="text-sm text-red-500">{errors.comment}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-12 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Send Message
              </Button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;
