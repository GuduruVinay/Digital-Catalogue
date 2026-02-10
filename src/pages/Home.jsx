import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Battery, Zap, Activity } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1600" 
            alt="Industrial Solar Farm" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-start justify-center min-h-150">
          <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold tracking-wide uppercase mb-6 animate-fade-in-up">
            New 2026 Catalogue
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-4xl">
            Sustainable Power <br />
            <span className="text-emerald-400">For Modern Industry.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Equip your clients with world-class energy solutions. 
            From high-efficiency solar arrays to industrial-grade storage systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/catalogue" 
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              Browse Catalogue <ArrowRight size={20} />
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all text-center"
            >
              Become a Dealer
            </Link>
          </div>
        </div>
      </div>

      {/* --- FEATURED CATEGORIES --- */}
      <div className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Explore Our Solutions</h2>
            <p className="text-gray-600 mt-2">Comprehensive energy systems for every application.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category 1 */}
            <Link to="/catalogue" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Sun size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Solar Panels</h3>
              <p className="text-gray-500 text-sm">High-efficiency monocrystalline arrays.</p>
            </Link>

            {/* Category 2 */}
            <Link to="/catalogue" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Battery size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Energy Storage</h3>
              <p className="text-gray-500 text-sm">Scalable LiFePO4 battery banks.</p>
            </Link>

            {/* Category 3 */}
            <Link to="/catalogue" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Generators</h3>
              <p className="text-gray-500 text-sm">Hybrid & diesel backup power.</p>
            </Link>

             {/* Category 4 */}
            <Link to="/catalogue" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Activity size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Inverters</h3>
              <p className="text-gray-500 text-sm">Smart grid management systems.</p>
            </Link>
          </div>
        </div>
      </div>

      {/* --- VALUE PROPOSITION --- */}
      <div className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop" 
              alt="Technician working" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Engineered for Reliability</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">1</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Industry Leading Warranty</h3>
                  <p className="text-gray-600">Up to 25 years performance warranty on solar products and 10 years on storage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">2</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Dealer-First Pricing</h3>
                  <p className="text-gray-600">Access wholesale rates and volume discounts designed to maximize your margins.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">3</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">24/7 Technical Support</h3>
                  <p className="text-gray-600">Our engineering team is always available to assist with installation queries.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Link to="/about" className="text-emerald-600 font-bold hover:text-emerald-800 flex items-center gap-2 group">
                Learn more about our company 
                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;