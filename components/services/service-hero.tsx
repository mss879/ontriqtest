'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ServiceHeroProps {
  serviceNumber: string;
  title: string;
  subtitle?: string;
  description: string;
  imageSrc?: string;
}

export function ServiceHero({ serviceNumber, title, subtitle, description, imageSrc }: ServiceHeroProps) {
  if (imageSrc) {
    return (
      <section className="relative bg-white pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-16">
            
            {/* Top Row: Number & Title */}
            <div className="grid md:grid-cols-12 gap-8 border-b border-slate-200 pb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="md:col-span-1 text-sm font-medium text-slate-500 font-mono pt-2"
              >
                /{serviceNumber}
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="md:col-span-11"
              >
                <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-slate-900 leading-[0.9]">
                  {title}
                  <br />
                  {subtitle && <span className="text-slate-300">{subtitle}</span>}
                </h1>
              </motion.div>
            </div>

            {/* Bottom Row: Description & Image */}
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-4 lg:col-span-5 overflow-hidden rounded-2xl">
                <Image 
                  src={imageSrc} 
                  alt={title} 
                  width={600}
                  height={400}
                  className="w-full h-auto scale-105"
                  priority
                />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-8 lg:col-span-7 flex flex-col justify-center gap-8"
              >
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light whitespace-pre-line">
                  {description}
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    );
  }

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
              <span className="h-1 w-8 rounded-full bg-[#FF8918]"></span>
              <span className="text-slate-900">{serviceNumber}</span>
              <span>Service</span>
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
