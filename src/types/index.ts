export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: 'buyer' | 'seller' | 'admin';
  isVerified: boolean;
  createdAt: Date;
  subscription?: Subscription;
  profileImage?: string;
}

export interface Property {
  id: string;
  sellerId: string;
  title: string;
  description: string;
  price: number;
  address: {
    street: string;
    suburb: string;
    state: AustralianState;
    postcode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  propertyType: 'house' | 'apartment' | 'townhouse' | 'land' | 'commercial';
  bedrooms: number;
  bathrooms: number;
  carSpaces: number;
  landSize: number;
  buildingSize: number;
  features: string[];
  images: string[];
  virtualTour?: string;
  status: 'draft' | 'active' | 'under_offer' | 'sold';
  listingDate: Date;
  inspectionTimes: InspectionTime[];
  compliance: ComplianceChecklist;
  disclosures: Disclosure[];
  views: number;
  offers: Offer[];
}

export interface InspectionTime {
  id: string;
  date: Date;
  startTime: string;
  endTime: string;
  type: 'open' | 'private';
  attendees?: string[];
}

export interface Offer {
  id: string;
  propertyId: string;
  buyerId: string;
  amount: number;
  conditions: string[];
  settlementDate: Date;
  status: 'pending' | 'accepted' | 'rejected' | 'countered';
  submittedAt: Date;
  expiresAt: Date;
  counterOffer?: {
    amount: number;
    conditions: string[];
    message: string;
  };
}

export interface Subscription {
  id: string;
  userId: string;
  plan: 'essential' | 'elite' | 'pro_investor';
  status: 'active' | 'cancelled' | 'expired';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  listingsUsed: number;
  listingsLimit: number;
  features: string[];
}

export interface ComplianceChecklist {
  state: AustralianState;
  items: ComplianceItem[];
  completionPercentage: number;
}

export interface ComplianceItem {
  id: string;
  title: string;
  description: string;
  required: boolean;
  completed: boolean;
  dueDate?: Date;
  documentUrl?: string;
  stateSpecific: boolean;
}

export interface Disclosure {
  id: string;
  type: string;
  title: string;
  content: string;
  required: boolean;
  completed: boolean;
  signedAt?: Date;
  documentUrl?: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  propertyId?: string;
  content: string;
  timestamp: Date;
  read: boolean;
  type: 'text' | 'offer' | 'system';
}

export interface StateCompliance {
  state: AustralianState;
  coolingOffPeriod: number;
  requiredDisclosures: string[];
  mandatoryInspections: string[];
  contractRequirements: string[];
  governmentResources: { name: string; url: string }[];
  commissionRates: { min: number; max: number };
}

export type AustralianState = 'NSW' | 'VIC' | 'QLD' | 'WA' | 'SA' | 'TAS' | 'ACT' | 'NT';

export interface PricingData {
  suburb: string;
  state: AustralianState;
  medianPrice: number;
  priceGrowth: number;
  daysOnMarket: number;
  salesVolume: number;
}

export interface MarketInsight {
  id: string;
  title: string;
  content: string;
  state: AustralianState;
  suburb?: string;
  publishedAt: Date;
  category: 'market_trend' | 'price_update' | 'regulatory_change';
}