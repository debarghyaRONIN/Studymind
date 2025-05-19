"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Dummy data for knowledge gaps
const knowledgeGaps = [
  {
    id: '1',
    topic: 'Advanced SQL Joins',
    category: 'Databases',
    description: 'You struggle with complex multi-table joins and subqueries.',
    impact: 'High',
    recommendedResources: [
      'SQL Mastery Course, Chapter 7',
      'Practice with the TPC-H benchmark queries',
    ],
  },
  {
    id: '2',
    topic: 'Neural Network Backpropagation',
    category: 'Machine Learning',
    description: 'You understand the concept but have difficulty with the mathematics.',
    impact: 'Medium',
    recommendedResources: [
      'Deep Learning Specialization, Course 2',
      'Interactive backpropagation calculator',
    ],
  },
  {
    id: '3',
    topic: 'Dynamic Programming',
    category: 'Algorithms',
    description: 'You need to practice more complex DP problems to solidify understanding.',
    impact: 'High',
    recommendedResources: [
      'Algorithms Illuminated, Part 3',
      'Practice medium/hard DP problems from the Algorithms collection',
    ],
  },
];

// Impact badge colors
const impactColors = {
  High: 'bg-destructive/10 text-destructive',
  Medium: 'bg-amber-500/10 text-amber-500',
  Low: 'bg-emerald-500/10 text-emerald-500',
};

export default function KnowledgeGaps() {
  const { toast } = useToast();

  const handleResourceClick = (resource: string) => {
    toast({
      title: "Resource Selected",
      description: `You selected "${resource}"`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Knowledge Gaps</CardTitle>
        <CardDescription>
          Areas that need improvement based on your study patterns
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {knowledgeGaps.map((gap) => (
            <div key={gap.id} className="rounded-lg border p-4 space-y-3">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-medium">{gap.topic}</h3>
                  <p className="text-sm text-muted-foreground">{gap.category}</p>
                </div>
                <Badge className={impactColors[gap.impact as keyof typeof impactColors]}>
                  {gap.impact} Impact
                </Badge>
              </div>
              
              <p className="text-sm">{gap.description}</p>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Recommended Resources:</h4>
                <div className="flex flex-wrap gap-2">
                  {gap.recommendedResources.map((resource, i) => (
                    <Button 
                      key={i} 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleResourceClick(resource)}
                    >
                      {resource}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}