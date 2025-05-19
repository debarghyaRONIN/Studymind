"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, LineChart, PieChart } from '@/components/ui/chart';

export default function StudyProgress() {
  // Sample data for charts
  const barChartData = [
    { name: 'Mon', hours: 2.5 },
    { name: 'Tue', hours: 3.8 },
    { name: 'Wed', hours: 1.2 },
    { name: 'Thu', hours: 4.5 },
    { name: 'Fri', hours: 3.1 },
    { name: 'Sat', hours: 1.9 },
    { name: 'Sun', hours: 0.8 },
  ];

  const lineChartData = [
    { date: 'Week 1', score: 65 },
    { date: 'Week 2', score: 72 },
    { date: 'Week 3', score: 80 },
    { date: 'Week 4', score: 87 },
    { date: 'Week 5', score: 75 },
    { date: 'Week 6', score: 93 },
  ];

  const pieChartData = [
    { name: 'Machine Learning', value: 40 },
    { name: 'Databases', value: 30 },
    { name: 'Algorithms', value: 20 },
    { name: 'Other', value: 10 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Study Progress</CardTitle>
        <CardDescription>
          Track your study habits and progress over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="weekly">Weekly Activity</TabsTrigger>
              <TabsTrigger value="progress">Knowledge Progress</TabsTrigger>
              <TabsTrigger value="distribution">Topic Distribution</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="weekly" className="space-y-4">
            <div className="h-[300px]">
              <BarChart
                data={barChartData}
                xField="name"
                yField="hours"
                categories={['hours']}
                chartColors={['hsl(var(--chart-1))']}
                valueFormatter={(value: number) => `${value} hrs`}
                showLegend={false}
              />
            </div>
          </TabsContent>
          <TabsContent value="progress" className="space-y-4">
            <div className="h-[300px]">
              <LineChart
                data={lineChartData}
                xField="date"
                yField="score"
                categories={['score']}
                chartColors={['hsl(var(--chart-2))']}
                valueFormatter={(value: number) => `${value}%`}
                showLegend={false}
              />
            </div>
          </TabsContent>
          <TabsContent value="distribution" className="space-y-4">
            <div className="h-[300px]">
              <PieChart
                data={pieChartData}
                category="value"
                index="name"
                valueFormatter={(value: number) => `${value}%`}
                chartColors={[
                  'hsl(var(--chart-1))',
                  'hsl(var(--chart-2))',
                  'hsl(var(--chart-3))',
                  'hsl(var(--chart-4))',
                ]}
              />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}