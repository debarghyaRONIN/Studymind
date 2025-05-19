"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { FilePlus2, Upload, FileSymlink, X } from 'lucide-react';

export default function DocumentsUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles([...files, ...newFiles]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles([...files, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleUpload = () => {
    toast({
      title: "Files queued for upload",
      description: `${files.length} files will be processed and analyzed.`,
    });
    // This would actually upload the files
    setFiles([]);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Upload Documents</CardTitle>
          <CardDescription>
            Upload your study materials for AI analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
              dragging ? 'border-primary bg-primary/5' : 'border-border'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Drag & drop files here</h3>
                <p className="text-sm text-muted-foreground">
                  or click the button below to browse files
                </p>
              </div>
              <div>
                <Label htmlFor="file-upload" className="cursor-pointer">
                  <Button variant="outline" onClick={() => document.getElementById('file-upload')?.click()}>
                    <FilePlus2 className="mr-2 h-4 w-4" />
                    Browse Files
                  </Button>
                </Label>
                <Input
                  id="file-upload"
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Supported formats: PDF, DOCX, TXT, MD
              </p>
            </div>
          </div>

          {files.length > 0 && (
            <div className="border rounded-lg">
              <div className="p-3 border-b bg-muted/50">
                <h3 className="font-medium">Selected Files ({files.length})</h3>
              </div>
              <div className="p-3 space-y-2 max-h-60 overflow-y-auto">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-md border p-2"
                  >
                    <div className="flex items-center space-x-2">
                      <FileSymlink className="h-4 w-4 text-primary" />
                      <span className="text-sm">{file.name}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => removeFile(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t bg-muted/30 flex justify-end">
                <Button onClick={handleUpload}>
                  Upload & Analyze
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}