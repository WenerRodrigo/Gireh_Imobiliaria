import React, { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import type { SearchFilters } from "../types/Property";

interface SearchBarProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  filters,
  onFiltersChange,
  onSearch,
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleInputChange = (field: keyof SearchFilters, value: string) => {
    onFiltersChange({ ...filters, [field]: value });
  };

  const clearFilters = () => {
    onFiltersChange({
      query: "",
      operation: "",
      city: "",
      type: "",
      neighborhood: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
      bathrooms: "",
      garages: "",
    });
  };

  const propertyTypes = [
    { value: "", label: "Todos os tipos" },
    { value: "house", label: "Casa" },
    { value: "apartment", label: "Apartamento" },
    { value: "penthouse", label: "Cobertura" },
    { value: "land", label: "Terreno" },
    { value: "commercial", label: "Comercial" },
  ];

  const cities = [
    "São Paulo",
    "Campinas",
    "Santos",
    "Ribeirão Preto",
    "Ouro Preto",
  ];

  const neighborhoods = [
    "Centro",
    "Jardim das Flores",
    "Gonzaga",
    "Vila Madalena",
    "Centro Histórico",
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {/* Search Query */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Buscar imóvel
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Digite o código ou nome do imóvel"
              value={filters.query}
              onChange={(e) => handleInputChange("query", e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Operation */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Operação
          </label>
          <select
            value={filters.operation}
            onChange={(e) => handleInputChange("operation", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Todas</option>
            <option value="sale">Comprar</option>
            <option value="rent">Alugar</option>
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cidade
          </label>
          <select
            value={filters.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Todas as cidades</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Advanced Filters Toggle */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          <Filter className="h-4 w-4" />
          <span>{showAdvanced ? "Ocultar" : "Mostrar"} filtros avançados</span>
        </button>

        <div className="flex space-x-3">
          <button
            onClick={clearFilters}
            className="flex items-center space-x-1 px-3 py-1 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <X className="h-4 w-4" />
            <span>Limpar</span>
          </button>
          <button
            onClick={onSearch}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Buscar
          </button>
        </div>
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
          {/* Property Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo do Imóvel
            </label>
            <select
              value={filters.type}
              onChange={(e) => handleInputChange("type", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {propertyTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Neighborhood */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bairro
            </label>
            <select
              value={filters.neighborhood}
              onChange={(e) =>
                handleInputChange("neighborhood", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todos os bairros</option>
              {neighborhoods.map((neighborhood) => (
                <option key={neighborhood} value={neighborhood}>
                  {neighborhood}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preço Mínimo
            </label>
            <input
              type="number"
              placeholder="0"
              value={filters.minPrice}
              onChange={(e) => handleInputChange("minPrice", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preço Máximo
            </label>
            <input
              type="number"
              placeholder="Sem limite"
              value={filters.maxPrice}
              onChange={(e) => handleInputChange("maxPrice", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Bedrooms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quartos
            </label>
            <select
              value={filters.bedrooms}
              onChange={(e) => handleInputChange("bedrooms", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Qualquer</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>

          {/* Bathrooms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Banheiros
            </label>
            <select
              value={filters.bathrooms}
              onChange={(e) => handleInputChange("bathrooms", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Qualquer</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>

          {/* Garages */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vagas
            </label>
            <select
              value={filters.garages}
              onChange={(e) => handleInputChange("garages", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Qualquer</option>
              <option value="0">Sem vaga</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
