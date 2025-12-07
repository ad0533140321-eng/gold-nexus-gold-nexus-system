import { Button } from '@/components/ui/button';
import Image, {StaticImageData} from "next/image";

interface ProductCardProps {
  name: string;
  weight: string;
  price: string;
  purity: string;
  image: string | StaticImageData;
}

export const ProductCard = ({ name, weight, price, purity, image }: ProductCardProps) => {
  return (
    <div className="group overflow-hidden rounded-lg border border-border/50 bg-card shadow-subtle transition-all duration-300 hover:shadow-card">
      {/* Image Container */}
      <div className="flex aspect-square items-center justify-center overflow-hidden bg-secondary/50 p-6">
        <Image
          src={image}
          alt={name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
            {purity}
          </span>
          <span className="font-sans text-xs text-muted-foreground">{weight}</span>
        </div>

        <h3 className="mb-3 font-serif text-lg font-medium text-foreground">{name}</h3>

        <div className="flex items-center justify-between">
          <span className="font-sans text-xl font-bold text-foreground">{price}</span>
          <Button variant="dark" size="sm" className="hover:-translate-y-0.5 active:translate-y-0">Buy Now</Button>
        </div>
      </div>
    </div>
  );
};
