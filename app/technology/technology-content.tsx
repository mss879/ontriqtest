'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Users, 
  UserPlus, 
  Banknote, 
  Building2, 
  Lock, 
  Server, 
  FileText,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { CTASection } from '@/components/cta-section';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const specs = [
  {
    title: 'Background Verification',
    icon: ShieldCheck,
    description: 'Advanced Applicant Tracking Systems (ATS) and automated verification platforms for real-time identity and record checks.',
    points: [
      'Applicant Tracking Systems (ATS)',
      'Automated Verification Platforms',
      'Real-time Identity Checks'
    ]
  },
  {
    title: 'HR Management',
    icon: Users,
    description: 'Comprehensive platforms for managing employee records, attendance, leave, and performance evaluations.',
    points: [
      'Employee Record Management',
      'Self-service Portals',
      'Workflow Automation'
    ]
  },
  {
    title: 'Talent Acquisition',
    icon: UserPlus,
    description: 'AI-powered screening tools and video interviewing platforms to streamline recruitment pipelines.',
    points: [
      'Sourcing & Screening',
      'Video Interviewing',
      'AI-Powered Matching'
    ]
  },
  {
    title: 'Payroll Management',
    icon: Banknote,
    description: 'Automated salary calculations, tax deductions, and statutory compliance management.',
    points: [
      'Automated Calculations',
      'Statutory Compliance (EPF/ETF)',
      'Secure Payslip Distribution'
    ]
  },
  {
    title: 'Business Formation',
    icon: Building2,
    description: 'Digital tools for handling incorporation paperwork, licenses, and regulatory filings.',
    points: [
      'Document Management',
      'Compliance Monitoring',
      'Digital E-filing'
    ]
  }
];

const securityPoints = [
  {
    title: "Advanced Innovation",
    description: "Leveraging IT innovations for secure, compliant service delivery."
  },
  {
    title: "Comprehensive Protection",
    description: "Tailored security measures protecting critical processes and data assets."
  },
  {
    title: "Continuous Improvement",
    description: "Regular assessment to enhance our ISMS and uphold industry best practices."
  },
  {
    title: "Strict Adherence",
    description: "Compliance with privacy laws and ethical standards, aligned with ISO 27001:2013."
  }
];

