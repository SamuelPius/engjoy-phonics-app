
import { motion } from '../../utils/motion';
import { Check } from 'lucide-react';
import AnimatedCharacter from '../AnimatedCharacter';

const LearningApproach = () => {
  const learningPoints = [
    "Interactive games that make learning fun",
    "Small group classes for personalized attention",
    "Certified teachers with experience in early education",
    "Curriculum designed for kids under 8 years",
    "Regular progress updates for parents"
  ];

  return (
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
              {learningPoints.map((item, i) => (
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
  );
};

export default LearningApproach;
