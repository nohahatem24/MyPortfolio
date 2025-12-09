import React, { useState, useEffect, useRef, useCallback } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
  width?: number;
  height?: number;
  onLoad?: () => void;
  onError?: () => void;
  threshold?: number;
  rootMargin?: string;
  blur?: boolean;
}

export const LazyImage = React.forwardRef<HTMLImageElement, LazyImageProps>(
  (
    {
      src,
      alt,
      placeholder,
      className = '',
      width,
      height,
      onLoad,
      onError,
      threshold = 0.1,
      rootMargin = '50px',
      blur = true,
    },
    ref
  ) => {
    const imgRef = useRef<HTMLImageElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    const [imageSrc, setImageSrc] = useState(placeholder || '');

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              if (imgRef.current) {
                observer.unobserve(imgRef.current);
              }
            }
          });
        },
        {
          threshold,
          rootMargin,
        }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    }, [src, threshold, rootMargin]);

    const handleLoad = useCallback(() => {
      setIsLoaded(true);
      onLoad?.();
    }, [onLoad]);

    const handleError = useCallback(() => {
      setIsError(true);
      onError?.();
    }, [onError]);

    return (
      <img
        ref={ref || imgRef}
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={`${className} ${!isLoaded && blur ? 'blur-sm' : ''} ${
          isError ? 'opacity-50' : ''
        } transition-all duration-300`}
        onLoad={handleLoad}
        onError={handleError}
      />
    );
  }
);

LazyImage.displayName = 'LazyImage';