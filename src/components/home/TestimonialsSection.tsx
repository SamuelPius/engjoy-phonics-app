
import { motion } from '../../utils/motion';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
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
  
  return (
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
  );
};

export default TestimonialsSection;
