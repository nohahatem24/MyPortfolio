/**
 * Performance monitoring utilities
 */

export function measureImageLoadTime() {
  if (typeof PerformanceObserver === 'undefined') return;

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if ((entry as any).initiatorType === 'img') {
        const duration = entry.duration;
        const size = (entry as any).transferSize || 0;
        console.log(`📸 Image: ${entry.name}`);
        console.log(`⏱️  Load time: ${duration.toFixed(2)}ms`);
        console.log(`📊 Size: ${(size / 1024).toFixed(2)}KB`);
      }
    }
  });

  try {
    observer.observe({ entryTypes: ['resource'] });
  } catch (e) {
    // Silently fail for unsupported browsers
  }
}

export function reportWebVitals() {
  if (typeof PerformanceObserver === 'undefined') return;

  // Largest Contentful Paint
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      const value = lastEntry.renderTime || lastEntry.loadTime;
      console.log('🎯 LCP (Largest Contentful Paint):', `${value.toFixed(2)}ms`);
    });
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch (e) {
    // Silently fail for unsupported browsers
  }

  // Cumulative Layout Shift
  try {
    const observer = new PerformanceObserver((list) => {
      let cls = 0;
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          cls += (entry as any).value;
        }
      }
      console.log('📍 CLS (Cumulative Layout Shift):', cls.toFixed(3));
    });
    observer.observe({ entryTypes: ['layout-shift'] });
  } catch (e) {
    // Silently fail
  }

  // First Input Delay
  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fid = (entry as any).processingDuration;
        console.log('⌨️  FID (First Input Delay):', `${fid.toFixed(2)}ms`);
      }
    });
    observer.observe({ entryTypes: ['first-input'] });
  } catch (e) {
    // Silently fail
  }
}

// Cache buster for updated images
export function invalidateImageCache(imagePath: string) {
  const timestamp = new Date().getTime();
  return `${imagePath}?v=${timestamp}`;
}

// Detect image loading performance
export function getImageLoadingMetrics() {
  if (typeof performance === 'undefined') return null;

  const entries = performance.getEntries() as any[];
  const imageEntries = entries.filter((e) => e.initiatorType === 'img');

  return {
    totalImages: imageEntries.length,
    totalLoadTime: imageEntries.reduce((sum, e) => sum + e.duration, 0),
    averageLoadTime:
      imageEntries.reduce((sum, e) => sum + e.duration, 0) / imageEntries.length || 0,
    totalSize: imageEntries.reduce((sum, e) => sum + (e.transferSize || 0), 0),
  };
}