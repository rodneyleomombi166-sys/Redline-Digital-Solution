/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  PageId,
  PortfolioProject,
  SmeArticle,
  SME_ARTICLES,
  BRAND_INFO,
} from './data/siteData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import {
  HeroSection,
  TrustValueSection,
  ServicesSection,
  WhyChooseSection,
  PortfolioSection,
  PackagesSection,
  ProcessSection,
  ResourcesSection,
  AboutSection,
  FaqSection,
  FinalCtaSection,
} from './components/PageSections';
import { BlogPage } from './components/BlogPage';
import { ContactSection } from './components/ContactSection';
import { PortfolioModal } from './components/PortfolioModal';
import { ArticleModal } from './components/ArticleModal';
import { LegalPage } from './components/LegalPage';

const PAGE_TITLES: Record<PageId, string> = {
  home: 'Redline Digital Solution – Websites, Blog & Digital Marketing for PNG SMEs',
  about: 'About Us – Redline Digital Solution | Papua New Guinea',
  services: 'Our Digital Services & Packages – Redline Digital Solution PNG',
  portfolio: 'Our Work & Demonstration Portfolio – Redline Digital Solution PNG',
  blog: 'PNG SME Digital Growth Blog – Redline Digital Solution',
  resources: 'Free Digital Tips for PNG Small Businesses – Redline Digital Solution',
  contact: 'Contact Us – Redline Digital Solution | Banz, Jiwaka Province, PNG',
  privacy: 'Privacy Policy – Redline Digital Solution PNG',
  terms: 'Terms of Service – Redline Digital Solution PNG',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [articles, setArticles] = useState<SmeArticle[]>(SME_ARTICLES);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<SmeArticle | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('Website Development');
  const [prefilledNote, setPrefilledNote] = useState<string>('');

  // Sync URL hash on initial load and back/forward navigation
  useEffect(() => {
    const syncFromHash = () => {
      const rawHash = window.location.hash.replace('#', '').trim() as PageId;
      if (rawHash && rawHash in PAGE_TITLES) {
        setCurrentPage(rawHash);
      }
    };
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  // Update document title when page changes
  useEffect(() => {
    document.title = PAGE_TITLES[currentPage] || PAGE_TITLES.home;
  }, [currentPage]);

  const handleNavigate = (page: PageId, scrollTargetId?: string) => {
    setCurrentPage(page);
    window.history.replaceState(null, '', `#${page}`);

    if (scrollTargetId) {
      setTimeout(() => {
        const el = document.getElementById(scrollTargetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 40);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRequestConsultation = () => {
    setPreselectedService('Website Development');
    setPrefilledNote(
      'Hello Redline Digital Solution, I would like to request a free consultation to discuss taking my business online.'
    );
    if (currentPage === 'home') {
      const contactEl = document.getElementById('contact-section');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    handleNavigate('contact');
  };

  const handleSelectService = (formServiceValue: string, labelContext?: string) => {
    setPreselectedService(formServiceValue);
    if (labelContext) {
      setPrefilledNote(
        `I am interested in "${labelContext}" for my business. Please let me know the next steps and quotation details.`
      );
    }
    if (currentPage === 'home') {
      const contactEl = document.getElementById('contact-section');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    handleNavigate('contact');
  };

  const handleSelectPackage = (packageName: string, serviceValue: string) => {
    setPreselectedService(serviceValue);
    setPrefilledNote(
      `I would like to request a quote for the "${packageName}" package for my business.`
    );
    if (currentPage === 'home') {
      const contactEl = document.getElementById('contact-section');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    handleNavigate('contact');
  };

  const handleRequestSimilarProject = (project: PortfolioProject) => {
    setSelectedProject(null);
    setPreselectedService(project.relatedServiceOption);
    setPrefilledNote(
      `I viewed the "${project.title}" demonstration project in your portfolio and would like to discuss a similar solution for my business.`
    );
    handleNavigate('contact');
  };

  const handleDiscussArticleTopic = (topicTitle: string) => {
    setSelectedArticle(null);
    setPreselectedService('Website Development');
    setPrefilledNote(
      `I read your SME blog guide "${topicTitle}" and would like help applying these digital steps to my business.`
    );
    handleNavigate('contact');
  };

  const handleAddBlogArticle = (newArticle: SmeArticle) => {
    setArticles((prev) => [newArticle, ...prev]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333]">
      {/* Sticky Top Hero Header Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onRequestConsultation={handleRequestConsultation}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <HeroSection
              onGetStarted={handleRequestConsultation}
              onExploreServices={() => handleNavigate('services')}
              onOpenBlog={() => handleNavigate('blog')}
            />
            <TrustValueSection />
            <ServicesSection onSelectService={handleSelectService} />
            <WhyChooseSection onTalkToUs={handleRequestConsultation} />
            <PortfolioSection onViewProject={(proj) => setSelectedProject(proj)} />
            <PackagesSection onSelectPackage={handleSelectPackage} />
            <ProcessSection />
            <ResourcesSection
              articles={articles}
              onReadArticle={(art) => setSelectedArticle(art)}
              onViewAllBlog={() => handleNavigate('blog')}
            />
            <AboutSection onContactClick={handleRequestConsultation} />
            <ContactSection
              preselectedService={preselectedService}
              prefilledNote={prefilledNote}
            />
            <FaqSection />
            <FinalCtaSection onConsultationClick={handleRequestConsultation} />
          </>
        )}

        {currentPage === 'about' && (
          <>
            <div className="bg-[#111111] text-white py-12 border-b border-neutral-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
                <p className="text-xs font-bold text-[#E31E24] tracking-wide">
                  ABOUT {BRAND_INFO.name.toUpperCase()}
                </p>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl">
                  Proudly Papua New Guinean Digital Partners
                </h1>
              </div>
            </div>
            <AboutSection onContactClick={handleRequestConsultation} />
            <WhyChooseSection onTalkToUs={handleRequestConsultation} />
            <TrustValueSection />
            <ProcessSection />
            <FinalCtaSection onConsultationClick={handleRequestConsultation} />
          </>
        )}

        {currentPage === 'services' && (
          <>
            <div className="bg-[#111111] text-white py-12 border-b border-neutral-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
                <p className="text-xs font-bold text-[#E31E24] tracking-wide">
                  OUR DIGITAL SERVICES &amp; PACKAGES
                </p>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl">
                  Practical Digital Solutions for PNG Businesses
                </h1>
              </div>
            </div>
            <ServicesSection onSelectService={handleSelectService} />
            <PackagesSection onSelectPackage={handleSelectPackage} />
            <ProcessSection />
            <FaqSection />
            <FinalCtaSection onConsultationClick={handleRequestConsultation} />
          </>
        )}

        {currentPage === 'portfolio' && (
          <>
            <div className="bg-[#111111] text-white py-12 border-b border-neutral-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
                <p className="text-xs font-bold text-[#E31E24] tracking-wide">
                  OUR WORK &amp; DEMONSTRATION PORTFOLIO
                </p>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl">
                  See What&apos;s Possible for Your Business
                </h1>
              </div>
            </div>
            <PortfolioSection onViewProject={(proj) => setSelectedProject(proj)} />
            <PackagesSection onSelectPackage={handleSelectPackage} />
            <FinalCtaSection onConsultationClick={handleRequestConsultation} />
          </>
        )}

        {currentPage === 'blog' && (
          <>
            <BlogPage
              articles={articles}
              onReadArticle={(art) => setSelectedArticle(art)}
              onAddArticle={handleAddBlogArticle}
              onRequestConsultation={handleRequestConsultation}
            />
            <FinalCtaSection onConsultationClick={handleRequestConsultation} />
          </>
        )}

        {currentPage === 'resources' && (
          <>
            <div className="bg-[#111111] text-white py-12 border-b border-neutral-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
                <p className="text-xs font-bold text-[#E31E24] tracking-wide">
                  SME EDUCATION &amp; RESOURCES
                </p>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl">
                  Free Digital Tips for PNG Small Businesses
                </h1>
              </div>
            </div>
            <ResourcesSection
              articles={articles}
              onReadArticle={(art) => setSelectedArticle(art)}
              onViewAllBlog={() => handleNavigate('blog')}
            />
            <FaqSection />
            <FinalCtaSection onConsultationClick={handleRequestConsultation} />
          </>
        )}

        {currentPage === 'contact' && (
          <>
            <div className="bg-[#111111] text-white py-12 border-b border-neutral-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
                <p className="text-xs font-bold text-[#E31E24] tracking-wide">
                  CONTACT REDLINE DIGITAL SOLUTION
                </p>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl">
                  Let&apos;s Talk About Your Business
                </h1>
              </div>
            </div>
            <ContactSection
              preselectedService={preselectedService}
              prefilledNote={prefilledNote}
            />
            <FaqSection />
          </>
        )}

        {currentPage === 'privacy' && (
          <LegalPage type="privacy" onNavigate={handleNavigate} />
        )}

        {currentPage === 'terms' && (
          <LegalPage type="terms" onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectService={(svc) => handleSelectService(svc, svc)}
      />

      {/* Interactive Modals for Portfolio Preview & Blog/Resource Reader */}
      <PortfolioModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={handleRequestSimilarProject}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onDiscussTopic={handleDiscussArticleTopic}
      />
    </div>
  );
}
