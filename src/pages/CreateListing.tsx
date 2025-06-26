import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Upload, 
  MapPin, 
  Home, 
  DollarSign,
  FileText,
  Camera,
  CheckCircle,
  AlertCircle,
  Plus,
  X
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';
import toast from 'react-hot-toast';

const CreateListing: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    title: '',
    description: '',
    propertyType: '',
    
    // Location
    street: '',
    suburb: '',
    state: '',
    postcode: '',
    
    // Details
    bedrooms: '',
    bathrooms: '',
    carSpaces: '',
    landSize: '',
    buildingSize: '',
    
    // Pricing
    price: '',
    priceType: 'fixed', // fixed, auction, negotiable
    
    // Features
    features: [] as string[],
    
    // Images
    images: [] as string[],
    
    // Legal
    hasBuilding: false,
    hasPest: false,
    hasPool: false,
    poolCompliant: false
  });

  const steps = [
    { number: 1, title: 'Basic Information', icon: FileText },
    { number: 2, title: 'Property Details', icon: Home },
    { number: 3, title: 'Location & Pricing', icon: MapPin },
    { number: 4, title: 'Photos & Features', icon: Camera },
    { number: 5, title: 'Legal Compliance', icon: CheckCircle }
  ];

  const propertyTypes = [
    'House',
    'Apartment',
    'Townhouse',
    'Villa',
    'Land',
    'Commercial'
  ];

  const states = ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'];

  const commonFeatures = [
    'Pool', 'Garden', 'Garage', 'Balcony', 'Deck', 'Fireplace',
    'Air Conditioning', 'Heating', 'Solar Panels', 'Security System',
    'Built-in Wardrobes', 'Walk-in Closet', 'Ensuite', 'Study',
    'Gym', 'Wine Cellar', 'Outdoor Entertainment', 'Water Views'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addFeature = (feature: string) => {
    if (!formData.features.includes(feature)) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, feature]
      }));
    }
  };

  const removeFeature = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter(f => f !== feature)
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    toast.success('Listing created successfully!');
    navigate('/dashboard');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Property Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="e.g., Modern Family Home with Pool"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Property Type *
              </label>
              <select
                value={formData.propertyType}
                onChange={(e) => handleInputChange('propertyType', e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              >
                <option value="">Select property type</option>
                {propertyTypes.map(type => (
                  <option key={type} value={type.toLowerCase()}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Describe your property's key features and selling points..."
                rows={6}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
              <p className="text-sm text-neutral-500 mt-1">
                Tip: Mention unique features, recent renovations, and nearby amenities
              </p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Bedrooms *
                </label>
                <input
                  type="number"
                  value={formData.bedrooms}
                  onChange={(e) => handleInputChange('bedrooms', e.target.value)}
                  min="0"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Bathrooms *
                </label>
                <input
                  type="number"
                  value={formData.bathrooms}
                  onChange={(e) => handleInputChange('bathrooms', e.target.value)}
                  min="0"
                  step="0.5"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Car Spaces
                </label>
                <input
                  type="number"
                  value={formData.carSpaces}
                  onChange={(e) => handleInputChange('carSpaces', e.target.value)}
                  min="0"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Land Size (m²)
                </label>
                <input
                  type="number"
                  value={formData.landSize}
                  onChange={(e) => handleInputChange('landSize', e.target.value)}
                  min="0"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Building Size (m²)
                </label>
                <input
                  type="number"
                  value={formData.buildingSize}
                  onChange={(e) => handleInputChange('buildingSize', e.target.value)}
                  min="0"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  value={formData.street}
                  onChange={(e) => handleInputChange('street', e.target.value)}
                  placeholder="123 Main Street"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Suburb *
                </label>
                <input
                  type="text"
                  value={formData.suburb}
                  onChange={(e) => handleInputChange('suburb', e.target.value)}
                  placeholder="Bondi Beach"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  State *
                </label>
                <select
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                >
                  <option value="">Select state</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Postcode *
                </label>
                <input
                  type="text"
                  value={formData.postcode}
                  onChange={(e) => handleInputChange('postcode', e.target.value)}
                  placeholder="2026"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Asking Price (AUD) *
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => handleInputChange('price', e.target.value)}
                placeholder="850000"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Price Type
              </label>
              <div className="grid grid-cols-3 gap-4">
                {['fixed', 'negotiable', 'auction'].map(type => (
                  <label key={type} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="priceType"
                      value={type}
                      checked={formData.priceType === type}
                      onChange={(e) => handleInputChange('priceType', e.target.value)}
                      className="text-primary-600 focus:ring-primary-500"
                    />
                    <span className="capitalize">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Property Photos
              </label>
              <div className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                <p className="text-neutral-600 mb-2">
                  Drag and drop photos here, or click to select
                </p>
                <p className="text-sm text-neutral-500">
                  Upload up to 20 high-quality photos (JPG, PNG, max 10MB each)
                </p>
                <Button variant="outline" className="mt-4">
                  Choose Photos
                </Button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-4">
                Property Features
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {commonFeatures.map(feature => (
                  <button
                    key={feature}
                    type="button"
                    onClick={() => 
                      formData.features.includes(feature) 
                        ? removeFeature(feature)
                        : addFeature(feature)
                    }
                    className={`p-3 text-sm rounded-lg border transition-colors ${
                      formData.features.includes(feature)
                        ? 'bg-primary-100 border-primary-500 text-primary-700'
                        : 'bg-white border-neutral-300 text-neutral-700 hover:border-primary-300'
                    }`}
                  >
                    {feature}
                  </button>
                ))}
              </div>
              
              {formData.features.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-neutral-700 mb-2">Selected Features:</p>
                  <div className="flex flex-wrap gap-2">
                    {formData.features.map(feature => (
                      <span
                        key={feature}
                        className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                      >
                        {feature}
                        <button
                          type="button"
                          onClick={() => removeFeature(feature)}
                          className="ml-2 text-primary-500 hover:text-primary-700"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                Legal Compliance for {formData.state || 'Your State'}
              </h3>
              <p className="text-primary-700">
                Complete these requirements to ensure your listing meets all legal obligations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium text-neutral-900">Building Inspection</p>
                    <p className="text-sm text-neutral-600">Required for all property sales</p>
                  </div>
                </div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.hasBuilding}
                    onChange={(e) => handleInputChange('hasBuilding', e.target.checked)}
                    className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm">Completed</span>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium text-neutral-900">Pest Inspection</p>
                    <p className="text-sm text-neutral-600">Required for all property sales</p>
                  </div>
                </div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.hasPest}
                    onChange={(e) => handleInputChange('hasPest', e.target.checked)}
                    className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm">Completed</span>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="font-medium text-neutral-900">Pool Safety Certificate</p>
                    <p className="text-sm text-neutral-600">Required if property has a pool</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.hasPool}
                      onChange={(e) => handleInputChange('hasPool', e.target.checked)}
                      className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-sm">Has Pool</span>
                  </label>
                  {formData.hasPool && (
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.poolCompliant}
                        onChange={(e) => handleInputChange('poolCompliant', e.target.checked)}
                        className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm">Compliant</span>
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                <div>
                  <p className="font-medium text-orange-900">Important Notice</p>
                  <p className="text-sm text-orange-700 mt-1">
                    Ensure all inspections and certificates are current and valid. 
                    Our legal team can help arrange these if needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Dashboard
            </button>
            
            <div className="text-sm text-neutral-500">
              Step {currentStep} of {steps.length}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;
              
              return (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                    isCompleted 
                      ? 'bg-primary-500 border-primary-500 text-white'
                      : isActive
                        ? 'border-primary-500 text-primary-500'
                        : 'border-neutral-300 text-neutral-400'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <Icon className="h-5 w-5" />
                    )}
                  </div>
                  
                  <div className="ml-3 hidden sm:block">
                    <p className={`text-sm font-medium ${
                      isActive ? 'text-primary-600' : 'text-neutral-500'
                    }`}>
                      {step.title}
                    </p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className={`hidden sm:block w-16 h-px mx-4 ${
                      isCompleted ? 'bg-primary-500' : 'bg-neutral-300'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Content */}
        <Card className="mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-display font-bold text-neutral-900">
              {steps[currentStep - 1].title}
            </h2>
            <p className="text-neutral-600 mt-1">
              {currentStep === 1 && "Let's start with the basic information about your property"}
              {currentStep === 2 && "Tell us about your property's specifications"}
              {currentStep === 3 && "Where is your property located and what's your asking price?"}
              {currentStep === 4 && "Add photos and highlight your property's best features"}
              {currentStep === 5 && "Ensure your listing meets all legal requirements"}
            </p>
          </div>

          {renderStepContent()}
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            onClick={handlePrevious}
            variant="outline"
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          
          <div className="flex space-x-4">
            <Button variant="ghost">
              Save Draft
            </Button>
            
            {currentStep === steps.length ? (
              <Button
                onClick={handleSubmit}
                variant="primary"
                icon={CheckCircle}
                iconPosition="right"
              >
                Publish Listing
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                variant="primary"
              >
                Next Step
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateListing;