import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  DollarSign, 
  FileText, 
  Camera, 
  MessageSquare,
  Shield,
  Clock,
  Users,
  TrendingUp,
  Calculator,
  Award
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import Button from '../components/Common/Button';
import Card from '../components/Common/Card';

const Sell: React.FC = () => {
  const { isSignedIn } = useAuthStore();

  const steps = [
    {
      number: 1,
      title: 'Create Your Account',
      description: 'Sign up and verify your identity to get started',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: 2,
      title: 'List Your Property',
      description: 'Use our guided listing tool to create a professional listing',
      icon: FileText,
      color: 'from-green-500 to-green-600'
    },
    {
      number: 3,
      title: 'Legal Compliance',
      description: 'Complete state-specific requirements with our automated tools',
      icon: Shield,
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: 4,
      title: 'Market Your Property',
      description: 'Professional photos and marketing across multiple platforms',
      icon: Camera,
      color: 'from-coral-500 to-coral-600'
    },
    {
      number: 5,
      title: 'Manage Offers',
      description: 'Receive and negotiate offers through our secure platform',
      icon: MessageSquare,
      color: 'from-primary-500 to-primary-600'
    },
    {
      number: 6,
      title: 'Complete the Sale',
      description: 'Finalize with legal support and conveyancer assistance',
      icon: CheckCircle,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Save $25,000+ on Average',
      description: 'Eliminate agent commissions and keep more of your sale price',
      stat: '$25K+'
    },
    {
      icon: Clock,
      title: 'Sell 3x Faster',
      description: 'Direct buyer contact means quicker negotiations and sales',
      stat: '14 Days'
    },
    {
      icon: Shield,
      title: '100% Legal Compliance',
      description: 'State-specific legal templates and compliance checking',
      stat: '100%'
    },
    {
      icon: TrendingUp,
      title: '94% Success Rate',
      description: 'Most sellers successfully complete their sale with us',
      stat: '94%'
    }
  ];

  const features = [
    'Professional listing creation tools',
    'State-specific legal compliance',
    'Automated disclosure generation',
    'Professional photography booking',
    'Multi-platform marketing',
    'Secure buyer communication',
    'Offer management system',
    'Conveyancer matching service',
    'Legal support hotline',
    '24/7 customer support'
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-coral-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Australia's #1 Private Sale Platform
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-neutral-900 mb-6">
              Sell Your Property
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-coral-500">
                Without Agents
              </span>
            </h1>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Join thousands of Australians who have saved money and sold faster by 
              going direct. Complete legal compliance, professional tools, and expert support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isSignedIn ? (
                <Link to="/create-listing">
                  <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                    Create Your Listing
                  </Button>
                </Link>
              ) : (
                <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                  Start Selling Today
                </Button>
              )}
              
              <Link to="/pricing">
                <Button variant="outline" size="lg">
                  View Pricing Plans
                </Button>
              </Link>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={benefit.title}
                  hover={true}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-100 to-primary-200 rounded-2xl mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-neutral-900 mb-2">
                    {benefit.stat}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Our step-by-step process makes selling your property simple, 
              legal, and profitable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card hover={true} className="h-full">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-primary-600 mb-1">
                          Step {step.number}
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-neutral-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-neutral-200 transform -translate-y-1/2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-neutral-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-6">
                Everything You Need
                <span className="block text-primary-600">In One Platform</span>
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                From listing creation to final sale, we provide all the tools, 
                legal support, and expertise you need for a successful private sale.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-center space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8">
                <div className="text-center mb-6">
                  <Calculator className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    Savings Calculator
                  </h3>
                  <p className="text-neutral-600">
                    See how much you could save
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Property Value (AUD)
                    </label>
                    <input
                      type="number"
                      defaultValue="800000"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-700 mb-2">
                        $20,000
                      </div>
                      <div className="text-green-600 font-medium">
                        Estimated Savings
                      </div>
                      <div className="text-sm text-green-600 mt-1">
                        vs. 2.5% agent commission
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
            Ready to Start Selling?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of successful sellers who chose SaleDirect
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isSignedIn ? (
              <Link to="/create-listing">
                <Button variant="secondary" size="lg" icon={ArrowRight} iconPosition="right">
                  Create Your First Listing
                </Button>
              </Link>
            ) : (
              <Button variant="secondary" size="lg" icon={ArrowRight} iconPosition="right">
                Get Started Now
              </Button>
            )}
            
            <Link to="/pricing">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                View Pricing
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-primary-100 text-sm">
            No setup fees • Cancel anytime • 30-day money-back guarantee
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sell;