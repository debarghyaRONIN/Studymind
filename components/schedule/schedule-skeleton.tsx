import { Skeleton } from '@/components/ui/skeleton';

export default function ScheduleSkeleton() {
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="md:w-7/12">
        <Skeleton className="h-[350px] w-full rounded-md" />
      </div>
      <div className="md:w-5/12">
        <Skeleton className="h-[350px] w-full rounded-md" />
      </div>
    </div>
  );
}