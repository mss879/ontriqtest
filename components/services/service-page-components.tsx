'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plus, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceSectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  description?: string;
  light?: boolean;
}

export function ServiceSectionHeader({ number, title, subtitle, description, light = false }: ServiceSectionHeaderProps) {
  const textColor = light ? 'text-white' : 'text-slate-900';
  const subTextColor = light ? 'text-slate-400' : 'text-slate-500';
  const accentColor = light ? 'bg-[#FF8918]' : 'bg-[#F75834]';

  return (
    <div className="flex flex-col gap-6 items-start mb-16 max-w-4xl">
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
        <span className={`h-1 w-8 rounded-full ${accentColor}`}></span>
        <span className={textColor}>{number}</span>
        <span className={subTextColor}>{subtitle || 'Section'}</span>
      </div>
      <div className="space-y-4">
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight ${textColor}`}>
          {title}
        </h2>
        {description && (
          <p className={`text-lg md:text-xl leading-relaxed ${subTextColor}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

interface ServiceCardItem {
  title: string;
  description: string;
  icon?: React.ElementType;
}

interface ServiceCardGridProps {
  items: ServiceCardItem[];
  columns?: 2 | 3 | 4;
}

export function ServiceCardGrid({ items, columns = 3 }: ServiceCardGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid gap-6 ${gridCols[columns]}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group flex flex-col p-8 rounded-[32px] border border-zinc-200 bg-white hover:bg-zinc-50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10"
        >
          <div className="mb-6 flex items-center justify-between">
            <div className="h-12 w-12 rounded-full bg-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <span className="text-lg font-bold text-[#F75834]">{(index + 1).toString().padStart(2, '0')}</span>
            </div>
            {item.icon && <item.icon className="h-6 w-6 text-slate-400 group-hover:text-[#F75834] transition-colors" />}
          </div>
          
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-[#F75834] transition-colors">
              {item.title}
            </h3>
            <p className="text-zinc-600 leading-relaxed font-medium">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

interface ServiceListItem {
  title: string;
  description: string;
  stat?: string;
}

interface ServiceHorizontalListProps {
  items: ServiceListItem[];
}

export function ServiceHorizontalList({ items }: ServiceHorizontalListProps) {
  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group border-t border-slate-200 py-10 md:py-14 transition-colors hover:bg-slate-50/50"
        >
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 lg:col-span-5">
              <h3 className="text-2xl md:text-3xl font-medium text-slate-900 group-hover:text-[#F75834] transition-colors">
                {item.title}
              </h3>
            </div>
            
            <div className="md:col-span-6 lg:col-span-6">
              <p className="text-lg text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="md:col-span-1 lg:col-span-1 flex justify-end items-center">
              <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#F75834] group-hover:bg-[#F75834] transition-all duration-300">
                <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors -rotate-45 group-hover:rotate-0" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      <div className="border-t border-slate-200" />
    </div>
  );
}
