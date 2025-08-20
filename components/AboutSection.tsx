
import React from 'react';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

const Differentiator: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start space-x-3">
    <div className="flex-shrink-0">
      <CheckCircleIcon className="h-6 w-6 text-green-500" />
    </div>
    <span className="text-gray-700">{children}</span>
  </li>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-secondary font-semibold">QUEM SOMOS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary my-4">
              Mais de 10 anos de experiência no comércio internacional.
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A ABN8 conecta empresas brasileiras ao mercado global com segurança e agilidade. Do desembaraço alfandegário à entrega final, nossa missão é simplificar a importação e exportação, garantindo economia e previsibilidade para o seu negócio.
            </p>
            <ul className="space-y-4">
              <Differentiator>Assessoria completa e transparente</Differentiator>
              <Differentiator>Rede global de fornecedores confiáveis</Differentiator>
              <Differentiator>Redução de custos logísticos e tributários</Differentiator>
              <Differentiator>Acompanhamento digital em tempo real</Differentiator>
            </ul>
          </div>
          <div className="relative h-80 md:h-full rounded-lg overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/800/600?random=2" alt="Equipe ABN8 em reunião de logística" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
