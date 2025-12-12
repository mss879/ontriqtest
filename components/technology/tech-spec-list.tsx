'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Server, Shield, Database, FileText, Users } from 'lucide-react';

const icons = {
  bgv: Shield,
  hr: Users,
  recruitment: Users,
  payroll: FileText,
  formation: Database,
  default: Server
};

interface TechSpecItem {
  title: string;
  points: string[];
  iconType?: keyof typeof icons;
}

interface TechSpecListProps {
  items: TechSpecItem[];
}

export function TechSpecList({ items }: TechSpecListProps) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[item.iconType as keyof typeof icons] || icons.default;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col p-8 rounded-[32px] border border-zinc-200 bg-zinc-50 hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="mb-6 p-4 w-fit rounded-full bg-white border border-zinc-100 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <Icon className="h-8 w-8 text-[#0098F3]" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-zinc-900">
                    {item.title}
                  </h3>
                  <ul className="space-y-3">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex gap-3 text-zinc-600 font-medium leading-relaxed text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0098F3] mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
