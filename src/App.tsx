import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/About";
import PortfolioPage from "./pages/Portfolio";
import ContactPage from "./pages/Contact";
import ServiceAIAutomation from "./pages/ServiceAIAutomation";
import ServiceAIConsultation from "./pages/ServiceAIConsultation";
import ServiceGraphicDesign from "./pages/ServiceGraphicDesign";
import ServiceVideoEditing from "./pages/ServiceVideoEditing";
import PortfolioAIWorkflowAutomation from "./pages/PortfolioAIWorkflowAutomation";
import PortfolioBrandIdentitySystem from "./pages/PortfolioBrandIdentitySystem";
import PortfolioAIIntegrationStrategy from "./pages/PortfolioAIIntegrationStrategy";
import PortfolioProductShowcaseVideo from "./pages/PortfolioProductShowcaseVideo";
import PortfolioCorporateAIAssistant from "./pages/PortfolioCorporateAIAssistant";
import PortfolioInteractiveMarketingCampaign from "./pages/PortfolioInteractiveMarketingCampaign";
import PortfolioWebsiteDevelopment from "./pages/PortfolioWebsiteDevelopment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/ai-automation" element={<ServiceAIAutomation />} />
          <Route path="/services/ai-consultation" element={<ServiceAIConsultation />} />
          <Route path="/services/graphic-design" element={<ServiceGraphicDesign />} />
          <Route path="/services/video-editing" element={<ServiceVideoEditing />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio/ai-workflow-automation" element={<PortfolioAIWorkflowAutomation />} />
          <Route path="/portfolio/brand-identity-system" element={<PortfolioBrandIdentitySystem />} />
          <Route path="/portfolio/ai-integration-strategy" element={<PortfolioAIIntegrationStrategy />} />
          <Route path="/portfolio/product-showcase-video" element={<PortfolioProductShowcaseVideo />} />
          <Route path="/portfolio/corporate-ai-assistant" element={<PortfolioCorporateAIAssistant />} />
          <Route path="/portfolio/interactive-marketing-campaign" element={<PortfolioInteractiveMarketingCampaign />} />
          <Route path="/portfolio/website-development" element={<PortfolioWebsiteDevelopment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
