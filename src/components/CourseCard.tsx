
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Book, Star } from "lucide-react";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  duration: string;
  tag?: string;
  onSelect: (id: string) => void;
};

const CourseCard = ({
  id,
  title,
  description,
  level,
  price,
  duration,
  tag,
  onSelect
}: CourseCardProps) => {
  // Map level to color
  const levelColors = {
    Beginner: 'bg-phonics-green/10 text-phonics-green border-phonics-green/30',
    Intermediate: 'bg-phonics-yellow/10 text-phonics-yellow border-phonics-yellow/30',
    Advanced: 'bg-phonics-red/10 text-phonics-red border-phonics-red/30'
  };
  
  // Map level to background color
  const cardColors = {
    Beginner: 'from-phonics-green/5 to-transparent border-phonics-green/20',
    Intermediate: 'from-phonics-yellow/5 to-transparent border-phonics-yellow/20',
    Advanced: 'from-phonics-red/5 to-transparent border-phonics-red/20'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
      className={`phonics-card bg-gradient-to-br ${cardColors[level]}`}
    >
      <div className="flex justify-between items-start">
        <Badge variant="outline" className={`font-medium ${levelColors[level]}`}>
          {level}
        </Badge>
        {tag && (
          <Badge className="bg-phonics-purple text-white">
            {tag}
          </Badge>
        )}
      </div>
      
      <div className="mt-4 mb-6 flex items-center">
        <Book className="mr-2 h-5 w-5 text-phonics-blue" />
        <h3 className="text-xl font-bold font-comic">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-6 text-sm">{description}</p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-phonics-yellow text-phonics-yellow" />
            ))}
          </div>
        </div>
        <div className="text-sm text-gray-500">
          {duration}
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-auto">
        <div className="text-lg font-bold">
          ₹{price}
        </div>
        <button
          onClick={() => onSelect(id)}
          className="phonics-button bg-phonics-blue text-white text-sm"
        >
          Enroll Now
        </button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
