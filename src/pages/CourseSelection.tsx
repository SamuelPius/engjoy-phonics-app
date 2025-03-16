
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import CourseCard from '../components/CourseCard';

// Course Data
const coursesData = [
  {
    id: 'phonics-basics',
    title: 'Phonics Basics',
    description: 'Learn the foundation of phonics, focusing on letter sounds, blends, and basic reading skills.',
    level: 'Beginner' as const,
    price: 2999,
    duration: '8 weeks',
    tag: 'Most Popular'
  },
  {
    id: 'intermediate-grammar',
    title: 'Intermediate Grammar',
    description: 'Master the rules of grammar including parts of speech, sentence structure, and punctuation.',
    level: 'Intermediate' as const,
    price: 3999,
    duration: '10 weeks'
  },
  {
    id: 'advanced-reading',
    title: 'Advanced Reading',
    description: 'Develop advanced reading comprehension skills with challenging texts and critical analysis.',
    level: 'Advanced' as const,
    price: 4999,
    duration: '12 weeks'
  },
  {
    id: 'vocabulary-builder',
    title: 'Vocabulary Builder',
    description: 'Expand your word knowledge with systematic vocabulary building techniques and exercises.',
    level: 'Intermediate' as const,
    price: 3499,
    duration: '8 weeks'
  },
  {
    id: 'writing-mastery',
    title: 'Writing Mastery',
    description: 'Learn to write clearly and effectively through structured practice and personalized feedback.',
    level: 'Advanced' as const,
    price: 5499,
    duration: '12 weeks'
  },
  {
    id: 'phonics-for-beginners',
    title: 'Phonics for Beginners',
    description: 'A gentle introduction to phonics for young learners starting their reading journey.',
    level: 'Beginner' as const,
    price: 1999,
    duration: '6 weeks',
    tag: 'New'
  }
];

const CourseSelection = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const handleCourseSelect = (courseId: string) => {
    // In a real app, you might want to store the selected course ID
    navigate('/onboarding');
  };
  
  // Filter courses based on selected level
  const filteredCourses = filter === 'all' 
    ? coursesData 
    : coursesData.filter(course => course.level.toLowerCase() === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-comic text-phonics-blue mb-4">
            Explore Our Courses
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the perfect course to enhance your phonics and grammar skills. Choose from our range of expertly designed programs.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all' ? 'bg-phonics-blue text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setFilter('all')}
          >
            All Levels
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'beginner' ? 'bg-phonics-blue text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setFilter('beginner')}
          >
            Beginner
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'intermediate' ? 'bg-phonics-blue text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setFilter('intermediate')}
          >
            Intermediate
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'advanced' ? 'bg-phonics-blue text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setFilter('advanced')}
          >
            Advanced
          </button>
        </div>
        
        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              level={course.level}
              price={course.price}
              duration={course.duration}
              tag={course.tag}
              onSelect={handleCourseSelect}
            />
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-phonics-blue/10 py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-comic text-phonics-blue mb-4">
            Need Help Choosing the Right Course?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our education consultants are here to help you find the perfect learning path based on your needs and goals.
          </p>
          <button 
            className="phonics-button bg-phonics-blue text-white text-lg px-8"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseSelection;
