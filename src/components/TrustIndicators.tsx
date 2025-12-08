import Image from "next/image";
import shield from '@/assets/mocks/shield.png';
import medal from '@/assets/mocks/medal.png';
import zap from '@/assets/mocks/zap.png';

const items = [
  {
    title: 'Secure Shipping',
    desc: 'Fully insured delivery with discrete packaging and real-time tracking for complete peace of mind.',
    image: shield,
  },
  {
    title: 'Certified Authenticity',
    desc: 'Every product comes with official certification from recognized mints and assayers worldwide.',
    image: medal,
  },
  {
    title: 'Instant Liquidity',
    desc: 'Sell your gold anytime at competitive market rates with immediate payment processing.',
    image: zap,
  },
];

export const TrustIndicators = () => {
  return (
    <section className="bg-gray-950 py-20">
      <div className="container mx-auto flex max-w-3xl flex-col gap-16 px-4">
        {items.map((item, i) => {
          const reversed = i % 2 === 1;

          return (
            <div
              key={i}
              className={`flex flex-col gap-8 rounded-2xl bg-gradient-to-b border border-gray-700 from-[#4F411B] to-[#1A180F] p-8 pb-0 shadow-sm md:flex-row md:items-center md:justify-between ${reversed ? 'md:flex-row-reverse' : ''} `}
            >
              {/* TEXT */}
              <div className="flex-1 text-left">
                <h3 className="mb-3 font-serif text-2xl tracking-wide font-black text-white">{item.title}</h3>
                <p className="leading-relaxed text-white/70">{item.desc}</p>
              </div>
              <div className=" flex-1 flex justify-center md:justify-end">
                <div className="max-w-[500px] w-full">
                  <Image src={item.image} alt="shield" className="w-full h-auto" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
