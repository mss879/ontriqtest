import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { ServiceSectionHeader, ServiceCardGrid, ServiceHorizontalList } from '@/components/services/service-page-components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Director Services | Ontriq',
  description: 'Professional Director Services to help businesses meet legal requirements, strengthen governance, and make confident strategic decisions.',
};

export default function DirectorServicesPage() {
  const whatWeOfferItems = [
    {
      title: 'Statutory / Nominee Director',
      description: 'Act as a legally required local director (where applicable), Ensure compliance with company law and regulations, Represent the company with authorities and regulators, Maintain confidentiality and fiduciary responsibility.'
    },
    {
      title: 'Corporate Governance & Compliance',
      description: 'Guidance on directors’ duties and responsibilities, Oversight of statutory filings and compliance deadlines, Maintenance of corporate records and registers, Risk and compliance monitoring.'
    },
    {
      title: 'Board & Strategic Advisory',
      description: 'Participation in board meetings, Business strategy and growth planning, Financial and operational oversight, Support with investor and stakeholder relations.'
    },
    {
      title: 'Company Setup & Structural Support',
      description: 'Assistance with company incorporation, Advice on board structure and shareholding, Review of constitutional and governance documents, Coordination with legal, tax, and accounting partners.'
    },
    {
      title: 'Representation & Liaison',
      description: 'Liaison with regulators, banks, and authorities, Support during audits, reviews, or inspections, Assistance with compliance and due diligence processes.'
    }
  ];

  const whoThisServiceIsForItems = [
    { title: 'Startups and SMEs', description: 'Growing businesses needing governance.' },
    { title: 'Foreign-owned companies', description: 'International companies needing local representation.' },
    { title: 'Businesses expanding into new markets', description: 'Support for market entry and expansion.' },
    { title: 'Companies requiring local director compliance', description: 'Meeting statutory requirements.' },
    { title: 'Founders seeking experienced board support', description: 'Strategic guidance for leadership.' }
  ];

  const whyChooseUsItems = [
    { title: 'Experienced Directors', description: 'Experienced and reliable directors.' },
    { title: 'Compliance Focus', description: 'Strong compliance and governance focus.' },
    { title: 'Startup-friendly', description: 'Startup-friendly approach.' },
    { title: 'Professional Service', description: 'Confidential, professional, and transparent service.' }
  ];

  return (
    <main className="min-h-screen bg-white">
      <ServiceHero 
        serviceNumber="007"
        title="Director Services"
        description="We provide professional Director Services to help businesses meet legal requirements, strengthen governance, and make confident strategic decisions."
        imageSrc="/Director Services.png"
      />
      
      {/* What We Offer - Grid Layout */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader 
            number="01" 
            title="What We Offer" 
            description="Comprehensive director services for your business needs."
          />
          <ServiceCardGrid items={whatWeOfferItems} columns={3} />
        </div>
      </section>

      {/* Who This Service Is For - Horizontal List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader 
            number="02" 
            title="Who This Service Is For" 
            description="Tailored for diverse business structures and needs."
          />
          <ServiceHorizontalList items={whoThisServiceIsForItems} />
        </div>
      </section>

      {/* Why Choose Us - Grid Layout */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader 
            number="03" 
            title="Why Choose Us" 
            description="Experience, compliance, and professionalism."
          />
          <ServiceCardGrid items={whyChooseUsItems} columns={2} />
        </div>
      </section>

      <CTASection />
    </main>
  );
}
