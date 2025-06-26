import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  FileText, 
  ExternalLink,
  Download,
  Shield
} from 'lucide-react';
import { stateComplianceData } from '../data/stateCompliance';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';

const StateCompliance: React.FC = () => {
  const [selectedState, setSelectedState] = useState('NSW');

  const states = Object.keys(stateComplianceData);
  const compliance = stateComplianceData[selectedState as keyof typeof stateComplianceData];

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
              State Compliance Requirements
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              {selectedState} Compliance Checklist
            </h1>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Interactive compliance checklist for private property sales in {selectedState}. 
              Ensure you meet all legal requirements before listing your property.
            </p>
          </div>

          {/* State Selector */}
          <div className="max-w-md mx-auto">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Select Your State
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-neutral-900">
                    {selectedState} Requirements Overview
                  </h2>
                  <p className="text-neutral-600">
                    Complete this checklist to ensure legal compliance
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <Clock className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-600">
                    {compliance.coolingOffPeriod}
                  </div>
                  <div className="text-sm text-primary-700">
                    Cooling-off Period (days)
                  </div>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <FileText className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">
                    {compliance.requiredDisclosures.length}
                  </div>
                  <div className="text-sm text-green-700">
                    Required Disclosures
                  </div>
                </div>
                
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-600">
                    {compliance.mandatoryInspections.length}
                  </div>
                  <div className="text-sm text-orange-700">
                    Mandatory Inspections
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-orange-900">Commission Savings in {selectedState}</p>
                    <p className="text-sm text-orange-700 mt-1">
                      Typical agent commission: {compliance.commissionRates.min}% - {compliance.commissionRates.max}%
                      <br />
                      On a $800,000 property, you could save ${((800000 * ((compliance.commissionRates.min + compliance.commissionRates.max) / 2)) / 100).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Required Disclosures */}
            <Card>
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                Required Disclosures
              </h3>
              
              <div className="space-y-4">
                {compliance.requiredDisclosures.map((disclosure, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="font-medium text-neutral-900">{disclosure}</p>
                        <p className="text-sm text-neutral-600">Required for all property sales in {selectedState}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" icon={FileText}>
                        Template
                      </Button>
                      <Button variant="outline" size="sm" icon={ExternalLink}>
                        Learn More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Mandatory Inspections */}
            <Card>
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                Mandatory Inspections
              </h3>
              
              <div className="space-y-4">
                {compliance.mandatoryInspections.map((inspection, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="h-5 w-5 text-orange-500" />
                      <div>
                        <p className="font-medium text-neutral-900">{inspection}</p>
                        <p className="text-sm text-neutral-600">Must be completed before sale</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        Book Inspection
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contract Requirements */}
            <Card>
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                Contract Requirements
              </h3>
              
              <div className="space-y-3">
                {compliance.contractRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <p className="text-neutral-700">{requirement}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Quick Actions
              </h3>
              
              <div className="space-y-3">
                <Button variant="primary" className="w-full" icon={Download}>
                  Download {selectedState} Checklist
                </Button>
                <Button variant="outline" className="w-full" icon={FileText}>
                  Get Contract Template
                </Button>
                <Button variant="outline" className="w-full" icon={ExternalLink}>
                  Book Legal Consultation
                </Button>
                <Button variant="ghost" className="w-full">
                  Find Conveyancer
                </Button>
              </div>
            </Card>

            {/* Government Resources */}
            <Card>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Official Resources
              </h3>
              
              <div className="space-y-3">
                {compliance.governmentResources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg hover:border-primary-200 hover:bg-primary-50 transition-colors"
                  >
                    <span className="text-sm font-medium text-neutral-900">
                      {resource.name}
                    </span>
                    <ExternalLink className="h-4 w-4 text-neutral-400" />
                  </a>
                ))}
              </div>
            </Card>

            {/* Progress Tracker */}
            <Card>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Compliance Progress
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-neutral-700">
                      Overall Progress
                    </span>
                    <span className="text-sm text-neutral-600">0%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full w-0"></div>
                  </div>
                </div>
                
                <div className="text-sm text-neutral-600">
                  <p>✓ 0 of {compliance.requiredDisclosures.length} disclosures completed</p>
                  <p>✓ 0 of {compliance.mandatoryInspections.length} inspections completed</p>
                  <p>✓ Contract requirements not started</p>
                </div>
                
                <Button variant="primary" size="sm" className="w-full">
                  Start Compliance Check
                </Button>
              </div>
            </Card>

            {/* Need Help */}
            <Card>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Need Help?
              </h3>
              
              <p className="text-sm text-neutral-600 mb-4">
                Our legal experts can help ensure your sale meets all {selectedState} requirements.
              </p>
              
              <div className="space-y-3">
                <Link to="/support">
                  <Button variant="outline" size="sm" className="w-full">
                    Contact Support
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" className="w-full">
                  Book Legal Consultation
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateCompliance;