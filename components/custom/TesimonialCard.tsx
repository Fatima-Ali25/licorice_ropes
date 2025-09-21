'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

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
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      onClick={onClick}
    >
      <div className="flex items-start space-x-4">
        <motion.img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
          whileHover={{ scale: 1.1 }}
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
    </motion.div>
  );
}