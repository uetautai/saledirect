import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Bed, Bath, Car, Heart, Eye, Loader } from 'lucide-react';
import { searchProperties } from '../lib/supabase';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';
import toast from 'react-hot-toast';

interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  bedrooms: number;
  bathrooms: number;
  carSpaces: number;
  landSize: number;
  propertyType: string;
  images: string[];
  views: number;
  listingDate: string;
  features: string[];
  description: string;
}

const Properties: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const states = ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'];
  const propertyTypes = ['house', 'apartment', 'townhouse', 'land'];

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      setLoading(true);
      const results = await searchProperties({});
      setProperties(results);
    } catch (error) {
      toast.error('Failed to load properties');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const filters = {
        query: searchQuery || undefined,
        state: selectedState || undefined,
        minPrice: priceRange.min ? parseInt(priceRange.min) : undefined,
        maxPrice: priceRange.max ? parseInt(priceRange.max) : undefined,
        propertyType: propertyType || undefined,
        bedrooms: bedrooms ? parseInt(bedrooms) : undefined,
      };
      
      const results = await searchProperties(filters);
      setProperties(results);
      
      if (results.length === 0) {
        toast.error('No properties found matching your criteria');
      } else {
        toast.success(`Found ${results.length} properties`);
      }
    } catch (error) {
      toast.error('Search failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const sortedProperties = [...properties].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'views':
        return b.views - a.views;
      case 'newest':
      default:
        return new Date(b.listingDate).getTime() - new Date(a.listingDate).getTime();
    }
  });

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Find Your Perfect Property
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Browse thousands of properties for sale by owner across Australia
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Search Location
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Suburb, city, or postcode"
                      className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    State
                  </label>
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
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Property Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">All Types</option>
                    {propertyTypes.map(type => (
                      <option key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Price Range
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
                      placeholder="Min"
                      className="w-full px-3 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                    />
                    <input
                      type="number"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
                      placeholder="Max"
                      className="w-full px-3 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Bedrooms
                  </label>
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <Button
                    onClick={handleSearch}
                    variant="primary"
                    icon={Search}
                    size="md"
                    className="w-full"
                    loading={loading}
                  >
                    Search Properties
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900">
              {loading ? 'Searching...' : `${properties.length} Properties Found`}
            </h2>
            <p className="text-neutral-600">
              {searchQuery ? `Results for "${searchQuery}"` : 'Showing all properties'}
            </p>
          </div>
          
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="newest">Sort by: Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="views">Most Viewed</option>
          </select>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader className="h-8 w-8 animate-spin text-primary-500" />
          </div>
        )}

        {/* Property Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProperties.map((property, index) => (
              <Card
                key={property.id}
                hover={true}
                padding="sm"
                className="animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              >
                {/* Property Image */}
                <div className="relative mb-4">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Heart className="h-5 w-5 text-neutral-600 hover:text-red-500" />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                    {property.propertyType.charAt(0).toUpperCase() + property.propertyType.slice(1)}
                  </div>
                </div>

                {/* Property Details */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-neutral-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.suburb}, {property.state} {property.postcode}
                    </div>
                  </div>

                  <div className="text-2xl font-bold text-primary-600">
                    ${property.price.toLocaleString()}
                  </div>

                  {/* Property Features */}
                  <div className="flex items-center space-x-4 text-neutral-600">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Car className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.carSpaces}</span>
                    </div>
                    {property.landSize > 0 && (
                      <div className="text-sm">
                        {property.landSize}m²
                      </div>
                    )}
                  </div>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2">
                    {property.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center pt-3 border-t border-neutral-200">
                    <div className="flex items-center text-neutral-500 text-sm">
                      <Eye className="h-4 w-4 mr-1" />
                      {property.views} views
                    </div>
                    <div className="text-neutral-500 text-sm">
                      Listed {new Date(property.listingDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* No Results */}
        {!loading && properties.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              No properties found
            </h3>
            <p className="text-neutral-600 mb-6">
              Try adjusting your search criteria or browse all properties
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedState('');
                setPriceRange({ min: '', max: '' });
                setPropertyType('');
                setBedrooms('');
                loadProperties();
              }}
              variant="primary"
            >
              Show All Properties
            </Button>
          </div>
        )}

        {/* Load More */}
        {!loading && properties.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Properties
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;