import { TechHero } from '@/components/technology/tech-hero';
import { TechContent } from '@/components/technology/tech-content';
import { CTASection } from '@/components/cta-section';

const securityPoints = [
  'Leveraging advanced IT innovations to support efficient, secure, and compliant service delivery in today’s evolving business landscape.',
  'Implementing comprehensive security measures tailored to protect critical processes and data assets across all service lines, ensuring our security objectives are met.',
  'Continuously assessing and improving our information security practices to enhance our ISMS and uphold industry best practices.',
  'Managing information assets with strict adherence to contractual obligations, regulatory requirements, privacy laws, and ethical standards, aligned with ISO 27001:2013.',
  'Providing clients with ongoing improvements in process efficiency, accuracy, and quality through a combination of domain expertise and technology-driven solutions.'
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white">
      <TechHero 
        pageNumber="03"
        title="Information Security"
        subtitle="Management System"
        description={`At Ontriq, we are dedicated to delivering exceptional services in Background Verification (BGV), Human Resource Management, Talent Acquisition, Payroll Administration, and Business Formation & Regulatory Setup, while maintaining the highest standards of information security.

We conduct all operations under a robust Information Security Management System (ISMS) framework to safeguard the confidentiality, integrity, and availability of sensitive client and company information.`}
      />
      <TechContent 
        title="Our Commitment"
        points={securityPoints}
        footerText="Every team member at Ontriq is accountable for upholding this policy and protecting information assets from unauthorized access, alteration, disclosure, or destruction, whether accidental or deliberate."
      />
      <CTASection />
    </main>
  );
}
