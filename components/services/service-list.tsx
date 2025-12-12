'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceListProps {
  title?: string;
  items: ServiceItem[];
  footerText?: string;
}

export function ServiceList({ title, items, footerText }: ServiceListProps) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {title && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {title}
            </h2>
          </div>
        )}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col p-8 rounded-[32px] border border-zinc-200 bg-zinc-50 hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div className="mb-6 p-4 w-fit rounded-full bg-white border border-zinc-100 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <CheckCircle2 className="h-8 w-8 text-[#F75834]" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-zinc-900">
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {footerText && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-white rounded-2xl border border-slate-100 text-center max-w-4xl mx-auto"
          >
            <p className="text-lg text-slate-700 font-medium">
              {footerText}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
