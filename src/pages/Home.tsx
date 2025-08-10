import { ArrowRight, Award, Search, Shield, Star, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import type { SearchFilters } from "../types/Property";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";


const Home: React.FC = () => {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
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

  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);


  const handleToggleFavorite = (propertyId: string) => {
    const newFavorites = favorites.includes(propertyId)
    ? favorites.filter(id => id !== propertyId) : [...favorites, propertyId];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    Object.entries(searchFilters).forEach(([key, value]) => {
      if (value) searchParams.set(key, value);
    });
    window.location.href = `/imoveis?${searchParams.toString()}`;
  };

  const featuredProperties = properties.filter(p => p.featured).slice(0, 3);
  const recentProperties = properties.slice(0, 6);

  const stats = [
    { icon: Award, label: 'Anos de Experiência', value: '20+' },
    { icon: Users, label: 'Clientes Satisfeitos', value: '5000+' },
    { icon: Shield, label: 'Imóveis Vendidos', value: '2500+' },
    { icon: TrendingUp, label: 'Taxa de Sucesso', value: '98%' }
  ];

  return (
    <div className="min-h-sreen">
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Encontre o Imóvel dos Seus{" "}
              <span className="text-yellow-400">Sonhos</span>
            </h1>
            <p className="text--xl md:text-2xl mb-8">
              Há mais de 20 anos conectando pessoas aos seus lares ideais.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/imoveis"
                className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center space-x-2"
              >
                <Search className="h-5 w-5" />
                <span>Ver Todos os Imóveis</span>
              </Link>
              <Link
                to="/sobre"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Conheça Nossa História
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Busque Seu Imóvel Ideal
            </h2>
            <SearchBar 
              filters={searchFilters}
              onFiltersChange={setSearchFilters}
              onSearch={handleSearch}
            />
          </div>
        </div>
      </section>

      <section className="px-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Imóveis em Destaque
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Selecionamos os melores imóveis para você. Confira nossas
              oportunidades exclusivas.
            </p>
          </div>

          {/** Imóveis em Destaque */}
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                isFavorite={favorites.includes(property.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/imoveis"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>Ver Todos os Imóveis</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              );
            })}
            
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Imóveis Recentes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Confira os imóveis mais recentes do nosso portifólio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                isFavorite={favorites.includes(property.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Por que Escolher a Shadai Imobiliária?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white roudend-lg shadow-md">
                <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Experiência Comprovada
                </h3>
                <p className="text-gray-600">
                  Mais de 20 anos mercado imobiliária com milhares de negócios
                  realizados com sucesso.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Segurança Jurídica</h3>
                <p className="text-gray-600">
                  Todos os nossos imóveis passam por rigorosa análise documental garantindo sua tranquilidade.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4"/>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Atendimento Personalizado
                </h3>
                <p className="text-gray-600">
                  Nossa equipe especializada oferece suporte completo em todas as etapas da sua jornada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto py-4 text-center">
          <h2 className="text-3-xl font-bold mb-4">
            Pronto para Encontrar seu Novo Lar?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nossa equipe está preparada para ajudá-lo a encontrar o imóvel perfeito. Entre em contato conosco hoje mesmo!
          </p>
          <Link to="/contato"
          className="inline-flex items-center space-x-2 bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
          <span>Fale Conosco</span>
          <ArrowRight className="h-4 w-4"/>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
