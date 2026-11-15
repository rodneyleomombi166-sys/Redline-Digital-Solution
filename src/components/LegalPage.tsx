import React from 'react';
import { ArrowLeft, ShieldCheck, FileText } from 'lucide-react';
import { BRAND_INFO, PageId } from '../data/siteData';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onNavigate: (page: PageId) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const isPrivacy = type === 'privacy';

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#E31E24] hover:underline cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </button>

        <div className="space-y-3 pb-6 border-b border-neutral-200">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            {isPrivacy ? (
              <ShieldCheck className="w-4 h-4 text-[#E31E24]" />
            ) : (
              <FileText className="w-4 h-4 text-[#E31E24]" />
            )}
            <span>Redline Digital Solution</span>
            <span aria-hidden="true">·</span>
            <span>Banz, Jiwaka Province, Papua New Guinea</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111]">
            {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
          </h1>

          <p className="text-sm text-neutral-500">
            Effective Date: January 2026 · Standard Business Policy Notice
          </p>
        </div>

        {isPrivacy ? (
          <div className="space-y-6 text-sm sm:text-base text-[#333333] leading-relaxed">
            <p>
              <strong>{BRAND_INFO.name}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
              &ldquo;us&rdquo;) respects the privacy of business owners, clients, and visitors across
              Papua New Guinea who use our website and contact our team. This Privacy Policy explains
              how we handle information shared with us when you enquire about our digital services.
            </p>

            <div className="space-y-2">
              <h2 className="font-display font-bold text-lg text-[#111111]">
                1. Information We Collect
              </h2>
              <p>
                When you submit an enquiry through our website contact form, WhatsApp, phone, or
                email, we collect only the details necessary to respond to your request: your full
                name, business or organisation name, phone/WhatsApp number, email address, the
                service required, optional budget guidance, and project details.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-display font-bold text-lg text-[#111111]">
                2. How We Use Your Information
              </h2>
              <p>We use the contact and project details you provide solely to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Respond to your consultation request or project enquiry;</li>
                <li>Prepare a tailored quotation or project proposal for your business;</li>
                <li>Deliver agreed website development, graphic design, or marketing services;</li>
                <li>Communicate important project updates and support information.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="font-display font-bold text-lg text-[#111111]">
                3. Information Sharing and Confidentiality
              </h2>
              <p>
                We do not sell, rent, or trade your personal or business contact details to third
                parties. Information relating to your business project is treated with strict
                professional confidentiality.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-display font-bold text-lg text-[#111111]">
                4. Third-Party Communication Channels
              </h2>
              <p>
                If you choose to contact us via WhatsApp or email, your communication is also
                subject to the standard privacy and security policies of those communication
                providers.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-display font-bold text-lg text-[#111111]">
                5. Contact Us About Privacy
              </h2>
              <p>
                If you would like to update or remove your business contact details from our
                records, please contact <strong>{BRAND_INFO.name}</strong> at{' '}
                <a href={`mailto:${BRAND_INFO.email}`} className="text-[#E31E24] hover:underline">
                  {BRAND_INFO.email}
                </a>{' '}
                or call/WhatsApp <strong>{BRAND_INFO.phoneDisplay}</strong>.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-sm sm:text-base text-[#333333] leading-relaxed">
            <p>
              Welcome to the website of <strong>{BRAND_INFO.name}</strong>, located in{' '}
              {BRAND_INFO.location}. These Terms of Service outline the general principles governing
              the use of our website and how we engage with clients for digital services.
            </p>

            <div className="space-y-2">
              <h2 className="font-display font-bold text-lg text-[#111111]">
                1. Project Proposals and Written Quotes
              </h2>
              <p>
                All website development, social media marketing, graphic design, digital
                advertising, digital documents, and SME training services are provided based on a
                written quotation and project scope agreed between {BRAND_INFO.name} and the client
                before work begins.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-display font-bold text-lg text-[#111111]">
                2. Domains, Hosting, and Third-Party Costs
              </h2>
              <p>
                Unless explicitly stated in a confirmed written quotation, domain name registration,
                website hosting renewals, ongoing website maintenance, paid social media or search
                advertising budgets, and third-party software subscriptions involve separate costs
                that will be clearly explained prior to commitment.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-display font-bold text-lg text-[#111111]">
                3. Client Content and Approvals
              </h2>
              <p>
                Clients are responsible for supplying accurate business information, logos,
                photographs, and service descriptions that they have the right to use. We review and
                test every project with the client for approval before launch.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-display font-bold text-lg text-[#111111]">
                4. No Guaranteed Sales or Financial Claims
              </h2>
              <p>
                While a professional website and digital marketing help your business become easier
                to find, understand, and contact online, actual business sales and customer results
                depend on market conditions, pricing, product quality, and customer service.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-display font-bold text-lg text-[#111111]">
                5. Contact Information
              </h2>
              <p>
                For questions regarding these Terms of Service or to request a formal project
                proposal, contact <strong>{BRAND_INFO.name}</strong> at{' '}
                <a href={`mailto:${BRAND_INFO.email}`} className="text-[#E31E24] hover:underline">
                  {BRAND_INFO.email}
                </a>{' '}
                or WhatsApp <strong>{BRAND_INFO.phoneDisplay}</strong>.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
