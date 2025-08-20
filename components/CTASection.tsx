
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
          Pronto para importar ou exportar sem dor de cabeça?
        </h2>
        <p className="text-lg text-gray-700 mt-4 mb-8 max-w-3xl mx-auto">
          Fale agora com um especialista da ABN8 e descubra como reduzir custos e crescer sem burocracia.
        </p>
        <a 
          href="mailto:contato@abn8.com" 
          className="inline-block bg-accent text-white font-bold py-4 px-10 rounded-lg text-xl hover:opacity-90 transition-opacity shadow-lg"
        >
          Solicitar contato agora
        </a>
      </div>
    </section>
  );
};

export default CTASection;
