'use client';

import Link from 'next/link';

export default function HeroCTA() {
  return (
    <div className="flex flex-row items-center gap-4" role="group" aria-label="Call to action buttons">
      <Link
        href="/contact"
        className="group relative flex items-center justify-center overflow-hidden rounded-xl p-[1px]"
        aria-label="Get started - Contact us"
      >
        <div className="absolute inset-0 opacity-60 blur-[10px]" style={{ backgroundColor: 'rgb(218, 78, 36)' }} aria-hidden="true" />
        <div 
          className="absolute inset-0 rounded-xl" 
          style={{ 
            background: 'linear-gradient(163deg, rgb(255, 137, 24) 28%, rgb(162, 41, 4) 54%, rgb(0, 0, 0) 68%, rgb(0, 152, 243) 100%)' 
          }} 
          aria-hidden="true"
        />
        <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-black px-8 py-3 transition-all duration-300 group-hover:bg-black/90">
          <span className="font-medium text-white">Get Started</span>
        </div>
      </Link>

      <Link
        href="/services"
        className="group relative flex items-center justify-center rounded-xl border border-white/20 px-8 py-3 transition-all duration-300 hover:bg-white/5"
        aria-label="View our services"
      >
        <span className="font-medium text-white">Our Services</span>
      </Link>
    </div>
  );
}
