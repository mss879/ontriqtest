'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IconBGV, IconConfidentiality, IconPrecision } from '@/components/ui/custom-icons';

export function ProcessHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-12 lg:gap-16 md:items-center">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 max-w-4xl md:text-center md:items-center"
          >
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              <span className="h-1 w-8 rounded-full bg-[#F75834]"></span>
            </div>
            <h1 className="text-[44px] font-semibold tracking-tight text-slate-900 md:text-6xl lg:text-7xl leading-[1.1]">
              Accurate, Compliant, <span className="text-slate-400">& Discreet.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Our BGV process is designed to be accurate, compliant, and discreet, ensuring each verification delivers actionable insights while maintaining confidentiality and integrity.
            </p>
          </motion.div>

          {/* Visual Elements */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 md:gap-12"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 border border-orange-100 shadow-sm">
                <IconPrecision className="h-8 w-8" />
              </div>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Accurate</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 border border-orange-100 shadow-sm">
                <IconBGV className="h-8 w-8" />
              </div>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Compliant</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center justify-center h-16 w-16 rounded-2xl bg-orange-50 border border-orange-100 shadow-sm">
                <IconConfidentiality className="h-8 w-8" />
              </div>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Discreet</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

