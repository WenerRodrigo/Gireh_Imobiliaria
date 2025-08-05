export interface Property {
  id: string;
  code: string;
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  operation: 'sale' | 'rent';
  type: 'house' | 'apartment' | 'land' | 'penthouse' | 'commercial';
  city: string;
  neighborhood: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  area: number;
  builtArea?: number;
  totalArea?: number;
  floor?: number;
  yearBuilt?: number;
  status: 'available' | 'sold' | 'rented';
  financing: string[];
  images: string[];
  featured: boolean;
  isNew: boolean;
  priceReduced: boolean;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface SearchFilters {
  query: string;
  operation: 'sale' | 'rent' | '';
  city: string;
  type: string;
  neighborhood: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  bathrooms: string;
  garages: string;
}