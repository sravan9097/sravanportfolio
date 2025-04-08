
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectNotFound from "./components/ProjectNotFound";
import FinanceAppProject from "./pages/projects/FinanceAppProject";
import FitnessTrackerProject from "./pages/projects/FitnessTrackerProject";
import EcommerceRedesignProject from "./pages/projects/EcommerceRedesignProject";
import TravelAppProject from "./pages/projects/TravelAppProject";

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
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<Index />} />
          <Route path="/project/finance-app" element={<FinanceAppProject />} />
          <Route path="/project/fitness-tracker" element={<FitnessTrackerProject />} />
          <Route path="/project/ecommerce-redesign" element={<EcommerceRedesignProject />} />
          <Route path="/project/travel-app" element={<TravelAppProject />} />
          <Route path="/project/*" element={<ProjectNotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
