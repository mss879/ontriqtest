import type { Metadata } from 'next';
import { ProcessHero } from '@/components/process/process-hero';
import { BgvProcessList } from '@/components/process/bgv-process-list';
import { BgvWorkflowSteps } from '@/components/process/bgv-workflow-steps';

export const metadata: Metadata = {
  title: 'Our Process | Background Verification Workflow | Ontriq',
  description: 'Understand Ontriq\'s comprehensive background verification process. From data collection to final reporting, we ensure accuracy, compliance, and speed.',
  keywords: [
    'background verification process',
    'BGV workflow',
    'verification steps',
    'data collection',
    'compliance check',
    'final reporting',
    'Ontriq process'
  ],
  openGraph: {
    title: 'Our Process | Background Verification Workflow | Ontriq',
    description: 'Understand Ontriq\'s comprehensive background verification process. From data collection to final reporting, we ensure accuracy, compliance, and speed.',
    url: 'https://ontriq.com/process',
    siteName: 'Ontriq',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ProcessPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Background Verification Process',
    description: 'Step-by-step guide to Ontriq\'s background verification process.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Data Collection',
        text: 'Collecting necessary documents and information from the candidate.'
      },
      {
        '@type': 'HowToStep',
        name: 'Verification',
        text: 'Verifying the provided information against trusted sources.'
      },
      {
        '@type': 'HowToStep',
        name: 'Quality Check',
        text: 'Ensuring the accuracy and completeness of the verification report.'
      },
      {
        '@type': 'HowToStep',
        name: 'Final Reporting',
        text: 'Delivering the final background verification report to the client.'
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProcessHero />
      <BgvProcessList />
      <BgvWorkflowSteps />
    </main>
  );
}
