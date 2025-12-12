'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const jobPoints = [
  'Check the details you provide in your job application.',
  'Make sure the information is correct and genuine.',
  'Give employers the confidence to hire the right people.'
];

export const AboutHero = memo(function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28" aria-labelledby="about-hero-heading">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-16 lg:gap-24">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 max-w-4xl"
          >
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              <span className="h-1 w-8 rounded-full bg-[#F75834]" aria-hidden="true"></span>
              <span className="text-slate-900">001</span>
              <span>Who We Are</span>
            </div>
            <h1 id="about-hero-heading" className="text-[44px] font-semibold tracking-tight text-slate-900 md:text-6xl lg:text-7xl leading-[1.1]">
              Background Verification <span className="text-slate-400">(BGV) Made Simple.</span>
            </h1>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Main Text */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-6 text-base text-slate-500 md:text-lg leading-relaxed">
                <h2 className="text-3xl font-semibold text-slate-900">Who is Ontriq?</h2>
                <p>
                  Ontriq is a trusted company in Sri Lanka that specializes in Background Verification (BGV). We are part of <strong className="text-slate-900">Konnect BPO Technologies (Pvt) Ltd</strong>, one of the leading BPOs in the country.
                </p>
                <blockquote className="p-6 bg-orange-50 border border-orange-100 rounded-2xl">
                  <p className="text-orange-900 font-medium">
                    "We are not here to reject you, we are here to make sure everything is clear, legal, and safe for both you and the company."
                  </p>
                </blockquote>
              </div>
            </motion.div>

            {/* Right Column: Job List */}
            <motion.aside 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-5"
              aria-label="Our job responsibilities"
            >
              <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 h-full">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Our Job is Simple:</h3>
                <ul className="space-y-6" role="list">
                  {jobPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F75834]" aria-hidden="true">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-slate-700 font-medium leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>

          </div>
        </div>
      </div>
    </section>
  );
});
