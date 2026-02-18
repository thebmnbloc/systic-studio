import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white dark:bg-slate-800 border-2 border-emerald-500/20 dark:border-emerald-500/30 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
            
              <Image 
                src={'/images/w-systic-logo.png'}
                width={35}
                height={35}
                alt='logo'
                className='object-cover w-full h-full'
                priority
              />

            </div>
            
            <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Systic<span className="text-emerald-500">.</span>
            </span>

          </Link>
          
          <div className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} Systic Studio. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-slate-600 dark:text-slate-400">
            <a href="#" className="hover:text-emerald-500 transition-colors">Twitter</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}