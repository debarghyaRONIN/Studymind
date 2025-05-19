import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import LearningOverview from '@/components/analytics/learning-overview';
import TopicMastery from '@/components/analytics/topic-mastery';
import StudyHabits from '@/components/analytics/study-habits';
import KnowledgeGaps from '@/components/analytics/knowledge-gaps';

export default function AnalyticsPage() {
  return (
    <div className="container px-4 py-6 md:py-10">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-tight">Analytics Dashboard</h1>
        <p className="text-muted-foreground">
          Track your learning progress and identify areas for improvement
        </p>
      </div>
      
      <div className="mt-6 space-y-6">
        <LearningOverview />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TopicMastery />
          <StudyHabits />
        </div>
        
        <KnowledgeGaps />
      </div>
    </div>
  );
}