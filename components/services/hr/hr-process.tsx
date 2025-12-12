'use client';

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: 'Needs Assessment',
    description: 'We analyze your current HR structure and identify gaps and opportunities.',
    stat: 'Analyze'
  },
  {
    title: 'Strategy Design',
    description: 'Developing tailored HR strategies aligned with your business goals.',
    stat: 'Plan'
  },
  {
    title: 'Implementation',
    description: 'Executing policies, systems, and processes with minimal disruption.',
    stat: 'Execute'
  },
  {
    title: 'Ongoing Management',
    description: 'Continuous monitoring, support, and optimization of HR functions.',
    stat: 'Support'
  }
];

export function HrProcess() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-slate-900 mb-6">
              How We Work
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              A strategic approach to building a stronger workforce.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="h-px w-32 bg-slate-300"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col gap-6"
            >
              <div className="flex items-baseline gap-2 border-b border-slate-200 pb-6 group-hover:border-[#F75834] transition-colors duration-500">
                <span className="text-5xl font-light text-slate-300 group-hover:text-[#F75834] transition-colors duration-500">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Step</span>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-medium text-slate-900">
                  {step.title}
                </h3>
                <p className="text-base text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
