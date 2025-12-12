import { HrHero } from '@/components/services/hr/hr-hero';
import { HrFeatures } from '@/components/services/hr/hr-features';
import { HrProcess } from '@/components/services/hr/hr-process';
import { CTASection } from '@/components/cta-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HR Management Services & Solutions Sri Lanka | Ontriq',
  description: 'Comprehensive HR solutions including workforce management, compliance, and employee engagement. Optimize your human resources with Ontriq.',
  keywords: ['HR management Sri Lanka', 'HR solutions', 'workforce management', 'HR compliance', 'employee engagement'],
  openGraph: {
    title: 'HR Management Services & Solutions Sri Lanka | Ontriq',
    description: 'End-to-end HR solutions that align with your business goals.',
    url: 'https://ontriq.com/services/hr',
  },
};

export default function HrPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Human Resources",
    "provider": {
      "@type": "Organization",
      "name": "Ontriq"
    },
    "areaServed": "Sri Lanka",
    "description": "End-to-end HR solutions for building and maintaining a productive workforce."
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HrHero 
        serviceNumber="002"
        title="Human Resource"
        subtitle="Management"
        description="At Ontriq, our Human Resource Management services are designed to support organizations in building and maintaining a productive, compliant, and engaged workforce. We provide end-to-end HR solutions that align with your business goals and ensure smooth workforce operations."
      />
      <HrFeatures />
      <HrProcess />
      <CTASection />
    </main>
  );
}
