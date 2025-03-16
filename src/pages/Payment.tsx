
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import PaymentGateway from '../components/PaymentGateway';
import AnimatedCharacter from '../components/AnimatedCharacter';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [course, setCourse] = useState<any>(null);
  const [studentData, setStudentData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Extract data from location state
    if (location.state?.courseId && location.state?.studentData) {
      const { courseId, studentData } = location.state;
      setStudentData(studentData);
      
      // Fetch course details (mock)
      fetchCourse(courseId);
    } else {
      // No course selected, redirect back
      navigate('/courses');
    }
  }, [location, navigate]);
  
  // Mock course data fetch
  const fetchCourse = (courseId: string) => {
    // Mock course data
    const courses = [
      {
        id: '1',
        title: 'Phonics Fundamentals',
        description: 'Learn letter sounds and basic blending through fun activities.',
        level: 'Beginner',
        price: 3999,
        duration: '8 weeks'
      },
      {
        id: '2',
        title: 'Reading Adventures',
        description: 'Build confidence with simple sentences and word recognition.',
        level: 'Beginner',
        price: 4299,
        duration: '10 weeks'
      },
      {
        id: '3',
        title: 'Grammar Basics',
        description: 'Introduction to simple grammar rules through stories and games.',
        level: 'Beginner',
        price: 3799,
        duration: '8 weeks'
      },
      {
        id: '4',
        title: 'Phonics Level 2',
        description: 'Advanced phonics patterns and more complex blending skills.',
        level: 'Intermediate',
        price: 4599,
        duration: '10 weeks'
      },
      {
        id: '5',
        title: 'Creative Writing',
        description: 'Learn to create simple stories using phonics and grammar skills.',
        level: 'Intermediate',
        price: 4899,
        duration: '12 weeks'
      },
      {
        id: '6',
        title: 'Grammar Mastery',
        description: 'Deeper exploration of grammar concepts for confident writers.',
        level: 'Advanced',
        price: 5299,
        duration: '12 weeks'
      }
    ];
    
    // Find course by ID
    const foundCourse = courses.find(c => c.id === courseId);
    
    setTimeout(() => {
      setCourse(foundCourse);
      setLoading(false);
    }, 500); // Simulate network delay
  };
  
  // Handle payment success
  const handlePaymentSuccess = () => {
    // In a real app, you would create the enrollment in your database
    // For now, just navigate to the dashboard
    navigate('/dashboard');
  };
  
  // Handle payment failure
  const handlePaymentFailure = (error: any) => {
    console.error('Payment failed:', error);
    // You might want to show an error message or try again
  };
  
  // Go back
  const handleBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={handleBack}
          className="flex items-center text-phonics-blue mb-6 font-medium hover:underline"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back
        </button>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-bold font-comic mb-4 text-phonics-blue">
            Complete Your Registration
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Please complete the payment to enroll in the selected course.
          </p>
        </motion.div>
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <AnimatedCharacter type="thinking" />
            <p className="mt-4 text-phonics-blue font-medium">Loading payment details...</p>
          </div>
        ) : course && studentData ? (
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-md p-6 mb-8 max-w-lg mx-auto"
            >
              <h2 className="text-xl font-bold font-comic mb-4 text-phonics-blue">
                Order Summary
              </h2>
              
              <div className="border-b border-gray-100 pb-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">{course.title}</h3>
                  <span className="font-medium">₹{course.price}</span>
                </div>
                <p className="text-sm text-gray-600">{course.level} • {course.duration}</p>
              </div>
              
              <div className="mb-4">
                <h3 className="font-medium text-gray-700 mb-2">Student Information</h3>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Name:</span> {studentData.childName}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Age:</span> {studentData.childAge} years
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Grade:</span> {studentData.grade}
                </p>
              </div>
              
              <div className="mb-4">
                <h3 className="font-medium text-gray-700 mb-2">Parent Information</h3>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Name:</span> {studentData.parentName}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Email:</span> {studentData.parentEmail}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Phone:</span> {studentData.parentPhone}
                </p>
              </div>
            </motion.div>
            
            <PaymentGateway
              amount={course.price}
              name={studentData.parentName}
              email={studentData.parentEmail}
              phone={studentData.parentPhone}
              description={`Enrollment for ${course.title}`}
              onSuccess={handlePaymentSuccess}
              onFailure={handlePaymentFailure}
            />
          </div>
        ) : (
          <div className="text-center py-12">
            <AnimatedCharacter type="thinking" />
            <h2 className="text-xl font-bold text-phonics-red mt-4 mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              We couldn't process your payment request. Please try again.
            </p>
            <button
              onClick={() => navigate('/courses')}
              className="phonics-button bg-phonics-blue text-white"
            >
              Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
