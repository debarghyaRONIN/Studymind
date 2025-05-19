"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, PieChart } from '@/components/ui/chart';

export default function DocumentsAnalytics() {
  // Sample data for charts
  const topicDistributionData = [
    { name: 'Machine Learning', value: 28 },
    { name: 'Databases', value: 22 },
    { name: 'Algorithms', value: 18 },
    { name: 'Web Development', value: 14 },
    { name: 'System Design', value: 10 },
    { name: 'Other', value: 8 },
  ];

  const complexityDistributionData = [
    { name: 'High', value: 35 },
    { name: 'Medium', value: 45 },
    { name: 'Low', value: 20 },
  ];

  const documentsByTypeData = [
    { type: 'PDF', count: 18 },
    { type: 'DOCX', count: 7 },
    { type: 'TXT', count: 4 },
    { type: 'MD', count: 3 },
  ];

  const documentsOverTimeData = [
    { month: 'Jan', count: 3 },
    { month: 'Feb', count: 5 },
    { month: 'Mar', count: 8 },
    { month: 'Apr', count: 12 },
    { month: 'May', count: 15 },
    { month: 'Jun', count: 18 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Topic Distribution</CardTitle>
            <CardDescription>
              Breakdown of topics across your documents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <PieChart
                data={topicDistributionData}
                category="value"
                index="name"
                valueFormatter={(value) => `${value}%`}
                chartColors={[
                  'hsl(var(--chart-1))',
                  'hsl(var(--chart-2))',
                  'hsl(var(--chart-3))',
                  'hsl(var(--chart-4))',
                  'hsl(var(--chart-5))',
                  'hsl(var(--muted))',
                ]}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Complexity Distribution</CardTitle>
            <CardDescription>
              Content complexity analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <PieChart
                data={complexityDistributionData}
                category="value"
                index="name"
                valueFormatter={(value) => `${value}%`}
                chartColors={[
                  'hsl(var(--destructive))',
                  'hsl(43 74% 66%)',
                  'hsl(143 70% 50%)',
                ]}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Document Analytics</CardTitle>
          <CardDescription>
            Analysis of your document collection
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="by-type">
            <TabsList className="mb-4">
              <TabsTrigger value="by-type">By Type</TabsTrigger>
              <TabsTrigger value="over-time">Over Time</TabsTrigger>
            </TabsList>
            <TabsContent value="by-type">
              <div className="h-[300px]">
                <BarChart
                  data={documentsByTypeData}
                  xField="type"
                  yField="count"
                  categories={['count']}
                  chartColors={['hsl(var(--chart-1))']}
                  valueFormatter={(value) => `${value} files`}
                />
              </div>
            </TabsContent>
            <TabsContent value="over-time">
              <div className="h-[300px]">
                <BarChart
                  data={documentsOverTimeData}
                  xField="month"
                  yField="count"
                  categories={['count']}
                  chartColors={['hsl(var(--chart-2))']}
                  valueFormatter={(value) => `${value} files`}
                />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}