import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Shield, 
  TrendingUp, 
  Users, 
  FileText, 
  Calculator,
  ArrowRight,
  Download,
  Play,
  ExternalLink
} from 'lucide-react';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';

const Resources: React.FC = () => {
  const resourceCategories = [
    {
      title: 'Legal Guides',
      description: 'State-specific legal requirements and compliance guides',
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      link: '/resources/legal',
      items: [
        'NSW Property Sale Requirements',
        'VIC Vendor Statement Guide',
        'QLD Disclosure Requirements',
        'Contract Templates by State'
      ]
    },
    {
      title: 'State Compliance',
      description: 'Interactive compliance checklists for each Australian state',
      icon: FileText,
      color: 'from-green-500 to-green-600',
      link: '/resources/compliance',
      items: [
        'NSW Compliance Checklist',
        'VIC Section 32 Requirements',
        'QLD Property Disclosure',
        'WA Vendor Statement'
      ]
    },
    {
      title: 'Market Insights',
      description: 'Latest property market trends and pricing data',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      link: '/resources/insights',
      items: [
        'Monthly Market Reports',
        'Suburb Price Analysis',
        'Selling Season Trends',
        'Investment Property Data'
      ]
    },
    {
      title: 'Community Forum',
      description: 'Connect with other sellers and share experiences',
      icon: Users,
      color: 'from-coral-500 to-coral-600',
      link: '/community',
      items: [
        'Success Stories',
        'Tips & Tricks',
        'Q&A with Experts',
        'Local Market Discussions'
      ]
    }
  ];

  const guides = [
    {
      title: 'Complete Guide to Private Property Sales in Australia',
      description: 'Everything you need to know about selling without an agent',
      type: 'PDF Guide',
      downloadSize: '2.4 MB',
      icon: Download
    },
    {
      title: 'Property Photography Masterclass',
      description: 'Professional tips for taking stunning property photos',
      type: 'Video Course',
      duration: '45 min',
      icon: Play
    },
    {
      title: 'Negotiation Strategies for Private Sellers',
      description: 'How to negotiate effectively with potential buyers',
      type: 'PDF Guide',
      downloadSize: '1.8 MB',
      icon: Download
    },
    {
      title: 'Legal Compliance Webinar Series',
      description: 'Live sessions covering state-specific requirements',
      type: 'Live Webinar',
      duration: 'Weekly',
      icon: Play
    }
  ];

  const tools = [
    {
      title: 'Property Valuation Calculator',
      description: 'Get an estimated value for your property',
      icon: Calculator,
      link: '#'
    },
    {
      title: 'Commission Savings Calculator',
      description: 'Calculate how much you\'ll save vs agent fees',
      icon: Calculator,
      link: '#'
    },
    {
      title: 'Contract Template Generator',
      description: 'Generate state-specific contract templates',
      icon: FileText,
      link: '#'
    },
    {
      title: 'Disclosure Document Builder',
      description: 'Create required disclosure documents',
      icon: Shield,
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-coral-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4 mr-2" />
              Knowledge Center
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-6">
              Resources & Guides
            </h1>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Everything you need to successfully sell your property privately. 
              Legal guides, market insights, tools, and community support.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-neutral-600">
              Find the information you need organized by topic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.title}
                  hover={true}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-neutral-600">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {category.items.map((item) => (
                      <div key={item} className="flex items-center space-x-2 text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={category.link}>
                    <Button variant="outline" className="w-full" icon={ArrowRight} iconPosition="right">
                      Explore {category.title}
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Featured Guides & Resources
            </h2>
            <p className="text-xl text-neutral-600">
              Our most popular and comprehensive resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <Card
                  key={guide.title}
                  hover={true}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
                          {guide.type}
                        </span>
                        <span className="text-xs text-neutral-500">
                          {'downloadSize' in guide ? guide.downloadSize : guide.duration}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        {guide.title}
                      </h3>
                      <p className="text-neutral-600 mb-4">
                        {guide.description}
                      </p>
                      <Button variant="outline" size="sm" icon={ExternalLink} iconPosition="right">
                        Access Resource
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools & Calculators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Tools & Calculators
            </h2>
            <p className="text-xl text-neutral-600">
              Interactive tools to help you make informed decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card
                  key={tool.title}
                  hover={true}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary-100 to-primary-200 rounded-2xl mb-4">
                    <Icon className="h-7 w-7 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    {tool.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Use Tool
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
            Need Personal Assistance?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Our expert team is here to help you navigate your property sale
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/support">
              <Button variant="secondary" size="lg">
                Contact Support
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;