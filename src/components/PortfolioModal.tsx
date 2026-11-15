import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { PortfolioProject, getWhatsAppUrl } from '../data/siteData';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './RedlineLogo';

interface PortfolioModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onRequestSimilar: (project: PortfolioProject) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const customWhatsAppMsg = `Hello Redline Digital Solution. I viewed your "${project.title}" demonstration showcase and would like to discuss a similar digital solution for my business.`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl border border-neutral-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-white shrink-0">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="font-semibold text-[#E31E24]">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.projectTypeLabel}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-[#333333] hover:bg-[#F5F6F8] hover:text-[#111111] transition-colors cursor-pointer"
            aria-label="Close project preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          <div className="rounded-xl overflow-hidden border border-neutral-200 bg-[#F5F6F8]">
            <ResilientImage
              src={project.image}
              alt={project.title}
              fallbackTitle={project.title}
              className="w-full h-64 sm:h-96 object-cover"
            />
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
              <span>Sector: {project.clientSector}</span>
              <span aria-hidden="true">·</span>
              <span>Focus: {project.locationContext}</span>
            </div>

            <h2
              id="portfolio-modal-title"
              className="font-display font-bold text-2xl sm:text-3xl text-[#111111]"
            >
              {project.title}
            </h2>

            <p className="text-base text-[#333333] leading-relaxed">{project.overview}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-xl bg-[#F5F6F8] space-y-4">
              <h3 className="font-display font-bold text-base text-[#111111]">
                Key Features Demonstrated
              </h3>
              <ul className="space-y-2.5 text-sm text-[#333333]">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#F5F6F8] space-y-4">
              <h3 className="font-display font-bold text-base text-[#111111]">
                Typical Project Deliverables
              </h3>
              <ul className="space-y-2.5 text-sm text-[#333333]">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 leading-relaxed">
            <strong>Transparency Note:</strong> This project is a Redline Digital Solution
            demonstration concept created to show Papua New Guinea business owners how a custom
            website or digital solution can be structured for their industry. Every live client
            project is custom-designed around your own business name, logo, photos, and services.
          </div>
        </div>

        <div className="px-6 py-4 border-t border-neutral-200 bg-[#F5F6F8] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onRequestSimilar(project)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#E31E24] hover:bg-[#B9151B] text-white font-bold text-xs tracking-wide transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Request a Similar Solution</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={getWhatsAppUrl(customWhatsAppMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#111111] hover:bg-neutral-800 text-white font-bold text-xs tracking-wide transition-colors whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            <span>Ask About This on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
