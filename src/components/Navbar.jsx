import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Catalogue", path: "/catalogue" },
    { name: "About Us", path: "/about" },
    { name: "Contact Dealers", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* --- LOGO --- */}
          <div className="shrink-0 flex items-center group cursor-pointer">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-emerald-100 p-2 rounded-lg group-hover:bg-emerald-200 transition-colors duration-300">
                <Zap className="h-6 w-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="font-bold text-2xl text-slate-800 tracking-tight">
                GreenPower<span className="text-emerald-600">Tech</span>
              </span>
            </Link>
          </div>

          {/* --- DESKTOP MENU (Hidden on Mobile AND Tablet) --- */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`relative py-2 text font-semibold transition-all duration-300 group
                    ${isActive(link.path) ? 'text-emerald-700' : 'text-slate-600 hover:text-emerald-600'}
                  `}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-emerald-500 rounded-full transition-all duration-300 ease-out
                    ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}></span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium 
              hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30 
              active:scale-95 transition-all duration-200 transform">
              Partner Login
            </button>
          </div>

          {/* --- HAMBURGER BUTTON (Visible on Mobile AND Tablet) --- */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-md text-gray-600 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE/TABLET MENU DROPDOWN --- */}
      <div className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 shadow-xl' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-4 pb-6 space-y-3 bg-gray-50/50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 border-l-4
                ${isActive(link.path) 
                  ? 'bg-white text-emerald-700 border-emerald-500 shadow-sm' 
                  : 'text-gray-600 border-transparent hover:bg-white hover:text-emerald-600 hover:border-gray-200 hover:shadow-sm'
                }
              `}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-2">
            <button className="w-full bg-slate-900 text-white px-4 py-3 rounded-xl font-bold hover:bg-emerald-600 active:scale-95 transition-all shadow-md">
              Partner Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;