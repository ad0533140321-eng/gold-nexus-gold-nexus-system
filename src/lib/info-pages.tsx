import React from 'react';

interface PageContent {
  title: string;
  content: React.ReactNode;
}

export const pages: Record<string, PageContent> = {
  // Support Slugs
  'ai-support': {
    title: 'AI Customer Service',
    content: <p>Content for the &#34;AI Customer Service&#34; page is pending.</p>,
  },
  'support-ticket': {
    title: 'Open Support Ticket',
    content: <p>Content for the &#34;Open Support Ticket&#34; page is pending.</p>,
  },
  faq: {
    title: 'FAQ & Knowledge Base',
    content: <p>Content for the &#34;FAQ & Knowledge Base&#34; page is pending.</p>,
  },

  // Company Slugs
  'about-us': {
    title: 'About Us',
    content: <p>Content for the &#34;About Us&#34; page is pending.</p>,
  },
  terms: {
    title: 'Terms & Conditions',
    content: <p>Content for the &#34;Terms & Conditions&#34; page is pending.</p>,
  },
  privacy: {
    title: 'Privacy Policy',
    content: <p>Content for the &#34;Privacy Policy&#34; page is pending.</p>,
  },
  compliance: {
    title: 'Compliance & AML / KYC',
    content: <p>Content for the &#34;Compliance & AML / KYC&#34; page is pending.</p>,
  },
  'secure-trading': {
    title: 'Secure Trading Environment',
    content: <p>Content for the &#34;Secure Trading Environment&#34; page is pending.</p>,
  },

  // Services Slugs
  'live-price-feed': {
    title: 'Live Gold Price Feed',
    content: <p>Content for the &#34;Live Gold Price Feed&#34; page is pending.</p>,
  },
  verification: {
    title: 'Certified Jewelry Verification',
    content: <p>Content for the &#34;Certified Jewelry Verification&#34; page is pending.</p>,
  },
  'buyer-protection': {
    title: 'Insurance & Buyer Protection',
    content: <p>Content for the &#34;Insurance & Buyer Protection&#34; page is pending.</p>,
  },
  'global-checkout': {
    title: 'Seamless Global Checkout',
    content: <p>Content for the &#34;Seamless Global Checkout&#34; page is pending.</p>,
  },
};

export const getPageContent = (slug: string): PageContent | null => {
  return pages[slug] || null;
};
