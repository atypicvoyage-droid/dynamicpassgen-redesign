// app/guides/[slug]/GuideContent.js - WITH ALL AD PLACEMENTS INCLUDING FAQ
'use client'

import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'   
import MDXComponents from '@/components/MDXComponents'
import AuthorBio from '@/components/AuthorBio'
import AdPlaceholder from '@/components/AdPlaceholder'
import Image from 'next/image'
import Link from 'next/link'

export default function GuideContent({ content, frontmatter, featuredImage, formattedDate }) {
  
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        
        const id = href.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          window.history.pushState(null, '', href);

          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    const links = document.querySelectorAll('.toc-link');
    
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, [content]);

  // Check if content has FAQ section
  const hasFAQSection = content.toLowerCase().includes('## faq') || 
                        content.toLowerCase().includes('## frequently asked questions') ||
                        (frontmatter.faq && frontmatter.faq.length > 0);

  // Split content for ad insertion
  const contentSections = content.split('\n\n');
  const totalParagraphs = contentSections.length;
  
  // Calculate strategic positions for ads
  const afterIntroPosition = Math.min(3, Math.floor(totalParagraphs * 0.15));
  const midContentPosition = Math.floor(totalParagraphs * 0.5);
  
  // Find FAQ section position if exists
  let faqSectionIndex = -1;
  if (hasFAQSection) {
    faqSectionIndex = contentSections.findIndex(section => 
      section.toLowerCase().includes('## faq') || 
      section.toLowerCase().includes('## frequently asked questions')
    );
  }
  
  // Insert ad markers in content
  const contentWithAds = contentSections.map((section, index) => {
    let adPlacement = null;
    
    if (index === afterIntroPosition) {
      adPlacement = '<AD_AFTER_INTRO />';
    } else if (index === midContentPosition) {
      adPlacement = '<AD_MID_CONTENT />';
    } else if (faqSectionIndex > 0 && index === faqSectionIndex - 1) {
      // Insert ad right before FAQ section
      adPlacement = '<AD_BEFORE_FAQ />';
    }
    
    return adPlacement ? `${section}\n\n${adPlacement}` : section;
  }).join('\n\n');

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-gray-950 dark:to-gray-900 border-b border-slate-700/50 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <nav className="text-sm mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="text-slate-400 dark:text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-600 dark:text-gray-500">/</span>
            <Link href="/guides/" className="text-slate-400 dark:text-gray-300 hover:text-white transition-colors">
              Guides
            </Link>
            <span className="text-slate-600 dark:text-gray-500">/</span>
            <span className="text-blue-400 capitalize">{frontmatter.category}</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight tracking-tight">
            {frontmatter.title}
          </h1>

          {frontmatter.description && (
            <p className="text-lg text-slate-200 dark:text-gray-200 leading-relaxed">
              {frontmatter.description}
            </p>
          )}
        </div>
      </div>

      {/* Meta Bar */}
      <div className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap gap-6 items-center text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              👤
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">
              {frontmatter.author || "DynamicPassGen Team"}
            </span>
          </div>

          {formattedDate !== 'N/A' && (
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>Updated {formattedDate}</span>
            </div>
          )}

          {frontmatter.readTime && (
            <div className="flex items-center gap-2">
              <span>⏱️</span>
              <span>{frontmatter.readTime}</span>
            </div>
          )}

          {frontmatter.difficulty && (
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-600 text-blue-700 dark:text-white rounded-full text-xs font-bold uppercase tracking-wide">
              {frontmatter.difficulty}
            </span>
          )}
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Ad Placement 1 - Top of Article */}
        <div style={{ marginBottom: '32px' }}>
          <AdPlaceholder placementId="article_top" />
        </div>

        {/* Table of Contents */}
        {frontmatter.tableOfContents && frontmatter.tableOfContents.length > 0 && (
          <nav className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
              <span>📋</span> Table of Contents
            </h2>
            <ol className="space-y-3">
              {frontmatter.tableOfContents.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="toc-link flex items-start gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all"
                  >
                    <span className="text-gray-400 dark:text-gray-400 font-semibold min-w-[24px] text-sm mt-0.5">
                      {index + 1}.
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Featured Image */}
        {featuredImage && (
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
            <Image
              src={featuredImage}
              alt={frontmatter.title}
              width={1200}
              height={630}
              priority
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Markdown Content with Integrated Ads */}
        <div className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:font-bold prose-headings:tracking-tight
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-gray-900 dark:prose-h2:text-white
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-gray-900 dark:prose-h3:text-white
          prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-gray-900 dark:prose-h4:text-gray-100
          prose-p:text-gray-700 dark:prose-p:text-gray-100 prose-p:leading-relaxed
          prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-bold
          prose-em:text-gray-700 dark:prose-em:text-gray-100
          prose-code:text-pink-600 dark:prose-code:text-pink-300 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:font-medium
          prose-pre:bg-gray-900 dark:prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:border prose-pre:border-gray-700
          prose-ul:text-gray-700 dark:prose-ul:text-gray-100
          prose-ol:text-gray-700 dark:prose-ol:text-gray-100
          prose-li:text-gray-700 dark:prose-li:text-gray-100 prose-li:marker:text-gray-500 dark:prose-li:marker:text-gray-400
          prose-blockquote:border-l-blue-500 prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-100 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-950/40 prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-r
          prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-gray-200 dark:prose-img:border-gray-700
          prose-hr:border-gray-200 dark:prose-hr:border-gray-700
          prose-table:border-collapse prose-table:w-full
          prose-thead:bg-gray-100 dark:prose-thead:bg-gray-800
          prose-th:text-gray-900 dark:prose-th:text-white prose-th:font-bold prose-th:p-3 prose-th:border prose-th:border-gray-300 dark:prose-th:border-gray-700
          prose-td:text-gray-700 dark:prose-td:text-gray-100 prose-td:p-3 prose-td:border prose-td:border-gray-300 dark:prose-td:border-gray-700
          prose-tr:border-b prose-tr:border-gray-200 dark:prose-tr:border-gray-800"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              ...MDXComponents,
              h1: () => null,
              callout: MDXComponents.Callout,
              quicktips: MDXComponents.QuickTips,
              keytakeaway: MDXComponents.KeyTakeaway,
              // Handle ad placement markers
              p: ({ node, children, ...props }) => {
                const text = typeof children === 'string' ? children : '';
                
                // Check if this paragraph contains an ad marker
                if (text.includes('<AD_AFTER_INTRO />')) {
                  return (
                    <div className="not-prose my-12">
                      <AdPlaceholder placementId="article_after_intro" />
                    </div>
                  );
                }
                
                if (text.includes('<AD_MID_CONTENT />')) {
                  return (
                    <div className="not-prose my-12">
                      <AdPlaceholder placementId="article_mid_content" />
                    </div>
                  );
                }
                
                if (text.includes('<AD_BEFORE_FAQ />')) {
                  return (
                    <div className="not-prose my-12">
                      <AdPlaceholder placementId="article_before_faq" />
                    </div>
                  );
                }
                
                return <p {...props}>{children}</p>;
              },
            }}
          >
            {contentWithAds}
          </ReactMarkdown>
        </div>

        {/* Ad Placement - End of Article */}
        <div style={{ marginTop: '48px', marginBottom: '32px' }}>
          <AdPlaceholder placementId="article_end" />
        </div>

        <AuthorBio />
      </article>
    </div>
  )
}
