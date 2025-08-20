
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center" 
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=1')" }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-6 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-tight mb-4">
            Importação e exportação sob medida, com transparência, segurança e redução de custos.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Cresça sua empresa sem burocracia. Cuidamos de todo o processo — do fornecedor internacional até a sua porta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="bg-accent text-white font-bold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg">
              Fale com um especialista
            </a>
            <a href="#services" className="bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-secondary transition-colors shadow-lg">
              Conheça nossos serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
