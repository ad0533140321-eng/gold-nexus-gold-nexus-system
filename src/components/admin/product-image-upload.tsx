'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { authFetch } from '@/lib/auth-fetch';

interface ProductImageUploadProps {
  sku?: string;
  value: string;
  onChange: (url: string) => void;
  disabled?: boolean;
}

export function ProductImageUpload({ sku, value, onChange, disabled }: ProductImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      const file = acceptedFiles[0];
      setIsUploading(true);

      const formData = new FormData();
      // Use SKU + timestamp to ensure uniqueness and avoid caching issues
      const fileExtension = file.name.split('.').pop();
      const fileName = `${sku || 'product'}-${Date.now()}.${fileExtension}`;
      formData.append('files', file, fileName);

      try {
        const res = await authFetch('/api/admin/products/upload-images', {
          method: 'POST',
          body: formData,
        });

        if (!res.ok) throw new Error('Upload failed');

        const data = await res.json();
        if (data.results && data.results[0] && data.results[0].status === 'success') {
          // Add a cache-busting timestamp to the URL as a final safeguard
          const newImageUrl = `${data.results[0].url}?t=${Date.now()}`;
          onChange(newImageUrl);
          toast.success('Image uploaded successfully');
        } else {
          throw new Error(data.results?.[0]?.message || 'Upload failed');
        }
      } catch (err) {
        toast.error(err instanceof Error ? err.message : 'Failed to upload image');
      } finally {
        setIsUploading(false);
      }
    },
    [sku, onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.png', '.jpg', '.webp', '.avif'],
    },
    maxFiles: 1,
    disabled: disabled || isUploading,
  });

  return (
    <div
      {...getRootProps()}
      className={`relative aspect-square w-full cursor-pointer overflow-hidden rounded-md border-2 border-dashed transition-colors ${
        isDragActive
          ? 'border-black bg-neutral-100'
          : 'border-neutral-200 bg-muted hover:bg-neutral-50'
      } ${disabled || isUploading ? 'cursor-not-allowed opacity-60' : ''}`}
    >
      <input {...getInputProps()} />

      {value ? (
        <img
          src={value}
          alt="Preview"
          className="h-full w-full object-contain"
          onError={(e) => (e.currentTarget.src = '')}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center p-4 text-center text-sm text-muted-foreground">
          <Upload className="mb-2 h-8 w-8" />
          {isDragActive ? 'Drop image here' : 'Click or drag to upload'}
        </div>
      )}

      {isUploading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <Loader2 className="h-10 w-10 animate-spin text-black" />
        </div>
      )}

      {value && !isUploading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-opacity hover:bg-black/20 hover:opacity-100">
          <div className="rounded-md bg-white px-3 py-2 text-xs font-medium shadow-sm">
            Change Image
          </div>
        </div>
      )}
    </div>
  );
}
