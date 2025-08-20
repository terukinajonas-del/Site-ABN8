
import React from 'react';
import { GlobeIcon } from './icons/GlobeIcon';
import { ShipIcon } from './icons/ShipIcon';
import { PlaneIcon } from './icons/PlaneIcon';
import { ChartBarIcon } from './icons/ChartBarIcon';
import { CogIcon } from './icons/CogIcon';
import { PackageIcon } from './icons/PackageIcon';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
    <div className="text-accent mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <ShipIcon className="h-10 w-10" />,
      title: 'Importação sob medida',
      description: 'Gerenciamos todo o processo de importação, da busca por fornecedores à nacionalização do produto com total segurança.',
    },
    {
      icon: <PlaneIcon className="h-10 w-10" />,
      title: 'Exportação com segurança',
      description: 'Expandimos suas fronteiras, cuidando de toda a documentação e logística para que seu produto chegue ao mercado internacional.',
    },
    {
      icon: <ChartBarIcon className="h-10 w-10" />,
      title: 'Consultoria estratégica',
      description: 'Analisamos seu negócio e o mercado para traçar a melhor estratégia de comércio exterior, otimizando resultados.',
    },
    {
      icon: <GlobeIcon className="h-10 w-10" />,
      title: 'Logística integrada',
      description: 'Otimizamos sua cadeia de suprimentos com soluções logísticas eficientes, reduzindo custos e prazos de entrega.',
    },
    {
        icon: <PackageIcon className="h-10 w-10" />,
        title: 'Soluções por segmento',
        description: 'Desenvolvemos projetos personalizados para diversos setores: alimentos, bebidas, moda, esportes e muito mais.',
    },
    {
        icon: <CogIcon className="h-10 w-10" />,
        title: 'Desembaraço Aduaneiro',
        description: 'Navegamos pela complexidade das regulamentações alfandegárias para garantir liberações rápidas e sem surpresas.',
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold">NOSSOS SERVIÇOS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Soluções Completas para o Comércio Global</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
