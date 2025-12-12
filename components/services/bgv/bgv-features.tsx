'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const features = [
  {
    title: 'Speed with Accuracy',
    description: 'Industry-leading turnaround time of 7 working days for complete BGV reports.',
    stat: '7 Days'
  },
  {
    title: 'Comprehensive Checks',
    description: 'Employment, education, criminal, address, identity, and references.',
    stat: '100%'
  },
  {
    title: 'Local Expertise',
    description: 'Strong relationships with Sri Lankan institutions and adherence to global norms.',
    stat: 'Local'
  },
  {
    title: 'Data Integrity',
    description: 'Full compliance with privacy and data protection regulations.',
    stat: 'Secure'
  },
  {
    title: 'Tailored Solutions',
    description: 'Customized for BPO, financial, healthcare, and IT sectors.',
    stat: 'Custom'
  }
];

export function BgvFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-slate-900">
            Why Ontriq?
          </h2>
        </div>
        
        <div className="flex flex-col">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-t border-slate-200 py-12 md:py-16 transition-colors hover:bg-slate-50/50"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-5 lg:col-span-6">
                  <h3 className="text-3xl md:text-4xl font-medium text-slate-900 group-hover:text-[#F75834] transition-colors">
                    {feature.title}
                  </h3>
                </div>
                
                <div className="md:col-span-5 lg:col-span-4">
                  <p className="text-lg text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="md:col-span-2 lg:col-span-2 flex justify-end items-center">
                  <div className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#F75834] group-hover:bg-[#F75834] transition-all duration-300">
                    <Plus className="h-6 w-6 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-slate-200" />
        </div>
      </div>
    </section>
  );
}

