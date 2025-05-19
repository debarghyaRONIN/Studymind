"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Plus, BookOpen, Calendar, FileText, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function DashboardHeader() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const handleQuickAction = (action: string) => {
    setOpen(false);
    toast({
      title: "Action triggered",
      description: `You clicked on "${action}" - This would open the relevant feature`,
    });
  };

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your study progress.
        </p>
      </div>
      
      <div className="flex items-center space-x-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Quick Actions
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-72" align="end">
            <div className="grid gap-3">
              <h3 className="font-medium">Create New</h3>
              <div className="grid gap-2">
                <Button 
                  variant="outline" 
                  className="justify-start"
                  onClick={() => handleQuickAction("Create Study Session")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Create Study Session
                </Button>
                <Button 
                  variant="outline" 
                  className="justify-start"
                  onClick={() => handleQuickAction("Upload Documents")}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Upload Documents
                </Button>
                <Button 
                  variant="outline" 
                  className="justify-start"
                  onClick={() => handleQuickAction("Generate Schedule")}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Generate Schedule
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}