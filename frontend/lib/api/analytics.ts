import api from './axios-config';

export interface StudyHabits {
  totalSessions: number;
  averageDuration: number;
  timeOfDayDistribution: {
    morning: number;
    afternoon: number;
    evening: number;
    night: number;
  };
}

export interface TopicMastery {
  topicId: string;
  topic: string;
  timeSpent: number;
  sessionsCount: number;
}

export interface LearningOverview {
  dailyProgress: Record<string, number>;
  totalSessions: number;
  totalTimeSpent: number;
}

export interface KnowledgeGap {
  documentId: string;
  title: string;
  sessionsCount: number;
  lastStudied: string | null;
  needsReview: boolean;
}

export const analyticsApi = {
  getStudyHabits: async (): Promise<StudyHabits> => {
    const { data } = await api.get('/analytics/study-habits');
    return data;
  },

  getTopicMastery: async (): Promise<TopicMastery[]> => {
    const { data } = await api.get('/analytics/topic-mastery');
    return data;
  },

  getLearningOverview: async (): Promise<LearningOverview> => {
    const { data } = await api.get('/analytics/learning-overview');
    return data;
  },

  getKnowledgeGaps: async (): Promise<KnowledgeGap[]> => {
    const { data } = await api.get('/analytics/knowledge-gaps');
    return data;
  }
};
