import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { FaqSection } from '@/components/faq-section';

// Dynamic import for below-fold CTA section
const CTASection = dynamic(() => import('@/components/cta-section').then(mod => ({ default: mod.CTASection })), {
  loading: () => <div className="min-h-[300px]" aria-label="Loading CTA section" />
});

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Find answers to frequently asked questions about background verification, BGV processes, timelines, candidate concerns, legal compliance, and client support at Ontriq.',
  keywords: ['FAQ', 'background verification FAQ', 'BGV questions', 'employee verification', 'criminal record check', 'address verification', 'reference checks', 'Ontriq FAQ'],
  openGraph: {
    title: 'FAQ - Frequently Asked Questions | Ontriq',
    description: 'Find answers to frequently asked questions about background verification, BGV processes, timelines, and compliance.',
    url: 'https://ontriq.com/faq',
    siteName: 'Ontriq',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://ontriq.com/og-faq.png',
        width: 1200,
        height: 630,
        alt: 'Ontriq FAQ - Background Verification Questions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Frequently Asked Questions | Ontriq',
    description: 'Find answers to frequently asked questions about background verification, BGV processes, timelines, and compliance.',
    images: ['https://ontriq.com/og-faq.png'],
  },
  alternates: {
    canonical: 'https://ontriq.com/faq',
  },
};

// FAQ items for JSON-LD structured data
const faqItems = [
  // General Questions
  { question: "What is a background verification (BGV)?", answer: "Background verification is the process of verifying an individual's personal, educational, and professional details to ensure authenticity before employment or engagement." },
  { question: "Why is background verification important?", answer: "It helps organizations reduce hiring risks, ensure workplace safety, and maintain trust by confirming that the information provided by candidates is accurate." },
  { question: "Who needs a background verification?", answer: "Employers typically conduct BGV for prospective employees. Some clients may also require verifications for contractors, consultants, or business partners." },
  // Services Offered
  { question: "What types of background checks do you provide?", answer: "We provide Employment history verification, Educational qualification verification, Criminal record check, Address verification, Reference checks, Professional license and certificate verification, and Credit checks (if applicable)." },
  { question: "Do you provide customized BGV services?", answer: "Yes, we tailor our verification packages according to industry, role, and client requirements." },
  { question: "Can you verify candidates internationally?", answer: "Yes, we conduct international verifications depending on the country and available data sources." },
  // Process & Timelines
  { question: "How long does a background verification take?", answer: "Typically, verifications take 7-10 business days, depending on the complexity of checks and responsiveness of third parties." },
  { question: "What is the process for conducting a BGV?", answer: "1. Candidate consent is collected. 2. Data is verified through reliable sources. 3. Discrepancies, if any, are reported to the client. 4. A final report is shared with the client." },
  { question: "How do you ensure accuracy?", answer: "Our team uses multiple trusted sources and cross-verifies information to maintain high accuracy standards." },
  // Candidate Concerns
  { question: "Do I need to provide consent for a BGV?", answer: "Yes, candidate consent is legally required before any verification can begin." },
  { question: "Will my personal information be secure?", answer: "Absolutely. We follow strict data privacy policies and comply with relevant laws (e.g., GDPR, local regulations)." },
  { question: "What happens if there's a discrepancy in my records?", answer: "The discrepancy is reported to the client, and you may have a chance to provide clarifications or supporting documents." },
  // Legal & Compliance
  { question: "Are your background checks compliant with local laws?", answer: "Yes, we adhere to all applicable legal and regulatory requirements in the jurisdictions we operate." },
  { question: "Can a BGV report be used in court?", answer: "Generally, BGV reports are for internal HR purposes, but some verified reports may be used as supporting evidence, depending on local laws." },
  // Client Support
  { question: "How can I track the status of a verification?", answer: "Clients can track reports via our secure online portal or by contacting our support team." },
  { question: "What if I need an urgent verification?", answer: "Expedited services are available for an additional fee, depending on the checks required." },
];

// JSON-LD structured data for FAQ Page
const faqPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'FAQ - Frequently Asked Questions',
  description: 'Find answers to frequently asked questions about background verification services.',
  url: 'https://ontriq.com/faq',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Ontriq',
    url: 'https://ontriq.com',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ontriq.com' },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://ontriq.com/faq' },
    ],
  },
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <main className="min-h-screen bg-white pt-20" id="main-content">
        <FaqSection />
        <CTASection />
      </main>
    </>
  );
}
