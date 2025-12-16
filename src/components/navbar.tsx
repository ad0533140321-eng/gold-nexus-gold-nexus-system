'use client';

import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GoldTicker } from '@/components/GoldTicker';
import Link from 'next/link';
import { ShoppingCartSheet } from '@/components/cart/shopping-cart-sheet';
import { useAuthStore } from '@/lib/store/auth';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
  const { isLoggedIn, logout, isLoading } = useAuthStore();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      logout(); // Update global state
      router.push('/'); // Redirect to home
    }
  };

  return (
    <div className="sticky top-0 z-50">
      <GoldTicker />
      <nav className="border-b border-gray-200 bg-white shadow-sm">
        <div className="container mx-auto pl-4 md:px-4">
          <div className="flex h-16 items-center justify-between">
            {/* --- LEFT SIDE: LOGO --- */}
            <Link href="/">
              <div className="font-serif text-2xl font-bold text-[#1a202c]">Gold Nexus</div>
            </Link>

            {/* --- CENTER: DESKTOP NAVIGATION --- */}
            <div
              className={`hidden items-center gap-8 md:flex ${
                isLoading ? 'opacity-0' : 'animate-fadeIn'
              }`}
            >
              <Link
                href="/marketplace"
                className="font-medium text-[#1a202c] transition-colors hover:text-[#D4AF37]"
              >
                Buy Gold
              </Link>
              <Link
                href="/sell-gold"
                className="font-medium text-[#1a202c] transition-colors hover:text-[#D4AF37]"
              >
                Sell Gold
              </Link>
            </div>

            {/* --- RIGHT SIDE: ACTIONS --- */}
            <div
              className={`flex items-center gap-2 sm:gap-4 ${
                isLoading ? 'opacity-0' : 'animate-fadeIn'
              }`}
            >
              <div className="hidden h-10 items-center gap-4 md:flex">
                {isLoggedIn ? (
                  <>
                    <Link href="/profile">
                      <Button
                        variant="outline"
                        className="rounded-md border-gray-900 bg-transparent text-[#1a202c] hover:bg-gray-900 hover:text-white"
                      >
                        My Account
                      </Button>
                    </Link>
                    <Button
                      onClick={handleLogout}
                      variant="dark"
                      className="rounded-md"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <Link href="/login">
                    <Button
                      variant="outline"
                      className="rounded-md border-gray-900 bg-transparent text-[#1a202c] hover:bg-gray-900 hover:text-white"
                    >
                      Login
                    </Button>
                  </Link>
                )}
              </div>

              <ShoppingCartSheet />

              {/* HAMBURGER MENU - MOBILE ONLY */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6 text-[#1a202c]" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-4/5 bg-white p-6">
                    <div
                      className={`flex flex-col space-y-6 pt-10 ${
                        isLoading ? 'opacity-0' : 'animate-fadeIn'
                      }`}
                    >
                      {isLoggedIn ? (
                        <>
                          <SheetClose asChild>
                            <Link href="/profile" className="text-lg font-medium text-[#1a202c]">
                              My Account
                            </Link>
                          </SheetClose>
                        </>
                      ) : (
                        <SheetClose asChild>
                          <Link href="/login" className="text-lg font-medium text-[#1a202c]">
                            Login
                          </Link>
                        </SheetClose>
                      )}
                      <SheetClose asChild>
                        <Link href="/marketplace" className="text-lg font-medium text-[#1a202c]">
                          Buy Gold
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/sell-gold" className="text-lg font-medium text-[#1a202c]">
                          Sell Gold
                        </Link>
                      </SheetClose>
                      {isLoggedIn && (
                        <SheetClose asChild>
                          <button
                            onClick={handleLogout}
                            className="text-lg text-left font-medium text-red-600"
                          >
                            Logout
                          </button>
                        </SheetClose>
                      )}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};