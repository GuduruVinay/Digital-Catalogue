import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Import our Navbar
import Navbar from './components/Navbar';
// Import our Catalogue page 
import Catalogue from './pages/Catalogue';
// Import our Product Detail page
import ProductDetail from './pages/ProductDetail';
// Import our Contact page
import Contact from './pages/Contact';
// Import our About page
import About from './pages/About';

// --- PLACEHOLDER PAGE COMPONENTS (We will build these out properly next) ---

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50 text-center px-4">
    <h1 className="text-5xl font-bold text-slate-800 mb-6">Sustainable Power for Industry</h1>
    <p className="text-xl text-gray-600 mb-8 max-w-2xl">
      High-performance energy solutions for dealers and commercial partners.
    </p>
    <Link to="/catalogue" className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition flex items-center gap-2">
      View Catalogue <ArrowRight size={20} />
    </Link>
  </div>
);

const NotFound = () => (
  <div className="p-20 text-center text-red-500 font-bold">
    404 - Page Not Found
  </div>
);

// --- MAIN APP COMPONENT ---

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-900">
        {/* Navigation Bar is always visible */}
        <Navbar />

        {/* Content Area changes based on the URL */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue />} />
            
            {/* Dynamic Route for individual products */}
            <Route path="/product/:id" element={<ProductDetail />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Catch-all for 404 errors */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Simple Footer */}
        <footer className="bg-slate-900 text-slate-400 py-8 text-center mt-auto">
          <p>© 2026 GreenPower Tech. For Dealer Use Only.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;