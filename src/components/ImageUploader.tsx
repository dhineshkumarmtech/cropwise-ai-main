import { useState, useCallback } from 'react';
import { Upload, Image as ImageIcon, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

interface ImageUploaderProps {
  onImageSelect: (file: File | null) => void;
  onAnalyze: () => void;
  isAnalyzing: boolean;
}

export function ImageUploader({ onImageSelect, onAnalyze, isAnalyzing }: ImageUploaderProps) {
  const { t } = useLanguage();
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = useCallback((file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onImageSelect(file);
    }
  }, [onImageSelect]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const clearImage = useCallback(() => {
    setPreview(null);
    onImageSelect(null);
  }, [onImageSelect]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="font-display text-2xl font-bold text-foreground">
          {t.upload.title}
        </h2>
        <p className="mt-2 text-muted-foreground">
          {t.upload.subtitle}
        </p>
      </div>

      {preview ? (
        <div className="relative animate-scale-in">
          <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20 shadow-card">
            <img
              src={preview}
              alt="Selected leaf"
              className="w-full h-64 object-cover"
            />
            <button
              onClick={clearImage}
              className="absolute top-3 right-3 h-8 w-8 flex items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <Button
            onClick={onAnalyze}
            disabled={isAnalyzing}
            variant="hero"
            size="lg"
            className="w-full mt-4"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                {t.upload.analyzing}
              </>
            ) : (
              t.upload.analyze
            )}
          </Button>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={cn(
            "relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-10 transition-all duration-200 cursor-pointer",
            isDragging
              ? "border-primary bg-primary/5 scale-[1.02]"
              : "border-border hover:border-primary/50 hover:bg-muted/50"
          )}
        >
          <input
            type="file"
            accept="image/jpeg,image/png"
            onChange={handleInputChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
            {isDragging ? (
              <ImageIcon className="h-8 w-8" />
            ) : (
              <Upload className="h-8 w-8" />
            )}
          </div>
          <p className="text-foreground font-medium">
            {t.upload.dropzone}
          </p>
          <p className="mt-2 text-muted-foreground text-sm">
            {t.upload.or}
          </p>
          <Button variant="outline" size="sm" className="mt-3 pointer-events-none">
            {t.upload.browse}
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">
            {t.upload.formats}
          </p>
        </div>
      )}
    </div>
  );
}