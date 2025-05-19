import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { scheduleApi, CreateStudySessionData, StudySession } from '@/lib/api/schedule';
import { useToast } from '@/components/ui/use-toast';

export function useStudySessions() {
  return useQuery({
    queryKey: ['study-sessions'],
    queryFn: scheduleApi.getAllSessions,
  });
}

export function useStudySession(id: string) {
  return useQuery({
    queryKey: ['study-sessions', id],
    queryFn: () => scheduleApi.getSession(id),
    enabled: !!id,
  });
}

export function useCreateStudySession() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: CreateStudySessionData) => scheduleApi.createSession(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['study-sessions'] });
      toast({
        title: 'Session created',
        description: 'Your study session has been scheduled.'
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.response?.data?.error || 'Could not create study session',
        variant: 'destructive'
      });
    }
  });
}

export function useUpdateStudySession(id: string) {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: Partial<StudySession>) => scheduleApi.updateSession(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['study-sessions', id] });
      queryClient.invalidateQueries({ queryKey: ['study-sessions'] });
      toast({
        title: 'Session updated',
        description: 'Your changes have been saved.'
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.response?.data?.error || 'Could not update study session',
        variant: 'destructive'
      });
    }
  });
}

export function useDeleteStudySession() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: scheduleApi.deleteSession,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['study-sessions'] });
      toast({
        title: 'Session deleted',
        description: 'The study session has been deleted.'
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.response?.data?.error || 'Could not delete study session',
        variant: 'destructive'
      });
    }
  });
}
