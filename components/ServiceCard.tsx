'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Globe, 
  Smartphone, 
  Code2, 
  Zap, 
  Shield,
  LucideIcon
} from 'lucide-react';

// Map string names to actual icon components
const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  Globe,
  Smartphone,
  Code2,
  Zap,
  Shield,
};

interface ServiceCardProps {
  iconName: string;
  title: string;
  description: string;
}

export default function ServiceCard({ iconName, title, description }: ServiceCardProps) {
  const Icon = iconMap[iconName] || LayoutDashboard; // fallback

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 group"
    >
      <div className="w-14 h-14 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-emerald-600 dark:text-emerald-400" size={28} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}