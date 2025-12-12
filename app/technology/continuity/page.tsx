import { TechHero } from '@/components/technology/tech-hero';
import { CTASection } from '@/components/cta-section';

export default function ContinuityPage() {
  return (
    <main className="min-h-screen bg-white">
      <TechHero 
        pageNumber="04"
        title="Our Continuity"
        subtitle="Plan"
        description={`At Ontriq, we understand the importance of uninterrupted service delivery across our core offerings, including Background Verification, Human Resource Management, Talent Acquisition, Payroll Administration, and Business Formation & Regulatory Setup.

To ensure continuous operations during disruptions, we have implemented several Business Continuity options designed for resilience, flexibility, and rapid recovery.`}
      />
      <CTASection />
    </main>
  );
}
