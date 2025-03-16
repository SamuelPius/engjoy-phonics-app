
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import OnboardingForm from '../components/OnboardingForm';
import AnimatedCharacter from '../components/AnimatedCharacter';

const Onboarding = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const courseId = query.get('courseId');
  
  // Mock course data retrieval - in a real app, this would fetch from an API
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API fetch
    const fetchCourse = () => {
      setLoading(true);
      
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
      const foundCourse = courseId 
        ? courses.find(c => c.id === courseId) 
        : null;
      
      setTimeout(() => {
        setCourse(foundCourse);
        setLoading(false);
      }, 500); // Simulate network delay
    };
    
    fetchCourse();
  }, [courseId]);
  
  // Handle form completion
  const handleFormComplete = (formData: any) => {
    // In a real app, you would send this data to your backend
    console.log('Form data:', formData);
    
    // Navigate to payment page with course and form data
    navigate('/payment', { 
      state: { 
        courseId: formData.courseId,
        studentData: formData
      }
    });
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
            Student Registration
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Please provide the following information to register your child for our phonics and grammar classes.
          </p>
        </motion.div>
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <AnimatedCharacter type="thinking" />
            <p className="mt-4 text-phonics-blue font-medium">Loading...</p>
          </div>
        ) : course ? (
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-md p-6 mb-8 max-w-lg mx-auto"
            >
              <h2 className="text-xl font-bold font-comic mb-4 text-phonics-blue">
                Selected Course
              </h2>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-4">
                <div>
                  <h3 className="font-bold">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold">₹{course.price}</span>
                  <p className="text-xs text-gray-500">{course.duration}</p>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>
                  Level: <span className="font-medium">{course.level}</span>
                </p>
              </div>
            </motion.div>
            
            <OnboardingForm 
              selectedCourseId={course.id}
              onComplete={handleFormComplete}
            />
          </div>
        ) : (
          <div className="text-center py-12">
            <AnimatedCharacter type="thinking" />
            <h2 className="text-xl font-bold text-phonics-blue mt-4 mb-2">
              No Course Selected
            </h2>
            <p className="text-gray-600 mb-6">
              Please select a course before proceeding with registration.
            </p>
            <button
              onClick={() => navigate('/courses')}
              className="phonics-button bg-phonics-blue text-white"
            >
              Browse Courses
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
