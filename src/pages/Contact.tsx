import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      details: [
        "Av. Paulista, 1234 - Sala 567",
        "Bela Vista, São Paulo - SP",
        "CEP: 01310-100",
      ],
    },
    {
      icon: Phone,
      title: "Telefones",
      details: ["(11) 3456-7890", "(11) 3456-7891", "Plantão: (11) 99999-9999"],
    },
    {
      icon: Mail,
      title: "E-mails",
      details: [
        "wener19.wr@gmail.com",
        "vendas@shadai.com.br",
        "locacao@shadai.com.br",
      ],
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      details: [
        "Segunda à Sexta: 8h às 18h",
        "Sábado: 9h às 14h",
        "Domingo: Plantão (emergências)",
      ],
    },
  ];

  const socialMedia = [
    { icon: Facebook, name: "Facebook", url: "#", color: "text-blue-600" },
    { icon: Instagram, name: "Instagram", url: "#", color: "text-pink-600" },
    { icon: Twitter, name: "Twitter", url: "#", color: "text-blue-400" },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      url: "https://wa.me/5516988093850",
      color: "text-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-blue-100">
              Estamos aqui para ajudá-lo a encontrar o imóvel dos seus sonhos.
              Fale conosco!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Contato Rápido
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+5511345678900"
                    className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Ligue Agora</p>
                      <p className="text-sm text-gray-600">(11) 3456-7890</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/5516988093850"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">WhatsApp</p>
                      <p className="text-sm text-gray-600">(11) 98809-3850</p>
                    </div>
                  </a>

                  <a
                    href="mailto:wener19.wr@gmail.com"
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="font-medium text-gray-900">E-mail</p>
                      <p className="text-sm text-gray-600">
                        wener19.wr@gmail.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Redes Sociais
                </h3>
                <p className="text-gray-600 mb-4">
                  Siga-nos nas redes sociais para ficar por dentro das novidades
                  e oportunidades!
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {socialMedia.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Icon className={`h-5 w-5 ${social.color}`} />
                        <span className="text-sm font-medium text-gray-700">
                          {social.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Horário de Atendimento
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Segunda à Sexta</span>
                    <span className="font-medium text-gray-900">8h às 18h</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Sábado</span>
                    <span className="font-medium text-gray-900">9h às 14h</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Domingo</span>
                    <span className="font-medium text-green-600">Plantão</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Plantão de Emergência:</strong> Atendemos
                    emergências de locação 24/7 pelo WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossa Localização
            </h2>
            <p className="text-gray-600">
              Visite nosso escritório no coração de São Paulo
            </p>
          </div>

          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="h-16 w-16 mx-auto mb-4" />
              <p className="text-lg font-medium">Mapa Interativo</p>
              <p>Av. Paulista, 1234 - Sala 567</p>
              <p>Bela Vista, São Paulo - SP</p>
              <div className="mt-4">
                <a
                  href="https://maps.google.com/?q=Av.+Paulista+1234+São+Paulo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-gray-600">
                Esclarecemos as dúvidas mais comuns dos nossos clientes
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Qual é o horário de atendimento?
                </h3>
                <p className="text-gray-600">
                  Atendemos de segunda a sexta das 8h às 18h, sábados das 9h às
                  14h. Para emergências de locação, temos plantão 24h pelo
                  WhatsApp.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Como posso agendar uma visita?
                </h3>
                <p className="text-gray-600">
                  Você pode agendar uma visita pelo telefone (11) 3456-7890,
                  WhatsApp ou preenchendo o formulário de contato. Respondemos
                  rapidamente!
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Vocês trabalham com financiamento?
                </h3>
                <p className="text-gray-600">
                  Sim! Temos parceria com diversos bancos e facilitamos todo o
                  processo de financiamento. Nossa equipe especializada te
                  orienta em cada etapa.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Posso anunciar meu imóvel com vocês?
                </h3>
                <p className="text-gray-600">
                  Claro! Fazemos avaliação gratuita do seu imóvel e oferecemos o
                  melhor plano de divulgação. Entre em contato para agendar uma
                  visita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
