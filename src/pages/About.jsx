import React from 'react';
import { Award, Users, Globe, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Powering a Sustainable Future</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Since 2010, GreenPower Tech has been a global leader in industrial renewable energy solutions, 
            empowering dealers and businesses to transition to clean power.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-emerald-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-emerald-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50k+</div>
              <div className="text-emerald-100">Installations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-emerald-100">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-emerald-100">Dealer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We aim to democratize access to industrial-grade green energy technologies. 
              By manufacturing high-efficiency solar panels, batteries, and generators, we provide the backbone for modern, sustainable infrastructure.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our commitment goes beyond hardware. We build lasting partnerships with our dealer network, 
              providing the training, logistics, and technical support needed to succeed in a competitive market.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-100 rounded-2xl h-48 flex items-center justify-center">
               <Globe className="text-slate-300 w-16 h-16" />
            </div>
            <div className="bg-emerald-50 rounded-2xl h-48 flex items-center justify-center">
               <TrendingUp className="text-emerald-300 w-16 h-16" />
            </div>
            <div className="bg-emerald-50 rounded-2xl h-48 flex items-center justify-center">
               <Users className="text-emerald-300 w-16 h-16" />
            </div>
            <div className="bg-slate-100 rounded-2xl h-48 flex items-center justify-center">
               <Award className="text-slate-300 w-16 h-16" />
            </div>
          </div>
        </div>

        {/* Why Partner With Us? */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Why Dealers Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Certified Quality</h3>
              <p className="text-gray-600">
                ISO 9001 and ISO 14001 certified manufacturing ensures every unit meets global safety standards.
              </p>
            </div>
            {/* Benefit 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Competitive Edge</h3>
              <p className="text-gray-600">
                Direct-from-factory logistics mean better margins for you and faster delivery for your customers.
              </p>
            </div>
            {/* Benefit 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Dedicated Support</h3>
              <p className="text-gray-600">
                Access to our dedicated engineering team for complex project planning and troubleshooting.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to expand your portfolio?</h2>
          <div className="flex justify-center gap-4">
            <Link to="/catalogue" className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition">
              View Products
            </Link>
            <Link to="/contact" className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
              Become a Partner
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;