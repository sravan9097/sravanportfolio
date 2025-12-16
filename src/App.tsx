
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ProjectNotFound from "./components/ProjectNotFound";
import { ThemeProvider } from "./components/ThemeProvider";
import ScrollToTop from "./components/ui/ScrollToTop";
import { PerformanceMonitor } from "./components/PerformanceMonitor";
import { OfflinePage } from "./components/OfflinePage";
import { useNetworkStatus } from "./hooks/useNetworkStatus";
// Removed GA pageview tracking; Vercel Web Analytics handles page views automatically

// Lazy load pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetailPage = lazy(() => import("./pages/projects/[projectid]"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent"></div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

// No RouteChangeTracker needed for Vercel Web Analytics

const App = () => {
  const { isOnline } = useNetworkStatus();
  const [showOfflinePage, setShowOfflinePage] = useState(false);

  useEffect(() => {
    // Show offline page after a brief delay to avoid flashing
    const timer = setTimeout(() => {
      setShowOfflinePage(!isOnline);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isOnline]);

  // Show offline page when offline
  if (showOfflinePage) {
    return (
      <ThemeProvider>
        <OfflinePage onRetry={() => window.location.reload()} />
      </ThemeProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <PerformanceMonitor />
          <Toaster />
          <Sonner />
            <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<Index />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:projectid" element={<ProjectDetailPage />} />
                <Route path="/project/*" element={<ProjectNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
          <SpeedInsights />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
