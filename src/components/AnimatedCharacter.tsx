
import { motion } from '../utils/motion';

type CharacterType = 'default' | 'celebrating' | 'thinking' | 'pointing';
type CharacterSize = 'sm' | 'md' | 'lg';

type AnimatedCharacterProps = {
  type?: CharacterType;
  size?: CharacterSize;
  className?: string;
};

const AnimatedCharacter = ({ 
  type = 'default',
  size = 'md',
  className = '' 
}: AnimatedCharacterProps) => {
  // Define size classes
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };
  
  // Define character images and animations based on type
  const getCharacterConfig = () => {
    switch (type) {
      case 'celebrating':
        return {
          image: '👧',
          animation: {
            y: [0, -10, 0],
            rotate: [0, 5, 0, -5, 0],
            transition: {
              y: { repeat: Infinity, duration: 1, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
            }
          }
        };
      
      case 'thinking':
        return {
          image: '🤔',
          animation: {
            rotate: [0, 10, 0, -10, 0],
            transition: {
              rotate: { repeat: Infinity, duration: 3, ease: "easeInOut" }
            }
          }
        };
      
      case 'pointing':
        return {
          image: '👉',
          animation: {
            x: [0, 5, 0],
            transition: {
              x: { repeat: Infinity, duration: 0.8, ease: "easeInOut" }
            }
          }
        };
      
      default:
        return {
          image: '😊',
          animation: {
            scale: [1, 1.1, 1],
            transition: {
              scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
            }
          }
        };
    }
  };
  
  const { image, animation } = getCharacterConfig();
  
  return (
    <motion.div 
      className={`${sizeClasses[size]} flex items-center justify-center text-4xl ${className}`}
      animate={animation}
    >
      {image}
    </motion.div>
  );
};

export default AnimatedCharacter;
