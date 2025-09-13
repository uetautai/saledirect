import React, { useState } from 'react';
import { Check, Star, Zap, Crown, ArrowRight, Calculator } from 'lucide-react';

const PricingPlans: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'oneTime'>('monthly');
  const [calculatorPrice, setCalculatorPrice] = useState(800000);

  const plans = [
    {
      id: 'essential',
      name: 'Essential Plan',
      icon: Star,
      price: { monthly: 99, oneTime: 500 },
      description: 'Perfect for first-time sellers',
      gradient: 'from-blue-500 to-blue-600',
      popular: false,
      features: [
        '1 listing per month',
        'All core platform features',
        'Legal compliance tools',
        'Automated disclosure generator',
        'Basic marketing tools',
        'Community support',
        'Standard 24/7 support',
        'AI-powered chatbot',
        'Secure messaging system',
        'Offer management portal'
      ],
      limits: {
        listings: 1,
        support: 'Community + Standard',
        photography: false,
        accountManager: false
      }
    },
    {
      id: 'elite',
      name: 'Elite Plan',
      icon: Zap,
      price: { monthly: 299, oneTime: null },
      description: 'Most popular for serious sellers',
      gradient: 'from-primary-500 to-primary-600',
      popular: true,
      features: [
        '5 listings per month',
        'All Essential features',
        'Dedicated account manager',
        'Property visit & photography',
        'Priority support',
        'Marketing boost (featured listings)',
        'Professional photography booking',
        'Enhanced market insights',
        'Advanced analytics',
        'Social media syndication'
      ],
      limits: {
        listings: 5,
        support: 'Priority + Dedicated Manager',
        photography: true,
        accountManager: true
      }
    },
    {
      id: 'pro',
      name: 'Pro Investor Plan',
      icon: Crown,
      price: { monthly: 799, oneTime: null },
      description: 'For property investors & professionals',
      gradient: 'from-purple-500 to-purple-600',
      popular: false,
      features: [
        'Unlimited listings',
        'All Elite features',
        'Personal account manager',
        'Legal support hotline',
        'Exclusive market insights',
        'Conveyancer sourcing',
        'White-glove service',
        'Custom marketing campaigns',
        'Portfolio management tools',
        'Investment analysis reports'
      ],
      limits: {
        listings: 'Unlimited',
        support: 'White-glove + Legal Hotline',
        photography: true,
        accountManager: true
      }
    }
  ];

  const calculateSavings = (propertyPrice: number) => {
    const averageCommission = 0.025; // 2.5% average
    const agentFees = propertyPrice * averageCommission;
    const ourFee = billingPeriod === 'monthly' ? 299 : 500; // Using Elite plan as example
    return agentFees - ourFee;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            <Calculator className="h-4 w-4 mr-2" />
            Transparent Pricing
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Success Plan
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            All plans include complete legal compliance, professional tools, and dedicated support. 
            No hidden fees, no commission charges.
          </p>
        </div>
        {/* Billing Toggle */}
        <div className="inline-flex items-center bg-white rounded-xl p-1 shadow-sm border border-gray-200 mb-8">
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
              billingPeriod === 'monthly'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Monthly Plans
          </button>
          <button
            onClick={() => setBillingPeriod('oneTime')}
            className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
              billingPeriod === 'oneTime'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            One-Time Plans
          </button>
        </div>
        {/* Savings Calculator */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl shadow-xl p-8 mb-16 border border-blue-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              Calculate Your Savings
            </h3>
            <p className="text-primary-200">
              See how much you'll save compared to traditional agent fees
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <label className="block text-sm font-medium text-blue-100 mb-2">
              Property Value (AUD)
            </label>
            <input
              type="number"
              value={calculatorPrice}
              onChange={(e) => setCalculatorPrice(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white/10 border border-blue-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-semibold text-white placeholder-gray-300"
              placeholder="800,000"
            />
            <div className="mt-6 p-6 bg-[#2C3553] rounded-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  ${calculateSavings(calculatorPrice).toLocaleString()}
                </div>
                <div className="text-blue-100 font-medium">
                  You could save with SaleDirect
                </div>
                <div className="text-sm text-blue-200 mt-2">
                  vs. traditional 2.5% agent commission
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = billingPeriod === 'oneTime' ? plan.price.oneTime : plan.price.monthly;
            const isAvailable = price !== null;
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl p-8 shadow-lg border border-blue-200 bg-white ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    {isAvailable ? (
                      <div className="mb-6">
                        <div className="text-center text-gray-500 text-sm mt-8">
                          All prices in AUD. No hidden fees.
                        </div>
                        <div className="text-gray-500">
                          {billingPeriod === 'monthly' ? 'per month' : 'one-time fee'}
                        </div>
                      </div>
                    ) : (
                      <div className="mb-6">
                        <div className="text-2xl font-semibold text-gray-600 mb-2">
                          Monthly Only
                        </div>
                        <div className="text-sm text-gray-500">
                          This plan requires a monthly subscription
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* CTA Button */}
                  <button
                    disabled={!isAvailable}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    {isAvailable ? (
                      <>
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    ) : (
                      'Not Available'
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-[#2C3553] rounded-2xl p-8 shadow-lg border border-[#2C3553] max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              All Plans Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-primary-200">
              <div className="flex items-center justify-center space-x-2">
                <Check className="h-4 w-4 text-[#2C3553]" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Check className="h-4 w-4 text-[#2C3553]" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Check className="h-4 w-4 text-[#2C3553]" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;