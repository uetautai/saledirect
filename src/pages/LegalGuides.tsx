import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Download, 
  ExternalLink, 
  Shield, 
  FileText, 
  AlertCircle,
  CheckCircle,
  Search,
  Filter
} from 'lucide-react';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';

const LegalGuides: React.FC = () => {
  const [selectedState, setSelectedState] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const states = ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'];
  const categories = ['Contracts', 'Disclosures', 'Inspections', 'Compliance', 'Taxation'];

  const legalGuides = [
    {
      id: '1',
      title: 'NSW Private Property Sale Requirements',
      state: 'NSW',
      category: 'Compliance',
      description: 'Complete guide to selling property privately in New South Wales, including all legal requirements and mandatory documents.',
      lastUpdated: '2024-01-15',
      downloadSize: '2.4 MB',
      type: 'PDF Guide',
      requirements: [
        'Section 66W Certificate',
        'Contract for Sale of Land',
        'Vendor Statement',
        'Planning Certificate (Section 10.7)',
        'Building Certificate',
        'Pest Inspection Report'
      ]
    },
    {
      id: '2',
      title: 'VIC Section 32 Vendor Statement Guide',
      state: 'VIC',
      category: 'Disclosures',
      description: 'Detailed instructions for preparing a Section 32 Vendor Statement in Victoria, including all required documents and disclosures.',
      lastUpdated: '2024-01-12',
      downloadSize: '1.8 MB',
      type: 'PDF Guide',
      requirements: [
        'Certificate of Title',
        'Planning Certificate',
        'Building Permit',
        'Owners Corporation Certificate',
        'Zoning Certificate'
      ]
    },
    {
      id: '3',
      title: 'QLD Property Disclosure Requirements',
      state: 'QLD',
      category: 'Disclosures',
      description: 'Queensland-specific disclosure requirements under the Property Occupations Act 2014.',
      lastUpdated: '2024-01-10',
      downloadSize: '2.1 MB',
      type: 'PDF Guide',
      requirements: [
        'Property Disclosure Statement',
        'Title Search',
        'Survey Plan',
        'Body Corporate Information',
        'Pool Safety Certificate'
      ]
    },
    {
      id: '4',
      title: 'Contract Templates by State',
      state: 'All',
      category: 'Contracts',
      description: 'State-specific contract templates for private property sales across Australia.',
      lastUpdated: '2024-01-08',
      downloadSize: '5.2 MB',
      type: 'Template Pack',
      requirements: [
        'NSW Contract Template',
        'VIC Contract Template',
        'QLD Contract Template',
        'WA Contract Template',
        'Other States Templates'
      ]
    },
    {
      id: '5',
      title: 'Building and Pest Inspection Guide',
      state: 'All',
      category: 'Inspections',
      description: 'Understanding building and pest inspections, what to expect, and how to arrange them.',
      lastUpdated: '2024-01-05',
      downloadSize: '1.5 MB',
      type: 'PDF Guide',
      requirements: [
        'When inspections are required',
        'Choosing qualified inspectors',
        'Understanding inspection reports',
        'Disclosure obligations'
      ]
    },
    {
      id: '6',
      title: 'Capital Gains Tax for Property Sales',
      state: 'All',
      category: 'Taxation',
      description: 'Understanding your CGT obligations when selling property, including exemptions and calculations.',
      lastUpdated: '2024-01-03',
      downloadSize: '1.9 MB',
      type: 'PDF Guide',
      requirements: [
        'CGT calculation methods',
        'Main residence exemption',
        'Record keeping requirements',
        'ATO reporting obligations'
      ]
    }
  ];

  const filteredGuides = legalGuides.filter(guide => {
    const matchesState = !selectedState || guide.state === selectedState || guide.state === 'All';
    const matchesCategory = !selectedCategory || guide.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesState && matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/resources"
              className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Resources
            </Link>
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Legal Compliance Guides
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Legal Guides & Requirements
            </h1>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              State-specific legal guides to ensure your private property sale 
              meets all compliance requirements across Australia.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search legal guides..."
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
              
              <div>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">All States</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Guides */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-neutral-900">
              {filteredGuides.length} Legal Guides Found
            </h2>
            
            <div className="text-sm text-neutral-500">
              Last updated: January 2024
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredGuides.map((guide, index) => (
            <Card
              key={guide.id}
              hover={true}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
                        {guide.state}
                      </span>
                      <span className="text-xs font-medium text-neutral-600 bg-neutral-100 px-2 py-1 rounded-full">
                        {guide.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {guide.title}
                    </h3>
                  </div>
                </div>
                
                <div className="text-right text-sm text-neutral-500">
                  <div>{guide.type}</div>
                  <div>{guide.downloadSize}</div>
                </div>
              </div>

              <p className="text-neutral-600 mb-6">
                {guide.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-neutral-900 mb-3">
                  Key Requirements:
                </h4>
                <div className="space-y-2">
                  {guide.requirements.map((requirement, reqIndex) => (
                    <div key={reqIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-neutral-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                <div className="text-sm text-neutral-500">
                  Updated: {new Date(guide.lastUpdated).toLocaleDateString()}
                </div>
                
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm" icon={ExternalLink} iconPosition="right">
                    Preview
                  </Button>
                  <Button variant="primary" size="sm" icon={Download} iconPosition="right">
                    Download
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              No guides found
            </h3>
            <p className="text-neutral-600 mb-6">
              Try adjusting your search criteria or browse all guides
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedState('');
                setSelectedCategory('');
              }}
              variant="primary"
            >
              Show All Guides
            </Button>
          </div>
        )}
      </div>

      {/* Important Notice */}
      <div className="bg-orange-50 border-t border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-orange-900 mb-2">
                Important Legal Notice
              </h3>
              <p className="text-orange-700 mb-4">
                These guides are for informational purposes only and do not constitute legal advice. 
                Property laws can change, and requirements may vary by location. Always consult with 
                a qualified legal professional or conveyancer for specific advice about your situation.
              </p>
              <div className="flex items-center space-x-4">
                <Link to="/support">
                  <Button variant="outline" size="sm">
                    Get Legal Support
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" icon={ExternalLink} iconPosition="right">
                  Find a Conveyancer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalGuides;