'use client';

import React, { memo } from 'react';
import { GraduationCap, Building2, Fingerprint, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const checks = [
  {
    title: "Education",
    description: "Confirming certificates from schools/universities.",
    icon: GraduationCap
  },
  {
    title: "Employment",
    description: "Checking with past or current employers.",
    icon: Building2
  },
  {
    title: "Identity & Legal",
    description: "NIC, Grama Niladhari (GN) certificate, police clearance.",
    icon: Fingerprint
  },
  {
    title: "References",
    description: "Calling professional referees you have shared.",
    icon: Phone
  }
];

export const WhatWeCheck = memo(function WhatWeCheck() {
  return (
    <section className="w-full relative bg-white py-24 md:py-28 overflow-hidden" aria-labelledby="what-we-check-heading">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col gap-6 items-center text-center mb-16">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            <span className="h-1 w-8 rounded-full bg-[#F75834]" aria-hidden="true"></span>
            <span className="text-slate-900">003</span>
            <span>Transparency</span>
          </div>
          <div className="space-y-4 max-w-[800px]">
            <h2 id="what-we-check-heading" className="text-[44px] font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              What does <span className="text-[#F75834]">Ontriq Check?</span>
            </h2>
            <p className="text-base text-slate-500 md:text-lg leading-relaxed">
              We keep it simple and transparent.
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20" role="list">
          {checks.map((check, index) => (
            <motion.article 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col p-8 rounded-[32px] border border-zinc-200 bg-zinc-50 hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 text-center items-center"
              role="listitem"
            >
              <div className="mb-6 p-4 rounded-full bg-white border border-zinc-100 shadow-sm group-hover:scale-110 transition-transform duration-500" aria-hidden="true">
                <check.icon className="h-8 w-8 text-[#F75834]" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-zinc-900">
                  {check.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed font-medium">
                  {check.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Safety Section */}
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[40px] p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F75834] to-transparent opacity-50"></div>
            
            <h3 className="text-3xl font-bold mb-8">Why should you feel safe with Ontriq?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-left">
                <div className="space-y-2">
                    <div className="h-1 w-12 bg-[#F75834] rounded-full mb-4"></div>
                    <h4 className="font-bold text-lg">Consent First</h4>
                    <p className="text-slate-400 text-sm">We always take your written consent before starting.</p>
                </div>
                <div className="space-y-2">
                    <div className="h-1 w-12 bg-[#F75834] rounded-full mb-4"></div>
                    <h4 className="font-bold text-lg">Official Sources</h4>
                    <p className="text-slate-400 text-sm">All checks are done directly with official institutions.</p>
                </div>
                <div className="space-y-2">
                    <div className="h-1 w-12 bg-[#F75834] rounded-full mb-4"></div>
                    <h4 className="font-bold text-lg">Total Privacy</h4>
                    <p className="text-slate-400 text-sm">Your information is kept private and confidential.</p>
                </div>
            </div>

            <div className="pt-8 border-t border-white/10">
                <p className="text-lg md:text-xl font-medium text-slate-200">
                    ✨ In short: <span className="text-[#F75834]">Ontriq helps build trust</span> between candidates and employers. If your details are correct, you have nothing to worry about. We are simply confirming what you've already shared.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
});
