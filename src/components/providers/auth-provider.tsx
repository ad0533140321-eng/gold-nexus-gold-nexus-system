
'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/lib/store/auth';
import { GlobalLoader } from '@/components/ui/global-loader';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { checkAuth, isLoading } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isLoading) {
    return <GlobalLoader />;
  }

  return <>{children}</>;
}
