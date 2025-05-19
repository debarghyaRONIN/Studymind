import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DocumentsGrid from '@/components/documents/documents-grid';
import DocumentsUpload from '@/components/documents/documents-upload';
import DocumentsAnalytics from '@/components/documents/documents-analytics';

export default function DocumentsPage() {
  return (
    <div className="container px-4 py-6 md:py-10">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-tight">Documents</h1>
        <p className="text-muted-foreground">
          Manage and analyze your study materials
        </p>
      </div>
      
      <div className="mt-6">
        <Tabs defaultValue="all">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="all">All Documents</TabsTrigger>
            <TabsTrigger value="upload">Upload</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <DocumentsGrid />
          </TabsContent>
          <TabsContent value="upload" className="mt-6">
            <DocumentsUpload />
          </TabsContent>
          <TabsContent value="analytics" className="mt-6">
            <DocumentsAnalytics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}