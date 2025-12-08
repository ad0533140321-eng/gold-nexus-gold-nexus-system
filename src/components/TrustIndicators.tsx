import { Shield, Award, Zap } from 'lucide-react';

const items = [
  {
    title: "Secure Shipping",
    desc: "Fully insured delivery with discrete packaging and real-time tracking for complete peace of mind.",
    Icon: Shield,
  },
  {
    title: "Certified Authenticity",
    desc: "Every product comes with official certification from recognized mints and assayers worldwide.",
    Icon: Award,
  },
  {
    title: "Instant Liquidity",
    desc: "Sell your gold anytime at competitive market rates with immediate payment processing.",
    Icon: Zap,
  },
];

export const TrustIndicators = () => {
  return (
      <section className="bg-[#F9FAFB] py-20">
        <div className="container mx-auto px-4 max-w-2xl flex flex-col gap-24">

          {items.map((item, i) => {
            const reversed = i % 2 === 1; // zig-zag pattern

            return (
                <div
                    key={i}
                    className={`
                flex flex-col items-center gap-10 text-center
                md:flex-row md:items-center md:text-left
                ${reversed ? "md:flex-row-reverse" : ""}
              `}
                >
                  {/* TEXT */}
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold text-[#1a202c] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#1a202c]/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* ICON CARD */}
                  <div className={`flex-1 flex justify-center ${reversed ? "md:justify-start" : "md:justify-end"}`}>
                    <div className="w-48 aspect-square rounded-xl overflow-hidden relative">

                      {/* Radial background */}
                      <div className="absolute inset-0 bg-radial-gold from-yellow-100/80 to-transparent" />

                      {/* Frosted card */}
                      <div className="relative border border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm shadow-lg flex items-center justify-center h-full">
                        <item.Icon className="w-20 h-20 text-[#C99738] drop-shadow-[0_2px_5px_rgba(184,134,11,0.2)]" />
                      </div>
                    </div>
                  </div>
                </div>
            );
          })}

        </div>
      </section>
  );
};
