import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { ServiceSectionHeader, ServiceCardGrid, ServiceHorizontalList } from '@/components/services/service-page-components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Startup Support Services | Ontriq',
  description: 'We help entrepreneurs and early-stage founders launch, grow, and scale their businesses with confidence.',
};

export default function StartupSupportPage() {
  const whatWeDoItems = [
    {
      title: 'Idea Validation & Strategy',
      description: 'Business idea assessment & feasibility analysis, Market research & competitor insights, Target customer identification, Value proposition & positioning.'
    },
    {
      title: 'Business Planning',
      description: 'Professional business plan development, Go-to-market strategy, Pricing & revenue model design, Growth and scalability planning.'
    },
    {
      title: 'Legal & Company Setup',
      description: 'Business registration & incorporation guidance, Entity structure selection, Licensing & compliance support, Trademark & intellectual property guidance.'
    },
    {
      title: 'Financial & Funding Support',
      description: 'Startup financial projections & forecasting, Budgeting & cash flow planning, Accounting & bookkeeping setup, Investor readiness & pitch deck support.'
    },
    {
      title: 'Branding & Marketing',
      description: 'Brand identity & messaging, Website & online presence setup, Marketing launch strategy, Customer acquisition planning.'
    },
    {
      title: 'Operations & Systems',
      description: 'Workflow & process design, Tools, software & CRM setup, Payment systems & invoicing, Operational efficiency optimization.'
    },
    {
      title: 'Launch & Ongoing Support',
      description: 'Business launch planning, KPI tracking & performance review, Ongoing advisory & mentorship, Scaling and expansion support.'
    }
  ];

  const whoWeServeItems = [
    { title: 'First-time founders', description: 'Guidance for those new to entrepreneurship.' },
    { title: 'Small business startups', description: 'Support for small scale business launches.' },
    { title: 'Digital, service-based, and product businesses', description: 'Tailored strategies for various business models.' },
    { title: 'Entrepreneurs', description: 'At idea, launch, or early growth stage.' }
  ];

  const whyChooseUsItems = [
    { title: 'Practical Guidance', description: 'Practical, hands-on startup guidance.' },
    { title: 'Customized Solutions', description: 'Customized solutions—no templates.' },
    { title: 'End-to-end Support', description: 'End-to-end support from idea to growth.' },
    { title: 'Founder-focused', description: 'Founder-focused, results-driven approach.' }
  ];

  return (
    <main className="min-h-screen bg-white">
      <ServiceHero 
        serviceNumber="006"
        title="Startup Support"
        subtitle="Services"
        description="We help entrepreneurs and early-stage founders launch, grow, and scale their businesses with confidence. From idea validation to post-launch growth, we provide end-to-end startup support tailored to your goals."
        imageSrc="/Startup Support.png"
      />
      
      {/* What We Do - Grid Layout */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader 
            number="01" 
            title="What We Do" 
            description="Comprehensive support tailored to your startup journey."
          />
          <ServiceCardGrid items={whatWeDoItems} columns={3} />
        </div>
      </section>

      {/* Who We Serve - Horizontal List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader 
            number="02" 
            title="Who We Serve" 
            description="Tailored solutions for every stage of entrepreneurship."
          />
          <ServiceHorizontalList items={whoWeServeItems} />
        </div>
      </section>

      {/* Why Choose Us - Grid Layout with Darker Background or different style */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader 
            number="03" 
            title="Why Choose Us" 
            description="Your partner in growth and success."
          />
          <ServiceCardGrid items={whyChooseUsItems} columns={2} />
        </div>
      </section>

      <CTASection />
    </main>
  );
}
