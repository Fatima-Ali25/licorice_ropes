'use client';

import { motion } from 'framer-motion';

interface StatsCardProps {
  number: string;
  label: string;
  icon: string;
  index: number;
}

export default function StatsCard({ number, label, icon, index }: StatsCardProps) {
  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-3xl font-bold text-red-600 mb-2">{number}</div>
      <div className="text-gray-600 font-medium">{label}</div>
    </motion.div>
  );
}