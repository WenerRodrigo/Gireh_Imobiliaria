import logoShadai from "../assets/logo.png";
import logoRibeirao from "../assets/logo-clienteX.png";

export const clients = {
  shadai: {
    name: "Shadai Imobiliária",
    logo: logoShadai,
    colors: {
      primary: "#1E3A8A",
      secondary: "#FACC15",
    },
    contact: {
      phone: "(16) 1234-5678",
      whatsapp: "(16) 99876-9999",
      email: "contato@shadaiimobiliaria.com.br",
      address: "Av. Prof João Fiusa - Sala 545, Ribeirão Preto - SP",
    },
    legal: {
      creci: "12345-J",
      cnpj: "12.345.678/0001-99",
    },
    seo: {
      title: "Shadai Imobiliária | Compra, Venda e Aluguel de Imóveis",
      description:
        "A Shadai Imobiliária oferece as melhores opções de imóveis para compra, venda e aluguel em Ribeirão Preto.",
    },
  },

  imobiliariaRibeirao: {
    name: "Imobiliária Ribeirão",
    logo: logoRibeirao,
    colors: {
      primary: "#333333", // vermelho
      secondary: "#DEDEDE", // verde
    },
    contact: {
      phone: "(11) 3333-3333",
      whatsapp: "(11) 98888-8888",
      email: "contato@imobiliariaribeirao.com.br",
      address: "Av. Paulista, 1000 - São Paulo - SP",
    },
    legal: {
      creci: "56789-J",
      cnpj: "98.765.432/0001-00",
    },
    seo: {
      title: "Imobiliária Ribeirão | Venda e Aluguel",
      description:
        "Imobiliária Ribeirão oferece imóveis de qualidade em São Paulo e região.",
    },
  },
};
