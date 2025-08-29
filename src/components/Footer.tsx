import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                className="h-8 w-8"
                src={logo}
                alt="Shadai Imobiliária Logo"
              />
              <span className="text-xl font-bold">Shadai Imobiliária</span>
            </div>
            <p className="text-gray-300 text-sm">
              Sua confiança é nosso patrimônio. Há mais de 20 anos realizando
              sonhos e conectando pessoas aos seus lares ideais.
            </p>
            <div className="text-sm text-gray-400">
              <p>CRECI: 12345-J</p>
              <p>CNPJ: 12.345.768/0001-99</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">
                  Av. Prof João Fiusa - Sala 545
                  <br />
                  Ribeirão Preto - SP, 14090-000
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">(16) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">(16) 99876-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">
                  contato@shadaiimobiliaria.com.br
                </span>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links úteis</h3>
            <div>
              <Link
                className="block text-sm text-gray-300 hover:text-blue-400 transition-colors"
                to="/imoveis"
              >
                Todos os imóveis
              </Link>
              <Link
                to="/imoveis?operation=sale"
                className="block text-sm text-gray-300 hover:text-blue-400 transition-colors"
              >
                Imóveis à venda
              </Link>
              <Link
                to="/imoveis?operation=rent"
                className="block text-sm text-gray-300 hover:text-blue-400 transition-colors"
              >
                Imóveis para Locação
              </Link>
              <Link
                to="/sobre"
                className="block text-sm text-gray-300 hover:text-blue-400 transition-colors"
              >
                Sobre a Empresa
              </Link>
              <Link
                to="/contato"
                className="block text-sm text-gray-300 hover:text-blue-400 transition-colors"
              >
                Fale Conosco
              </Link>
            </div>
          </div>

          {/* Legal & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Institucional</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-gray-300 hover:text-blue-400 transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="block text-sm text-gray-300 hover:text-blue-400 transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="block text-sm text-gray-300 hover:text-blue-400 transition-colors"
              >
                Código de Ética
              </a>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-3">Redes Sociais</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center">
            <p className="text-sm text-gray-400">
              @ {new Date().getFullYear()} Shadai Imobiliária. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-400 mt-2 md:m-0">
              {" "}
              Desenvolvido com ❤️ para conectar você ao seu lar dos sonhos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
