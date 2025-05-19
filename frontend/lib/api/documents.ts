import api from './axios-config';

export interface Document {
  _id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
}

export interface CreateDocumentData {
  title: string;
  content: string;
  tags?: string[];
}

export const documentsApi = {
  getAllDocuments: async (): Promise<Document[]> => {
    const { data } = await api.get('/documents');
    return data;
  },

  getDocument: async (id: string): Promise<Document> => {
    const { data } = await api.get(`/documents/${id}`);
    return data;
  },

  createDocument: async (documentData: CreateDocumentData): Promise<Document> => {
    const { data } = await api.post('/documents', documentData);
    return data;
  },

  updateDocument: async (id: string, documentData: Partial<CreateDocumentData>): Promise<Document> => {
    const { data } = await api.put(`/documents/${id}`, documentData);
    return data;
  },

  deleteDocument: async (id: string): Promise<void> => {
    await api.delete(`/documents/${id}`);
  }
};
