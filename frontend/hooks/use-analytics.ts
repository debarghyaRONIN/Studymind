import { useQuery } from '@tanstack/react-query';
import { analyticsApi } from '@/lib/api/analytics';

export function useStudyHabits() {
  return useQuery({
    queryKey: ['analytics', 'study-habits'],
    queryFn: analyticsApi.getStudyHabits,
  });
}

export function useTopicMastery() {
  return useQuery({
    queryKey: ['analytics', 'topic-mastery'],
    queryFn: analyticsApi.getTopicMastery,
  });
}

export function useLearningOverview() {
  return useQuery({
    queryKey: ['analytics', 'learning-overview'],
    queryFn: analyticsApi.getLearningOverview,
  });
}

export function useKnowledgeGaps() {
  return useQuery({
    queryKey: ['analytics', 'knowledge-gaps'],
    queryFn: analyticsApi.getKnowledgeGaps,
  });
}
