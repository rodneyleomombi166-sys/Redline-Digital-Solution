import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  ArrowRight,
  Plus,
  X,
  CheckCircle2,
} from 'lucide-react';
import {
  BLOG_CATEGORIES,
  SmeArticle,
  BRAND_INFO,
  HERO_IMAGE,
} from '../data/siteData';
import { PngFlagIcon } from './RedlineLogo';
import { ResilientImage } from './ResilientImage';

interface BlogPageProps {
  articles: SmeArticle[];
  onReadArticle: (article: SmeArticle) => void;
  onAddArticle: (newArticle: SmeArticle) => void;
  onRequestConsultation: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  articles,
  onReadArticle,
  onAddArticle,
  onRequestConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Posts');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showNewPostModal, setShowNewPostModal] = useState<boolean>(false);

  // Reusable Article Template Form State
  const [draftTitle, setDraftTitle] = useState('');
  const [draftCategory, setDraftCategory] = useState('Website Strategy');
  const [draftIntro, setDraftIntro] = useState('');
  const [draftSectionHeading, setDraftSectionHeading] = useState('');
  const [draftSectionBody, setDraftSectionBody] = useState('');
  const [draftTip, setDraftTip] = useState('');
  const [draftError, setDraftError] = useState<string | null>(null);

  const featuredArticle = articles.find((a) => a.featured) || articles[0];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All Posts' || article.category === selectedCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      article.title.toLowerCase().includes(q) ||
      article.shortIntro.toLowerCase().includes(q) ||
      article.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draftTitle.trim() || !draftIntro.trim() || !draftSectionBody.trim()) {
      setDraftError('Please fill in the article title, short introduction, and main content.');
      return;
    }

    const newPost: SmeArticle = {
      id: `custom-post-${Date.now()}`,
      title: draftTitle.trim(),
      category: draftCategory,
      readTime: '4 min read',
      publishedDate: 'October 2026',
      author: BRAND_INFO.founderName,
      image: HERO_IMAGE,
      shortIntro: draftIntro.trim(),
      summaryPoints: [
        'Practical digital guidance for Papua New Guinea small businesses',
        'Actionable steps you can apply using your phone or computer',
      ],
      sections: [
        {
          heading: draftSectionHeading.trim() || 'Key Insights for PNG Business Owners',
          body: draftSectionBody.trim(),
        },
      ],
      practicalTip:
        draftTip.trim() ||
        'Contact Redline Digital Solution on WhatsApp (+675 74590895) if you would like tailored advice on applying this to your business.',
    };

    onAddArticle(newPost);
    setDraftTitle('');
    setDraftIntro('');
    setDraftSectionHeading('');
    setDraftSectionBody('');
    setDraftTip('');
    setDraftError(null);
    setShowNewPostModal(false);
    onReadArticle(newPost);
  };

  return (
    <div className="bg-white">
      {/* Blog Hero Header */}
      <section className="bg-[#111111] text-white py-14 lg:py-16 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-neutral-300">
                <PngFlagIcon className="w-5 h-3.5" />
                <span className="text-[#E31E24] font-bold">REDLINE SME BLOG &amp; INSIGHTS</span>
                <span aria-hidden="true">·</span>
                <span>Practical Digital Tips for Papua New Guinea</span>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
                Digital Growth Blog for PNG Businesses
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                Plain-language articles, step-by-step guides, and practical marketing tips written
                to help Papua New Guinea small business owners get found online and attract
                customers.
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={() => setShowNewPostModal(true)}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs tracking-wide transition-colors cursor-pointer whitespace-nowrap"
              >
                <Plus className="w-4 h-4 text-[#E31E24]" />
                <span>Add Blog Article</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Spotlight */}
      {featuredArticle && selectedCategory === 'All Posts' && !searchQuery.trim() && (
        <section className="py-12 bg-[#F5F6F8] border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-6 flex">
                <ResilientImage
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fallbackTitle={featuredArticle.title}
                  className="w-full h-64 sm:h-80 lg:h-full object-cover"
                />
              </div>

              <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-center space-y-5">
                <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
                  <span className="font-bold text-[#E31E24]">FEATURED BLOG POST</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] leading-snug">
                  {featuredArticle.title}
                </h2>

                <p className="text-base text-[#333333] leading-relaxed">
                  {featuredArticle.shortIntro}
                </p>

                <ul className="space-y-2 text-sm text-[#333333]">
                  {featuredArticle.summaryPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-100">
                  <div className="text-xs text-neutral-500">
                    By <strong className="text-[#111111]">{featuredArticle.author}</strong> ·{' '}
                    {featuredArticle.publishedDate}
                  </div>

                  <button
                    type="button"
                    onClick={() => onReadArticle(featuredArticle)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#E31E24] hover:bg-[#B9151B] text-white font-bold text-xs tracking-wide transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search & Category Filter Controls + Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Segmented Category Filter */}
            <div
              className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F5F6F8] rounded-xl border border-neutral-200"
              role="tablist"
              aria-label="Filter blog posts by category"
            >
              {BLOG_CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-[#111111] text-white'
                        : 'text-[#333333] hover:bg-white hover:text-[#111111]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search blog topics..."
                aria-label="Search blog posts"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-[#111111] bg-white focus:outline-2 focus:outline-[#E31E24]"
              />
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="p-12 rounded-2xl bg-[#F5F6F8] border border-neutral-200 text-center space-y-3">
              <p className="font-display font-bold text-lg text-[#111111]">
                No blog articles matched your search.
              </p>
              <p className="text-sm text-[#333333]">
                Try clearing your search filter or selecting &ldquo;All Posts&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All Posts');
                  setSearchQuery('');
                }}
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#111111] text-white text-xs font-bold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-2xl border border-neutral-200 overflow-hidden flex flex-col justify-between group hover:border-neutral-300 transition-colors"
                >
                  <div>
                    <div className="h-48 overflow-hidden bg-[#F5F6F8] border-b border-neutral-200">
                      <ResilientImage
                        src={article.image}
                        alt={article.title}
                        fallbackTitle={article.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
                      />
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-500">
                        <span className="font-semibold text-[#E31E24]">{article.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.readTime}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.publishedDate}</span>
                      </div>

                      <h3 className="font-display font-bold text-xl text-[#111111] leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-sm text-[#333333] leading-relaxed">
                        {article.shortIntro}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs text-neutral-500">By {article.author}</span>

                    <button
                      type="button"
                      onClick={() => onReadArticle(article)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] hover:text-[#E31E24] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <BookOpen className="w-4 h-4 text-[#E31E24]" />
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Callout Banner for Custom SME Advice */}
          <div className="p-8 rounded-2xl bg-[#F5F6F8] border border-neutral-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h3 className="font-display font-bold text-xl text-[#111111]">
                Have a Question About Taking Your PNG Business Online?
              </h3>
              <p className="text-sm text-[#333333] leading-relaxed">
                We are happy to explain website options, domain registration, social media pages,
                and digital marketing in simple, practical terms.
              </p>
            </div>

            <button
              type="button"
              onClick={onRequestConsultation}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#E31E24] hover:bg-[#B9151B] text-white font-bold text-xs tracking-wide transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>GET A FREE CONSULTATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Reusable Blog Article Creator Modal */}
      {showNewPostModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="new-blog-modal-title"
          onClick={() => setShowNewPostModal(false)}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-2xl border border-neutral-200 overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
              <h2 id="new-blog-modal-title" className="font-display font-bold text-lg text-[#111111]">
                Add New SME Blog Article
              </h2>
              <button
                type="button"
                onClick={() => setShowNewPostModal(false)}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[#333333] hover:bg-[#F5F6F8] cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="p-6 space-y-4">
              {draftError && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-[#E31E24] font-medium">
                  {draftError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#111111] mb-1">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={draftTitle}
                    onChange={(e) => setDraftTitle(e.target.value)}
                    placeholder="e.g. How Local Shops in PNG Can Use WhatsApp Business"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm text-[#111111]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111111] mb-1">
                    Category
                  </label>
                  <select
                    value={draftCategory}
                    onChange={(e) => setDraftCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm text-[#111111] bg-white"
                  >
                    {BLOG_CATEGORIES.filter((c) => c !== 'All Posts').map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#111111] mb-1">
                  Short Introduction *
                </label>
                <textarea
                  rows={2}
                  required
                  value={draftIntro}
                  onChange={(e) => setDraftIntro(e.target.value)}
                  placeholder="Write a 1–2 sentence summary explaining how this article helps PNG business owners..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm text-[#111111]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#111111] mb-1">
                  Main Section Heading
                </label>
                <input
                  type="text"
                  value={draftSectionHeading}
                  onChange={(e) => setDraftSectionHeading(e.target.value)}
                  placeholder="e.g. 1. Make Your Products Easy to Browse on Mobile"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm text-[#111111]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#111111] mb-1">
                  Article Body Content *
                </label>
                <textarea
                  rows={4}
                  required
                  value={draftSectionBody}
                  onChange={(e) => setDraftSectionBody(e.target.value)}
                  placeholder="Write the main educational advice in simple, clear language..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm text-[#111111]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#111111] mb-1">
                  Practical Action Tip (Optional)
                </label>
                <input
                  type="text"
                  value={draftTip}
                  onChange={(e) => setDraftTip(e.target.value)}
                  placeholder="e.g. Start by taking 5 clear daytime photos of your best-selling items."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm text-[#111111]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowNewPostModal(false)}
                  className="px-4 py-2.5 rounded-lg bg-[#F5F6F8] text-xs font-bold text-[#333333] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-[#E31E24] hover:bg-[#B9151B] text-white text-xs font-bold cursor-pointer"
                >
                  Publish to Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
