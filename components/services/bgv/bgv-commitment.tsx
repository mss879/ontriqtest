'use client';

import { motion } from 'framer-motion';

const advantages = [
  { core: 'SPEED', desc: 'Verified reports delivered within 7 working days — the fastest in Sri Lanka.' },
  { core: 'ACCURACY', desc: 'Multi-level verification and QC to ensure 98%+ precision.' },
  { core: 'COMPLIANCE', desc: 'Full adherence to data protection and legal frameworks.' },
  { core: 'TRANSPARENCY', desc: 'Real-time tracking and status updates for clients.' },
  { core: 'SCALABILITY', desc: 'Workflow is built to handle both individual and bulk verifications seamlessly.' },
];

const commitments = [
  'Accuracy you can trust.',
  'Speed that redefines industry standards.',
  'Compliance that safeguards your brand.',
  'Confidentiality that builds confidence.'
];

export function BgvCommitment() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Why Our Workflow Works */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">Why Our Workflow Works</h2>
            <div className="flex flex-col gap-4">
              {advantages.map((adv, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-[24px] border border-zinc-200 bg-zinc-50 hover:bg-white transition-all duration-500 hover:shadow-lg hover:shadow-orange-500/5"
                >
                  <div className="min-w-[140px] font-bold text-[#0098F3] uppercase tracking-wide text-sm">
                    {adv.core}
                  </div>
                  <div className="text-zinc-600 font-medium leading-relaxed">
                    {adv.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Our Commitment */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">Our Commitment</h2>
            <div className="grid gap-4 mb-10">
              {commitments.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-[20px] bg-white border border-zinc-100 shadow-sm"
                >
                  <div className="h-2 w-2 rounded-full bg-[#FF8918] shrink-0" />
                  <span className="text-lg text-zinc-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="p-8 bg-zinc-50 rounded-[32px] border border-zinc-200">
              <p className="text-lg text-zinc-600 italic mb-6 leading-relaxed">
                With Ontriq, organizations can rest assured that every candidate they hire has been thoroughly verified through a process that’s fast, reliable, and compliant.
              </p>
              <p className="text-xl font-bold text-[#0098F3]">
                “Verified faster. Delivered better. Trusted always.”
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
