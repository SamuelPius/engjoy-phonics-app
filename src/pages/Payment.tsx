
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentGateway from '../components/PaymentGateway';
import AuthModal from '../components/auth/AuthModal';
import { toast } from '@/hooks/use-toast';

const Payment = () => {
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
  
  // Handle successful payment
  const handlePaymentSuccess = () => {
    toast({
      title: "Payment successful!",
      description: "Thank you for your purchase. Your course access has been activated.",
    });
    // Redirect to homepage after successful payment
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const handlePaymentFailure = (error: any) => {
    toast({
      title: "Payment failed",
      description: "There was an issue processing your payment. Please try again.",
      variant: "destructive"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <PaymentGateway 
          amount={4999}
          currency="INR"
          name="ENGJOY PHONICS & GRAMMAR"
          email="user@example.com"
          phone="9876543210"
          description="Course enrollment payment"
          onSuccess={handlePaymentSuccess}
          onFailure={handlePaymentFailure}
        />
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
              description: "You need to log in to proceed with payment",
              variant: "destructive"
            });
          }
        }}
      />
    </div>
  );
};

export default Payment;
