import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Bed,
  Bath,
  Car,
  Square,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Star,
  Tag,
  Zap,
} from "lucide-react";
import type { Property } from "../types/Property";

interface PropertyCardProps {
  property: Property;
  isFavorite?: boolean;
  onToggleFavorite?: (propertyId: string) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isFavorite = false,
  onToggleFavorite,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price: number, operation: string) => {
    return (
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price) + (operation === "rent" ? "/mês" : "")
    );
  };

  const getOperationText = (operation: string) => {
    return operation === "sale" ? "Venda" : "Locação";
  };

  const getTypeText = (type: string) => {
    const types = {
      apartment: "Apartamento",
      house: "Casa",
      penthouse: "Cobertura",
      land: "Terreno",
      commercial: "Comercial",
    };
    return types[type as keyof typeof types] || type;
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite?.(property.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Image Carousel */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* Image Navigation */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 transition-opacity"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 transition-opacity"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex
                      ? "bg-white"
                      : "bg-white bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {property.featured && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              <Star className="h-3 w-3 mr-1" />
              Destaque
            </span>
          )}
          {property.isNew && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <Zap className="h-3 w-3 mr-1" />
              Novo
            </span>
          )}
          {property.priceReduced && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
              <Tag className="h-3 w-3 mr-1" />
              Baixou preço
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all"
        >
          <Heart
            className={`h-4 w-4 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>

        {/* Operation Badge */}
        <div className="absolute top-2 right-12">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              property.operation === "sale"
                ? "bg-blue-100 text-blue-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {getOperationText(property.operation)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Property Code and Price */}
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm text-gray-500 font-medium">
            Cód. {property.code}
          </span>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">
              {formatPrice(property.price, property.operation)}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">
            {property.neighborhood}, {property.city}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {property.shortDescription}
        </p>

        {/* Property Features */}
        {property.type !== "land" && (
          <div className="flex items-center justify-between text-gray-600 mb-4 text-sm">
            <div className="flex items-center space-x-4">
              {property.bedrooms > 0 && (
                <div className="flex items-center">
                  <Bed className="h-4 w-4 mr-1" />
                  <span>{property.bedrooms}</span>
                </div>
              )}
              {property.bathrooms > 0 && (
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  <span>{property.bathrooms}</span>
                </div>
              )}
              {property.garages > 0 && (
                <div className="flex items-center">
                  <Car className="h-4 w-4 mr-1" />
                  <span>{property.garages}</span>
                </div>
              )}
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{property.area}m²</span>
            </div>
          </div>
        )}

        {/* Type and Area for Land */}
        {property.type === "land" && (
          <div className="flex items-center justify-between text-gray-600 mb-4 text-sm">
            <span className="font-medium">{getTypeText(property.type)}</span>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{property.area}m²</span>
            </div>
          </div>
        )}

        {/* View Details Button */}
        <Link
          to={`/imovel/${property.id}`}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-center block font-medium"
        >
          Ver mais detalhes
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
