'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';
import { authApi } from '@/lib/api/auth';

interface User {
  _id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();

  // Get the user data from the cache
  const user = queryClient.getQueryData<User>(['profile']);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    // If there's no token and we're on a protected route, redirect to login
    if (!token && !isPublicRoute(pathname)) {
      router.push('/login');
      setIsLoading(false);
      return;
    }

    // If there's a token but no user data, fetch the profile
    if (token && !user) {
      authApi.getProfile()
        .then((userData) => {
          queryClient.setQueryData(['profile'], userData);
        })
        .catch(() => {
          localStorage.removeItem('token');
          if (!isPublicRoute(pathname)) {
            router.push('/login');
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [pathname, queryClient, router, user]);

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

// Helper function to check if a route is public
function isPublicRoute(pathname: string) {
  const publicRoutes = ['/', '/login', '/signup'];
  return publicRoutes.includes(pathname);
}
