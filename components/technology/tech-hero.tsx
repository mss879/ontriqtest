'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TechHeroProps {
  pageNumber: string;
  title: string;
  subtitle?: string;
  description: string;
}

export function TechHero({ pageNumber, title, subtitle, description }: TechHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-8 lg:gap-12">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 max-w-5xl"
          >
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              <span className="h-1 w-8 rounded-full bg-[#0098F3]"></span>
              <span className="text-slate-900">{pageNumber}</span>
              <span>Technology</span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl lg:text-7xl leading-[1.1]">
              {title} {subtitle && <span className="text-slate-400">{subtitle}</span>}
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl"
          >
            <p className="text-lg text-slate-600 md:text-xl leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
