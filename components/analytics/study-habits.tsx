"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart } from '@/components/ui/chart';

export default function StudyHabits() {
  // Sample data for study habits
  const timeOfDayData = [
    { name: 'Morning', value: 35 },
    { name: 'Afternoon', value: 45 },
    { name: 'Evening', value: 15 },
    { name: 'Night', value: 5 },
  ];

  const studyLocationData = [
    { name: 'Home', value: 60 },
    { name: 'Library', value: 25 },
    { name: 'Cafe', value: 10 },
    { name: 'Other', value: 5 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Study Habits</CardTitle>
        <CardDescription>
          Analysis of your study patterns
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Study Time Distribution</h3>
            <div className="h-[160px]">
              <PieChart
                data={timeOfDayData}
                category="value"
                index="name"
                valueFormatter={(value) => `${value}%`}
                chartColors={[
                  'hsl(var(--chart-1))',
                  'hsl(var(--chart-2))',
                  'hsl(var(--chart-3))',
                  'hsl(var(--chart-4))',
                ]}
              />
            </div>
          </div>

          <div className="pt-4 border-t">
            <h3 className="text-sm font-medium mb-2">Study Location Distribution</h3>
            <div className="h-[160px]">
              <PieChart
                data={studyLocationData}
                category="value"
                index="name"
                valueFormatter={(value) => `${value}%`}
                chartColors={[
                  'hsl(var(--chart-5))',
                  'hsl(var(--chart-4))',
                  'hsl(var(--chart-3))',
                  'hsl(var(--chart-2))',
                ]}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}