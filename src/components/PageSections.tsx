import React, { useState } from 'react';
import {
  Search,
  Shield,
  Megaphone,
  TrendingUp,
  Globe,
  Share2,
  Palette,
  Target,
  FileText,
  GraduationCap,
  Check,
  ArrowRight,
  ChevronDown,
  BookOpen,
  Eye,
  Info,
  MapPin,
} from 'lucide-react';
import {
  BRAND_INFO,
  HERO_IMAGE,
  FOUNDER_IMAGE,
  HERO_BG_IMAGE,
  WHY_CHOOSE_IMAGE,
  TRUST_CARDS,
  DIGITAL_SERVICES,
  WHY_CHOOSE_POINTS,
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  WEBSITE_PACKAGES,
  PROCESS_STEPS,
  FAQ_ITEMS,
  PortfolioProject,
  SmeArticle,
  getWhatsAppUrl,
} from '../data/siteData';
import { PngFlagIcon, WhatsAppIcon } from './RedlineLogo';
import { ResilientImage } from './ResilientImage';

/* -------------------------------------------------------------------------- */
/* 1. HERO SECTION                                                            */
/* -------------------------------------------------------------------------- */
interface HeroSectionProps {
  onGetStarted: () => void;
  onExploreServices: () => void;
  onOpenBlog: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onGetStarted,
  onExploreServices,
  onOpenBlog,
}) => {
  const [heroVisual, setHeroVisual] = useState<'founder' | 'showcase'>('founder');

  return (
    <section className="relative bg-[#111111] text-white border-b border-neutral-800 overflow-hidden">
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 rounded-2xl sm:rounded-3xl border border-neutral-800/80 shadow-2xl bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(17, 17, 17, 0.88) 0%, rgba(17, 17, 17, 0.76) 45%, rgba(17, 17, 17, 0.90) 100%), url(${HERO_BG_IMAGE})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* Two-column Hero Split with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Copy & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-neutral-300 tracking-wide">
              <PngFlagIcon className="w-5 h-3.5" />
              <span>Papua New Guinea Digital Agency</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#E31E24] font-semibold">
                {BRAND_INFO.supportingStatement}
              </span>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={onOpenBlog}
                className="inline-flex items-center gap-1 text-white hover:text-[#E31E24] underline underline-offset-4 font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#E31E24]" />
                <span>Read PNG SME Blog</span>
              </button>
            </div>

            <h1
              className="font-display font-extrabold text-white tracking-tight leading-[1.1]"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.6rem)' }}
            >
              WE BUILD WEBSITES THAT <span className="text-[#E31E24]">BUILD YOUR BUSINESS!</span>
            </h1>

            <div className="space-y-3 max-w-2xl">
              <p className="text-lg sm:text-xl font-semibold text-neutral-100 leading-snug">
                Is your business ready to go digital, reach more customers, and grow?
              </p>
              <p className="text-base text-neutral-300 leading-relaxed">
                Redline Digital Solution helps Papua New Guinea businesses build a professional
                online presence through website development, social media marketing, graphic design,
                and practical digital solutions.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onGetStarted}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#E31E24] hover:bg-[#B9151B] text-white font-bold text-xs tracking-wide transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>GET STARTED TODAY</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs tracking-wide transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>EXPLORE OUR SERVICES</span>
              </button>

              <button
                type="button"
                onClick={onOpenBlog}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs tracking-wide transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#E31E24]" />
                <span>SME BLOG</span>
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#1ebe5a] text-[#111111] font-bold text-xs tracking-wide transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Founder & PNG Digital Showcase (5 cols) */}
          <div className="lg:col-span-5 flex items-center">
            <div className="relative w-full rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 flex flex-col shadow-xl">
              {/* div:nth-of-type(1): Top tab switcher */}
              <div className="p-2 sm:p-2.5 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5" role="tablist" aria-label="Hero visual view selection">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={heroVisual === 'founder'}
                    onClick={() => setHeroVisual('founder')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      heroVisual === 'founder'
                        ? 'bg-[#E31E24] text-white shadow-xs'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Founder: Rodney Leo Mombi
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={heroVisual === 'showcase'}
                    onClick={() => setHeroVisual('showcase')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      heroVisual === 'showcase'
                        ? 'bg-[#E31E24] text-white shadow-xs'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    SME Digital Showcase
                  </button>
                </div>
                <div className="flex items-center gap-1.5 pr-2">
                  <PngFlagIcon className="w-4 h-3" />
                </div>
              </div>

              {/* div:nth-of-type(2): Standard-size extended visual content */}
              <div className="p-4 sm:p-5 flex flex-col gap-3.5">
                {/* div:nth-of-type(1): Full-width standard-size image wrapper */}
                <div className="relative w-full overflow-hidden rounded-xl border border-neutral-800 shadow-xl bg-neutral-950">
                  {heroVisual === 'founder' ? (
                    <img
                      src={FOUNDER_IMAGE}
                      alt="Rodney Leo Mombi, Founder & Director of Redline Digital Solution at his desk"
                      className="w-full h-80 sm:h-96 md:h-[420px] lg:h-[440px] xl:h-[460px] object-cover object-top"
                    />
                  ) : (
                    <ResilientImage
                      src={HERO_IMAGE}
                      alt="Papua New Guinea small business owner reviewing a responsive website on a laptop and mobile phone"
                      fallbackTitle="Helping PNG SMEs Go Digital"
                      className="w-full h-80 sm:h-96 md:h-[420px] lg:h-[440px] xl:h-[460px] object-cover"
                    />
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 sm:p-5">
                    <p className="text-sm font-bold text-white flex items-center gap-2">
                      <span>{heroVisual === 'founder' ? 'Rodney Leo Mombi' : 'PNG SME Digital Showcase'}</span>
                      <span className="text-[10px] font-semibold text-[#E31E24] bg-white/10 px-2 py-0.5 rounded">
                        {heroVisual === 'founder' ? 'Director & Owner' : 'Web & Mobile'}
                      </span>
                    </p>
                    <p className="text-xs text-neutral-300 mt-0.5">
                      {heroVisual === 'founder'
                        ? 'Redline Digital Solution · Banz, Jiwaka Province, PNG'
                        : 'Custom, modern websites built for Papua New Guinea small businesses.'}
                    </p>
                  </div>
                </div>

                {/* div:nth-of-type(2): Details */}
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#E31E24] bg-[#E31E24]/10 px-2 py-0.5 rounded">
                        {heroVisual === 'founder' ? 'Founder & Director' : 'Live Digital Solutions'}
                      </span>
                      <span className="text-xs text-neutral-400">
                        {heroVisual === 'founder' ? 'Redline Digital Solution' : 'Mobile & Desktop'}
                      </span>
                    </div>
                    <span className="text-[11px] text-neutral-400 hidden sm:inline">
                      {heroVisual === 'founder' ? 'Banz, Jiwaka PNG' : 'PNG SME Focused'}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                    {heroVisual === 'founder' ? 'Rodney Leo Mombi' : 'Websites Built for PNG Businesses'}
                  </h3>
                  <p className="text-xs text-neutral-300">
                    {heroVisual === 'founder'
                      ? 'Leading digital website development, social media marketing, and technology training for PNG SMEs.'
                      : 'Custom responsive websites designed to help local businesses attract customers and build trust.'}
                  </p>
                  {heroVisual === 'founder' && (
                    <p className="text-xs text-[#E31E24] font-medium italic pt-0.5">
                      &ldquo;Digital Solutions for a Stronger PNG&rdquo;
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Value Strip Below Hero Split */}
        <div className="mt-12 pt-8 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <p className="text-xs font-bold text-[#E31E24] tracking-wide">01. PNG SME FOCUS</p>
            <p className="text-sm font-semibold text-white">Practical &amp; Accessible</p>
            <p className="text-xs text-neutral-400">
              Explained in plain, everyday language without confusing technical jargon.
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-bold text-[#E31E24] tracking-wide">02. MOBILE-FIRST</p>
            <p className="text-sm font-semibold text-white">Designed for Smartphones</p>
            <p className="text-xs text-neutral-400">
              Fast, responsive pages tailored for customers browsing on mobile phones in PNG.
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-bold text-[#E31E24] tracking-wide">03. DIRECT ENQUIRIES</p>
            <p className="text-sm font-semibold text-white">WhatsApp &amp; Quote Ready</p>
            <p className="text-xs text-neutral-400">
              Make it easy for customers to message or call your business directly.
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-bold text-[#E31E24] tracking-wide">04. LOCAL SUPPORT</p>
            <p className="text-sm font-semibold text-white">Based in Jiwaka, PNG</p>
            <p className="text-xs text-neutral-400">
              Proudly serving small businesses and organisations across Papua New Guinea.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* 2. TRUST AND VALUE SECTION                                                 */
/* -------------------------------------------------------------------------- */
export const TrustValueSection: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'search':
        return <Search className="w-5 h-5 text-[#E31E24]" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-[#E31E24]" />;
      case 'megaphone':
        return <Megaphone className="w-5 h-5 text-[#E31E24]" />;
      default:
        return <TrendingUp className="w-5 h-5 text-[#E31E24]" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E31E24]">
            <span>ONLINE VISIBILITY &amp; TRUST</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#333333]">Why Digital Presence Matters</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight">
            YOUR BUSINESS DESERVES TO BE SEEN ONLINE
          </h2>
          <p className="text-base sm:text-lg text-[#333333] leading-relaxed">
            Today, customers use their mobile phones to discover businesses, compare products, and
            contact service providers. Redline Digital Solution helps your business become easier to
            find, understand, and contact online.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_CARDS.map((card) => (
            <div
              key={card.id}
              className="p-6 rounded-2xl bg-[#F5F6F8] border border-neutral-200/80 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-white border border-neutral-200 flex items-center justify-center">
                    {renderIcon(card.iconName)}
                  </div>
                  <span className="font-mono text-xs font-semibold text-neutral-400 tabular-nums">
                    {card.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-[#111111]">{card.title}</h3>

                <p className="text-sm text-[#333333] leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* 3. OUR DIGITAL SERVICES SECTION                                            */
/* -------------------------------------------------------------------------- */
interface ServicesSectionProps {
  onSelectService: (formServiceValue: string, serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'globe':
        return <Globe className="w-6 h-6 text-[#E31E24]" />;
      case 'share2':
        return <Share2 className="w-6 h-6 text-[#E31E24]" />;
      case 'palette':
        return <Palette className="w-6 h-6 text-[#E31E24]" />;
      case 'target':
        return <Target className="w-6 h-6 text-[#E31E24]" />;
      case 'fileText':
        return <FileText className="w-6 h-6 text-[#E31E24]" />;
      default:
        return <GraduationCap className="w-6 h-6 text-[#E31E24]" />;
    }
  };

  return (
    <section className="py-20 bg-[#F5F6F8] border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E31E24]">
            <span>OUR DIGITAL SERVICES</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#333333]">Practical Solutions for Local Growth</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight">
            SMART DIGITAL SOLUTIONS FOR PNG BUSINESSES
          </h2>
          <p className="text-base sm:text-lg text-[#333333] leading-relaxed">
            Whether you are starting a small business or growing an established company, we provide
            practical digital services to help you move forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIGITAL_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-neutral-300 transition-colors duration-150"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#F5F6F8] flex items-center justify-center">
                    {renderServiceIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-400 tabular-nums">
                    {service.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-[#111111]">
                  {service.number}. {service.title}
                </h3>

                <p className="text-sm text-[#333333] leading-relaxed">{service.description}</p>

                <div className="pt-2 space-y-2.5">
                  <p className="text-xs font-bold text-[#111111] tracking-wide">
                    {service.listHeading}
                  </p>
                  <ul className="space-y-2 text-sm text-[#333333]">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => onSelectService(service.formOptionValue, service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#111111] hover:bg-[#E31E24] text-white font-bold text-xs tracking-wide transition-colors duration-150 cursor-pointer whitespace-nowrap"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* 4. WHY CHOOSE REDLINE DIGITAL SOLUTION                                     */
/* -------------------------------------------------------------------------- */
interface WhyChooseSectionProps {
  onTalkToUs: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ onTalkToUs }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-2xl overflow-hidden border border-neutral-200 bg-[#F5F6F8] flex flex-col">
              <ResilientImage
                src={WHY_CHOOSE_IMAGE}
                alt="Friendly Papua New Guinea digital consultant explaining website options to a local small business owner"
                fallbackTitle="Your Digital Partner in Papua New Guinea"
                className="w-full h-80 lg:h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#E31E24]">
                <span>WHY CHOOSE REDLINE DIGITAL SOLUTION</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#333333]">Built Around Your Needs</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight">
                YOUR DIGITAL PARTNER FOR BUSINESS GROWTH
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {WHY_CHOOSE_POINTS.map((point, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-[#F5F6F8] flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-md bg-[#E31E24] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium text-[#111111] leading-snug">{point}</span>
                </div>
              ))}
            </div>

            <p className="text-base text-[#333333] leading-relaxed pt-2">
              You understand your business. We help you use digital technology to present it
              professionally and connect with more potential customers.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onTalkToUs}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#E31E24] hover:bg-[#B9151B] text-white font-bold text-xs tracking-wide transition-colors duration-150 cursor-pointer whitespace-nowrap"
              >
                <span>LET&apos;S TALK ABOUT YOUR BUSINESS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* 5. OUR WORK AND PORTFOLIO SECTION                                          */
/* -------------------------------------------------------------------------- */
interface PortfolioSectionProps {
  onViewProject: (project: PortfolioProject) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onViewProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 bg-[#F5F6F8] border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E31E24]">
              <span>OUR WORK &amp; DEMONSTRATION PORTFOLIO</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#333333]">Industry Concepts for PNG SMEs</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight">
              SEE WHAT&apos;S POSSIBLE FOR YOUR BUSINESS
            </h2>
            <p className="text-base text-[#333333] leading-relaxed">
              Explore our clearly labelled industry demonstration projects showing how websites,
              menus, booking portals, and branding materials can be built for Papua New Guinea
              businesses.
            </p>
          </div>
        </div>

        <div
          className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-xl border border-neutral-200"
          role="tablist"
          aria-label="Filter portfolio projects by category"
        >
          {PORTFOLIO_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#111111] text-white'
                    : 'text-[#333333] hover:bg-[#F5F6F8] hover:text-[#111111]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-neutral-100 border-b border-neutral-200">
                  <ResilientImage
                    src={project.image}
                    alt={project.title}
                    fallbackTitle={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-500">
                    <span className="font-semibold text-[#E31E24]">{project.category}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#111111] leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#333333] leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => onViewProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#F5F6F8] hover:bg-[#111111] text-[#111111] hover:text-white font-bold text-xs tracking-wide transition-colors duration-150 cursor-pointer whitespace-nowrap"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Project</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* 6. WEBSITE PACKAGES SECTION                                                */
/* -------------------------------------------------------------------------- */
interface PackagesSectionProps {
  onSelectPackage: (packageName: string, serviceValue: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E31E24]">
            <span>WEBSITE PACKAGES</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#333333]">Tailored to Your Business Stage &amp; Budget</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight">
            LET&apos;S FIND THE RIGHT SOLUTION FOR YOUR BUSINESS
          </h2>
          <p className="text-base sm:text-lg text-[#333333] leading-relaxed">
            Every business has different requirements. Choose a starting point below and request a
            custom quote tailored to your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {WEBSITE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-8 border ${
                pkg.featured
                  ? 'bg-[#111111] text-white border-[#111111]'
                  : 'bg-[#F5F6F8] text-[#111111] border-neutral-200'
              }`}
            >
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#E31E24]">
                      {pkg.featured ? 'POPULAR FOR GROWING SMEs' : 'WEBSITE PACKAGE'}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl">{pkg.name}</h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      pkg.featured ? 'text-neutral-300' : 'text-[#333333]'
                    }`}
                  >
                    {pkg.subtitle}
                  </p>
                </div>

                <div
                  className={`py-4 border-y ${
                    pkg.featured ? 'border-neutral-800' : 'border-neutral-200'
                  }`}
                >
                  <p className="text-xs uppercase tracking-wide text-neutral-400">Pricing</p>
                  <p className="font-display font-extrabold text-2xl mt-0.5">{pkg.priceStatus}</p>
                </div>

                <div className="space-y-3">
                  <p
                    className={`text-xs font-bold tracking-wide ${
                      pkg.featured ? 'text-neutral-200' : 'text-[#111111]'
                    }`}
                  >
                    Possible inclusions:
                  </p>
                  <ul className="space-y-2.5 text-sm">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                        <span className={pkg.featured ? 'text-neutral-200' : 'text-[#333333]'}>
                          {inc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectPackage(pkg.name, pkg.formServiceValue)}
                className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg font-bold text-xs tracking-wide transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                  pkg.featured
                    ? 'bg-[#E31E24] hover:bg-[#B9151B] text-white'
                    : 'bg-[#111111] hover:bg-[#E31E24] text-white'
                }`}
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-[#F5F6F8] border border-neutral-200 flex items-start gap-4">
          <Info className="w-5 h-5 text-[#E31E24] shrink-0 mt-0.5" />
          <div className="space-y-1.5 text-xs sm:text-sm text-[#333333] leading-relaxed">
            <p className="font-bold text-[#111111]">
              Important Information About Website Quotes &amp; Ongoing Services
            </p>
            <p>
              Final project pricing depends on the number of pages, custom features, and content
              requirements of your business. Please note that domain name registration (such as{' '}
              <code>.com</code> or <code>.com.pg</code>), website hosting, ongoing website
              maintenance, paid social media or search advertising budgets, and third-party services
              are not free and may involve additional costs. We clearly itemise every inclusion and
              any third-party cost in your written quotation before work begins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* 7. HOW OUR PROCESS WORKS SECTION                                           */
/* -------------------------------------------------------------------------- */
export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E31E24]">
            <span>HOW OUR PROCESS WORKS</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-300">Clear Step-by-Step Workflow</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            GET YOUR BUSINESS ONLINE IN 4 SIMPLE STEPS
          </h2>
          <p className="text-base text-neutral-300 leading-relaxed">
            We keep the entire process straightforward so you can focus on running your business
            while we take care of the technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="relative p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#E31E24] text-white font-mono font-bold text-sm tabular-nums">
                    {step.number}
                  </span>
                  <span className="text-xs font-medium text-neutral-400">
                    Step {index + 1} of 4
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white">{step.title}</h3>

                <p className="text-sm text-neutral-300 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* 8. SME EDUCATION AND RESOURCES SECTION                                     */
/* -------------------------------------------------------------------------- */
interface ResourcesSectionProps {
  articles: SmeArticle[];
  onReadArticle: (article: SmeArticle) => void;
  onViewAllBlog?: () => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  articles,
  onReadArticle,
  onViewAllBlog,
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E31E24]">
              <span>SME EDUCATION, BLOG &amp; RESOURCES</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#333333]">Beginner-Friendly Digital Guides</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight">
              FREE DIGITAL TIPS FOR PNG SMALL BUSINESSES
            </h2>
            <p className="text-base sm:text-lg text-[#333333] leading-relaxed">
              Practical, easy-to-follow guides written for Papua New Guinea business owners who want
              to understand websites, social media, and digital promotion.
            </p>
          </div>

          {onViewAllBlog && (
            <button
              type="button"
              onClick={onViewAllBlog}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#111111] hover:bg-[#E31E24] text-white font-bold text-xs tracking-wide transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>VISIT FULL SME BLOG</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(0, 6).map((article) => (
            <article
              key={article.id}
              className="bg-[#F5F6F8] rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between space-y-6 hover:border-neutral-300 transition-colors duration-150"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="font-semibold text-[#E31E24]">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-display font-bold text-xl text-[#111111] leading-snug">
                  {article.title}
                </h3>

                <p className="text-sm text-[#333333] leading-relaxed">{article.shortIntro}</p>
              </div>

              <div className="pt-4 border-t border-neutral-200/80">
                <button
                  type="button"
                  onClick={() => onReadArticle(article)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#111111] hover:text-[#E31E24] transition-colors duration-150 cursor-pointer whitespace-nowrap"
                >
                  <BookOpen className="w-4 h-4 text-[#E31E24]" />
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* 9. ABOUT REDLINE DIGITAL SOLUTION SECTION                                  */
/* -------------------------------------------------------------------------- */
interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section className="py-20 bg-[#F5F6F8] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E31E24]">
              <PngFlagIcon className="w-5 h-3.5" />
              <span>ABOUT REDLINE DIGITAL SOLUTION</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#333333]">Banz, Jiwaka Province</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight">
              HELPING PNG BUSINESSES MOVE FORWARD WITH DIGITAL TECHNOLOGY
            </h2>

            <div className="space-y-4 text-base text-[#333333] leading-relaxed">
              <p>
                Redline Digital Solution is focused on helping Papua New Guinea businesses establish
                a professional online presence and make better use of digital technology.
              </p>
              <p>
                We understand that many small businesses want to reach more customers online but may
                not know where to begin.
              </p>
              <p>
                Our goal is to make digital solutions easier to understand and access by providing
                practical website development, digital marketing, graphic design, and business
                technology services.
              </p>
              <p>
                From a small business website to a complete digital presence, we work with clients
                to identify solutions that suit their needs, goals, and budgets.
              </p>
              <p className="font-semibold text-[#111111]">
                We believe every business deserves an opportunity to be seen, understood, and
                discovered by potential customers online.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200 space-y-2">
              <p className="text-xs font-bold text-[#E31E24] tracking-wide">OUR MISSION</p>
              <p className="text-sm sm:text-base font-medium text-[#111111] leading-relaxed">
                &ldquo;{BRAND_INFO.mission}&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#111111] text-white overflow-hidden border border-neutral-800 shadow-xl space-y-0">
              <div className="relative w-full overflow-hidden bg-neutral-950">
                <img
                  src={FOUNDER_IMAGE}
                  alt={BRAND_INFO.founderName}
                  className="w-full h-64 sm:h-72 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E31E24] bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                      Founder &amp; Director
                    </span>
                    <h3 className="font-display font-extrabold text-xl text-white mt-1">
                      {BRAND_INFO.founderName}
                    </h3>
                  </div>
                  <span className="text-xs text-neutral-300 bg-black/60 px-2 py-1 rounded backdrop-blur-xs">
                    {BRAND_INFO.founderRole}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                <p className="text-xs font-bold text-[#E31E24] tracking-wide">
                  FOUNDER&apos;S PERSONAL MESSAGE TO PNG SMEs
                </p>

                <blockquote className="text-base text-neutral-100 leading-relaxed italic">
                  &ldquo;{BRAND_INFO.founderMessage}&rdquo;
                </blockquote>

                <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#E31E24] shrink-0" />
                    <span>{BRAND_INFO.location}</span>
                  </div>
                  <span className="text-neutral-500 font-mono">Papua New Guinea 🇵🇬</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200 space-y-4">
              <h3 className="font-display font-bold text-base text-[#111111]">
                Who We Serve Across Papua New Guinea
              </h3>
              <p className="text-sm text-[#333333] leading-relaxed">
                We partner with SMEs, small businesses, entrepreneurs, startups, hotels,
                restaurants, lodges, tourism operators, retail shops, service providers, and
                community organisations across PNG.
              </p>
              <button
                type="button"
                onClick={onContactClick}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#E31E24] hover:bg-[#B9151B] text-white font-bold text-xs tracking-wide transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Speak With Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* 10. FREQUENTLY ASKED QUESTIONS SECTION                                     */
/* -------------------------------------------------------------------------- */
export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-white border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E31E24]">
            <span>FREQUENTLY ASKED QUESTIONS</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#333333]">Plain-Language Answers</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight">
            QUESTIONS PNG BUSINESS OWNERS OFTEN ASK
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-neutral-200 bg-[#F5F6F8] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-display font-bold text-base text-[#111111] hover:text-[#E31E24] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#E31E24] shrink-0 transition-transform duration-150 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#333333] leading-relaxed border-t border-neutral-200/60 bg-white">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* 11. FINAL CALL TO ACTION SECTION                                           */
/* -------------------------------------------------------------------------- */
interface FinalCtaSectionProps {
  onConsultationClick: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onConsultationClick }) => {
  return (
    <section className="py-16 bg-[#111111] text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#E31E24]/90 border border-neutral-800 p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#E31E24] tracking-wide">
              <PngFlagIcon className="w-5 h-3.5" />
              <span>GO DIGITAL WITH REDLINE</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
              YOUR BUSINESS HAS POTENTIAL. LET&apos;S TAKE IT ONLINE.
            </h2>
            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed max-w-2xl">
              Start building a stronger digital presence for your business today.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-end">
            <button
              type="button"
              onClick={onConsultationClick}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#E31E24] hover:bg-[#B9151B] text-white font-bold text-xs tracking-wide transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>GET A FREE CONSULTATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#25D366] hover:bg-[#1ebe5a] text-[#111111] font-bold text-xs tracking-wide transition-colors whitespace-nowrap"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>CHAT WITH US ON WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
