import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageId } from '../data/siteData';
import { RedlineLogo } from './RedlineLogo';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, sectionId?: string) => void;
  onRequestConsultation: () => void;
}

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Our Services' },
  { id: 'portfolio', label: 'Our Work' },
  { id: 'blog', label: 'Blog' },
  { id: 'resources', label: 'SME Resources' },
  { id: 'contact', label: 'Contact Us' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onRequestConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const handleConsultationClick = () => {
    setMobileMenuOpen(false);
    onRequestConsultation();
  };

  return (
    <header className="sticky top-0 z-40 h-16 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E31E24] rounded-md whitespace-nowrap shrink-0 cursor-pointer"
          aria-label="Redline Digital Solution Home"
        >
          <RedlineLogo variant="light" size="md" />
        </button>

        {/* Zone 2: Navigation Links (including Blog) */}
        <nav
          className="hidden lg:flex items-center gap-5 text-sm font-medium text-[#333333]"
          aria-label="Primary Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E31E24] ${
                  isActive
                    ? 'text-[#111111] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#E31E24]'
                    : 'text-[#333333] hover:text-[#111111] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#E31E24] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-150'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Hamburger Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleConsultationClick}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold tracking-wide text-white bg-[#E31E24] hover:bg-[#B9151B] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
          >
            GET A FREE CONSULTATION
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#111111] hover:bg-[#F5F6F8] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#E31E24]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-5 space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors duration-150 flex items-center justify-between ${
                    isActive
                      ? 'bg-[#F5F6F8] text-[#E31E24] font-semibold'
                      : 'text-[#111111] hover:bg-[#F5F6F8]'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
            <div className="pt-3">
              <button
                type="button"
                onClick={handleConsultationClick}
                className="w-full py-3.5 px-4 text-center text-sm font-bold text-white bg-[#E31E24] hover:bg-[#B9151B] rounded-lg transition-colors duration-150"
              >
                GET A FREE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
