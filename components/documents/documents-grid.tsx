import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { FileText, Search, Filter, FileCode, FileImage, FileBarChart } from 'lucide-react';

// Dummy documents data
const documents = [
  {
    id: '1',
    title: 'Machine Learning Fundamentals',
    type: 'PDF',
    pages: 42,
    lastAccessed: '2 hours ago',
    complexity: 'High',
    topics: ['Neural Networks', 'Algorithms', 'Data Science'],
    icon: FileBarChart,
  },
  {
    id: '2',
    title: 'SQL Mastery Guide',
    type: 'PDF',
    pages: 28,
    lastAccessed: 'Yesterday',
    complexity: 'Medium',
    topics: ['Databases', 'SQL', 'Query Optimization'],
    icon: FileCode,
  },
  {
    id: '3',
    title: 'Data Structures Cheat Sheet',
    type: 'PDF',
    pages: 5,
    lastAccessed: '3 days ago',
    complexity: 'Low',
    topics: ['Arrays', 'Linked Lists', 'Trees'],
    icon: FileText,
  },
  {
    id: '4',
    title: 'System Design Interview Prep',
    type: 'PDF',
    pages: 36,
    lastAccessed: '1 week ago',
    complexity: 'High',
    topics: ['Architecture', 'Scalability', 'Design Patterns'],
    icon: FileImage,
  },
  {
    id: '5',
    title: 'React Hooks Deep Dive',
    type: 'PDF',
    pages: 18,
    lastAccessed: '2 weeks ago',
    complexity: 'Medium',
    topics: ['React', 'JavaScript', 'Web Development'],
    icon: FileCode,
  },
  {
    id: '6',
    title: 'Networking Essentials',
    type: 'PDF',
    pages: 30,
    lastAccessed: '1 month ago',
    complexity: 'Medium',
    topics: ['TCP/IP', 'Protocols', 'Security'],
    icon: FileBarChart,
  },
];

// Complexity badge colors
const complexityColors = {
  High: 'bg-destructive/10 text-destructive hover:bg-destructive/20',
  Medium: 'bg-amber-500/10 text-amber-500 hover:bg-amber-500/20',
  Low: 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20',
};

export default function DocumentsGrid() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search documents..."
            className="pl-8"
          />
        </div>
        <Button variant="outline" size="sm" className="flex">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <Card key={doc.id} className="overflow-hidden">
            <CardHeader className="border-b bg-muted/50 p-4">
              <div className="flex items-center gap-4">
                <div className="rounded-md bg-background p-2 shadow-sm">
                  <doc.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-base">{doc.title}</CardTitle>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <span>{doc.type}</span>
                    <span>•</span>
                    <span>{doc.pages} pages</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className="text-xs">
                  {doc.topics[0]}
                </Badge>
                {doc.topics.length > 1 && (
                  <Badge variant="secondary" className="text-xs">
                    {doc.topics[1]}
                  </Badge>
                )}
                {doc.topics.length > 2 && (
                  <Badge variant="secondary" className="text-xs">
                    +{doc.topics.length - 2}
                  </Badge>
                )}
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Last accessed: {doc.lastAccessed}</span>
                <Badge 
                  variant="outline" 
                  className={`text-xs ${complexityColors[doc.complexity as keyof typeof complexityColors]}`}
                >
                  {doc.complexity}
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/30 p-3 border-t flex justify-between">
              <Button variant="ghost" size="sm">
                View
              </Button>
              <Button variant="ghost" size="sm">
                Analyze
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}