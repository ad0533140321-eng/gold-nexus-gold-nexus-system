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
            <div className="block mt-6 w-full aspect-[4/3] rounded-xl overflow-hidden relative group">
              {/* 1. Subtle Radial Background "Sunbeam" */}
              <div className="absolute inset-0 z-0 bg-radial-gold from-yellow-100/80 to-transparent transition-opacity" />

              {/* 2. The Content Container with a crisp border */}
              <div className="relative z-10 w-full h-full border border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm shadow-lg">
                <div className="flex h-full w-full items-center justify-center">
                  {/* 3. The Icon: Dark Gold with a subtle glow */}
                  <Award className="w-24 h-24 text-[#C99738] drop-shadow-[0_2px_5px_rgba(184,134,11,0.2)]" />
                </div>
              </div>
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
