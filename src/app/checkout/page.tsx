'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Lock, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/lib/store/cart';
import { formatCurrency } from '@/lib/utils/formatCurrency';
import { CountryDropdown, Country } from '@/components/ui/country-dropdown';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { countrySchema } from '@/lib/zod-schemas/countrySchema';
import { Skeleton } from '@/components/ui/skeleton';

const shippingSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  address: z.string().min(5, 'A valid address is required'),
  apartment: z.string().optional(),
  city: z.string().min(2, 'City is required'),
  country: countrySchema,
  state: z.string().min(2, 'State / Province is required'),
  postalCode: z.string().min(4, 'A valid postal code is required'),
});

type ShippingFormValues = z.infer<typeof shippingSchema>;

export default function CheckoutPage() {
  const [isHydrated, setIsHydrated] = useState(false);
  const { items } = useCartStore();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsHydrated(true);
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ShippingFormValues>();

  const subtotal = items.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
  const total = subtotal;

  const onConfirmAndPay = (data: ShippingFormValues) => {
    console.log('Shipping Info:', data);
    console.log('Cart Items:', items);
    // Next step: API call to create order will happen here
  };

  if (!isHydrated) {
    return <CheckoutSkeleton />;
  }

  if (isHydrated && items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="min-h-screen w-full bg-[#F9F9F9] px-4 py-12 sm:px-6 lg:px-8">
      <main className="mx-auto max-w-6xl">
        <h1 className="mb-8 font-serif text-4xl font-medium text-black sm:text-5xl">Checkout</h1>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <Card className="border-neutral-200 bg-white shadow-none">
            <CardHeader>
              <CardTitle className="font-sans text-xl font-semibold">
                Shipping Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Added form ID */}
              <form
                id="shipping-form"
                onSubmit={handleSubmit(onConfirmAndPay)}
                className="space-y-6"
              >
                {/* --- THIS IS THE FULL, CORRECTED FORM --- */}
                <div className="space-y-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input
                    id="full-name"
                    placeholder="John Smith"
                    {...register('fullName')}
                    className="rounded-md border-neutral-300"
                  />
                  {errors.fullName && (
                    <p className="text-sm text-red-500">{errors.fullName.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    placeholder="123 Main Street"
                    {...register('address')}
                    className="rounded-md border-neutral-300"
                  />
                  {errors.address && (
                    <p className="text-sm text-red-500">{errors.address.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apartment">Apartment / Suite (optional)</Label>
                  <Input
                    id="apartment"
                    placeholder="Apt 4B"
                    {...register('apartment')}
                    className="rounded-md border-neutral-300"
                  />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      placeholder="New York"
                      {...register('city')}
                      className="rounded-md border-neutral-300"
                    />
                    {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Controller
                      name="country"
                      control={control}
                      render={({ field }) => (
                        <CountryDropdown
                          onChange={(country: Country) => field.onChange(country)}
                          value={field.value}
                        />
                      )}
                    />
                    {errors.country && (
                      <p className="text-sm text-red-500">
                        {typeof errors.country.message === 'string'
                          ? errors.country.message
                          : 'Please select a country'}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="state">State / Province</Label>
                    <Input
                      id="state"
                      placeholder="NY"
                      {...register('state')}
                      className="rounded-md border-neutral-300"
                    />
                    {errors.state && <p className="text-sm text-red-500">{errors.state.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postal-code">Postal Code</Label>
                    <Input
                      id="postal-code"
                      placeholder="10001"
                      {...register('postalCode')}
                      className="rounded-md border-neutral-300"
                    />
                    {errors.postalCode && (
                      <p className="text-sm text-red-500">{errors.postalCode.message}</p>
                    )}
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="border-neutral-200 bg-white shadow-none">
            <CardHeader>
              <CardTitle className="font-sans text-xl font-semibold">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border bg-gray-100">
                        <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-neutral-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-semibold">
                      {formatCurrency(Number(item.price) * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-neutral-600">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm text-neutral-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between text-lg font-bold">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
              <Button
                form="shipping-form"
                type="submit"
                size="lg"
                className="w-full rounded-md bg-black font-semibold text-white hover:bg-neutral-800"
                disabled={isSubmitting}
              >
                <Lock className="mr-2 h-4 w-4" />
                {isSubmitting ? 'Processing...' : 'Confirm and Pay'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

const EmptyCart = () => (
  <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
    <ShoppingCart className="h-20 w-20 text-gray-300" />
    <div>
      <h2 className="font-serif text-3xl font-medium">Your Cart is Empty</h2>
      <p className="mt-2 text-muted-foreground">You can&#39;t proceed to checkout without any items.</p>
    </div>
    <Link href="/marketplace">
      <Button className="rounded-md bg-black font-semibold text-white hover:bg-neutral-800">
        Return to Marketplace
      </Button>
    </Link>
  </div>
);

const CheckoutSkeleton = () => (
  <div className="min-h-screen w-full animate-pulse bg-[#F9F9F9] px-4 py-12 sm:px-6 lg:px-8">
    <main className="mx-auto max-w-6xl">
      <Skeleton className="mb-8 h-12 w-1/3" />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
        <Card className="border-neutral-200 bg-white shadow-none">
          <CardHeader>
            <Skeleton className="h-8 w-1/2" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
            {/* --- THIS IS THE FIX: REMOVED THE STRAY </form> TAG --- */}
          </CardContent>
        </Card>
        <Card className="border-neutral-200 bg-white shadow-none">
          <CardHeader>
            <Skeleton className="h-8 w-1/2" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Skeleton className="h-16 w-16 rounded-md" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Skeleton className="h-16 w-16 rounded-md" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
            <Separator />
            <Skeleton className="h-10 w-full" />
            <Separator />
            <Skeleton className="h-12 w-full" />
          </CardContent>
        </Card>
      </div>
    </main>
  </div>
);
