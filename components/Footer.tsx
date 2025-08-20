
import React from 'react';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { InstagramIcon } from './icons/InstagramIcon';

const Footer: React.FC = () => {
  const footerLinks = [
    { name: 'Quem Somos', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
    { name: 'Política de Privacidade', href: '#' },
  ];

  const socialLinks = [
    { icon: <FacebookIcon className="h-6 w-6" />, href: '#' },
    { icon: <InstagramIcon className="h-6 w-6" />, href: '#' },
    { icon: <LinkedinIcon className="h-6 w-6" />, href: '#' },
  ];

  return (
    <footer className="bg-dark text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">ABN8</h3>
            <p className="max-w-xs">Conectando empresas brasileiras ao mercado global com segurança e agilidade.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-2">
              <li><a href="tel:+5511999999999" className="hover:text-white transition-colors">Tel: (11) 99999-9999</a></li>
              <li><a href="mailto:contato@abn8.com" className="hover:text-white transition-colors">Email: contato@abn8.com</a></li>
              <li>WhatsApp: (11) 98888-8888</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Endereço</h4>
            <p>Av. Paulista, 1234, 5º andar</p>
            <p>São Paulo, SP - Brasil</p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} ABN8 Comércio Internacional. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
