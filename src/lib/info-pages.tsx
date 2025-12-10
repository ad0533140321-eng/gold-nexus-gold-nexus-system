import React from 'react';
import { TermsContent } from '@/lib/info-pages-content/TermsContent';
import { RiskContent } from '@/lib/info-pages-content/RiskContent';
import { PrivacyContent } from '@/lib/info-pages-content/PrivacyContent';

interface PageContent {
  title: string;
  content: React.ReactNode;
}

export const pages: Record<string, PageContent> = {
  // ... (your other pages like about-us, contact, etc.)
  'about-us': {
    title: 'About Us',
    content: <p>Content for About Us page is pending...</p>,
  },
  contact: {
    title: 'Contact Us',
    content: <p>Content for Contact page is pending...</p>,
  },
  'secure-shipping': {
    title: 'Secure shipping',
    content: <p>Secure shipping page is pending...</p>,
  },
  'how-to-sell': {
    title: 'How to Sell Your Gold',
    content: <p>How to Sell Your Gold page is pending...</p>,
  },
  // ... and so on for the other simple pages
  'terms-of-service': {
    title: 'Terms of Service',
    content: <TermsContent />,
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    content: <PrivacyContent />,
  },
  'risk-disclosure': {
    title: 'Risk Disclosure',
    content: <RiskContent />,
  },
};

export const getPageContent = (slug: string): PageContent | null => {
  return pages[slug] || null;
};

// --- PASTE THE FULL COMPONENT CODE FROM STEP 2 BELOW ---
