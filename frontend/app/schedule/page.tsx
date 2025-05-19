import { Suspense } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ScheduleCalendar from '@/components/schedule/schedule-calendar';
import ScheduleControls from '@/components/schedule/schedule-controls';
import ScheduleSkeleton from '@/components/schedule/schedule-skeleton';

export default function SchedulePage() {
  return (
    <div className="container px-4 py-6 md:py-10">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-tight">Study Schedule</h1>
        <p className="text-muted-foreground">
          View and manage your upcoming study sessions
        </p>
      </div>
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div>
                <CardTitle>June 2025</CardTitle>
                <CardDescription>Your personalized study calendar</CardDescription>
              </div>
              <ScheduleControls />
            </div>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<ScheduleSkeleton />}>
              <ScheduleCalendar />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}