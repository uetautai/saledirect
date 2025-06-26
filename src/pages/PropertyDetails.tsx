import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  MapPin, 
  Bed, 
  Bath, 
  Car, 
  Ruler,
  Calendar,
  Eye,
  Phone,
  Mail,
  MessageSquare,
  Camera,
  Play,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { mockProperties } from '../lib/supabase';
import { useAuthStore } from '../store/authStore';
import Button from '../components/Common/Button';
import Card from '../components/Common/Card';
import toast from 'react-hot-toast';

const PropertyDetails: React.FC = () => {
  const { id } = useParams();
  const { isSignedIn } = useAuthStore();
  const [property, setProperty] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [offerAmount, setOfferAmount] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const foundProperty = mockProperties.find(p => p.id === id);
    if (foundProperty) {
      setProperty({
        ...foundProperty,
        seller: {
          name: 'Sarah Johnson',
          phone: '+61 412 345 678',
          email: 'sarah.j@email.com',
          verified: true,
          memberSince: '2023'
        },
        inspectionTimes: [
          { date: '2024-02-10', time: '10:00 AM - 10:30 AM', type: 'Open Inspection' },
          { date: '2024-02-12', time: '6:00 PM - 6:30 PM', type: 'Private Inspection' }
        ],
        compliance: {
          completed: 8,
          total: 10,
          items: [
            { name: 'Building Inspection', completed: true },
            { name: 'Pest Inspection', completed: true },
            { name: 'Pool Safety Certificate', completed: true },
            { name: 'Smoke Alarm Compliance', completed: false },
            { name: 'Energy Rating Certificate', completed: false }
          ]
        }
      });
    }
  }, [id]);

  const handleMakeOffer = () => {
    if (!isSignedIn) {
      toast.error('Please sign in to make an offer');
      return;
    }
    
    if (!offerAmount) {
      toast.error('Please enter an offer amount');
      return;
    }

    toast.success('Offer submitted successfully!');
    setOfferAmount('');
    setMessage('');
  };

  const handleContactSeller = () => {
    if (!isSignedIn) {
      toast.error('Please sign in to contact the seller');
      return;
    }
    
    setShowContactForm(true);
  };

  if (!property) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🏠</div>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-2">Property Not Found</h2>
          <p className="text-neutral-600 mb-6">The property you're looking for doesn't exist.</p>
          <Link to="/properties">
            <Button variant="primary">Browse Properties</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/properties" className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Properties
            </Link>
            <div className="flex items-center space-x-3">
              <button className="p-2 text-neutral-400 hover:text-red-500 transition-colors">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-2 text-neutral-400 hover:text-primary-600 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <Card padding="sm">
              <div className="relative">
                <img
                  src={property.images[currentImageIndex] || property.images[0]}
                  alt={property.title}
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                  {currentImageIndex + 1} / {property.images.length}
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <button className="bg-white/90 p-2 rounded-lg hover:bg-white transition-colors">
                    <Camera className="h-5 w-5" />
                  </button>
                  <button className="bg-white/90 p-2 rounded-lg hover:bg-white transition-colors">
                    <Play className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              {/* Thumbnail Navigation */}
              <div className="flex space-x-2 mt-4 overflow-x-auto">
                {property.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImageIndex === index ? 'border-primary-500' : 'border-neutral-200'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </Card>

            {/* Property Details */}
            <Card>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-display font-bold text-neutral-900">
                    {property.title}
                  </h1>
                  <div className="text-3xl font-bold text-primary-600">
                    ${property.price.toLocaleString()}
                  </div>
                </div>
                
                <div className="flex items-center text-neutral-600 mb-6">
                  <MapPin className="h-5 w-5 mr-2" />
                  {property.address}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-2 mx-auto">
                      <Bed className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="text-2xl font-bold text-neutral-900">{property.bedrooms}</div>
                    <div className="text-sm text-neutral-500">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-2 mx-auto">
                      <Bath className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="text-2xl font-bold text-neutral-900">{property.bathrooms}</div>
                    <div className="text-sm text-neutral-500">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-2 mx-auto">
                      <Car className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="text-2xl font-bold text-neutral-900">{property.carSpaces}</div>
                    <div className="text-sm text-neutral-500">Car Spaces</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-2 mx-auto">
                      <Ruler className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="text-2xl font-bold text-neutral-900">{property.landSize}</div>
                    <div className="text-sm text-neutral-500">Land Size (m²)</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {property.features.map((feature: string) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">Description</h3>
                <p className="text-neutral-700 leading-relaxed">
                  {property.description}
                </p>
              </div>
            </Card>

            {/* Inspection Times */}
            <Card>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Inspection Times</h3>
              <div className="space-y-3">
                {property.inspectionTimes.map((inspection: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-primary-600" />
                      <div>
                        <div className="font-medium text-neutral-900">
                          {new Date(inspection.date).toLocaleDateString('en-AU', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="text-sm text-neutral-600">{inspection.time} • {inspection.type}</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Book Inspection
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Compliance Status */}
            <Card>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Legal Compliance</h3>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-neutral-700">
                    Compliance Progress
                  </span>
                  <span className="text-sm text-neutral-600">
                    {property.compliance.completed}/{property.compliance.total} Complete
                  </span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div 
                    className="bg-primary-500 h-2 rounded-full" 
                    style={{ width: `${(property.compliance.completed / property.compliance.total) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="space-y-2">
                {property.compliance.items.map((item: any, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    {item.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-orange-500" />
                    )}
                    <span className={`text-sm ${item.completed ? 'text-neutral-700' : 'text-orange-600'}`}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Seller Info */}
            <Card>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-semibold text-xl">SJ</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">{property.seller.name}</h3>
                <div className="flex items-center justify-center space-x-2 text-sm text-neutral-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Verified Seller</span>
                </div>
                <p className="text-sm text-neutral-500 mt-1">Member since {property.seller.memberSince}</p>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleContactSeller}
                  variant="primary"
                  size="lg"
                  className="w-full"
                  icon={MessageSquare}
                >
                  Contact Seller
                </Button>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="md" icon={Phone}>
                    Call
                  </Button>
                  <Button variant="outline" size="md" icon={Mail}>
                    Email
                  </Button>
                </div>
              </div>
            </Card>

            {/* Make Offer */}
            <Card>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Make an Offer</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Offer Amount (AUD)
                  </label>
                  <input
                    type="number"
                    value={offerAmount}
                    onChange={(e) => setOfferAmount(e.target.value)}
                    placeholder="Enter your offer"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Add a personal message..."
                    rows={3}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <Button
                  onClick={handleMakeOffer}
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  Submit Offer
                </Button>
              </div>
            </Card>

            {/* Property Stats */}
            <Card>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Property Statistics</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-neutral-400" />
                    <span className="text-sm text-neutral-600">Views</span>
                  </div>
                  <span className="font-medium text-neutral-900">{property.views}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-neutral-400" />
                    <span className="text-sm text-neutral-600">Listed</span>
                  </div>
                  <span className="font-medium text-neutral-900">
                    {new Date(property.listingDate).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-4 h-4 bg-primary-500 rounded-full"></span>
                    <span className="text-sm text-neutral-600">Property Type</span>
                  </div>
                  <span className="font-medium text-neutral-900 capitalize">{property.propertyType}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-neutral-900">Contact Seller</h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-neutral-400 hover:text-neutral-600"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Your Message
                </label>
                <textarea
                  placeholder="Hi, I'm interested in your property..."
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div className="flex space-x-3">
                <Button
                  onClick={() => {
                    toast.success('Message sent successfully!');
                    setShowContactForm(false);
                  }}
                  variant="primary"
                  className="flex-1"
                >
                  Send Message
                </Button>
                <Button
                  onClick={() => setShowContactForm(false)}
                  variant="outline"
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;