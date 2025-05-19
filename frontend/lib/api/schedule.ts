import api from './axios-config';

export interface StudySession {
  _id: string;
  title: string;
  description?: string;
  documentId?: string;
  startTime: string;
  duration: number;
  completed: boolean;
  notes?: string;
  progress: number;
  tags?: string[];
}

export interface CreateStudySessionData {
  title: string;
  description?: string;
  documentId?: string;
  startTime: string;
  duration: number;
  tags?: string[];
}

export const scheduleApi = {
  getAllSessions: async (): Promise<StudySession[]> => {
    const { data } = await api.get('/schedule');
    return data;
  },

  getSession: async (id: string): Promise<StudySession> => {
    const { data } = await api.get(`/schedule/${id}`);
    return data;
  },

  createSession: async (sessionData: CreateStudySessionData): Promise<StudySession> => {
    const { data } = await api.post('/schedule', sessionData);
    return data;
  },

  updateSession: async (id: string, sessionData: Partial<StudySession>): Promise<StudySession> => {
    const { data } = await api.put(`/schedule/${id}`, sessionData);
    return data;
  },

  deleteSession: async (id: string): Promise<void> => {
    await api.delete(`/schedule/${id}`);
  }
};
