import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, DollarSign, Users, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { icon: DollarSign, label: 'Average Savings', value: '$25,000+' },
    { icon: Users, label: 'Happy Sellers', value: '10,000+' },
    { icon: TrendingUp, label: 'Success Rate', value: '94%' },
    { icon: Shield, label: 'Legal Compliance', value: '100%' }
  ];

  return (
    <section className="relative bg-white overflow-hidden border-b border-gray-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4 mr-2" />
                100% Legal Compliance Across Australia
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Sell Your Property
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Without Agents
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Australia's most trusted private property sales platform. Save thousands in 
                commission fees while maintaining full legal compliance across all states and territories.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/sell"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/20 transition-all duration-200"
              >
                Start Selling Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm"
              >
                How It Works
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-neutral-500">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <span>Trusted by 10,000+ sellers</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-neutral-300" />
              <span className="hidden sm:inline">No upfront fees</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern Australian home"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-100 to-primary-200 rounded-xl mb-4">
                  <Icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;