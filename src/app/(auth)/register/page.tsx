// app/(auth)/register/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#F9F9F9] py-12">
      <Card className="w-full max-w-sm border-neutral-300 bg-white shadow-none rounded-sm">
        <CardHeader className="text-center">
          <CardTitle className="font-serif text-3xl tracking-tight">Create an Account</CardTitle>
          <CardDescription className="pt-2">
            Join Gold Nexus to buy and sell gold assets.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input
              id="full-name"
              placeholder="John Smith"
              required
              className="rounded-md border-neutral-300"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              className="rounded-md border-neutral-300"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              className="rounded-md border-neutral-300"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="country">Country</Label>
            <Select>
              <SelectTrigger className="w-full rounded-md border-neutral-300 text-neutral-600">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="gb">United Kingdom</SelectItem>
                {/* Add other countries as needed */}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone-number">Phone Number</Label>
            <Input
              id="phone-number"
              placeholder="(555) 000-0000"
              required
              className="rounded-md border-neutral-300"
            />
          </div>
          <Button
            type="submit"
            className="w-full rounded-md bg-black font-semibold text-white hover:bg-neutral-800"
          >
            Create Account
          </Button>
          <div className="text-center text-sm text-neutral-600">
            Already have an account?{' '}
            <Link href="/login" className="font-bold text-black hover:underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
