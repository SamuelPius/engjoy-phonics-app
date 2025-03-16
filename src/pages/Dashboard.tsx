
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Calendar, Clock, GraduationCap, 
  ChevronRight, BookA, BarChart, Award
} from 'lucide-react';
import Header from '../components/Header';
import AnimatedCharacter from '../components/AnimatedCharacter';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('courses');
  
  // Mock enrolled courses
  const enrolledCourses = [
    {
      id: '1',
      title: 'Phonics Fundamentals',
      progress: 30,
      nextClass: 'Wed, 25 Aug • 4:00 PM',
      completed: 3,
      total: 10
    }
  ];
  
  // Mock activities
  const activities = [
    {
      id: '1',
      title: 'Letter Sounds Quiz',
      type: 'quiz',
      status: 'completed',
      score: '8/10',
      date: '22 Aug 2023'
    },
    {
      id: '2',
      title: 'Word Blending Practice',
      type: 'activity',
      status: 'pending',
      due: '28 Aug 2023'
    },
    {
      id: '3',
      title: 'Reading Exercise 1',
      type: 'homework',
      status: 'pending',
      due: '30 Aug 2023'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Dashboard Header */}
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl font-bold font-comic mb-2 text-phonics-blue">
                Welcome, Student!
              </h1>
              <p className="text-gray-600">
                Track your progress and continue your learning journey.
              </p>
            </motion.div>
            
            <div className="flex items-center mt-4 md:mt-0">
              <AnimatedCharacter type="celebrating" size="sm" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Dashboard Tabs */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-100">
              <button
                onClick={() => setActiveTab('courses')}
                className={`flex-1 py-4 px-6 font-medium text-center transition-colors ${
                  activeTab === 'courses' 
                    ? 'text-phonics-blue border-b-2 border-phonics-blue' 
                    : 'text-gray-500 hover:text-phonics-blue/70'
                }`}
              >
                <div className="flex items-center justify-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  My Courses
                </div>
              </button>
              
              <button
                onClick={() => setActiveTab('activities')}
                className={`flex-1 py-4 px-6 font-medium text-center transition-colors ${
                  activeTab === 'activities' 
                    ? 'text-phonics-blue border-b-2 border-phonics-blue' 
                    : 'text-gray-500 hover:text-phonics-blue/70'
                }`}
              >
                <div className="flex items-center justify-center">
                  <BookA className="w-5 h-5 mr-2" />
                  Activities
                </div>
              </button>
              
              <button
                onClick={() => setActiveTab('progress')}
                className={`flex-1 py-4 px-6 font-medium text-center transition-colors ${
                  activeTab === 'progress' 
                    ? 'text-phonics-blue border-b-2 border-phonics-blue' 
                    : 'text-gray-500 hover:text-phonics-blue/70'
                }`}
              >
                <div className="flex items-center justify-center">
                  <BarChart className="w-5 h-5 mr-2" />
                  Progress
                </div>
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'courses' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold font-comic text-phonics-blue mb-4">
                    My Enrolled Courses
                  </h2>
                  
                  {enrolledCourses.length > 0 ? (
                    <div className="space-y-4">
                      {enrolledCourses.map(course => (
                        <div 
                          key={course.id}
                          className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex flex-col md:flex-row md:items-center justify-between">
                            <div>
                              <h3 className="font-bold text-lg mb-1">{course.title}</h3>
                              <div className="flex items-center text-sm text-gray-500 mb-3">
                                <Clock className="w-4 h-4 mr-1" />
                                Next class: {course.nextClass}
                              </div>
                              
                              <div className="w-full bg-gray-100 rounded-full h-2.5 mb-1">
                                <div 
                                  className="bg-phonics-green h-2.5 rounded-full" 
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                              <div className="text-xs text-gray-500">
                                {course.completed} of {course.total} lessons completed
                              </div>
                            </div>
                            
                            <div className="mt-4 md:mt-0">
                              <button className="phonics-button bg-phonics-blue text-white">
                                Continue Learning
                                <ChevronRight className="w-4 h-4 ml-1 inline" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <AnimatedCharacter type="thinking" className="mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-phonics-blue mb-2">
                        No courses enrolled yet
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Browse our courses and enroll to start your learning journey.
                      </p>
                      <button className="phonics-button bg-phonics-blue text-white">
                        Explore Courses
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
              
              {activeTab === 'activities' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold font-comic text-phonics-blue mb-4">
                    Learning Activities
                  </h2>
                  
                  <div className="space-y-4">
                    {activities.map(activity => (
                      <div 
                        key={activity.id}
                        className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-bold mb-1">{activity.title}</h3>
                            <div className="flex items-center">
                              <span className={`inline-block px-2 py-0.5 text-xs rounded-full ${
                                activity.status === 'completed' 
                                  ? 'bg-phonics-green/10 text-phonics-green' 
                                  : 'bg-phonics-yellow/10 text-phonics-yellow'
                              }`}>
                                {activity.status === 'completed' ? 'Completed' : 'Pending'}
                              </span>
                              
                              <span className="text-xs text-gray-500 ml-3">
                                {activity.status === 'completed' 
                                  ? `Score: ${activity.score} • ${activity.date}` 
                                  : `Due: ${activity.due}`
                                }
                              </span>
                            </div>
                          </div>
                          
                          <button className={`phonics-button ${
                            activity.status === 'completed' 
                              ? 'bg-gray-100 text-gray-700' 
                              : 'bg-phonics-blue text-white'
                          }`}>
                            {activity.status === 'completed' ? 'Review' : 'Start'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'progress' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold font-comic text-phonics-blue mb-4">
                    Learning Progress
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-xl p-4 text-center">
                      <div className="text-phonics-blue mb-2">
                        <GraduationCap className="w-8 h-8 mx-auto" />
                      </div>
                      <div className="text-3xl font-bold text-phonics-blue mb-1">1</div>
                      <div className="text-sm text-gray-600">Courses in Progress</div>
                    </div>
                    
                    <div className="bg-green-50 rounded-xl p-4 text-center">
                      <div className="text-phonics-green mb-2">
                        <Award className="w-8 h-8 mx-auto" />
                      </div>
                      <div className="text-3xl font-bold text-phonics-green mb-1">3</div>
                      <div className="text-sm text-gray-600">Completed Lessons</div>
                    </div>
                    
                    <div className="bg-yellow-50 rounded-xl p-4 text-center">
                      <div className="text-phonics-yellow mb-2">
                        <Calendar className="w-8 h-8 mx-auto" />
                      </div>
                      <div className="text-3xl font-bold text-phonics-yellow mb-1">85%</div>
                      <div className="text-sm text-gray-600">Average Score</div>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-100 rounded-xl p-6">
                    <h3 className="font-bold mb-4">Recent Achievements</h3>
                    <div className="flex items-center p-4 bg-blue-50 rounded-lg mb-4">
                      <div className="mr-4 bg-white p-2 rounded-full">
                        <BookOpen className="w-6 h-6 text-phonics-blue" />
                      </div>
                      <div>
                        <h4 className="font-bold">Started First Course</h4>
                        <p className="text-sm text-gray-600">Your learning journey has begun!</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <AnimatedCharacter type="celebrating" className="mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        Continue learning to unlock more achievements!
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
