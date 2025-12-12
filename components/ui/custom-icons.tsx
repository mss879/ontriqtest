import React from 'react';

export const IconBGV = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="4" className="fill-orange-100/50 stroke-orange-500" strokeWidth="1.5" />
    <path d="M9 12L11 14L15 10" className="stroke-orange-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="17" cy="7" r="2" className="fill-orange-200/50" />
  </svg>
);

export const IconHR = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="8" r="4" className="fill-indigo-100/50 stroke-indigo-500" strokeWidth="1.5" />
    <path d="M6 20C6 16.6863 8.68629 14 12 14C15.3137 14 18 16.6863 18 20" className="stroke-indigo-600" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M19 10L21 10" className="stroke-indigo-400" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3 10L5 10" className="stroke-indigo-400" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const IconRecruitment = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 3L14.5 8.5L20.5 9L16 13L17.5 19L12 16L6.5 19L8 13L3.5 9L9.5 8.5L12 3Z" className="fill-purple-100/50 stroke-purple-500" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="2" className="fill-purple-200" />
  </svg>
);

export const IconPayroll = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="2" y="5" width="20" height="14" rx="2" className="fill-emerald-100/50 stroke-emerald-500" strokeWidth="1.5" />
    <path d="M2 10H22" className="stroke-emerald-500/50" strokeWidth="1.5" />
    <circle cx="6" cy="15" r="1.5" className="fill-emerald-500" />
    <path d="M16 15H18" className="stroke-emerald-600" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const IconBusiness = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M3 21H21" className="stroke-slate-400" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M5 21V7L13 3V21" className="fill-orange-100/50 stroke-orange-500" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M13 21V11L19 8V21" className="fill-orange-50/50 stroke-orange-400" strokeWidth="1.5" strokeLinejoin="round" />
    <rect x="7" y="11" width="2" height="2" className="fill-orange-300" />
    <rect x="7" y="15" width="2" height="2" className="fill-orange-300" />
  </svg>
);

export const IconPrecision = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="9" className="stroke-orange-500" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3" className="fill-orange-500" />
    <path d="M12 3V5" className="stroke-orange-400" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 19V21" className="stroke-orange-400" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3 12H5" className="stroke-orange-400" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M19 12H21" className="stroke-orange-400" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const IconConfidentiality = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="5" y="11" width="14" height="10" rx="2" className="fill-orange-100 stroke-orange-500" strokeWidth="1.5" />
    <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" className="stroke-orange-500" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="16" r="1.5" className="fill-orange-800" />
  </svg>
);

export const IconEfficiency = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" className="fill-yellow-100 stroke-yellow-500" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const IconObjective = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V22" className="stroke-red-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 22V15" className="stroke-red-500" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const IconSubsidiary = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" className="stroke-purple-200" strokeWidth="1.5" />
    <path d="M2 12H22" className="stroke-purple-200" strokeWidth="1.5" />
    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" className="stroke-purple-200" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3" className="fill-purple-500" />
  </svg>
);
