import React, { useState, useEffect } from 'react';
import { Heart, Trash2 } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';
import type { Property } from '../types/Property';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [favoriteProperties, setFavoriteProperties] = useState<Property[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      const favoriteIds = JSON.parse(savedFavorites);
      setFavorites(favoriteIds);
      
      const favProps = properties.filter(property => 
        favoriteIds.includes(property.id)
      );
      setFavoriteProperties(favProps);
    }
  }, []);

  const handleToggleFavorite = (propertyId: string) => {
    const newFavorites = favorites.filter(id => id !== propertyId);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    
    setFavoriteProperties(prev => 
      prev.filter(property => property.id !== propertyId)
    );
  };

  const clearAllFavorites = () => {
    setFavorites([]);
    setFavoriteProperties([]);
    localStorage.removeItem('favorites');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Heart className="h-8 w-8 text-red-500" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Meus Favoritos</h1>
              <p className="text-gray-600">
                {favoriteProperties.length} {favoriteProperties.length === 1 ? 'imóvel salvo' : 'imóveis salvos'}
              </p>
            </div>
          </div>

          {favoriteProperties.length > 0 && (
            <button
              onClick={clearAllFavorites}
              className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
            >
              <Trash2 className="h-4 w-4" />
              <span>Limpar Todos</span>
            </button>
          )}
        </div>

        {/* Content */}
        {favoriteProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                isFavorite={true}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Nenhum favorito ainda
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Explore nossos imóveis e salve aqueles que mais te interessam clicando no ícone do coração.
            </p>
            <a
              href="/imoveis"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Explorar Imóveis
            </a>
          </div>
        )}

        {/* Tips */}
        {favoriteProperties.length > 0 && (
          <div className="mt-12 bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Dicas para seus favoritos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
              <div>
                <strong>• Compare preços:</strong> Use seus favoritos para comparar valores e encontrar as melhores oportunidades.
              </div>
              <div>
                <strong>• Agende visitas:</strong> Entre em contato conosco para agendar visitas aos imóveis de seu interesse.
              </div>
              <div>
                <strong>• Receba atualizações:</strong> Cadastre-se para receber notificações sobre mudanças de preço.
              </div>
              <div>
                <strong>• Compartilhe:</strong> Mostre seus favoritos para família e amigos para ter uma segunda opinião.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;