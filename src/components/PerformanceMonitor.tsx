import { useEffect } from 'react';

export const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const createdObservers: PerformanceObserver[] = [];
    if ('PerformanceObserver' in window) {
      const supported: readonly string[] = (PerformanceObserver as any).supportedEntryTypes || [];

      // Largest Contentful Paint (LCP)
      try {
        if (supported.includes('largest-contentful-paint')) {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as PerformanceEntry | undefined;
            if (lastEntry) {
              console.log('LCP:', lastEntry.startTime);
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
          createdObservers.push(lcpObserver);
        }
      } catch {}

      // First Input Delay (FID)
      try {
        if (supported.includes('first-input')) {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (entry && typeof entry.processingStart === 'number') {
                console.log('FID:', entry.processingStart - entry.startTime);
              }
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
          createdObservers.push(fidObserver);
        }
      } catch {}

      // Cumulative Layout Shift (CLS)
      try {
        if (supported.includes('layout-shift')) {
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (entry && !entry.hadRecentInput) {
                clsValue += entry.value || 0;
              }
            });
            console.log('CLS:', clsValue);
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
          createdObservers.push(clsObserver);
        }
      } catch {}

      // First Contentful Paint (FCP)
      try {
        if (supported.includes('first-contentful-paint')) {
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const firstEntry = entries[0];
            if (firstEntry) {
              console.log('FCP:', firstEntry.startTime);
            }
          });
          fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });
          createdObservers.push(fcpObserver);
        }
      } catch {}

      // Monitor resource loading (if supported)
      try {
        if (supported.includes('resource')) {
          const resourceObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              if (entry.entryType === 'resource') {
                const resourceEntry = entry as PerformanceResourceTiming;
                if (resourceEntry.duration > 1000) {
                  console.warn('Slow resource:', resourceEntry.name, resourceEntry.duration + 'ms');
                }
              }
            });
          });
          resourceObserver.observe({ entryTypes: ['resource'] });
          createdObservers.push(resourceObserver);
        }
      } catch {}
    }

    return () => {
      createdObservers.forEach((obs) => {
        try { obs.disconnect(); } catch {}
      });
    };
  }, []);

  return null; // This component doesn't render anything
}; 