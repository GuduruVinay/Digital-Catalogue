import { Link } from 'react-router-dom';
import { Home, Search, ArrowRight } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
      
      {/* 404 Visual */}
      <h1 className="text-9xl font-extrabold text-emerald-100">404</h1>
      
      <div className="absolute -mt-12.5">
         <div className="bg-white p-4 rounded-full shadow-lg inline-block mb-4">
            <Search size={48} className="text-emerald-600" />
         </div>
         <h2 className="text-3xl font-bold text-slate-900 mb-2">Page Not Found</h2>
         <p className="text-gray-600 max-w-md mx-auto mb-8">
           The page you are looking for doesn't exist or has been moved. 
           Let's get you back on track.
         </p>
         
         {/* Action Buttons */}
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link 
             to="/" 
             className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
           >
             <Home size={20} />
             Return Home
           </Link>
           
           <Link 
             to="/catalogue" 
             className="bg-white border border-gray-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:border-emerald-500 hover:text-emerald-600 transition-all flex items-center justify-center gap-2"
           >
             View Catalogue
             <ArrowRight size={20} />
           </Link>
         </div>
      </div>

    </div>
  );
};

export default NotFound;