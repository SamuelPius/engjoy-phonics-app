
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CourseSelection from "./pages/CourseSelection";
import Onboarding from "./pages/Onboarding";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AuthModal from "./components/auth/AuthModal";
import { CartProvider } from "./contexts/CartContext";

const queryClient = new QueryClient();

const App = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  
  // Show auth modal on first visit
  useEffect(() => {
    // Check if the user has seen the modal before
    const hasSeenAuthModal = localStorage.getItem('hasSeenAuthModal');
    
    if (!hasSeenAuthModal && window.location.pathname === '/') {
      // Wait a moment before showing the modal
      const timer = setTimeout(() => {
        setShowAuthModal(true);
        localStorage.setItem('hasSeenAuthModal', 'true');
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/courses" element={<CourseSelection />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            
            {/* Auth modal shown on first visit */}
            <AuthModal open={showAuthModal} onOpenChange={setShowAuthModal} />
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
