
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectNotFound from "./components/ProjectNotFound";
import FinanceAppProject from "./pages/projects/FinanceAppProject";
import FitnessTrackerProject from "./pages/projects/FitnessTrackerProject";
import BCExperienceProject from "./pages/projects/BCexperienceproject";
import TravelAppProject from "./pages/projects/TravelAppProject";
import DesignSystemProject from "./pages/projects/DesignSystemProject";
import { ThemeProvider } from "./components/ThemeProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<Index />} />
            <Route path="/project/finance-app" element={<FinanceAppProject />} />
            <Route path="/project/fitness-tracker" element={<FitnessTrackerProject />} />
            <Route path="/project/bcexperienceproject" element={<BCExperienceProject />} />
            <Route path="/project/travel-app" element={<TravelAppProject />} />
            <Route path="/project/design-system" element={<DesignSystemProject />} />
            <Route path="/project/*" element={<ProjectNotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
