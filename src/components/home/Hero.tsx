
import { motion } from '../../utils/motion';
import { ChevronRight } from 'lucide-react';
import AnimatedCharacter from '../AnimatedCharacter';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
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
              Our ENGJOY PHONICS & GRAMMAR classes help children under 8 develop strong language skills through engaging activities.
            </p>
            <button 
              onClick={onGetStarted}
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
  );
};

export default Hero;
