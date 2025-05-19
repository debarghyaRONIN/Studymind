import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ArrowUpRight } from 'lucide-react';

// Dummy data for recent documents
const recentDocuments = [
  {
    id: '1',
    title: 'Machine Learning Notes',
    type: 'PDF',
    lastOpened: '2 hours ago',
    pages: 42,
  },
  {
    id: '2',
    title: 'Database Systems Review',
    type: 'PDF',
    lastOpened: 'Yesterday',
    pages: 28,
  },
  {
    id: '3',
    title: 'Algorithms Cheat Sheet',
    type: 'PDF',
    lastOpened: '3 days ago',
    pages: 5,
  },
];

export default function RecentDocuments() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Recent Documents</CardTitle>
        <CardDescription>
          Your recently accessed study materials
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentDocuments.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <div className="rounded-md bg-secondary p-2">
                  <FileText className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">{doc.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {doc.type} • {doc.pages} pages
                  </p>
                </div>
              </div>
              <Link href={`/documents/${doc.id}`}>
                <Button variant="ghost" size="sm">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="outline" asChild>
          <Link href="/documents">View All Documents</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}