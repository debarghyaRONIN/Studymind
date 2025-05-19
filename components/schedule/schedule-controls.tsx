"use client";

import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, FilterX, Save, Plus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function ScheduleControls() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex items-center">
        <Button variant="outline" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <CalendarIcon className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <FilterDropdown />
      
      <Dialog>
        <DialogTrigger asChild>
          <Button className="gap-1">
            <Plus className="h-4 w-4" />
            New Session
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Study Session</DialogTitle>
            <DialogDescription>
              Create a new study session in your schedule.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p className="text-sm text-muted-foreground">
              This would open a form to add a new study session with fields for topic, date, time, and duration.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Create Session</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function FilterDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-1">
          <FilterX className="h-4 w-4" />
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Filter By</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            All Subjects
          </DropdownMenuItem>
          <DropdownMenuItem>
            Machine Learning
          </DropdownMenuItem>
          <DropdownMenuItem>
            Database Systems
          </DropdownMenuItem>
          <DropdownMenuItem>
            Algorithms
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            High Priority
          </DropdownMenuItem>
          <DropdownMenuItem>
            Medium Priority
          </DropdownMenuItem>
          <DropdownMenuItem>
            Low Priority
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <FilterX className="mr-2 h-4 w-4" />
          Clear Filters
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}