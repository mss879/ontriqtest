import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { AboutHero } from '@/components/about/about-hero';

// Dynamically import below-fold components for better performance
const BgvExplanation = dynamic(
  () => import('@/components/about/bgv-explanation').then((mod) => ({ default: mod.BgvExplanation })),
  { loading: () => <div className="min-h-[600px]" aria-label="Loading content..." /> }
);

const WhatWeCheck = dynamic(
  () => import('@/components/about/what-we-check').then((mod) => ({ default: mod.WhatWeCheck })),
  { loading: () => <div className="min-h-[600px]" aria-label="Loading content..." /> }
);

export const metadata: Metadata = {
  title: 'About Us | Background Verification Experts in Sri Lanka',
  description: 'Learn about Ontriq - Sri Lanka\'s trusted Background Verification (BGV) company. Part of Konnect BPO Technologies, we ensure accurate, legal, and safe verification services for employers and candidates.',
  keywords: [
    'about Ontriq',
    'background verification Sri Lanka',
    'BGV company',
    'Konnect BPO',
    'employee verification',
    'trusted BGV provider',
    'Sri Lanka verification services',
  ],
  openGraph: {
    title: 'About Ontriq | Sri Lanka\'s Trusted Background Verification Company',
    description: 'Ontriq specializes in Background Verification (BGV) as part of Konnect BPO Technologies. We verify education, employment, identity, and references with consent-first approach.',
    url: 'https://ontriq.com/about',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Ontriq - Background Verification Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Ontriq | Background Verification Experts',
    description: 'Sri Lanka\'s trusted BGV company. Education, employment, identity verification with consent-first approach.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://ontriq.com/about',
  },
};

// JSON-LD structured data for About page
const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Ontriq',
  description: 'Learn about Ontriq - Sri Lanka\'s trusted Background Verification company',
  url: 'https://ontriq.com/about',
  mainEntity: {
    '@type': 'Organization',
    name: 'Ontriq',
    description: 'Ontriq is a trusted company in Sri Lanka that specializes in Background Verification (BGV). Part of Konnect BPO Technologies (Pvt) Ltd.',
    foundingDate: '2025',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Konnect BPO Technologies (Pvt) Ltd',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Sri Lanka',
    },
    knowsAbout: [
      'Background Verification',
      'Education Verification',
      'Employment Verification',
      'Identity Verification',
      'Reference Checks',
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is background verification legal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. BGV is a standard, legal process followed worldwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why should I give my consent for background verification?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because it protects your privacy. Ontriq will only check information with your permission.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will background verification affect my job chances?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, unless the information given is false.',
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main id="main-content" className="min-h-screen bg-white" role="main">
        <AboutHero />
        <BgvExplanation />
        <WhatWeCheck />
      </main>
    </>
  );
}
