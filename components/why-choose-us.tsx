'use client';

import React, { memo } from 'react';
import { Shield, Scale, Target, Users, Zap, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    title: "Trust & Confidentiality",
    description: "We safeguard all client and candidate information with the highest level of discretion, ensuring total privacy and secure handling of sensitive data.",
    icon: Shield
  },
  {
    title: "Integrity & Compliance",
    description: "We adhere strictly to legal, ethical, and regulatory standards—delivering services that clients can depend on with complete confidence.",
    icon: Scale
  },
  {
    title: "Accuracy & Reliability",
    description: "We believe every detail matters. Our processes are built to ensure precision, timely delivery, and error-free results in every engagement.",
    icon: Target
  },
  {
    title: "Client-Centric Approach",
    description: "We listen, adapt, and align our services to meet the unique needs of each client—providing personalized support that drives real business value.",
    icon: Users
  },
  {
    title: "Efficiency & Professionalism",
    description: "We combine expert knowledge with streamlined processes to deliver fast, effective, and polished service at every stage of the client journey.",
    icon: Zap
  },
  {
    title: "Innovation",
    description: "We continuously improve our processes and adopt smart technologies to offer more efficient, future-ready solutions.",
    icon: Lightbulb
  }
];

export const WhyChooseUs = memo(function WhyChooseUs() {
  return (
    <section className="w-full relative bg-white py-24 md:py-28 overflow-hidden" aria-labelledby="why-choose-us-heading">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-slate-100/60 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col gap-6 items-center text-center mb-16">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            <span className="h-1 w-8 rounded-full bg-[#F75834]" aria-hidden="true"></span>
            <span className="text-slate-900">003</span>
            <span>Our Values</span>
          </div>
          <div className="space-y-4 max-w-[800px]">
            <h2 id="why-choose-us-heading" className="text-[44px] font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-[56px]">
              <span className="text-slate-900">Why Choose </span>
              <span className="text-orange-500">Us?</span>
            </h2>
            <p className="text-base text-slate-500 md:text-lg leading-relaxed">
              We are committed to delivering uninterrupted, high-quality services and customized solutions that empower our clients.
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" role="list">
          {values.map((value, index) => (
            <motion.article 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col p-8 rounded-[32px] border border-zinc-200 bg-zinc-50 hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10"
              role="listitem"
            >
              <div className="flex flex-col gap-6">
                <div className="text-5xl font-bold text-[#F75834]" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-zinc-900">
                    {value.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed font-medium">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
});
