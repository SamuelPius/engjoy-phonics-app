
import { motion } from '../../utils/motion';
import { ChevronRight } from 'lucide-react';

interface CTASectionProps {
  onEnrollNow: () => void;
}

const CTASection = ({ onEnrollNow }: CTASectionProps) => {
  return (
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
            onClick={onEnrollNow}
            className="phonics-button bg-white text-phonics-blue px-8 py-4 text-lg"
          >
            Enroll Now
            <ChevronRight className="inline-block ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
