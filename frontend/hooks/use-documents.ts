import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { documentsApi, Document, CreateDocumentData } from '@/lib/api/documents';
import { useToast } from '@/components/ui/use-toast';

export function useDocuments() {
  return useQuery({
    queryKey: ['documents'],
    queryFn: documentsApi.getAllDocuments,
  });
}

export function useDocument(id: string) {
  return useQuery({
    queryKey: ['documents', id],
    queryFn: () => documentsApi.getDocument(id),
    enabled: !!id,
  });
}

export function useCreateDocument() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: CreateDocumentData) => documentsApi.createDocument(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      toast({
        title: 'Document created',
        description: 'Your document has been created successfully.'
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.response?.data?.error || 'Could not create document',
        variant: 'destructive'
      });
    }
  });
}

export function useUpdateDocument(id: string) {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: Partial<CreateDocumentData>) => documentsApi.updateDocument(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents', id] });
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      toast({
        title: 'Document updated',
        description: 'Your changes have been saved.'
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.response?.data?.error || 'Could not update document',
        variant: 'destructive'
      });
    }
  });
}

export function useDeleteDocument() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: documentsApi.deleteDocument,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      toast({
        title: 'Document deleted',
        description: 'The document has been deleted successfully.'
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.response?.data?.error || 'Could not delete document',
        variant: 'destructive'
      });
    }
  });
}
