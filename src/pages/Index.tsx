import { useNavigate } from 'react-router-dom';
// Fix import with explicit path
import { motion } from 'framer-motion';
import { BookOpen, Star, GraduationCap, BarChart, Clock, Check, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import AnimatedCharacter from '../components/AnimatedCharacter';

const Index = () => {
  const navigate = useNavigate();
  
  // Navigation handler
  const handleGetStarted = () => {
    navigate('/courses');
  };
  
  // Testimonials
  const testimonials = [
    {
      name: "Rahul's Mom",
      text: "My son improved his reading skills tremendously in just 2 months!",
      rating: 5
    },
    {
      name: "Priya's Dad",
      text: "The teachers are amazing and my daughter looks forward to her classes every week.",
      rating: 5
    },
    {
      name: "Arjun's Parents",
      text: "Best phonics program we've found after trying several others.",
      rating: 5
    }
  ];
  
  // Benefits
  const benefits = [
    {
      icon: <BookOpen className="h-8 w-8 text-phonics-blue" />,
      title: "Phonics Mastery",
      description: "Structured approach to teach letter sounds and blending"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-phonics-yellow" />,
      title: "Grammar Foundations",
      description: "Age-appropriate grammar lessons through fun activities"
    },
    {
      icon: <BarChart className="h-8 w-8 text-phonics-green" />,
      title: "Progress Tracking",
      description: "Regular assessments and detailed progress reports"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-24 pb-16 px-4 md:pt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-comic mb-4 text-phonics-blue">
                Make Reading <span className="text-phonics-yellow">Fun</span> & <span className="text-phonics-green">Easy</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                Our playful phonics and grammar classes help children under 8 develop strong language skills through engaging activities.
              </p>
              <button 
                onClick={handleGetStarted}
                className="phonics-button bg-phonics-blue text-white px-8 py-4 text-lg"
              >
                Get Started
                <ChevronRight className="inline-block ml-2 h-5 w-5" />
              </button>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="absolute top-[-30px] right-[10%] z-10">
              <AnimatedCharacter type="celebrating" size="sm" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden relative border-4 border-phonics-blue/20"
            >
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" 
                alt="Children learning"
                className="w-full h-auto"
              />
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 to-white/30 backdrop-blur-sm p-4"
              >
                <p className="text-center font-medium text-phonics-blue">
                  Join 1000+ happy students learning with us!
                </p>
              </motion.div>
            </motion.div>
            <div className="absolute bottom-[-20px] left-[10%] z-10">
              <AnimatedCharacter type="default" size="sm" />
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-comic text-center mb-12 text-phonics-blue">
            Why Choose Our Classes?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="phonics-card bg-gradient-to-br from-gray-50 to-white text-center"
              >
                <div className="inline-block p-4 rounded-full bg-gray-100 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 font-comic">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold font-comic mb-6 text-phonics-purple">
                Our Fun Learning Approach
              </h2>
              
              <div className="space-y-4">
                {[
                  "Interactive games that make learning fun",
                  "Small group classes for personalized attention",
                  "Certified teachers with experience in early education",
                  "Curriculum designed for kids under 8 years",
                  "Regular progress updates for parents"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="bg-phonics-purple/10 rounded-full p-1 mt-1">
                      <Check className="h-4 w-4 text-phonics-purple" />
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <div className="md:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="relative z-10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80" 
                  alt="Kids learning"
                  className="rounded-2xl shadow-lg border-4 border-white"
                />
                <div className="absolute -top-4 -right-4">
                  <AnimatedCharacter type="pointing" size="sm" />
                </div>
              </motion.div>
              
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-phonics-yellow/20 rounded-full w-32 h-32 blur-3xl -z-10"></div>
              <div className="absolute bottom-1/3 right-0 transform translate-x-1/4 bg-phonics-blue/20 rounded-full w-40 h-40 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-comic text-center mb-12 text-phonics-blue">
            What Parents Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-phonics-yellow fill-phonics-yellow" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-phonics-blue">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-phonics-blue to-phonics-purple text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold font-comic mb-6">
              Ready to Start Your Child's Learning Journey?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join our phonics and grammar classes today and watch your child's language skills blossom!
            </p>
            <button 
              onClick={handleGetStarted}
              className="phonics-button bg-white text-phonics-blue px-8 py-4 text-lg"
            >
              Enroll Now
              <ChevronRight className="inline-block ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2 font-comic font-bold text-xl text-phonics-blue">
              <BookOpen className="w-6 h-6" />
              <span>Phonics Playground</span>
            </div>
          </div>
          
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Phonics Playground. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-phonics-blue">Terms</a>
            <a href="#" className="text-gray-600 hover:text-phonics-blue">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-phonics-blue">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
