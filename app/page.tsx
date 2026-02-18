'use client'

import Link from 'next/link';
import { ArrowRight, LayoutDashboard, Globe, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import PricingCard from '@/components/PricingCard';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-emerald-100/50 to-transparent dark:from-emerald-900/10 rounded-bl-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new projects
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] mb-6">
              We Build Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Masterpieces</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
              Systic Studio crafts high-performance dashboards, robust web applications, and conversion-focused landing pages for the modern enterprise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button icon={ArrowRight}>Start a Project</Button>
              </Link>
              <Link href="/our-services">
                <Button variant="outline">View Services</Button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-slate-400 dark:text-slate-500">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-500">
                    {String.fromCharCode(64+i)}
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium">Trusted by 50+ global brands</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative z-10 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-4 border border-slate-100 dark:border-slate-700 rotate-3 hover:rotate-0 transition-transform duration-500">
               <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 space-y-4">
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-8 w-32 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                    <div className="h-8 w-8 bg-emerald-100 dark:bg-emerald-900/50 rounded-full" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4">
                      <div className="h-3 w-12 bg-slate-200 dark:bg-slate-600 rounded mb-2" />
                      <div className="h-6 w-16 bg-emerald-500/20 rounded" />
                    </div>
                    <div className="h-24 bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4">
                      <div className="h-3 w-12 bg-slate-200 dark:bg-slate-600 rounded mb-2" />
                      <div className="h-6 w-16 bg-blue-500/20 rounded" />
                    </div>
                    <div className="h-24 bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4">
                      <div className="h-3 w-12 bg-slate-200 dark:bg-slate-600 rounded mb-2" />
                      <div className="h-6 w-16 bg-purple-500/20 rounded" />
                    </div>
                  </div>
                  <div className="h-48 bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4 flex items-end gap-2">
                     {[40, 70, 50, 90, 60, 80, 75].map((h, i) => (
                       <div key={i} style={{ height: `${h}%` }} className="w-full bg-emerald-500/20 rounded-t-sm relative group">
                          <div className="absolute bottom-0 w-full bg-emerald-500 rounded-t-sm transition-all duration-500" style={{ height: '0%' }} />
                       </div>
                     ))}
                  </div>
               </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Our Expertise"
            subtitle="We combine technical excellence with creative design to deliver software that stands out."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={LayoutDashboard}
              title="Admin Dashboards"
              description="Complex data visualization and management systems built with React, Tailwind, and robust state management."
            />
            <ServiceCard 
              icon={Globe}
              title="Web Applications"
              description="Scalable, secure, and high-performance web apps using Next.js, Node.js, and modern cloud infrastructure."
            />
            <ServiceCard 
              icon={Smartphone}
              title="Landing Pages"
              description="Conversion-optimized, blazing-fast landing pages designed to turn visitors into loyal customers."
            />
          </div>
          
          <div className="text-center mt-12">
            <Link href="/our-services">
              <Button variant="outline" icon={ArrowRight}>View All Services</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}