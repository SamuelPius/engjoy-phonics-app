
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, GraduationCap, Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  // Only show header on specific pages
  if (['/onboarding', '/payment'].includes(location.pathname)) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200 px-4 md:px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 font-comic font-bold text-xl text-phonics-blue"
        >
          <Book className="w-8 h-8 text-phonics-blue animate-bounce-slight" />
          <span>ENGJOY PHONICS & GRAMMAR</span>
        </Link>
        
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full bg-phonics-blue/10 text-phonics-blue"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        <nav className={`${
          menuOpen 
            ? 'flex absolute top-16 left-0 right-0 flex-col bg-white p-4 shadow-lg animate-fade-in-up' 
            : 'hidden md:flex'
        } md:flex-row md:static md:shadow-none md:p-0 gap-6`}>
          <Link 
            to="/" 
            className="font-medium p-2 rounded-xl hover:bg-phonics-blue/10 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/courses" 
            className="font-medium p-2 rounded-xl hover:bg-phonics-blue/10 transition-all flex items-center gap-1"
            onClick={() => setMenuOpen(false)}
          >
            <GraduationCap className="w-4 h-4" />
            Courses
          </Link>
          <Link 
            to="/onboarding" 
            className="phonics-button bg-phonics-blue text-white"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
