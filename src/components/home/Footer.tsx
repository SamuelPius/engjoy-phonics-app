
import { BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center gap-2 font-comic font-bold text-xl text-phonics-blue">
            <BookOpen className="w-6 h-6" />
            <span>ENGJOY PHONICS & GRAMMAR</span>
          </div>
        </div>
        
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} ENGJOY PHONICS & GRAMMAR. All rights reserved.
          </p>
        </div>
        
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-phonics-blue">Terms</a>
          <a href="#" className="text-gray-600 hover:text-phonics-blue">Privacy</a>
          <a href="#" className="text-gray-600 hover:text-phonics-blue">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
