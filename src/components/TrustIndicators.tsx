import { Shield, Award, Zap } from 'lucide-react';

export const TrustIndicators = () => {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/10">
              <Shield className="h-8 w-8 text-[#D4AF37]" />
            </div>
            <h3 className="mb-3 font-serif text-2xl font-bold text-[#1a202c]">Secure Shipping</h3>
            <p className="leading-relaxed text-[#1a202c]/70">
              Fully insured delivery with discrete packaging and real-time tracking for complete
              peace of mind.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/10">
              <Award className="h-8 w-8 text-[#D4AF37]" />
            </div>
            <h3 className="mb-3 font-serif text-2xl font-bold text-[#1a202c]">
              Certified Authenticity
            </h3>
            <p className="leading-relaxed text-[#1a202c]/70">
              Every product comes with official certification from recognized mints and assayers
              worldwide.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/10">
              <Zap className="h-8 w-8 text-[#D4AF37]" />
            </div>
            <h3 className="mb-3 font-serif text-2xl font-bold text-[#1a202c]">Instant Liquidity</h3>
            <p className="leading-relaxed text-[#1a202c]/70">
              Sell your gold anytime at competitive market rates with immediate payment processing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
