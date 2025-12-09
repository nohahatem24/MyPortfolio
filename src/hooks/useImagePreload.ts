// src/hooks/useImagePreload.ts
import { useEffect } from 'react';

interface PreloadConfig {
  src: string;
  delay?: number;
  as?: 'image' | 'style' | 'script' | 'font';
}

export function useImagePreload(
  images: (string | PreloadConfig)[],
  condition: boolean = true
) {
  useEffect(() => {
    if (!condition || typeof document === 'undefined') return;

    images.forEach((image) => {
      const config = typeof image === 'string' ? { src: image, delay: 0 } : image;

      const timeoutId = setTimeout(() => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = config.as || 'image';
        link.href = config.src;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }, config.delay || 0);

      return () => clearTimeout(timeoutId);
    });
  }, [images, condition]);
}

export function usePrefetchImage(src: string | null, delay: number = 0) {
  useEffect(() => {
    if (!src || typeof window === 'undefined') return;

    const timeoutId = setTimeout(() => {
      const img = new Image();
      img.src = src;
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [src, delay]);
}

export function useImageBatchPreload(sources: string[]) {
  useEffect(() => {
    if (sources.length === 0 || typeof window === 'undefined') return;

    // Stagger the preloading to avoid network congestion
    sources.forEach((src, index) => {
      setTimeout(() => {
        const img = new Image();
        img.src = src;
      }, index * 150);
    });
  }, [sources]);
}