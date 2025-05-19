"use client";

import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

// Dummy study session data
const studySessions = [
  { date: new Date(2025, 5, 8), count: 3, topics: ['Neural Networks', 'Database Design', 'Algorithms'] },
  { date: new Date(2025, 5, 10), count: 2, topics: ['SQL Advanced', 'Data Structures'] },
  { date: new Date(2025, 5, 12), count: 1, topics: ['Machine Learning'] },
  { date: new Date(2025, 5, 15), count: 2, topics: ['System Design', 'Networking'] },
  { date: new Date(2025, 5, 18), count: 1, topics: ['React Hooks'] },
  { date: new Date(2025, 5, 22), count: 3, topics: ['GraphQL', 'NoSQL', 'Docker'] },
  { date: new Date(2025, 5, 25), count: 2, topics: ['JavaScript ES6+', 'TypeScript'] },
  { date: new Date(2025, 5, 28), count: 1, topics: ['Design Patterns'] },
];

export default function ScheduleCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedSessions, setSelectedSessions] = useState<string[]>([]);
  const { toast } = useToast();

  const handleDaySelect = (day: Date | undefined) => {
    setDate(day);
    
    // Find sessions for the selected day
    const sessionsForDay = studySessions.find(
      (session) => day && session.date.toDateString() === day.toDateString()
    );
    
    setSelectedSessions(sessionsForDay?.topics || []);

    if (sessionsForDay) {
      toast({
        title: `${sessionsForDay.count} sessions on ${format(sessionsForDay.date, 'MMMM d, yyyy')}`,
        description: `Click on any session to view details and start studying.`,
      });
    }
  };

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="md:w-7/12">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDaySelect}
          className="rounded-md border"
          components={{
            DayContent: ({ day }) => {
              // Add null check for day
              if (!day) return null;

              const sessionForDay = studySessions.find(
                (session) => session.date.toDateString() === day.toDate().toDateString()
              );

              return (
                <div className="flex flex-col items-center justify-center p-2">
                  <span className="text-sm font-medium text-foreground">{format(day.date, 'd')}</span>
                  {sessionForDay && (
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  )}
                </div>
              );
            },
          }}
        />
      </div>

      <div className="md:w-5/12">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>
              {date ? format(date, 'MMMM d, yyyy') : 'No date selected'}
            </CardTitle>
            <CardDescription>
              {selectedSessions.length > 0
                ? `${selectedSessions.length} study sessions scheduled`
                : 'No study sessions scheduled'}
            </CardDescription>
          </CardHeader>
          {selectedSessions.length > 0 && (
            <CardContent>
              <div className="space-y-3">
                {selectedSessions.map((topic, i) => (
                  <div
                    key={i}
                    className="cursor-pointer rounded-md border p-3 transition-colors hover:bg-secondary/50"
                    onClick={() => {
                      toast({
                        title: `${topic} Session`,
                        description: 'This would open the study session details.',
                      });
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{topic}</p>
                        <p className="text-sm text-muted-foreground">
                          {date && format(date, 'E')} • {i % 2 === 0 ? 'Morning' : 'Afternoon'} • 90 min
                        </p>
                      </div>
                      <Badge variant="outline">
                        {i % 3 === 0 ? 'High' : i % 3 === 1 ? 'Medium' : 'Low'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}