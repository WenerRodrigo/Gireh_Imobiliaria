import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar';
import { properties } from '../data/properties';
import { SlidersHorizontal, Grid, List } from 'lucide-react';
import type { Property, SearchFilters } from '../types/Property';

const Properties: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');

  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    query: searchParams.get('query') || '',
    operation: (() => {
      const op = searchParams.get('operation');
      return op === 'rent' || op === 'sale' ? op : '';
    })(),
    city: searchParams.get('city') || '',
    type: searchParams.get('type') || '',
    neighborhood: searchParams.get('neighborhood') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    bedrooms: searchParams.get('bedrooms') || '',
    bathrooms: searchParams.get('bathrooms') || '',
    garages: searchParams.get('garages') || ''
  });

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    filterProperties();
  }, [searchFilters, sortBy]);

  const handleToggleFavorite = (propertyId: string) => {
    const newFavorites = favorites.includes(propertyId)
      ? favorites.filter(id => id !== propertyId)
      : [...favorites, propertyId];
    
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const filterProperties = () => {
    // eslint-disable-next-line prefer-const
    let filtered = properties.filter(property => {
      // Text search
      if (searchFilters.query) {
        const query = searchFilters.query.toLowerCase();
        const matchesQuery = 
          property.title.toLowerCase().includes(query) ||
          property.code.toLowerCase().includes(query) ||
          property.description.toLowerCase().includes(query) ||
          property.neighborhood.toLowerCase().includes(query) ||
          property.city.toLowerCase().includes(query);
        if (!matchesQuery) return false;
      }

      // Operation filter
      if (searchFilters.operation && property.operation !== searchFilters.operation) {
        return false;
      }

      // City filter
      if (searchFilters.city && property.city !== searchFilters.city) {
        return false;
      }

      // Type filter
      if (searchFilters.type && property.type !== searchFilters.type) {
        return false;
      }

      // Neighborhood filter
      if (searchFilters.neighborhood && property.neighborhood !== searchFilters.neighborhood) {
        return false;
      }

      // Price range
      if (searchFilters.minPrice) {
        const minPrice = parseFloat(searchFilters.minPrice);
        if (property.price < minPrice) return false;
      }

      if (searchFilters.maxPrice) {
        const maxPrice = parseFloat(searchFilters.maxPrice);
        if (property.price > maxPrice) return false;
      }

      // Bedrooms filter
      if (searchFilters.bedrooms) {
        const minBedrooms = parseInt(searchFilters.bedrooms);
        if (property.bedrooms < minBedrooms) return false;
      }

      // Bathrooms filter
      if (searchFilters.bathrooms) {
        const minBathrooms = parseInt(searchFilters.bathrooms);
        if (property.bathrooms < minBathrooms) return false;
      }

      // Garages filter
      if (searchFilters.garages) {
        const minGarages = parseInt(searchFilters.garages);
        if (property.garages < minGarages) return false;
      }

      return true;
    });

    // Sort properties
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'area-asc':
          return a.area - b.area;
        case 'area-desc':
          return b.area - a.area;
        case 'newest':
        default:
          // Featured properties first, then by ID (newer first)
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.id.localeCompare(a.id);
      }
    });

    setFilteredProperties(filtered);
  };

  const handleSearch = () => {
    filterProperties();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Encontre Seu Imóvel Ideal
          </h1>
          <p className="text-gray-600">
            Explore nosso portfólio completo de imóveis disponíveis para venda e locação.
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar
          filters={searchFilters}
          onFiltersChange={setSearchFilters}
          onSearch={handleSearch}
        />

        {/* Results Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
          <div>
            <p className="text-gray-600">
              {filteredProperties.length} {filteredProperties.length === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {/* Sort Options */}
            <div className="flex items-center space-x-2">
              <SlidersHorizontal className="h-4 w-4 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="newest">Mais Relevantes</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
                <option value="area-asc">Menor Área</option>
                <option value="area-desc">Maior Área</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 text-sm ${
                  viewMode === 'grid' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 text-sm ${
                  viewMode === 'list' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Properties Grid/List */}
        {filteredProperties.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
          }>
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                isFavorite={favorites.includes(property.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <SlidersHorizontal className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhum imóvel encontrado
            </h3>
            <p className="text-gray-600 mb-6">
              Tente ajustar seus filtros de busca para encontrar mais resultados.
            </p>
            <button
              onClick={() => {
                setSearchFilters({
                  query: '',
                  operation: '',
                  city: '',
                  type: '',
                  neighborhood: '',
                  minPrice: '',
                  maxPrice: '',
                  bedrooms: '',
                  bathrooms: '',
                  garages: ''
                });
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Limpar Filtros
            </button>
          </div>
        )}

        {/* Load More (placeholder for pagination) */}
        {filteredProperties.length > 9 && (
          <div className="text-center mt-12">
            <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors">
              Carregar Mais Imóveis
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;