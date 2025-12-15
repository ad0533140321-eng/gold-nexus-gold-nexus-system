import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  isLoading: boolean;
  checkAuth: () => Promise<void>;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  isLoading: true,
  checkAuth: async () => {
    set({ isLoading: true });
    try {
      // 1. Try to get user data with the current accessToken
      const meResponse = await fetch('/api/users/me');

      if (meResponse.ok) {
        // SUCCESS: Access token is valid.
        set({ isLoggedIn: true });
        return;
      }

      if (meResponse.status === 401) {
        // INFO: Access token is stale or invalid. Try to refresh.
        const refreshResponse = await fetch('/api/auth/refresh', { method: 'POST' });

        if (refreshResponse.ok) {
          // SUCCESS: Refresh was successful. A new accessToken is now in the cookies.
          set({ isLoggedIn: true });
          return;
        }
      }
       
      // FAILURE: All attempts failed. User is not logged in.
      set({ isLoggedIn: false });

    } catch (error) {
      console.error('Auth check failed', error);
      set({ isLoggedIn: false });
    } finally {
      set({ isLoading: false });
    }
  },
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
}));
