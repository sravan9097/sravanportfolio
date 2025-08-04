import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trash2, RefreshCw, Database, HardDrive } from "lucide-react";
import { useNetworkStatus } from "@/hooks/useNetworkStatus";

interface CacheInfo {
  name: string;
  size: number;
  urls: string[];
}

export const CacheManager = () => {
  const [cacheInfo, setCacheInfo] = useState<CacheInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalSize, setTotalSize] = useState(0);
  const { getCacheStatus, clearCache, updateServiceWorker, isCacheSupported } = useNetworkStatus();

  useEffect(() => {
    loadCacheInfo();
  }, []);

  const loadCacheInfo = async () => {
    if (!isCacheSupported) return;

    setIsLoading(true);
    try {
      const status = await getCacheStatus();
      if (status) {
        setCacheInfo(status);
        const total = status.reduce((sum, cache) => sum + cache.size, 0);
        setTotalSize(total);
      }
    } catch (error) {
      console.error('Error loading cache info:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearCache = async () => {
    setIsLoading(true);
    try {
      const success = await clearCache();
      if (success) {
        setCacheInfo([]);
        setTotalSize(0);
        console.log('Cache cleared successfully');
      }
    } catch (error) {
      console.error('Error clearing cache:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateServiceWorker = async () => {
    setIsLoading(true);
    try {
      const success = await updateServiceWorker();
      if (success) {
        console.log('Service worker updated successfully');
      }
    } catch (error) {
      console.error('Error updating service worker:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (!isCacheSupported) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Cache Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Caching is not supported in this browser.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HardDrive className="h-5 w-5" />
          Cache Manager
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Cache Summary */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Total Cached Items:</span>
            <Badge variant="secondary">{totalSize}</Badge>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Cache Types:</span>
            <Badge variant="outline">{cacheInfo.length}</Badge>
          </div>
        </div>

        {/* Cache Types */}
        {cacheInfo.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Cache Types:</h4>
            {cacheInfo.map((cache) => (
              <div key={cache.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium capitalize">
                    {cache.name.replace('-v2', '').replace('-', ' ')}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {cache.size} items
                  </Badge>
                </div>
                <Progress value={(cache.size / totalSize) * 100} className="h-1" />
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={loadCacheInfo}
            disabled={isLoading}
            className="flex-1"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleUpdateServiceWorker}
            disabled={isLoading}
            className="flex-1"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Update SW
          </Button>
          
          <Button
            variant="destructive"
            size="sm"
            onClick={handleClearCache}
            disabled={isLoading}
            className="flex-1"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear
          </Button>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent mx-auto"></div>
          </div>
        )}

        {/* Cache Info */}
        {cacheInfo.length > 0 && (
          <details className="text-xs text-muted-foreground">
            <summary className="cursor-pointer hover:text-foreground">
              Show cached URLs
            </summary>
            <div className="mt-2 space-y-1">
              {cacheInfo.map((cache) => (
                <div key={cache.name} className="space-y-1">
                  <div className="font-medium">{cache.name}:</div>
                  {cache.urls.map((url, index) => (
                    <div key={index} className="pl-2 text-xs opacity-75">
                      {url}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </details>
        )}
      </CardContent>
    </Card>
  );
}; 