"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    day: "Day 1",
    id: "01",
    title: "Client Onboarding",
    description: "We define verification depth, scope, and SLAs with your dedicated account manager to align with your hiring needs."
  },
  {
    day: "Day 1-2",
    id: "02",
    title: "Data Collection",
    description: "Candidates submit IDs and consent via a secure link, ensuring full compliance with the Data Protection Act."
  },
  {
    day: "Day 2-5",
    id: "03",
    title: "Verification Execution",
    description: "We validate data through trusted sources—contacting employers, universities, and checking criminal databases."
  },
  {
    day: "Day 6",
    id: "04",
    title: "Quality Assurance",
    description: "Every check undergoes a two-step QC by senior analysts to ensure accuracy and identify discrepancies."
  },
  {
    day: "Day 7",
    id: "05",
    title: "Report Delivery",
    description: "You receive a detailed report with findings, verification status, and risk grading via secure encrypted channels."
  },
  {
    day: "Ongoing",
    id: "06",
    title: "Support & Audit",
    description: "We provide post-verification support, clarifications, and continuous process optimization."
  }
];

export const ProcessSection = memo(function ProcessSection() {
  return (
    <section className="w-full bg-zinc-950 py-24 md:py-32 overflow-hidden" aria-labelledby="workflow-heading">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-24 flex flex-col gap-8 md:w-3/4 lg:w-2/3">
          <motion.div 
            initial={{ opacity: 0, rotateX: 90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500">
              <span className="h-1 w-8 rounded-full bg-[#F75834]" aria-hidden="true"></span>
              <span className="text-white">004</span>
              <span>Workflow</span>
            </div>
          </motion.div>
          <motion.h2 
            id="workflow-heading"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-white tracking-tight"
          >
            Our streamlined 7-day workflow ensures accuracy, compliance, and speed. Delivering verified results you can trust.
          </motion.h2>
        </div>

        {/* Timeline */}
        <ol className="flex flex-col relative" role="list" aria-label="Background verification process steps">
          {/* Continuous Vertical Line Background */}
          <div className="absolute left-[4.5rem] md:left-[7.5rem] top-0 bottom-0 w-[1px] bg-zinc-800 hidden md:block" aria-hidden="true" />

          {steps.map((step, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row gap-6 md:gap-0 relative py-12 md:py-16"
            >
              {/* Day Label (Rotated) */}
              <div className="md:w-[7.5rem] flex-shrink-0 relative flex justify-center md:justify-end md:pr-12">
                <div className="md:absolute md:right-8 md:top-16 md:origin-center md:-rotate-90 md:w-32 md:text-right">
                  <span className="text-sm font-bold text-[#F75834] tracking-wider uppercase">
                    {step.day}
                  </span>
                </div>
              </div>

              {/* Vertical Bar Segment */}
              <div className="hidden md:block w-[1px] bg-zinc-800 relative mr-12 lg:mr-20" aria-hidden="true">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                  className="absolute top-0 left-0 w-full bg-[#F75834]" 
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 md:pt-2 max-w-2xl">
                <div className="text-[#F75834] font-bold text-xl tracking-widest" aria-hidden="true">
                  {step.id}.
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
});
