import { Building2, Heart, Home, Mail, Menu, Users, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getClientConfig } from "../config/getClientConfig";

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
          {/* Logo + Nome */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src={config.logo} alt={config.name} />
            </div>
            <span
              className="text-xl font-bold"
              style={{ color: config.colors.primary }}
            >
              {config.name}
            </span>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  style={{
                    color: active ? config.colors.primary : "#374151",
                    backgroundColor: active
                      ? config.colors.secondary
                      : "transparent",
                  }}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <Link
              to="/favoritos"
              className="flex items-center space-x-1 px-3 rounded-md text-sm font-medium transition-colors"
              style={{ color: config.colors.primary }}
            >
              <Heart className="h-4 w-4" />
              <span>Favoritos</span>
            </Link>
          </nav>

          {/* Botão Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md"
            style={{ color: config.colors.primary }}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu lateral */}
            <div className="relative w-64 bg-white shadow-xl h-full flex flex-col p-4 z-50">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4"
                style={{ color: config.colors.primary }}
              >
                <X className="h-6 w-6" />
              </button>

              <nav className="mt-8 flex flex-col space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.path);

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                      style={{
                        color: active ? config.colors.primary : "#374151",
                        backgroundColor: active
                          ? config.colors.secondary
                          : "transparent",
                      }}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
                <Link
                  to="/favoritos"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  style={{ color: config.colors.primary }}
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
