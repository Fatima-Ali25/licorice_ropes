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
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start space-x-4">
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
        />
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="font-semibold text-gray-800">{name}</h4>
              <p className="text-gray-600 text-sm">{role}</p>
            </div>
            <div className="flex space-x-1">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">{feedback}</p>
        </div>
      </div>
    </div>
  );
}