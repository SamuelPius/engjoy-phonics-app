
import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

type CharacterProps = {
  type?: 'default' | 'celebrating' | 'thinking' | 'pointing';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const AnimatedCharacter = ({ 
  type = 'default', 
  size = 'md',
  className = ''
}: CharacterProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-32 h-32',
    lg: 'w-48 h-48'
  };
  
  // Different character states
  const characterStates = {
    default: {
      color: 'text-phonics-blue',
      animation: 'animate-bounce-slight',
      icon: (
        <div className="relative">
          <div className="absolute -top-1 -right-2 text-phonics-yellow">
            <Star className="w-6 h-6 animate-spin-slow" />
          </div>
          <div className="w-full h-full rounded-full bg-phonics-blue flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-full bg-white flex flex-col items-center justify-center">
              <div className="flex space-x-4 mb-2">
                <div className="w-2 h-2 rounded-full bg-phonics-blue"></div>
                <div className="w-2 h-2 rounded-full bg-phonics-blue"></div>
              </div>
              <div className="w-6 h-2 rounded-full border-2 border-phonics-blue"></div>
            </div>
          </div>
        </div>
      )
    },
    celebrating: {
      color: 'text-phonics-yellow',
      animation: 'animate-bounce',
      icon: (
        <div className="relative">
          <div className="absolute -top-3 -left-2 text-phonics-red">
            <Star className="w-6 h-6 animate-spin-slow" />
          </div>
          <div className="absolute -top-3 -right-2 text-phonics-green">
            <Star className="w-6 h-6 animate-pulse" />
          </div>
          <div className="w-full h-full rounded-full bg-phonics-yellow flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-full bg-white flex flex-col items-center justify-center">
              <div className="flex space-x-4 mb-2">
                <div className="w-2 h-2 rounded-full bg-phonics-yellow"></div>
                <div className="w-2 h-2 rounded-full bg-phonics-yellow"></div>
              </div>
              <div className="w-6 h-2 rounded-full bg-phonics-yellow flex items-center justify-center">
                <div className="w-8 h-1 rounded-full bg-phonics-yellow"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    thinking: {
      color: 'text-phonics-purple',
      animation: 'animate-pulse',
      icon: (
        <div className="relative">
          <div className="absolute -top-3 -right-3 text-phonics-purple/70">
            <div className="w-5 h-5 rounded-full border-2 border-current animate-pulse"></div>
          </div>
          <div className="w-full h-full rounded-full bg-phonics-purple flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-full bg-white flex flex-col items-center justify-center">
              <div className="flex space-x-4 mb-2">
                <div className="w-2 h-2 rounded-full bg-phonics-purple"></div>
                <div className="w-2 h-2 rounded-full bg-phonics-purple"></div>
              </div>
              <div className="w-6 h-1 rounded-full bg-phonics-purple"></div>
            </div>
          </div>
        </div>
      )
    },
    pointing: {
      color: 'text-phonics-green',
      animation: 'animate-wiggle',
      icon: (
        <div className="relative">
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
            <div className="w-4 h-4 bg-phonics-green rounded-full"></div>
          </div>
          <div className="w-full h-full rounded-full bg-phonics-green flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-full bg-white flex flex-col items-center justify-center">
              <div className="flex space-x-4 mb-2">
                <div className="w-2 h-2 rounded-full bg-phonics-green"></div>
                <div className="w-2 h-2 rounded-full bg-phonics-green"></div>
              </div>
              <div className="w-6 h-2 rounded-full border-2 border-phonics-green"></div>
            </div>
          </div>
        </div>
      )
    }
  };
  
  useEffect(() => {
    // Trigger animation periodically
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const currentCharacter = characterStates[type];
  
  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <div className={`${isAnimating ? currentCharacter.animation : 'animate-float'}`}>
        {currentCharacter.icon}
      </div>
    </div>
  );
};

export default AnimatedCharacter;
