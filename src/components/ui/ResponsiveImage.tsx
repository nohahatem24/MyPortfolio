// src/components/ui/ResponsiveImage.tsx - WITH WEBP SUPPORT
import React, { useState, useEffect } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
}

const objectFitClasses = {
  cover: 'object-cover',
  contain: 'object-contain',
  fill: 'object-fill',
  'scale-down': 'object-scale-down',
} as const;

export const ResponsiveImage = React.forwardRef<HTMLImageElement, ResponsiveImageProps>(
  (
    { src, alt, className = '', width, height, priority = false, objectFit = 'cover' },
    ref
  ) => {
    const [isLoaded, setIsLoaded] = useState(priority);
    const [error, setError] = useState(false);

    useEffect(() => {
      if (priority) {
        const img = new Image();
        img.src = src;
        img.onload = () => setIsLoaded(true);
        img.onerror = () => setError(true);
      }
    }, [src, priority]);

    if (error) {
      return (
        <div className={`${className} bg-gray-200 dark:bg-gray-700 flex items-center justify-center`}>
          <div className="text-gray-400 text-sm">Image failed to load</div>
        </div>
      );
    }

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`${className} ${objectFitClasses[objectFit]} object-center ${
          isLoaded ? 'opacity-100' : 'opacity-70'
        } transition-opacity duration-300`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
      />
    );
  }
);

ResponsiveImage.displayName = 'ResponsiveImage';