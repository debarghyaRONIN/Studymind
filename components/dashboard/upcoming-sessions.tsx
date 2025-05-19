import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, Book, ChevronRight } from 'lucide-react';

// Dummy data for upcoming study sessions
const upcomingSessions = [
  {
    id: '1',
    title: 'Neural Networks Fundamentals',
    subject: 'Machine Learning',
    date: 'Today',
    time: '3:00 PM - 4:30 PM',
    duration: '90 min',
    priority: 'high',
  },
  {
    id: '2',
    title: 'Advanced SQL Concepts',
    subject: 'Database Systems',
    date: 'Tomorrow',
    time: '10:00 AM - 11:30 AM',
    duration: '90 min',
    priority: 'medium',
  },
  {
    id: '3',
    title: 'Algorithms Review',
    subject: 'Computer Science',
    date: 'Thu, Jun 10',
    time: '2:00 PM - 3:30 PM',
    duration: '90 min',
    priority: 'low',
  },
];

const priorityColors = {
  high: 'bg-destructive/10 text-destructive hover:bg-destructive/20',
  medium: 'bg-amber-500/10 text-amber-500 hover:bg-amber-500/20',
  low: 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20',
};

export default function UpcomingSessions() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle>Upcoming Sessions</CardTitle>
          <CardDescription>Your next scheduled study sessions</CardDescription>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/schedule">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingSessions.map((session) => (
            <div key={session.id} className="flex items-start space-x-4 rounded-md border p-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Book className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium leading-none">{session.title}</p>
                  <Badge className={priorityColors[session.priority as keyof typeof priorityColors]}>
                    {session.priority}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{session.subject}</p>
                <div className="flex items-center pt-2 text-sm text-muted-foreground">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  {session.date}
                  <Clock className="ml-4 mr-2 h-4 w-4" />
                  {session.time}
                </div>
              </div>
              <Button variant="ghost" size="icon" asChild>
                <Link href={`/sessions/${session.id}`}>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="outline" asChild>
          <Link href="/sessions/new">
            <Plus className="mr-2 h-4 w-4" />
            Create New Session
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function Plus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}