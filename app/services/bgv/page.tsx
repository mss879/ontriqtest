import { BgvHero } from '@/components/services/bgv/bgv-hero';
import { BgvFeatures } from '@/components/services/bgv/bgv-features';
import { BgvProcess } from '@/components/services/bgv/bgv-process';
import { BgvWorkflow } from '@/components/services/bgv/bgv-workflow';
import { BgvCommitment } from '@/components/services/bgv/bgv-commitment';
import { CTASection } from '@/components/cta-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Background Verification (BGV) Services | Ontriq Sri Lanka',
  description: 'Sri Lanka\'s fastest BGV provider. 7-day turnaround for employment, education, and criminal record checks. Trusted by top companies.',
  keywords: ['BGV Sri Lanka', 'background verification', 'employment check', 'education verification', 'criminal record check', 'Ontriq BGV'],
  openGraph: {
    title: 'Background Verification (BGV) Services | Ontriq',
    description: 'Sri Lanka\'s fastest BGV provider. 7-day turnaround for employment, education, and criminal record checks.',
    url: 'https://ontriq.com/services/bgv',
  },
};

export default function BgvPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Background Verification",
    "provider": {
      "@type": "Organization",
      "name": "Ontriq"
    },
    "areaServed": "Sri Lanka",
    "description": "Comprehensive background verification services including employment, education, and criminal checks with a 7-day turnaround.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "LKR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BgvHero 
        serviceNumber="001"
        title="Background Verification"
        subtitle="(BGV) Services"
        description={`At Ontriq, Background Verification (BGV) is at the core of our operations and remains our primary source of revenue. We take immense pride in being Sri Lanka’s most trusted and fastest-growing BGV provider, known for our speed, accuracy, and reliability.

We are the only Background Verification company in Sri Lanka capable of completing full BGV cases within 7 working days — a benchmark unmatched in the local market.`}
      />
      <BgvFeatures />
      <BgvProcess />
      <BgvWorkflow />
      <BgvCommitment />
      <CTASection />
    </main>
  );
}
