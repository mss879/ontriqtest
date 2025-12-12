import { TechHero } from '@/components/technology/tech-hero';
import { TechSpecList } from '@/components/technology/tech-spec-list';
import { CTASection } from '@/components/cta-section';

const specs = [
  {
    title: 'Background Verification Technology',
    iconType: 'bgv' as const,
    points: [
      'Applicant Tracking Systems (ATS): To track and manage candidate data and verification status.',
      'Automated Verification Platforms: Integrated databases and APIs to verify education, employment history, criminal records, and identity in real-time.'
    ]
  },
  {
    title: 'Human Resource Management Systems',
    iconType: 'hr' as const,
    points: [
      'Comprehensive platforms for managing employee records, attendance, leave, performance evaluations, and compliance tracking.',
      'Self-service portals for employees to update information and access HR resources.',
      'Workflow automation for approvals, notifications, and document management.'
    ]
  },
  {
    title: 'Talent Acquisition & Recruitment Software',
    iconType: 'recruitment' as const,
    points: [
      'Applicant Tracking Systems (ATS): For sourcing, screening, and managing candidates through recruitment pipelines.',
      'Video Interviewing Platforms: For remote interviews and assessments.',
      'AI-Powered Screening Tools: To evaluate resumes and match candidates to job requirements efficiently.'
    ]
  },
  {
    title: 'Payroll Management Systems',
    iconType: 'payroll' as const,
    points: [
      'Software that automates salary calculations, tax deductions, benefits administration, and statutory compliance (e.g., EPF, ETF, PAYE in Sri Lanka).',
      'Integration with attendance and leave management systems for accuracy.',
      'Secure generation and distribution of payslips and tax documents.'
    ]
  },
  {
    title: 'Business Formation & Regulatory Tools',
    iconType: 'formation' as const,
    points: [
      'Document management systems for handling incorporation paperwork, licenses, and agreements.',
      'Compliance monitoring software to track regulatory deadlines and filings.',
      'Digital signature and e-filing platforms to streamline submissions with government agencies.'
    ]
  }
];

export default function SpecificationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <TechHero 
        pageNumber="02"
        title="Technology We Use"
        subtitle="For Our Services"
        description="We leverage advanced tools and platforms to ensure precision, efficiency, and compliance across all our service lines."
      />
      <TechSpecList items={specs} />
      <CTASection />
    </main>
  );
}
