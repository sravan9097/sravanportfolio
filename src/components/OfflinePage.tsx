import { Button } from "@/components/ui/button";
import { WifiOff, RefreshCw } from "lucide-react";

interface OfflinePageProps {
  onRetry?: () => void;
}

export const OfflinePage = ({ onRetry }: OfflinePageProps) => {
  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <div className="flex justify-center">
          <WifiOff className="h-16 w-16 text-muted-foreground" />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            You're Offline
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Don't worry! You can still browse my cached portfolio content. 
            Some features may be limited until you're back online.
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={handleRetry}
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h3 className="font-semibold text-foreground mb-2">
            Available Offline:
          </h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Portfolio projects and case studies</li>
            <li>• Project images and screenshots</li>
            <li>• Contact information</li>
            <li>• About section</li>
          </ul>
        </div>
      </div>
    </div>
  );
}; 