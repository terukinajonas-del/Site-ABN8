
import React from 'react';

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="text-center">
        <p className="text-4xl lg:text-5xl font-extrabold text-white">{value}</p>
        <p className="text-blue-200 mt-2">{label}</p>
    </div>
);

const SocialProofSection: React.FC = () => {
    return (
        <section className="py-20 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="bg-primary rounded-lg shadow-xl p-10 md:p-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <StatItem value="+16" label="Anos de mercado" />
                        <StatItem value="+100" label="Operações realizadas" />
                        <StatItem value="98%" label="Clientes satisfeitos" />
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">O que nossos clientes dizem</h2>
                    <div className="grid lg:grid-cols-3 gap-8 text-left">
                        {/* Placeholder for testimonials */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600 italic">"A ABN8 transformou nossa operação de importação. O processo foi transparente e muito mais econômico do que imaginávamos."</p>
                            <p className="font-bold text-primary mt-4">- CEO, Indústria de Alimentos</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600 italic">"Expertise e confiança definem o trabalho da ABN8. Eles cuidaram de tudo e nos mantiveram informados em cada etapa."</p>
                            <p className="font-bold text-primary mt-4">- Diretor, Varejo de Moda</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600 italic">"Conseguimos reduzir nossos custos logísticos em 15% graças à consultoria estratégica da equipe. Recomendo fortemente!"</p>
                            <p className="font-bold text-primary mt-4">- Gerente de Compras, Setor Esportivo</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProofSection;
