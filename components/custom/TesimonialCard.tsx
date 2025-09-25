'use client'
import { Star } from 'lucide-react';
import Image from 'next/image';

interface TestimonialCardProps {
  id: number;
  name: string;
  role: string;
  rating: number;
  feedback: string;
  image: string;
  index?: number;
  onClick?: () => void;
}

export default function TestimonialCard({ 
  id, 
  name, 
  role, 
  rating, 
  feedback, 
  image, 
  index = 0,
  onClick 
}: TestimonialCardProps) {
  return (
    <div
      className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
      onClick={onClick}
    >
      <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center space-x-3 sm:block sm:space-x-0">
          <Image
            src={image}
            alt={name}
            width={64}
            height={64}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
          />
          
          <div className="sm:hidden">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{name}</h4>
            <p className="text-gray-600 text-xs sm:text-sm">{role}</p>
          </div>
        </div>
        
        <div className="flex-1 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3">
            <div className="hidden sm:block">
              <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{name}</h4>
              <p className="text-gray-600 text-xs sm:text-sm">{role}</p>
            </div>
            <div className="flex space-x-1 justify-center sm:justify-end">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} size={14} className="sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-center sm:text-left">{feedback}</p>
        </div>
      </div>
    </div>
  );
}