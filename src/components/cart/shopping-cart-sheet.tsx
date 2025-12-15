// components/cart/shopping-cart-sheet.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from '@/lib/store/cart';
import { formatCurrency } from '@/lib/utils/formatCurrency';

export function ShoppingCartSheet() {
  const { items, removeItem, updateQuantity } = useCartStore();

  const subtotal = items.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative rounded-full p-2 transition-colors hover:bg-gray-100">
          <ShoppingCart className="h-5 w-5 text-[#1a202c]" />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">
            {totalItems}
          </span>
        </button>
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col bg-white p-6 sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl">Shopping Cart</SheetTitle>
        </SheetHeader>

        {items.length > 0 ? (
          <>
            <ScrollArea className="-mr-4 flex-grow pr-4">
              <div className="my-6 flex flex-col gap-6">
                {/* 3. Map over real items from the store */}
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border bg-gray-100">
                      <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm font-semibold">{formatCurrency(Number(item.price))}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center rounded-md border border-gray-300">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-r-none"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-l-none"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs text-gray-500 hover:text-red-600"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="mr-1.5 h-3.5 w-3.5" /> Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <SheetFooter className="mt-auto flex-col space-y-4 border-t pt-6">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <SheetClose asChild>
                <Link href="/checkout" className="w-full">
                  <Button
                    size="lg"
                    className="w-full rounded-md bg-black font-semibold text-white hover:bg-neutral-800"
                  >
                    Proceed to Checkout
                  </Button>
                </Link>
              </SheetClose>
            </SheetFooter>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4">
            <ShoppingCart className="h-16 w-16 text-gray-300" />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Your cart is empty</h3>
              <p className="text-sm text-gray-500">Add items to your cart to get started.</p>
            </div>
            <SheetClose asChild>
              <Link href="/marketplace">
                <Button className="rounded-md bg-black font-semibold text-white hover:bg-neutral-800">
                  Start Shopping
                </Button>
              </Link>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
