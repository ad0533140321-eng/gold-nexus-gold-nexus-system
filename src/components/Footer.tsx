import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* BRAND COLUMN (Left) */}
          <div className="space-y-4">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#D4AF37]">Gold Nexus</h3>
              <p className="text-sm text-gray-400">Luxury Gold & Jewelry Marketplace</p>
            </div>
            <div className="text-xs leading-relaxed text-gray-500">
              <p>Gold Nexus LLC • Registered in Delaware, USA</p>
              <p>Delaware State File No. 10381659</p>
              <p className="mt-2">
                Registered Agent Address:
                <br />
                16192 Coastal Highway, Lewes, DE 19958
              </p>
            </div>
          </div>

          {/* COLUMN 1: SUPPORT */}
          <div>
            <h4 className="mb-4 font-serif text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Support
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/info/ai-support" className="transition-colors hover:text-white">
                  AI Customer Service{' '}
                  <span className="block text-[10px] text-gray-600 sm:inline">
                    — 24/7 Automated Assistance
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/info/support-ticket" className="transition-colors hover:text-white">
                  Open Support Ticket
                </Link>
              </li>
              <li>
                <Link href="/info/faq" className="transition-colors hover:text-white">
                  FAQ & Knowledge Base
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: COMPANY */}
          <div>
            <h4 className="mb-4 font-serif text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/info/about-us" className="transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/info/terms" className="transition-colors hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/info/privacy" className="transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/info/compliance" className="transition-colors hover:text-white">
                  Compliance & AML / KYC
                </Link>
              </li>
              <li className="hidden md:block">
                <Link href="/info/secure-trading" className="transition-colors hover:text-white">
                  Secure Trading Environment
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICES (Hidden on Mobile as per client's request) */}
          <div className="hidden md:block">
            <h4 className="mb-4 font-serif text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/info/live-price-feed" className="transition-colors hover:text-white">
                  Live Gold Price Feed
                </Link>
              </li>
              <li>
                <Link href="/info/verification" className="transition-colors hover:text-white">
                  Certified Jewelry Verification
                </Link>
              </li>
              <li>
                <Link href="/info/buyer-protection" className="transition-colors hover:text-white">
                  Insurance & Buyer Protection
                </Link>
              </li>
              <li>
                <Link href="/info/global-checkout" className="transition-colors hover:text-white">
                  Seamless Global Checkout
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 border-t border-gray-800 pt-8 text-center">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Gold Nexus LLC — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
