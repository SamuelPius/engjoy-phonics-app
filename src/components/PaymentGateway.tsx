
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

type PaymentProps = {
  amount: number;
  currency?: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  onSuccess: () => void;
  onFailure: (error: any) => void;
};

const PaymentGateway = ({
  amount,
  currency = 'INR',
  name,
  email,
  phone,
  description,
  onSuccess,
  onFailure
}: PaymentProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'failed'>('idle');
  const [error, setError] = useState<string | null>(null);
  
  // In a real app, this would be coming from a backend API
  const createOrderId = () => {
    // Mock order creation - in a real app this would be an API call
    return Promise.resolve('order_' + Math.random().toString(36).substring(7));
  };
  
  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);
  
  const handlePayment = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Get order ID (in real app, this would be from your backend)
      const orderId = await createOrderId();
      
      // Razorpay options
      const options = {
        key: 'rzp_test_YourTestKeyHere', // Replace with your Razorpay key
        amount: amount * 100, // Razorpay takes amount in smallest currency unit
        currency,
        name: 'ENGJOY PHONICS & GRAMMAR',
        description,
        order_id: orderId,
        prefill: {
          name,
          email,
          contact: phone
        },
        theme: {
          color: '#4C9AFF'
        },
        handler: function(response: any) {
          // Payment successful
          setPaymentStatus('success');
          setLoading(false);
          
          // Call success callback
          setTimeout(() => {
            onSuccess();
          }, 2000);
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
          }
        }
      };
      
      // Initialize Razorpay
      const razorpay = new window.Razorpay(options);
      razorpay.open();
      
      // Handle Razorpay errors
      razorpay.on('payment.failed', function(response: any) {
        setPaymentStatus('failed');
        setError(response.error.description);
        setLoading(false);
        onFailure(response.error);
      });
    } catch (error) {
      setPaymentStatus('failed');
      setError('Failed to initialize payment gateway');
      setLoading(false);
      onFailure(error);
    }
  };
  
  // Handle going back
  const handleBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold text-center mb-6 font-comic text-phonics-blue">
          Complete Your Enrollment
        </h2>
        
        {paymentStatus === 'success' ? (
          <div className="text-center py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-block text-phonics-green mb-4"
            >
              <CheckCircle size={80} />
            </motion.div>
            <h3 className="text-xl font-bold text-phonics-green mb-2">Payment Successful!</h3>
            <p className="text-gray-600 mb-6">
              Your enrollment is complete. You can now access your course.
            </p>
            <button
              onClick={() => navigate('/dashboard')}
              className="phonics-button bg-phonics-green text-white w-full"
            >
              Go to Dashboard
            </button>
          </div>
        ) : paymentStatus === 'failed' ? (
          <div className="text-center py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-block text-phonics-red mb-4"
            >
              <AlertCircle size={80} />
            </motion.div>
            <h3 className="text-xl font-bold text-phonics-red mb-2">Payment Failed</h3>
            <p className="text-gray-600 mb-2">
              {error || 'There was a problem processing your payment.'}
            </p>
            <p className="text-gray-600 mb-6">
              Please try again or contact support.
            </p>
            <div className="flex flex-col space-y-3">
              <button
                onClick={handlePayment}
                className="phonics-button bg-phonics-blue text-white"
                disabled={loading}
              >
                Try Again
              </button>
              <button
                onClick={handleBack}
                className="phonics-button bg-gray-100 text-gray-700"
              >
                Go Back
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Course Fee</span>
                <span className="font-bold">₹{amount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 pb-2 border-b border-gray-200">
                <span className="text-gray-600">GST (18%)</span>
                <span className="font-bold">₹{(amount * 0.18).toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{(amount * 1.18).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-4 mb-6">
              <h3 className="font-bold text-phonics-blue mb-2">Payment Information</h3>
              <p className="text-sm text-gray-600">
                Secure payment powered by Razorpay. Your payment information is encrypted and secure.
              </p>
            </div>
            
            <button
              onClick={handlePayment}
              className="phonics-button bg-phonics-blue text-white w-full"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Pay Now'}
            </button>
            
            <button
              onClick={handleBack}
              className="phonics-button bg-gray-100 text-gray-700 w-full mt-3"
              disabled={loading}
            >
              Go Back
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default PaymentGateway;
