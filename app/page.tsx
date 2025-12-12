import dynamic from 'next/dynamic';
import Hero from '@/components/hero';

// Dynamically import below-fold components for better initial load
const BentoGrid = dynamic(() => import('@/components/bento-grid'), {
  loading: () => <div className="min-h-screen" aria-label="Loading content..." />,
});

const ServicesSection = dynamic(() => import('@/components/services-section'), {
  loading: () => <div className="min-h-[600px]" aria-label="Loading services..." />,
});

const WhyChooseUs = dynamic(
  () => import('@/components/why-choose-us').then((mod) => ({ default: mod.WhyChooseUs })),
  { loading: () => <div className="min-h-[600px]" aria-label="Loading content..." /> }
);

const ProcessSection = dynamic(
  () => import('@/components/process-section').then((mod) => ({ default: mod.ProcessSection })),
  { loading: () => <div className="min-h-[600px]" aria-label="Loading process..." /> }
);

const FaqSection = dynamic(
  () => import('@/components/faq-section').then((mod) => ({ default: mod.FaqSection })),
  { loading: () => <div className="min-h-[400px]" aria-label="Loading FAQ..." /> }
);

// JSON-LD for homepage services
const homePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Ontriq - Your Complete Workforce and Business Partner',
  description: 'Sri Lanka\'s leading Background Verification, HR Solutions, Recruitment, Payroll Management, and Business Formation services.',
  url: 'https://ontriq.com',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Ontriq',
    image: 'https://ontriq.com/ontriq logo1.png',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'LK',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '100',
    },
  },
  mainContentOfPage: {
    '@type': 'WebPageElement',
    cssSelector: '#main-content',
  },
};

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Ontriq Services',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Background Verification (BGV) Services',
        description: 'Complete background verification within 7 working days - fastest in Sri Lanka.',
        provider: { '@type': 'Organization', name: 'Ontriq' },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Human Resource Solutions',
        description: 'End-to-end HR solutions for building and maintaining a productive workforce.',
        provider: { '@type': 'Organization', name: 'Ontriq' },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'Talent Recruitment',
        description: 'Customized recruitment strategies for finding top-tier talent.',
        provider: { '@type': 'Organization', name: 'Ontriq' },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'Payroll Management',
        description: 'Accurate, timely, and fully compliant payroll processing services.',
        provider: { '@type': 'Organization', name: 'Ontriq' },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Service',
        name: 'Business Formation and Setup',
        description: 'End-to-end support for business incorporation in Sri Lanka.',
        provider: { '@type': 'Organization', name: 'Ontriq' },
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <main id="main-content" className="min-h-screen" role="main">
        <Hero />
        <BentoGrid />
        <ServicesSection />
        <WhyChooseUs />
        <ProcessSection />
        <FaqSection />
      </main>
    </>
  );
}
