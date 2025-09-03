import { Building2, Heart, Home, Mail, Menu, Users, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getClientConfig } from "../config/getClientConfig"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const config = getClientConfig();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: "/", label: "Início", icon: Home },
    { path: "/imoveis", label: "Imóveis", icon: Building2 },
    { path: "/sobre", label: "Quem Somos", icon: Users },
    { path: "/contato", label: "Contato", icon: Mail },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src={config.logo} alt={config.name} />
            </div>
            <span className="text-xl font-bold text-gray-900">
              {config.name}
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <Link
              to="/favoritos"
              className="flex items-center space-x-1 px-3 rounded-md text-sm font-meduim text-gray-700  hover:text-red-600 hover:bg-gray-50 transition-colors"
            >
              <Heart className="h-4 w-4" />
              <span>Favoritos</span>
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Overlay escuro atrás do menu */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu lateral */}
            <div className="relative w-64 bg-white shadow-xl h-full flex flex-col p-4 z-50">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-gray-700 hover:text-red-600"
              >
                <X className="h-6 w-6" />
              </button>

              <nav className="mt-8 flex flex-col space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.path)
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
                <Link
                  to="/favoritos"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors"
                >
                  <Heart className="h-4 w-4" />
                  <span>Favoritos</span>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
