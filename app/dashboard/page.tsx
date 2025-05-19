import DashboardHeader from '@/components/dashboard/dashboard-header';
import UpcomingSessions from '@/components/dashboard/upcoming-sessions';
import StudyProgress from '@/components/dashboard/study-progress';
import RecentDocuments from '@/components/dashboard/recent-documents';
import StudySummary from '@/components/dashboard/study-summary';

export default function DashboardPage() {
  return (
    <div className="container px-4 py-6 md:py-10">
      <DashboardHeader />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2 space-y-6">
          <UpcomingSessions />
          <StudyProgress />
        </div>
        <div className="space-y-6">
          <StudySummary />
          <RecentDocuments />
        </div>
      </div>
    </div>
  );
}