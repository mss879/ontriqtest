'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, Briefcase, UserCheck, FileSearch } from 'lucide-react';

const checks = [
  {
    title: "Confirm your education and qualifications.",
    icon: FileSearch
  },
  {
    title: "Verify your past work experience.",
    icon: Briefcase
  },
  {
    title: "Check your identity and legal records.",
    icon: ShieldCheck
  },
  {
    title: "Speak to your references to know more about your work style.",
    icon: UserCheck
  }
];

const worries = [
  {
    q: "Is this even legal?",
    a: "Yes. BGV is a standard, legal process followed worldwide."
  },
  {
    q: "Why should I give my consent?",
    a: "Because it protects your privacy. Ontriq will only check information with your permission."
  },
  {
    q: "Will this affect my chances?",
    a: "No, unless the information given is false."
  }
];

export const BgvExplanation = memo(function BgvExplanation() {
  return (
    <section className="bg-white py-10 px-4 md:px-6" aria-labelledby="bgv-explanation-heading">
      <div className="mx-auto w-full max-w-[1440px] rounded-[40px] bg-[#0a0a0a] p-8 md:p-12 lg:p-20 text-white overflow-hidden relative">
        {/* Background Image/Texture */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" aria-hidden="true">
             <Image 
                src="https://framerusercontent.com/images/vrhxHFTuxnCduP4nljUulqZcuQ.jpg" 
                alt="" 
                fill
                className="object-cover"
                loading="lazy"
                sizes="100vw"
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
              <span className="h-1 w-8 rounded-full bg-[#F75834]" aria-hidden="true"></span>
              <span className="text-white">002</span>
              <span>The Process</span>
            </div>
            <h2 id="bgv-explanation-heading" className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              What is <span className="text-[#F75834]">Background Verification?</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
              Background Verification means double-checking the information you give when applying for a job. Think of it as a safety check, just like a doctor checks your health before a surgery.
            </p>
          </motion.div>

          {/* Why Employers Do It */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">Employers do this to:</h3>
              <div className="grid gap-6">
                {checks.map((check, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <div className="p-2 rounded-full bg-[#F75834]/20 text-[#F75834]">
                      <check.icon className="h-6 w-6" />
                    </div>
                    <span className="text-lg text-zinc-200">{check.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Importance & Worries */}
            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-[#F75834] text-white">
                <h3 className="text-2xl font-bold mb-4">Why is this important?</h3>
                <ul className="space-y-3 list-disc list-inside text-white/90 text-lg">
                  <li>To protect you and the company from mistakes or fraud.</li>
                  <li>To make sure the workplace is safe and secure.</li>
                  <li>To ensure companies follow the law.</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Common Concerns</h3>
                <div className="space-y-4">
                  {worries.map((item, index) => (
                    <div key={index} className="border-l-2 border-[#F75834] pl-6 py-2">
                      <p className="text-lg font-semibold text-white mb-1">“{item.q}”</p>
                      <p className="text-zinc-400">→ {item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
