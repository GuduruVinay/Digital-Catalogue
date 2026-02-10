import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Download, Mail, Shield, Zap } from 'lucide-react';
import { products } from '../data/products'; // Adjust path if necessary

const ProductDetail = () => {
  const { id } = useParams();
  
  // Find the product matching the ID from the URL
  const product = products.find((p) => p.id === parseInt(id));

  // Handle case where product isn't found
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Product Not Found</h2>
        <Link to="/catalogue" className="text-emerald-600 hover:underline">
          Return to Catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <Link 
          to="/catalogue" 
          className="inline-flex items-center text-gray-500 hover:text-emerald-600 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Catalogue
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Image Section */}
          <div className="space-y-6">
            <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Thumbnail Gallery (Placeholder for visual polish) */}
            <div className="grid grid-cols-3 gap-4">
               {[1, 2, 3].map((item) => (
                 <div key={item} className="h-24 bg-gray-100 rounded-lg overflow-hidden opacity-70 hover:opacity-100 cursor-pointer transition-opacity">
                   <img src={product.image} className="w-full h-full object-cover" alt="thumbnail" />
                 </div>
               ))}
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div>
            <div className="mb-6">
              <span className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                {product.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Technical Specifications Table */}
            <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <Zap className="mr-2 text-emerald-600" size={20} />
                Technical Specifications
              </h3>
              <div className="grid grid-cols-1 gap-y-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                    <span className="text-gray-500 font-medium">{key}</span>
                    <span className="text-slate-900 font-semibold text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature List */}
            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-3">Key Features:</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <Check className="text-emerald-500 mr-2" size={18} /> ISO 9001 Certified Manufacturing
                </li>
                <li className="flex items-center text-gray-600">
                  <Shield className="text-emerald-500 mr-2" size={18} /> Industrial Grade Durability
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="text-emerald-500 mr-2" size={18} /> 24/7 Dealer Support Included
                </li>
              </ul>
            </div>

            {/* Action Buttons (CTAs) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="flex-1 bg-slate-900 text-white text-center py-4 rounded-xl font-bold hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/30 flex justify-center items-center gap-2"
              >
                <Mail size={20} />
                Request Dealer Quote
              </Link>
              <button 
                className="flex-1 border-2 border-slate-200 text-slate-700 py-4 rounded-xl font-bold hover:border-slate-900 hover:text-slate-900 transition-colors flex justify-center items-center gap-2"
                onClick={() => alert("This would download a PDF spec sheet.")}
              >
                <Download size={20} />
                Download Spec Sheet
              </button>
            </div>
            
            <p className="mt-4 text-xs text-center text-gray-400">
              *Specifications subject to change. Contact sales for bulk pricing.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