export function TechnologyContent() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Section 1: Hero / Infrastructure */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-32 pb-24 md:pt-40 md:pb-28">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="container relative mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 mb-16 md:mb-24 md:items-center md:text-center"
          >
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              <span className="h-1 w-8 rounded-full bg-[#F75834]"></span>
            </div>
            <div className="space-y-6 max-w-4xl">
              <h1 className="text-[44px] font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-6xl leading-[1.1]">
                Technology & <span className="text-slate-400">Infrastructure.</span>
              </h1>
              <p className="text-base text-slate-500 md:text-lg leading-relaxed max-w-2xl mx-auto">
                At Ontriq, our investment in cutting-edge technology is central to delivering excellence. Our advanced systems streamline complex processes, ensure data accuracy, and enhance security across all service verticals.
              </p>
            </div>
          </motion.div>

          {/* Infrastructure Highlight Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-8 md:p-12"
          >
            <div className="absolute inset-0 opacity-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 shadow-sm">
                  <Server className="h-4 w-4 text-[#F75834]" />
                  <span className="text-sm font-medium text-slate-700">Robust Systems</span>
                </div>
                <h3 className="text-3xl font-semibold text-slate-900">Built for Speed & Precision</h3>
                <p className="text-slate-500 leading-relaxed">
                  Whether it's automating payroll, securely managing employee data, or verifying candidate backgrounds, our tech-enabled solutions are designed to meet your business objectives efficiently and reliably.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['Speed', 'Precision', 'Flexibility', 'Compliance'].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-3 text-center group hover:border-[#F75834]/30 transition-colors">
                    <div className="h-2 w-2 rounded-full bg-[#F75834] group-hover:scale-150 transition-transform"></div>
                    <span className="font-semibold text-slate-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Specifications */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 mb-16">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              <span className="h-1 w-8 rounded-full bg-[#F75834]"></span>
              <span className="text-slate-900">02</span>
              <span>Specifications</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900">
              Technology We Use
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col p-8 rounded-[32px] border border-white bg-white shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-[#F75834] group-hover:bg-[#F75834] group-hover:text-white transition-colors duration-500">
                  <spec.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{spec.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {spec.description}
                </p>
                <ul className="space-y-2 mt-auto border-t border-slate-100 pt-6">
                  {spec.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-[#F75834] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Security (Dark Section) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[40px] bg-slate-900 p-8 md:p-16 text-white">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F75834] to-transparent opacity-50"></div>
            <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#F75834]/10 blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-400 mb-8">
                <span className="h-1 w-8 rounded-full bg-[#F75834]"></span>
                <span className="text-white">03</span>
                <span>Security</span>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                    Information Security <br/>
                    <span className="text-slate-500">Management System</span>
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    We conduct all operations under a robust Information Security Management System (ISMS) framework to safeguard the confidentiality, integrity, and availability of sensitive client and company information.
                  </p>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <Lock className="h-8 w-8 text-[#F75834]" />
                    <div>
                      <h4 className="font-semibold">ISO 27001:2013 Aligned</h4>
                      <p className="text-sm text-slate-400">Strict adherence to international standards</p>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {securityPoints.map((point, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <h4 className="font-semibold text-lg mb-2 text-white">{point.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{point.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Continuity & Confidentiality */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Continuity Card */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-10"
            >
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <RefreshCw className="h-32 w-32 text-[#F75834]" />
              </div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                  <span className="h-1 w-8 rounded-full bg-[#F75834]"></span>
                  <span>04</span>
                  <span>Continuity</span>
                </div>
                <h3 className="text-3xl font-semibold text-slate-900">Resilience & Recovery</h3>
                <p className="text-slate-500 leading-relaxed">
                  To ensure continuous operations during disruptions, we have implemented several Business Continuity options designed for resilience, flexibility, and rapid recovery. Our robust infrastructure ensures your business operations remain seamless.
                </p>
                <div className="pt-6">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="p-0 h-auto hover:bg-transparent group/btn">
                        <div className="inline-flex items-center gap-2 text-[#F75834] font-semibold">
                          <span>View Continuity Plan</span>
                          <div className="h-1 w-8 bg-[#F75834] rounded-full group-hover/btn:w-12 transition-all"></div>
                        </div>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-slate-900 mb-4">OUR CONTINUITY PLAN</DialogTitle>
                        <DialogDescription className="text-base text-slate-600 leading-relaxed">
                          At Ontriq, we understand the importance of uninterrupted service delivery across our core offerings, including Background Verification, Human Resource Management, Talent Acquisition, Payroll Administration, and Business Formation & Regulatory Setup. To ensure continuous operations during disruptions, we have implemented several Business Continuity options designed for resilience, flexibility, and rapid recovery.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </motion.div>

            {/* Confidentiality Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-10"
            >
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <FileText className="h-32 w-32 text-[#F75834]" />
              </div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                  <span className="h-1 w-8 rounded-full bg-[#F75834]"></span>
                  <span>05</span>
                  <span>Confidentiality</span>
                </div>
                <h3 className="text-3xl font-semibold text-slate-900">Data Protection</h3>
                <p className="text-slate-500 leading-relaxed">
                  We uphold the highest standards of confidentiality. We prevent unauthorized access, disclosure, or alteration of information through secure systems, rigorous access controls, and formal non-disclosure agreements (NDAs).
                </p>
                <div className="pt-6">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="p-0 h-auto hover:bg-transparent group/btn">
                        <div className="inline-flex items-center gap-2 text-[#F75834] font-semibold">
                          <span>View Policy</span>
                          <div className="h-1 w-8 bg-[#F75834] rounded-full group-hover/btn:w-12 transition-all"></div>
                        </div>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-slate-900 mb-4">CONFIDENTIALITY POLICY STATEMENT</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6 text-slate-600">
                        <p className="text-base leading-relaxed">
                          We uphold the highest standards of confidentiality and data security as a foundational principle of our delivery service.
                        </p>
                        <div className="space-y-4">
                          <p className="font-semibold text-slate-900">We are committed to:</p>
                          <ul className="space-y-3 list-disc pl-5">
                            <li>Ensuring that all client and candidate data is handled with the utmost discretion and in full compliance with applicable privacy regulations.</li>
                            <li>Preventing unauthorized access, disclosure, alteration, or destruction of any confidential information through secure systems and rigorous access controls.</li>
                            <li>Maintaining a culture of confidentiality among our team, supported by formal non-disclosure agreements (NDAs), regular staff training, and clearly defined internal policies.</li>
                          </ul>
                        </div>
                        <p className="text-base leading-relaxed border-t border-slate-100 pt-4 mt-4">
                          Ontriq assumes full accountability for the protection of sensitive information and has a proven record of safeguarding our clients' trust. This commitment is embedded in our operations today and will remain a core value in the future.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
