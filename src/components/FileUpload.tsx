
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "@/hooks/use-toast";

interface FileUploadProps {
  onFileChange: (file: File | null) => void;
  accept?: string;
  label?: string;
  helperText?: string;
  maxSize?: number; // in MB
}

const FileUpload = ({
  onFileChange,
  accept = ".pdf,.doc,.docx,.zip",
  label = "Upload file",
  helperText,
  maxSize = 10, // Default 10MB
}: FileUploadProps) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setError(null);
    
    if (file) {
      // Check file size (convert maxSize from MB to bytes)
      if (file.size > maxSize * 1024 * 1024) {
        setError(`File size exceeds maximum limit of ${maxSize}MB`);
        setFileName(null);
        onFileChange(null);
        return;
      }
      
      setFileName(file.name);
      onFileChange(file);
      toast({
        title: "File selected",
        description: `${file.name} has been selected`,
      });
    } else {
      setFileName(null);
      onFileChange(null);
    }
  };

  const handleRemoveFile = () => {
    setFileName(null);
    setError(null);
    onFileChange(null);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="file-upload">{label}</Label>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => document.getElementById('file-upload')?.click()}
            className="w-full"
          >
            Choose File
          </Button>
          {fileName && (
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleRemoveFile}
              size="sm"
            >
              Clear
            </Button>
          )}
        </div>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept={accept}
        />
        {fileName ? (
          <div className="text-sm text-muted-foreground bg-muted/50 p-2 rounded-md truncate">
            {fileName}
          </div>
        ) : (
          <div className="text-sm text-muted-foreground">
            {helperText || "No file selected"}
          </div>
        )}
      </div>

      {error && (
        <Alert variant="destructive" className="mt-2">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default FileUpload;
