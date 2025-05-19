"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function TopicMastery() {
  // Sample data for topic mastery
  const topics = [
    { name: 'Neural Networks', progress: 85, category: 'Machine Learning' },
    { name: 'SQL Optimization', progress: 72, category: 'Databases' },
    { name: 'Binary Trees', progress: 90, category: 'Algorithms' },
    { name: 'GraphQL', progress: 60, category: 'Web Development' },
    { name: 'System Design', progress: 65, category: 'Architecture' },
  ];

  // Function to determine progress color based on value
  const getProgressColor = (value: number) => {
    if (value >= 80) return 'bg-emerald-500';
    if (value >= 60) return 'bg-amber-500';
    return 'bg-destructive';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Topic Mastery</CardTitle>
        <CardDescription>
          Your progress across key topics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {topics.map((topic, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between">
                <div>
                  <div className="text-sm font-medium">{topic.name}</div>
                  <div className="text-xs text-muted-foreground">{topic.category}</div>
                </div>
                <div className="text-sm font-medium">{topic.progress}%</div>
              </div>
              <Progress 
                value={topic.progress} 
                className={`h-2 ${getProgressColor(topic.progress)}`} 
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}