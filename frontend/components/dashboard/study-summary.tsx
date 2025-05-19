import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function StudySummary() {
  // Dummy data for study summary
  const summary = {
    totalHours: 18.5,
    weeklyGoal: 25,
    sessionsCompleted: 12,
    topicsStudied: 5,
    progress: 74,
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Weekly Summary</CardTitle>
        <CardDescription>
          Your study progress for this week
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium leading-none">Hours Studied</p>
              <p className="text-sm font-medium text-muted-foreground">
                {summary.totalHours} / {summary.weeklyGoal} hrs
              </p>
            </div>
            <Progress value={summary.progress} className="mt-2 h-2" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border p-3">
              <p className="text-xs text-muted-foreground">Sessions</p>
              <p className="text-lg font-bold">{summary.sessionsCompleted}</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="text-xs text-muted-foreground">Topics</p>
              <p className="text-lg font-bold">{summary.topicsStudied}</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium leading-none">Current Streak</p>
            <div className="flex space-x-1">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-full rounded-full ${
                    i < 5 ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              5 day streak - Keep it going!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}