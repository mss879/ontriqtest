'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Gavel, 
  UserCheck, 
  MessageSquareQuote, 
  Globe, 
  FlaskConical 
} from 'lucide-react';

const processSteps = [
  {
    title: "Employment History Verification",
    description: "We verify a candidate’s past job roles, tenure, and reporting structure directly with previous employers or HR departments to confirm authenticity and reduce the risk of falsified experience.",
    icon: Briefcase
  },
  {
    title: "Educational Qualification Verification",
    description: "We validate academic and professional credentials by issuing universities or institutions, ensuring the legitimacy of qualifications and compliance with hiring standards.",
    icon: GraduationCap
  },
  {
    title: "Criminal Record Checks",
    description: "We conduct checks for any criminal history or pending charges using authorized legal and police databases, ensuring a safe and compliant hiring process.",
    icon: Gavel
  },
  {
    title: "Identity and Address Verification",
    description: "We authenticate government-issued IDs and residential addresses using official records and digital verification tools to ensure identity integrity and traceability.",
    icon: UserCheck
  },
  {
    title: "Reference Checks",
    description: "We obtain professional feedback from previous supervisors or colleagues to assess work ethic, reliability, and overall performance.",
    icon: MessageSquareQuote
  },
  {
    title: "Global Sanction Report",
    description: "We screen candidates against international sanction and watchlist databases such as OFAC, Interpol, and UN lists to ensure compliance and reduce global hiring risks.",
    icon: Globe
  },
  {
    title: "Drug Test",
    description: "We conduct pre-employment and random drug screenings through certified labs to promote workplace safety and maintain a healthy workforce.",
    icon: FlaskConical
  }
];

export function BgvProcessList() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Multi-Layer Verification
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            We conduct checks across multiple verification layers to ensure comprehensive coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:border-[#F75834]/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Decorative gradient blob */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-50 blur-3xl group-hover:bg-orange-100 transition-colors duration-500" />
              
              {/* Tech accent line */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-[#F75834] group-hover:w-full transition-all duration-500 ease-out" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-[#F75834] group-hover:border-[#F75834] transition-all duration-300 shadow-sm">
                    <step.icon className="h-7 w-7 text-slate-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-4xl font-bold text-[#F75834] transition-colors duration-300 select-none">
                    0{index + 1}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#F75834] transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
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
