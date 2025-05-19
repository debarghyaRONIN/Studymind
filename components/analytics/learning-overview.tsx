"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, LineChart } from '@/components/ui/chart';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function LearningOverview() {
  // Sample data for progress charts
  const weeklyProgressData = [
    { date: 'Mon', hours: 2.5, mastery: 68 },
    { date: 'Tue', hours: 3.8, mastery: 70 },
    { date: 'Wed', hours: 1.2, mastery: 69 },
    { date: 'Thu', hours: 4.5, mastery: 72 },
    { date: 'Fri', hours: 3.1, mastery: 75 },
    { date: 'Sat', hours: 1.9, mastery: 77 },
    { date: 'Sun', hours: 0.8, mastery: 78 },
  ];

  const monthlyProgressData = [
    { date: 'Week 1', hours: 14.5, mastery: 65 },
    { date: 'Week 2', hours: 16.2, mastery: 72 },
    { date: 'Week 3', hours: 18.7, mastery: 80 },
    { date: 'Week 4', hours: 15.3, mastery: 87 },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div className="flex-1">
          <CardTitle>Learning Overview</CardTitle>
          <CardDescription>
            Track your progress across time periods
          </CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              All Subjects
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>All Subjects</DropdownMenuItem>
            <DropdownMenuItem>Machine Learning</DropdownMenuItem>
            <DropdownMenuItem>Database Systems</DropdownMenuItem>
            <DropdownMenuItem>Algorithms</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly">
          <TabsList className="mb-4">
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
          <TabsContent value="weekly">
            <Tabs defaultValue="hours">
              <TabsList className="mb-4">
                <TabsTrigger value="hours">Study Hours</TabsTrigger>
                <TabsTrigger value="mastery">Knowledge Mastery</TabsTrigger>
              </TabsList>
              <TabsContent value="hours">
                <div className="h-[350px]">
                  <BarChart
                    data={weeklyProgressData}
                    xField="date"
                    yField="hours"
                    categories={['hours']}
                    chartColors={['hsl(var(--chart-1))']}
                    valueFormatter={(value) => `${value} hrs`}
                  />
                </div>
              </TabsContent>
              <TabsContent value="mastery">
                <div className="h-[350px]">
                  <LineChart
                    data={weeklyProgressData}
                    xField="date"
                    yField="mastery"
                    categories={['mastery']}
                    chartColors={['hsl(var(--chart-2))']}
                    valueFormatter={(value) => `${value}%`}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="monthly">
            <Tabs defaultValue="hours">
              <TabsList className="mb-4">
                <TabsTrigger value="hours">Study Hours</TabsTrigger>
                <TabsTrigger value="mastery">Knowledge Mastery</TabsTrigger>
              </TabsList>
              <TabsContent value="hours">
                <div className="h-[350px]">
                  <BarChart
                    data={monthlyProgressData}
                    xField="date"
                    yField="hours"
                    categories={['hours']}
                    chartColors={['hsl(var(--chart-1))']}
                    valueFormatter={(value) => `${value} hrs`}
                  />
                </div>
              </TabsContent>
              <TabsContent value="mastery">
                <div className="h-[350px]">
                  <LineChart
                    data={monthlyProgressData}
                    xField="date"
                    yField="mastery"
                    categories={['mastery']}
                    chartColors={['hsl(var(--chart-2))']}
                    valueFormatter={(value) => `${value}%`}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}