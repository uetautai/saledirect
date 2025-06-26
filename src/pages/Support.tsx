import React, { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  Search,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  BookOpen,
  Video,
  Users,
  Headphones
} from 'lucide-react';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';
import toast from 'react-hot-toast';

const Support: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium'
  });

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: 'Instant',
      color: 'from-green-500 to-green-600',
      action: 'Start Chat'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      availability: '8AM - 8PM AEST',
      responseTime: 'Immediate',
      color: 'from-blue-500 to-blue-600',
      action: 'Call Now'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      availability: '24/7',
      responseTime: '< 2 hours',
      color: 'from-purple-500 to-purple-600',
      action: 'Send Email'
    },
    {
      title: 'Legal Hotline',
      description: 'Get legal advice from qualified professionals',
      icon: BookOpen,
      availability: 'Business Hours',
      responseTime: '< 30 minutes',
      color: 'from-coral-500 to-coral-600',
      action: 'Get Legal Help'
    }
  ];

  const faqs = [
    {
      category: 'Getting Started',
      question: 'How do I create my first property listing?',
      answer: 'Creating your first listing is easy! Sign up for an account, verify your identity, then use our guided listing tool. We\'ll walk you through each step including photos, description, pricing, and legal requirements specific to your state.'
    },
    {
      category: 'Legal Compliance',
      question: 'What legal documents do I need to sell privately in NSW?',
      answer: 'In NSW, you need a Section 66W Certificate, Contract for Sale of Land, Vendor Statement, Planning Certificate (Section 10.7), Building Certificate, and Pest Inspection Report. Our platform automatically generates the required documents based on your property location.'
    },
    {
      category: 'Pricing',
      question: 'How much does it cost to list my property?',
      answer: 'We offer flexible pricing: Essential Plan ($99/month), Elite Plan ($299/month), Pro Investor Plan ($799/month), or a one-time fee of $500 per listing. All plans include legal compliance tools, marketing features, and support.'
    },
    {
      category: 'Marketing',
      question: 'Where will my property be advertised?',
      answer: 'Your property will be featured on our platform and syndicated to major property websites, social media platforms, and local networks. Elite and Pro plans include additional marketing boosts and featured listings.'
    },
    {
      category: 'Offers & Negotiation',
      question: 'How do I handle offers from buyers?',
      answer: 'All offers come through our secure platform. You can review, accept, reject, or counter offers directly. We provide templates for communication and our support team can guide you through negotiations.'
    },
    {
      category: 'Legal Support',
      question: 'What if I need legal advice during the sale?',
      answer: 'Elite and Pro plan members have access to our legal support hotline. We can also connect you with qualified conveyancers and lawyers in your area. Essential plan members can upgrade or book consultations as needed.'
    }
  ];

  const resources = [
    {
      title: 'Video Tutorials',
      description: 'Step-by-step guides for using the platform',
      icon: Video,
      count: '25+ videos'
    },
    {
      title: 'Knowledge Base',
      description: 'Comprehensive articles and guides',
      icon: BookOpen,
      count: '100+ articles'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other sellers',
      icon: Users,
      count: '5,000+ members'
    },
    {
      title: 'Webinars',
      description: 'Live training sessions',
      icon: Headphones,
      count: 'Weekly sessions'
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Support ticket submitted successfully!');
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
      priority: 'medium'
    });
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-coral-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Headphones className="h-4 w-4 mr-2" />
              24/7 Support Available
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-6">
              How Can We Help?
            </h1>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Get the support you need to successfully sell your property. 
              Our expert team is here to help every step of the way.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for help articles, guides, or FAQs..."
                  className="w-full pl-12 pr-4 py-4 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Get Support Your Way
            </h2>
            <p className="text-xl text-neutral-600">
              Choose the support channel that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <Card
                  key={channel.title}
                  hover={true}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${channel.color} rounded-2xl mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {channel.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-4">
                    {channel.description}
                  </p>
                  
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="h-4 w-4 text-neutral-400" />
                      <span className="text-neutral-600">{channel.availability}</span>
                    </div>
                    <div className="text-primary-600 font-medium">
                      Response: {channel.responseTime}
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    {channel.action}
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-600">
              Find quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div>
                    <div className="text-sm font-medium text-primary-600 mb-1">
                      {faq.category}
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {faq.question}
                    </h3>
                  </div>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-neutral-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-neutral-400 flex-shrink-0" />
                  )}
                </button>
                
                {expandedFaq === index && (
                  <div className="mt-4 pt-4 border-t border-neutral-200">
                    <p className="text-neutral-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                No results found
              </h3>
              <p className="text-neutral-600">
                Try adjusting your search terms or browse all FAQs
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Self-Help Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Self-Help Resources
            </h2>
            <p className="text-xl text-neutral-600">
              Explore our comprehensive library of helpful resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card
                  key={resource.title}
                  hover={true}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary-100 to-primary-200 rounded-2xl mb-4">
                    <Icon className="h-7 w-7 text-primary-600" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-neutral-600 text-sm mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="text-primary-600 font-medium text-sm mb-4">
                    {resource.count}
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full" icon={ExternalLink} iconPosition="right">
                    Explore
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-neutral-600">
              Send us a message and we'll get back to you quickly
            </p>
          </div>

          <Card>
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Priority Level
                </label>
                <select
                  value={contactForm.priority}
                  onChange={(e) => setContactForm({...contactForm, priority: e.target.value})}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="low">Low - General inquiry</option>
                  <option value="medium">Medium - Need assistance</option>
                  <option value="high">High - Urgent issue</option>
                  <option value="critical">Critical - Sale in progress</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Message
                </label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Please describe your issue or question in detail..."
                  required
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Support;