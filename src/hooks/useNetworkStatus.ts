import { useState, useEffect } from 'react';

interface NetworkStatus {
  isOnline: boolean;
  isReconnecting: boolean;
  lastOnline: Date | null;
  connectionType?: string;
}

export const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState<NetworkStatus>({
    isOnline: navigator.onLine,
    isReconnecting: false,
    lastOnline: navigator.onLine ? new Date() : null,
  });

  useEffect(() => {
    const handleOnline = () => {
      setNetworkStatus(prev => ({
        ...prev,
        isOnline: true,
        isReconnecting: false,
        lastOnline: new Date(),
      }));
    };

    const handleOffline = () => {
      setNetworkStatus(prev => ({
        ...prev,
        isOnline: false,
        isReconnecting: false,
      }));
    };

    // Listen for online/offline events
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check connection type if available
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        setNetworkStatus(prev => ({
          ...prev,
          connectionType: connection.effectiveType || connection.type,
        }));

        connection.addEventListener('change', () => {
          setNetworkStatus(prev => ({
            ...prev,
            connectionType: connection.effectiveType || connection.type,
          }));
        });
      }
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Function to check if service worker is available
  const isServiceWorkerSupported = () => {
    return 'serviceWorker' in navigator;
  };

  // Function to check if cache is available
  const isCacheSupported = () => {
    return 'caches' in window;
  };

  // Function to get cache status
  const getCacheStatus = async () => {
    if (!isCacheSupported()) return null;

    try {
      const cacheNames = await caches.keys();
      const cacheStatus = await Promise.all(
        cacheNames.map(async (name) => {
          const cache = await caches.open(name);
          const keys = await cache.keys();
          return {
            name,
            size: keys.length,
            urls: keys.map(req => req.url).slice(0, 5), // First 5 URLs
          };
        })
      );
      return cacheStatus;
    } catch (error) {
      console.error('Error getting cache status:', error);
      return null;
    }
  };

  // Function to clear cache
  const clearCache = async () => {
    if (!isCacheSupported()) return false;

    try {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
      return true;
    } catch (error) {
      console.error('Error clearing cache:', error);
      return false;
    }
  };

  // Function to update service worker
  const updateServiceWorker = async () => {
    if (!isServiceWorkerSupported()) return false;

    try {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        await registration.update();
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error updating service worker:', error);
      return false;
    }
  };

  return {
    ...networkStatus,
    isServiceWorkerSupported: isServiceWorkerSupported(),
    isCacheSupported: isCacheSupported(),
    getCacheStatus,
    clearCache,
    updateServiceWorker,
  };
}; 