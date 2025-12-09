/**
 * Image optimization utilities for responsive and performant image loading
 */

export interface ImageConfig {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
}

export function generateResponsiveImageConfig(
  src: string,
  alt: string,
  options?: { width?: number; height?: number; priority?: boolean }
): ImageConfig {
  return {
    src,
    alt,
    width: options?.width,
    height: options?.height,
    priority: options?.priority || false,
    objectFit: 'cover',
  };
}

export function setupLazyLoading() {
  if (
    typeof window === 'undefined' ||
    !('IntersectionObserver' in window)
  ) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  });

  // Observe all lazy images
  document.querySelectorAll('img[data-src]').forEach((img) => {
    observer.observe(img);
  });
}

export function preloadCriticalImages(urls: string[]) {
  if (typeof document === 'undefined') return;

  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    link.crossOrigin = 'anonymous';
    link.onload = () => {
      link.onload = null;
    };
    document.head.appendChild(link);
  });
}

export function prefetchImages(urls: string[]) {
  if (typeof document === 'undefined') return;

  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'image';
    link.href = url;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

export async function getSupportedImageFormat(): Promise<
  'webp' | 'avif' | 'png' | 'jpg'
> {
  if (typeof window === 'undefined') return 'png';

  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;

    if (canvas.toDataURL('image/webp').indexOf('image/webp') === 0) {
      resolve('webp');
    } else if (canvas.toDataURL('image/avif').indexOf('image/avif') === 0) {
      resolve('avif');
    } else {
      resolve('png');
    }
  });
}

export function estimateImageLoadTime(
  imageSize: number,
  connection: 'slow' | 'normal' | 'fast' = 'normal'
): number {
  const speeds = {
    slow: 100000, // 100KB/s (3G)
    normal: 500000, // 500KB/s
    fast: 2000000, // 2MB/s (4G/5G)
  };

  return Math.ceil((imageSize / speeds[connection]) * 1000);
}