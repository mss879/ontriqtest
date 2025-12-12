'use client';

import { motion } from 'framer-motion';

interface TechContentProps {
  title?: string;
  description?: string;
  points?: string[];
  footerText?: string;
}

export function TechContent({ title, description, points, footerText }: TechContentProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {title && (
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">
              {title}
            </h2>
          )}
          
          {description && (
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              {description}
            </p>
          )}

          {points && points.length > 0 && (
            <div className="grid gap-4 mb-12">
              {points.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-6 rounded-[24px] bg-slate-50 border border-slate-100 hover:border-blue-100 transition-colors"
                >
                  <div className="h-2 w-2 rounded-full bg-[#0098F3] shrink-0 mt-2.5" />
                  <span className="text-lg text-slate-700 font-medium leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>
          )}

          {footerText && (
            <div className="p-8 bg-blue-50 rounded-[32px] border border-blue-100">
              <p className="text-lg text-slate-700 font-medium leading-relaxed">
                {footerText}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
