import { ServiceHero } from '@/components/services/service-hero';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Ontriq - Comprehensive Workforce & Business Solutions',
  description: 'Explore Ontriq\'s services including Background Verification, HR Management, Recruitment, Payroll, and Company Formation in Sri Lanka.',
  keywords: ['Ontriq services', 'BGV', 'HR solutions', 'recruitment', 'payroll', 'company formation Sri Lanka'],
  openGraph: {
    title: 'Our Services | Ontriq',
    description: 'Comprehensive workforce and business solutions designed to help your organization thrive.',
    url: 'https://ontriq.com/services',
  },
};

const services = [
  {
    title: 'Background Verification (BGV)',
    description: 'Sri Lanka’s most trusted and fastest-growing BGV provider.',
    link: '/services/bgv',
    number: '01'
  },
  {
    title: 'Human Resource Management',
    description: 'End-to-end HR solutions that align with your business goals.',
    link: '/services/hr',
    number: '02'
  },
  {
    title: 'Talent Acquisition & Recruitment',
    description: 'Attract, identify, and hire top-tier talent aligned with your goals.',
    link: '/services/recruitment',
    number: '03'
  },
  {
    title: 'Payroll Processing & Administration',
    description: 'Accurate, timely, and fully compliant payroll services.',
    link: '/services/payroll',
    number: '04'
  },
  {
    title: 'Business Formation & Regulatory Setup',
    description: 'End-to-end support for establishing your business in Sri Lanka.',
    link: '/services/company-formation',
    number: '05'
  }
];

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Business Services",
    "provider": {
      "@type": "Organization",
      "name": "Ontriq",
      "url": "https://ontriq.com"
    },
    "areaServed": "Sri Lanka",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Ontriq Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Background Verification"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Human Resource Management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Talent Acquisition & Recruitment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Payroll Processing & Administration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Formation & Regulatory Setup"
          }
        }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceHero 
        serviceNumber="ALL"
        title="Our Services"
        description="Comprehensive workforce and business solutions designed to help your organization thrive."
      />
      
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link 
                key={index} 
                href={service.link}
                className="group relative flex flex-col overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-50 p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="mb-6 text-5xl font-bold text-zinc-200 group-hover:text-[#FF8918]/20 transition-colors duration-500">
                  {service.number}
                </div>
                <h3 className="mb-3 text-2xl font-bold text-zinc-900 group-hover:text-[#FF8918] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mb-8 text-zinc-600 font-medium leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center text-sm font-bold text-[#0098F3] group-hover:translate-x-2 transition-transform duration-300 uppercase tracking-wide">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
