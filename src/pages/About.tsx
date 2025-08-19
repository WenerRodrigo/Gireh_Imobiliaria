import React from 'react';
import { Award, Users, Shield, TrendingUp, Target, Eye, Heart, Building2 } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Anos de Experiência', value: '20+', description: 'Duas décadas de excelência' },
    { icon: Users, label: 'Clientes Satisfeitos', value: '5000+', description: 'Famílias felizes em seus novos lares' },
    { icon: Shield, label: 'Imóveis Vendidos', value: '2500+', description: 'Negócios realizados com sucesso' },
    { icon: TrendingUp, label: 'Taxa de Sucesso', value: '98%', description: 'Eficiência comprovada' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Confiança',
      description: 'Construímos relacionamentos duradouros baseados na transparência e honestidade em cada transação.'
    },
    {
      icon: Heart,
      title: 'Paixão',
      description: 'Somos apaixonados por conectar pessoas aos seus lares dos sonhos e fazer a diferença em suas vidas.'
    },
    {
      icon: Target,
      title: 'Excelência',
      description: 'Buscamos constantemente a perfeição em nossos serviços, superando expectativas a cada negócio.'
    },
    {
      icon: Users,
      title: 'Relacionamento',
      description: 'Valorizamos cada cliente como parte da nossa família, oferecendo atendimento personalizado e humanizado.'
    }
  ];

  const team = [
    {
      name: 'Ana Silva',
      role: 'Diretora Geral',
      creci: 'CRECI 12345-F',
      experience: '15 anos',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      name: 'Carlos Santos',
      role: 'Gerente de Vendas',
      creci: 'CRECI 23456-F',
      experience: '12 anos',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    {
      name: 'Marina Costa',
      role: 'Especialista em Locação',
      creci: 'CRECI 34567-F',
      experience: '8 anos',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    },
    {
      name: 'Roberto Lima',
      role: 'Consultor Sênior',
      creci: 'CRECI 45678-F',
      experience: '10 anos',
      image: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Building2 className="h-12 w-12 text-yellow-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold">
                Shadai Imobiliária
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Há mais de 20 anos realizando sonhos e conectando pessoas aos seus lares ideais
            </p>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 inline-block">
              <p className="text-lg">
                "Sua confiança é nosso patrimônio mais valioso"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa História</h2>
              <p className="text-gray-600 text-lg">
                Uma jornada de duas décadas construindo confiança e realizando sonhos
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg"
                  alt="Escritório Shadai Imobiliária"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Fundada em 2005, a Shadai Imobiliária nasceu do sonho de dois empreendedores visionários que acreditavam que encontrar o lar ideal deveria ser uma experiência especial e memorável. O que começou como um pequeno escritório no centro de São Paulo, hoje se tornou uma das principais referências do mercado imobiliário.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Ao longo dos anos, construímos nossa reputação baseada em três pilares fundamentais: confiança, excelência e relacionamento. Cada cliente atendido, cada imóvel vendido e cada sonho realizado nos motivam a continuar crescendo e inovando.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Hoje, com mais de 5.000 clientes satisfeitos e uma taxa de sucesso de 98%, continuamos fiéis à nossa missão original: conectar pessoas aos seus lares dos sonhos com o mais alto nível de profissionalismo e dedicação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Missão, Visão e Valores</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Missão</h3>
                <p className="text-gray-600">
                  Facilitar a realização do sonho da casa própria, oferecendo soluções imobiliárias personalizadas com excelência, transparência e comprometimento.
                </p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Eye className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Visão</h3>
                <p className="text-gray-600">
                  Ser reconhecida como a principal referência em soluções imobiliárias, destacando-se pela inovação, qualidade de serviços e satisfação dos clientes.
                </p>
              </div>

              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <Heart className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Propósito</h3>
                <p className="text-gray-600">
                  Transformar vidas através da conquista do lar ideal, criando memórias e construindo o futuro de famílias em todo o país.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center p-4">
                    <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
              <p className="text-gray-600 text-lg">
                Profissionais especializados e apaixonados pelo que fazem
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-1">{member.creci}</p>
                    <p className="text-sm text-gray-600">{member.experience} de experiência</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Certificações e Credenciais
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-200 rounded-lg">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">CRECI Registrado</h3>
                <p className="text-gray-600 text-sm">
                  Registro CRECI 12345-J válido e ativo no Conselho Regional de Corretores de Imóveis
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ISO 9001</h3>
                <p className="text-gray-600 text-sm">
                  Certificação internacional de qualidade em gestão e atendimento ao cliente
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">SECOVI-SP</h3>
                <p className="text-gray-600 text-sm">
                  Membro ativo do Sindicato das Empresas de Compra, Venda e Locação de São Paulo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Começar sua Jornada?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudá-lo a encontrar o imóvel dos seus sonhos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contato"
              className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Entre em Contato
            </a>
            <a
              href="/imoveis"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Ver Imóveis
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;