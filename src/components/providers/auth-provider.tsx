'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/lib/store/auth';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
    // Periodically check auth to keep the session alive (refresh token if needed)
    // Production: 14 minutes interval for 15m token expiry
    const interval = setInterval(
      () => {
        checkAuth();
      },
      14 * 60 * 1000
    ); // 14 minutes

    return () => clearInterval(interval);
  }, [checkAuth]);

  return <>{children}</>;
}
