
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingForm from '../components/OnboardingForm';
import AuthModal from '../components/auth/AuthModal';
import { toast } from '@/hooks/use-toast';

const Onboarding = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  
  // Simulate checking login status
  useEffect(() => {
    // In a real app, you would check the auth state here
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    
    // If not logged in, show the auth modal
    if (!loggedIn) {
      setShowAuthModal(true);
    }
  }, []);
  
  // Handle auth completion
  const handleAuthComplete = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    setShowAuthModal(false);
    toast({
      title: "Successfully logged in",
      description: "You can now complete your enrollment",
    });
  };
  
  const handleSubmitForm = () => {
    // Navigate to payment after form submission
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <OnboardingForm onSubmit={handleSubmitForm} />
      </div>
      
      {/* Auth Modal */}
      <AuthModal 
        open={showAuthModal} 
        onOpenChange={(open) => {
          setShowAuthModal(open);
          if (!open && !isLoggedIn) {
            // If user closes modal without logging in, navigate back
            navigate('/courses');
            toast({
              title: "Authentication required",
              description: "You need to log in to proceed with enrollment",
              variant: "destructive"
            });
          }
        }}
      />
    </div>
  );
};

export default Onboarding;
