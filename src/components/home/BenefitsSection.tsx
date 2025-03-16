
import { motion } from '../../utils/motion';
import { BookOpen, GraduationCap, BarChart } from 'lucide-react';

interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

const BenefitsSection = () => {
  const benefits: Benefit[] = [
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
  );
};

export default BenefitsSection;
