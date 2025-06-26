import React from 'react';
import { 
  Shield, 
  FileText, 
  Calculator, 
  MessageSquare, 
  Camera, 
  Users,
  CheckCircle,
  Clock,
  Award
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Legal Compliance',
      description: 'State-specific legal templates and compliance checklists ensure you meet all requirements across Australia.',
      color: 'blue'
    },
    {
      icon: FileText,
      title: 'Automated Disclosures',
      description: 'Generate mandatory disclosure documents automatically based on your property location and type.',
      color: 'green'
    },
    {
      icon: Calculator,
      title: 'Savings Calculator',
      description: 'See exactly how much you\'ll save compared to traditional agent commissions in your state.',
      color: 'purple'
    },
    {
      icon: MessageSquare,
      title: 'Secure Messaging',
      description: 'Encrypted communication system with buyers, including offer management and negotiation tools.',
      color: 'coral'
    },
    {
      icon: Camera,
      title: 'Professional Marketing',
      description: 'DIY listing tools plus optional professional photography and virtual tour services.',
      color: 'primary'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 support with dedicated account managers for higher-tier plans and legal hotline access.',
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    coral: 'from-coral-500 to-coral-600',
    primary: 'from-primary-500 to-primary-600',
    orange: 'from-orange-500 to-orange-600',
  };

  const benefits = [
    'No upfront fees or hidden costs',
    'Average savings of $25,000+ per sale',
    'Complete legal protection',
    'Professional marketing tools',
    'Dedicated support team',
    'Australia-wide coverage'
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#181F2F] via-[#232946] to-[#181F2F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">Features</h2>
          <p className="text-xl text-primary-200 mb-2">Everything you need to sell property smarter</p>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools, legal protection, and support 
            you need for a successful private property sale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClass = colorClasses[feature.color as keyof typeof colorClasses];
            return (
              <div
                key={feature.title}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#2C3553] hover:border-primary-400 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${colorClass} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-100 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-6">
                Join Thousands of Successful Sellers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-center space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary-400 flex-shrink-0" />
                    <span className="text-primary-100 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-neutral-900">14 Days</div>
                    <div className="text-sm text-neutral-500">Average Time to Sell</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Traditional Agent</span>
                    <span className="font-semibold text-neutral-900">45+ days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">SaleDirect</span>
                    <span className="font-semibold text-primary-600">14 days</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;