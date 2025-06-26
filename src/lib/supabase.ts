import { createClient } from '@supabase/supabase-js';

// In production, you would use your actual Supabase credentials
const supabaseUrl = 
    import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_URL !== 'your_supabase_url_here'
    ? import.meta.env.VITE_SUPABASE_URL 
    : 'https://demo.supabase.co';

const supabaseKey = 
    import.meta.env.VITE_SUPABASE_ANON_KEY && import.meta.env.VITE_SUPABASE_ANON_KEY !== 'your_supabase_anon_key_here'
    ? import.meta.env.VITE_SUPABASE_ANON_KEY 
    : 'demo-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Mock data for demo
export const mockProperties = [
  {
    id: '1',
    title: 'Modern Family Home with Pool',
    price: 850000,
    address: '123 Sunset Drive, Bondi Beach, NSW 2026',
    suburb: 'Bondi Beach',
    state: 'NSW',
    postcode: '2026',
    bedrooms: 4,
    bathrooms: 3,
    carSpaces: 2,
    landSize: 650,
    propertyType: 'house',
    images: ['https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 245,
    listingDate: '2024-01-15',
    features: ['Pool', 'Garden', 'Modern Kitchen', 'Air Conditioning'],
    description: 'Beautiful modern family home featuring a sparkling pool, landscaped gardens, and contemporary finishes throughout.'
  },
  {
    id: '2',
    title: 'Luxury Apartment with City Views',
    price: 1200000,
    address: '45 Collins Street, Melbourne, VIC 3000',
    suburb: 'Melbourne',
    state: 'VIC',
    postcode: '3000',
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 2,
    landSize: 0,
    propertyType: 'apartment',
    images: ['https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 189,
    listingDate: '2024-01-12',
    features: ['City Views', 'Balcony', 'Gym', 'Concierge'],
    description: 'Stunning luxury apartment with panoramic city views, premium finishes, and access to world-class amenities.'
  },
  {
    id: '3',
    title: 'Charming Queenslander with Character',
    price: 675000,
    address: '78 Maple Street, Paddington, QLD 4064',
    suburb: 'Paddington',
    state: 'QLD',
    postcode: '4064',
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 1,
    landSize: 405,
    propertyType: 'house',
    images: ['https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 156,
    listingDate: '2024-01-10',
    features: ['Character Home', 'Polished Floors', 'Verandah', 'Garden'],
    description: 'Classic Queenslander home with original character features, polished timber floors, and wraparound verandah.'
  },
  {
    id: '4',
    title: 'Waterfront Apartment with Marina Views',
    price: 950000,
    address: '12 Marina Boulevard, Perth, WA 6000',
    suburb: 'Perth',
    state: 'WA',
    postcode: '6000',
    bedrooms: 2,
    bathrooms: 2,
    carSpaces: 1,
    landSize: 0,
    propertyType: 'apartment',
    images: ['https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 312,
    listingDate: '2024-01-08',
    features: ['Water Views', 'Marina Access', 'Modern Kitchen', 'Balcony'],
    description: 'Spectacular waterfront apartment with direct marina views and premium finishes throughout.'
  },
  {
    id: '5',
    title: 'Heritage Cottage in Historic District',
    price: 720000,
    address: '34 Heritage Lane, Adelaide, SA 5000',
    suburb: 'Adelaide',
    state: 'SA',
    postcode: '5000',
    bedrooms: 3,
    bathrooms: 1,
    carSpaces: 1,
    landSize: 320,
    propertyType: 'house',
    images: ['https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 198,
    listingDate: '2024-01-05',
    features: ['Heritage Listed', 'Original Features', 'Courtyard', 'Period Details'],
    description: 'Beautifully preserved heritage cottage with original features and charming courtyard garden.'
  },
  {
    id: '6',
    title: 'Mountain View Retreat',
    price: 580000,
    address: '89 Mountain Road, Hobart, TAS 7000',
    suburb: 'Hobart',
    state: 'TAS',
    postcode: '7000',
    bedrooms: 4,
    bathrooms: 2,
    carSpaces: 2,
    landSize: 800,
    propertyType: 'house',
    images: ['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 167,
    listingDate: '2024-01-03',
    features: ['Mountain Views', 'Large Block', 'Workshop', 'Established Gardens'],
    description: 'Peaceful mountain retreat with stunning views, large block, and established gardens perfect for families.'
  }
];

export const searchProperties = async (filters: {
  query?: string;
  state?: string;
  minPrice?: number;
  maxPrice?: number;
  propertyType?: string;
  bedrooms?: number;
}) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let filtered = [...mockProperties];
  
  if (filters.query) {
    const query = filters.query.toLowerCase();
    filtered = filtered.filter(property => 
      property.title.toLowerCase().includes(query) ||
      property.address.toLowerCase().includes(query) ||
      property.suburb.toLowerCase().includes(query)
    );
  }
  
  if (filters.state) {
    filtered = filtered.filter(property => property.state === filters.state);
  }
  
  if (filters.minPrice) {
    filtered = filtered.filter(property => property.price >= filters.minPrice!);
  }
  
  if (filters.maxPrice) {
    filtered = filtered.filter(property => property.price <= filters.maxPrice!);
  }
  
  if (filters.propertyType) {
    filtered = filtered.filter(property => property.propertyType === filters.propertyType);
  }
  
  if (filters.bedrooms) {
    filtered = filtered.filter(property => property.bedrooms >= filters.bedrooms!);
  }
  
  return filtered;
};