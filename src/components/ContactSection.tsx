import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Clock,
} from 'lucide-react';
import {
  BRAND_INFO,
  SERVICE_FORM_OPTIONS,
  getWhatsAppUrl,
} from '../data/siteData';
import { WhatsAppIcon } from './RedlineLogo';

interface ContactSectionProps {
  preselectedService?: string;
  prefilledNote?: string;
}

interface FormValues {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  serviceRequired: string;
  estimatedBudget: string;
  projectDetails: string;
  companyWebsiteHoneypot: string;
}

interface SubmissionReceipt {
  enquiryId: string;
  timestamp: string;
  whatsappShareUrl: string;
  mailtoUrl: string;
  summaryName: string;
  summaryService: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
  prefilledNote,
}) => {
  const [formValues, setFormValues] = useState<FormValues>({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    serviceRequired: preselectedService || 'Website Development',
    estimatedBudget: '',
    projectDetails: prefilledNote || '',
    companyWebsiteHoneypot: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<SubmissionReceipt | null>(null);
  const [lastSubmittedSignature, setLastSubmittedSignature] = useState<string>('');

  useEffect(() => {
    if (preselectedService) {
      setFormValues((prev) => ({
        ...prev,
        serviceRequired: preselectedService,
      }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (prefilledNote) {
      setFormValues((prev) => ({
        ...prev,
        projectDetails: prefilledNote,
      }));
    }
  }, [prefilledNote]);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!formValues.fullName.trim() || formValues.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    if (!formValues.businessName.trim()) {
      nextErrors.businessName = 'Please enter your business or organisation name.';
    }

    const cleanedPhone = formValues.phone.replace(/[\s\-()]/g, '');
    if (!cleanedPhone || !/^\+?[0-9]{7,15}$/.test(cleanedPhone)) {
      nextErrors.phone =
        'Please enter a valid phone or WhatsApp number (for example, +675 74590895).';
    }

    const emailTrimmed = formValues.email.trim();
    if (!emailTrimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formValues.serviceRequired) {
      nextErrors.serviceRequired = 'Please select the service you require.';
    }

    if (!formValues.projectDetails.trim() || formValues.projectDetails.trim().length < 10) {
      nextErrors.projectDetails =
        'Please tell us a little about your business and what you need (at least 10 characters).';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const buildFormattedMessage = (values: FormValues): string => {
    const lines = [
      'Hello Redline Digital Solution, I would like to submit a business enquiry:',
      `• Full Name: ${values.fullName.trim()}`,
      `• Business Name: ${values.businessName.trim()}`,
      `• Phone / WhatsApp: ${values.phone.trim()}`,
      `• Email: ${values.email.trim()}`,
      `• Service Required: ${values.serviceRequired}`,
      values.estimatedBudget.trim()
        ? `• Estimated Budget: ${values.estimatedBudget.trim()}`
        : null,
      `• Project Details: ${values.projectDetails.trim()}`,
    ].filter(Boolean);
    return lines.join('\n');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (formValues.companyWebsiteHoneypot) {
      return;
    }

    if (!validate()) {
      return;
    }

    const currentSignature = `${formValues.email.trim().toLowerCase()}|${formValues.serviceRequired}|${formValues.projectDetails.trim()}`;
    if (currentSignature === lastSubmittedSignature) {
      setSubmitError(
        'This exact enquiry was just submitted. You can send it via WhatsApp below or modify your project details to submit another enquiry.'
      );
      return;
    }

    setIsSubmitting(true);
    const formattedMsg = buildFormattedMessage(formValues);
    const whatsappShareUrl = getWhatsAppUrl(formattedMsg);
    const mailtoSubject = encodeURIComponent(
      `Business Enquiry: ${formValues.serviceRequired} – ${formValues.businessName.trim()}`
    );
    const mailtoUrl = `mailto:${BRAND_INFO.email}?subject=${mailtoSubject}&body=${encodeURIComponent(
      formattedMsg
    )}`;

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formValues.fullName.trim(),
          businessName: formValues.businessName.trim(),
          phone: formValues.phone.trim(),
          email: formValues.email.trim(),
          serviceRequired: formValues.serviceRequired,
          estimatedBudget: formValues.estimatedBudget.trim(),
          projectDetails: formValues.projectDetails.trim(),
          honeypot: formValues.companyWebsiteHoneypot,
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(
          errData.error ||
            'The enquiry server could not process your request right now. Please use the WhatsApp Enquiry button below.'
        );
      }

      const data = await response.json();
      setLastSubmittedSignature(currentSignature);
      setReceipt({
        enquiryId: data.enquiryId || `RDS-${Date.now().toString().slice(-6)}`,
        timestamp: data.timestamp || new Date().toLocaleString(),
        whatsappShareUrl,
        mailtoUrl,
        summaryName: formValues.fullName.trim(),
        summaryService: formValues.serviceRequired,
      });
    } catch {
      setSubmitError(
        'Note: Live email delivery requires a connected email backend service. Please click "Send This Enquiry via WhatsApp" below to deliver your message directly to Redline Digital Solution (+675 74590895).'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentWhatsAppEnquiryUrl = getWhatsAppUrl(
    formValues.fullName.trim() || formValues.projectDetails.trim()
      ? buildFormattedMessage(formValues)
      : BRAND_INFO.defaultWhatsAppMessage
  );

  return (
    <section id="contact-section" className="py-20 bg-[#F5F6F8] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E31E24]">
            <span>CONTACT US</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#333333]">Banz, Jiwaka Province, PNG</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight">
            LET&apos;S BUILD SOMETHING GREAT FOR YOUR BUSINESS
          </h2>
          <p className="text-base sm:text-lg text-[#333333] leading-relaxed">
            Have an idea for your website, need professional graphics, or want to improve your
            business&apos;s online presence? Contact Redline Digital Solution and tell us what you
            need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="font-display font-bold text-xl text-[#111111]">
                  {BRAND_INFO.name}
                </h3>
                <p className="text-sm text-[#333333] leading-relaxed">
                  Speak directly with our team in Papua New Guinea. We explain everything in plain,
                  simple language with no confusing technical jargon.
                </p>
              </div>

              <div className="space-y-5 pt-2 border-t border-neutral-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F5F6F8] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#E31E24]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-500">Location</p>
                    <p className="text-sm font-bold text-[#111111] mt-0.5">
                      {BRAND_INFO.location}
                    </p>
                    <p className="text-xs text-[#333333] mt-0.5">
                      Serving SMEs across all provinces in Papua New Guinea
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F5F6F8] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#E31E24]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-500">Phone / WhatsApp</p>
                    <a
                      href={`tel:${BRAND_INFO.phoneDisplay.replace(/\s+/g, '')}`}
                      className="text-base font-bold text-[#111111] hover:text-[#E31E24] transition-colors tabular-nums block mt-0.5"
                    >
                      {BRAND_INFO.phoneDisplay}
                    </a>
                    <p className="text-xs text-[#333333] mt-0.5">
                      Available for phone calls and WhatsApp messages
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F5F6F8] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#E31E24]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-500">Email Address</p>
                    <a
                      href={`mailto:${BRAND_INFO.email}`}
                      className="text-sm font-bold text-[#111111] hover:text-[#E31E24] transition-colors break-all block mt-0.5"
                    >
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F5F6F8] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#E31E24]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-500">Response Approach</p>
                    <p className="text-sm text-[#333333] mt-0.5">
                      Friendly consultations tailored to your business goals and budget.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#111111] text-white space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-[#25D366] tracking-wide">
                    FASTEST WAY TO REACH US IN PNG
                  </p>
                  <h4 className="font-display font-bold text-base">
                    Chat With Redline on WhatsApp
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Prefer to message on your mobile phone? Click below to open a WhatsApp
                    conversation with {BRAND_INFO.phoneDisplay}.
                  </p>
                </div>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#1ebe5a] text-[#111111] font-bold text-xs tracking-wide transition-colors whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>CHAT ON WHATSAPP ({BRAND_INFO.phoneDisplay})</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Business Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8">
              {receipt ? (
                <div className="space-y-6 py-4" role="status" aria-live="polite">
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-[#F5F6F8] border border-neutral-200">
                    <CheckCircle2 className="w-7 h-7 text-[#E31E24] shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-xl text-[#111111]">
                        Enquiry Logged on Server ({receipt.enquiryId})
                      </h3>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        Thank you, <strong>{receipt.summaryName}</strong>. Your enquiry for{' '}
                        <strong>{receipt.summaryService}</strong> has been validated and recorded in
                        the Redline Digital Solution server log ({receipt.timestamp}).
                      </p>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        <strong>Important Delivery Note:</strong> To ensure Rodney Leo Mombi and the
                        Redline team in Banz receive an instant alert on their mobile phone without
                        waiting for external email relay configuration, click the WhatsApp button
                        below to send your pre-filled enquiry directly via WhatsApp or your email
                        app.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href={receipt.whatsappShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#1ebe5a] text-[#111111] font-bold text-xs tracking-wide transition-colors whitespace-nowrap"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Deliver via WhatsApp Now</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <a
                      href={receipt.mailtoUrl}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#111111] hover:bg-neutral-800 text-white font-bold text-xs tracking-wide transition-colors whitespace-nowrap"
                    >
                      <Mail className="w-4 h-4 text-[#E31E24]" />
                      <span>Open in Email App</span>
                    </a>
                  </div>

                  <div className="pt-2 border-t border-neutral-200 flex items-center justify-between">
                    <span className="text-xs text-neutral-500">
                      Need to submit different details?
                    </span>
                    <button
                      type="button"
                      onClick={() => setReceipt(null)}
                      className="text-xs font-bold text-[#E31E24] hover:underline cursor-pointer"
                    >
                      Edit or Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="space-y-1 pb-2 border-b border-neutral-200">
                    <h3 className="font-display font-bold text-xl text-[#111111]">
                      Send a Business Enquiry
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Fill in your details below to log your enquiry or send it directly via
                      WhatsApp. Fields marked with * are required.
                    </p>
                  </div>

                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="companyWebsiteHoneypot">Company Website</label>
                    <input
                      id="companyWebsiteHoneypot"
                      name="companyWebsiteHoneypot"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formValues.companyWebsiteHoneypot}
                      onChange={handleChange}
                    />
                  </div>

                  {submitError && (
                    <div
                      className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-xs text-red-900"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-bold text-[#111111] mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        placeholder="e.g. Peter Kuman"
                        value={formValues.fullName}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#111111] bg-white focus:outline-2 focus:outline-[#E31E24] ${
                          errors.fullName ? 'border-[#E31E24]' : 'border-neutral-300'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-[#E31E24] font-medium">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="businessName"
                        className="block text-xs font-bold text-[#111111] mb-1.5"
                      >
                        Business Name *
                      </label>
                      <input
                        id="businessName"
                        name="businessName"
                        type="text"
                        required
                        placeholder="e.g. Jiwaka Fresh Produce Ltd"
                        value={formValues.businessName}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#111111] bg-white focus:outline-2 focus:outline-[#E31E24] ${
                          errors.businessName ? 'border-[#E31E24]' : 'border-neutral-300'
                        }`}
                      />
                      {errors.businessName && (
                        <p className="mt-1 text-xs text-[#E31E24] font-medium">
                          {errors.businessName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold text-[#111111] mb-1.5"
                      >
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="e.g. +675 7XXXXXXX"
                        value={formValues.phone}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#111111] bg-white focus:outline-2 focus:outline-[#E31E24] tabular-nums ${
                          errors.phone ? 'border-[#E31E24]' : 'border-neutral-300'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-[#E31E24] font-medium">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold text-[#111111] mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="e.g. yourbusiness@gmail.com"
                        value={formValues.email}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#111111] bg-white focus:outline-2 focus:outline-[#E31E24] ${
                          errors.email ? 'border-[#E31E24]' : 'border-neutral-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-[#E31E24] font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="serviceRequired"
                        className="block text-xs font-bold text-[#111111] mb-1.5"
                      >
                        Service Required *
                      </label>
                      <select
                        id="serviceRequired"
                        name="serviceRequired"
                        value={formValues.serviceRequired}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm text-[#111111] bg-white focus:outline-2 focus:outline-[#E31E24]"
                      >
                        {SERVICE_FORM_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="estimatedBudget"
                        className="block text-xs font-bold text-[#111111] mb-1.5"
                      >
                        Estimated Budget <span className="font-normal text-neutral-500">(Optional)</span>
                      </label>
                      <input
                        id="estimatedBudget"
                        name="estimatedBudget"
                        type="text"
                        placeholder="e.g. Requesting a quote / PGK budget"
                        value={formValues.estimatedBudget}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm text-[#111111] bg-white focus:outline-2 focus:outline-[#E31E24]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="projectDetails"
                      className="block text-xs font-bold text-[#111111] mb-1.5"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      rows={4}
                      required
                      placeholder="Tell us what your business does, what services or products you offer, and how we can help you..."
                      value={formValues.projectDetails}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#111111] bg-white focus:outline-2 focus:outline-[#E31E24] ${
                        errors.projectDetails ? 'border-[#E31E24]' : 'border-neutral-300'
                      }`}
                    />
                    {errors.projectDetails && (
                      <p className="mt-1 text-xs text-[#E31E24] font-medium">
                        {errors.projectDetails}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#E31E24] hover:bg-[#B9151B] disabled:opacity-60 text-white font-bold text-xs tracking-wide transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'SUBMITTING ENQUIRY...' : 'SUBMIT ENQUIRY'}</span>
                    </button>

                    <a
                      href={currentWhatsAppEnquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#111111] hover:bg-neutral-800 text-white font-bold text-xs tracking-wide transition-colors whitespace-nowrap"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                      <span>SEND VIA WHATSAPP INSTEAD</span>
                    </a>
                  </div>

                  <p className="text-xs text-neutral-500 leading-relaxed pt-1">
                    Submitting this form records your enquiry on our server and prepares a direct
                    WhatsApp or email confirmation. Automated email delivery to{' '}
                    <span className="text-[#111111] font-medium">{BRAND_INFO.email}</span> requires
                    an active SMTP mail relay, or you can use the WhatsApp button above for immediate
                    delivery to <strong>{BRAND_INFO.phoneDisplay}</strong>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
