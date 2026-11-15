import React, { useEffect } from 'react';
import { X, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { SmeArticle, getWhatsAppUrl } from '../data/siteData';
import { WhatsAppIcon } from './RedlineLogo';
import { ResilientImage } from './ResilientImage';

interface ArticleModalProps {
  article: SmeArticle | null;
  onClose: () => void;
  onDiscussTopic: (topicTitle: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onDiscussTopic,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [article, onClose]);

  if (!article) return null;

  const customWhatsAppMsg = `Hello Redline Digital Solution. I just read your blog guide "${article.title}" and would like advice on applying this to my business.`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl border border-neutral-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-white shrink-0">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <BookOpen className="w-4 h-4 text-[#E31E24]" />
            <span className="font-semibold text-[#111111]">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>{article.publishedDate}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-[#333333] hover:bg-[#F5F6F8] hover:text-[#111111] transition-colors cursor-pointer"
            aria-label="Close article reader"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <article className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="rounded-xl overflow-hidden border border-neutral-200 bg-[#F5F6F8] h-56 sm:h-72">
            <ResilientImage
              src={article.image}
              alt={article.title}
              fallbackTitle={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <header className="space-y-3 pb-4 border-b border-neutral-200">
            <div className="text-xs text-neutral-500">
              Written by <strong className="text-[#111111]">{article.author}</strong> · Founder,
              Redline Digital Solution
            </div>
            <h2
              id="article-modal-title"
              className="font-display font-bold text-2xl sm:text-3xl text-[#111111]"
            >
              {article.title}
            </h2>
            <p className="text-base text-[#333333] leading-relaxed">{article.shortIntro}</p>
          </header>

          <div className="p-5 rounded-xl bg-[#F5F6F8] space-y-3">
            <h3 className="font-display font-bold text-sm text-[#111111]">
              What You Will Learn in This Guide:
            </h3>
            <ul className="space-y-2 text-sm text-[#333333]">
              {article.summaryPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {article.sections.map((sec, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="font-display font-bold text-lg text-[#111111]">{sec.heading}</h3>
                <p className="text-base text-[#333333] leading-relaxed">{sec.body}</p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-[#111111] text-white space-y-2">
            <p className="text-xs font-bold tracking-wide text-[#E31E24]">
              PRACTICAL ACTION STEP FOR PNG BUSINESS OWNERS
            </p>
            <p className="text-sm text-neutral-200 leading-relaxed">{article.practicalTip}</p>
          </div>
        </article>

        <div className="px-6 py-4 border-t border-neutral-200 bg-[#F5F6F8] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onDiscussTopic(article.title)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#E31E24] hover:bg-[#B9151B] text-white font-bold text-xs tracking-wide transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Get Help With This for My Business</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={getWhatsAppUrl(customWhatsAppMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#111111] hover:bg-neutral-800 text-white font-bold text-xs tracking-wide transition-colors whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            <span>Ask Redline on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
