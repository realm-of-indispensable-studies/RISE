import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import PanelOfRise from "./pages/PanelOfRise";
import CareerMapping from "./pages/CareerMapping";
import GraguateNexus from "./pages/GraguateNexus";
import MultiDisciplinary from "./pages/MultiDisciplinary";
import ClubDeRise from "./pages/ClubDeRise";
import NewsLetters from "./pages/NewsLetters";
import ScrollToTop from "@/components/ScrollToTop";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/panel-of-rise" element={<PanelOfRise />} />
          <Route path="/career-mapping" element={<CareerMapping />} />
          <Route path="/graguate-nuxes" element={<GraguateNexus />} />
          <Route path="/multi-disciplinary" element={<MultiDisciplinary />} />
          <Route path="/club-de-rise" element={<ClubDeRise />} />
          <Route path="/news-letters" element={<NewsLetters />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
