import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import {
  BRAND_INFO,
  DIGITAL_SERVICES,
  PageId,
  getWhatsAppUrl,
} from '../data/siteData';
import { RedlineLogo, PngFlagIcon, WhatsAppIcon } from './RedlineLogo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onSelectService: (serviceFormValue: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectService }) => {
  return (
    <footer className="bg-[#111111] text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="text-left focus-visible:outline-2 focus-visible:outline-[#E31E24] rounded-md cursor-pointer"
              aria-label="Redline Digital Solution Home"
            >
              <RedlineLogo variant="dark" size="md" />
            </button>

            <p className="font-display font-bold text-sm tracking-wide text-[#E31E24]">
              {BRAND_INFO.tagline}
            </p>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm">
              {BRAND_INFO.supportingStatement} We help Papua New Guinea SMEs, lodges, restaurants,
              and local enterprises establish a trustworthy online presence and connect with more
              customers.
            </p>

            <div className="flex items-center gap-2.5 text-xs text-neutral-400 pt-1">
              <PngFlagIcon className="w-5 h-3.5" />
              <span>Proudly Papua New Guinean</span>
              <span aria-hidden="true">·</span>
              <span>Banz, Jiwaka Province</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display font-bold text-sm text-white tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors duration-150 cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors duration-150 cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors duration-150 cursor-pointer"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-white transition-colors duration-150 cursor-pointer"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('blog')}
                  className="hover:text-white transition-colors duration-150 cursor-pointer"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('resources')}
                  className="hover:text-white transition-colors duration-150 cursor-pointer"
                >
                  SME Resources
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors duration-150 cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Digital Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display font-bold text-sm text-white tracking-wide">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              {DIGITAL_SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.formOptionValue)}
                    className="text-left hover:text-white transition-colors duration-150 cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Direct Channels (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display font-bold text-sm text-white tracking-wide">
              Contact Redline
            </h3>

            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E31E24] shrink-0 mt-1" />
                <span>
                  {BRAND_INFO.location}
                  <br />
                  <span className="text-xs text-neutral-400">{BRAND_INFO.regionDetail}</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E31E24] shrink-0" />
                <a
                  href={`tel:${BRAND_INFO.phoneDisplay.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors duration-150 tabular-nums"
                >
                  {BRAND_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E31E24] shrink-0" />
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="hover:text-white transition-colors duration-150 break-all"
                >
                  {BRAND_INFO.email}
                </a>
              </li>
            </ul>

            <div className="pt-2 space-y-2.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#1ebe5a] text-[#111111] font-bold text-xs tracking-wide transition-colors duration-150 whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <p className="text-xs text-neutral-400">
                Facebook Page: <span className="text-neutral-300">{BRAND_INFO.socialHandle}</span>{' '}
                (Official page link available upon request via WhatsApp)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 Redline Digital Solution. All rights reserved. Papua New Guinea.</p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onNavigate('privacy')}
              className="hover:text-white transition-colors duration-150 cursor-pointer whitespace-nowrap"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onNavigate('terms')}
              className="hover:text-white transition-colors duration-150 cursor-pointer whitespace-nowrap"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
