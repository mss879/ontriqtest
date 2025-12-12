import { FormationHero } from '@/components/services/company-formation/formation-hero';
import { FormationFeatures } from '@/components/services/company-formation/formation-features';
import { CTASection } from '@/components/cta-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company Formation & Business Registration Sri Lanka | Ontriq',
  description: 'Expert assistance for company registration, business incorporation, and regulatory compliance in Sri Lanka. Start your business with Ontriq.',
  keywords: ['company formation Sri Lanka', 'business registration', 'incorporate company', 'business setup', 'regulatory compliance'],
  openGraph: {
    title: 'Company Formation & Business Registration Sri Lanka | Ontriq',
    description: 'End-to-end support for business formation and regulatory setup in Sri Lanka.',
    url: 'https://ontriq.com/services/company-formation',
  },
};

export default function CompanyFormationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Company Formation",
    "provider": {
      "@type": "Organization",
      "name": "Ontriq"
    },
    "areaServed": "Sri Lanka",
    "description": "End-to-end support for business formation and regulatory setup in Sri Lanka."
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FormationHero 
        serviceNumber="005"
        title="Business Formation"
        subtitle="& Regulatory Setup"
        description="At Ontriq, we provide end-to-end support for entrepreneurs, startups, and established companies looking to legally establish and operate their businesses in Sri Lanka. Our Business Formation and Regulatory Setup services are designed to simplify the incorporation process, ensure full legal compliance, and position businesses for long-term success."
      />
      <FormationFeatures />
      <CTASection />
    </main>
  );
}
