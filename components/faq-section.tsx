'use client';

import { memo } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { motion } from "framer-motion";

const faqs = [
  {
    category: "General Questions",
    items: [
      { q: "What is a background verification (BGV)?", a: "Background verification is the process of verifying an individual’s personal, educational, and professional details to ensure authenticity before employment or engagement." },
      { q: "Why is background verification important?", a: "It helps organizations reduce hiring risks, ensure workplace safety, and maintain trust by confirming that the information provided by candidates is accurate." },
      { q: "Who needs a background verification?", a: "Employers typically conduct BGV for prospective employees. Some clients may also require verifications for contractors, consultants, or business partners." }
    ]
  },
  {
    category: "Services Offered",
    items: [
      { q: "What types of background checks do you provide?", a: "We provide Employment history verification, Educational qualification verification, Criminal record check, Address verification, Reference checks, Professional license and certificate verification, and Credit checks (if applicable)." },
      { q: "Do you provide customized BGV services?", a: "Yes, we tailor our verification packages according to industry, role, and client requirements." },
      { q: "Can you verify candidates internationally?", a: "Yes, we conduct international verifications depending on the country and available data sources." }
    ]
  },
  {
    category: "Process & Timelines",
    items: [
      { q: "How long does a background verification take?", a: "Typically, verifications take 7-10 business days, depending on the complexity of checks and responsiveness of third parties." },
      { q: "What is the process for conducting a BGV?", a: "1. Candidate consent is collected. 2. Data is verified through reliable sources. 3. Discrepancies, if any, are reported to the client. 4. A final report is shared with the client." },
      { q: "How do you ensure accuracy?", a: "Our team uses multiple trusted sources and cross-verifies information to maintain high accuracy standards." }
    ]
  },
  {
    category: "Candidate Concerns",
    items: [
      { q: "Do I need to provide consent for a BGV?", a: "Yes, candidate consent is legally required before any verification can begin." },
      { q: "Will my personal information be secure?", a: "Absolutely. We follow strict data privacy policies and comply with relevant laws (e.g., GDPR, local regulations)." },
      { q: "What happens if there’s a discrepancy in my records?", a: "The discrepancy is reported to the client, and you may have a chance to provide clarifications or supporting documents." }
    ]
  },
  {
    category: "Legal & Compliance",
    items: [
      { q: "Are your background checks compliant with local laws?", a: "Yes, we adhere to all applicable legal and regulatory requirements in the jurisdictions we operate." },
      { q: "Can a BGV report be used in court?", a: "Generally, BGV reports are for internal HR purposes, but some verified reports may be used as supporting evidence, depending on local laws." }
    ]
  },
  {
    category: "Client Support",
    items: [
      { q: "How can I track the status of a verification?", a: "Clients can track reports via our secure online portal or by contacting our support team." },
      { q: "What if I need an urgent verification?", a: "Expedited services are available for an additional fee, depending on the checks required." }
    ]
  }
];

export const FaqSection = memo(function FaqSection() {
  return (
    <section className="w-full bg-white py-24 text-gray-900" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-24">
          {/* Left Column: Title & CTA */}
          <div className="lg:col-span-1 space-y-8 lg:sticky lg:top-24 h-fit">
            <div>
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-6">
                <span className="h-1 w-8 rounded-full bg-[#F75834]" aria-hidden="true"></span>
                <span className="text-slate-900">005</span>
                <span>FAQ</span>
              </div>
              <h2 id="faq-heading" className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">
                Frequently asked questions
              </h2>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Got any Questions?</h3>
              <p className="mb-6 text-gray-600">Let us know! Reach out and our team will get right back to you.</p>
              <Link 
                href="/contact" 
                className="inline-flex w-full items-center justify-center rounded-xl bg-black px-6 py-3 font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact us
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((category, catIndex) => (
                <motion.div 
                  key={catIndex} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold text-orange-600">{category.category}</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${catIndex}-${index}`} className="border-gray-200">
                        <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-orange-600 hover:no-underline">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-gray-600">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
