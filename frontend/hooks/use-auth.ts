'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authApi, UserCredentials, RegisterData, AuthResponse } from '@/lib/api/auth';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';

export function useLogin() {
  const router = useRouter();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (credentials: UserCredentials) => authApi.login(credentials),
    onSuccess: (data: AuthResponse) => {
      // Store the token
      localStorage.setItem('token', data.token);
      
      // Update the profile cache
      queryClient.setQueryData(['profile'], {
        _id: data._id,
        name: data.name,
        email: data.email
      });
      
      // Redirect without showing toast
      router.push('/dashboard');
    },
    onError: (error: any) => {
      toast({
        title: 'Login failed',
        description: error.response?.data?.error || 'Please try again',
        variant: 'destructive'
      });
    }
  });
}

export function useRegister() {
  const router = useRouter();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: RegisterData) => authApi.register(data),
    onSuccess: (data: AuthResponse) => {
      // Store the token
      localStorage.setItem('token', data.token);
      
      // Update the profile cache
      queryClient.setQueryData(['profile'], {
        _id: data._id,
        name: data.name,
        email: data.email
      });
      
      // Redirect without showing toast
      router.push('/dashboard');
    },
    onError: (error: any) => {
      toast({
        title: 'Registration failed',
        description: error.response?.data?.error || 'Please try again',
        variant: 'destructive'
      });
    }
  });
}

export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: authApi.getProfile,
    retry: false
  });
}

export function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();
  
  return () => {
    localStorage.removeItem('token');
    queryClient.clear();
    router.push('/login');
  };
}
