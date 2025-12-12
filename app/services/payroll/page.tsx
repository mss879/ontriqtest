import { PayrollHero } from '@/components/services/payroll/payroll-hero';
import { PayrollFeatures } from '@/components/services/payroll/payroll-features';
import { CTASection } from '@/components/cta-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payroll Processing & Administration Services Sri Lanka | Ontriq',
  description: 'Accurate and compliant payroll services in Sri Lanka. Manage employee compensation, tax deductions, and benefits with Ontriq.',
  keywords: ['payroll services Sri Lanka', 'payroll processing', 'payroll administration', 'employee compensation', 'payroll compliance'],
  openGraph: {
    title: 'Payroll Processing & Administration Services Sri Lanka | Ontriq',
    description: 'Accurate, timely, and fully compliant payroll services.',
    url: 'https://ontriq.com/services/payroll',
  },
};

export default function PayrollPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Payroll Services",
    "provider": {
      "@type": "Organization",
      "name": "Ontriq"
    },
    "areaServed": "Sri Lanka",
    "description": "Accurate, timely, and fully compliant payroll processing and administration services."
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PayrollHero 
        serviceNumber="004"
        title="Payroll Processing"
        subtitle="& Administration"
        description="At Ontriq, we offer accurate, timely, and fully compliant Payroll Processing and Administration services that help businesses manage employee compensation with confidence and ease. Our payroll solutions are designed to reduce administrative burdens, eliminate errors, and ensure adherence to all regulatory requirements."
      />
      <PayrollFeatures />
      <CTASection />
    </main>
  );
}
