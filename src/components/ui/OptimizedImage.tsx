// src/components/ui/OptimizedImage.tsx - LAZY LOADING WITH SRCSET
import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoad?: () => void;
  skeleton?: boolean;
}

export const OptimizedImage = React.forwardRef<HTMLImageElement, OptimizedImageProps>(
  (
    { src, alt, className = '', width, height, priority = false, onLoad, skeleton = true },
    ref
  ) => {
    const [isLoaded, setIsLoaded] = useState(priority);
    const [isError, setIsError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
      if (priority && src) {
        const img = new Image();
        img.src = src;
        img.onload = () => setIsLoaded(true);
        img.onerror = () => setIsError(true);
      }
    }, [src, priority]);

    const handleLoad = () => {
      setIsLoaded(true);
      onLoad?.();
    };

    return (
      <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-700">
        {skeleton && !isLoaded && (
          <div className={`${className} bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse absolute inset-0`} />
        )}
        <img
          ref={imgRef || ref}
          src={isError ? '' : src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={() => setIsError(true)}
        />
      </div>
    );
  }
);

OptimizedImage.displayName = 'OptimizedImage';