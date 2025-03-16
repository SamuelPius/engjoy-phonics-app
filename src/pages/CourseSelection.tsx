
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Filter, Search } from 'lucide-react';
import Header from '../components/Header';
import CourseCard from '../components/CourseCard';
import AnimatedCharacter from '../components/AnimatedCharacter';

const CourseSelection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<string | null>(null);
  
  // Mock course data
  const courses = [
    {
      id: '1',
      title: 'Phonics Fundamentals',
      description: 'Learn letter sounds and basic blending through fun activities.',
      level: 'Beginner',
      price: 3999,
      duration: '8 weeks',
      tag: 'Most Popular'
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
  
  // Filter courses based on search term and level filter
  const filteredCourses = courses.filter(course => {
    return (
      (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filter ? course.level === filter : true)
    );
  });
  
  // Handle course selection
  const handleCourseSelect = (courseId: string) => {
    navigate(`/onboarding?courseId=${courseId}`);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold font-comic mb-4 text-phonics-blue">
              Choose Your Learning Adventure
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our phonics and grammar courses designed specially for young learners.
            </p>
          </motion.div>
          
          {/* Search and Filter */}
          <div className="bg-white rounded-2xl shadow-md p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="phonics-input pl-10 w-full border-phonics-blue/20 focus:border-phonics-blue focus:ring-phonics-blue/30"
                />
              </div>
              
              <div className="flex gap-3">
                <div className="inline-flex items-center">
                  <Filter className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm font-medium text-gray-600">Level:</span>
                </div>
                
                {['Beginner', 'Intermediate', 'Advanced'].map(level => (
                  <button
                    key={level}
                    onClick={() => setFilter(filter === level ? null : level)}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      filter === level 
                        ? 'bg-phonics-blue text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Courses Section */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  level={course.level as any}
                  price={course.price}
                  duration={course.duration}
                  tag={course.tag}
                  onSelect={handleCourseSelect}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <AnimatedCharacter type="thinking" className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-phonics-blue mb-2">
                No courses found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilter(null);
                }}
                className="mt-4 phonics-button bg-phonics-blue text-white"
              >
                Show All Courses
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Info Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-phonics-yellow/10 to-phonics-green/10 rounded-3xl mx-4 md:mx-12 mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 text-center">
              <div className="inline-block">
                <AnimatedCharacter type="default" size="lg" />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold font-comic mb-4 text-phonics-blue">
                Not Sure Which Course to Choose?
              </h2>
              <p className="text-gray-700 mb-6">
                Our courses are designed to follow a natural learning progression. If your child is 
                new to phonics or grammar, we recommend starting with our Beginner courses. 
                You can always progress to more advanced levels as they build confidence and skills.
              </p>
              <div className="bg-white rounded-xl p-4 border border-phonics-blue/20">
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-phonics-blue mt-0.5" />
                  <div>
                    <h3 className="font-bold text-phonics-blue">Free Assessment Available</h3>
                    <p className="text-sm text-gray-600">
                      Not sure which level is right? Contact us for a free assessment session to determine 
                      the perfect starting point for your child.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseSelection;
