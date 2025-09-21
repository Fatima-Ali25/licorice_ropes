'use client';

import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  index: number;
}

export default function ProductCard({ id, name, description, price, image, index }: ProductCardProps) {
  const handleAddToCart = () => {
    // Add to cart functionality would go here
    console.log(`Added ${name} to cart`);
  };

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-red-600">${price}</span>
          <motion.button
            onClick={handleAddToCart}
            className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingCart size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}