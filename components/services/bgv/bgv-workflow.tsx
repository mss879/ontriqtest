'use client';

import { motion } from 'framer-motion';

const workflowSteps = [
  {
    title: 'Client Onboarding & Requirement Gathering',
    description: 'The process begins with understanding client requirements. Our team defines the type and depth of verifications, scope, and SLA expectations. Each client is assigned a dedicated account manager for coordination.'
  },
  {
    title: 'Candidate Data Collection & Consent',
    description: 'Candidates receive a secure BGV request link to submit required documents such as IDs, certificates, and consent forms. This ensures compliance with the Sri Lanka Data Protection Act.'
  },
  {
    title: 'Verification Execution (Multi-Level Checks)',
    description: 'Our verification team validates data through trusted sources — contacting past employers, educational institutions, and conducting criminal, address, and reference verifications.'
  },
  {
    title: 'Quality Assurance & Escalation Management',
    description: 'Each verification undergoes a two-step Quality Check (QC) by senior analysts to ensure accuracy, consistency, and prompt escalation of discrepancies.'
  },
  {
    title: 'Compilation report & Delivery',
    description: 'Once all checks are complete, we compile results into a detailed report including findings, verification status, and risk grading. Reports are securely shared via encrypted channels.'
  },
  {
    title: 'Post-Verification Support & Continuous Improvement',
    description: 'Account managers provide clarifications, re-verifications, and periodic performance reports. Continuous audits ensure process optimization and client satisfaction.'
  }
];

export function BgvWorkflow() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">
            Ontriq Background Verification Workflow
          </h2>
          <p className="text-lg text-slate-300">
            Delivering Verified Results Within 7 Working Days. Our proven process enables us to complete end-to-end verifications within just 7 working days.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 w-full">
                  <div className={`p-8 rounded-[32px] bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-colors duration-500 ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}>
                    <h3 className="text-xl font-bold text-[#FF8918] mb-3">{step.title}</h3>
                    <p className="text-slate-300 leading-relaxed font-medium">{step.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#0098F3] text-white font-bold text-lg shadow-lg shadow-blue-500/20 shrink-0">
                  {index + 1}
                </div>

                <div className="flex-1 w-full hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
