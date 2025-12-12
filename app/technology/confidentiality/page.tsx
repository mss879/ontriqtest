import { TechHero } from '@/components/technology/tech-hero';
import { TechContent } from '@/components/technology/tech-content';
import { CTASection } from '@/components/cta-section';

const confidentialityPoints = [
  'Ensuring that all client and candidate data is handled with the utmost discretion and in full compliance with applicable privacy regulations.',
  'Preventing unauthorized access, disclosure, alteration, or destruction of any confidential information through secure systems and rigorous access controls.',
  'Maintaining a culture of confidentiality among our team, supported by formal non-disclosure agreements (NDAs), regular staff training, and clearly defined internal policies.'
];

export default function ConfidentialityPage() {
  return (
    <main className="min-h-screen bg-white">
      <TechHero 
        pageNumber="05"
        title="Confidentiality"
        subtitle="Policy Statement"
        description={`We uphold the highest standards of confidentiality and data security as a foundational principle of our delivery service.`}
      />
      <TechContent 
        title="We are committed to:"
        points={confidentialityPoints}
        footerText="Ontriq assumes full accountability for the protection of sensitive information and has a proven record of safeguarding our clients' trust. This commitment is embedded in our operations today and will remain a core value in the future."
      />
      <CTASection />
    </main>
  );
}
