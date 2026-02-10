import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ArrowRight } from 'lucide-react';
import { products } from '../data/products'; // Ensure this path matches where you saved the data

const Catalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories from products list for the filter buttons
  const categories = ['All', ...new Set(products.map(p => p.category))];

  // Filter products based on state
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Product Catalogue</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our complete range of sustainable energy solutions. 
            Select a category below to filter results.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center mr-2 text-gray-500">
            <Filter size={20} className="mr-2" />
            <span className="font-medium">Filter by:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 
                ${selectedCategory === category 
                  ? 'bg-emerald-600 text-white shadow-md transform scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col"
            >
              {/* Product Image Container */}
              <div className="h-64 overflow-hidden relative group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-700 uppercase tracking-wide">
                  {product.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 grow">
                  {product.description}
                </p>

                {/* Specs Preview (Mini Table) */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4 text-xs text-gray-500 space-y-1">
                  {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="font-medium">{key}:</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Link 
                  to={`/product/${product.id}`}
                  className="w-full text-center bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 group"
                >
                  View Specifications 
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Handling */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
            <button 
              onClick={() => setSelectedCategory('All')}
              className="mt-4 text-emerald-600 font-medium hover:underline"
            >
              View all products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalogue;