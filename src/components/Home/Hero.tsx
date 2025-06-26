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
    <section className="relative bg-gradient-to-b from-[#181F2F] via-[#232946] to-[#181F2F] overflow-hidden">
      {/* Subtle star field effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4 mr-2" />
                100% Legal Compliance Across Australia
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-neutral-900 leading-tight">
                Sell Your Property
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-coral-500">
                  Without Agents
                </span>
              </h1>
              
              <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl">
                Australia's most trusted private property sales platform. Save thousands in 
                commission fees while maintaining full legal compliance across all states and territories.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/register"
                className="group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                Start Selling Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/pricing"
                className="group bg-white text-neutral-900 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-neutral-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 flex items-center justify-center"
              >
                View Pricing Plans
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
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-neutral-100">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-neutral-900">$25K+</div>
                  <div className="text-sm text-neutral-500">Average Savings</div>
                </div>
              </div>
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