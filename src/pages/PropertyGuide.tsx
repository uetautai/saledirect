import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, FileText, Home, DollarSign, Search, Handshake, Key } from 'lucide-react';
import Layout from '../components/Layout/Layout';

const PropertyGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buying' | 'selling'>('buying');
  const [selectedState, setSelectedState] = useState('');
  const navigate = useNavigate();

  const australianStates = [
    'Australian Capital Territory',
    'New South Wales',
    'Northern Territory',
    'Queensland',
    'South Australia',
    'Tasmania',
    'Victoria',
    'Western Australia'
  ];

  const buyingSteps = [
    {
      title: '1. Get Pre-Approved',
      description: 'Understand your budget and get pre-approved for a home loan.',
      icon: DollarSign
    },
    {
      title: '2. Research the Market',
      description: 'Analyze property prices and market trends in your desired areas.',
      icon: Search
    },
    {
      title: '3. Property Search',
      description: 'Find properties that match your criteria and visit open homes.',
      icon: Home
    },
    {
      title: '4. Make an Offer',
      description: 'Negotiate the price and terms with the seller or their agent.',
      icon: Handshake
    },
    {
      title: '5. Contract Exchange',
      description: 'Review and sign the contract of sale with your conveyancer.',
      icon: FileText
    },
    {
      title: '6. Settlement',
      description: 'Complete the purchase and take ownership of your new property.',
      icon: Key
    }
  ];

  const sellingSteps = [
    {
      title: '1. Prepare Your Home',
      description: 'Make necessary repairs and stage your home for sale.',
      icon: Home
    },
    {
      title: '2. Set the Right Price',
      description: 'Work with a professional to determine the optimal listing price.',
      icon: DollarSign
    },
    {
      title: '3. Marketing & Listings',
      description: 'Create compelling listings and market your property effectively.',
      icon: Search
    },
    {
      title: '4. Open Homes & Inspections',
      description: 'Host open homes and private inspections for potential buyers.',
      icon: Home
    },
    {
      title: '5. Review Offers',
      description: 'Evaluate offers and negotiate with potential buyers.',
      icon: Handshake
    },
    {
      title: '6. Settlement',
      description: 'Complete the sale and transfer ownership to the buyer.',
      icon: Key
    }
  ];

  const requiredForms: Record<string, string[]> = {
    'New South Wales': [
      'Contract for Sale of Land',
      'Vendor Statement (Section 32)',
      'Deposit Bond',
      'Transfer of Land'
    ],
    'Victoria': [
      'Section 32 Statement',
      'Contract of Sale',
      'Vendor Statement',
      'Transfer of Land'
    ],
    'Queensland': [
      'Contract of Sale',
      'Disclosure Statement',
      'Transfer Document',
      'Foreign Resident Capital Gains Withholding'
    ],
    'Western Australia': [
      'Offer and Acceptance',
      'Joint Form of General Conditions',
      'Transfer of Land',
      'Seller\'s Disclosure Statement'
    ],
    'South Australia': [
      'Form 1 - Vendor\'s Statement',
      'Contract for Sale',
      'Transfer of Land',
      'Section 7 Statement'
    ]
  };

  const legalRequirements = [
    'Disclosure of material facts',
    'Zoning and planning certificates',
    'Building and pest inspection reports',
    'Strata reports (if applicable)',
    'Smoke alarm compliance',
    'Pool compliance certificate'
  ];
  
  return (
    <Layout>
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Dummies Guide to {activeTab === 'buying' ? 'Buying' : 'Selling'} Property in Australia
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about {activeTab === 'buying' ? 'purchasing' : 'selling'} property, 
              from start to finish.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50">
              <button
                onClick={() => setActiveTab('buying')}
                className={`px-6 py-3 rounded-md font-medium text-sm ${
                  activeTab === 'buying' 
                    ? 'bg-white shadow-sm text-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Buying Guide
              </button>
              <button
                onClick={() => setActiveTab('selling')}
                className={`px-6 py-3 rounded-md font-medium text-sm ${
                  activeTab === 'selling' 
                    ? 'bg-white shadow-sm text-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Selling Guide
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Step-by-Step Guide */}
              <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {activeTab === 'buying' ? 'Home Buying' : 'Home Selling'} Process
                </h2>
                <div className="space-y-6">
                  {(activeTab === 'buying' ? buyingSteps : sellingSteps).map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 text-blue-600">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                        <p className="mt-1 text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Legal Compliance */}
              <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Requirements</h2>
                <div className="space-y-4">
                  {legalRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="ml-3 text-gray-700">{requirement}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* State Selector */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">State-Specific Requirements</h3>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
                >
                  <option value="">Select your state</option>
                  {australianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                
                {selectedState && (
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Required Forms:</h4>
                    <ul className="space-y-2">
                      {(requiredForms[selectedState] || [
                        'Standard Contract of Sale',
                        'Vendor Disclosure Statement',
                        'Transfer of Land',
                        'Other state-specific forms'
                      ]).map((form, index) => (
                        <li key={index} className="flex items-start">
                          <FileText className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="ml-2 text-sm text-gray-600">{form}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-sm p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Need Expert Help?</h3>
                <p className="text-blue-100 mb-4">
                  Our dedicated account managers handle everything from listings to settlements.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-blue-100">Personalized service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-blue-100">Legal compliance guaranteed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-blue-100">Stress-free experience</span>
                  </li>
                </ul>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-white text-blue-700 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Get Started Today
                </button>
              </div>

              {/* Windsurfing Section */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Did You Know?</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Windsurfing combines elements of surfing and sailing, where participants stand on a board and use a sail to harness wind power for movement across water.
                </p>
                <p className="text-gray-600 text-sm">
                  It's an exciting water sport that offers a unique blend of skill, balance, and connection with nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyGuide;
