import { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Database, Wifi, WifiOff } from "lucide-react";
import { useNetworkStatus } from "@/hooks/useNetworkStatus";

export const CacheStatusIndicator = () => {
  const { isOnline, isCacheSupported } = useNetworkStatus();
  const [cacheStatus, setCacheStatus] = useState<'cached' | 'uncached' | 'checking'>('checking');

  useEffect(() => {
    const checkCacheStatus = async () => {
      if (!isCacheSupported) {
        setCacheStatus('uncached');
        return;
      }

      try {
        const cacheNames = await caches.keys();
        if (cacheNames.length > 0) {
          setCacheStatus('cached');
        } else {
          setCacheStatus('uncached');
        }
      } catch (error) {
        setCacheStatus('uncached');
      }
    };

    checkCacheStatus();
  }, [isCacheSupported]);

  if (!isCacheSupported) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 text-xs">
      {/* Network Status */}
      <div className="flex items-center gap-1">
        {isOnline ? (
          <Wifi className="h-3 w-3 text-green-500" />
        ) : (
          <WifiOff className="h-3 w-3 text-red-500" />
        )}
        <span className="text-muted-foreground">
          {isOnline ? 'Online' : 'Offline'}
        </span>
      </div>

      {/* Cache Status */}
      <div className="flex items-center gap-1">
        <Database className="h-3 w-3 text-blue-500" />
        <Badge 
          variant={cacheStatus === 'cached' ? 'default' : 'secondary'} 
          className="text-xs px-1 py-0"
        >
          {cacheStatus === 'cached' ? 'Cached' : 
           cacheStatus === 'checking' ? 'Checking...' : 'Uncached'}
        </Badge>
      </div>
    </div>
  );
}; 