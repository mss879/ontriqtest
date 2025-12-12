'use client';

import React from 'react';
import { motion } from 'framer-motion';

const workflowSteps = [
  {
    title: "Client Onboarding & Requirement Gathering",
    description: "The process begins with understanding client requirements. Our team defines the type and depth of verifications, scope, and SLA expectations. Each client is assigned a dedicated account manager for coordination."
  },
  {
    title: "Candidate Data Collection & Consent",
    description: "Candidates receive a secure BGV request link to submit required documents such as IDs, certificates, and consent forms. This ensures compliance with the Sri Lanka Data Protection Act."
  },
  {
    title: "Verification Execution (Multi-Level Checks)",
    description: "Our verification team validates data through trusted sources — contacting past employers, educational institutions, and conducting criminal, address, and reference verifications."
  },
  {
    title: "Quality Assurance & Escalation Management",
    description: "Each verification undergoes a two-step Quality Check (QC) by senior analysts to ensure accuracy, consistency, and prompt escalation of discrepancies."
  },
  {
    title: "Compilation report & Delivery",
    description: "Once all checks are complete, we compile results into a detailed report including findings, verification status, and risk grading. Reports are securely shared via encrypted channels."
  },
  {
    title: "Post-Verification Support & Continuous Improvement",
    description: "Account managers provide clarifications, re-verifications, and periodic performance reports. Continuous audits ensure process optimization and client satisfaction."
  }
];

export function BgvWorkflowSteps() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-800 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#F75834] mr-2"></span>
            7 Working Days Delivery
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl mb-6 max-w-3xl">
            ONTRIQ BACKGROUND VERIFICATION WORKFLOW
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At Ontriq, our Background Verification (BGV) workflow is meticulously designed to ensure accuracy, speed, and compliance — all while maintaining the highest level of data confidentiality. Our proven process enables us to complete end-to-end verifications within just 7 working days, making us Sri Lanka’s fastest and most efficient BGV provider.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block"></div>
          <div className="absolute left-[28px] top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 md:hidden"></div>

          <div className="space-y-12">
            {workflowSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[28px] md:left-1/2 top-0 w-14 h-14 flex items-center justify-center -translate-x-1/2 z-10">
                  <div className="w-10 h-10 rounded-full bg-white border-4 border-[#F75834] flex items-center justify-center shadow-sm">
                    <span className="text-sm font-bold text-slate-900">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 ml-16 md:ml-0">
                  <div className={`bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-orange-200 transition-colors duration-300 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
