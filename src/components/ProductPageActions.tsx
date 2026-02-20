'use client';

import { Product } from '@/generated/prisma/client';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store/cart';
import { formatCurrency } from '@/lib/utils/formatCurrency';

interface ProductPageActionsProps {
  product: Product;
}

export function ProductPageActions({ product }: ProductPageActionsProps) {
  const { addItem } = useCartStore();

  return (
    <div className="mt-8">
      <p className="text-xs uppercase text-muted-foreground">Live Ask Price</p>
      <p className="font-sans text-5xl font-bold text-foreground">
        {formatCurrency(Number(product.price))}
      </p>
      <Button size="lg" className="mt-6 w-full font-bold" onClick={() => addItem(product)}>
        Add to Order
      </Button>
      <div className="mt-4 flex flex-col items-center gap-1 text-center text-xs text-muted-foreground sm:flex-row sm:justify-center sm:gap-2">
        <span>U.S. registered company</span>
        <span className="hidden sm:inline">•</span>
        <span>Secure checkout</span>
        <span className="hidden sm:inline">•</span>
        <span>Insured U.S. shipping</span>
      </div>
    </div>
  );
}
