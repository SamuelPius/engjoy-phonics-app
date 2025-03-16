
import { useState } from 'react';
import { motion } from '../utils/motion';
import { BookOpen, Clock, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { toast } from '@/hooks/use-toast';

type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  level: CourseLevel;
  price: number;
  duration: string;
  tag?: string;
  onSelect?: (id: string) => void;
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
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { addToCart, isInCart, openCart } = useCart();
  
  const levelColors = {
    Beginner: 'bg-emerald-100 text-emerald-800',
    Intermediate: 'bg-blue-100 text-blue-800',
    Advanced: 'bg-purple-100 text-purple-800',
  };
  
  const handleEnroll = () => {
    if (onSelect) {
      onSelect(id);
    } else {
      navigate('/onboarding');
    }
  };
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (isInCart(id)) {
      openCart();
      return;
    }
    
    addToCart({
      id,
      title,
      price
    });
    
    toast({
      title: "Added to cart",
      description: `${title} has been added to your cart.`,
    });
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md overflow-hidden relative"
      whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {tag && (
        <div className="absolute top-4 right-4 bg-phonics-yellow/90 text-phonics-blue font-bold text-xs px-3 py-1 rounded-full z-10">
          {tag}
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className={`${levelColors[level]} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
            {level}
          </span>
          <span className="flex items-center text-gray-500 text-sm">
            <Clock className="inline-block w-4 h-4 mr-1" />
            {duration}
          </span>
        </div>
        
        <h3 className="text-xl font-bold font-comic text-phonics-blue mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
          <div className="font-bold text-lg">
            ₹{price}
            <span className="text-xs font-normal text-gray-500 ml-1">incl. GST</span>
          </div>
          
          <div className="flex gap-2">
            <motion.button
              className="p-2 rounded-full bg-phonics-yellow/20 text-phonics-blue"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              onClick={handleAddToCart}
              title={isInCart(id) ? "View cart" : "Add to cart"}
            >
              <ShoppingCart className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="phonics-button bg-phonics-blue text-white"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              onClick={handleEnroll}
            >
              Enroll Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
