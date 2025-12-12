'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function VisionMission() {
  return (
    <section className="bg-white py-10 px-4 md:px-6">
      <div className="mx-auto w-full max-w-[1440px] rounded-[40px] bg-[#0a0a0a] p-8 md:p-12 lg:p-20 text-white overflow-hidden relative">
        {/* Background Image/Texture */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
             <Image 
                src="https://framerusercontent.com/images/vrhxHFTuxnCduP4nljUulqZcuQ.jpg" 
                alt="Background" 
                fill
                className="object-cover"
             />
        </div>
        
        <div className="relative z-10 flex flex-col gap-16 lg:gap-24">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              <span className="h-1 w-8 rounded-full bg-[#F75834]"></span>
              <span className="text-white">002</span>
              <span>Vision & Mission</span>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Driving <span className="text-[#F75834]">Future Growth.</span>
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 hover:bg-white/10 transition-colors duration-500"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F75834]/10 text-[#F75834]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-zinc-400 leading-relaxed text-lg">
                "To be the premier provider of compliance solutions and integrated HR, enabling businesses to streamline operations and thrive in a complex and competitive environment."
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 hover:bg-white/10 transition-colors duration-500"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F75834]/10 text-[#F75834]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-zinc-400 leading-relaxed text-lg">
                "To provide organizations with accurate, efficient, and trusted solutions in background verification, HR, talent acquisition, payroll, and business setup and enabling them to operate confidently and compliantly in a dynamic business landscape"
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
