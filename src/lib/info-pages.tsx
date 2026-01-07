import React from 'react';
import { TermsContent } from './info-pages-content/TermsContent';
import { PrivacyContent } from './info-pages-content/PrivacyContent';
import { RefundContent } from './info-pages-content/RefundContent';
import { ShippingContent } from './info-pages-content/ShippingContent';
import { ContactContent } from './info-pages-content/ContactContent';

interface PageContent {
  title: string;
  content: React.ReactNode;
}

const PlaceholderContent = ({ title }: { title: string }) => (
  <div className="space-y-4">
    <p className="text-lg text-neutral-600">Thank you for your interest in our {title}.</p>
    <p className="text-neutral-500">
      We are currently updating this section with the latest information to better serve our global
      clients. Please check back shortly for full details.
    </p>
  </div>
);

const SimpleContent = ({ children }: { children: React.ReactNode }) => (
  <div className="space-y-6 text-base leading-relaxed text-neutral-600">{children}</div>
);

export const pages: Record<string, PageContent> = {
  // Support Slugs
  'ai-support': {
    title: 'AI Customer Service',
    content: <PlaceholderContent title="AI Customer Service" />,
  },
  'support-ticket': {
    title: 'Open Support Ticket',
    content: <PlaceholderContent title="Support Ticket System" />,
  },
  faq: {
    title: 'FAQ & Knowledge Base',
    content: <PlaceholderContent title="FAQ" />,
  },
  contact: {
    title: 'Contact Information',
    content: <ContactContent />,
  },

  // Company Slugs
  'about-us': {
    title: 'About Gold Nexus',
    content: (
      <SimpleContent>
        <p>
          Gold Nexus is an international platform for trading physical gold and value-backed assets,
          created to provide access to real, verified, and secure gold for private clients and
          investors worldwide.
        </p>
        <p>
          The platform combines advanced technology, full transparency, and a user-friendly
          interface, connecting customers directly with selected suppliers in the global gold
          market, while maintaining high standards of security and reliability.
        </p>
      </SimpleContent>
    ),
  },
  vision: {
    title: 'Vision & Mission',
    content: (
      <SimpleContent>
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-neutral-900">Our Vision</h3>
          <p>
            The vision of Gold Nexus is to enable anyone to purchase, hold, and trade physical gold
            in a smart, accessible, and secure way.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-neutral-900">Our Mission</h3>
          <p>
            Our mission is to build a trusted platform that bridges traditional gold as a stable
            asset with modern technology, full transparency, and an advanced user experience.
          </p>
        </div>
      </SimpleContent>
    ),
  },
  'how-it-works': {
    title: 'How It Works',
    content: (
      <SimpleContent>
        <p>The purchasing process on Gold Nexus is simple and transparent:</p>
        <ol className="list-inside list-decimal space-y-2 pl-2">
          <li>Select a gold product from our catalog</li>
          <li>Review product details, including weight, purity, and origin</li>
          <li>Place an order through our secure system</li>
          <li>Product verification, packaging, and insured shipment by the supplier</li>
          <li>Delivery according to the applicable shipping policy</li>
        </ol>
        <p>Each step is performed with transparency and quality control.</p>
      </SimpleContent>
    ),
  },
  'trust-security': {
    title: 'Trust & Security',
    content: (
      <SimpleContent>
        <p>Security and user trust are core values at Gold Nexus.</p>
        <p>
          The platform uses advanced security measures, encrypted connections, and internal controls
          to protect personal data and transactions.
        </p>
        <p>
          We work exclusively with verified suppliers and apply strict review processes to ensure
          product authenticity and quality.
        </p>
      </SimpleContent>
    ),
  },
  'transparency-pricing': {
    title: 'Transparency & Pricing',
    content: (
      <SimpleContent>
        <p>
          Pricing on Gold Nexus is based on global gold market rates and is updated in accordance
          with market movements.
        </p>
        <p>
          Each product is presented with clear specifications, including weight, purity, and
          relevant details — with no hidden terms.
        </p>
      </SimpleContent>
    ),
  },
  terms: {
    title: 'Terms of Service',
    content: <TermsContent />,
  },
  privacy: {
    title: 'Privacy Policy',
    content: <PrivacyContent />,
  },
  compliance: {
    title: 'Compliance & Regulation',
    content: <PlaceholderContent title="Compliance Standards" />,
  },
  'aml-kyc': {
    title: 'AML / KYC Policy',
    content: (
      <SimpleContent>
        <p>
          Gold Nexus operates in accordance with international standards for anti-money laundering
          (AML) and customer identification (KYC), as required and applicable to platform
          activities.
        </p>
      </SimpleContent>
    ),
  },
  'refund-policy': {
    title: 'Refund & Return Policy',
    content: <RefundContent />,
  },

  // Services Slugs
  'verified-sellers': {
    title: 'Global Sellers Network',
    content: (
      <SimpleContent>
        <p>Gold Nexus operates through a global network of selected and verified gold suppliers.</p>
        <p>
          Our platform connects buyers with international sellers who meet strict quality and
          reliability standards, enabling access to physical gold products from multiple regions
          through a single, unified system.
        </p>
      </SimpleContent>
    ),
  },
  shipping: {
    title: 'Shipping & Insurance Policy',
    content: <ShippingContent />,
  },
  insurance: {
    title: 'Shipping & Insurance Policy',
    content: <ShippingContent />,
  },
  'live-price': {
    title: 'Real-Time Gold Prices',
    content: (
      <SimpleContent>
        <p>Gold Nexus provides gold price indications based on global market data.</p>
        <p>
          Displayed prices reflect international gold market movements and are intended for
          informational purposes, supporting transparency and informed decision-making.
        </p>
      </SimpleContent>
    ),
  },
  institutional: {
    title: 'Future Hedging Solutions',
    content: (
      <SimpleContent>
        <p>
          Gold Nexus is exploring future hedging and risk-management solutions designed to support
          clients in managing exposure to gold price volatility.
        </p>
        <p>
          These capabilities are planned for future phases of the platform and are not currently
          offered as active financial services.
        </p>
      </SimpleContent>
    ),
  },

  // Legacy/Other
  'secure-trading': {
    title: 'Secure Trading Environment',
    content: <PlaceholderContent title="Security Protocols" />,
  },
  verification: {
    title: 'Certified Jewelry Verification',
    content: <PlaceholderContent title="Verification Process" />,
  },
  'buyer-protection': {
    title: 'Insurance & Buyer Protection',
    content: <ShippingContent />,
  },
  'global-checkout': {
    title: 'Seamless Global Checkout',
    content: <PlaceholderContent title="Global Checkout" />,
  },
};

export const getPageContent = (slug: string): PageContent | null => {
  return pages[slug] || null;
};
