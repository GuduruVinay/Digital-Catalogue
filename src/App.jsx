import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import our Navbar
import Navbar from './components/Navbar';
// Import our Home page
import Home from './pages/Home';
// Import our Catalogue page 
import Catalogue from './pages/Catalogue';
// Import our Product Detail page
import ProductDetail from './pages/ProductDetail';
// Import our Contact page
import Contact from './pages/Contact';
// Import our About page
import About from './pages/About';
// Import our NotFound page
import NotFound from './pages/NotFound';

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