import { TrendingUp } from 'lucide-react';

export const GoldTicker = () => {
  return (
    <div className="border-b border-gray-200 bg-[#F9FAFB] py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-medium text-[#1a202c]">Gold</span>
            <span className="font-semibold text-[#1a202c]">$2,047.50</span>
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="font-medium text-green-600">+1.2%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
